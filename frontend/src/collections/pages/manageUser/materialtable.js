import React, { useEffect, useState } from 'react';
import { Paper, Button, Tooltip, IconButton, Modal, Backdrop, Fade, TextField } from "@material-ui/core";
import MaterialTable from "material-table";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import './Table.css'; // Import the CSS file
import './manageUsers.css' ;


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
    const [editUser, setEditUser] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [newUser, setNewUser] = useState({
        fName: '',
        lName: '',
        email: '',
        role: '',
        username: '',
        password: '',
    });
    const [error, setError] = useState({
        email: '',
        password: ''
    });

    const [fadeIn, setFadeIn] = useState(false);

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

        // Set fade-in to true after a short delay to trigger the fade-in effect
        const delay = setTimeout(() => {
            setFadeIn(true);
        }, 500);

        return () => clearTimeout(delay);
    }, []);

    const handleOpenAddUserModal = () => {
        setEditUser(null);
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

    const handleAddUser = async () => {
        try {
            if(!error.email || !error.password){
                const hashedPassword = newUser.password ? await bcrypt.hash(newUser.password, 10) : undefined;
            const dataToSend = {
                ...newUser,
                password: hashedPassword
            };

            const response = await makeApiRequest('http://localhost:8080/user/addUser', 'POST', dataToSend);
            console.log("this is the error");

            fetchUsers();
            setOpenModal(false);
            }

        } catch (error) {
            console.log('Error adding user:', error);
        }
    };

    const handleEditUser = (updatedUser) => {
        setEditUser(updatedUser);
        setOpenModal(true);
    };

    // const handleSaveEditedUser = async () => {
    //     try {
    //         await makeApiRequest('http://localhost:8080/user/editUser/${editUser.id}', 'PUT', editUser);
    //         setOpenModal(false);
    //         fetchUsers();
    //     } catch (error) {
    //         console.log('Error saving edited user:', error);
    //     }
    // };

    const handleCloseModal = () => {
        setOpenModal(false);
        setEditUser(null);
        setNewUser({
            fName: '',
            lName: '',
            email: '',
            role: '',
            username: '',
            password: '',
        });
    };
    // const handleSaveEditedUser = async () => {
    //     if (editUser && validateEmail(editUser.email)) {  // Assuming you want to validate the email of the user being edited
    //         try {
    //             const dataToUpdate = { ...editUser, ...newUser };
    //             if (newUser.password) {
    //                 dataToUpdate.password = await bcrypt.hash(newUser.password, 10);
    //             }
    //             await makeApiRequest(http://localhost:8080/user/editUser/${editUser.id}, 'PUT', dataToUpdate);
    //             setOpenModal(false);
    //             fetchUsers();
    //         } catch (error) {
    //             console.log('Error saving edited user:', error);
    //         }
    //     }
    // };
    const handleSaveEditedUser = async () => {
        try {
            await makeApiRequest(`http://localhost:8080/user/editUser/${editUser.id}`, 'PUT', editUser);
            setOpenModal(false);
            fetchUsers();
        } catch (error) {
            console.log('Error saving edited user:', error);
        }
    };
    // const handleDeleteUser = async (deletedUser) => {
    //     try {
    //         await makeApiRequest('http://localhost:8080/user/deleteUser/${deletedUser.id}', 'DELETE');
    //         fetchUsers();
    //     } catch (error) {
    //         console.log('Error deleting user:', error);
    //     }
    // };
    const handleDeleteUser = async (deletedUser) => {
        try {
            await makeApiRequest(`http://localhost:8080/user/deleteUser/${deletedUser.id}`, 'DELETE');
            fetchUsers();
        } catch (error) {
            console.log('Error deleting user:', error);
        }
    };


    
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            setError({ ...error, email: 'Invalid email' });
        } else {
            setError({ ...error, email: '' });
        }
    };

    const validatePassword = (password) => {
        if (password.length < 8) {
            setError({ ...error, password: 'Password must be at least 8 characters long' });
        }else if(password.length > 15){
            setError({ ...error, password: 'Password must be less than 15 characters long' });
        } else if(password.search(/\d/) === -1){
            setError({ ...error, password: 'Password must contain at least one number' });
        }else if(password.search(/[!@#$%^&*]/) === -1){
            setError({ ...error, password: 'Password must contain at least one special character' });
        }else if(password.search(/\s/) !== -1){
            setError({ ...error, password: 'Passwo]rd must not contain any whitespace' });
        }else if(password.search(/[A-Z]/) === -1){
            setError({ ...error, password: 'Password must contain at least one uppercase letter' });
        }else if(password.search(/[a-z]/) === -1){
            setError({ ...error, password: 'Password must contain at least one lowercase letter' });
        }else {
            setError({ ...error, password: '' });
        }
    };

    return (
        <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
            <div className="container-fluid calculated-bodywidth" style={{marginTop:'8%', marginLeft:'3%', width: '100%'}} id="bla">
                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
                        <div className="card h-100" id="contentcard">
                            <div className="card-body">
                                <h5>Manage Users</h5>
                                <MaterialTable
                                    components={{ 
                                        Container: (props) => <Paper {...props} elevation={0} style={{ borderRadius: '10px' ,backgroundColor: '#14498f', color: 'white'}} />,
                                        Toolbar: () => ( 
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px',backgroundColor: '#14498f' }}>
                                                <div>
                                                </div>
                                                <div>
                                                    <Tooltip title="Add new User" enterTouchDelay={0}>
                                                        {/* <Button
                                                            style={{ backgroundColor: '#003366', color: 'white' }}
                                                            color="default"
                                                            size="small"
                                                            variant="outlined"
                                                            startIcon={<AddIcon style={{ color: 'silver' }} />}
                                                            onClick={handleOpenAddUserModal}
                                                        >
                                                            Add new user
                                                        </Button> */}
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
                                            ), onClick: (event, rowData) => handleDeleteUser(rowData),
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
                                            ), onClick: (event, rowData) => handleEditUser(rowData),
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
                    <div style={{ backgroundColor: 'rgba(119, 180, 250, 0.966)', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '10%' }}>
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
                            onChange={(e) => {
                                editUser ? setEditUser({ ...editUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value });
                                validateEmail(e.target.value);
                            }}
                        />
                        {error.email && <p style={{ color: 'red', fontSize: '12px' }}>{error.email}</p>}
                        {/* <TextField
              label="Role"
              value={editUser ? editUser.role : newUser.role}
              onChange={(e) => editUser ? setEditUser({ ...editUser, role: e.target.value }) : setNewUser({ ...newUser, role: e.target.value })}
            /> */}
                        <FormControl fullWidth>
                            <InputLabel id="role-label">Role</InputLabel>
                            <Select
                                labelId="role-label"
                                id="role"
                                value={editUser ? editUser.role : newUser.role}
                                onChange={(e) => editUser ? setEditUser({ ...editUser, role: e.target.value }) : setNewUser({ ...newUser, role: e.target.value })}
                            >
                                <MenuItem value="sales">Sales</MenuItem>
                                <MenuItem value="marketing">Marketing</MenuItem>
                                <MenuItem value="admin">Admin</MenuItem>
                                <MenuItem value="product">Product</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            label="Username"
                            value={editUser ? editUser.username : newUser.username}
                            onChange={(e) => editUser ? setEditUser({ ...editUser, username: e.target.value }) : setNewUser({ ...newUser, username: e.target.value })}
                        />

                        {!editUser && (
                            <TextField
                                label="Password"
                                value={newUser.password}
                                onChange={(e) => {
                                    setNewUser({ ...newUser, password: e.target.value });
                                    validatePassword(e.target.value);
                                }}
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                        {error.password && <p style={{ color: 'red', fontSize: '12px' }}>{error.password}</p>}
                        <div style={{ marginTop: '20px', textAlign: 'right' }}>
                            <Button onClick={handleCloseModal} color="primary" style={{ marginRight: '10px' }}>
                                Cancel
                            </Button>
                            { <Button onClick={editUser ? handleSaveEditedUser : handleAddUser} color="primary" disabled={
                                !newUser.fName || !newUser.lName || !newUser.email || !newUser.role || !newUser.username || !newUser.password || error.email || error.password
                            } >
                           {editUser ? 'Save' : 'Add User'}
                               
                             </Button> }
                           
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default Table;


// import React, { useEffect, useState } from 'react';
// import { Paper, Button, Tooltip, IconButton, Modal, Backdrop, Fade, TextField } from "@material-ui/core";
// import MaterialTable from "material-table";
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import AddIcon from '@material-ui/icons/Add';
// import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
// import './Table.css'; // Import the CSS file

// // Define the makeApiRequest function
// const makeApiRequest = async (url, method = 'GET', data) => {
//     try {
//         const response = await fetch(url, {
//             method,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: method !== 'GET' ? JSON.stringify(data) : undefined,
//         });

//         if (!response.ok) {
//             throw new Error(HTTP error! Status: ${response.status});
//         }

//         // Check if the response is empty before parsing JSON
//         const text = await response.text();
//         const responseData = text ? JSON.parse(text) : null;

//         return responseData;
//     } catch (error) {
//         console.error('API Request Error:', error);
//         throw error;
//     }
// };

// const Table = (props) => {
//     const [tblData, setTblData] = useState([]);
//     const [editUser, setEditUser] = useState(null);
//     const [openModal, setOpenModal] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const [newUser, setNewUser] = useState({
//         fName: '',
//         lName: '',
//         email: '',
//         role: '',
//         username: '',
//         password: '',
//     });
//     const [error, setError] = useState({
//                 email: '',
//                 password: ''
//             });


//     const [fadeIn, setFadeIn] = useState(false);

//     const fetchUsers = async () => {
//         try {
//             const users = await makeApiRequest('http://localhost:8080/user/allUsers');
//             setTblData(users);
//             console.log(users);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     useEffect(() => {
//         fetchUsers();

//         // Set fade-in to true after a short delay to trigger the fade-in effect
//         const delay = setTimeout(() => {
//             setFadeIn(true);
//         }, 500);

//         return () => clearTimeout(delay);
//     }, []);

//     const handleOpenAddUserModal = () => {
//         setEditUser(null);
//         setNewUser({
//             fName: '',
//             lName: '',
//             email: '',
//             role: '',
//             username: '',
//             password: '',
//         });
//         setOpenModal(true);
//     };

//     // const handleAddUser = async () => {
//     //     try {
//     //         const hashedPassword = newUser.password ? await bcrypt.hash(newUser.password, 10) : undefined;
//     //         const dataToSend = {
//     //             ...newUser,
//     //             password: hashedPassword
//     //         };

//     //         const response = await makeApiRequest('http://localhost:8080/user/addUser', 'POST', dataToSend);
//     //         console.log("this is the error");

//     //         fetchUsers();
//     //         setOpenModal(false);

//     //     } catch (error) {
//     //         console.log('Error adding user:', error);
//     //     }
//     // };
//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const handleAddUser = async () => {
//         if (newUser.fName && newUser.lName && newUser.email && newUser.role && newUser.username && newUser.password) {
//             const isEmailValid = validateEmail(newUser.email);
//             const isPasswordValid = validatePassword(newUser.password);

//             if (isEmailValid && isPasswordValid) {
//                 try {
//                     const hashedPassword = await bcrypt.hash(newUser.password, 10);
//                     await makeApiRequest('http://localhost:8080/user/addUser', 'POST', { ...newUser, password: hashedPassword });
//                     setOpenModal(false);
//                     fetchUsers();
//                 } catch (error) {
//                     console.log('Error adding user:', error);
//                 }
//             }
//         }
//     };

//     const handleEditUser = (updatedUser) => {
//         setEditUser(updatedUser);
//         setOpenModal(true);
//     };

//     const handleSaveEditedUser = async () => {
//         try {
//             await makeApiRequest(http://localhost:8080/user/editUser/${editUser.id}, 'PUT', editUser);
//             setOpenModal(false);
//             fetchUsers();
//         } catch (error) {
//             console.log('Error saving edited user:', error);
//         }
//     };

//     const handleCloseModal = () => {
//         setOpenModal(false);
//         setEditUser(null);
//         setNewUser({
//             fName: '',
//             lName: '',
//             email: '',
//             role: '',
//             username: '',
//             password: '',
//         });
//     };

//     const handleDeleteUser = async (deletedUser) => {
//         try {
//             await makeApiRequest(http://localhost:8080/user/deleteUser/${deletedUser.id}, 'DELETE');
//             fetchUsers();
//         } catch (error) {
//             console.log('Error deleting user:', error);
//         }
//     };
//     // const validateEmail = (email) => {
//     //     const re = /\S+@\S+\.\S+/;
//     //     if (!re.test(email)) {
//     //         setError({ ...error, email: 'Invalid email' });
//     //     } else {
//     //         setError({ ...error, email: '' });
//     //     }
//     // };

//     // const validatePassword = (password) => {
//     //     if (password.length < 8) {
//     //         setError({ ...error, password: 'Password must be at least 8 characters long' });
//     //     }else if(password.length > 15){
//     //         setError({ ...error, password: 'Password must be less than 15 characters long' });
//     //     } else if(password.search(/\d/) === -1){
//     //         setError({ ...error, password: 'Password must contain at least one number' });
//     //     }else if(password.search(/[!@#$%^&*]/) === -1){
//     //         setError({ ...error, password: 'Password must contain at least one special character' });
//     //     }else if(password.search(/\s/) !== -1){
//     //         setError({ ...error, password: 'Passwo]rd must not contain any whitespace' });
//     //     }else if(password.search(/[A-Z]/) === -1){
//     //         setError({ ...error, password: 'Password must contain at least one uppercase letter' });
//     //     }else if(password.search(/[a-z]/) === -1){
//     //         setError({ ...error, password: 'Password must contain at least one lowercase letter' });
//     //     }else {
//     //         setError({ ...error, password: '' });
//     //     }
//     // };
 
//     const validateEmail = (email) => {
//         const re = /\S+@\S+\.\S+/;
//         return re.test(email); // Just return the validation result
//     };
    
//     const validatePassword = (password) => {
//         if (password.length < 8) {
//             return false;
//         } else if (password.length > 15) {
//             return false;
//         } else if (!/\d/.test(password)) {
//             return false;
//         } else if (!/[!@#$%^&*]/.test(password)) {
//             return false;
//         } else if (/\s/.test(password)) {
//             return false;
//         } else if (!/[A-Z]/.test(password)) {
//             return false;
//         } else if (!/[a-z]/.test(password)) {
//             return false;
//         }
//         return true; // Password is valid
//     };
    
//     const canAddUser = () => {
//         const isEmailValid = validateEmail(newUser.email);
//         const isPasswordValid = validatePassword(newUser.password);
    
//         // Update error state based on validation
//         setError(prev => ({
//             ...prev,
//             email: isEmailValid ? '' : 'Invalid email',
//             password: isPasswordValid ? '' : 'Invalid or incomplete password'
//         }));
    
//         return newUser.fName && newUser.lName && newUser.email && newUser.role && newUser.username && newUser.password && isEmailValid && isPasswordValid;
//     };
    
//     return (
//         <div className={fade-in ${fadeIn ? 'visible' : ''}}>
//             <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
//                 <div className="row gutters mt-3">
//                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                         <div className="card h-100" id="contentcard">
//                             <div className="card-body ">
//                                 <h5>Manage User</h5>
//                                 <MaterialTable
//                                     components={{
//                                         Container: (props) => <Paper {...props} elevation={0} style={{ borderRadius: '10px' }} />,
//                                         Toolbar: (props) => (
//                                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
//                                                 <div>
//                                                 </div>
//                                                 <div>
//                                                     <Tooltip title="Add new User" enterTouchDelay={0}>
//                                                         <Button
//                                                             style={{ backgroundColor: '#003366', color: 'white' }}
//                                                             color="default"
//                                                             size="small"
//                                                             variant="outlined"
//                                                             startIcon={<AddIcon style={{ color: 'silver' }} />}
//                                                             onClick={handleOpenAddUserModal}
//                                                         >
//                                                             Add new user
//                                                         </Button>
//                                                     </Tooltip>
//                                                 </div>
//                                             </div>
//                                         ),
//                                     }}
//                                     options={{ actionsColumnIndex: -1 }}
//                                     title="Previous Events"
//                                     columns={props.col}
//                                     data={tblData}
//                                     actions={[
//                                         {
//                                             icon: () => (
//                                                 <IconButton
//                                                     color="default"
//                                                     size="small"
//                                                 >
//                                                     <DeleteIcon style={{ color: 'silver' }} />
//                                                 </IconButton>
//                                             ), onClick: (event, rowData) => handleDeleteUser(rowData),
//                                             tooltip: "Delete",
//                                         },
//                                         {
//                                             icon: () => (
//                                                 <IconButton
//                                                     color="default"
//                                                     size="small"
//                                                 >
//                                                     <EditIcon style={{ color: 'silver' }} />
//                                                 </IconButton>
//                                             ), onClick: (event, rowData) => handleEditUser(rowData),
//                                             tooltip: "Edit",
//                                         },
//                                     ]}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Add new user modal */}
//             <Modal
//                 open={openModal}
//                 onClose={handleCloseModal}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                     timeout: 500,
//                 }}
//             >
//                 <Fade in={openModal}>
//                     <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
//                         <h3>{editUser ? 'Edit User' : 'Add New User'}</h3>
//                         {/* Render input fields for adding/editing a user */}
//                         <TextField
//                             label="First Name"
//                             value={editUser ? editUser.fName : newUser.fName}
//                             onChange={(e) => editUser ? setEditUser({ ...editUser, fName: e.target.value }) : setNewUser({ ...newUser, fName: e.target.value })}
//                         />
//                         <TextField
//                             label="Last Name"
//                             value={editUser ? editUser.lName : newUser.lName}
//                             onChange={(e) => editUser ? setEditUser({ ...editUser, lName: e.target.value }) : setNewUser({ ...newUser, lName: e.target.value })}
//                         />
//                         {/* <TextField
//                             label="Email"
//                             value={editUser ? editUser.email : newUser.email}
//                             onChange={(e) => editUser ? setEditUser({ ...editUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value })}
//                         /> */}
//                         <TextField
//                             label="Email"
//                             value={editUser ? editUser.email : newUser.email}
//                             onChange={(e) => {
//                                 editUser ? setEditUser({ ...editUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value });
//                                 validateEmail(e.target.value);
//                             }}
//                         />
//                           {error.email && <p style={{ color: 'red', fontSize: '12px' }}>{error.email}</p>}
//                         {/* <TextField
//               label="Role"
//               value={editUser ? editUser.role : newUser.role}
//               onChange={(e) => editUser ? setEditUser({ ...editUser, role: e.target.value }) : setNewUser({ ...newUser, role: e.target.value })}
//             /> */}
//                         <FormControl fullWidth>
//                             <InputLabel id="role-label">Role</InputLabel>
//                             <Select
//                                 labelId="role-label"
//                                 id="role"
//                                 value={editUser ? editUser.role : newUser.role}
//                                 onChange={(e) => editUser ? setEditUser({ ...editUser, role: e.target.value }) : setNewUser({ ...newUser, role: e.target.value })}
//                             >
//                                 <MenuItem value="sales">Sales</MenuItem>
//                                 <MenuItem value="marketing">Marketing</MenuItem>
//                                 <MenuItem value="admin">Admin</MenuItem>
//                                 <MenuItem value="product">Product</MenuItem>
//                             </Select>
//                         </FormControl>

//                         <TextField
//                             label="Username"
//                             value={editUser ? editUser.username : newUser.username}
//                             onChange={(e) => editUser ? setEditUser({ ...editUser, username: e.target.value }) : setNewUser({ ...newUser, username: e.target.value })}
//                         />

//                                           {!editUser && (
//                                                        <TextField 
//                                                             label="Password"
//                                                             value={newUser.password}
//                                                             onChange={(e) => {
//                                                                 setNewUser({ ...newUser, password: e.target.value });
//                                                                 validatePassword(e.target.value);
//                                                             }}
//                                                             type={showPassword ? 'text' : 'password'}
//                                                             InputProps={{
//                                                                 endAdornment: (
//                                                                     <InputAdornment position="end">
//                                                                         <IconButton
//                                                                             edge="end"
//                                                                             onClick={() => setShowPassword(!showPassword)}
//                                                                         >
//                                                                             {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                                                         </IconButton>
//                                                                     </InputAdornment>
//                                                                 ),
//                                                             }}
//                                                         />   )}
//                          {error.password && <p style={{ color: 'red', fontSize: '12px' }}>{error.password}</p>}
//                         <div style={{ marginTop: '20px', textAlign: 'right' }}>
//                             <Button onClick={handleCloseModal} color="primary" style={{ marginRight: '10px' }}>
//                                 Cancel
//                             </Button>
//                             {/* <Button onClick={editUser ? handleSaveEditedUser : handleAddUser} color="primary" >
//                             {editUser ? 'Save' : 'Add User'}
                               
//                             </Button> */}
//                              <Button onClick={editUser ? handleSaveEditedUser : handleAddUser} color="primary" disabled={!canAddUser()}>
//                             {editUser ? 'Save' : 'Add User'}
//                              </Button>
//                         </div>
//                     </div>
//                 </Fade>
//             </Modal>
//         </div>
//     );
// };

// export default Table;





// import React, { useEffect, useState } from 'react'------------------old--------------------------;
// import { Paper, Button, Tooltip, IconButton, Modal, Backdrop, Fade, TextField } from "@material-ui/core";
// import MaterialTable from "material-table";
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import AddIcon from '@material-ui/icons/Add';
// import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
// import './Table.css'; // Import the CSS file
// import './manageUsers.css' ;


// const makeApiRequest = async (url, method = 'GET', data) => {
//     try {
//         const response = await fetch(url, {
//             method,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: method !== 'GET' ? JSON.stringify(data) : undefined,
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // Check if the response is empty before parsing JSON
//         const text = await response.text();
//         const responseData = text ? JSON.parse(text) : null;

//         return responseData;
//     } catch (error) {
//         console.log('API Request Error:', error);
//         throw error;
//     }
// };

// const Table = (props) => {
//     const [tblData, setTblData] = useState([]);
//     const [editUser, setEditUser] = useState(null);
//     const [openModal, setOpenModal] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const [newUser, setNewUser] = useState({
//         fName: '',
//         lName: '',
//         email: '',
//         role: '',
//         username: '',
//         password: '',
//     });
//     const [error, setError] = useState({
//         email: '',
//         password: ''
//     });

//     const [fadeIn, setFadeIn] = useState(false);

//     const fetchUsers = async () => {
//         try {
//             const users = await makeApiRequest('http://localhost:8080/user/allUsers');
//             setTblData(users);
//             console.log(users);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     useEffect(() => {
//         fetchUsers();

//         // Set fade-in to true after a short delay to trigger the fade-in effect
//         const delay = setTimeout(() => {
//             setFadeIn(true);
//         }, 500);

//         return () => clearTimeout(delay);
//     }, []);

//     const handleOpenAddUserModal = () => {
//         setEditUser(null);
//         setNewUser({
//             fName: '',
//             lName: '',
//             email: '',
//             role: '',
//             username: '',
//             password: '',
//         });
//         setOpenModal(true);
//     };

//     const handleAddUser = async () => {
//         try {
//             if(!error.email || !error.password){
//                 const hashedPassword = newUser.password ? await bcrypt.hash(newUser.password, 10) : undefined;
//             const dataToSend = {
//                 ...newUser,
//                 password: hashedPassword
//             };

//             const response = await makeApiRequest('http://localhost:8080/user/addUser', 'POST', dataToSend);
//             console.log("this is the error");

//             fetchUsers();
//             setOpenModal(false);
//             }

//         } catch (error) {
//             console.log('Error adding user:', error);
//         }
//     };

//     const handleEditUser = (updatedUser) => {
//         setEditUser(updatedUser);
//         setOpenModal(true);
//     };

//     // const handleSaveEditedUser = async () => {
//     //     try {
//     //         await makeApiRequest('http://localhost:8080/user/editUser/${editUser.id}', 'PUT', editUser);
//     //         setOpenModal(false);
//     //         fetchUsers();
//     //     } catch (error) {
//     //         console.log('Error saving edited user:', error);
//     //     }
//     // };

//     const handleCloseModal = () => {
//         setOpenModal(false);
//         setEditUser(null);
//         setNewUser({
//             fName: '',
//             lName: '',
//             email: '',
//             role: '',
//             username: '',
//             password: '',
//         });
//     };
//     // const handleSaveEditedUser = async () => {
//     //     if (editUser && validateEmail(editUser.email)) {  // Assuming you want to validate the email of the user being edited
//     //         try {
//     //             const dataToUpdate = { ...editUser, ...newUser };
//     //             if (newUser.password) {
//     //                 dataToUpdate.password = await bcrypt.hash(newUser.password, 10);
//     //             }
//     //             await makeApiRequest(`http://localhost:8080/user/editUser/${editUser.id}`, 'PUT', dataToUpdate);
//     //             setOpenModal(false);
//     //             fetchUsers();
//     //         } catch (error) {
//     //             console.log('Error saving edited user:', error);
//     //         }
//     //     }
//     // };
//     const handleSaveEditedUser = async () => {
//         try {
//             await makeApiRequest(`http://localhost:8080/user/editUser/${editUser.id}`, 'PUT', editUser);
//             setOpenModal(false);
//             fetchUsers();
//         } catch (error) {
//             console.log('Error saving edited user:', error);
//         }
//     };
//     // const handleDeleteUser = async (deletedUser) => {
//     //     try {
//     //         await makeApiRequest('http://localhost:8080/user/deleteUser/${deletedUser.id}', 'DELETE');
//     //         fetchUsers();
//     //     } catch (error) {
//     //         console.log('Error deleting user:', error);
//     //     }
//     // };
//     const handleDeleteUser = async (deletedUser) => {
//         try {
//             await makeApiRequest(`http://localhost:8080/user/deleteUser/${deletedUser.id}`, 'DELETE');
//             fetchUsers();
//         } catch (error) {
//             console.log('Error deleting user:', error);
//         }
//     };


    
//     const validateEmail = (email) => {
//         const re = /\S+@\S+\.\S+/;
//         if (!re.test(email)) {
//             setError({ ...error, email: 'Invalid email' });
//         } else {
//             setError({ ...error, email: '' });
//         }
//     };

//     const validatePassword = (password) => {
//         if (password.length < 8) {
//             setError({ ...error, password: 'Password must be at least 8 characters long' });
//         }else if(password.length > 15){
//             setError({ ...error, password: 'Password must be less than 15 characters long' });
//         } else if(password.search(/\d/) === -1){
//             setError({ ...error, password: 'Password must contain at least one number' });
//         }else if(password.search(/[!@#$%^&*]/) === -1){
//             setError({ ...error, password: 'Password must contain at least one special character' });
//         }else if(password.search(/\s/) !== -1){
//             setError({ ...error, password: 'Passwo]rd must not contain any whitespace' });
//         }else if(password.search(/[A-Z]/) === -1){
//             setError({ ...error, password: 'Password must contain at least one uppercase letter' });
//         }else if(password.search(/[a-z]/) === -1){
//             setError({ ...error, password: 'Password must contain at least one lowercase letter' });
//         }else {
//             setError({ ...error, password: '' });
//         }
//     };

//     return (
//         <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
//             <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
//                 <div className="row gutters mt-3">
//                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                         <div className="card h-100" id="contentcard">
//                             <div className="card-body ">
//                                 <h5>Manage Users</h5>
//                                 <MaterialTable
//                                     components={{
//                                         Container: (props) => <Paper {...props} elevation={0} style={{ borderRadius: '10px',backgroundColor: '#14498f', color: 'white'}} />,
//                                         Toolbar: () => (
//                                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px',backgroundColor: '#14498f' }}>
//                                                 <div>
//                                                 </div>
//                                                 <div>
//                                                     <Tooltip title="Add new User" enterTouchDelay={0}>
//                                                         {/* <Button
//                                                             style={{ backgroundColor: '#003366', color: 'white' }}
//                                                             color="default"
//                                                             size="small"
//                                                             variant="outlined"
//                                                             startIcon={<AddIcon style={{ color: 'silver' }} />}
//                                                             onClick={handleOpenAddUserModal}
//                                                         >
//                                                             Add new user
//                                                         </Button> */}
//                                                         <Button
//                                                             style={{
//                                                                 marginBottom: '8px',
//                                                                 textDecoration: 'none',
//                                                                 color: 'rgba(255, 255, 255, 0.661)',
//                                                                 background: 'rgba(255, 255, 255, 0.08)',
//                                                                 border: '2.5px solid #ff39b0e7',
//                                                                 padding: '6px',
//                                                                 lineHeight: '1',
//                                                                 fontSize: '14px',
//                                                                 borderRadius: '25px',
//                                                                 transition: 'all .55s ease',
//                                                             }}
//                                                             onMouseOver={(e) => {
//                                                                 e.target.style.background = 'transparent';
//                                                                 e.target.style.color = '#ffffffe7';
//                                                             }}
//                                                             onMouseOut={(e) => {
//                                                                 e.target.style.background = 'rgba(255, 255, 255, 0.08)';
//                                                                 e.target.style.color = 'rgba(255, 255, 255, 0.661)';
//                                                             }}
//                                                             onMouseDown={(e) => {
//                                                                 e.target.style.color = '#ff39b0e7';
//                                                                 e.target.style.transform = 'scale(0.95)';
//                                                             }}
//                                                             onMouseUp={(e) => {
//                                                                 e.target.style.color = 'rgba(255, 255, 255, 0.661)';
//                                                                 e.target.style.transform = 'scale(1)';
//                                                             }}
//                                                             size="small"
//                                                             variant="outlined"
//                                                             startIcon={<AddIcon style={{ color: 'silver' }} />}
//                                                             onClick={handleOpenAddUserModal}
//                                                         >
//                                                             Add new user
//                                                         </Button>

//                                                     </Tooltip>
//                                                 </div>
//                                             </div>
//                                         ),
//                                     }}
//                                     options={{ actionsColumnIndex: -1 }}
//                                     title="Previous Events"
//                                     columns={props.col}
//                                     data={tblData}
//                                     actions={[
//                                         {
//                                             icon: () => (
//                                                 <IconButton
//                                                     color="default"
//                                                     size="small"
//                                                 >
//                                                     <DeleteIcon style={{ color: 'silver' }} />
//                                                 </IconButton>
//                                             ), onClick: (event, rowData) => handleDeleteUser(rowData),
//                                             tooltip: "Delete",
//                                         },
//                                         {
//                                             icon: () => (
//                                                 <IconButton
//                                                     color="default"
//                                                     size="small"
//                                                 >
//                                                     <EditIcon style={{ color: 'silver' }} />
//                                                 </IconButton>
//                                             ), onClick: (event, rowData) => handleEditUser(rowData),
//                                             tooltip: "Edit",
//                                         },
//                                     ]}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Add new user modal */}
//             <Modal
//                 className="modal-center"
//                 open={openModal}
//                 onClose={handleCloseModal}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                     timeout: 500,
                
//                 }}
//             >
//                 <Fade in={openModal}>
//                     <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
//                         <h3>{editUser ? 'Edit User' : 'Add New User'}</h3>
//                         {/* Render input fields for adding/editing a user */}
//                         <TextField
//                             label="First Name"
//                             value={editUser ? editUser.fName : newUser.fName}
//                             onChange={(e) => editUser ? setEditUser({ ...editUser, fName: e.target.value }) : setNewUser({ ...newUser, fName: e.target.value })}
//                         />
//                         <TextField
//                             label="Last Name"
//                             value={editUser ? editUser.lName : newUser.lName}
//                             onChange={(e) => editUser ? setEditUser({ ...editUser, lName: e.target.value }) : setNewUser({ ...newUser, lName: e.target.value })}
//                         />
//                         <TextField
//                             label="Email"
//                             value={editUser ? editUser.email : newUser.email}
//                             onChange={(e) => {
//                                 editUser ? setEditUser({ ...editUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value });
//                                 validateEmail(e.target.value);
//                             }}
//                         />
//                         {error.email && <p style={{ color: 'red', fontSize: '12px' }}>{error.email}</p>}
//                         {/* <TextField
//               label="Role"
//               value={editUser ? editUser.role : newUser.role}
//               onChange={(e) => editUser ? setEditUser({ ...editUser, role: e.target.value }) : setNewUser({ ...newUser, role: e.target.value })}
//             /> */}
//                         <FormControl fullWidth>
//                             <InputLabel id="role-label">Role</InputLabel>
//                             <Select
//                                 labelId="role-label"
//                                 id="role"
//                                 value={editUser ? editUser.role : newUser.role}
//                                 onChange={(e) => editUser ? setEditUser({ ...editUser, role: e.target.value }) : setNewUser({ ...newUser, role: e.target.value })}
//                             >
//                                 <MenuItem value="sales">Sales</MenuItem>
//                                 <MenuItem value="marketing">Marketing</MenuItem>
//                                 <MenuItem value="admin">Admin</MenuItem>
//                                 <MenuItem value="product">Product</MenuItem>
//                             </Select>
//                         </FormControl>

//                         <TextField
//                             label="Username"
//                             value={editUser ? editUser.username : newUser.username}
//                             onChange={(e) => editUser ? setEditUser({ ...editUser, username: e.target.value }) : setNewUser({ ...newUser, username: e.target.value })}
//                         />

//                         {!editUser && (
//                             <TextField
//                                 label="Password"
//                                 value={newUser.password}
//                                 onChange={(e) => {
//                                     setNewUser({ ...newUser, password: e.target.value });
//                                     validatePassword(e.target.value);
//                                 }}
//                                 type={showPassword ? 'text' : 'password'}
//                                 InputProps={{
//                                     endAdornment: (
//                                         <InputAdornment position="end">
//                                             <IconButton
//                                                 edge="end"
//                                                 onClick={() => setShowPassword(!showPassword)}
//                                             >
//                                                 {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                             />
//                         )}
//                         {error.password && <p style={{ color: 'red', fontSize: '12px' }}>{error.password}</p>}
//                         <div style={{ marginTop: '20px', textAlign: 'right' }}>
//                             <Button onClick={handleCloseModal} color="primary" style={{ marginRight: '10px' }}>
//                                 Cancel
//                             </Button>
//                             { <Button onClick={editUser ? handleSaveEditedUser : handleAddUser} color="primary" >
//                            {editUser ? 'Save' : 'Add User'}
                               
//                              </Button> }
                           
//                         </div>
//                     </div>
//                 </Fade>
//             </Modal>
//         </div>
//     );
// };

// export default Table;


// import React, { useEffect, useState } from 'react';
// import { Paper, Button, Tooltip, IconButton, Modal, Backdrop, Fade, TextField } from "@material-ui/core";
// import MaterialTable from "material-table";
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import AddIcon from '@material-ui/icons/Add';
// import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
// import './Table.css'; // Import the CSS file

// // Define the makeApiRequest function
// const makeApiRequest = async (url, method = 'GET', data) => {
//     try {
//         const response = await fetch(url, {
//             method,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: method !== 'GET' ? JSON.stringify(data) : undefined,
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // Check if the response is empty before parsing JSON
//         const text = await response.text();
//         const responseData = text ? JSON.parse(text) : null;

//         return responseData;
//     } catch (error) {
//         console.error('API Request Error:', error);
//         throw error;
//     }
// };

// const Table = (props) => {
//     const [tblData, setTblData] = useState([]);
//     const [editUser, setEditUser] = useState(null);
//     const [openModal, setOpenModal] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const [newUser, setNewUser] = useState({
//         fName: '',
//         lName: '',
//         email: '',
//         role: '',
//         username: '',
//         password: '',
//     });
//     const [error, setError] = useState({
//                 email: '',
//                 password: ''
//             });


//     const [fadeIn, setFadeIn] = useState(false);

//     const fetchUsers = async () => {
//         try {
//             const users = await makeApiRequest('http://localhost:8080/user/allUsers');
//             setTblData(users);
//             console.log(users);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     useEffect(() => {
//         fetchUsers();

//         // Set fade-in to true after a short delay to trigger the fade-in effect
//         const delay = setTimeout(() => {
//             setFadeIn(true);
//         }, 500);

//         return () => clearTimeout(delay);
//     }, []);

//     const handleOpenAddUserModal = () => {
//         setEditUser(null);
//         setNewUser({
//             fName: '',
//             lName: '',
//             email: '',
//             role: '',
//             username: '',
//             password: '',
//         });
//         setOpenModal(true);
//     };

//     // const handleAddUser = async () => {
//     //     try {
//     //         const hashedPassword = newUser.password ? await bcrypt.hash(newUser.password, 10) : undefined;
//     //         const dataToSend = {
//     //             ...newUser,
//     //             password: hashedPassword
//     //         };

//     //         const response = await makeApiRequest('http://localhost:8080/user/addUser', 'POST', dataToSend);
//     //         console.log("this is the error");

//     //         fetchUsers();
//     //         setOpenModal(false);

//     //     } catch (error) {
//     //         console.log('Error adding user:', error);
//     //     }
//     // };
//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const handleAddUser = async () => {
//         if (newUser.fName && newUser.lName && newUser.email && newUser.role && newUser.username && newUser.password) {
//             const isEmailValid = validateEmail(newUser.email);
//             const isPasswordValid = validatePassword(newUser.password);

//             if (isEmailValid && isPasswordValid) {
//                 try {
//                     const hashedPassword = await bcrypt.hash(newUser.password, 10);
//                     await makeApiRequest('http://localhost:8080/user/addUser', 'POST', { ...newUser, password: hashedPassword });
//                     setOpenModal(false);
//                     fetchUsers();
//                 } catch (error) {
//                     console.log('Error adding user:', error);
//                 }
//             }
//         }
//     };

//     const handleEditUser = (updatedUser) => {
//         setEditUser(updatedUser);
//         setOpenModal(true);
//     };

//     const handleSaveEditedUser = async () => {
//         try {
//             await makeApiRequest(`http://localhost:8080/user/editUser/${editUser.id}`, 'PUT', editUser);
//             setOpenModal(false);
//             fetchUsers();
//         } catch (error) {
//             console.log('Error saving edited user:', error);
//         }
//     };

//     const handleCloseModal = () => {
//         setOpenModal(false);
//         setEditUser(null);
//         setNewUser({
//             fName: '',
//             lName: '',
//             email: '',
//             role: '',
//             username: '',
//             password: '',
//         });
//     };

//     const handleDeleteUser = async (deletedUser) => {
//         try {
//             await makeApiRequest(`http://localhost:8080/user/deleteUser/${deletedUser.id}`, 'DELETE');
//             fetchUsers();
//         } catch (error) {
//             console.log('Error deleting user:', error);
//         }
//     };
//     // const validateEmail = (email) => {
//     //     const re = /\S+@\S+\.\S+/;
//     //     if (!re.test(email)) {
//     //         setError({ ...error, email: 'Invalid email' });
//     //     } else {
//     //         setError({ ...error, email: '' });
//     //     }
//     // };

//     // const validatePassword = (password) => {
//     //     if (password.length < 8) {
//     //         setError({ ...error, password: 'Password must be at least 8 characters long' });
//     //     }else if(password.length > 15){
//     //         setError({ ...error, password: 'Password must be less than 15 characters long' });
//     //     } else if(password.search(/\d/) === -1){
//     //         setError({ ...error, password: 'Password must contain at least one number' });
//     //     }else if(password.search(/[!@#$%^&*]/) === -1){
//     //         setError({ ...error, password: 'Password must contain at least one special character' });
//     //     }else if(password.search(/\s/) !== -1){
//     //         setError({ ...error, password: 'Passwo]rd must not contain any whitespace' });
//     //     }else if(password.search(/[A-Z]/) === -1){
//     //         setError({ ...error, password: 'Password must contain at least one uppercase letter' });
//     //     }else if(password.search(/[a-z]/) === -1){
//     //         setError({ ...error, password: 'Password must contain at least one lowercase letter' });
//     //     }else {
//     //         setError({ ...error, password: '' });
//     //     }
//     // };
 
//     const validateEmail = (email) => {
//         const re = /\S+@\S+\.\S+/;
//         return re.test(email); // Just return the validation result
//     };
    
//     const validatePassword = (password) => {
//         if (password.length < 8) {
//             return false;
//         } else if (password.length > 15) {
//             return false;
//         } else if (!/\d/.test(password)) {
//             return false;
//         } else if (!/[!@#$%^&*]/.test(password)) {
//             return false;
//         } else if (/\s/.test(password)) {
//             return false;
//         } else if (!/[A-Z]/.test(password)) {
//             return false;
//         } else if (!/[a-z]/.test(password)) {
//             return false;
//         }
//         return true; // Password is valid
//     };
    
//     const canAddUser = () => {
//         const isEmailValid = validateEmail(newUser.email);
//         const isPasswordValid = validatePassword(newUser.password);
    
//         // Update error state based on validation
//         setError(prev => ({
//             ...prev,
//             email: isEmailValid ? '' : 'Invalid email',
//             password: isPasswordValid ? '' : 'Invalid or incomplete password'
//         }));
    
//         return newUser.fName && newUser.lName && newUser.email && newUser.role && newUser.username && newUser.password && isEmailValid && isPasswordValid;
//     };
    
//     return (
//         <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
//             <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
//                 <div className="row gutters mt-3">
//                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                         <div className="card h-100" id="contentcard">
//                             <div className="card-body ">
//                                 <h5>Manage User</h5>
//                                 <MaterialTable
//                                     components={{
//                                         Container: (props) => <Paper {...props} elevation={0} style={{ borderRadius: '10px' }} />,
//                                         Toolbar: (props) => (
//                                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
//                                                 <div>
//                                                 </div>
//                                                 <div>
//                                                     <Tooltip title="Add new User" enterTouchDelay={0}>
//                                                         <Button
//                                                             style={{ backgroundColor: '#003366', color: 'white' }}
//                                                             color="default"
//                                                             size="small"
//                                                             variant="outlined"
//                                                             startIcon={<AddIcon style={{ color: 'silver' }} />}
//                                                             onClick={handleOpenAddUserModal}
//                                                         >
//                                                             Add new user
//                                                         </Button>
//                                                     </Tooltip>
//                                                 </div>
//                                             </div>
//                                         ),
//                                     }}
//                                     options={{ actionsColumnIndex: -1 }}
//                                     title="Previous Events"
//                                     columns={props.col}
//                                     data={tblData}
//                                     actions={[
//                                         {
//                                             icon: () => (
//                                                 <IconButton
//                                                     color="default"
//                                                     size="small"
//                                                 >
//                                                     <DeleteIcon style={{ color: 'silver' }} />
//                                                 </IconButton>
//                                             ), onClick: (event, rowData) => handleDeleteUser(rowData),
//                                             tooltip: "Delete",
//                                         },
//                                         {
//                                             icon: () => (
//                                                 <IconButton
//                                                     color="default"
//                                                     size="small"
//                                                 >
//                                                     <EditIcon style={{ color: 'silver' }} />
//                                                 </IconButton>
//                                             ), onClick: (event, rowData) => handleEditUser(rowData),
//                                             tooltip: "Edit",
//                                         },
//                                     ]}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Add new user modal */}
//             <Modal
//                 open={openModal}
//                 onClose={handleCloseModal}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                     timeout: 500,
//                 }}
//             >
//                 <Fade in={openModal}>
//                     <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
//                         <h3>{editUser ? 'Edit User' : 'Add New User'}</h3>
//                         {/* Render input fields for adding/editing a user */}
//                         <TextField
//                             label="First Name"
//                             value={editUser ? editUser.fName : newUser.fName}
//                             onChange={(e) => editUser ? setEditUser({ ...editUser, fName: e.target.value }) : setNewUser({ ...newUser, fName: e.target.value })}
//                         />
//                         <TextField
//                             label="Last Name"
//                             value={editUser ? editUser.lName : newUser.lName}
//                             onChange={(e) => editUser ? setEditUser({ ...editUser, lName: e.target.value }) : setNewUser({ ...newUser, lName: e.target.value })}
//                         />
//                         {/* <TextField
//                             label="Email"
//                             value={editUser ? editUser.email : newUser.email}
//                             onChange={(e) => editUser ? setEditUser({ ...editUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value })}
//                         /> */}
//                         <TextField
//                             label="Email"
//                             value={editUser ? editUser.email : newUser.email}
//                             onChange={(e) => {
//                                 editUser ? setEditUser({ ...editUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value });
//                                 validateEmail(e.target.value);
//                             }}
//                         />
//                           {error.email && <p style={{ color: 'red', fontSize: '12px' }}>{error.email}</p>}
//                         {/* <TextField
//               label="Role"
//               value={editUser ? editUser.role : newUser.role}
//               onChange={(e) => editUser ? setEditUser({ ...editUser, role: e.target.value }) : setNewUser({ ...newUser, role: e.target.value })}
//             /> */}
//                         <FormControl fullWidth>
//                             <InputLabel id="role-label">Role</InputLabel>
//                             <Select
//                                 labelId="role-label"
//                                 id="role"
//                                 value={editUser ? editUser.role : newUser.role}
//                                 onChange={(e) => editUser ? setEditUser({ ...editUser, role: e.target.value }) : setNewUser({ ...newUser, role: e.target.value })}
//                             >
//                                 <MenuItem value="sales">Sales</MenuItem>
//                                 <MenuItem value="marketing">Marketing</MenuItem>
//                                 <MenuItem value="admin">Admin</MenuItem>
//                                 <MenuItem value="product">Product</MenuItem>
//                             </Select>
//                         </FormControl>

//                         <TextField
//                             label="Username"
//                             value={editUser ? editUser.username : newUser.username}
//                             onChange={(e) => editUser ? setEditUser({ ...editUser, username: e.target.value }) : setNewUser({ ...newUser, username: e.target.value })}
//                         />

//                                           {!editUser && (
//                                                        <TextField 
//                                                             label="Password"
//                                                             value={newUser.password}
//                                                             onChange={(e) => {
//                                                                 setNewUser({ ...newUser, password: e.target.value });
//                                                                 validatePassword(e.target.value);
//                                                             }}
//                                                             type={showPassword ? 'text' : 'password'}
//                                                             InputProps={{
//                                                                 endAdornment: (
//                                                                     <InputAdornment position="end">
//                                                                         <IconButton
//                                                                             edge="end"
//                                                                             onClick={() => setShowPassword(!showPassword)}
//                                                                         >
//                                                                             {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                                                                         </IconButton>
//                                                                     </InputAdornment>
//                                                                 ),
//                                                             }}
//                                                         />   )}
//                          {error.password && <p style={{ color: 'red', fontSize: '12px' }}>{error.password}</p>}
//                         <div style={{ marginTop: '20px', textAlign: 'right' }}>
//                             <Button onClick={handleCloseModal} color="primary" style={{ marginRight: '10px' }}>
//                                 Cancel
//                             </Button>
//                             {/* <Button onClick={editUser ? handleSaveEditedUser : handleAddUser} color="primary" >
//                             {editUser ? 'Save' : 'Add User'}
                               
//                             </Button> */}
//                              <Button onClick={editUser ? handleSaveEditedUser : handleAddUser} color="primary" disabled={!canAddUser()}>
//                             {editUser ? 'Save' : 'Add User'}
//                              </Button>
//                         </div>
//                     </div>
//                 </Fade>
//             </Modal>
//         </div>
//     );
// };

// export default Table;



