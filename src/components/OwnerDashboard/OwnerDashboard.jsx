import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid } from '@mui/material';
import PropertyItem from '../PropertyItem/PropertyItem';
import './OwnerDashboard.css';

function OwnerDashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const propertyGalleryReducer = useSelector(store => store.propertyGalleryReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_PROPERTY' });
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
            gridTemplateColumns: 'repeat(3, 2fr)',
            padding: 1,
            elevation: 8
            }}>
      <Card className='addproperty'
      sx={{
            borderRadius: 4,
            boxShadow: 2,
            elevation: 1,
            backgroundColor: '#DFDFDF',
            color: '#fff',
            height: 200,
            width: 200         
            
            }} onClick={handleClick}><img
            className="icon"
            alt="single family home icon" 
            width= "44.8px"
            height= "38px"
            src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/SingleFamily.png"
            /></Card>
              
              {propertyGalleryReducer?.map(property => (
                <PropertyItem key={property.id} property={property} />
            ))}
        </Grid>
        </>
        </div>
            
            
    )
}

export default OwnerDashboard;