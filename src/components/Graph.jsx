// Graph.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Graph = () => {
   const file_name = localStorage.getItem("FILE_NAME");
   const navigate = useNavigate();
   if(file_name===null|| file_name==""){
    navigate("/uploader");
   }
    return (
        <div>
            <h1>{file_name}</h1>
        </div>
    );
};

export default Graph;
