import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ProfilePage () {
    const dispatch = useDispatch();

    const profileReducer = useSelector(store => store.profileReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_Profile' });
    }, []);

    return (
        <>
        <h2>This is the profile page</h2>
        </>
    )
}

export default ProfilePage;