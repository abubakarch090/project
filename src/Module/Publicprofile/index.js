import React from 'react'
// import ProfileHeader from './ProfileHeader'
import SearchIcon from '@mui/icons-material/Search';
import DataContainer from './Datacontainer';
import { useProfileQuery, useGetJobsQuery } from '@/Redux/ApiSlice'; // Assuming you have a login mutation
import { useState } from 'react';

const PublicProfile = () => {

  const { data:profileData, error, isLoading } = useProfileQuery();
  const { data:jobsData} = useGetJobsQuery();
  const [value, setValue] = useState("")




  console.log(profileData, "profileData")
  console.log(jobsData, "jobsData")
  return (
    <>
      {/* <ProfileHeader /> */}

      <div className="container  bg-blue-500 w-full ">
        <div className=" m-auto h-64  w-[90%]  ">

          <div className="flex justify-between    ">
            <div className="flex flex-col w-[60%] mt-6 ">
              <div className="bg-white w-full h-40 rounded-lg shadow-lg">
              <img
                    src={"/fusion.jpg"}
                    alt="Profile"
                    className=' border-2 w-full h-full '
                  />
              </div>
              <div className='flex '>

                <input className="bg-white w-full h-12 mt-2 rounded-lg shadow-lg p-2"
                  placeholder="Search job"
                  onChange={(e)=>setValue(e.target.value)}
                />


                {/* <div className='mt-2 mx-2 flex '>

                  <button className='border-2 p-2 px-6 rounded-md bg-red-400 hover:bg-gray-400 font-semibold text-white flex items-center'>
                    <SearchIcon />
                    Search</button>
                </div> */}

              </div>
              <div className='mt-6'>
                <h1 className='text-xl font-bold'>Jobs you might like</h1>
              </div>
              {/* <div className='flex justify-around mt-4'>
                <h1 className=' bg-red-500 text-white px-4 py-2 rounded-md'>Best match</h1>
                <h1 className='hover:bg-gray-200 px-4 py-2 rounded-md'>Recent</h1>
                <h1 className='hover:bg-gray-200 px-4 py-2 rounded-md'>Saved</h1>
              </div>
              <hr className='mt-2' />  */}

              <DataContainer value={value}/> 

            </div>

            <div className="bg-black w-[30%] h-72 rounded-lg shadow-lg mt-6  ">
              <div className="bg-white w-full h-72 rounded-lg shadow-lg   ">
                <div className="profile w-[40%] h-32 border-2  m-auto">
                  <img
                    src={profileData?.data?.profileImage ? profileData?.data?.profileImage : "/profile.jpg"}
                    alt="Profile"
                    className=' border-2 border-blue-500 mt-2'
                  />
                </div>
                <div className='px-4 py-4 text-center'>
                  <h1>{profileData?.data?.firstName} {profileData?.data?.lastName}</h1>
                  <p>{profileData?.data?.experience?.jobTitle}</p>
                </div>
                <p className='text-sm text-center italic'>{profileData?.data?.title}</p>
              </div>
              <div className="bg-white w-full h-auto p-8 rounded-lg shadow-lg mt-4  ">
                <h1>Membership ArtFusion</h1>
              </div>
              <div className="bg-white w-full h-72 rounded-lg shadow-lg mt-4   ">
                <div className='flex justify-between '>
                  <h1 className='p-3 text-lg'>My contracts</h1>
                  <h1 className='pr-3 py-2'>Total <span className='font-bold text-lg'>10</span> </h1>
                </div>
                <hr />
                <div className='p-4'>
                  <h1 className='p-2'>Active projects : 02</h1>
                  <h1 className='p-2'>Active projects : 02</h1>
                  <h1 className='p-2'>Active projects : 02</h1>
                </div>
                <hr />
                <div className='text-center py-3'>
                  <button className='border-2 px-5 py-2 rounded-full bg-red-500 text-white hover:bg-gray-400'>View All</button>
                </div>

              </div>
              <div className="bg-white w-full h-44 rounded-lg shadow-lg mt-4   ">
                <div className='flex justify-between '>
                  <h1 className='p-3 text-lg'>Your Bids</h1>
                  <h1 className='pr-3 py-2'>Available Bids <span className='font-bold text-lg'>16</span> </h1>
                </div>
                <hr />
                <div className='p-4'>
                  <h1>16 bids left out of 6</h1>
                </div>
                <div className='text-center py-3'>
                  <button className='border-2 px-5 py-2 rounded-full bg-red-500 text-white hover:bg-gray-400'>Get more Bids</button>
                </div>
              </div>
            </div>


          </div>


        </div>
      </div>

    </>
  )
}

export default PublicProfile