import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//mui components
import { Stack, Grid, Card, CardHeader, CardContent } from '@mui/material'; 

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
                    <CardHeader>
                        Name
                    </CardHeader>
                    <CardContent>
                        
                    </CardContent>

                </Card>
            </Grid>
        </Stack>

        </>
    )
}

export default ProfilePage;