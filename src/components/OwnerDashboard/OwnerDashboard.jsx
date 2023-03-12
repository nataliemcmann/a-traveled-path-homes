import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Icon, Grid } from '@mui/material';
import BungalowIcon from '@mui/icons-material/Bungalow';
import PropertyItem from '../PropertyItem/PropertyItem';
import './OwnerDashboard.css';

function OwnerDashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const property = useSelector(store => store.property);

  useEffect(() => {
    dispatch({ type: 'FETCH_PROPERTY' });
}, [dispatch]);

  const handleClick = () => {
    history.push('/describe');
  };



    return(
<div className="dashboard">
      <h2>Owner Dashboard</h2>
      <div>
      <Card sx={{
            borderRadius: 4,
            boxShadow: 2,
            elevation: 1,
            backgroundColor: '#D1877F',
            color: '#fff',
            height: 200,
            width: 200         
            
            }} onClick={handleClick}><Icon 
                  ><BungalowIcon fontSize="large"/></Icon></Card>
            </div>
            <Grid sx={{ 
            display: 'grid',
            gap: 3,
            gridTemplateColumns: 'repeat(3, 2fr)',
            padding: 1,
            elevation: 8
            }}>
              {property?.map(property => (
                <PropertyItem key={property.id} property={property} />
            ))}
        </Grid>
            </div>
            
    )
}

export default OwnerDashboard;