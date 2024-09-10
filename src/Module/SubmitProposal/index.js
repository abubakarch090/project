import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SubmitProposaltwo = () => {
    return (
        <>
            <div className="container bg-blue-500 w-full flex flex-col items-center h-64">
                <div className='w-full mt-6'>
                    <div className='bg-white h-auto shadow-lg rounded-lg  w-[80%] m-auto'>
                        <div className='flex p-4 space-x-4'>
                            <ArrowBackIosNewIcon />
                            <h1>Back</h1>
                        </div>
                        <hr />
                        <div className="flex flex-col   p-6 ">
                            <div className='border-2 p-4'>
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
                            </div>

                            <div className=' mt-2'>
                                <h1 className='text-lg font-bold'>Skills and Expertise</h1>
                                <input className='border-2 p-3 mt-2 w-full rounded-2xl' type="text" placeholder='Skills' />
                            </div>
                            <hr />
                            <div>
                                <div className='flex justify-between mt-2'>
                                    <h1 className='font-bold'>Terms</h1>
                                    <p>Client's budget: $10.00 USD</p>
                                </div>
                                <input type="text" className='h-56 border-2 w-full mt-4' />
                                <div className='p-4'>
                                    <h1 className='font-bold'>How long it will take?</h1>

                                    <select className="w-[30%] py-2 mt-4 px-4 mx-4  border rounded-md">
                                        <option value="">Select</option>
                                        <option value="1 month">1 month</option>
                                        <option value="3 months">3 months</option>
                                        <option value="6 months">6 months</option>
                                    </select>


                                </div>


                            </div>
                            <div className='p-2'>
                                <h1 className='font-bold'>Additional Details</h1>
                                <div className='p-6'>
                                    <h1>Write a cover letter</h1>
                                    <textarea id="cover-letter" rows="5" className="w-full px-4 py-2 mt-4 border-2 rounded-md" placeholder="Write here"></textarea>
                                </div>
                            </div>
                            <div className='p-2'>
                                {/* <!-- File upload area --> */}
                                <h1 className='font-bold'> Attachments</h1>
                                <div class="border-2 border-dashed border-gray-300 p-6 mt-5 text-center rounded-md">
                                    <p>Drag or <label for="fileInput" class="text-blue-500 underline cursor-pointer">upload project files</label></p>
                                    <input type="file" multiple class="hidden" id="fileInput" />
                                </div>

                            </div>

                            <div className='flex p-4 space-x-5'>
                                <button className='border-2 bg-red-300  px-6 py-2 font-bold rounded-full hover:bg-gray-300 '>Submit a Proposal</button>
                                <button className='border-2  bg-gray-300  px-6 py-2 font-bold rounded-full hover:bg-red-300 '  >Cancel</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmitProposaltwo