import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sidebarData } from './sidebarData';
import logo from './fdfs.png';
import { Button, Modal, Backdrop, Fade } from '@mui/material';

const ExitConfirmationModal = ({ open, onClose, onExit }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '400px',
            margin: 'auto',
            marginTop: '50px',
            textAlign: 'center',
          }}
        >
          <h3>Are you sure you want to exit?</h3>
          <div style={{ marginTop: '20px' }}>
            <Button onClick={onExit} style={{ marginRight: '10px' }} variant="contained" color="secondary">
              Exit
            </Button>
            <Button onClick={onClose} variant="outlined" color="secondary">
              Cancel
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export function Sidebar() {
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setExitModalOpen(true);
  };

  const handleExitModalClose = () => {
    setExitModalOpen(false);
  };

  const handleExitModalExit = () => {
    localStorage.clear();

    setExitModalOpen(false);
    navigate('/');
  };

  return (
    <div className='sidebar'>
      <img className='slidebarIcon' src={logo} alt="logo" style={{marginTop:'-3%'  , marginLeft:'32%'}} />
      <ul className='sidebarList'>
        {sidebarData.map((val, key) => (
          <li
            key={key}
            className="row"
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={() => {
              if (val.title === "Logout") {
                handleLogoutClick();
              } else {
                navigate(val.link);
              }
            }}
          >
            <div id='icon'>{val.icon}</div>
            <div id='title'>{val.title}</div>
          </li>
        ))}
      </ul>
      <ExitConfirmationModal
        open={exitModalOpen}
        onClose={handleExitModalClose}
        onExit={handleExitModalExit}
      />
    </div>
  );
}
