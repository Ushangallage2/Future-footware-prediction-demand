

// // import { useState, useEffect,  useRef } from 'react';
// // import React from 'react';
// // import Backgroundvid from './Backgroundvid.mp4';
// // import './BackgroundVideoPage.css';
// // import { Sidebar } from '../../sidebar/sidebar';
// // import UsernameTypewriter from '../../components/UsernameTypewriter'; 


   


// // const BackgroundVideoPage = () => {


// //     const [isNoteVisible, setIsNoteVisible] = useState(false);
// //     const [isEditing, setIsEditing] = useState(false);
// //     const [userData, setUserData] = useState({
// //       id: 'fhgdfhdf',
// //       firstName: 'cnhcgn',
// //       lastName: 'gngn',
// //       email: 'vhmvhm',
// //       address: 'vnvm',
// //       departmentRole: 'bmvbmv',
// //     });

// //     const [isPlaying, setIsPlaying] = useState(true);
// //     const videoRef = useRef(null);
  
// //     const handleTogglePlay = () => {
// //       const video = videoRef.current;
// //       if (video) {
// //         if (isPlaying) {
// //           video.pause();
// //         } else {
// //           video.play();
// //         }
// //         setIsPlaying(!isPlaying);
// //       }
// //     };




// //     const [noticeContent, setNoticeContent] = useState('');

// //     useEffect(() => {
// //         // Fetch user data from the backend when the component mounts
// //         fetchUserData();
// //       }, []); // Empty dependency array ensures this effect runs once when the component mounts
    
// //       const fetchUserData = async () => {
// //         try {
// //           // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint URL
// //           const response = await fetch('YOUR_BACKEND_ENDPOINT');
// //           const data = await response.json();
    
// //           // Update the state with the fetched user data
// //           setUserData(data);
// //         } catch (error) {
// //           console.log('Error fetching user data:', error);
// //         }
// //       };

// //       const handleNoteToggle = () => {
// //         setIsNoteVisible(!isNoteVisible);
// //       };
    
// //       const handleEditToggle = (field) => {
// //         setIsEditing({ ...isEditing, [field]: !isEditing[field] });
// //       };

      
    
// //       const handleFieldChange = (field, value) => {
// //         setUserData({ ...userData, [field]: value });
// //       };


// //       const handleSave = async () => {
// //         try {
// //           // Update user data on the backend
// //           const response = await fetch('YOUR_BACKEND_UPDATE_ENDPOINT', {
// //             method: 'PUT', // Assuming your backend supports a PUT request for updates
// //             headers: {
// //               'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(userData),
// //           });
    
// //           if (response.ok) {
// //             console.log('User data updated successfully on the backend');
    
// //             // Reset editing state
// //             setIsEditing(false);
    
// //             // Refresh user data on the frontend
// //             fetchUserData();
// //           } else {
// //             console.error('Failed to update user data on the backend');
// //           }
// //         } catch (error) {
// //           console.error('Error updating user data:', error);
// //         }
// //       };


// //       const handleLoadNotice = () => {
// //         // Fetch notice content from the backend when the notice board is clicked
// //         // Replace 'YOUR_NOTICE_ENDPOINT' with the actual endpoint URL for fetching notice content
// //         fetch('YOUR_NOTICE_ENDPOINT')
// //           .then(response => response.text())
// //           .then(data => setNoticeContent(data))
// //           .catch(error => console.error('Error fetching notice content:', error));
// //       };


// //       const fieldTitles = {
// //         id: 'ID',
// //         firstName: 'First Name',
// //         lastName: 'Last Name',
// //         email: 'Email',
// //         address: 'Address',
// //         departmentRole: 'Department',
// //       };




// //   return (
// //     <div style={{ position: 'fixed', display: 'flex', alignItems: 'flex-start' }}>
// //       <Sidebar />

// //       <div className="username-typewriter">
// //           <UsernameTypewriter />
// //         </div>

      
// //          <div className="background-video-page">
// //         <video
// //           ref={videoRef}
// //           autoPlay
// //           loop
// //           muted
// //           className="video-element"
// //           style={{ width: '80.5%', height: '40%', objectFit: 'cover' , opacity: "0.5" }}
// //         >
// //           <source src={Backgroundvid }type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //         <button className="pause-resume-button" onClick={handleTogglePlay}>
// //           {isPlaying ? 'Pause' : 'Resume'}
// //         </button> 
     







// //               <div className="profile-picture-container">
// //                   {/* Your profile picture display logic here */}
// //                   {/* Example: <img src={profilePictureSrc} alt="Profile" /> */}
// //                   <div className="profile-picture-overlay">
// //                       <label htmlFor="profile-picture-input" className="upload-icon">
// //                           📷
// //                       </label>
// //                       <div className='input-area'>   <input
// //                           type="file"
// //                           id="profile-picture-input"
// //                           accept="image/*"
// //                           onChange={(e) => {
// //                               // Handle profile picture upload logic
// //                               console.log('Selected file:', e.target.files[0]);
// //                           }}
// //                       />

