import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';

function ResidencesItem({residences}) {
  const history = useHistory();

  const showResidencesDetails = () => {
    history.push(`/residences/${residences.id}`);
}

  return(
    <Card onClick={showResidencesDetails}
    sx={{
      
      lineHeight: .5,
      width: 240,
      height: 320,
      padding: 1.5,
      borderRadius: 4
  }}>
    <img src={residences.featurePhoto}/>
    <Card sx={{textAlign: 'center',
      fontSize: 16,
      backgroundColor: '#FFFFFF',
      color: '#410064',
      marginTop: 2,
      border: "none", 
                boxShadow: "none",
      }}>
      <h3>{residences.propertyName}</h3>
      <h4>Monthly Price: {residences.priceMonthly}</h4>
      </Card>
  </Card>
  )
}

export default ResidencesItem;