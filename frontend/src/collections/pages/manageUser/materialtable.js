import React, { useEffect, useState } from 'react';
import { Paper, Button, Tooltip, IconButton, Modal, Backdrop, Fade, TextField } from "@material-ui/core"; 
import MaterialTable from "material-table";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

// Define the makeApiRequest function
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

    // Parse JSON response
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('API Request Error:', error.message);
    throw error;
  }
};

const Table = (props) => {
  const [tblData, setTblData] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Function to fetch user data from the database
  const fetchUsers = async () => {
    try {
      const users = await makeApiRequest('http://localhost:8080/user/allUsers');
      setTblData(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); // Fetch users on component mount

  // Function to handle adding a new user
  const handleAddUser = async (newUser) => {
    try {
      await makeApiRequest('http://localhost:8080/user/addUser', 'POST', newUser);
      fetchUsers(); // Refresh user data after adding a new user
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Function to handle editing a user
  const handleEditUser = (updatedUser) => {
    setEditUser(updatedUser);
    setOpenModal(true);
  };

  // Function to handle saving the edited user
  const handleSaveEditedUser = async () => {
    try {
      await makeApiRequest(`http://localhost:8080/user/editUser/${editUser.id}`, 'PUT', editUser);
      setOpenModal(false);
      fetchUsers(); // Refresh user data after saving the edited user
    } catch (error) {
      console.error('Error saving edited user:', error);
    }
  };

  // Function to handle closing the edit modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditUser(null);
  };

  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <h5>Manage User</h5>
                <MaterialTable
                  components={{
                    Container: (props) => <Paper {...props} elevation={0} style={{ borderRadius: '10px' }} />,
                    Toolbar: (props) => (
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
                        <div>
                          {/* Add your existing toolbar components here if needed */}
                        </div>
                        <div>
                          <Tooltip title="Add new User" enterTouchDelay={0}>
                            <Button
                              style={{ backgroundColor: '#003366', color: 'white' }} 
                              color="default"
                              size="small"
                              variant="outlined"
                              startIcon={<AddIcon style={{ color: 'silver' }} />}
                              onClick={handleAddUser}
                            >
                              Add new user
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
                  actions={[
                    {
                      icon: () => (
                        <IconButton
                          color="default"
                          size="small"
                          onClick={(event, rowData) => handleDeleteUser(rowData)}
                        >
                          <DeleteIcon style={{ color: 'silver' }} />
                        </IconButton>
                      ),
                      tooltip: "Delete",
                    },
                    {
                      icon: () => (
                        <IconButton
                          color="default"
                          size="small"
                          onClick={(event, rowData) => handleEditUser(rowData)}
                        >
                          <EditIcon style={{ color: 'silver' }} />
                        </IconButton>
                      ),
                      tooltip: "Edit",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Modal */}
      <Modal
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
            <h3>Edit User</h3>
            {/* Render form fields based on your user data structure */}
            <TextField
              label="First Name"
              value={editUser ? editUser.fName : ''}
              onChange={(e) => setEditUser({ ...editUser, fName: e.target.value })}
            />
            {/* Add other fields as needed */}
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <Button onClick={handleCloseModal} color="primary" style={{ marginRight: '10px' }}>
                Cancel
              </Button>
              <Button onClick={handleSaveEditedUser} color="primary">
                Save
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Table;
