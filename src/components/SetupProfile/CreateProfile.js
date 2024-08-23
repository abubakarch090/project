// import React from 'react';



// import HeaderP from './HeaderP';
// import Frame from './Frame.png'


import { useState } from 'react';

const CreateProfile = ({ setSelect }) => {

   

    const handleClick = () => {


        setSelect(4);
    };

    return (
        <>
            <div className='container bg-white mx-auto mt-20 mb-20 w-[90%] lg:w-1/2 h-auto rounded-lg p-6 shadow-lg'>
                <div className='flex flex-col items-center'>
                    <div className='mt-4 text-4xl text-center w-[80%] font-semibold font-sans'>
                        <h1>Hey Adam, Ready for your next big opportunity?</h1>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center mt-8'>
                    <div>
                        <h2>Build a profile to show the world what you can do</h2>
                    </div>
                    <hr className='mt-5 border-5 w-[80%] border-black' />
                    <div className='mt-3'>
                        <h2>Apply on jobs posted from clients, around the world</h2>
                    </div>
                    <hr className='mt-5 border-5 w-[80%] border-black' />
                    <div className='mt-3'>
                        <h2>Get paid safely and know we’re here to help</h2>
                    </div>

                    <button
                        onClick={handleClick} // Set step to 1 when the profile is created
                        className='bg-red-600 hover:bg-red-700 my-2 mt-9 p-2 w-[55%] rounded-full text-white font-bold text-lg'
                    >
                        Create Your Profile
                    </button>
                </div>
            </div>
        </>
    );
};

export default CreateProfile;
