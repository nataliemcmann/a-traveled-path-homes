import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid } from '@mui/material';
import ResidencesItem from '../ResidencesItem/ResidencesItem';
import SearchBar from '../SearchBar/SearchBar';

function PropertyGallery() {
  const history = useHistory();
  const dispatch = useDispatch();
  const residencesReducer = useSelector(store => store.residencesReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_RESIDENCES' });
}, [dispatch]);

  return(
    <div>
      <Card sx={{
                            textAlign: 'center',
                            fontSize: 52,
                            fontWeight: 500,
                            color: '#CE8077',
                            lineHeight: 1,
                            width: 380,
                            lineHeight: 1,
                            marginLeft: 61,
                            marginBottom: 6,
                            borderRadius: 4,
                            padding: 1,
                            border: "none", 
                boxShadow: "none",
                        }}>
              All Properties
    </Card>
    <SearchBar />
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