// //                       </div>
// //                   </div>

// //               </div>




// //  {/* User Data Form */}
// // <div className="user-data-form">
// //   {Object.keys(userData).map((field) => (
// //     <div key={field} className={`form-field ${field === 'id' ? 'small-id-field' : ''}`}>
// //       <span className="field-label">{fieldTitles[field]}</span>
// //       {isEditing[field] ? (
// //         <input
// //           type="text"
// //           value={userData[field]}
// //           onChange={(e) => handleFieldChange(field, e.target.value)}
// //         />
// //       ) : (
// //         <span className="field-value">{userData[field]}</span>
// //       )}
// //       {field !== 'id' && (
// //         <button
// //           className={`edit-button ${isEditing[field] ? 'save-button' : ''}`}
// //           onClick={() => handleEditToggle(field)}
// //         >
// //           {isEditing[field] ? 'Save' : 'Edit'}
// //         </button>
// //       )}
// //     </div>
// //   ))}
// // </div>


// //             <div className="note-container">
// //           <button className="toggle-note-button" onClick={handleNoteToggle}>
// //             {isNoteVisible ? 'Fold Note' : 'IMPORTANT'}
// //           </button>
// //           {isNoteVisible && (
// //             <div className="note-content">
// //               {/* Add your note content here */}
      
// //             </div>
// //           )}
// //         </div>




// //             </div>


// //         </div>
// //     );
// // };

// // export { BackgroundVideoPage };

// import React, { useState, useEffect, useRef } from 'react';
// import Backgroundvid from './Backgroundvid.mp4';
// import './BackgroundVideoPage.css';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';
// import { rgbToHex } from '@material-ui/core';
// import { blue } from '@material-ui/core/colors';

// const BackgroundVideoPage = () => {
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
//   const [error, setError] = useState({
//     fName: '',
//     email: ''
//   });

//   const [isPlaying, setIsPlaying] = useState(true);
//   const videoRef = useRef(null);

//   const handleTogglePlay = () => {
//     const video = videoRef.current;
//     if (video) {
//       if (isPlaying) {
//         video.pause();
//       } else {
//         video.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const [noticeContent, setNoticeContent] = useState('');

//   const decodedToken = jwtDecode(localStorage.getItem('token'));

//   useEffect(() => {
//     // Fetch user data from the backend when the component mounts
//     fetchUserData();
//   }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   const fetchUserData = async () => {
//     try {
//       // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint URL
//       const response = await axios.get(`http://localhost:8080/user/byId/${decodedToken.id}`)
//         .then((response) => {
//           setUserData({ id: response.data.id, firstName: response.data.fName, lastName: response.data.lName, email: response.data.email, address: response.data.address, departmentRole: response.data.role });
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//       const data = await response.json();
//       console.log(data);

//       // Update the state with the fetched user data
//       setUserData(data);
//     } catch (error) {
//       console.log('Error fetching user data:', error);
//     }
//   };

//   const handleNoteToggle = () => {
//     setIsNoteVisible(!isNoteVisible);
//   };

//   const handleEditToggle = (field) => {
//     setIsEditing({ ...isEditing, [field]: !isEditing[field] });
//     if (isEditing[field] === true) {
//       console.log(userData.email, userData.address,  userData.firstName, userData.id, userData.lastName);
//       handleSave();
//     }
//   };

//   const handleFieldChange = (field, value) => {
//     if (field === 'email') {
//       validateEmail(value);
//     }
//     setUserData({ ...userData, [field]: value });
//   };
//   // `http://localhost:8080/user/editUser/${decodedToken.id}`
//   const handleSave = async () => {
//     try {
//       // Update user data on the backend
//       const response = await axios.put(`http://localhost:8080/user/editProfile/${decodedToken.id}`, {
//         fName: userData.firstName,
//         lName: userData.lastName,
//         email: userData.email,
//         address: userData.address,
//         role: userData.departmentRole
//       });

//       console.log(response);
//       fetchUserData();
//     } catch (error) {
//       console.error('Error updating user data:', error);
//     }
//   };

//   const handleLoadNotice = () => {
//     // Fetch notice content from the backend when the notice board is clicked
//     // Replace 'YOUR_NOTICE_ENDPOINT' with the actual endpoint URL for fetching notice content
//     fetch('YOUR_NOTICE_ENDPOINT')
//       .then(response => response.text())
//       .then(data => setNoticeContent(data))
//       .catch(error => console.error('Error fetching notice content:', error));
//   };

