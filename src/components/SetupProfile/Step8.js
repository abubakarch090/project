import Back from "./Back";


const Step8 = ({ setSelect }) => {




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

                <Back setSelect={setSelect} number={10} />

                <div className='h-2 rounded-lg  bg-gray-300 mt-20 w-[90%] mx-auto'>
                    <div className='h-2 bg-red-500 w-[100%]  rounded-lg'></div>
                </div>

                <div className='w-[90%] mx-auto mt-4'>
                    <h1 className='font-bold text-2xl font-sans'>Add contact information.</h1>
                    <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.</p>
                </div>

                <div className="w-[90%] mt-4">
                    <div className="mx-auto rounded-full  border-4 w-[120px] h-[120px] '">

                    </div>

                    <div className="mx-auto rounded-full  border-2 w-[40%] h-14 mt-4 '">
                        <input type="file" />
                    </div>




                </div>
                <div className="grid grid-cols-2 w-[90%] m-auto gap-3 mt-4 ">
                    <div className=''>
                        <h2>First Name</h2>
                        <input className='border-2 w-full px-2 py-1 rounded-lg mt-2' type="text" />
                    </div>
                    <div className=''>
                        <h2>Last Name</h2>
                        <input className='border-2 w-full px-2 py-1 rounded-lg mt-2' type="text" />
                    </div>
                </div>

                <div className="w-[90%] m-auto mt-4">
                    <h2>Address</h2>
                    <input className='w-full px-2 py-1 border-2 rounded-lg mt-2' type="text" />
                </div>

                <div className="grid grid-cols-2 w-[90%] m-auto gap-3 mt-4 ">

                    <div className=''>
                        <h2>City Name</h2>
                        <select className='border-2 w-full px-2 py-1 rounded-lg mt-2' name="" id="">
                            <option >EG:Lahore</option>
                        </select>
                    </div>

                    <div className=''>
                        <h2>Country</h2>
                        <select className='border-2 w-full px-2 py-1 rounded-lg mt-2' name="" id="">
                            <option >EG:Lahore</option>
                        </select>
                    </div>

                </div>


                <div className="grid grid-cols-2 w-[90%] m-auto gap-3 mt-4 ">
                    <div className=''>
                        <h2>Zip code/ Pincode</h2>
                        <input className='border-2 w-full px-2 py-1 rounded-lg mt-2' type="text" />
                    </div>
                    <div className=''>
                        <h2>Phone number</h2>
                        <input className='border-2 w-full px-2 py-1 rounded-lg mt-2' type="text" />
                    </div>
                </div>

                <div className='flex justify-center'>

                    <button className='bg-red-600 hover:bg-red-700 my-2 mt-12 p-2 w-[55%] rounded-full text-white  text-lg'>
                        Next
                    </button>

                </div>

            </div>
        </>
    );
}

export default Step8;