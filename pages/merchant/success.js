import Router, { useRouter } from "next/router"

const success = () => {
    const router = useRouter();

    return (
        <div className="bg-dark h-screen ">
            <div className="flex flex-col bg-dark rounded-lg shadow-lg  overflow-hidden mx-auto max-w-lg ">
                <div className="w-full p-4 md:p-8 py-4">
                    <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                        <path fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                        </path>
                    </svg>
                    <div className="text-center">
                        <h3 className="md:text-2xl text-base text-white font-semibold text-center">Success</h3>
                        <p className="text-white my-2">Your account has been successfully created.</p>
                        <button 
                        onClick={() => router.push('/merchant/login')}
                        className="bg-gold text-black font-bold py-2 px-4 w-full rounded hover:opacity-80">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default success
