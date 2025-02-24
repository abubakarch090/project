import React, { useState } from 'react'
// import ProfileHeader from './ProfileHeader'
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import DataContainer from '../Publicprofile/Datacontainer';
const SearchJob = () => {
    const router = useRouter ();

    const [value, setValue] = useState("")
    return (
        <>
            {/* <ProfileHeader /> */}

            <div className="container bg-blue-500 w-full flex flex-col items-center h-64">
                <div className="w-[80%] mt-5">
                    <div className="flex space-x-1">
                        <input className="w-full bg-white rounded-lg p-3 px-6" type="text"  placeholder="Search job" onChange={(e)=>setValue(e.target.value)} />
                        
                        <button className="border-2 p-2 rounded-md bg-red-400 hover:bg-gray-400 font-semibold text-white flex items-center">
                            <SearchIcon />
                            Search
                        </button>
                       

                       
                    </div>

                </div>

                <div className="w-[80%] flex space-x-5">

                    <div className="sidebar w-[30%] bg-white h-auto mt-20 rounded-lg shadow-lg p-6 mb-6">
                        <h1 className="text-lg font-semibold mb-4">Filters</h1>

                        {/* Project Type */}
                        <div className="mb-6">
                            <h2 className="text-sm font-semibold mb-2">Project type</h2>
                            <div className="flex items-center mb-2">
                                <input type="checkbox" id="fixedPrice" className="mr-2" />
                                <label htmlFor="fixedPrice" className="text-sm">Fixed Price</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="hourlyRate" className="mr-2" />
                                <label htmlFor="hourlyRate" className="text-sm ">Hourly Rate</label>
                            </div>
                        </div>

                        {/* Fixed Price */}
                        <div className="mb-6">
                            <h2 className="text-sm font-semibold mb-2">Fixed price</h2>
                            <input type="range" min="0" max="100000" className="w-full" />
                            <div className="flex justify-between text-xs">
                                <span>$0</span>
                                <span>$100k+</span>
                            </div>
                        </div>

                        {/* Hourly Price */}
                        <div className="mb-6">
                            <h2 className="text-sm font-semibold mb-2">Hourly price</h2>
                            <input type="range" min="0" max="1000" className="w-full" />
                            <div className="flex justify-between text-xs">
                                <span>$0</span>
                                <span>$1000</span>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-sm font-semibold">Skills</h2>
                                <a href="#" className="text-blue-500 text-xs">View All</a>
                            </div>
                            <input type="text" placeholder="Search" className="w-full p-2 border border-gray-300 rounded mb-2" />
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center">
                                    <input type="checkbox" id="websiteDesign" className="mr-2" />
                                    <label htmlFor="websiteDesign" className="text-sm">Website Design</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="graphicDesign" className="mr-2" />
                                    <label htmlFor="graphicDesign" className="text-sm">Graphic Design</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="logoDesign" className="mr-2" />
                                    <label htmlFor="logoDesign" className="text-sm">Logo Design</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="illustrator" className="mr-2" />
                                    <label htmlFor="illustrator" className="text-sm">Illustrator</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="corporateIdentity" className="mr-2" />
                                    <label htmlFor="corporateIdentity" className="text-sm">Corporate Identity</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="photoshopDesign" className="mr-2" />
                                    <label htmlFor="photoshopDesign" className="text-sm">Photoshop Design</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="uxDesign" className="mr-2" />
                                    <label htmlFor="uxDesign" className="text-sm">UX Design</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="uiDesign" className="mr-2" />
                                    <label htmlFor="uiDesign" className="text-sm">UI Design</label>
                                </div>
                            </div>
                        </div>

                        {/* Project Location */}
                        <div className="mb-6">
                            <h2 className="text-sm font-semibold mb-2">Project location</h2>
                            <input type="text" placeholder="Search" className="w-full p-2 border border-gray-300 rounded" />
                        </div>

                        {/* Languages */}
                        <div>
                            <h2 className="text-sm font-semibold mb-2">Languages</h2>
                            <input type="text" placeholder="Search" className="w-full p-2 border border-gray-300 rounded" />
                            <div className="flex items-center mt-4">
                                <input type="checkbox" id="uiLang" className="mr-2" />
                                <label htmlFor="uiLang" className="text-sm">UI Design</label>
                            </div>
                        </div>
                    </div>


                    <div className='w-[70%] bg-white h-96 mt-20 rounded-lg shadow-lg'>
                        {/* Top Results */}
                        <div className="flex justify-between items-center p-4 h-[30vh] bg-gray-100 rounded-t-lg">
                            <div className="text-sm text-gray-700 font-medium">
                                Top results Showing 1-20 of 3291 results
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-700 font-medium">Sort by:</span>
                                <button className="bg-gray-300 px-4 py-1 rounded text-sm text-gray-800 hover:bg-gray-400">
                                    Latest
                                </button>
                            </div>
                        </div>
                        <hr />
                            <div className="data mb-10">
                                <button className='bg-red-400'
                                onClick={()=>router.push("/Detailsjob")}
                                >Submit Job Proposal</button>
                            </div>
                            <DataContainer value={value}/> 

                    </div>


                </div>


            </div>


        </>
    )
}

export default SearchJob