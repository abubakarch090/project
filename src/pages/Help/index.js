import React from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ProfileHeader from './ProfileHeader';

const Helpsupport = () => {
    return (
        <>
            {/* <ProfileHeader/> */}

            <div className="w-full">
                <div className="w-full h-64 bg-blue-500 flex items-center justify-center">
                    <div className=" w-[90%] lg:w-[80%] bg-white h-60 mt-32 shadow-lg rounded-xl">
                        <div className='flex items-center p-3'>
                            <ArrowBackIosIcon className="mr-2" />
                            <h1 className="font-bold">Back</h1>
                        </div>
                        <h1 className='text-center text-xl font-bold '>Help & Support</h1>
                        <hr className="mt-2" />

                         <div className='w-[60%] m-auto mt-4'>
                             <p className=''>For any kind of help and suuport please write us on the below mention mail id. Thanks</p>
                             <h1 className='text-center mt-6 font-bold italic text-lg'>Help@arthub.com</h1>
                         </div>

                    </div>
                    
                </div>

            </div>



        </>
    )
}

export default Helpsupport;