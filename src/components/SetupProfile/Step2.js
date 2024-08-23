import { useState } from "react";
import Back from "./Back";

const Step2 = ({text, text2 , placeholder1 , placeholder2 , placeholder3 ,
     setSelect,number, handleClick , width }) => {

       
       
            

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

               
                

                <Back setSelect={setSelect} number={number} />

                <div className='h-2 rounded-lg  bg-gray-300 mt-20 w-[90%] mx-auto'>
                    <div className={`h-2 bg-red-500 ${width}  rounded-lg`}></div>
                    {/* template literal */}
                </div>

                <div className='w-[90%] mx-auto mt-4'>
                    <h1 className='font-bold text-2xl font-sans'>{text}</h1>
                    <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.</p>
                </div>

                <div className="w-[90%] m-auto mt-4">
                <h2 className="text-lg font-bold">{text2} </h2>
                    <div className="mx-2 ">

                    <input className="border-2 rounded-lg w-full text-center mt-3 p-2" type="text" placeholder={placeholder1} /> <br/>
                    <input className="border-2 rounded-lg w-full text-center mt-2 p-2" type="text" placeholder={placeholder2}  /> <br/>
                    <input className="border-2 rounded-lg w-full text-center mt-2 p-2" type="number" placeholder={placeholder3}  />

                    </div>
                </div>

                <div className="flex w-[90%] m-auto mt-2 ">
                    <input type="checkbox" />
                    <h2 className='m-2 text-sm'>No experience yet.</h2>
                </div>


                <div className='flex justify-center'>

                    <button onClick={handleClick}  className='bg-red-600 hover:bg-red-700 my-2 mt-8 p-2 w-[55%] rounded-full text-white  text-lg'>
                        Next
                    </button>

                </div>

            </div>
        </>
    );
}

export default Step2;