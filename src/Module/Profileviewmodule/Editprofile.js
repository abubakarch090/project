import React, { useState } from 'react';
import { useProfileUpdateMutation } from '@/Redux/ApiSlice';
import { toast } from 'react-toastify';

const EditProfile = ({ handleModel, setupdatadata, updatedata }) => {
  const [updateProfile] = useProfileUpdateMutation();
  const [formData, setFormData] = useState({
    firstName: updatedata?.firstName || "",
    lastName: updatedata?.lastName || "",
    country: updatedata?.country || "",
    profileDescription: updatedata?.profileDescription || "",
    hourlyRate: updatedata?.hourlyRate || ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await updateProfile(formData).unwrap();
      toast.success(response?.message || "Profile updated successfully");
      handleModel();
    } catch (err) {
      toast.error(err?.data?.message || "Error updating profile");
    }
  };

  return (
    <div className="h-screen fixed top-0 bg-black bg-opacity-70 w-full flex items-center justify-center">
      <div className="w-[90%] lg:w-[50%] bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Edit Profile</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="number"
            name="hourlyRate"
            value={formData.hourlyRate}
            onChange={handleChange}
            placeholder="Hourly Rate ($/hr)"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="profileDescription"
            value={formData.profileDescription}
            onChange={handleChange}
            placeholder="Profile Description"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleSubmit}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Save
          </button>
          <button
            onClick={handleModel}
            className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
