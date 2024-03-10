// // ManageUsers.js
// import React from 'react';
// import ExampleWithProviders from './manageUserTable';
// import './manageUsers.css';
// //import Table from './materialtbl';
// import Table from './materialtable';
// import { Sidebar } from '../../sidebar/sidebar';


// function ManageUsers() {
  

//   const col = [
//     { field: "id", title: " ID" },
//     { field: "fName", title: "First Name" },
//     { field: "lName", title: "Last Name" },
//     { field: "email", title: "Email" },
//     { field: "username", title: "User Name" },
//     { field: "status", title: "Account Status" },
//     { field: "role", title: "Role" },
   
//   ]
  

 
//   return (
//     <div style={{ display: 'flex', alignItems: 'flex-start' }}>
//     <Sidebar />
//       <div className="form-container">
//         {/* <ExampleWithProviders props={a}/> */}
//         <Table col={col}  />
//       </div>
//     </div>

//   )
// }

// export { ManageUsers };
// ManageUsers.js
// import React from 'react';
// import ExampleWithProviders from './manageUserTable';
// import './manageUsers.css';
// import Table from './materialtable';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter'; 

// function ManageUsers() {
//   const col = [
//     { field: "id", title: " ID" },
//     { field: "fName", title: "First Name" },
//     { field: "lName", title: "Last Name" },
//     { field: "email", title: "Email" },
//     { field: "username", title: "User Name" },
//     { field: "status", title: "Account Status" },
//     { field: "role", title: "Role" },
//   ];

//   return (
//     <div style={{ display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
//       <div className="form-container">
//         <UsernameTypewriter />
//         <Table col={col} />
//       </div>
//     </div>
//   );
// }

// export { ManageUsers };


// import React from 'react';
// import ExampleWithProviders from './manageUserTable';
// import './manageUsers.css';
// import Table from './materialtable';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter'; 

// function ManageUsers() {
//   const col = [
//     { field: "id", title: " ID" },
//     { field: "fName", title: "First Name" },
//     { field: "lName", title: "Last Name" },
//     { field: "email", title: "Email" },
//     { field: "username", title: "User Name" },
//     { field: "status", title: "Account Status" },
//     { field: "role", title: "Role" },
//   ];

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
//       <div className="form-container">
//         <div className="username-typewriter">
//           <UsernameTypewriter />

//         </div>
//         <Table col={col} />
//       </div>
//     </div>
//   );
// }

// export { ManageUsers };




// ManageUsers.js

// import React, { useState } from 'react';
// import ExampleWithProviders from './manageUserTable';
// import './manageUsers.css';
// import Table from './materialtable';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter'; 

// function ManageUsers() {
//   const col = [  { field: "id", title: " ID" },
//       { field: "fName", title: "First Name" },
//       { field: "lName", title: "Last Name" },
//       { field: "email", title: "Email" },
//       { field: "username", title: "User Name" },
//       { field: "status", title: "Account Status" },
//       { field: "role", title: "Role" },
   
//   ];

//   const [newMessage, setNewMessage] = useState('');

//   const handleSendMessage = () => {
//     // Add logic to send the newMessage to the backend
//     // You can use fetch or axios to send a POST request to your backend endpoint
//     console.log('Sending message:', newMessage);
//     setNewMessage('');
//   };

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
//       <div className="form-container">
//         <div className="username-typewriter">
//           <UsernameTypewriter />
//         </div>
        
//         {/* New message area */}
//         <div className="new-message-container">
//           <textarea
//             className='new-message-textarea'
//             placeholder='Type your message...'
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//           />
//           <button className='send-message-button' onClick={handleSendMessage}>
//             Send Message
//           </button>
//         </div>

//         <Table col={col} />
//       </div>
//     </div>
//   );
// }

// export { ManageUsers };

// import React, { useState } from 'react'---------------start-----;
// import { jwtDecode } from 'jwt-decode';
// import './manageUsers.css';
// import Table from './materialtable';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter'; 

// function ManageUsers() {
//   const col = [
//     { field: "id", title: " ID" },
//     { field: "fName", title: "First Name" },
//     { field: "lName", title: "Last Name" },
//     { field: "email", title: "Email" },
//     { field: "username", title: "User Name" },
//     { field: "status", title: "Account Status" },
//     { field: "role", title: "Role" },
//   ];

//   const [newMessage, setNewMessage] = useState('');


//   const handleSendMessage = async () => {
//     try {
//       // Check if the newMessage is empty
//       if (newMessage.trim() === '') {
//         // Show an alert or handle the empty message case accordingly
//         alert('Please enter a message before sending.');
//         return;
//       }
  
//       const token = localStorage.getItem('token');
//       const { id } = jwtDecode(token);
      
//       const response = await fetch(`http://localhost:8080/user/request/${id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
        
//         body: JSON.stringify({ message: newMessage, senderId: id }),
//       });
  
//       if (response.ok) {
//         console.log('Message sent successfully');
  
//         // Show an alert to the message sender
//         alert('Message sent successfully');
  
        
//       } else {
//         console.log('Failed to send message');
  
//         // Show an alert for failed message sending
//         alert('Failed to send message');
//       }
//     } catch (error) {
//       console.log('Error sending message:', error);
  
