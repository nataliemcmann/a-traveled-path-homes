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
      textAlign: 'left',
      fontSize: 22,
      backgroundColor: '#FFFFFF',
      color: '#410064',
      lineHeight: 1,
      width: 260,
      height: 280,
      padding: 2,
      lineHeight: 1,
      textAlign: 'center',
      borderRadius: 4
  }}>
    <img src={residences.featurePhoto}/>
      {residences.propertyName}
      
  </Card>
  )
}

export default ResidencesItem;