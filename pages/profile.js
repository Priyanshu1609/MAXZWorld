import { useRouter } from 'next/router'


export default function Profile() {
    const router = useRouter();

    const handleNext = (e) => {
        e.preventDefault()
        router.push('/merchant/upload-documents')
    }
    const handlePrev = (e) => {
        e.preventDefault()
        router.push('/merchant/create-account')
    }


    return (
        <div className=" h-screen my-10">
            <div className="flex flex-col rounded-lg shadow-lg  overflow-hidden mx-auto max-w-lg  ">

                <div className="w-full p-4 md:p-8 py-4">
                    <h1 className="text-2xl font-semibold  text-left">Welcome to MAXZWorld </h1>
                    <h2 className="text-left">Create your company profile</h2>
                    

                    <div className="mt-4">
                        <label className="block  text-xs font-bold ">Company Name</label>
                        <input className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded  px-4 block w-full appearance-none py-1" type="text" />
                    </div>
                    <div className="mt-4">
                        <label className="block  text-xs font-bold ">Brand
                        Name</label>
                        <input className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded  px-4 block w-full appearance-none py-1" type="text" />
                    </div>
                    <div className="mt-4">
                        <label className="block  text-xs font-bold ">Building Address</label>
                        <input className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded  px-4 block w-full appearance-none py-1" type="text" />
                    </div>
                    <div className="mt-4">
                        <label className="block  text-xs font-bold ">Industry</label>
                        <input className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded  px-4 block w-full appearance-none py-1" type="text" />
                    </div>

                </div>


                <div className="p-8">
                    <button onClick={handleNext} className="border-2  font-bold py-2 px-4 w-full rounded hover:opacity-80 hover:border-dark">Submit</button>
                   
                </div>


            </div>
        </div>
    );
}

