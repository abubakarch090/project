// import Image from "next/image";

import { Inter } from "next/font/google";
import { useRouter } from "next/router";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      {/* Header Section */}
      <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
        <div className="flex items-center">
          {/* <img className="h-5" src={UPTECHUNT} alt="UPTECHUNT Logo" /> */}
          <nav className="ml-10 space-x-6">
            <a href="#" className="text-gray-800 hover:text-red-600">Find Talent</a>
            <a href="#" className="text-gray-800 hover:text-red-600">Find Work</a>
            <a href="#" className="text-gray-800 hover:text-red-600">Why UpTechhunt</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search" className="border rounded-full px-4 py-1" />
          <button className='text-white bg-slate-600 px-4 py-1 rounded-full'
            onClick={() => router.push("/Login")}
          >Log in</button>
          <button className='text-white bg-red-600 px-4 py-1 rounded-full'
            onClick={() => router.push("/Signup")}
          >Sign up</button>
        </div>
      </header>

      {/* Main Banner Section */}
      <section className="bg-red-400 w-full h-64 relative flex justify-center items-center">
        {/* <img className="w-48 h-auto absolute left-0 bottom-0" src={Vector} alt="" /> */}
        <div className="text-center">
          <h1 className='text-3xl font-sans font-bold text-white'>Join world’s best market place</h1>
          <h3 className='mt-3 text-white text-lg'>Find the best Talent and best works based on your skills from around the world.</h3>
          <div className="flex justify-center gap-6 mt-6">
            <button className='text-white font-bold bg-black py-2 px-6 rounded-full hover:bg-white hover:text-black'>Find Talents</button>
            <button className='text-white border-white border-2 font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black'>Find Work</button>
          </div>
        </div>
        {/* <img className="absolute right-0 top-0 w-32 h-auto" src={Frame1} alt="" /> */}
      </section>

      {/* Find Best Talents Section */}
      <section className="bg-gray-200 w-full h-64 flex justify-center items-center">
        <div className="flex items-center w-[60%]">
          {/* <img className="h-60" src={Frame2} alt="" /> */}
          <div className='ml-8'>
            <h1 className='text-2xl font-bold'>Find best Talents</h1>
            <h3 className='mt-3'>Find the best Talent and best works based on your skills from around the world.</h3>
            <button className='bg-blue-500 py-2 px-8 mt-4 rounded-full text-white font-bold hover:bg-white hover:text-black'>Find Talents</button>
          </div>
        </div>
      </section>

      <hr className="border-8 border-green-700" />
    </>
  );
}
