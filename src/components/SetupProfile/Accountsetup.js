import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";  // Import AOS styles

const Accountsetup = ({ setSelect, formData, setFormData }) => {

  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with 1000ms duration
  }, []);

  return (
    <>
      <div className="container bg-white mx-auto mt-20 mb-20 w-[90%] lg:w-1/2 h-auto rounded-lg p-6 shadow-lg" data-aos="zoom-in">
        <h1 className='text-center text-2xl font-bold' data-aos="fade-up">Complete your free account setup</h1>

        <div className="form flex justify-center mt-7" data-aos="fade-right">
          <div className='flex justify-center items-center'>
            <div className='text-bold bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center'>
              M
            </div>
            <span className='mx-4'></span>
          </div>
        </div>

        <div className="input md:mx-20 mt-7 p-1 md:flex gap-3 w-full md:w-[80%]" data-aos="fade-up">
          <input
            className='w-full lg:mx-6 border-2 rounded-lg px-2 py-1 mb-1 md:m-0'
            type="text"
            placeholder='First Name'
            onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
          />
          <input
            className='w-full border-2 rounded-lg px-2 py-1'
            type="text"
            placeholder='Last Name'
            onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
          />
        </div>

        <div className="mt-5 mx-20" data-aos="fade-left">
          <select
            className="w-[100%] p-2 border-2 rounded-md mx-7"
            onChange={(e) => setFormData({ ...formData, choosecountry: e.target.value })}
          >
            <option>Choose your country</option>
            <option value="PAK">Pakistan</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="in">India</option>
          </select>
        </div>

        <div className='text-center' data-aos="fade-up">
          <h2 className='font-bold mt-4'>I am a :</h2>
          <div className='grid grid-cols-2 w-[50%] m-auto gap-3 mt-3'>
            <div className='border-2 rounded-lg'>
              <input
                className='mx-2'
                type="radio"
                value="Freelancer"
                name="userType"
                onChange={(e) => setFormData({ ...formData, member: e.target.value })}
              />Freelancer
            </div>

            <div className='border-2 rounded-lg'>
              <input
                className='mx-2'
                type="radio"
                value="Client"
                name="userType"
                onChange={(e) => setFormData({ ...formData, member: e.target.value })}
              />Client
            </div>
          </div>
        </div>

        <div className="check mx-20 mt-6 flex items-start" data-aos="fade-up">
          <input
            className="mx-2 mt-2 h-4"
            type="checkbox"
            onChange={(e) => setFormData({ ...formData, termsconditions: e.target.checked })}
          />
          <span className="w-[90%]">
            Yes! Send me genuinely useful emails every now and then to help me get the most out of Upwork.
          </span>
        </div>

        <div className="check mx-20 mt-4 flex items-start" data-aos="fade-up">
          <input
            className='mx-2 mt-2 h-4'
            type="checkbox"
            onChange={(e) => setFormData({ ...formData, termsconditions: e.target.checked })}
          />
          <span>Yes, I understand and agree to the
            <span className='text-red-500'> UPTECHUNT Terms of Service</span>, including the
            <span className='text-red-500'> User Agreement and Privacy Policy.</span>
          </span>
        </div>

        <div className="flex justify-center" data-aos="zoom-in">
          <button
            onClick={() => { setSelect(3); }}
            className='bg-red-600 hover:bg-red-700 my-2 mt-9 p-2 w-[55%] rounded-full text-white font-bold text-lg'>
            Create New Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Accountsetup;
