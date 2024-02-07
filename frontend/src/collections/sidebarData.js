import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const sidebarData = [
    {
        title: "UserProfile",
        icon: <HomeIcon/>,
        link: "/userprofile"
    },

    {
        title: "Demand Prediction",
        icon: <OnlinePredictionIcon/>,
        link: "/prediction"
    },

    {
        title: "New Models",
        icon: <RollerSkatingIcon/>,
        link: "/models"
    },

    {
        title: "Update Database",
        icon: <StorageIcon/>,
        link: "/updateDatabase"
    },

    {
        title: "Settings",
        icon: <SettingsIcon/>,
        link: "/settings"
    },

    {
        title: "Logout",
        icon: <LogoutIcon/>,
        link: "/logout"
    },
];