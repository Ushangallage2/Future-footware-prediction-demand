import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { getAccordionUtilityClass } from "@mui/material";

export const sidebarData = [
    {
        title: "My Profile",
        // View profie
        // icon: <HomeIcon/>,
        link: "/userprofile"
    },
    {
        title: "Manage users",
        // create user account 
        // delete user account
        // icon: <HomeIcon/>,
        link: "/useraccount"
    },
    {
        title: "Manage sales data",
        // add sales data
        // icon: <HomeIcon/>,
        link: "/useraccount"
    },
    {
        title: "Predict demand",
        // view previous sales
        // icon: <OnlinePredictionIcon/>,
        link: "/prediction"
    },

    {
        title: "Generate new model",
        // view previous generated model
        // icon: <RollerSkatingIcon/>,
        link: "/models"
    },
    {
        title: "View reports",
        // icon: <RollerSkatingIcon/>,
        link: "/models"
    },

    // {
    //     title: "Update Database",
    //     icon: <StorageIcon/>,
    //     link: "/updateDatabase"
    // },

    {
        title: "Settings",
        //edit profile
        //change password
        icon: <SettingsIcon/>,
        link: "/settings"
    },

    {
        title: "Logout",
        icon: <LogoutIcon/>,
        link: "/logout"
    },
];