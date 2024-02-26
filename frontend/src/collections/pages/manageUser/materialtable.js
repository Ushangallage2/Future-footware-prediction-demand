import React, { useEffect, useState } from 'react';
import { Paper, Button, Tooltip, IconButton, Modal, Backdrop, Fade, TextField } from "@material-ui/core"; 
import MaterialTable from "material-table";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing

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

  // New state for adding a new user
  const [newUser, setNewUser] = useState({
    fName: '',
    lName: '',
    email: '',
    role: '',
    username: '',
    password: '',
  });

  // Function to fetch user data from the database
  const fetchUsers = async () => {
    try {
      const users = await makeApiRequest('http://localhost:8080/user/allUsers');
      setTblData(users);
      console.log(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); 

  // Function to handle opening the add new user modal
  const handleOpenAddUserModal = () => {
    setNewUser({
      fName: '',
      lName: '',
      email: '',
      role: '',
      username: '',
      password: '',
    });
    setOpenModal(true);
  };

  // Function to handle adding a new user
  const handleAddUser = async () => {
    try {
      // Hash the password using bcrypt
      const hashedPassword = newUser.password ? await bcrypt.hash(newUser.password, 10) : undefined;

      // Prepare data to send to the server, including the hashed password
      const dataToSend = {
        ...newUser,
        password: hashedPassword,
      };

      // Make API request
      await makeApiRequest('http://localhost:8080/user/addUser', 'POST', dataToSend);

      // Fetch users and close the modal
      fetchUsers();
      setOpenModal(false);
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
      await makeApiRequest(`http://localhost:8080/user/editUser/${editUser.id}`, 'UPDATE', editUser);
      setOpenModal(false);
      fetchUsers(); // Refresh user data after saving the edited user
    } catch (error) {
      console.error('Error saving edited user:', error);
    }
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditUser(null);
  };

  // Function to handle deleting a user
  const handleDeleteUser = async (deletedUser) => {
    try {
      await makeApiRequest(`http://localhost:8080/user/deleteUser/${deletedUser.id}`, 'DELETE');
      fetchUsers(); // Refresh user data after deleting the user
    } catch (error) {
      console.error('Error deleting user:', error);
    }
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
                        </div>
                        <div>
                          <Tooltip title="Add new User" enterTouchDelay={0}>
                            <Button
                              style={{ backgroundColor: '#003366', color: 'white' }}
                              color="default"
                              size="small"
                              variant="outlined"
                              startIcon={<AddIcon style={{ color: 'silver' }} />}
                              onClick={handleOpenAddUserModal}
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
                        >
                          <DeleteIcon style={{ color: 'silver' }} />
                        </IconButton>
                      ),onClick:(event, rowData) =>  handleDeleteUser(rowData),
                      tooltip: "Delete",
                    },
                    {
                      icon: () => (
                        <IconButton
                          color="default"
                          size="small"
                        >
                          <EditIcon style={{ color: 'silver' }} />
                        </IconButton>
                      ), onClick:(event, rowData) => handleEditUser(rowData),
                      tooltip: "Edit",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add new user modal */}
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
            <h3>{editUser ? 'Edit User' : 'Add New User'}</h3>
            {/* Render input fields for adding/editing a user */}
            <TextField
              label="First Name"
              value={editUser ? editUser.fName : newUser.fName}
              onChange={(e) => editUser ? setEditUser({ ...editUser, fName: e.target.value }) : setNewUser({ ...newUser, fName: e.target.value })}
            />
            <TextField
              label="Last Name"
              value={editUser ? editUser.lName : newUser.lName}
              onChange={(e) => editUser ? setEditUser({ ...editUser, lName: e.target.value }) : setNewUser({ ...newUser, lName: e.target.value })}
            />
            <TextField
              label="Email"
              value={editUser ? editUser.email : newUser.email}
              onChange={(e) => editUser ? setEditUser({ ...editUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value })}
            />
            <TextField
              label="Role"
              value={editUser ? editUser.role : newUser.role}
              onChange={(e) => editUser ? setEditUser({ ...editUser, role: e.target.value }) : setNewUser({ ...newUser, role: e.target.value })}
            />
             <TextField
              label="Username"
              value={editUser ? editUser.username : newUser.username}
              onChange={(e) => editUser ? setEditUser({ ...editUser, username: e.target.value }) : setNewUser({ ...newUser, username: e.target.value })}
            />
           
            {/* Only show password field when adding a new user */}
            {!editUser && (
              <TextField
                label="Password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                type="password"
              />
            )}
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <Button onClick={handleCloseModal} color="primary" style={{ marginRight: '10px' }}>
                Cancel
              </Button>
              <Button onClick={editUser ? handleSaveEditedUser : handleAddUser} color="primary">
                {editUser ? 'Save' : 'Add User'}
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Table;
