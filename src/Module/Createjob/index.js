import React from 'react'
// import ProfileHeader from '../Tailwindprojects/ProfileHeader'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/router';

const CreateJob = () => {
    const router = useRouter();
    return (
        <>
            {/* <ProfileHeader /> */}
            <div className="container w-[90%] m-auto bg-white shadow-lg mt-4 rounded-lg p-6 mb-5">
                {/* Back Button */}
                <div className="flex items-center space-x-2 mb-4">
                    <ArrowBackIosNewIcon className="text-gray-600" />
                    <h1 className="text-gray-600">Back</h1>
                </div>

                {/* Job Title Input */}
                <div className="mb-4">
                    <label className="block text-lg font-bold text-gray-700">Job title</label>
                    <input
                        type="text"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        placeholder="ex. need Web developer "
                    />
                </div>

                {/* Project Description */}
                <div className="mb-4">
                    <label className="block text-lg font-bold text-gray-700">Describe about the project</label>
                    <textarea
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        rows="4"
                        placeholder="Write here"
                    />
                </div>

                {/* Skills Section */}
                <div className="mb-4">
                    <label className="block text-lg font-bold text-gray-700">Skills</label>
                    <div className="flex flex-wrap gap-2 mt-2">

                    </div>
                    <input
                        type="text"
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md"

                    />
                    <h1 className='font-semibold text-end mt-2'>Add 10 skills</h1>
                </div>
                <hr />

                {/* Timeline Estimation */}
                <div className=" mt-5">
                    <label className="block text-md font-bold text-gray-700">Estimate your timeline here</label>
                    <div className="flex items-center mt-2 space-x-4">
                        <label className="flex items-center">
                            <input type="radio" name="timeline" className="mr-2" /> Small
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="timeline" className="mr-2" /> Medium
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="timeline" className="mr-2" /> Large
                        </label>
                    </div>
                    <div className=' mt-5'>
                        <h1 className='font-bold text-sm'>How Long You Take Your Work?</h1>
                        <select className="w-[30%] mt-2 p-2 border border-gray-300 rounded-md">

                            <option>Ex: 1-6 months</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
                <hr className='mt-5' />

                {/* Expertise */}
                <div className=" mt-2">
                    <label className="block text-md font-bold text-gray-700">Expertise level you want</label>
                    <div className="flex items-center mt-2 space-x-4">
                        <label className="flex items-center">
                            <input type="radio" name="timeline" className="mr-2" /> Fresh
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="timeline" className="mr-2" /> Medium
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="timeline" className="mr-2" /> Experienced
                        </label>
                    </div>
                </div>
                <hr className='mt-5' />

                {/* Budget Section */}
                <div className="mt-5">
                    <label className="block text-md font-bold text-gray-700">Tell us about your budget?</label>
                    <div className="flex items-center space-x-4 mt-2">
                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
                            <input type="radio" name="budget" className="mr-2" /> Fixed price
                        </button>
                        <button className="flex items-center px-4 py-2 border border-red-500 text-red-500 rounded-md">
                            <input type="radio" name="budget" className="mr-2" checked /> Hourly
                        </button>
                    </div>
                </div>

                <hr className='mt-5' />

                {/* Price Range */}
                <div className="flex space-x-4 mt-4">
                    <div className="w-[25%]">
                        <label className="block text-sm font-medium text-gray-700">From</label>
                        <div className="flex items-center border border-gray-300 rounded-md p-2">
                            <span className="mr-1">$</span>
                            <input
                                type="text"
                                className="w-full "
                                placeholder="50.00/hr"
                            />
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <label className="block text-sm font-medium text-gray-700">To</label>
                        <div className="flex items-center border border-gray-300 rounded-md p-2">
                            <span className="mr-1">$</span>
                            <input
                                type="text"
                                className="w-full "
                                placeholder="50.00/hr"
                            />
                        </div>
                    </div>
                </div>
                <hr className='mt-5' />

                {/* Attachments Section */}
                <div className="mt-5">
                    <label className="block text-md font-bold text-gray-700">Attachments</label>
                    <div className="border border-red-500 p-4 text-center rounded-md mt-2">
                        <input
                            type="file"
                            className="hidden"
                            id="file-upload"
                            multiple
                        />
                        <label
                            htmlFor="file-upload"
                            className="text-gray-500 cursor-pointer">
                            Drag or <span className="text-red-500">upload project files</span>
                        </label>
                    </div>
                </div>
                <hr className='mt-5' />


                {/* Buttons */}
                <div className="flex justify-center space-x-4 mt-4">
                    <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full"
                    onClick={() => router.push('/Jobcreated')}
                    >Saved as draft</button>
                    <button className="px-6 py-2 bg-red-500 text-white rounded-full"
                    onClick={() => router.push('/Jobcreated')}
                    >Post job now</button>
                </div>
            </div>
        </>
    )
}

export default CreateJob;
