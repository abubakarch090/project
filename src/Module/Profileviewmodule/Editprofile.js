import React from 'react';

const EditProfile = ({handleModel}) => {
    return (
        <>
            <div className="h-[100vh] fixed top-0 bg-black bg-opacity-70 w-[100vw]">
                <div className="container w-[90%] lg:w-[70%] bg-white border-2 border-black h-auto m-auto mt-16 rounded-lg shadow-lg pb-3">
                    <div className="w-[90%] m-auto mt-8 border-2 h-12 rounded-lg">
                        <input
                            className="w-full h-full p-2 rounded-lg"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div className="w-[90%] m-auto mt-4 border-2 h-12 rounded-lg">
                        <input
                            className="w-full h-full p-2 rounded-lg"
                            type="text"
                            placeholder="Lorem ipsum dolor, sit amet consectetur"
                        />
                    </div>

                    <div className="w-[90%] m-auto mt-2">
                        <h1 className="text-md font-bold">Hourly Rate</h1>
                    </div>
                    <div className="mx-auto w-[90%] mt-4 flex">
                        <input
                            className="w-[30%] border-2 p-2 rounded-lg"
                            type="text"
                            placeholder="Rate"
                        />
                        <p className="mt-1 mx-2 text-slate-400 text-2xl">/hr</p>
                    </div>
                    <div className="w-[90%] m-auto mt-4 border-2 h-40 rounded-lg">
                        <input
                            className="w-full h-full p-2 rounded-lg"
                            type="text"
                            placeholder="Lorem ipsum dolor, sit amet consectetur"
                        />
                    </div>

                    <div className="w-[90%] m-auto mt-4 flex justify-center gap-10">
                        <button className="border-2 p-2 px-6 rounded-full bg-red-300 hover:bg-red-400  shadow-md hover:shadow-lg">
                            Save
                        </button>
                        <button className="border-2 p-2 px-6 rounded-full bg-gray-200 hover:bg-gray-500  shadow-md hover:shadow-lg" onClick={handleModel}>
                            Cancel
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
