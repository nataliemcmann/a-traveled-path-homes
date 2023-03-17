import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid } from '@mui/material';
import ResidencesItem from '../ResidencesItem/ResidencesItem';
import './OwnerDashboard.css';

function OwnerDashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const residencesReducer = useSelector(store => store.residencesReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER_RESIDENCES' });
}, [dispatch]);

  const handleClick = () => {
    history.push('/describe');
  };



    return(
<div className="dashboard">
      <h2>Owner Dashboard</h2>
      <>
      <Grid sx={{ 
            display: 'grid',
            gap: 3,
            gridTemplateColumns: 'repeat(4, 2fr)',
            padding: 1,
            elevation: 8,
            marginLeft: 6,
            marginRight: 6
            }}>
      <Card className='addproperty'
      sx={{
            borderRadius: 4,
            boxShadow: 2,
            elevation: 1,
            backgroundColor: '#DFDFDF',
            color: '#020052',
            textAlign: 'center',
            height: 320,
            width: 260         
            
            }} onClick={handleClick}><h2>Add Property</h2><img
            className="icon"
            
            alt="multi-family home icon"
            src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/MultiFamily.png"
            /></Card>
              
              {residencesReducer?.map(residences => (
                <ResidencesItem key={residences.id} residences={residences} />
            ))}
        </Grid>
        </>
        </div>
            
            
    )
}

export default OwnerDashboard;