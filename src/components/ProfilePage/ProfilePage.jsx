import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import date-fns
import { toDate } from 'date-fns'
//mui components
import { Stack, Grid, Card, CardHeader, CardContent, CardActions } from '@mui/material'; 
import EditIcon from '@mui/icons-material/Edit';

function ProfilePage () {
    const dispatch = useDispatch();

    const profileReducer = useSelector(store => store.profileReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_PROFILE' });
    }, []);

    return (
        <>
        <Stack>
            <h2>Welcome, {profileReducer.profile.firstName}</h2>
            <Grid>
                <h3>Personal Information</h3>
                <Card>
                    <CardHeader title="Full Name"/>
                    <CardContent>
                        <p>
                            {profileReducer.profile.firstName} {profileReducer.profile.lastName} 
                        </p>
                    </CardContent>
                    <CardActions>
                        <EditIcon />
                    </CardActions>
                </Card>
                <Card>
                    <CardHeader title="Profession/Expertise"/>
                    <CardContent>
                        <p>
                            {profileReducer.profile.profession}
                        </p>
                    </CardContent>
                    <CardActions>
                        <EditIcon />
                    </CardActions>
                </Card>
                <Card>
                    <CardHeader title="Date of Birth"/>
                    <CardContent>
                        <p>
                            {profileReducer.profile.stringDob}
                        </p>
                    </CardContent>
                    <CardActions>
                        <EditIcon />
                    </CardActions>
                </Card>
            </Grid>
        </Stack>

        </>
    )
}

export default ProfilePage;