//   const fieldTitles = {
//     id: 'ID',
//     firstName: 'First Name',
//     lastName: 'Last Name',
//     email: 'Email',
//     address: 'Address',
//     departmentRole: 'Department',
//   };

//   const validateEmail = (email) => {
//     const re = /\S+@\S+\.\S+/;
//     if (!re.test(email)) {
//       setError({ ...error, email: 'Invalid email' });
//     } else {
//       setError({ ...error, email: '' });
//     }
//   };

//   return (
//     <div style={{ position: 'fixed', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
  
//       <div className="username-typewriter">
//         <UsernameTypewriter />
//       </div>
  
//       <div className="background-video-page">
//         <video
//           ref={videoRef}
//           autoPlay
//           loop
//           muted
//           className="video-element"
//           style={{ width: '80.5%', height: '40%', objectFit: 'cover', opacity: "0.8" }}
//         >
//           <source src={Backgroundvid} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <button className="pause-resume-button" onClick={handleTogglePlay}>
//           {isPlaying ? 'Pause' : 'Resume'}
//         </button>
  
//         <div className="profile-picture-container">
//           {/* Your profile picture display logic here */}
//           {/* Example: <img src={profilePictureSrc} alt="Profile" /> */}
//           <div className="profile-picture-overlay">
//             <label htmlFor="profile-picture-input" className="upload-icon">
//               📷
//             </label>
//             <div className='input-area'>
//               <input
//                 type="file"
//                 id="profile-picture-input"
//                 accept="image/*"
//                 onChange={(e) => {
//                   // Handle profile picture upload logic
//                   console.log('Selected file:', e.target.files[0]);
//                 }}
//               />
//             </div>
//           </div>
//         </div>
  
       
//         <div className="user-data-form">
//           {Object.keys(userData).map((field) => (
//             <div key={field} className={`form-field ${field === 'id' ? 'small-id-field' : ''}`}>
//               <span className="field-label">{fieldTitles[field]}
              
              
//               </span>
//               {isEditing[field] ? (
//                 <>
//                 <div className="field-value" style={{ maxWidth: '200px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'  }}>
//                   <input style={{ backgroundcolor: 'blue' }}
                   
//                     type="text"
//                     value={userData[field]}
//                     onChange={(e) => {
//                       handleFieldChange(field, e.target.value);
                      
//                     }}
                
//                   />
//                   </div>
//                   {error.email && <p style={{ color: 'red', fontSize: '15px', marginLeft: '10px' }}>{error.email}</p>}
//                 </>
//               ) : (

                
//                 <span className="field-value" style={{ maxWidth: '200px',height:'35px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{userData[field]}</span>

//               )}
//               {field !== 'id' && field !== 'departmentRole' && (
//                 <button
//                   className={`edit-button ${isEditing[field] ? 'save-button' : ''}`}
//                   onClick={() => handleEditToggle(field)}
//                   disabled={!userData.firstName || !userData.email || error.email !== ''}
//                 >
//                   {isEditing[field] ? 'Save' : 'Edit'}
//                 </button>
//               )}
//             </div>


//           ))}
//         </div>

  
//         <div className="note-container">
//           <button className="toggle-note-button" onClick={handleNoteToggle}>
//             {isNoteVisible ? 'Fold Note' : 'IMPORTANT'}
//           </button>
//           {isNoteVisible && (
//             <div className="note-content">
//               {/* Add your note content here */}
  
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
//      };
// export { BackgroundVideoPage };


