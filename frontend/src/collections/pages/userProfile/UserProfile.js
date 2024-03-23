// import React, { useState } from 'react';
// import './userprof.css';
// import { Sidebar } from '../../sidebar/sidebar';

// export function UserProfl(props) {
//   const [requestText, setRequestText] = useState('');

//   const handleMakeRequest = () => {
//     // Perform actions with the request text, such as sending it to an API
//     console.log('Request Text:', requestText);
//     // Reset the text window after making the request
//     setRequestText('');
//   };

//   return (
//     <>
//       <div className='user-sec'>
//         <Sidebar />
//       </div>
      
//       <div className='content'>
//         {/* Your existing content */}

//         {/* Add the text window and button */}
//         <div className='request-container'>
//           <textarea
//             placeholder='Type your request...'
//             value={requestText}
//             onChange={(e) => setRequestText(e.target.value)}
//           />

          
//           <button className='request-button' onClick={handleMakeRequest}>
//             Make a Request
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UserProfl---------------;
// import React, { useState } from 'react';
// import './userprof.css';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter'; 

// export function UserProfl(props) {
//   const [requestText, setRequestText] = useState('');

//   const handleMakeRequest = () => {
//     // Perform actions with the request text, such as sending it to an API
//     console.log('Request Text:', requestText);
//     // Reset the text window after making the request
//     setRequestText('');
//   };

//   return (
//     <>
//       <div className='user-sec'>
//         <Sidebar />
//       </div>
      
//       <div className='content'>
       
        
        
//         <UsernameTypewriter />

    
//       </div>
//     </>
//   );
// }

// export default UserProfl-----------------------------------------------------;

// import React, { useState } from 'react';
// import './userprof.css'; // Import your styles

// const UserProfl = () => {
//   const [isNoteVisible, setIsNoteVisible] = useState(false);

//   const handleNoteToggle = () => {
//     setIsNoteVisible(!isNoteVisible);
//   };

//   return (
    
//     <div className="user-profile-container">
//       <div className="left-panel">
//         {/* Profile Picture Section */}
//         <div className="profile-picture-container">
//           {/* You can use an image tag here to display the profile picture */}
//           {/* Example: <img src={profilePictureSrc} alt="Profile" /> */}
//           <div className="profile-picture-overlay">
//             <label htmlFor="profile-picture-input" className="upload-icon">
//               {/* You can use an icon or any visual element for the upload icon */}
//               📷
//             </label>
//             <input
//               type="file"
//               id="profile-picture-input"
//               accept="image/*"
//               onChange={(e) => {
//                 // Handle profile picture upload logic
//                 console.log('Selected file:', e.target.files[0]);
//               }}
//             />
//           </div>
//         </div>

//         {/* Transparent Input Fields Section */}
//         <div className="input-fields-container">
//           {/* Example input fields */}
//           <input type="text" placeholder="First Name" />
//           <input type="text" placeholder="Last Name" />
//           <input type="email" placeholder="Email" />
//           {/* ... Add more input fields as needed */}
//         </div>

//         {/* Note Section */}
//         <div className="note-container">
//           <button className="toggle-note-button" onClick={handleNoteToggle}>
//             {isNoteVisible ? 'Fold Note' : 'Unfold Note'}
//           </button>
//           {isNoteVisible && (
//             <div className="note-content">
//               {/* Add your note content here */}
//               This is a small note. You can unfold and read it.
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="right-panel">
//         {/* Change Password Button */}
//         <button className="change-password-button">Change Password</button>
//       </div>
//     </div>
//   );
// };

// export  {UserProfl}-------------------------;



// import React, { useState } from 'react';
// import './userprof.css'; 
// import { Sidebar } from '../../sidebar/sidebar';

// const UserProfl = () => {
//   const [isNoteVisible, setIsNoteVisible] = useState(false);

