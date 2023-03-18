import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import OwnerDashboard from "../OwnerDashboard/OwnerDashboard";
import RenterDashboard from "../RenterDashboard/RenterDashboard";
import UserToggle from "./UserToggle";


function UserDashboard () {
    const profileReducer= useSelector (store => store.profileReducer);
    const dispatch = useDispatch()   

    useEffect(() => {
        dispatch({ type: 'FETCH_PROFILE' });
    }, []);

    return (profileReducer.profile.viewAsRenter) ? (

        <>  
            <UserToggle currentView={profileReducer.profile.viewAsRenter}/>
            <OwnerDashboard/>
        </>
    ) : (
        <>
            <UserToggle currentView={profileReducer.profile.viewAsRenter}/>
            <RenterDashboard/>
        </>
        
    )
}   

export default UserDashboard; 