//       // Show an alert for error in sending message
//       alert('Error sending message');
//     } finally {
//       // Reset the message input
//       setNewMessage('');
//     }
//   };

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
//       <div className="form-container">
//         <div className="username-typewriter">
//           <UsernameTypewriter />
//         </div>
        
//         {/* New message area */}
//         <div className="new-message-container">
//           <textarea
//             className='new-message-textarea'
//             placeholder='Type a message to send all the users ...'
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//           />
//           <button className='send-message-button' onClick={handleSendMessage}>
//             Send Message
//           </button>
//         </div>

//         <Table col={col} />
//       </div>
//     </div>
//   );
// }

// export { ManageUsers }----------------------end------------------;



// import React, { useEffect, useState } from 'react';
// import { jwtDecode } from 'jwt-decode';
// import './manageUsers.css';
// import Table from './materialtable';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter'; 
// import io from 'socket.io-client'; 

// function ManageUsers() {
//   const col = [
//     { field: "id", title: " ID" },
//     { field: "fName", title: "First Name" },
//     { field: "lName", title: "Last Name" },
//     { field: "email", title: "Email" },
//     { field: "username", title: "User Name" },
//     { field: "status", title: "Account Status" },
//     { field: "role", title: "Role" },
//   ];

//   const [newMessage, setNewMessage] = useState('');


//   const handleSendMessage = async () => {
//     try {
//       // Check if the newMessage is empty
//       if (newMessage.trim() === '') {
//         // Show an alert or handle the empty message case accordingly
//         alert('Please enter a message before sending.');
//         return;
//       }

 
  
//       const token = localStorage.getItem('token');
//       const { id } = jwtDecode(token);


//       const socket = io.connect('http://localhost:8080'); 
//       socket.emit('sendMessage', { message: newMessage, senderId: id });


//       useEffect(() => {
//         socket.on("recieveMessage" ,(data) =>{
//           console.log(data)
//           alert(data.message);  // coming back from BE and alerting to all the users but the sender (but this should be outside of the function)
//         })

//       }, [socket]
      
//       )



//       const response = await fetch(`http://localhost:8080/user/request/${id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
        
//         body: JSON.stringify({ message: newMessage, senderId: id }),
//       });
  
//       if (response.ok) {
//         console.log('Message sent successfully');
  
//         // Show an alert to the message sender
//         alert('Message sent successfully');
  
        
//       } else {
//         console.log('Failed to send message');
  
//         // Show an alert for failed message sending
//         alert('Failed to send message');
//       }
//     } catch (error) {
//       console.log('Error sending message:', error);
  
//       // Show an alert for error in sending message
//       alert('Error sending message');
//     } finally {
//       // Reset the message input
//       setNewMessage('');
//     }
//   };

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
//       <div className="form-container">
//         <div className="username-typewriter">
//           <UsernameTypewriter />
//         </div>
        
//         {/* New message area */}
//         <div className="new-message-container">
//           <textarea
//             className='new-message-textarea'
//             placeholder='Type a message to send all the users ...'
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//           />
//           <button className='send-message-button' onClick={handleSendMessage}>
//             Send Message
//           </button>
//         </div>

//         <Table col={col} />
//       </div>
//     </div>
//   );
// }

// export { ManageUsers };



import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import './manageUsers.css';
import Table from './materialtable';
import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter'; 
import io from 'socket.io-client'; 

function ManageUsers() {
  const col = [
    { field: "id", title: " ID" },
    { field: "fName", title: "First Name" },
    { field: "lName", title: "Last Name" },
    { field: "email", title: "Email" },
    { field: "username", title: "User Name" },
    { field: "status", title: "Account Status" },
    { field: "role", title: "Role" },
  ];

  const [newMessage, setNewMessage] = useState('');

  const token = localStorage.getItem('token');
  const { id } = jwtDecode(token);

  const socket = io.connect('http://localhost:8080');

  useEffect(() => {
    socket.on("recieveMessage", (data) => {
      console.log(data);
      alert(data.message);  // coming back from BE and alerting to all the users but the sender
    });

    // Clean up the Socket.IO connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const handleSendMessage = async () => {
    try {
      // Check if the newMessage is empty
      if (newMessage.trim() === '') {
        // Show an alert or handle the empty message case accordingly
        alert('Please enter a message before sending.');
        return;
      }

      // Emit a message event to the Socket.IO server
      socket.emit('sendMessage', { message: newMessage, senderId: id });

      // Save the message to the database
      const response = await fetch(`http://localhost:8080/user/request/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: newMessage, senderId: id }),
      });

      if (response.ok) {
        console.log('Message sent and saved successfully');
       
        alert('Message sent and saved successfully');
      } else {
        console.error('Failed to send and save message');
     
        alert('Failed to send and save message');
      }
    } catch (error) {
      console.log('Error sending and saving message:', error);
      
      alert('Error sending and saving message');
    } finally {
      // Reset the message input
      setNewMessage('');
    }
  };

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
      <Sidebar />
      <div className="form-container">
        <div className="username-typewriter">
          <UsernameTypewriter />
        </div>
        
        {/* New message area */}
        <div className="new-message-container">
          <textarea
            className='new-message-textarea'
            placeholder='Type a message to send all the users ...'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className='send-message-button' onClick={handleSendMessage}>
            Send Message
          </button>
        </div>

        <Table col={col} />
      </div>
    </div>
  );
}

export { ManageUsers };
