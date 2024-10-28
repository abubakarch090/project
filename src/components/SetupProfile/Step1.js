
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState, useEffect } from 'react';
import Back from './Back';
import AOS from "aos";
import "aos/dist/aos.css";  // Import AOS styles

const Step1 = ({ setSelect, formData, setFormData }) => {

  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with 1000ms duration
  }, []);

  return (
    <>
      <div className='container bg-white mx-auto mt-20 mb-20 w-[90%] lg:w-1/2 h-auto rounded-lg p-6 shadow-lg' data-aos="fade-up">
        <div className='flex ' data-aos="zoom-in">
          <div className='mx-6 bg-blue-400 rounded-full p-1 w-8 h-8 text-center text-white font-semibold'>
            M
          </div>
          <div className='w-[80%] flex justify-center font-semibold text-lg'>
            <h2>Create Profile</h2>
          </div>
        </div>

        <Back setSelect={setSelect} number={3} />

        <div className='h-2 rounded-lg bg-gray-300 mt-20 w-[90%] mx-auto' data-aos="fade-right">
          <div className='h-2 bg-red-500 w-[12%] rounded-lg'></div>
        </div>

        <div className='w-[90%] mx-auto mt-4'>
          <h1 className='font-bold text-2xl font-sans' data-aos="fade-left">First, add a title to tell the world what you do.</h1>
          <p className='mt-4 text-sm' data-aos="fade-right">Add Some Skills Title Name </p>
        </div>

        <div className='mx-auto w-[90%] mt-4'>
          <input
            className='w-[100%] border-2 p-2 rounded-xl'
            type="text"
            placeholder='Artist | Drawing and Sketching | Painting'
            onChange={(e) => setFormData({ ...formData, skillstitle: e.target.value })}
            data-aos="zoom-in"
          />
        </div>

        <div className='flex justify-center'>
          <button
            onClick={() => { setSelect(5); }}
            className='bg-red-600 hover:bg-red-700 my-2 mt-12 p-2 w-[55%] rounded-full text-white text-lg'
            data-aos="fade-up"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Step1;
