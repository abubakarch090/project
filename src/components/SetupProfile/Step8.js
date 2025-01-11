import { useEffect } from "react";
import { useRouter } from "next/router";
import Back from "./Back";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { toast } from "react-toastify";
import { useSignupMutation } from '@/Redux/ApiSlice';


const Step8 = ({ setSelect, formData, setFormData }) => {

    const [signup] = useSignupMutation()

    console.log(formData, "formData")
    const router = useRouter();



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
        };
    
        try {
            // Assuming `signup` is a Redux action or a function handling the API call
            const response = await signup(payload).unwrap();
            console.log('Post added successfully:', response);
    
            // Check the response (assuming response contains a success message)
            if (response?.message) {
                toast.success(response?.message);
    
                // Redirect to the Login page after successful signup
                router.push('/Login');
            } else {
                toast.error(response?.message || response?.error);
            }
        } catch (err) {
            // Handle errors from the API call
            toast.error(err?.data?.message);
    
            // Check if error is related to existing username or email
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
        AOS.init({ duration: 1000 }); // Initialize AOS with 1000ms duration
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
                        {/* Placeholder for Profile Image */}
                    </div>

                    <div className="mx-auto rounded-full border-2 w-[40%] h-14 mt-4">
                        <input
                            type="file"
                            onChange={(e) => setFormData({ ...formData, uploadimage: e.target.files[0] })}
                        />
                    </div>
                </div>

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

                <div className="w-[90%] m-auto mt-4" data-aos="fade-up">
                    <h2>Address</h2>
                    <input
                        className='w-full px-2 py-1 border-2 rounded-lg mt-2'
                        type="text"
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-2 w-[90%] m-auto gap-3 mt-4">
                    <div data-aos="fade-up">
                        <h2>Country</h2>
                        <input
                            type="text"
                            className='border-2 w-full px-2 py-1 rounded-lg mt-2'
                            placeholder="EG: Pakistan"
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        />
                    </div>
                    <div data-aos="fade-up">
                        <h2>City</h2>
                        <input
                            type="text"
                            className='border-2 w-full px-2 py-1 rounded-lg mt-2'
                            placeholder="EG: Lahore"
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 w-[90%] m-auto gap-3 mt-4">
                    <div data-aos="fade-up">
                        <h2>Zip code</h2>
                        <input
                            className='border-2 w-full px-2 py-1 rounded-lg mt-2'
                            type="text"
                            onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
                        />
                    </div>
                    <div data-aos="fade-up">
                        <h2>Phone number</h2>
                        <input
                            className='border-2 w-full px-2 py-1 rounded-lg mt-2'
                            type="text"
                            onChange={(e) => setFormData({ ...formData, phoneno: e.target.value })}
                        />
                    </div>
                </div>

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
}

export default Step8;
