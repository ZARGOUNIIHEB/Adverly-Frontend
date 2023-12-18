import React, { useState } from 'react';
import axios from 'axios';

const Testing = () => {
    const [selectedFiles, setSelectedFiles] = useState(null);

    const handleFileChange = (e) => {
        e.preventDefault();
        setSelectedFiles(e.target.files);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('images', selectedFiles[i]);
        }

        try {
            const response = await axios.post('http://localhost:5004/upload-images', formData);

            console.log("Result data:", response.data);
        } catch (error) {
            console.error('Error uploading files:', error);
        }

    };

    return (
        <div>
            <h1>Image Upload</h1>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default Testing;
