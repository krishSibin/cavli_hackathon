import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { FaCloudUploadAlt } from "react-icons/fa";
import Graph from "../components/Graph";
import "./Uploader.css";
import AWS from 'aws-sdk';
import { NameContext } from '../Contexts/NameContext';
import { useNavigate } from 'react-router-dom';

const FileListPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [fileToUpload, setFileToUpload] = useState(null);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [propFile , setPropFile] = useState(null);
    const [graph, setGraph] = useState(false);
    useEffect(() => {
        const fetchS3Data = async () => {
            setLoading(true);

            AWS.config.update({
                accessKeyId: 'AKIA2E76VMBFZS337UX7',
                secretAccessKey: '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',
                region: 'ap-south-1'
            });

            const s3 = new AWS.S3();

            const params = {
                Bucket: 'reactuploaderapp',
            };

            try {
                const response = await s3.listObjectsV2(params).promise();
                const files = response.Contents.map((content) => content.Key);
                setUploadedFiles(files);
            } catch (error) {
                console.error('Error fetching data from S3:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchS3Data();
    }, []); 
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileToUpload(file);
    };

    const handleUpload = async () => {
        if (!fileToUpload) {
            alert('Please select a file to upload.');
            return;
        }

        setLoading(true);

        AWS.config.update({
            accessKeyId: 'AKIA2E76VMBFZS337UX7',
            secretAccessKey: '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',
            region: 'ap-south-1'
        });

        const s3 = new AWS.S3();

        const params = {
            Bucket: 'reactuploaderapp',
            Key: fileToUpload.name,
            Body: fileToUpload,
            ContentType: fileToUpload.type
        };

        try {
            await s3.upload(params).promise();
            alert('File uploaded successfully!');
            setUploadedFiles([...uploadedFiles, fileToUpload.name]);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file!');
        } finally {
            setLoading(false);
            handleCloseModal();
        }
    };

    return (
        <div className="upload">
            <div className="navupload">
                <h2 className="uploadHead text-center">Uploaded Files</h2>
                <Button variant="primary" className='uploadbut' onClick={handleShowModal}>
                    <p className='desktext'>Upload</p> <FaCloudUploadAlt className="mobicon"/>
                </Button>
            </div>
            <div className="horizontalsep"></div>

            <div className="fileList">
                
                    <div>
                        {uploadedFiles.map((file, index) =>{
                            const handleClick= ()=>{
                                localStorage.setItem("FILE_NAME",file);
                                navigate("/uploader/Graph");
                            }
                            return  (
                            
                            <div className="files" key={index} onClick={handleClick}>
                                <h5 className='filename'>{file}</h5>
                                
                            </div>
                        )})}
                      
                    </div>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload JSON File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFile">
                            <Form.Label>Select JSON File:</Form.Label>
                            <Form.Control type="file" onChange={handleFileChange} accept=".json" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" className="uploadbut2"onClick={handleUpload}>
                        {loading ? (
                            <>
                                <Spinner animation="border" size="sm" className="mr-2" />
                                Uploading...
                            </>
                        ) : (
                            'Upload'
                        )}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default FileListPage;
