import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Accountsetup from "@/components/SetupProfile/Accountsetup";
import CreateProfile from "@/components/SetupProfile/CreateProfile";
import Step1 from "@/components/SetupProfile/Step1";
import Step2 from "@/components/SetupProfile/Step2";
import Step4 from "@/components/SetupProfile/Step4";
import Step5 from "@/components/SetupProfile/Step5";
import Step6 from "@/components/SetupProfile/Step6";
import Step7 from "@/components/SetupProfile/Step7";
import Step8 from "@/components/SetupProfile/Step8";
import Cookies from 'js-cookie';

const Signupmodule = () => {
    const router = useRouter();

            const token = Cookies.get('token');

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Adjust animation duration as needed
    }, []);

    // State to store all input values
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        fname: "",
        lname: "",
        choosecountry: "",
        member: "",
        termsconditions: "",
        skillstitle: "",
        jobtitle: "",
        company: "",
        duration: "",
        qualification: "",
        certificates: "",
        years: "",
        englishlevel: "",
        urdulevel: "",
        germanlevel: "",
        addskills: "",
        profiledescription: "",
        hourlyrate: "",
        uploadimage: "",
        address: "",
        country: "",
        city: "",
        zipcode: "",
        phoneno: "",
    });
    // console.log(formData);

    useEffect(() => {
        // Store formData in localStorage
        if (formData) {
            localStorage.setItem("signupData", JSON.stringify(formData));
        }
    }, [formData]);

    const [select, setSelect] = useState(1); // for moving to the next page

    // Function to validate and continue with email
    const handleContinueWithEmail = () => {
        const emailInput = document.querySelector('input[type="email"]');
        const passwordInput = document.querySelector('input[name="password"]');
        const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]');


        if (
            emailInput.checkValidity() &&
            passwordInput.value === confirmPasswordInput.value &&
            passwordInput.value.length >= 6
        ) {
            setSelect(2);
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Passwords do not match.");
        } else if (passwordInput.value.length < 6) {
            alert("Password should be at least 6 characters.");
        } else {
            alert("Please enter a valid email and matching passwords.");
        }
    };

    useEffect(()=>{
        if(token){
            router.push("/Profile");
        }
    }, [router])


    return (
        <>
            {select === 1 && (
                <div
                    className="container bg-white mx-auto mt-20 mb-20 w-[90%] lg:w-1/2 h-auto rounded-lg p-6 shadow-lg"
                    data-aos="fade-up" // Apply AOS animation
                >
                    <div className="flex flex-col items-center w-full">
                        <div className="heading">
                            <h2 className="text-center mb-4 text-2xl font-bold">
                                Get your free account
                            </h2>
                        </div>

                        <div className="flex w-[90%] lg:w-[75%] m-auto bg-blue-600 rounded-full place-content-center py-1">
                            <img src="'/Gmail.png" alt="" className="px-4" />
                            <button className="text-white font-bold text-lg">
                                Continue With Gmail
                            </button>
                        </div>

                        <p className="font-bold">or</p>
                        <div className="w-[90%] lg:w-[75%]">
                            <div className="input w-full m-auto">
                                <input
                                    className="px-4 h-12 my-2 border-2 w-full rounded-lg"
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    required
                                />
                                <input
                                    className="px-4 h-12 my-2 border-2 w-full rounded-lg"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setFormData({ ...formData, password: e.target.value })
                                    }
                                    required
                                />
                                <input
                                    className="px-4 h-12 my-2 border-2 w-full rounded-lg"
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    onChange={(e) =>
                                        setFormData({ ...formData, confirmPassword: e.target.value })
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleContinueWithEmail}
                            className="bg-red-600 hover:bg-red-700 my-2 p-2 w-[90%] lg:w-3/4 rounded-full text-white font-bold text-lg"
                            data-aos="zoom-in" // AOS animation on button
                        >
                            Continue with Email
                        </button>

                        <div>
                            <h2 className="my-2">
                                Already have an account?{" "}
                                <span
                                    className="text-red-500 hover:underline cursor-pointer"
                                    onClick={() => router.push("/Login")}
                                >
                                    Login
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            )}
            {select === 2 && (
                <Accountsetup
                    setSelect={setSelect}
                    formData={formData}
                    setFormData={setFormData}
                    // handleInputChange={handleInputChange}
                />
            )}

            {select === 3 && (
                <CreateProfile setSelect={setSelect} formData={formData} />
            )}

            {select === 4 && <Step1 
            setSelect={setSelect}
            formData={formData}
            setFormData={setFormData}
            />}
            {select === 5 && (
                <Step2
                    setSelect={setSelect}
                    formData={formData}
                    setFormData={setFormData}
                    handleClick={() => setSelect(6)}
                    text="Add work your experiences."
                    text2="Add Experience"
                    title1={(e) => setFormData({ ...formData, jobtitle: e.target.value })}  // Corrected formData
                    title2={(e)=>setFormData({...formData,company:e.target.value})}
                    title3={(e)=>setFormData({...formData,duration:e.target.value})}
                    placeholder1="Job Title"
                    placeholder2="Company"
                    placeholder3="Duration"
                    width="w-[24%]"
                    number={4}
                />
            )}
            {select === 6 && (
                <Step2
                    setSelect={setSelect}
                    formData={formData}
                    setFormData={setFormData}
                    handleClick={() => setSelect(7)}
                    text="Add your Education."
                    text2="Add Education"
                    title1={(e)=>setFormData({...formData,qualification:e.target.value})}
                    title2={(e)=>setFormData({...formData,certificates:e.target.value})}
                    title3={(e)=>setFormData({...formData,years:e.target.value})}
                    placeholder1="Qualification"
                    placeholder2="Certificates"
                    placeholder3="Years"
                    width="w-[36%]"
                    number={5}
                />
            )}
            {select === 7 && 
            <Step4 
            setSelect={setSelect} 
            formData={formData}
            setFormData={setFormData}
            
            />}
            {select === 8 && 
            <Step5 
            setSelect={setSelect}
            formData={formData}
            setFormData={setFormData} 
            />}
            {select === 9 && 
            <Step6
             setSelect={setSelect} 
             formData={formData}
            setFormData={setFormData} 
             />}
            {select === 10 &&
             <Step7 
             setSelect={setSelect}
             formData={formData}
            setFormData={setFormData} 
             />}
            {select === 11 &&
             <Step8 setSelect={setSelect} 
             formData={formData}
             setFormData={setFormData} 
             />}
        </>
    );
};

export default Signupmodule;
