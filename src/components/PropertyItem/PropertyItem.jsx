import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';

function PropertyItem({property}) {
  const history = useHistory();

  const showPropertyDetails = () => {
    history.push(`/property/${property.id}`);
}

  return(
    <Card onClick={showPropertyDetails}
    sx={{
      textAlign: 'left',
      fontSize: 22,
      backgroundColor: '#FFFFFF',
      color: '#410064',
      lineHeight: 1,
      fontFamily: 'Rugrats Sans',
      padding: 2,
      lineHeight: 1,
      textAlign: 'center',
      borderRadius: 4
  }}>
      {property.propertyName}
      
  </Card>
  )
}

export default PropertyItem;