import { useRouter } from "next/router"


const LoginModule = () => {
    const router=useRouter();
    return (
        <>

            <div className='container bg-white mx-auto mt-20 mb-20 w-[90%] lg:w-1/2 h-auto rounded-lg p-6 shadow-lg'>

                <div className='flex flex-col items-center'>

                    <div className="heading">
                        <h2 className="text-center mb-4  text-2xl font-bold">Log in to your account</h2>
                    </div>
                    <div className=' w-[90%] lg:w-[75%] m-auto'>


                        <div className="input w-full m-auto">
                            <input
                                className="px-4 h-12 my-2 border-2  w-full rounded-lg "
                                type="text"
                                placeholder='Email address'
                            />
                        </div>

                        <div className="input ">
                            <input
                                className="px-4 h-12 my-2 border-2 w-full rounded-lg "
                                type="password"
                                placeholder='Password'
                            />
                        </div>

                    </div>

                    <button className='bg-red-600 hover:bg-red-700 my-2 p-2 w-[90%] lg:w-3/4 rounded-full text-white font-bold text-lg'>
                        Login
                    </button>

                    <div>
                        <h2 className=' my-2'>Don’t have account? <span className=' text-red-500 hover:underline cursor-pointer'
                        onClick={()=>router.push("/Signup")}
                        >Sign up</span></h2>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginModule