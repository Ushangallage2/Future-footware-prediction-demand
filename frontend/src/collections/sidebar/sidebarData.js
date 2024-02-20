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
        title: "Manage Users",
        // create user account 
        // delete user account
        // icon: <HomeIcon/>,
        link: "/useraccount"
    },
    {
        title: "Predict Demand",
        // view previous sales
        // icon: <OnlinePredictionIcon/>,
        link: '/demandPrediction',
    },
    {
        title: "View Reports",
        // icon: <RollerSkatingIcon/>,
        link: "/nothing"

    },
    {

        title: "Generate New Model",
        // view previous generated model
        // icon: <RollerSkatingIcon/>,
        link: "/newmodel"
    },
    {
        title: "Manage Sales Data",
        // add sales data
        // icon: <HomeIcon/>,
        link: "/useraccount"
    },

    // {

    //     title: "New Models",
    //     // icon: <RollerSkatingIcon/>,
    //     link: "/newModel"
    // },

    // {
    //     title: "Update Database",
    //     icon: <StorageIcon/>,
    //     link: "/updateDatabase"
    // },

    {
        title: "Settings",
        //edit profile
        //change password
        // icon: <SettingsIcon/>,
        link: "/settings"
    },

    {
        title: "Logout",
        // icon: <LogoutIcon/>,
        link: "/"
    },
];