import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';



 let sidebarData = [];




export const setSidebarData = (userRole) => {
  console.log("Setting sidebarData for userRole:", userRole);
  if (userRole === "admin") {
    sidebarData = [
      {
        title: "My Profile",
        link: "/backgroundVideoPage",
      },
      {
        title: "Manage Users",
        link: "/manageUsers",
      },
      {
        title: "Predict Demand",
        link: '/demandprediction',
      },
      {
        title: "View Reports",
        link: "/viewReport",
      },
      {
        title: "Generate New Model",
        link: "/newmodel",
      },
      {
        title: "Manage Sales Data",
        link: "/manageSalesData",
      },
      {
        title: "Logout",
        handleLogout: () => {
       
          localStorage.removeItem("userRole");
        },
      },
    ];
  } else if (userRole === "marketing") {
    sidebarData = [
      {
        title: "My Profile",
        link: "/backgroundVideoPage",
      },
      {
        title: "View Reports",
        link: "/viewReport",
      },
      {
        title: "Logout",
        handleLogout: () => {
          localStorage.removeItem("userRole");
        },
      },
    ];
  } else if (userRole === "product") {
    sidebarData = [
      {
        title: "My Profile",
        link: "/backgroundVideoPage",
      }, {
        title: "Generate New Model",
        link: "/newmodel",
      },
      {
        title: "View Reports",
        link: "/viewReport",
      },
      {
        title: "Predict Demand",
        link: '/demandprediction',
      },


      {
        title: "Logout",
        handleLogout: () => {
          localStorage.removeItem("userRole");
        },
      },
    ];
  }else {
   
    sidebarData = [
      {
        title: "My Profile",
        link: "/backgroundVideoPage",
      },{
        title: "Manage Sales Data",
        link: "/manageSalesData",
      }, {
        title: "Manage Users",
        link: "/manageUsers",
      },
      {
        title: "Logout",
        handleLogout: () => {
        
          localStorage.removeItem("userRole");
        },
      },
    ];
  }

  console.log("Updated sidebarData:", sidebarData);
};



// const userRole = "admin"; 




const userRole = localStorage.getItem('role');
console.log("Current userRole from localStorage:", userRole);
setSidebarData(userRole);





  
export { sidebarData };
