import React, { useEffect, useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
// import Review from './Review.png'
// import Line from './Line.png'
// import Dollar from './Dollar.png'
import EditProfile from './Editprofile';
import { useRouter } from 'next/router';
import { useProfileQuery } from '@/Redux/ApiSlice'; // Assuming you have a login mutation
import Cookies from 'js-cookie';

const ProfileView = () => {

    const { data:profileData, error, isLoading } = useProfileQuery();

        const token = Cookies.get('token');

        // console.log(token, "token")

 console.log(profileData?.data, "profileData")

    const router = useRouter ();

    const [model, setModel] = useState(false)

    const [data, setData]= useState({})
    const [updatedata,setupdatadata]=useState({
        fname:"",
        hourlyrate:"",
        profiledescription:"",
    })

    const [currTime, setCurrTime]=useState()
    const [currDate, setCurrDate]= useState()
 

    // console.log(data,"data")



    useEffect(() => {
        // Set the time and date only on the client side
        setCurrTime(new Date().toLocaleTimeString());
        setCurrDate(new Date().toLocaleDateString());
    }, []);



    const handleModel = () => {
        setModel(!model)
    }
    
    const handleupdate = () => {
        if (updatedata) {
            // Update local state
            setData(updatedata);
    
            // Update local storage
            localStorage.setItem("signupData", JSON.stringify(updatedata));
        }
    };

    useEffect(() => {
        const signUpData = localStorage.getItem("signupData");
        if (signUpData) {
            setData(JSON.parse(signUpData)); // Assuming it's stored as a JSON string
        }
    }, []);



    useEffect(()=>{
        if(!token){
            router.push("/Login");
        }
    }, [router.pathname])

    console.log(token, "token")

    return (
        <>

            {
                model && (
                    <EditProfile handleModel={handleModel} 
                    handleupdate={handleupdate} 
                    updatedata={updatedata} setupdatadata={setupdatadata}/>
                )
            }

            {/* <ProfileHeader/> */}



            {/* blue container h us m aik  main div h us div m 2 container hein */}
            <div className="container">
                <div className='w-full h-64 bg-blue-500 '>

                    <div className='flex justify-center gap-4 w-[90%] mx-16 ' >

                        <div className='cont1 w-[60%] h-80 bg-white mt-16 shadow-lg  rounded-lg flex '>
                            <div className='w-[25%]  bg-black h-40 mx-6 mt-5 rounded-lg' >
                                <img
                                    src="https://via.placeholder.com/250/400"
                                    alt="Profile"
                                    className=' border-2 border-blue-500'
                                />
                                <div className='mt-4 '>
                                    <h1>{data.country}</h1>
                                    <h2 className='text-sm'>Current Time:{currTime} </h2>
                                    <h2 className='text-sm'>Current Date:{currDate} </h2>
                                </div>
                                <div className='mt-2 text-center'>
                                    <button className='border-2 border-red-300 py-1 px-2 bg-gray-300 rounded-full hover:bg-red-200'
                                        onClick={() => router.push("/Profilepublic")}
                                    >Public Profile</button>
                                </div>
                            </div>

                            <div className='w-[60%]'>
                                <div className='flex justify-between mt-5'>
                                    <div className=' flex gap-3'>
                                    <h1>{profileData?.data?.firstName}</h1>
                                    <h1>{profileData?.data?.lastName}</h1>
                                    </div>

                                    <button className='border-2 border-red-500 px-5 py-1 rounded-full bg-gray-200 hover:bg-red-300' onClick={handleModel}>Edit Profile</button>

                                </div>
                                <div className='w-full mt-2'>
                                    <p className=''>{profileData?.data?.title}</p>
                                </div>

                                <div className='w-[60%] flex'>

                                    <div className='mt-2'>
                                        <img src="/public/Review.png" alt="" />
                                        <h1>4/5 (12 Reviews)</h1>
                                    </div>

                                    <img className='mx-5 mt-2' src="/public/Line.png" alt="" />

                                    <div className='mt-2 flex  gap-1 '>
                                        <img className='h-8' src="/public/Dollar.png" alt="" />
                                        <div>
                                            <h1>{data.hourlyrate} </h1>
                                            <h2 className='text-sm '>Total earnings-10k USD</h2>
                                        </div>
                                    </div>

                                    <img className='mx-20 mt-2' src="/public/Line.png" alt="" />

                                    <div className='flex mt-2 -mx-16'>
                                        <img className='h-8 mx-2' src="/public/Dollar.png" alt="" />
                                        <h2 className='text-sm'>24 Projects Completed</h2>
                                    </div>
                                </div>

                                <div className="explanation w-full h-32 border-1 border-black">
                                    <p className='text-sm font-bold'>{profileData?.data?.profileDescription}</p>
                                </div>

                            </div>

                        </div>



                        <div className='cont1 w-[30%] h-80 bg-white mt-16 shadow-lg rounded-lg '>
                            <h1 className='text-xl mx-4 mt-2'>Verfication</h1>
                            <hr className='mt-4' />

                            <div class="flex items-center justify-between p-2 border-b border-gray-200">
                                <CallIcon />
                                <h2 class="flex-grow mx-2 mt-3">{profileData?.data?.contactInformation?.phone}</h2>
                                <a class="ml-auto text-blue-500">Verify</a>
                            </div>
                            <div class="flex items-center justify-between p-2 border-b border-gray-200">
                                <CallIcon />
                                <h2 class="flex-grow mx-2 mt-3">Phone Number</h2>

                            </div>
                            <div class="flex items-center justify-between p-2 border-b border-gray-200">
                                <CallIcon />
                                <h2 class="flex-grow mx-2 mt-3">Phone Number</h2>

                            </div>
                            <div class="flex items-center justify-between p-2 border-b border-gray-200">
                                <CallIcon />
                                <h2 class="flex-grow mx-2 mt-3">Phone Number</h2>

                            </div>

                        </div>

                    </div>


                </div>
            </div>


            {/* next 2 container */}
            <div className='flex justify-center gap-4 w-[90%] mx-16 mt-24  ' >

                <div className='cont1 w-[60%] h-80 bg-white mt-16 shadow-lg  rounded-lg '>
                    <div className='flex justify-between items-center mt-4'>
                        <h1 className='mx-4 text-lg font-bold'>My Portfolio</h1>
                        <div className='flex gap-7'>
                            <button>Delete</button>
                            <button className='mr-4'>Edit Profile</button>
                        </div>
                    </div>
                    <hr className='mt-2' />

                    <div className=' mt-6 mx-5 '>
                        <div className='flex gap-2'>
                            <img src="https://picsum.photos/210/180" alt="" />
                            <img src="https://picsum.photos/210/180" alt="" />
                            <img src="https://picsum.photos/210/180" alt="" />

                        </div>

                        <div className='flex justify-center mt-4'>
                            <button className=''>View All</button>
                        </div>
                    </div>


                    {/* 3 container */}
                    <div className='w-full mt-12 '>
                        <div className='cont1 w-[100%] bg-white rounded-lg shadow-lg p-4   '>
                            <div>
                                <h1 className='text-lg font-bold mb-4 p-2'>Reviews</h1>
                                <hr className='mb-6' />
                            </div>

                            <div className='flex justify-between'>
                                {/* First Review Card */}
                                <div className='w-[45%] h-52 bg-gray-100 rounded-lg shadow-md p-4'>
                                    <div className='flex items-center mb-4'>
                                        <img
                                            src='https://via.placeholder.com/40'
                                            alt='Profile'
                                            className='w-10 h-10 rounded-full mr-3'
                                        />
                                        <div>
                                            <p className='font-bold'>Sam Crockett</p>
                                            <p className='text-sm text-gray-600'>Independent Web Developer</p>
                                        </div>
                                    </div>
                                    <p className='text-sm'>
                                        The freelance talent we work with are more productive than we ever thought possible.
                                    </p>
                                </div>

                                {/* Second Review Card */}
                                <div className='w-[45%] h-52 bg-gray-100 rounded-lg shadow-md p-4'>
                                    <div className='flex items-center mb-4'>
                                        <img
                                            src='https://via.placeholder.com/40'
                                            alt='Profile'
                                            className='w-10 h-10 rounded-full mr-3'
                                        />
                                        <div>
                                            <p className='font-bold'>Sam Crockett</p>
                                            <p className='text-sm text-gray-600'>Independent Web Developer</p>
                                        </div>
                                    </div>
                                    <p className='text-sm'>
                                        The freelance talent we work with are more productive than we ever thought possible.
                                    </p>
                                </div>
                            </div>

                            <div className='flex justify-center mt-4'>
                                <button className='text-blue-500 text-sm font-semibold'>View All</button>
                            </div>
                        </div>
                    </div>

                    {/* 4th container */}
                    <div className=' w-full mt-8 rounded-lg   ' >
                        <div className='cont1 w-[100%] h-80 bg-white rounded-lg shadow-xl p-4 '>


                            <div className='flex justify-between items-center mt-4'>
                                <h1 className='mx-4 text-lg font-bold'>Work Expirence</h1>
                                <div className='flex gap-7'>
                                    <button>Delete</button>
                                    <button className='mr-4'>Edit Profile</button>
                                </div>

                            </div>
                            <hr className='mt-2' />

                            <div className='p-4'>
                                <p className='font-semibold'>User Experience Designer | TCS</p>
                                <p className='text-gray-600'>2019-2021</p>
                                <p className='mt-4 text-sm text-gray-700'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>

                            <div className='flex justify-center mt-6'>
                                <button className='text-blue-500 text-sm font-semibold'>View All</button>
                            </div>



                        </div>
                    </div>

                    {/* 5th container */}

                    <div className=' w-full mt-8 rounded-lg   ' >
                        <div className='cont1 w-[100%] h-80 bg-white rounded-lg shadow-xl p-4 '>


                            <div className='flex justify-between items-center mt-4'>
                                <h1 className='mx-4 text-lg font-bold'>My Education </h1>
                                <div className='flex gap-7'>
                                    <button>Delete</button>
                                    <button className='mr-4'>Edit Profile</button>
                                </div>

                            </div>
                            <hr className='mt-2' />

                            <div className='p-4'>
                                <p className='font-semibold'>{data.qualification} </p>
                                <p className='text-gray-600'>{data.years}</p>
                                <p className='mt-4 text-sm text-gray-700'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>

                            <div className='flex justify-center mt-6'>
                                <button className='text-blue-500 text-sm font-semibold'>View All</button>
                            </div>



                        </div>
                    </div>





                </div>


                <div className='cont1 w-[30%] h-80 bg-white mt-16 shadow-lg rounded-lg '>
                    <div className='flex justify-between '>
                        <h1 className='mx-6 text-lg font-semibold mt-4'>Top Skills</h1>
                        <button className='mr-3 border-2 border-red-500 py-2 px-3 rounded-full mt-2'>Edit Skills</button>
                    </div>
                    <hr className='mt-4' />

                    <div className="skill mt-4">
                        <h1 className='mx-4  '>{data.addskills}</h1>
                        <hr className='mt-3' />
                        <h1 className='mx-4'>Graphic Designing</h1>
                        <hr className='mt-3' />
                        <h1 className='mx-4'>Graphic Designing</h1>
                        <hr className='mt-3' />
                        <h1 className='mx-4'>Graphic Designing</h1>
                        <hr className='mt-3' />
                        <h1 className='mx-4'>Graphic Designing</h1>
                        <hr className='mt-3' />
                    </div>
                </div>



            </div>








            {/* <div className=' w-[90%]   ' >
                <div className='cont1 w-[60%] h-80 bg-red-600 mt-6  rounded-lg mx-28 '></div>
            </div>
            <div className=' w-[90%]   ' >
                <div className='cont1 w-[60%] h-80 bg-red-600 mt-6  rounded-lg mx-28 '></div>
            </div>
            <div className=' w-[90%] mb-7  ' >
                <div className='cont1 w-[60%] h-80 bg-red-600 mt-6  rounded-lg mx-28 '></div>
            </div> */}


        </>
    );
}

export default ProfileView;

