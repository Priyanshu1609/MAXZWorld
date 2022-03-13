import React, { useState } from 'react';
import { useMoralis } from "react-moralis";

function AddBudjet(){
    const { Moralis, isAuthenticated } = useMoralis();
    const [inputs, setInputs] = useState({});
    const [isSelected, setIsSelected] = useState(false);
    const [selectedFile, setSelectedFile] = useState("");
    
    const createBrand = async (event) => {
        event.preventDefault();
        await getBase64(selectedFile, async (document) => {
            const moralisFile = new Moralis.File(selectedFile.name, { base64: document });
            await moralisFile.save().then(function() {
                console.log(moralisFile.url());
            }, function(error) {
                console.log("Error: ", error);
            });
            const brand = new Moralis.Object("Brand");
            brand.set("Name", inputs.brandName);
            brand.set("Status","Active");
            brand.set("contractAddress", inputs.contractAddress);
            brand.set("logo", moralisFile);
            brand.set("category", inputs.category);
            await brand.save()
            .then((brand) => {
                // Execute any logic that should take place after the object is saved.
                console.log('New campaign created with objectId: ' + brand.id);
            }, (error) => {
                // Execute any logic that should take place if the save fails.
                // error is a Moralis.Error with an error code and message.
                console.log('Failed to create new object, with error code: ' + error.message);
            });
        });
    }
    const handleChange = (event) => {
        if(event.target.files.length){
		    setSelectedFile(event.target.files[0]);
            setIsSelected(true);

        } else{
            setIsSelected(false);

        }
    }
    async function getBase64(file, _callback) {
        let document = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            document = reader.result;
            _callback(document);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
	};
    return (
    <div className='max-w-xl '>
        {isAuthenticated ? (
            <form onSubmit={createBrand} className="h-auto p-10 border-2 m-5 rounded-lg inline-block">
                <h1 className="text-center font-bold">Campaign Details</h1>
                <div className="mb-6">
                    <label htmlFor="brandName" className="block mb-2 text-sm font-medium text-gray-900 ">Brand Name</label>
                    <input onChange={changeHandler} type="text" name="brandName" id="brandName" className="shadow-sm bg-gray-50 block w-full p-2.5 border text-sm rounded-lg outline-none" placeholder="McDonalds" required="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="contractAddress" className="block mb-2 text-sm font-medium text-gray-900 ">Contract Address</label>
                    <input  onChange={changeHandler} type="text" name="contractAddress" id="contractAddress" className="shadow-sm bg-gray-50 block w-full p-2.5 border text-sm rounded-lg outline-none" placeholder="0x3DA9193...3E1" required="" />
                </div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a Category</label>
                <select  onChange={changeHandler}  defaultValue="0" name="category" id="category" className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5">
                    <option value="0" hidden="">Please select a category</option>
                    <option value="1">Food</option>
                    <option value="2">Automobiles</option>
                    <option value="3">Retail</option>
                    <option value="4">Wholesale</option>
                </select>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="user_avatar">Upload Logo</label>
                <input onChange={handleChange} className="block w-full text-sm rounded-lg border bg-gray-50 border-gray-300 cursor-pointer " aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                {isSelected ? (
                        <img src={URL.createObjectURL(selectedFile)} alt="" />
                    ) : (
                        <p>Select a Logo</p>
                    )
                }
                <div className="mt-3">
                    <input type="submit" className="text-black text-sm font-semibold border px-4 py-2 rounded-lg hover:text-black hover:border-black"/>
                </div>
            </form>
        ) : (
            <p>Please Log in first</p>
        )}
    </div>
    );
}
export default AddBudjet;