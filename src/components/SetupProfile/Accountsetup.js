
const Accountsetup = ({setSelect}) => {

      const handleClick = ()=>{
        setSelect(3)
      }

  return (
    <>
     
      <div className="container  bg-white mx-auto mt-20 mb-20 w-[90%] lg:w-1/2 h-auto rounded-lg p-6 shadow-lg">

        <h1 className='text-center text-2xl font-bold'>Complete your free account setup</h1>

        <div className="form flex justify-center mt-7">


          <div className='flex justify-center items-center '>

            <div className='text-bold bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center'>
              M
            </div>
            <span className='mx-4'>xyz123@gmail.com</span>


          </div>


        </div>


        <div className="input md:mx-20 mt-7 p-1 md:flex gap-3 w-full md:w-[80%]  ">
          <input className=' w-full lg:mx-6 border-2 rounded-lg px-2 py-1 mb-1 md:m-0 ' type="text" placeholder='First Name' />
          <input className='w-full border-2 rounded-lg  px-2 py-1' type="text" placeholder='Last Name' />
        </div>


        <div className="mt-5 mx-20 ">
          <select
            className=" w-[100%] p-2 border-2 rounded-md  mx-7"
          >
            <option>Choose your country</option>
            <option value="PAK">Pakistan</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="in">India</option>

          </select>
        </div>


        <div className='text-center'>

          <h2 className='font-bold mt-4'>I am a :</h2>


          <div className=' grid grid-cols-2 w-[50%] m-auto gap-3 mt-3'>

            <div className='border-2 rounded-lg  '>
              <input className='mx-2' type="radio" value="Freelancer" />Freelancer
            </div>

            <div className=' border-2 rounded-lg '>
              <input className='mx-2' type="radio" value="Client" />Client
            </div>

          </div>

        </div>

        <div className="check mx-20 mt-6 flex items-start ">

          <input className='mx-2 mt-2 h-4' type="checkbox" />
          <span className='w-[90%]'>Yes! Send me genuinely useful emails every now and then to help me get the most out of Upwork.</span>

        </div>

        <div className="check mx-20 mt-4 flex items-start ">

          <input className='mx-2 mt-2 h-4 ' type="checkbox" />
          <span>Yes, I understand and agree to the
            <span className='text-red-500'> UPTECHUNT Terms of Service</span>, including the
            <span className='text-red-500'> User Agreement and Privacy Policy.</span>
          </span>

        </div>

        <div className="flex justify-center">
          <button  onClick={handleClick} className='bg-red-600 hover:bg-red-700 my-2 mt-9 p-2 w-[55%] rounded-full text-white font-bold text-lg'>
            Create New Account
          </button>
        </div>



      </div>
HIII

    </>
  );
}

export default Accountsetup;