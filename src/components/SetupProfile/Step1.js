
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import Back from './Back';

const Step1 = ({ setSelect   }) => {

    

    const handleClick = () => {
        setSelect(5)  
    }

    return (
        <>

            <div className='container bg-white mx-auto mt-20 mb-20  w-[90%] lg:w-1/2 h-auto rounded-lg p-6 shadow-lg'>


                <div className='flex '>
                    <div className='mx-6 bg-blue-400 rounded-full p-1 w-8 h-8 text-center text-white font-semibold'>
                        M
                    </div>
                    <div className='w-[80%] flex justify-center font-semibold text-lg'>
                        <h2>Create Profile</h2>
                    </div>


                </div>


                
                
                <Back setSelect={setSelect} number={3}  />


                <div className='h-2 rounded-lg  bg-gray-300 mt-20 w-[90%] mx-auto'>
                    <div className='h-2 bg-red-500 w-[12%]  rounded-lg'></div>
                </div>

                <div className='w-[90%] mx-auto mt-4'>
                    <h1 className='font-bold text-2xl font-sans'>First, add a title to tell the world what you do.</h1>
                    <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.</p>
                </div>

                <div className='mx-auto w-[90%] mt-4'>
                    <input className='w-[100%] border-2 p-2 rounded-xl' type="text" placeholder='Example:Example: Web developer | Web & Mobile' />
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

export default Step1;