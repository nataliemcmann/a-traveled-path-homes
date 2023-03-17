import React from 'react';
import { Grid, Switch } from '@mui/material';
import { useDispatch } from 'react-redux';


function ListedToggle({ status, id }){
    const dispatch = useDispatch();

    function changeListing (event) {
            event.preventDefault();
            let listingStatus = !status
            console.log(listingStatus);
            dispatch ({
            type: 'CHANGE_LISTED',
            payload: {
                listingStatus: listingStatus, 
                residenceId: id
            }
        })
    }

    return (status) ? (
        <>
        <Grid
        container spacing = {2}
        direction = 'row'
        marginLeft={4}
        padding={2}
        >
            <p>Unlisted</p>
            <Switch defaultChecked onChange={changeListing}/>
            <p>Listed</p>
        </Grid>
        </>
    ) : (
        <>
            <Grid
            container spacing = {2}
            direction = 'row'
            marginLeft={4}
            padding={2}
            >
                <p>Unlisted</p>
                <Switch onChange={changeListing}/>
                <p>Listed</p>
            </Grid>
        </>
    )
}

export default ListedToggle;