//   const handleNoteToggle = () => {
//     setIsNoteVisible(!isNoteVisible);
//   };

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//     <Sidebar />

//       <div className="left-panel">
//         {/* Profile Picture Section */}
//         <div className="profile-picture-container">
//           {/* You can use an image tag here to display the profile picture */}
//           {/* Example: <img src={profilePictureSrc} alt="Profile" /> */}
//           <div className="profile-picture-overlay">
//             <label htmlFor="profile-picture-input" className="upload-icon">
//               {/* You can use an icon or any visual element for the upload icon */}
//               📷
//             </label>
//             <input
//               type="file"
//               id="profile-picture-input"
//               accept="image/*"
//               onChange={(e) => {
//                 // Handle profile picture upload logic
//                 console.log('Selected file:', e.target.files[0]);
//               }}
//             />
//           </div>
//         </div>

//         {/* Transparent Input Fields Section */}
//         <div className="input-fields-container">
//           {/* Example input fields */}
//           <input type="text" placeholder="First Name" />
//           <input type="text" placeholder="Last Name" />
//           <input type="email" placeholder="Email" />
//           <input type="" placeholder="First Name" />
//           <input type="text" placeholder="Last Name" />
//           <input type="email" placeholder="Email" />
//           {/* ... Add more input fields as needed */}
//         </div>

     
//         <div className="note-container">
//           <button className="toggle-note-button" onClick={handleNoteToggle}>
//             {isNoteVisible ? 'Fold Note' : 'Unfold Note'}
//           </button>
//           {isNoteVisible && (
//             <div className="note-content">
//               {/* Add your note content here */}
//               This is a small note. You can unfold and read it.
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="right-panel">
//         {/* Change Password Button */}
//         <button className="change-password-button">Change Password</button>
//       </div>
//     </div>
//   );
// };

// export { UserProfl };
// import React, { useState, useEffect } from 'react';
// import './userprof.css';
// import { Sidebar } from '../../sidebar/sidebar';

// const UserProfl = () => {
//   const [isNoteVisible, setIsNoteVisible] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [userData, setUserData] = useState({
//     id: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     address: '',
//     departmentRole: '',
//   });

//   useEffect(() => {
//     // Fetch user data from the backend when the component mounts
//     fetchUserData();
//   }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   const fetchUserData = async () => {
//     try {
//       // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint URL
//       const response = await fetch('YOUR_BACKEND_ENDPOINT');
//       const data = await response.json();

//       // Update the state with the fetched user data
//       setUserData(data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const handleNoteToggle = () => {
//     setIsNoteVisible(!isNoteVisible);
//   };

//   const handleEditToggle = (field) => {
//     setIsEditing({ ...isEditing, [field]: !isEditing[field] });
//   };

//   const handleFieldChange = (field, value) => {
//     setUserData({ ...userData, [field]: value });
//   };

