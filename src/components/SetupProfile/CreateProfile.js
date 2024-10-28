// import React from 'react';



// import HeaderP from './HeaderP';
// import Frame from './Frame.png'


import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";  // Import AOS styles

const CreateProfile = ({ setSelect, FName, LName }) => {

  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with 1000ms duration
  }, []);

  return (
    <>
      <div className='container bg-white mx-auto mt-20 mb-20 w-[90%] lg:w-1/2 h-auto rounded-lg p-6 shadow-lg' data-aos="zoom-in">
        <div className='flex flex-col items-center'>
          <div className='mt-4 text-4xl text-center w-[80%] font-semibold font-sans' data-aos="fade-up">
            <h1> Hey {FName} {LName}, Ready for your next big opportunity?</h1>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center mt-8'>
          <div data-aos="fade-right">
            <h2>Build a profile to show the world what you can do</h2>
          </div>
          <hr className='mt-5 border-5 w-[80%] border-black' data-aos="fade-left" />
          <div className='mt-3' data-aos="fade-right">
            <h2>Apply on jobs posted from clients around the world</h2>
          </div>
          <hr className='mt-5 border-5 w-[80%] border-black' data-aos="fade-left" />
          <div className='mt-3' data-aos="fade-right">
            <h2>Get paid safely and know we’re here to help</h2>
          </div>

          <button
            onClick={() => { setSelect(4); }}
            className='bg-red-600 hover:bg-red-700 my-2 mt-9 p-2 w-[55%] rounded-full text-white font-bold text-lg'
            data-aos="zoom-in"
          >
            Create Your Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateProfile;

