import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    AWS.config.update({
      accessKeyId: 'AKIA2E76VMBFZS337UX7',
      secretAccessKey: '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',
      region: 'ap-south-1'
    });

    const s3 = new AWS.S3();

    const params = {
      Bucket: 'reactuploaderapp'
    };

    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.error('Error fetching files:', err);
      } else {
        setFiles(data.Contents);
      }
    });
  }, []);

  return (
    <div className="file-list">
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.Key}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileList;
