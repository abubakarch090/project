// // import Image from "next/image";

// import { Inter } from "next/font/google";
// import { useRouter } from "next/router";


// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   const router = useRouter();
//   return (
//     <>
//       {/* Header Section */}
//       <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
//         <div className="flex items-center">
//           {/* <img className="h-5" src="/UPTECHUNT.png" alt="UPTECHUNT Logo" /> */}
//           <nav className="ml-10 space-x-6">
//             <a href="#" className="text-gray-800 hover:text-red-600">Find Talent</a>
//             <a href="#" className="text-gray-800 hover:text-red-600">Find Work</a>
//             <a href="#" className="text-gray-800 hover:text-red-600">Why UpTechhunt</a>
//           </nav>
//         </div>
//         <div className="flex items-center space-x-4">
//           <input type="text" placeholder="Search" className="border rounded-full px-4 py-1" />
//           <button className='text-white bg-slate-600 px-4 py-1 rounded-full'
//             onClick={() => router.push("/Login")}
//           >Log in</button>
//           <button className='text-white bg-red-600 px-4 py-1 rounded-full'
//             onClick={() => router.push("/Signup")}
//           >Sign up</button>
//         </div>
//       </header>

//       {/* Main Banner Section */}
//       <section className="bg-red-400 w-full h-64 relative flex justify-center items-center">
//         <img className="w-48 h-auto absolute left-0 bottom-0" src="/Vector.png" alt="" />
//         <div className="text-center">
//           <h1 className='text-3xl font-sans font-bold text-white'>Join world’s best market place</h1>
//           <h3 className='mt-3 text-white text-lg'>Find the best Talent and best works based on your skills from around the world.</h3>
//           <div className="flex justify-center gap-6 mt-6">
//             <button className='text-white font-bold bg-black py-2 px-6 rounded-full hover:bg-white hover:text-black'>Find Talents</button>
//             <button className='text-white border-white border-2 font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black'>Find Work</button>
//           </div>
//         </div>
//         <img className="absolute right-0 top-0 w-48 h-auto" src="/Frame1.png" alt="" />
//       </section>

//       {/* Find Best Talents Section */}

//       <section className="bg-gray-200 w-full h-64 flex justify-center items-center">
//         <div className="flex items-center w-[60%]">
//           <img className="h-60" src="/Frame2.png" alt="" />
//           <div className='ml-8'>
//             <h1 className='text-2xl font-bold'>Find best Talents</h1>
//             <h3 className='mt-3'>Find the best Talent and best works based on your skills from around the world.</h3>
//             <button className='bg-blue-500 py-2 px-8 mt-4 rounded-full text-white font-bold hover:bg-white hover:text-black'>Find Talents</button>
//           </div>
//         </div>
//       </section>

//       <hr className="border-8 border-green-700" />
//     </>
//   );
// }


import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"; // Next.js Image component
import Link from "next/link"; // Next.js Link component
import Cookies from 'js-cookie';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // const inter = Inter({ subsets: ["latin"] });
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  const token = Cookies.get('token');

  useEffect(()=>{
    if(token){
        router.push("/Profile");
    }
}, [router])


  return (
    <>
      <div className="bg-[#f0f0f0] min-h-screen font-sans">
        {/* Header */}
        <header className="flex justify-between items-center p-6" style={{ backgroundColor: "#f8f8f8" }}>
          <h1 className="text-4xl font-extrabold">
            <span className="text-5xl text-red-600">Art</span>
            <span className="text-[#333333]">Fusion</span>
          </h1>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="text-gray-800">{isNavOpen ? '✖️' : '☰'}</span>
          </button>

          <nav className={`md:flex space-x-8 w-[75%] text-gray-800 font-semibold ${isNavOpen ? 'block' : 'hidden'} md:block`}>
            <div className={`flex flex-col md:flex-row justify-between md:space-x-4 ${isNavOpen ? 'block' : 'hidden'} md:flex w-full`}>

              {/* Left section: Links */}
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-red-600 transition-all duration-300 my-3 mx-4">
                  Find Talent
                </Link>
                <Link href="#" className="hover:text-red-600 transition-all duration-300 my-3 mx-4">
                  Find Work
                </Link>
                <Link href="#" className="hover:text-red-600 transition-all duration-300 my-3 mx-4">
                  Find Job
                </Link>
              </div>

              {/* Right section: Search and buttons */}
              <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 mt-4 md:mt-0 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-600 w-full md:w-auto"
                />
                <button
                  onClick={() => router.push("/Login")}
                  className="text-gray-700 hover:text-red-600 transition-all duration-300 mt-2 md:mt-0 w-full md:w-auto"
                >
                  Log in
                </button>
                <button
                  onClick={() => router.push("/Signup")}
                  className="bg-red-600 text-white py-2 px-5 rounded-lg hover:bg-red-700 transition-all duration-300 mt-2 md:mt-0 w-full md:w-auto"
                >
                  Sign up
                </button>
              </div>

            </div>
          </nav>

        </header>

        {/* Main Section */}
        <main className="text-center py-20 px-4">
          <h2
            className="text-4xl md:text-6xl font-extrabold mt-8 text-[#282828] leading-tight"
            data-aos="fade-up"
          >
            Dive Into the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-[#282828]">World of</span> <br />
            <span className="text-red-600">Artistic Brilliance</span>
          </h2>

          <p
            className="mt-4 text-lg md:text-xl text-gray-700"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            "Discover endless inspiration from the creative masterpieces of world-class artists and visionary designers."
          </p>
          <button
            className="mt-8 bg-red-600 text-white py-3 px-8 md:px-10 rounded-full hover:bg-red-700 transition-all duration-300"
            data-aos="fade-up"
          >
            Get started
          </button>
        </main>
      </div>
    </>
  );
};

export default LandingPage;
