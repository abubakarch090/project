import React, { useState } from 'react'
// import UPTECHUNT from './UPTECHUNT.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'; // js-cookie import karein
import { useProfileQuery, useGetJobsQuery } from '@/Redux/ApiSlice'; // Assuming you have a login mutation


const ProfileHeader = () => {

    const router = useRouter();
    const { data:profileData, error, isLoading } = useProfileQuery();

    const [profile, setProfile] = useState(false)
    const openProfile = () => {
        setProfile(!profile)
    }

    const [notification, setNotification] = useState(false)
    const openNotification = () => {
        setNotification(!notification)
    }

    const handleLogout = () => {
        // Token ko cookies se remove karna
        Cookies.remove('token');

        // Redirect after logout
        window.location.href = '/Login';
    };

    return (

        <>
            {profile && (
                <div className='border-2 rounded-lg h-auto w-40 mx-2 bg-white absolute top-14 right-20 p-3 cursor-pointer'>
                    <h1 className='py-1 cursor-pointer'
                        onClick={() => router.push("/Profile")}
                    >My profile</h1>
                    <h1 className='py-1'>My wallet</h1>
                    <h1 className='py-1'>Setting</h1>
                    <h1 className='py-1 cursor-pointer'
                        onClick={() => router.push("/Help")}
                    >Help & support</h1>
                    <hr />

                    <div className='flex items-center gap-10 mt-2'>
                        <h1
                            className='font-semibold text-gray-800'
                            onClick={() => {
                                handleLogout(); // Token expire karega
                                openProfile();  // Profile navigation ya related action
                            }}
                        >
                            Log out
                        </h1>
                        <LogoutIcon />
                    </div>


                </div>
            )}
            {
                notification && (
                    <div className='border-2 rounded-lg h-36 w-[40%] mx-2 bg-white absolute top-14 right-20 p-3'>
                        <h1>🔔 notifications here</h1>
                    </div>
                )
            }



            <header className='flex items-center bg-black text-white p-3'>

                <div className='w-[40%] flex items-center mx-7 gap-7 cursor-pointer'>
                    <img src="/UPTECHUNT.png" alt="UPTECHUNT" className="h-4" />
                    <input
                        className="rounded-full pl-4 py-2 bg-gray-800 text-white placeholder-gray-400' "
                        type="text"
                        placeholder="Search"
                    />
                </div>

                <div className='w-[30%] flex justify-center'>
                    <nav className='flex gap-6'>
                        <a href="#" className='hover:underline text-gray-400'
                            onClick={() => router.push("/Jobsearch")}
                        >Browse projects</a>
                        <a href="#" className='hover:underline text-gray-400'>My Jobs</a>
                        <a href="#" className='hover:underline text-gray-400'>Messages</a>
                    </nav>
                </div>

                <div className='flex items-center justify-end w-[20%]'>
                    <NotificationsIcon className='text-gray-400 mx-4 cursor-pointer'
                        onClick={openNotification}
                    />
                    <img
src={profileData?.data?.profileImage ? profileData?.data?.profileImage : "/profile.jpg"}
                    
                        alt="Profile"
                        className='rounded-full w-10 h-10 border-2 border-blue-500 cursor-pointer'
                        onClick={openProfile}

                    />

                </div>

            </header>
        </>
    )

}

export default ProfileHeader