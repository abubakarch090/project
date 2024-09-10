import React from 'react'
// import ProfileHeader from './ProfileHeader'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/router';

const Jobdetail = () => {
    const router = useRouter ();
    return (
        <>
            {/* <ProfileHeader /> */}
            <div className="container bg-blue-500 w-full flex flex-col items-center h-64">
                <div className='w-full mt-6'>
                    <div className='bg-white h-auto shadow-lg rounded-lg  w-[80%] m-auto'>
                        <div className='flex p-4 space-x-4'>
                            <ArrowBackIosNewIcon />
                            <h1>Back</h1>
                        </div>
                        <hr />
                        {/* Main Content Container */}
                        <div className="flex p-6 w-full">
                            {/* Left Section (Job Details) */}
                            <div className="flex flex-col mr-4 w-[70%] border-2 p-4 shadow-lg bg-slate-200 rounded-lg">
                                <h2 className="text-xl font-bold">Looking for a UX Web Designer/Russian Speakers only</h2>
                                <p className="text-gray-600 mt-2">Posted 3 hours ago</p>
                                <p className="text-lg font-bold mt-4">$10.00 USD</p>
                                <p className="text-gray-600">BIDDING ENDS IN 6 DAYS, 23 HOURS</p>
                                <div className="mt-4">
                                    <p>I need a website for a software development and services company. The company is a new startup, so the focus is on what we offer to provide, than what we did in the past.</p>
                                    <p className="mt-4">The key areas are -</p>
                                    <ul className="list-disc list-inside mt-2">
                                        <li>Digital Transformation work</li>
                                        <li>Platform modernization</li>
                                        <li>Maintenance and support</li>
                                        <li>Utility tool development</li>
                                        <li>Secure Data migration</li>
                                        <li>Round the clock support</li>
                                        <li>IT Consultancy</li>
                                    </ul>
                                    <p className="mt-4">Contents development is included in the job which should be finalized after review with me.</p>
                                </div>

                                <div className='mr-4 mt-2'>
                                    <h1 className='text-lg font-bold'>Skills and Expertise</h1>
                                    <input className='border-2 p-3 mt-2 w-full rounded-2xl' type="text" placeholder='Skills' />
                                </div>
                                <div className='mt-2'>
                                    <h1 className='text-lg font-bold'>Skills and Expertise</h1>
                                    <h2> Proposals: <span>15 to 20</span>  </h2>
                                    <h2>Last viewed by client:  3 minutes ago </h2>
                                    <h2>Interviewing: 0</h2>
                                    <h2>Invites sent: 0</h2>
                                    <h2>Unanswered invites: 0</h2>

                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="w-[30%] bg-slate-300 p-4 rounded-lg shadow-lg">
                                <button className="w-full bg-red-400 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 mb-4"
                                onClick={()=>router.push("/Proposalsubmit")}
                                >
                                    Submit a proposal           
                                </button>
                                <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-full hover:bg-red-300 transition duration-300">
                                    Saved the project
                                </button>
                                <div className="mt-4 text-gray-700">
                                    <p>Required Connects to submit a proposal: <strong>6</strong></p>
                                    <p>Available Connects: <strong>50</strong></p>
                                </div>
                                <hr />
                                <div>
                                    <h3 className="text-lg font-semibold">About the client</h3>
                                    <p className="text-gray-600 mt-2"> 📍 Manhattan, USA</p>
                                    <p className="text-gray-600">🕒 It's currently 4:45 PM here</p>
                                    <p className="text-gray-600">📅 Joined September 1, 2013</p>
                                </div>
                                <hr />


                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Jobdetail