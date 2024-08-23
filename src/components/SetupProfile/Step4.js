import Back from "./Back";


const Step4 = ({setSelect}) => {
        const handleClick=()=>{
            setSelect(8)
        }

    return (
        <>

            


            <div className='container bg-white mx-auto mt-20 mb-20 w-[90%] lg:w-1/2 h-auto rounded-lg p-6 shadow-lg'>

                <div className='flex '>
                    <div className='mx-6 bg-blue-400 rounded-full p-1 w-8 h-8 text-center text-white font-semibold'>
                        M
                    </div>
                    <div className='w-[80%] flex justify-center font-semibold text-lg'>
                        <h2>Create Profile</h2>
                    </div>

                </div>

                    <Back setSelect={setSelect} number={6}   />

                <div className='h-2 rounded-lg  bg-gray-300 mt-20 w-[90%] mx-auto'>
                    <div className='h-2 bg-red-500 w-[48%]  rounded-lg'></div>
                </div>

                <div className='w-[90%] mx-auto mt-4'>
                    <h1 className='font-bold text-2xl font-sans'>Add languages.</h1>
                    <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.</p>
                </div>
                
                <div className="w-[90%] m-auto mt-4">
                    <input className='border-2  w-full py-1 px-2 rounded-full' type="file" />
                </div>


                <div className='flex w-[90%] m-auto gap-4 mt-4  '>
                    <h2 className='text-md font-semibold mt-1'>English</h2>
                    <select className='w-[40%] rounded-md px-2 py-1 border-2' name="" id="">
                        <option value="">My Level Is</option>
                    </select>
                </div>
                <div className='flex w-[90%] m-auto gap-4 mt-4 '>
                    <h2 className='text-md font-semibold mt-1'>Spanish</h2>
                    <select className='w-[40%] rounded-md px-2 py-1 border-2' name="" id="">
                        <option value="">Fluent</option>
                    </select>
                </div>

                

                <div className='flex justify-center'>

                    <button onClick={handleClick} className='bg-red-600 hover:bg-red-700 my-2 mt-12 p-2 w-[55%] rounded-full text-white  text-lg'>
                        Next
                    </button>

                </div> 

            </div>
        </>
    );
}

export default Step4;