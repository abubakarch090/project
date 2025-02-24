import { useState } from "react";

const JobCreated = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    description: "",
    estimate: "",
    skills: "",
    expertise: "",
    fromHourlyRate: "",
    toHourlyRate: "",
    priceFixed: "",
    imageURL: "",
    clientName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response, "response")
      const data = await response.json();
      console.log(data, "data")
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Job Description" onChange={handleChange} className="w-full p-2 border rounded"></textarea>
        <input type="text" name="estimate" placeholder="Estimate" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="skills" placeholder="Skills" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="expertise" placeholder="Expertise" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="fromHourlyRate" placeholder="From Hourly Rate" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="toHourlyRate" placeholder="To Hourly Rate" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="priceFixed" placeholder="Fixed Price" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="imageURL" placeholder="Image URL" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="clientName" placeholder="Client Name" onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Post Job</button>
      </form>
    </div>
  );
};

export default JobCreated;