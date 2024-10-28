import { useEffect } from "react";
import Back from "./Back";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Step6 = ({ setSelect, formData, setFormData }) => {
    const handleClick = () => {
        setSelect(10);
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

                <Back setSelect={setSelect} number={8} />

                <div className='h-2 rounded-lg bg-gray-300 mt-20 w-[90%] mx-auto'>
                    <div className='h-2 bg-red-500 w-[72%] rounded-lg'></div>
                </div>

                <div className='w-[90%] mx-auto mt-4' data-aos="fade-left">
                    <h1 className='font-bold text-2xl font-sans'>Add Profile Description.</h1>
                    <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>

                <div className='w-[50%]' data-aos="fade-right">
                    <h1 className='text-lg font-semibold mx-8 mt-4'>Profile Description</h1>
                </div>

                <div className="w-[90%] mx-auto mt-4" data-aos="fade-up">
                    <textarea
                        className='w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600'
                        placeholder="Enter text (up to 500 characters)"
                        rows="6"
                        cols="50"
                        onChange={(e) => setFormData({ ...formData, profiledescription: e.target.value })}
                    />
                </div>

                <div className='w-[95%] text-end mt-2'>
                    <p className='text-sm'>500 characters</p>
                </div>

                <div className='flex justify-center' data-aos="fade-up">
                    <button onClick={handleClick} className='bg-red-600 hover:bg-red-700 my-2 mt-12 p-2 w-[55%] rounded-full text-white text-lg'>
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}

export default Step6;
