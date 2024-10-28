import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';

const JobCard = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg ">
            <div className='flex justify-between'>
                <h1 className="text-2xl font-bold mb-4">All Job</h1>
                <p className="text-lg mb-4 font-semibold">Total : <span className="text-black font-bold">10</span></p>
            </div>
            <hr />

            <div className="mb-2">
                {/* Active Projects */}
                <div className="flex items-center mb-2 mt-2">
                    <CheckCircleIcon  className="mr-2 text-green-500" />
                    <span className="text-lg">Active projects : <strong>02</strong></span>
                </div>

                {/* Completed Projects */}
                <div className="flex items-center mb-2 mt-2">
                    <CloudDoneIcon className="mr-2 text-blue-500" />
                    <span className="text-lg">Completed projects : <strong>07</strong></span>
                </div>

                {/* Cancelled Projects */}
                <div className="flex items-center mb-2 mt-2">
                    <CancelIcon className="mr-2 text-red-500" />
                    <span className="text-lg">Cancelled projects : <strong>07</strong></span>
                </div>
            </div>

            {/* View All Button */}
            <div className="flex justify-center">
                <button className='border-2 px-8 py-2 rounded-full  hover:bg-red-300 text-black'>
                    View All
                </button>
            </div>


        </div>
    );
};

export default JobCard;