//   const handleSave = async () => {
//     try {
//       // Update user data on the backend
//       const response = await fetch('YOUR_BACKEND_UPDATE_ENDPOINT', {
//         method: 'PUT', // Assuming your backend supports a PUT request for updates
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.ok) {
//         console.log('User data updated successfully on the backend');

//         // Reset editing state
//         setIsEditing(false);

//         // Refresh user data on the frontend
//         fetchUserData();
//       } else {
//         console.error('Failed to update user data on the backend');
//       }
//     } catch (error) {
//       console.error('Error updating user data:', error);
//     }
//   };

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />

//       <div className="left-panel">
//         {/* Profile Picture Section */}
//         <div className="note-container">
//           <button className="toggle-note-button" onClick={handleNoteToggle}>
//             {isNoteVisible ? 'Fold Note' : 'Unfold Note'}
//           </button>
//           {isNoteVisible && (
//             <div className="note-content">
//               {/* Add your note content here */}
//               This is a small note. You can unfold and read it.
//             </div>
//           )}
//         </div>

//         {/* User Data Form */}
//         <div className="user-data-form">
//           {Object.keys(userData).map((field) => (
//             <div key={field} className="form-field">
//               <span className="field-label">{field !== 'id' && field}</span>
//               {isEditing[field] ? (
//                 <input
//                   type="text"
//                   value={userData[field]}
//                   onChange={(e) => handleFieldChange(field, e.target.value)}
//                 />
//               ) : (
//                 <span className="field-value">{userData[field]}</span>
//               )}
//               {field !== 'id' && (
//                 <button
//                   className={`edit-button ${isEditing[field] ? 'save-button' : ''}`}
//                   onClick={() => handleEditToggle(field)}
//                 >
//                   {isEditing[field] ? 'Save' : 'Edit'}
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="right-panel">
//         {/* Change Password & Username Button */}
//         <button className="change-password-button" onClick={handleSave}>
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// };

// export { UserProfl };


// import React, { useState, useEffect } from 'react';
// import './userprof.css';
// import { Sidebar } from '../../sidebar/sidebar';

// const UserProfl = () => {
//   const [isNoteVisible, setIsNoteVisible] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [userData, setUserData] = useState({
//     id: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     address: '',
//     departmentRole: '',
//   });

//   useEffect(() => {
//     // Fetch user data from the backend when the component mounts
//     fetchUserData();
//   }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   const fetchUserData = async () => {
//     try {
//       // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint URL
//       const response = await fetch('YOUR_BACKEND_ENDPOINT');
//       const data = await response.json();

//       // Update the state with the fetched user data
//       setUserData(data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const handleNoteToggle = () => {
//     setIsNoteVisible(!isNoteVisible);
//   };

//   const handleEditToggle = (field) => {
//     setIsEditing({ ...isEditing, [field]: !isEditing[field] });
//   };

//   const handleFieldChange = (field, value) => {
//     setUserData({ ...userData, [field]: value });
//   };

//   const handleSave = async () => {
//     try {
//       // Update user data on the backend
//       const response = await fetch('YOUR_BACKEND_UPDATE_ENDPOINT', {
//         method: 'PUT', // Assuming your backend supports a PUT request for updates
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.ok) {
//         console.log('User data updated successfully on the backend');

//         // Reset editing state
//         setIsEditing(false);

//         // Refresh user data on the frontend
//         fetchUserData();
//       } else {
//         console.error('Failed to update user data on the backend');
//       }
//     } catch (error) {
//       console.error('Error updating user data:', error);
//     }
//   };

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />

//       <div className="left-panel">
//         {/* Profile Picture Section */}
//         <div className="profile-picture-container">
//           <div className="profile-picture-overlay">
//             <label htmlFor="profile-picture-input" className="upload-icon">
//               📷
//             </label>
//             <input
//               type="file"
//               id="profile-picture-input"
//               accept="image/*"
//               onChange={(e) => {
//                 // Handle profile picture upload logic
//                 console.log('Selected file:', e.target.files[0]);
//               }}
//             />
//           </div>
//         </div>

//         {/* User Data Form */}
//         <div className="user-data-form">
//           {Object.keys(userData).map((field) => (
//             <div key={field} className="form-field">
//               <span className="field-label">{field !== 'id' && field}</span>
//               {isEditing[field] ? (
//                 <textarea
//                   rows="4"
//                   value={userData[field]}
//                   onChange={(e) => handleFieldChange(field, e.target.value)}
//                 />
//               ) : (
//                 <span className="field-value">{userData[field]}</span>
//               )}
//               {field !== 'id' && (
//                 <button
//                   className={`edit-button ${isEditing[field] ? 'save-button' : ''}`}
//                   onClick={() => handleEditToggle(field)}
//                 >
//                   {isEditing[field] ? 'Save' : 'Edit'}
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Note Section */}
//         <div className="note-container">
//           <button className="toggle-note-button" onClick={handleNoteToggle}>
//             {isNoteVisible ? 'Fold Note' : 'Unfold Note'}
//           </button>
//           {isNoteVisible && (
//             <div className="note-content">
//               {/* Add your note content here */}
//               This is a small note. You can unfold and read it.
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="right-panel">
//         {/* Change Password & Username Button */}
//         <button className="change-password-button" onClick={handleSave}>
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// };

