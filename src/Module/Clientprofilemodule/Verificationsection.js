import React from 'react';
import { Person, Phone, Email } from '@mui/icons-material'; 

const VerificationSection = () => {
    return (
        <div className="p-5 bg-white rounded-lg shadow-lg">
            <h1 className='text-xl font-bold mb-4'>Verification</h1>
            <hr />
            
            {/* Identity Verification */}
            <div className="flex justify-between items-center mb-4 mt-2">
                <div className="flex items-center">
                    <Person className="text-gray-600 mr-2" /> {/* MUI Person Icon */}
                    <span className="text-gray-600">Identity Verified</span>
                </div>
                <button className="text-blue-500 hover:underline">Verify</button>
            </div>
            

            {/* Phone Verification */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <Phone className="text-gray-600 mr-2" /> {/* MUI Phone Icon */}
                    <span className="text-gray-600">Phone Verified</span>
                </div>
                <button className="text-blue-500 hover:underline">Verify</button>
            </div>

            {/* Email Verification */}
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <Email className="text-gray-600 mr-2" /> {/* MUI Email Icon */}
                    <span className="text-gray-600">Email Verified</span>
                </div>
                <button className="text-blue-500 hover:underline">Verify</button>
            </div>
        </div>
    );
};

export default VerificationSection;
