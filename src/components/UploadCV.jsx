import React, { useState } from 'react';
import '../assets/styles/upload-style.css';

const inputStyle = {
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '8px',
  width: '200px',
  marginTop: '8px',
};

const UploadCV = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const pdfDataUrl = reader.result;
        onUpload(selectedFile.name, pdfDataUrl);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
     <input id="fileInput" className="custom-file-input" type="file" onChange={handleFileChange} accept=".pdf" />
    </div>
  );
};

export default UploadCV;
