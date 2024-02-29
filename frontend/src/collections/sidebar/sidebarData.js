import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const sidebarData = [
  {
    title: "My Profile",
    link: "/userprofile",
  },
  {
    title: "Manage Users",
    link: "/manageUsers",
  },
  {
    title: "Predict Demand",
    link: '/demandPrediction',
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
//   {
//     title: "Settings",
//     link: "/settings",
//   },
  {
    title: "Logout",
    handleLogout: () => {}, //type logout logic here
  },
];
