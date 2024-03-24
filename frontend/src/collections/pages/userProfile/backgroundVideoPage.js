import React, { useState, useEffect, useRef } from 'react';
import Backgroundvid from './Backgroundvid.mp4';
import './BackgroundVideoPage.css';
import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import ChangeCredentialsPopup from './ChangeCredentialsPopup'; 


const BackgroundVideoPage = () => {
 
  const [isHovered, setIsHovered] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [isNoteVisible, setIsNoteVisible] = useState(false);
  // const [noteContent, setNoteContent] = useState('');
  const [notes, setNotes] = useState([]);
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


  const [isChangeCredentialsOpen, setIsChangeCredentialsOpen] = useState(false); // State for managing the popup
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

//   useEffect(() => {
//     const fetchNoteContent = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/report/getNote');
//             if (response.status === 200) {
//                 setNoteContent(response.data.noteContent); // assuming the response contains a field called noteContent
//             } else {
//                 console.error('Failed to fetch note content');
//             }
//         } catch (error) {
//             console.error('Error fetching note content:', error);
//         }
//     };

//     fetchNoteContent();
// }, []); 
useEffect(() => {
  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/report/getNote'); // Adjust URL based on your API endpoint
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  fetchNotes();
}, []);






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
      console.log("fetching imag...")
      console.log(response);
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


  const handleSaveCredentials = async (newUsername, newPassword) => {
    try {
      // API call to update username and password
      const response = await axios.put(`http://localhost:8080/user/updateCredentials/${decodedToken.id}`, {
        username: newUsername,
        password: newPassword
       

      });
    console.log(newUsername)

      if (response.status === 200) {
        console.log('Credentials updated successfully');
        
        // Optionally fetch updated user data or handle as needed
        fetchUserData();
      } else {
        console.log('Failed to update credentials');
       
      }
    } catch (error) {
      console.log('Error updating credentials:', error);
      
    }

    setIsChangeCredentialsOpen(false);
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
          style={{ width: '80.5%', height: '40%', objectFit: 'cover', opacity: "0.8" }}
        >
          <source src={Backgroundvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="pause-resume-button" onClick={handleTogglePlay}>
          {isPlaying ? 'Pause' : 'Resume'}
        </button>


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

        <div className="note-container" style={{ background: 'transparent' }}>
  <button className="toggle-note-button" onClick={handleNoteToggle}>
    {isNoteVisible ? 'Fold Note' : 'IMPORTANT'}
  </button>
  {isNoteVisible && (
    <div className="note-content" style={{ background: 'transparent', padding: '10px' }}>
      {notes.map((note, index) => (
        <p key={index} style={{ marginBottom: '20px', background: 'transparent' }}>Message: {note.content}</p>
      ))}
    </div>
  )}
</div>


             <button
          style={{
            position: 'fixed',
            padding: '10px 18px',
            border: '2px solid #ff4076c6',
            background: 'transparent',
            color: 'white',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: '55%',
            marginTop: '9%'
          }}
          onClick={() => setIsChangeCredentialsOpen(true)} // Open the popup when clicked
        >
          Change username or password
        </button>
        <ChangeCredentialsPopup
        isOpen={isChangeCredentialsOpen}
        onClose={() => setIsChangeCredentialsOpen(false)}
        onSave={handleSaveCredentials}
      />
      </div>
    </div>
  );
};

export { BackgroundVideoPage };



