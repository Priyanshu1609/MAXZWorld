import React, { useState } from 'react';
import { useMoralis } from "react-moralis";

function AddBrand(){
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
            // brand.set("Name", inputs.brandName);
            // brand.set("Status","Active");
            // brand.set("contractAddress", inputs.contractAddress);
            // brand.set("logo", moralisFile);
            // brand.set("category", inputs.category);
            await brand.saveIPFS()
            // await brand.save()
            .then((brand) => {
                // Execute any logic that should take place after the object is saved.
                console.log('New campaign created with objectId: ' + brand.id);
            }, (error) => {
                // Execute any logic that should take place if the save fails.
                // error is a Moralis.Error with an error code and message.
                console.log('Failed to create new object, with error code: ' + error.message);
            });

            console.log(brand.ipfs(), brand.hash())

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
    <div>
        {isAuthenticated ? (
            <form onSubmit={createBrand} className="w-full p-10 border-2 m-5 rounded-lg inline-block max-w-xl">
               
                <h1 className="text-center font-bold">Campaign Details</h1>
                <p>Fill in the details below</p>
                <div className="mb-6">
                    <label htmlFor="brandName" className="block mb-2 text-sm font-medium text-gray-900 ">Campaign Name</label>
                    <input onChange={changeHandler} type="text" name="brandName" id="brandName" className="shadow-sm bg-gray-50 block w-full p-2.5 border text-sm rounded-lg outline-none" placeholder="McDonalds" required="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="contractAddress" className="block mb-2 text-sm font-medium text-gray-900 ">Start Date</label>
                    <input   type="text" name="contractAddress" id="contractAddress" className="shadow-sm bg-gray-50 block w-full p-2.5 border text-sm rounded-lg outline-none" placeholder="01/02/2002" required="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="contractAddress" className="block mb-2 text-sm font-medium text-gray-900 ">End Date</label>
                    <input   type="text" name="contractAddress" id="contractAddress" className="shadow-sm bg-gray-50 block w-full p-2.5 border text-sm rounded-lg outline-none" placeholder="01/03/2002" required="" />
                </div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Blockchain</label>
                <select  onChange={changeHandler}  defaultValue="0" name="category" id="category" className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5">
                    <option value="0" hidden="">Please select a chain</option>
                    <option value="1">Ethereum</option>
                    <option value="2">Polygon</option>
                    <option value="3">Solana</option>
                    <option value="4">Tezos</option>
                </select>
                {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="user_avatar">Upload Logo</label>
                <input onChange={handleChange} className="block w-full text-sm rounded-lg border bg-gray-50 border-gray-300 cursor-pointer " aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                {isSelected ? (
                        <img src={URL.createObjectURL(selectedFile)} alt="" />
                    ) : (
                        <p>Select a Logo</p>
                    )
                } */}
                <div className="mb-6 mt-4">
                    <label htmlFor="contractAddress" className="block mb-2 text-sm font-medium text-gray-900 ">Game Budget</label>
                    <input   type="text" name="contractAddress" id="contractAddress" className="shadow-sm bg-gray-50 block w-full p-2.5 border text-sm rounded-lg outline-none" placeholder="1000 USDC" required="" />
                </div>
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
export default AddBrand;