import { useState } from "react";

import Accountsetup from "@/components/SetupProfile/Accountsetup";
import CreateProfile from "@/components/SetupProfile/CreateProfile";
import Step1 from "@/components/SetupProfile/Step1";
import Step2 from "@/components/SetupProfile/Step2";
import Step4 from "@/components/SetupProfile/Step4";
import Step5 from "@/components/SetupProfile/Step5";
import Step6 from "@/components/SetupProfile/Step6";
import Step7 from "@/components/SetupProfile/Step7";
import Step8 from "@/components/SetupProfile/Step8";

const Signupmodule =()=>{

    const [select,setSelect]= useState(1)
    
 
    const handleClickstep2 = ()=>{
        setSelect (6)
      
    }
    const handleClickstep3 = ()=>{
        setSelect (7)
     
    }
  

    
    return (
        <>


{
 select === 1 && (
    
    <div className='container bg-white mx-auto mt-20 mb-20 w-[90%]  lg:w-1/2 h-auto rounded-lg p-6 shadow-lg'>

    <div className='flex flex-col items-center w-full   '>

        <div className="heading">
            <h2 className="text-center mb-4  text-2xl font-bold">Get your free account</h2>   
        </div> 
        

      <div className='flex w-[90%] lg:w-[75%] m-auto bg-blue-600 rounded-full   place-content-center py-1 '>
      <img src="'/Gmail.png" alt="" className='px-4' />
      <button className=' text-white font-bold text-lg  '>
            Countinue With Gmail
        </button>

      </div>
        

        {/* <button className=" my-2 p-2 w-3/4  border-2 rounded-full text-black font-bold text-lg">
            Countinue With Apple ID
        </button> */}

        <p className='font-bold'>or</p>
        <div className=' w-[90%] lg:w-[75%]'>
        <div className="input w-full m-auto">
            <input 
                className="px-4 h-12 my-2 border-2  w-full rounded-lg " 
                type="text" 
                placeholder='Email address'
            />
        </div>

        </div>
      
        
        <button onClick={()=>setSelect(2)} className='bg-red-600 hover:bg-red-700 my-2 p-2 w-[90%] lg:w-3/4 rounded-full text-white font-bold text-lg'>
            Continue with Email
        </button>
        <div>
            <h2 className=' my-2'>Already have an account? <span className=' text-red-500 hover:underline cursor-pointer'>Login</span></h2>
           
        </div>
    </div>
</div>
    
 )
}

{select === 2 && (<Accountsetup setSelect={setSelect} />)}
{select === 3 && (<CreateProfile setSelect={setSelect} />)}
{select === 4 && (<Step1 setSelect={setSelect} 
/>)}


{select === 5 && (<Step2 setSelect={setSelect} handleClick={handleClickstep2}   text="Add work your experiences." text2="Add Expirence"
 placeholder1="Job Title"
 placeholder2="Company"
 placeholder3="Duration"
 width="w-[24%]"
 number={4}



/>)}

{select === 6 && (<Step2 setSelect={setSelect}  handleClick={handleClickstep3} text="Add your Education." text2="Add Education" 
    placeholder1="Qualification"
    placeholder2="Certificates"
    placeholder3="Years"
    width="w-[36%]"
    number={5}

   
/>

)}
{select === 7 && (<Step4 setSelect={setSelect} />)}
{select === 8 && (<Step5 setSelect={setSelect} />)}
{select === 9 && (<Step6 setSelect={setSelect} />)}
{select === 10 && (<Step7 setSelect={setSelect} />)}
{select === 11 && (<Step8 setSelect={setSelect} />)}

                    
           
        </>
    );
}

export default Signupmodule;