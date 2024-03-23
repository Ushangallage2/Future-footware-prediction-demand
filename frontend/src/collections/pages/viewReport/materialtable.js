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
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Check if the response is empty before parsing JSON
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
    const [fadeIn, setFadeIn] = useState(false);

    const fetchUsers = async () => {
        try {
            const users = await makeApiRequest('http://localhost:8080/report/getReport');
            setTblData(users);
            console.log(users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

  
    return (
        <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
            <div className="container-fluid calculated-bodywidth" style={{marginTop:'25%', marginLeft:'10%', width: '150%'}} id="bla">
                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
                        <div className="card h-100" id="contentcard">
                            <div className="card-body">
                                <h5>Reports</h5>
                                <MaterialTable
                                    components={{ 
                                        Container: (props) => <Paper {...props} elevation={0} style={{ borderRadius: '10px' ,backgroundColor: '#14498f', color: 'white'}} />,
                                        Toolbar: () => ( 
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px',backgroundColor: '#14498f' }}>
                                                <div>
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
        </div>
    );
};

export default Table;
