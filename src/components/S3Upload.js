import React, { useState } from 'react';
import AWS from 'aws-sdk';

function S3Uploader({ onUploadSuccess }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    AWS.config.update({
      accessKeyId: 'AKIA2E76VMBFZS337UX7',
      secretAccessKey: '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',
      region: 'ap-south-1'
    });

    const s3 = new AWS.S3();

    const params = {
      Bucket: 'reactuploaderapp',
      Key: file.name,
      Body: file,
      ContentType: file.type
    };

    try {
      await s3.upload(params).promise();
      alert('File uploaded successfully!');
      // Trigger the callback function to refresh the file list
      if (typeof onUploadSuccess === 'function') {
        onUploadSuccess();
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file!');
    }
  };

  return (
    <div className="upload-container">
      <input type="file" accept=".json" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload to S3</button>
    </div>
  );
}

export default S3Uploader;