import React, { useState, useEffect, useRef } from 'react';
import Backgroundvid from './Backgroundvid.mp4';
import './BackgroundVideoPage.css';
import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BackgroundVideoPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [isNoteVisible, setIsNoteVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    departmentRole: '',
   
  });
  const [error, setError] = useState({
    fName: '',
    email: ''
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const [noticeContent, setNoticeContent] = useState('');

  const decodedToken = jwtDecode(localStorage.getItem('token'));
  console.log(decodedToken);

  useEffect(() => {
    // Fetch user data from the backend when the component mounts
    fetchUserData();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const fetchUserData = async () => {
    try {

      const response = await axios.get(`http://localhost:8080/user/byId/${decodedToken.id}`)
        .then((response) => {
          setUserData({ id: response.data.id, firstName: response.data.fName, lastName: response.data.lName, email: response.data.email, address: response.data.address, departmentRole: response.data.role });
        
        })
      
        .catch((error) => {
          console.log(error);
        });
      const data = await response.json();
      console.log(data);

      // Update the state with the fetched user data
      setUserData(data);
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };
 

  useEffect(() => {
    const fetchUserImage = async () => {
        try {
          const response = await fetch(`http://localhost:8080/profile/getProfImage/${decodedToken.id}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch model image. Status: ${response.status}`);
          }
        
          console.log(response)

          const imageBlob = await response.blob();
          const imageUrl = URL.createObjectURL(imageBlob);
          setProfileImageUrl(imageUrl);
        
        } catch (error) {
          console.log('Error fetching model image:', error);
        
      }
    };

    fetchUserImage();
  }, []);




  const handleNoteToggle = () => {
    setIsNoteVisible(!isNoteVisible);
  };

  const handleEditToggle = (field) => {
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });
    if (isEditing[field] === true) {
      console.log(userData.email, userData.address, userData.firstName, userData.id, userData.lastName);
      handleSave();
    }
  };


  const handleFieldChange = (field, value) => {
    if (field === 'email') {
      validateEmail(value);
    }
    setUserData({ ...userData, [field]: value });
  };

  const handleSave = async () => {
    try {
      // Update user data on the backend
      const response = await axios.put(`http://localhost:8080/user/editProfile/${decodedToken.id}`, {
        fName: userData.firstName,
        lName: userData.lastName,
        email: userData.email,
        address: userData.address,
        role: userData.departmentRole
      });

      console.log(response);
      fetchUserData();
    } catch (error) {
      console.error('Error updating user data:', error);
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

  const handleProfilePictureUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('userId', decodedToken.id);
    formData.append('image', file);

    try {
      const response = await axios.post(`http://localhost:8080/profile/upload/${decodedToken.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("fetching imag!!!!!!!!!!!!!!!!!!!!!!!!")
      console.log(response);
      // Update user data after uploading profile picture
      // const imageBlob = await response.blob();
      // const imageUrl = URL.createObjectURL(imageBlob);
      //     setProfileImageUrl(imageUrl);

    } catch (error) {
      console.log('Error uploading profile picture:', error);
    }
  };


  const fieldTitles = {
    id: 'ID',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    address: 'Address',
    departmentRole: 'Department',
  };

  return (
    <div style={{ position: 'fixed', display: 'flex', alignItems: 'flex-start' }}>
      <Sidebar />

      <div className="username-typewriter">
        <UsernameTypewriter />
      </div>

      <div className="background-video-page">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="video-element"
          style={{ width: '80.5%', height: '40%', objectFit: 'cover', opacity: "0.4" }}
        >
          <source src={Backgroundvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="pause-resume-button" onClick={handleTogglePlay}>
          {isPlaying ? 'Pause' : 'Resume'}
        </button>

        {/* <div className="profile-picture-container">
          <div className="profile-picture-overlay">
            <label htmlFor="profile-picture-input" className="upload-icon">
              📷
            </label>
            <div className='input-area'>
              <input
                type="file"
                id="profile-picture-input"
                accept="image/*"
                onChange={handleProfilePictureUpload}
              />
            </div>
          </div>
        </div> */}


        <div className="profile-picture-container">
          <div className="profile-picture-overlay">
            <label htmlFor="profile-picture-input" className="upload-icon"
              
              style={{ 
                opacity: isHovered ? 1 : 0, 
                transition: "opacity 0.3s ease"
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              
              >
              📷
            </label>
            <div className='input-area'>
              <input
                type="file"
                id="profile-picture-input"
                accept="image/*"
                onChange={handleProfilePictureUpload}
              
              />
            </div>
          </div>
          {profileImageUrl && <img src={profileImageUrl} alt="Profile Picture" className="uploaded-profile-picture" />}
        </div>


        



        <div className="user-data-form">
          {Object.keys(userData).map((field) => (
            <div key={field} className={`form-field ${field === 'id' ? 'small-id-field' : ''}`}>
              <span className="field-label">{fieldTitles[field]}</span>
              {isEditing[field] ? (
                <>
                  <div className="field-value" style={{ maxWidth: '200px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    <input
                      type="text"
                      value={userData[field]}
                      onChange={(e) => {
                        handleFieldChange(field, e.target.value);
                      }}
                    />
                  </div>
                  {error.email && <p style={{ color: 'red', fontSize: '15px', marginLeft: '10px' }}>{error.email}</p>}
                </>
              ) : (
                <span className="field-value" style={{ maxWidth: '200px', height: '35px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{userData[field]}</span>
              )}
              {field !== 'id' && field !== 'departmentRole' && (
                <button
                  className={`edit-button ${isEditing[field] ? 'save-button' : ''}`}
                  onClick={() => handleEditToggle(field)}
                  disabled={!userData.firstName || !userData.email || error.email !== ''}
                >
                  {isEditing[field] ? 'Save' : 'Edit'}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="note-container">
          <button className="toggle-note-button" onClick={handleNoteToggle}>
            {isNoteVisible ? 'Fold Note' : 'IMPORTANT'}
          </button>
          {isNoteVisible && (
            <div className="note-content">
              {/* Add your note content here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { BackgroundVideoPage };



