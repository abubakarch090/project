import React, { useState } from 'react';
import Profiledata from './Components/Profiledata';
import Recentdata from './Components/Recentdata';   

const DataContainer = () => {

    const [selectedCategory, setSelectedCategory] = useState('Best Match');

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
                {selectedCategory === 'Best Match' && Profiledata.map((profile) => {
                    return (
                        <>
                        
                        <div  className='border p-4 mb-4 rounded-lg shadow'>
                        <h2 className='text-xl font-bold'>{profile.heading}</h2>
                        <h3 className='text-gray-600'>{profile.subheading}</h3>
                        <p className='text-gray-800'>{profile.explain}</p>
                    </div>
                
                        
                        </>
                    )
                })}
                   

                {selectedCategory === 'Recent' && Recentdata.map((recent) => {
                    return (
                        <>
                         <div className='border p-4 mb-4 rounded-lg shadow'>
                        <h2 className='text-xl font-bold'>{recent.heading}</h2>
                        <h3 className='text-gray-600'>{recent.subheading}</h3>
                        <p className='text-gray-800'>{recent.explain}</p>
                    </div>
                        </>
                    )
                })
                   
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
