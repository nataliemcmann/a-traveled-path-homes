import React from 'react';
import Card from '@mui/material/Card';

function PropertyItem({property}) {

  return(
    <Card sx={{
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