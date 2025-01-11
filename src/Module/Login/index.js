import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";  // Import AOS styles
import { useLoginMutation } from '@/Redux/ApiSlice'; // Assuming you have a login mutation

import Cookies from 'js-cookie';
import { toast } from "react-toastify";

const LoginModules = () => {
    const router = useRouter();

            const token = Cookies.get('token');
    
    // State for form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // State for errors and loading
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Use login mutation from API slice
    const [login] = useLoginMutation();

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    


    // Handle form submission
    const handleLogin = async (e) => {
        e.preventDefault();

        // Validate form inputs
        if (!email || !password) {
            setError("Please fill in both fields.");
            return;
        }

        setLoading(true); // Start loading

        try {
            // Call login API
            const response = await login({ email, password }).unwrap();
            console.log(response, "response")
            if(response?.message === "Login successful"){
                toast.success(response?.message)
                Cookies.set("token", response?.token, { expires: 7 });  // Expires in 7 days

                      router.push("/Profile");
         }


        } catch (err) {
            setError(err?.data?.message || "Login failed. Please try again.");
            console.log(err);
            toast.error(err?.data?.message)
        } finally {
            setLoading(false); // Stop loading
        }
    };

    useEffect(()=>{
        if(token){
            router.push("/Profile");
        }
    }, [router])

    return (
        <>
            <div className='container bg-white mx-auto mt-20 mb-20 w-[90%] lg:w-1/2 h-auto rounded-lg p-6 shadow-lg' data-aos="zoom-in">

                <div className='flex flex-col items-center'>

                    <div className="heading">
                        <h2 className="text-center mb-4 text-2xl font-bold" data-aos="fade-up">Log in to your account</h2>
                    </div>

                    <div className='w-[90%] lg:w-[75%] m-auto'>
                        {/* Email input */}
                        <div className="input w-full m-auto">
                            <input
                                className="px-4 h-12 my-2 border-2 w-full rounded-lg"
                                type="text"
                                placeholder='Email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                data-aos="fade-up"
                            />
                        </div>

                        {/* Password input */}
                        <div className="input">
                            <input
                                className="px-4 h-12 my-2 border-2 w-full rounded-lg"
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                data-aos="fade-up"
                            />
                        </div>

                        {/* Show error message if any */}
                        {error && (
                            <div className="text-red-500 my-2 text-center">
                                <p>{error}</p>
                            </div>
                        )}
                    </div>

                    {/* Login button */}
                    <button 
                        className={`bg-red-600 hover:bg-red-700 my-2 p-2 w-[90%] lg:w-3/4 rounded-full text-white font-bold text-lg ${loading && "cursor-not-allowed opacity-50"}`} 
                        // data-aos="fade-up"
                        onClick={handleLogin}
                        // disabled={loading}
                    >
  L                ogin
                    </button>

                    {/* Sign up link */}
                    <div>
                        <h2 className='my-2' data-aos="zoom-in">
                            Don’t have an account? 
                            <span className='text-red-500 hover:underline cursor-pointer' 
                                onClick={() => router.push("/Signup")}
                            >Sign up</span>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginModules;
