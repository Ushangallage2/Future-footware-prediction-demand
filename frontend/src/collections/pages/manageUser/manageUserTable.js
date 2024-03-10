// import React, { useEffect, useState } from 'react';
// import { Paper, Button, Tooltip, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core"; 
// import MaterialTable from "material-table";
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import AddIcon from '@material-ui/icons/Add';

// // Define the makeApiRequest function
// const makeApiRequest = async (url, method = 'GET', data) => {
//   try {
//     const response = await fetch(url, {
//       method,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: method !== 'GET' ? JSON.stringify(data) : undefined,
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     // Parse JSON response
//     const responseData = await response.json();
//     return responseData;
//   } catch (error) {
//     console.error('API Request Error:', error.message);
//     throw error;
//   }
// };

// const Table = (props) => {
//   const [tblData, setTblData] = useState([]);
//   const [editDialogOpen, setEditDialogOpen] = useState(false);
//   const [editingUser, setEditingUser] = useState({});

//   // Function to fetch user data from the database
//   const fetchUsers = async () => {
//     try {
//       const users = await makeApiRequest('http://localhost:8080/user/allUsers');
//       setTblData(users);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []); // Fetch users on component mount

//   // Function to handle adding a new user
//   const handleAddUser = async (newUser) => {
//     try {
//       await makeApiRequest('http://localhost:8080/user/addUser', 'POST', newUser);
//       fetchUsers(); // Refresh user data after adding a new user
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };

//   // Function to handle editing a user
//   const handleEditUser = (rowData) => {
//     setEditingUser(rowData);
//     setEditDialogOpen(true);
//   };

//   // Function to handle saving the edited user
// const handleSaveEdit = async () => {
//   try {
//       if (editUser && editUser.id !== null && editUser.id !== undefined) {
//           await makeApiRequest(`http://localhost:8080/user/updateUser/${editUser.id}`, 'POST', editUser);
//           setOpenModal(false);
//           fetchUsers();
//       } else {
//           console.error('Cannot save edited user: editUser or its id is null or undefined');
//       }
//   } catch (error) {
//       console.error('Error saving edited user:', error);
//   }
// };


//   // Function to handle deleting a user
//   const handleDeleteUser = async (deletedUser) => {
//     try {
//       // Make API request to delete user
//       await makeApiRequest(`http://localhost:8080/user/deleteUser/${deletedUser.id}`, 'DELETE');

//       // Update state to reflect the changes
//       setTblData(prevData => prevData.filter(user => user.id !== deletedUser.id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   return (
//     <>
//       <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
//         <div className="row gutters mt-3">
//           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//             <div className="card h-100" id="contentcard">
//               <div className="card-body ">
//                 <h5>Manage User</h5>
//                 <MaterialTable
//                   components={{
//                     Container: (props) => <Paper {...props} elevation={0} style={{ borderRadius: '10px' }} />,
//                     Toolbar: (props) => (
//                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
//                         <div>
//                           <Tooltip title="Add new User" enterTouchDelay={0}>
//                             <Button
//                               style={{ backgroundColor: '#003366', color: 'white' }} 
//                               color="default"
//                               size="small"
//                               variant="outlined"
//                               startIcon={<AddIcon style={{ color: 'silver' }} />}
//                               onClick={handleAddUser}
//                             >
//                               Add new user
//                             </Button>
//                           </Tooltip>
//                         </div>
//                       </div>
//                     ),
//                   }}
//                   options={{ actionsColumnIndex: -1 }}
//                   title="Previous Events"
//                   columns={props.col}
//                   data={tblData}
//                   actions={[
//                     {
//                       icon: () => (
//                         <IconButton
//                           color="default"
//                           size="small"
//                           onClick={(event,deletedUser) => handleDeleteUser(deletedUser)}
//                         >
//                           <DeleteIcon style={{ color: 'silver' }} />
//                         </IconButton>
//                       ),
//                       tooltip: "Delete",
//                     },
//                     {
//                       icon: () => (
//                         <IconButton
//                           color="default"
//                           size="small"
//                           onClick={(event, rowData) => handleEditUser(rowData)}
//                         >
//                           <EditIcon style={{ color: 'silver' }} />
//                         </IconButton>
//                       ),
//                       tooltip: "Edit",
//                     },
//                   ]}
//                   editable={{
//                     onRowUpdate: (newData, oldData) =>
//                       new Promise((resolve, reject) => {
//                         handleEditUser(newData);
//                         resolve();
//                       }),
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Edit Dialog */}
//       <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} aria-labelledby="form-dialog-title">
//         <DialogTitle>Edit User</DialogTitle>
//         <DialogContent>
          
//           <TextField
//             label="Name"
//             value={editingUser.name || ''}
//             onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
//             fullWidth
//           />
//           {/* Add more fields as needed */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setEditDialogOpen(false)} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSaveEdit} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default Table;
