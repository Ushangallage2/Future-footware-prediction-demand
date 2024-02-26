// ManageUsers.js
import React from 'react';
import ExampleWithProviders from './manageUserTable';
import './manageUsers.css';
//import Table from './materialtbl';
import Table from './materialtable';
import { Sidebar } from '../../sidebar/sidebar';


function ManageUsers() {
  

  const col = [
    { field: "id", title: " ID" },
    { field: "fName", title: "First Name" },
    { field: "lname", title: "Last Name" },
    { field: "email", title: "Email" },
    { field: "username", title: "User Name" },
    { field: "status", title: "Account Status" },
    { field: "role", title: "Role" },
  ]

 
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <Sidebar />
      <div className="form-container">
        {/* <ExampleWithProviders props={a}/> */}
        <Table col={col}  />
      </div>
    </div>

  )
}

export { ManageUsers };


