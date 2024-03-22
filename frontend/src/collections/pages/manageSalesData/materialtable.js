import React, { useEffect, useState } from 'react';
import { Paper, Button, Tooltip, Modal, Backdrop, Fade } from "@material-ui/core";
import MaterialTable from "material-table";
import AddIcon from '@material-ui/icons/Add';
// import '../manageUser/Table.css';
// import '../manageUser/manageUsers.css';
import axios from 'axios';

const makeApiRequest = async (url, method = 'GET', data) => {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: method !== 'GET' ? JSON.stringify(data) : undefined,
        });

        if (!response.ok) {
            throw new Error('HTTP error! Status: ${response.status}');
        }
        const text = await response.text();
        const responseData = text ? JSON.parse(text) : null;

        return responseData;
    } catch (error) {
        console.log('API Request Error:', error);
        throw error;
    }
};

const Table = (props) => {
    const [tblData, setTblData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [newFiles, setNewFiles] = useState([]);
    const [fadeIn, setFadeIn] = useState(false);

    const fetchData = async () => {
        try {
            const data = await makeApiRequest('http://localhost:8080/sales/getSalesData');
            setTblData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        const delay = setTimeout(() => {
            setFadeIn(true);
        }, 500);

        return () => clearTimeout(delay);
    }, []);

    const handleOpenAddUserModal = () => {
        setNewFiles([]);
        setOpenModal(true);
    };

    const handleAddFiles = async () => {
        try {
            const formData = new FormData();
            newFiles.forEach(file => formData.append('files', file)); 
            await axios.post('http://localhost:8080/profile/uploadFiles', formData);
            fetchData();
            setOpenModal(false);
        } catch (error) {
            console.log('Error adding file:', error);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setNewFiles([]);
    };

    return (
        <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
            <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                                <h5>Manage Files</h5>
                                <MaterialTable
                                    components={{
                                        Container: (props) => <Paper {...props} elevation={0} style={{ borderRadius: '10px', backgroundColor: '#14498f', color: 'white' }} />,
                                        Toolbar: () => (
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', backgroundColor: '#14498f' }}>
                                                <div>
                                                </div>
                                                <div>
                                                    <Tooltip title="Add new File" enterTouchDelay={0}>
                                                        <Button
                                                            style={{
                                                                marginBottom: '8px',
                                                                textDecoration: 'none',
                                                                color: 'rgba(255, 255, 255, 0.661)',
                                                                background: 'rgba(255, 255, 255, 0.08)',
                                                                border: '2.5px solid #ff39b0e7',
                                                                padding: '6px',
                                                                lineHeight: '1',
                                                                fontSize: '14px',
                                                                borderRadius: '25px',
                                                                transition: 'all .55s ease',
                                                                marginLeft: '700px',
                                                                width: '200px',
                                                                // marginRight: '50px'
                                                            }}
                                                            onMouseOver={(e) => {
                                                                e.target.style.background = 'transparent';
                                                                e.target.style.color = '#ffffffe7';
                                                            }}
                                                            onMouseOut={(e) => {
                                                                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                                                e.target.style.color = 'rgba(255, 255, 255, 0.661)';
                                                            }}
                                                            onMouseDown={(e) => {
                                                                e.target.style.color = '#ff39b0e7';
                                                                e.target.style.transform = 'scale(0.95)';
                                                            }}
                                                            onMouseUp={(e) => {
                                                                e.target.style.color = 'rgba(255, 255, 255, 0.661)';
                                                                e.target.style.transform = 'scale(1)';
                                                            }}
                                                            size="small"
                                                            variant="outlined"
                                                            startIcon={<AddIcon style={{ color: 'silver' }} />}
                                                            onClick={handleOpenAddUserModal}
                                                        >
                                                            Add new file
                                                        </Button>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        ),
                                    }}
                                    options={{ actionsColumnIndex: -1 }}
                                    title="Previous Events"
                                    columns={props.col}
                                    data={tblData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                className="modal-center"
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
                        <h3>Add New File</h3>
                        <input
                            label="Files"
                            type='file'
                            name='files'
                            multiple
                            onChange={(e) => {
                                const files = e.target.files;
                                setNewFiles(Array.from(files));
                            }}
                            style={{ width: '100%', marginTop: '20px' }}
                        />
                        <div style={{ marginTop: '20px', textAlign: 'right' }}>
                            <Button onClick={handleCloseModal} color="primary" style={{ marginRight: '10px' }}>
                                Cancel
                            </Button>
                            {<Button onClick={handleAddFiles} color="primary" disabled={
                                !newFiles.length
                            } >
                                Add Files
                            </Button>}
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default Table;