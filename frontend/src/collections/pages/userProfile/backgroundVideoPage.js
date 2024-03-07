// import React from 'react' version 1;
// import Backgroundvid from './Backgroundvid.mp4';
// import './BackgroundVideoPage.css';
// import { Sidebar } from '../../sidebar/sidebar';
// import { UserProfl } from './UserProfile';

// const BackgroundVideoPage = () => {
//     return (
//         <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//             <Sidebar />

//             <div className="background-video-page">
//                 <video autoPlay loop muted className="video-element" style={{ width: '100%', height: '40%', objectFit: 'cover', opacity: '0.4' }}>
//                     <source src={Backgroundvid} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </div>

//             <div className="user-profile-components"   >
//                 <UserProfl />
//             </div>
//         </div>
//     );
// };

// export { BackgroundVideoPage };

import { useState, useEffect,  useRef } from 'react';
import React from 'react';
import Backgroundvid from './Backgroundvid.mp4';
import './BackgroundVideoPage.css';
import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter'; // Import the UsernameTypewriter component


   


const BackgroundVideoPage = () => {


    const [isNoteVisible, setIsNoteVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
      id: 'fhgdfhdf',
      firstName: 'cnhcgn',
      lastName: 'gngn',
      email: 'vhmvhm',
      address: 'vnvm',
      departmentRole: 'bmvbmv',
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
          style={{ width: '80.5%', height: '40%', objectFit: 'cover' , opacity: "0.5" }}
        >
          <source src={Backgroundvid }type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="pause-resume-button" onClick={handleTogglePlay}>
          {isPlaying ? 'Pause' : 'Resume'}
        </button> 
     




{/* 
      <div className="background-video-page">,
        <video autoPlay loop muted className="video-element" style={{ width: '80.5%', height: '40%', objectFit: 'cover' }}>
          <source src={Backgroundvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}














              <div className="profile-picture-container">
                  {/* Your profile picture display logic here */}
                  {/* Example: <img src={profilePictureSrc} alt="Profile" /> */}
                  <div className="profile-picture-overlay">
                      <label htmlFor="profile-picture-input" className="upload-icon">
                          📷
                      </label>
                      <div className='input-area'>   <input
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

              </div>



{/* 
              <div className="user-data-form">
    {Object.keys(userData).map((field) => (
        <div key={field} className={`form-field ${isEditing[field] ? 'editing' : ''}`}>
            <span className="field-label">{field !== 'id' && field}</span>
            {field === 'id' ? (
                <span className="field-value" style={{ fontSize: 'small' }}>
                    {userData[field]}
                </span>
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
</div> */}


 {/* User Data Form */}
<div className="user-data-form">
  {Object.keys(userData).map((field) => (
    <div key={field} className={`form-field ${field === 'id' ? 'small-id-field' : ''}`}>
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

// import React, { useState, useEffect } from 'react';
// import Backgroundvid from './Backgroundvid.mp4';
// import './BackgroundVideoPage.css';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';

// const BackgroundVideoPage = () => {
//   return (
//     <div style={{ position: 'fixed', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />

//       <div className="username-typewriter">
//         <UsernameTypewriter />
//       </div>

//       <div className="background-video-page">
//         <div className="profile-picture-container">
//           <img
//             src="your-profile-picture-url.jpg" // Replace with the actual URL of your profile picture
//             alt="Profile"
//             className="profile-picture"
//           />
//         </div>
        
//         <video
//           autoPlay
//           loop
//           muted
//           className="video-element"
//           style={{ width: '80.5%', height: '40%', objectFit: 'cover', opacity: '0.2' }}
//         >
//           <source src={Backgroundvid} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export { BackgroundVideoPage };

















// import React, { useState, useEffect } from 'react';
// import './BackgroundVideoPage.css';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';

// const BackgroundVideoPage = () => {
//   const [isNoteVisible, setIsNoteVisible] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [userData, setUserData] = useState({
//     id: '',
//     firstName: 'cnhcgn',
//     lastName: 'gngn',
//     email: 'vhmvhm',
//     address: 'vnvm',
//     departmentRole: 'bmvbmv',
//   });

//   const [noticeContent, setNoticeContent] = useState('');

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
//       console.log('Error fetching user data:', error);
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

//   const handleLoadNotice = () => {
//     // Fetch notice content from the backend when the notice board is clicked
//     // Replace 'YOUR_NOTICE_ENDPOINT' with the actual endpoint URL for fetching notice content
//     fetch('YOUR_NOTICE_ENDPOINT')
//       .then((response) => response.text())
//       .then((data) => setNoticeContent(data))
//       .catch((error) => console.error('Error fetching notice content:', error));
//   };

//   // Map the display titles to the corresponding database column names
//   const fieldTitles = {
//     id: 'ID',
//     firstName: 'First Name',
//     lastName: 'Last Name',
//     email: 'Email',
//     address: 'Address',
//     departmentRole: 'Department/Role',
//   };

//   return (
//     <div style={{ position: 'fixed', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />

//       <div className="background-video-page">
//         <video
//           autoPlay
//           loop
//           muted
//           className="video-element"
//           style={{ width: '80.5%', height: '40%', objectFit: 'cover', opacity: '0.2' }}
//         >
//           <source src="Backgroundvid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <div className="left-panel">
//         <div className="username-typewriter">
//           <UsernameTypewriter />
//         </div>
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
//               <span className="field-label">{fieldTitles[field]}</span>
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
//           Password Change
//         </button>
//       </div>
//     </div>
//   );
// };

// export { BackgroundVideoPage };
