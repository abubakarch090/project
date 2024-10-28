import React from 'react'
// import ProfileHeader from '../Tailwindprojects/ProfileHeader'
// import Client from './Client.png';
import VerificationSection from "@/Module/Clientprofilemodule/Verificationsection"
import ProfileSection from "@/Module/Clientprofilemodule/Profilesection"
import  JobCard from "@/Module/Clientprofilemodule/Jobcard"
const JobCreated = () => {
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
            {/* Main Content Section */}
            <div className="w-[85%] m-auto flex mt-5 space-x-2 ">

                {/* Job Created */}
                <div className='w-[70%] h-56 p-5 bg-white rounded-lg shadow-lg'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-lg font-semibold'>Your posting</h1>
                        <button className='px-4 py-2 border-red-300 border-2 text-red-500 rounded-full'>
                            View all jobs
                        </button>
                    </div>
                    <hr className='mt-3' />

                    <div className='mt-3'>
                        <h2 className='text-base font-medium'>
                            Russian Preschool Content - Categorisation
                        </h2>
                        <p className='text-sm text-gray-500 mt-1'>
                            Fixed-price - Intermediate - <br />
                            Est. Budget: $2,000 - Posted 8 hours ago
                        </p>
                    </div>

                    <div className='flex space-x-2 mt-1'>
                        <div>
                            <span className='text-gray-600 text-sm'>Proposals</span>
                            <p className='text-lg font-semibold'>24</p>
                        </div>

                        <div>
                            <span className='text-gray-600 text-sm'>Hired</span>
                            <p className='text-lg font-semibold'>01</p>
                        </div>
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
    )
}

export default JobCreated