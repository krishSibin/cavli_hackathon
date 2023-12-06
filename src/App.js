import React, { useState } from 'react';
import S3Uploader from './components/S3Upload';
import FileList from './components/S3Retrieve';
import Home from "./components/Home";
import Uploader from "./components/Uploader";
import Signup from "./components/Signup";
import Login from "./components/Login";
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Graph from './components/Graph';
function App() {
  const [fileListKey, setFileListKey] = useState(0); // Key to force FileList refresh

  const refreshFileList = () => {
    setFileListKey((prevKey) => prevKey + 1); // Update key to trigger refresh
  };

  return (
    <div className="App">
      {/* <h1>Upload and View Files</h1> */}
      {/* <S3Uploader onUploadSuccess={refreshFileList} /> */}
      {/* <FileList key={fileListKey} /> */}
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/uploader' element={<Uploader/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='/uploader/Graph' element={<Graph/>}/>
       </Routes>
    {/* //   <EChartsComponent data={jsonData} /> */}
    </div>
  );
}

export default App;
