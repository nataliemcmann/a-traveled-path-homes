import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
//mui components
import { Stack, Grid, Card, CardHeader, CardContent } from '@mui/material'; 
import EditIcon from '@mui/icons-material/Edit';

function ProfilePage () {

    const dispatch = useDispatch();

    const profileReducer = useSelector(store => store.profileReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_PROFILE' });
    }, []);

    return (
        <>
        <Stack
        direction="column"
        margin={4}
        spacing={4}
        justifyContent="center"
        >
            <h1>Welcome, {profileReducer.profile.firstName}</h1>
            <h2>Personal Information</h2>
            <Grid
            container direction="row"
            margin={2}
            spacing={4}
            justifyContent="left"
            >
                <Card sx={{ width: 1/4 }}>
                    <CardHeader title="Full Name"/>
                    <CardContent>
                        <p>
                            {profileReducer.profile.firstName} {profileReducer.profile.lastName} 
                        </p>
                        <EditIcon />
                    </CardContent>
                </Card>
                <Card sx={{ width: 1/4 }}>
                    <CardHeader title="Profession/Expertise"/>
                    <CardContent>
                        <p>
                            {profileReducer.profile.profession}
                        </p>
                        <EditIcon />
                    </CardContent>
                </Card>
                <Card sx={{ width: 1/4 }}>
                    <CardHeader 
                        title="Date of Birth"
                        subheader="This information will not be shared with other users."/>
                    <CardContent>
                        <p>
                            {profileReducer.profile.stringDob}
                        </p>
                        <EditIcon />
                    </CardContent>
                </Card>
            </Grid>
            <LogOutButton className="btn" />
        </Stack>

        </>
    )
}

export default ProfilePage;