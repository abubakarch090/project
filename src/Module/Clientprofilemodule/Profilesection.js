import React from 'react'

const ProfileSection = () => {
  return (
    <>
    <div className="p-5 bg-white rounded-lg shadow-lg">
                        <h1 className='text-xl font-bold mb-4 text-center'>Adam Smith</h1>
                        <p className='mb-2 text-center'>Uptechhuntlab</p>
                        <div className='relative pt-2'>
                            <div className='overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200'>
                                <div className='w-[82%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500'>
                                    82%
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                        <button className='border-2 px-2 py-2 rounded-full  bg-red-500 hover:bg-gray-300 text-white'>
                            Complete your profile
                        </button>
                        </div>
                       <h1 className='italic'>
                       100% completion of  you profile will help  your get more reach.
                       </h1>
                    </div>
    </>
  )
}

export default ProfileSection