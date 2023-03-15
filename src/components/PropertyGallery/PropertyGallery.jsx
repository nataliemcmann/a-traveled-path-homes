import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid } from '@mui/material';
import ResidencesItem from '../ResidencesItem/ResidencesItem';

function PropertyGallery() {
  const history = useHistory();
  const dispatch = useDispatch();
  const residencesReducer = useSelector(store => store.residencesReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_RESIDENCES' });
}, [dispatch]);

  return(
    <div>
    <h1>All Properties</h1>
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
              
              {residencesReducer?.map(residences => (
                <ResidencesItem key={residences.id} residences={residences} />
            ))}
        </Grid>
        </>
        </div>
  )

}

export default PropertyGallery;