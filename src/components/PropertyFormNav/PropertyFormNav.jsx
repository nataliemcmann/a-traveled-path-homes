import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './PropertyFormNav.css';
import AddressOption from './NavOptions/AddressOption';
//mui components
import { Grid, Button } from '@mui/material';
import BasicsOption from './NavOptions/BasicsOption';

function PropertyFormNav() {
    const history = useHistory();

    const [allowed, setAllowed] = useState(false);

    function toDescribe() {
        history.push('/describe');
    }

    return (
        <>
            <Grid
            className="formNav"
            container spacing={1}
            direction='row' 
            flexWrap='nowrap'
            justifyContent='space-around' 
            marginTop={4}
            marginBottom={2}
            >
                <div className="indicatorCtnr">
                    <div className="indicator allow">
                        <Button onClick={toDescribe}></Button>
                    </div>
                    <p>Describe</p>
                </div>
                <AddressOption allowed={allowed}/>
                <BasicsOption allowed={allowed}/>
            </Grid>
        </>
    )
}

export default PropertyFormNav;