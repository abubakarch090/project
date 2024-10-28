import React from 'react'; 
import { FaSearch } from "react-icons/fa";

import ProfileSection from './Profilesection';
import VerificationSection from './Verificationsection';
import JobCard from './Jobcard';
const ClientHomePage = () => {
    return (
        <>
            {/* <ProfileHeader /> */}

            {/* Header Section */}
            <div className='flex w-[85%] m-auto justify-between mt-4 items-center'>
                <h1 className='text-3xl'>Welcome <span className='font-bold text-red-500'>Adam Smith</span></h1>
                <button className='border-2 px-6 py-2 rounded-full bg-red-500 hover:bg-gray-300 text-white '>
                    Post A New Job
                </button>
            </div>

            {/* Search Section */}
            <div className='w-[60%] m-auto mt-4 flex relative'>
                <input
                    type='text'
                    placeholder='Search talent here'
                    className='w-full p-3 pl-10 rounded-full border-2 border-gray-300 '
                />
                <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400' />
            </div>

            {/* Main Content Section */}
            <div className="w-[85%] m-auto flex mt-5 space-x-2 ">

                {/* Job Post Section */}
                <div className='w-[70%] h-52 p-5 bg-white rounded-lg shadow-lg flex justify-between'>
                    <div>
                        <h1 className='font-bold text-3xl mb-4'>No job post</h1>
                        <p className='mb-4 text-lg'>You have not posted any job, post your job and find world’s best talent here.</p>
                        <button className='border-2 px-8 py-3 rounded-full bg-red-500 hover:bg-gray-300 text-white transition-colors duration-300'>
                            Post A New Job
                        </button>
                    </div>
                    <div>
                        <img src="/Client.png" alt="Client illustration" className="h-44" />
                    </div>

                </div>

                <hr />

                {/* Profile and Extra Sections */}
                <div className="w-[30%] space-y-4 mb-3">

                    {/* Profile Section */}
                    <ProfileSection />

                    {/* Verification Section */}
                    <VerificationSection />

                    {/* {job card} */}
                    <JobCard />


                </div>
            </div>
        </>
    );
};

export default ClientHomePage;
