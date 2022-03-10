import { useRouter } from 'next/router'

export default function Register3() {

    const router = useRouter();

    const handleNext = (e) => {
        e.preventDefault()
        router.push('/merchant/success')
    }
    const handlePrev = (e) => {
        e.preventDefault()
        router.push('/merchant/company-info')
    }


    return (

        <div className=" bg-dark h-screen  ">

            <div className=" flex flex-col bg-dark rounded-lg shadow-lg  overflow-hidden mx-auto max-w-lg  w-full p-4 md:p-8 py-4">

                <h2 className="text-2xl font-semibold text-white text-left">Upload Documents</h2>
                <p className="mt-2 text-sm text-gray-400">Verify your account by submiting the following supported documents</p>
                <div className="text-white text-sm mt-3">
                    <div className="flex mt-2">
                        <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                        <p className="pt-1 -mt-3">SEC/DTI</p>
                    </div>
                    <div className="flex mt-3">
                        <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                        <p className="pt-1 -mt-3">Business Permit</p>
                    </div>
                    <div className="flex mt-3">
                        <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                        <p className="pt-1 -mt-3">TIN</p>
                    </div>
                </div>

                <form className="mt-8 space-y-3" action="#" >
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm  text-white tracking-wide">Attach Document</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col rounded-lg border-2 border-dashed w-full h-60 p-10 group text-center border-gold">
                                <div className="h-full w-full text-center flex flex-col items-center justify-center  ">

                                    <div className="flex flex-auto max-h-48 w-2/5 mx-auto items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                    </div>
                                    <p className="pointer-none text-gray-300 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-gold hover:underline">select a file</a> from your computer</p>
                                </div>
                                <input type="file" className="hidden" />
                            </label>
                        </div>
                    </div>

                    <div className="px-8 pt-8">
                        <button onClick={handleNext} className="bg-gold text-black font-bold py-2 px-4 w-full rounded hover:opacity-80" type="submit">Next</button>
                        <button onClick={handlePrev} className="bg-dark-500 text-white font-bold py-2 px-4 w-full rounded hover:opacity-80 mt-4" >Prev</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
