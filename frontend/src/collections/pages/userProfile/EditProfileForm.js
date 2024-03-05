// EditProfileForm.js
import React, { useState } from 'react';
// import './EditProfileForm.css';

const EditProfileForm = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleProfilePhotoChange = (e) => {
    // Handle profile photo upload
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., update user profile)
    console.log('Name:', name);
    console.log('Bio:', bio);
    console.log('Profile Photo:', profilePhoto);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br></br><br></br>
      <textarea placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} /><br></br><br></br>
      <input type="file" accept="image/*" onChange={handleProfilePhotoChange} /><br></br><br></br>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProfileForm;
