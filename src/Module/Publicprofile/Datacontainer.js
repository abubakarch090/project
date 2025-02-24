import React, { useEffect, useState } from 'react';
import Profiledata from './Components/Profiledata';
import Recentdata from './Components/Recentdata';   
import { useProfileQuery, useGetJobsQuery } from '@/Redux/ApiSlice'; // Assuming you have a login mutation


const DataContainer = ({value}) => {



    const [selectedCategory, setSelectedCategory] = useState('Best Match');

    const { data:jobsData} = useGetJobsQuery();
    const [data, setData] = useState(jobsData?.user)

    const filter = () => {
        if (!jobsData?.jobs) return; // اگر jobsData موجود نہ ہو تو کچھ نہ کرے
    
        const filteredData = jobsData.jobs.filter((val) => 
            val?.jobTitle?.toLowerCase().includes(value.toLowerCase()) // `value` کو چیک کریں
        );
    
        setData(filteredData);
    };
    
    useEffect(() => {
        filter();
    }, [value, jobsData]);
    

 console.log(jobsData, "jobsData")

    return (
        <>
            <div className='flex justify-around mt-4'>
            <h1 className={` px-4 py-2 rounded-md cursor-pointer ${selectedCategory === 'Best Match' ? 'bg-red-500' : ''}`}
                    onClick={() => setSelectedCategory('Best Match')}>
                        
                    Best Match</h1>

                    <h1 className={` px-4 py-2 rounded-md cursor-pointer ${selectedCategory === 'Recent' ? 'bg-red-500' : ''}`}
                    
                    onClick={() => setSelectedCategory('Recent')}
                >Recent</h1>

                <h1 className=' px-4 py-2 rounded-md cursor-pointer'>Saved</h1>

            </div>
            <hr className='mt-2' /> 

            <div className='mt-4'>
                {selectedCategory === 'Best Match' && data?.map((job) => {
                    return (
                        <>
                        
                        <div  className='border p-4 mb-4 rounded-lg shadow'>
                        <div className=' flex justify-between'>
                        <h2 className='text-xl font-bold'>{job?.jobTitle}</h2>
                        <h2 className='text-sm'>{job?.createdAt}</h2>
                        </div>
                        <h3 className='text-gray-600'>{job?.description}</h3>
                        <p className='text-gray-800'>{job?.skills}</p>
                        <p className='text-gray-800'>{job?.expertise}</p>
                        <div className=' flex justify-between'>
                        <p className='text-gray-800'>from {job?.fromHourlyRate}</p>
                        <p className='text-gray-800'> to {job?.toHourlyRate}</p>
                        <p className='text-gray-800'> Fixed Price {job?.priceFixed}</p>

                        </div>
                    </div>
                
                        
                        </>
                    )
                })}
                   

                   {selectedCategory === 'Recent' && 
    data
        ?.filter((job) => job?.expertise === 'Intermediate') // Filter jobs with 'Intermediate' expertise
        ?.map((job) => (
            <div key={job?.id} className='border p-4 mb-4 rounded-lg shadow'>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-bold'>{job?.jobTitle}</h2>
                    <h2 className='text-sm'>{job?.createdAt}</h2>
                </div>
                <h3 className='text-gray-600'>{job?.description}</h3>
                <p className='text-gray-800'>{job?.skills}</p>
                <p className='text-gray-800'>{job?.expertise}</p>
                <div className='flex justify-between'>
                    <p className='text-gray-800'>From ${job?.fromHourlyRate}</p>
                    <p className='text-gray-800'>To ${job?.toHourlyRate}</p>
                    <p className='text-gray-800'>Fixed Price: ${job?.priceFixed}</p>
                </div>
            </div>
        ))
}

            </div>
        </>
    );
};

export default DataContainer;



// {activeData.map((item, index) => (
//     <div key={index} className='mt-4'>
//       <h2 className='font-bold'>{item.heading}</h2>
//       <p className='text-sm'>{item.subheading}</p>
//       <p>{item.explain}</p>
//     </div>
//   ))}
