import React, { useState } from 'react';
import { Card, Icon } from '@mui/material';
import BungalowIcon from '@mui/icons-material/Bungalow';
import './OwnerDashboard.css';

function OwnerDashboard() {

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
            width: 200,
            lineHeight: 1,
            textAlign: 'left',
            fontSize: 26,
            }} onClick={handleClick}><Icon 
                  sx={{
                    width: 50,
                    height: 50
                  }}><BungalowIcon/></Icon></Card>
            </div>
            </div>
    )
}

export default OwnerDashboard;