import React from 'react';
import '../assets/styles/upload-style.css'

const FileInput = ({ handleFileChange }) => {
  return (
    <label className="file-input-container">
      Escolha um arquivo
      <input
        className="file-input"
        type="file"
        onChange={handleFileChange}
        accept=".pdf"
      />
    </label>
  );
};

export default FileInput;
