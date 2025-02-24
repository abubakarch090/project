import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [image, setImage] = useState(null); // Selected Image File
    const [preview, setPreview] = useState(null); // Local Preview Before Upload
    const [uploadedImageUrl, setUploadedImageUrl] = useState(''); // Uploaded Image URL
    const [message, setMessage] = useState(''); // Message for User

    console.log(uploadedImageUrl, "uploadedImageUrl")
    console.log(image, "image")
    console.log(preview, "preview")
   
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file)); // Show Preview Before Upload
        }
    };

    // Handle File Upload
    const handleUpload = async () => {
        if (!image) {
            setMessage('❌ Please select an image first.');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);

        console.log(formData, "formData")

        try {
            const response = await axios.post('http://localhost:3000/api/images', formData, {
                // headers: { 'Content-Type': 'multipart/form-data' }
            });

            console.log(response, "response")
            console.log("response")

            if (response) {
                const imageUrl = `http://localhost:3000${response.data.filePath}`;
                setUploadedImageUrl(imageUrl); // Store Uploaded Image URL
                setMessage('✅ Image uploaded successfully!');
            } else {
                setMessage('❌ Upload failed. No file path received.');
            }

            console.log(response.data, "Response Data");
        } catch (error) {
            setMessage('❌ Upload failed. Try again.');
            console.error(error);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>📸 Upload Image</h2>

            {/* File Input */}
            <input type="file" accept="image/*" onChange={handleFileChange} />

            {/* Preview Before Upload */}
            {preview && (
                <div style={{ marginTop: '10px' }}>
                    <h4>🖼 Preview</h4>
                    <img src={preview} alt="Preview" style={{ width: '200px', borderRadius: '10px' }} />
                </div>
            )}

            {/* Upload Button */}
            <br />
            <button onClick={handleUpload} style={{ marginTop: '10px', padding: '10px', cursor: 'pointer' }}>
                🚀 Upload
            </button>

            {/* Message */}
            <p style={{ color: uploadedImageUrl ? 'green' : 'red', fontWeight: 'bold' }}>{message}</p>

            {/* Show Uploaded Image */}
            {uploadedImageUrl && (
                <div>
                    <h4>✅ Uploaded Image</h4>
                    <img src={uploadedImageUrl} alt="Uploaded" style={{ width: '200px', borderRadius: '10px' }} />
                    <p>
                        <a href={uploadedImageUrl} target="_blank" rel="noopener noreferrer">🔗 View Full Image</a>
                    </p>
                </div>
            )}

<img src={preview} alt="Uploaded" style={{ width: '200px', borderRadius: '10px' }} />
        </div>
    );
};

export default ImageUpload;
