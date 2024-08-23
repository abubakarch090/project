import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useState } from 'react'

const Back = ({setSelect, number}) => {
   

    const handleClick =()=>{
        setSelect(number)
    }
    return (
        <>
            <div className='flex w-[90%] m-auto mt-6'>
                <div>
                    <button onClick={handleClick}>  <ArrowBackIosIcon /> </button>
                </div>

                <div className='w-[95%]'>
                    <h2 className='text-end'>1/8</h2>
                </div>


            </div>
        </>
    )
}
export default Back
