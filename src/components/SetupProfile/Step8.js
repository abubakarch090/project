import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Back from "./Back";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { toast } from "react-toastify";
import { useSignupMutation } from '@/Redux/ApiSlice';

const Step8 = ({ setSelect, formData, setFormData }) => {
    const [signup] = useSignupMutation();
    const router = useRouter();
    const fileInputRef = useRef(null);
    const [profileImage, setProfileImage] = useState(null); // Store uploaded image URL

    const handleImage = () => {
        const fileInput = fileInputRef.current;
    
        // Check if a file is selected
        if (fileInput && fileInput.files[0]) {
            const formData = new FormData();
            formData.append('image', fileInput.files[0]); // 'image' is the field name
    
            fetch('http://localhost:3000/api/auth/upload-image', {
                method: 'POST',
                body: formData,
            })
                .then(async (response) => {
                    // Await for the response.json() to get the JSON response
                    console.log(response, "response");
                    const data = await response.json();
                    console.log(data, "response");
    
                    if (data?.imageUrl) {
                        // Successfully received the image URL from the backend
                        setProfileImage(data.imageUrl); // Set the image URL in state
                    } else {
                        toast.error('Failed to upload image');
                    }
                })
                .catch((error) => {
                    console.error('Error uploading image:', error);
                    toast.error('Error uploading image');
                });
        } else {
            console.error('No file selected');
            toast.error('Please select an image');
        }
    };
    

    const handleClick = async () => {
        console.log("ok");

        // Create the payload for signup
        let payload = {
            username: formData.username,  // Directly use username from formData
            email: formData.email,
            password: formData.password,
            freelancer: formData.freelancer === "Freelancer" ? true : false,
            firstName: formData.fname,
            lastName: formData.lname,
            country: formData.country,
            title: formData.jobtitle,
            experience: JSON.stringify({  // Ensure experience is an object with job title, company, and duration
                jobTitle: formData.jobtitle,
                company: formData.company,
                duration: formData.duration,
            }),
            noExperience: formData.noExperience === "true" ? true : false,  // Example: if `noExperience` is a checkbox value
            education: JSON.stringify({
                qualification: formData.qualification,
                certificates: formData.certificates,
                years: formData.years,
            }),
            language: formData.language,
            skills: formData.skillstitle,
            profileDescription: formData.profileDescription,
            hourlyRate: formData.hourlyRate,
            contactInformation: JSON.stringify({
                firstName: formData.fname,
                lastName: formData.lname,
                address: formData.address,
                city: formData.city,
                country: formData.country,
                zipCode: formData.zipcode,
                phone: formData.phoneno,
            }),
            profileImage, // Add uploaded image URL to the payload
        };

        try {
            const response = await signup(payload).unwrap();
            console.log('Post added successfully:', response);

            if (response?.message) {
                toast.success(response?.message);
                router.push('/Login');
            } else {
                toast.error(response?.message || response?.error);
            }
        } catch (err) {
            toast.error(err?.data?.message);

            if (err?.data?.message === "Username already taken, please choose a different one") {
                setSelect();
            }
            if (err?.data?.message === "Email already in use") {
                setSelect(1);
            }

            console.log(err, "err");
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className='container bg-white mx-auto mt-20 mb-20 w-[90%] lg:w-1/2 h-auto rounded-lg p-6 shadow-lg' data-aos="fade-up">
                <div className='flex' data-aos="zoom-in">
                    <div className='mx-6 bg-blue-400 rounded-full p-1 w-8 h-8 text-center text-white font-semibold'>
                        M
                    </div>
                    <div className='w-[80%] flex justify-center font-semibold text-lg'>
                        <h2>Create Profile</h2>
                    </div>
                </div>

                <Back setSelect={setSelect} number={10} />

                <div className='h-2 rounded-lg bg-gray-300 mt-20 w-[90%] mx-auto'>
                    <div className='h-2 bg-red-500 w-[100%] rounded-lg'></div>
                </div>

                <div className='w-[90%] mx-auto mt-4' data-aos="fade-left">
                    <h1 className='font-bold text-2xl font-sans'>Add contact information.</h1>
                    <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>

                <div className="w-[90%] mt-4" data-aos="fade-up">
                    <div className="mx-auto rounded-full border-4 w-[120px] h-[120px]">
                        {/* Display uploaded profile image */}
                        {profileImage ? (
                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
                        ) : (
                            <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-gray-600">No Image</span>
                            </div>
                        )}
                    </div>

                    <div className="mx-auto rounded-full border-2 w-[40%] h-14 mt-4">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImage}
                        />
                    </div>
                </div>

                {/* Other Form Fields */}
                <div className="grid grid-cols-2 w-[90%] m-auto gap-3 mt-4">
                    <div data-aos="fade-up">
                        <h2>First Name</h2>
                        <input
                            className='border-2 w-full px-2 py-1 rounded-lg mt-2'
                            type="text"
                            onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                        />
                    </div>
                    <div data-aos="fade-up">
                        <h2>Last Name</h2>
                        <input
                            className='border-2 w-full px-2 py-1 rounded-lg mt-2'
                            type="text"
                            onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                        />
                    </div>
                </div>

                {/* More fields as per your form */}

                <div className='flex justify-center' data-aos="fade-up">
                    <button
                        className='bg-red-600 hover:bg-red-700 my-2 mt-12 p-2 w-[55%] rounded-full text-white text-lg'
                        onClick={handleClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default Step8;