// export { UserProfl };


// import React, { useState, useEffect } from 'react';
// import './userprof.css';
// import { Sidebar } from '../../sidebar/sidebar';

// const UserProfl = () => {
//   const [isNoteVisible, setIsNoteVisible] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [userData, setUserData] = useState({
//     id: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     address: '',
//     departmentRole: '',
//   });

//   useEffect(() => {
//     // Fetch user data from the backend when the component mounts
//     fetchUserData();
//   }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   const fetchUserData = async () => {
//     try {
//       // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint URL
//       const response = await fetch('YOUR_BACKEND_ENDPOINT');
//       const data = await response.json();

//       // Update the state with the fetched user data
//       setUserData(data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const handleNoteToggle = () => {
//     setIsNoteVisible(!isNoteVisible);
//   };

//   const handleEditToggle = (field) => {
//     setIsEditing({ ...isEditing, [field]: !isEditing[field] });
//   };

//   const handleFieldChange = (field, value) => {
//     setUserData({ ...userData, [field]: value });
//   };

//   const handleSave = async () => {
//     try {
//       // Update user data on the backend
//       const response = await fetch('YOUR_BACKEND_UPDATE_ENDPOINT', {
//         method: 'PUT', // Assuming your backend supports a PUT request for updates
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.ok) {
//         console.log('User data updated successfully on the backend');

//         // Reset editing state
//         setIsEditing(false);

//         // Refresh user data on the frontend
//         fetchUserData();
//       } else {
//         console.error('Failed to update user data on the backend');
//       }
//     } catch (error) {
//       console.error('Error updating user data:', error);
//     }
//   };

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />

//       <div className="left-panel">
//         {/* Profile Picture Section */}
//         <div className="profile-picture-container">
//           {/* You can use an image tag here to display the profile picture */}
//           {/* Example: <img src={profilePictureSrc} alt="Profile" /> */}
//           <div className="profile-picture-overlay">
//             <label htmlFor="profile-picture-input" className="upload-icon">
//               {/* You can use an icon or any visual element for the upload icon */}
//               📷
//             </label>
//             <input
//               type="file"
//               id="profile-picture-input"
//               accept="image/*"
//               onChange={(e) => {
//                 // Handle profile picture upload logic
//                 console.log('Selected file:', e.target.files[0]);
//               }}
//             />
//           </div>
//         </div>

//         {/* User Data Form */}
//         <div className="user-data-form">
//           {Object.keys(userData).map((field) => (
//             <div key={field} className={`form-field ${isEditing[field] ? 'editing' : ''}`}>
//               <span className="field-label">{field !== 'id' && field}</span>
//               {isEditing[field] ? (
//                 <input
//                   type="text"
//                   value={userData[field]}
//                   onChange={(e) => handleFieldChange(field, e.target.value)}
//                 />
//               ) : (
//                 <span className="field-value">{userData[field]}</span>
//               )}
//               {field !== 'id' && (
//                 <button
//                   className={`edit-button ${isEditing[field] ? 'save-button' : ''}`}
//                   onClick={() => handleEditToggle(field)}
//                 >
//                   {isEditing[field] ? (
//                     <>
//                       <span className="edit-icon">✏️</span>
//                       Save
//                     </>
//                   ) : (
//                     <>
//                       <span className="edit-icon">✏️</span>
//                       Edit
//                     </>
//                   )}
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="right-panel">
//         {/* Change Password & Username Button */}
//         <button className="change-password-button" onClick={handleSave}>
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// };

// export { UserProfl };


// import React, { useState, useEffect } from 'react';
// import './userprof.css';
// import { Sidebar } from '../../sidebar/sidebar';

// const UserProfl = () => {
//   const [isNoteVisible, setIsNoteVisible] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [userData, setUserData] = useState({
//     id: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     address: '',
//     departmentRole: '',
//   });

//   useEffect(() => {
//     // Fetch user data from the backend when the component mounts
//     fetchUserData();
//   }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   const fetchUserData = async () => {
//     try {
//       // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint URL
//       const response = await fetch('YOUR_BACKEND_ENDPOINT');
//       const data = await response.json();

//       // Update the state with the fetched user data
//       setUserData(data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const handleNoteToggle = () => {
//     setIsNoteVisible(!isNoteVisible);
//   };

//   const handleEditToggle = (field) => {
//     setIsEditing({ ...isEditing, [field]: !isEditing[field] });
//   };

//   const handleFieldChange = (field, value) => {
//     setUserData({ ...userData, [field]: value });
//   };

//   const handleSave = async () => {
//     try {
//       // Update user data on the backend
//       const response = await fetch('YOUR_BACKEND_UPDATE_ENDPOINT', {
//         method: 'PUT', // Assuming your backend supports a PUT request for updates
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.ok) {
//         console.log('User data updated successfully on the backend');

//         // Reset editing state
//         setIsEditing(false);

//         // Refresh user data on the frontend
//         fetchUserData();
//       } else {
//         console.error('Failed to update user data on the backend');
//       }
//     } catch (error) {
//       console.error('Error updating user data:', error);
//     }
//   };

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />

//       <div className="left-panel">
//         {/* Profile Picture Section */}
//         <div className="profile-picture-container">
//           {/* Your profile picture display logic here */}
//           {/* Example: <img src={profilePictureSrc} alt="Profile" /> */}
//           <div className="profile-picture-overlay">
//             <label htmlFor="profile-picture-input" className="upload-icon">
//               📷
//             </label>
//             <input
//               type="file"
//               id="profile-picture-input"
//               accept="image/*"
//               onChange={(e) => {
//                 // Handle profile picture upload logic
//                 console.log('Selected file:', e.target.files[0]);
//               }}
//             />
//           </div>
//         </div>

//         {/* User Data Form */}
//         <div className="user-data-form">
//           {Object.keys(userData).map((field) => (
//             <div key={field} className="form-field">
//               <span className="field-label">{field !== 'id' && field}</span>
//               {isEditing[field] ? (
//                 <input
//                   type="text"
//                   value={userData[field]}
//                   onChange={(e) => handleFieldChange(field, e.target.value)}
//                 />
//               ) : (
//                 <span className="field-value">{userData[field]}</span>
//               )}
//               {field !== 'id' && (
//                 <button
//                   className={`edit-button ${isEditing[field] ? 'save-button' : ''}`}
//                   onClick={() => handleEditToggle(field)}
//                 >
//                   {isEditing[field] ? 'Save' : 'Edit'}
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="note-container">
//           <button className="toggle-note-button" onClick={handleNoteToggle}>
//             {isNoteVisible ? 'Fold Note' : 'Unfold Note'}
//           </button>
//           {isNoteVisible && (
//             <div className="note-content">
//               {/* Add your note content here */}
//               This is a small note. You can unfold and read it.
//             </div>
//           )}
//         </div>
      
//       </div>

//       <div className="right-panel">
//         {/* Change Password & Username Button */}
//         <button className="change-password-button" onClick={handleSave}>
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// };

// export { UserProfl };
// import React, { useState, useEffect } from 'react';
// import './userprof.css';
// import { Sidebar } from '../../sidebar/sidebar';

// const UserProfl = () => {
//   const [isNoteVisible, setIsNoteVisible] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [userData, setUserData] = useState({
//     id: '',
//     firstName: '',
//     lastName: 'cvbcxbx',
//     email: 'fbfdbdfb',
//     address: 'fdbdfbd',
//     departmentRole: 'fdbdfb',
//   });

//   useEffect(() => {
//     // Fetch user data from the backend when the component mounts
//     fetchUserData();
//   }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   const fetchUserData = async () => {
//     try {
//       // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint URL
//       const response = await fetch('YOUR_BACKEND_ENDPOINT');
//       const data = await response.json();

//       // Update the state with the fetched user data
//       setUserData(data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const handleNoteToggle = () => {
//     setIsNoteVisible(!isNoteVisible);
//   };

//   const handleEditToggle = (field) => {
//     setIsEditing({ ...isEditing, [field]: !isEditing[field] });
//   };

//   const handleFieldChange = (field, value) => {
//     setUserData({ ...userData, [field]: value });
//   };

//   const handleSave = async () => {
//     try {
//       // Update user data on the backend
//       const response = await fetch('YOUR_BACKEND_UPDATE_ENDPOINT', {
//         method: 'PUT', // Assuming your backend supports a PUT request for updates
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.ok) {
//         console.log('User data updated successfully on the backend');

//         // Reset editing state
//         setIsEditing(false);

//         // Refresh user data on the frontend
//         fetchUserData();
//       } else {
//         console.error('Failed to update user data on the backend');
//       }
//     } catch (error) {
//       console.error('Error updating user data:', error);
//     }
//   };

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />

//       <div className="left-panel">
//         {/* Profile Picture Section */}
//         <div className="profile-picture-container">
//           {/* Your profile picture display logic here */}
//           {/* Example: <img src={profilePictureSrc} alt="Profile" /> */}
//           <div className="profile-picture-overlay">
//             <label htmlFor="profile-picture-input" className="upload-icon">
//               📷
//             </label>
//             <input
//               type="file"
//               id="profile-picture-input"
//               accept="image/*"
//               onChange={(e) => {
//                 // Handle profile picture upload logic
//                 console.log('Selected file:', e.target.files[0]);
//               }}
//             />
//           </div>
//         </div>

        {/* User Data Form */}
        <div className="user-data-form">
          {Object.keys(userData).map((field) => (
            <div key={field} className={`form-field ${isEditing[field] ? 'editing' : ''}`}>
              <span className="field-label">{field !== 'id' && field}</span>
              {field === 'id' ? (
                <span className="field-value">{userData[field]}</span>
              ) : (
                <>
                  {isEditing[field] ? (
                    <input
                      type="text"
                      value={userData[field]}
                      onChange={(e) => handleFieldChange(field, e.target.value)}
                    />
                  ) : (
                    <span className="field-value">{userData[field]}</span>
                  )}
                  {field !== 'id' && (
                    <button
                      className={`edit-button ${isEditing[field] ? 'save-button' : ''}`}
                      onClick={() => handleEditToggle(field)}
                    >
                      {isEditing[field] ? 'Save' : 'Edit'}
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

//         <div className="note-container">
//           <button className="toggle-note-button" onClick={handleNoteToggle}>
//             {isNoteVisible ? 'Fold Note' : 'Unfold Note'}
//           </button>
//           {isNoteVisible && (
//             <div className="note-content">
//               {/* Add your note content here */}
//               This is a small note. You can unfold and read it.
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="right-panel">
//         {/* Change Password & Username Button */}
//         <button className="change-password-button" onClick={handleSave}>
//           Username/passoword change
//         </button>
//       </div>
//     </div>
//   );
// };

// export { UserProfl };
import  { useState, useEffect } from 'react';
import './userprof.css';
import UsernameTypewriter from '../../components/UsernameTypewriter'; 


const UserProfl = () => {
  const [isNoteVisible, setIsNoteVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    id: '',
    firstName: 'cnhcgn',
    lastName: 'gngn',
    email: 'vhmvhm',
    address: 'vnvm',
    departmentRole: 'bmvbmv',
  });

  const [noticeContent, setNoticeContent] = useState('');

  useEffect(() => {
    // Fetch user data from the backend when the component mounts
    fetchUserData();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const fetchUserData = async () => {
    try {
      // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint URL
      const response = await fetch('YOUR_BACKEND_ENDPOINT');
      const data = await response.json();

      // Update the state with the fetched user data
      setUserData(data);
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };

  const handleNoteToggle = () => {
    setIsNoteVisible(!isNoteVisible);
  };

  const handleEditToggle = (field) => {
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });
  };

  const handleFieldChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleSave = async () => {
    try {
      // Update user data on the backend
      const response = await fetch('YOUR_BACKEND_UPDATE_ENDPOINT', {
        method: 'PUT', // Assuming your backend supports a PUT request for updates
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User data updated successfully on the backend');

        // Reset editing state
        setIsEditing(false);

        // Refresh user data on the frontend
        fetchUserData();
      } else {
        console.error('Failed to update user data on the backend');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };


  const handleLoadNotice = () => {
    // Fetch notice content from the backend when the notice board is clicked
    // Replace 'YOUR_NOTICE_ENDPOINT' with the actual endpoint URL for fetching notice content
    fetch('YOUR_NOTICE_ENDPOINT')
      .then(response => response.text())
      .then(data => setNoticeContent(data))
      .catch(error => console.error('Error fetching notice content:', error));
  };

  // Map the display titles to the corresponding database column names
  const fieldTitles = {
    id: 'ID',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    address: 'Address',
    departmentRole: 'Department/Role',
  };

  return (
    
    

      <div className="left-panel">
      <div className="username-typewriter">
          <UsernameTypewriter />
        </div>
        {/* Profile Picture Section */}
        <div className="profile-picture-container">
          {/* Your profile picture display logic here */}
          {/* Example: <img src={profilePictureSrc} alt="Profile" /> */}
          <div className="profile-picture-overlay">
            <label htmlFor="profile-picture-input" className="upload-icon">
              📷
            </label>
            <input
              type="file"
              id="profile-picture-input"
              accept="image/*"
              onChange={(e) => {
                // Handle profile picture upload logic
                console.log('Selected file:', e.target.files[0]);
              }}
            />
          </div>
          
        </div>



        {/* User Data Form */}
        <div className="user-data-form">
          {Object.keys(userData).map((field) => (
            <div key={field} className="form-field">
              <span className="field-label">{fieldTitles[field]}</span>
              {isEditing[field] ? (
                <input
                  type="text"
                  value={userData[field]}
                  onChange={(e) => handleFieldChange(field, e.target.value)}
                />
              ) : (
                <span className="field-value">{userData[field]}</span>
              )}
              {field !== 'id' && (
                <button
                  className={`edit-button ${isEditing[field] ? 'save-button' : ''}`}
                  onClick={() => handleEditToggle(field)}
                >
                  {isEditing[field] ? 'Save' : 'Edit'}
                </button>
              )}
            </div>
          ))}
        </div>

  
      

      <div className="right-panel">
        {/* Change Password & Username Button */}
        <button className="change-password-button" onClick={handleSave}>
          Password Change
        </button>
      </div>
    </div>
  );
};

export { UserProfl };

// BackgroundVideoPage.js

// import React from 'react';
// import Backgroundvid from './Backgroundvid.mp4';
// import  './BackgroundVideoPage.css';  // Import the CSS file
// import { Sidebar } from '../../sidebar/sidebar';

// const BackgroundVideoPage = () => {
//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />

//       <div className="background-video-page">
//         <video autoPlay loop muted className="video-element" style={{ width: '100%', height: '40%', objectFit: 'cover', opacity:'0.4' }}>
//           <source src={Backgroundvid} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export { BackgroundVideoPage };
