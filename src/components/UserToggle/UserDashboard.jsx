import React, { useEffect, useState } from "react";
import '../RenterGallery/RenterDashboard'
import '../OwnerDashboard/OwnerDashboard'

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import OwnerDashboard from "../OwnerDashboard/OwnerDashboard";
import RenterDashboard from "../RenterGallery/RenterDashboard";
import UserToggle from "./UserToggle";


function UserDashboard () {
    const profileReducer= useSelector (store => store.profileReducer);
    const dispatch = useDispatch() 
  

    useEffect(() => {
        dispatch({ type: 'FETCH_PROFILE_TO_EDIT' });
    }, []);

    return (profileReducer.profileEdit.viewAsRenter) ? (

        <>  
            <UserToggle currentView={profileReducer.profileEdit.viewAsRenter}/>
            <RenterDashboard/>
                
        </>
    )
    :   
    (
        <>
        <UserToggle currentView={profileReducer.profileEdit.viewAsRenter}/>
        <OwnerDashboard/>
        </>
        
    )
}   

export default UserDashboard; 