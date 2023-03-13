import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";

import "./BasicsPage.css";
//mui components
import { Stack, TextField, Button} from '@mui/material';

function PropertyBasicsForm() {
  //declare dispatch
  const dispatch = useDispatch();
  const history = useHistory();

  const propertyReducer = useSelector((store) => store.propertyReducer);
  
  function handleBasicsSubmit() {
    event.preventDefault();
    console.log('dispatch basics count');
    dispatch({
      type: 'SET_MAX_GUESTS',
      payload: propertyReducer.guests
    })
    dispatch({
      type: 'SET_BEDS',
      payload: propertyReducer.beds
    })
    dispatch({
      type: 'SET_BEDROOMS',
      payload: propertyReducer.bedrooms
    })
    dispatch({
      type: 'SET_BATHROOMS',
      payload: propertyReducer.bathrooms
    })
    history.push('/amenities');
  }

  const nextBtn = () => {
    history.push(`/amenities`)
}

  const cancelBtn = () => {
    history.push(`/ownerdashboard`)
}


  return (
    <>
      <PropertyFormNav className="basics"/>
      <Stack>
        <form className="basicForm" onSubmit={handleBasicsSubmit}>
          <h1> Basics </h1>
            <p> Fill in the basics </p>
              <h2> Guests</h2>
              <label htmlFor="guest count">
                <TextField
                  type="number"
                  value={propertyReducer.guests}
                  InputProps={{ inputProps: { min: 0 } }}
                  required
                  onChange={(event) => {
                    dispatch({type: 'SET_GUEST_INPUT', payload: event.target.value})
                  }}
                />
              </label>
              
              

              <h2> Beds </h2>
              <label htmlFor="bed count">
                <TextField
                  type="number"
                  value={propertyReducer.beds}
                  InputProps={{ inputProps: { min: 0 } }}
                  required
                  onChange={(event) => {
                    dispatch({type: 'SET_BED_INPUT', payload: event.target.value})
                  }}
                />
              </label>
              


              <h2> Bedrooms </h2>
              <label htmlFor="bed count">
                <TextField
                  type="number"
                  value={propertyReducer.bedrooms}
                  InputProps={{ inputProps: { min: 0 } }}
                  required
                  onChange={(event) => {
                    dispatch({type: 'SET_BED_INPUT', payload: event.target.value})
                  }}
                />
              </label>

              <h2> Bathrooms </h2>
              <label htmlFor="bed count">
                <TextField
                  type="number"
                  value={propertyReducer.bathrooms}
                  InputProps={{ inputProps: { min: 0 } }}
                  required
                  onChange={(event) => {
                    dispatch({type: 'SET_BED_INPUT', payload: event.target.value})
                  }}
                />
              </label>

              <div className="cancelBtn"></div>
                <Button onClick={cancelBtn}
                    type="submit" 
                    size= "large"
                    sx={{
                        backgroundColor: '#CE8077',
                        color: '#f8f8f8',
                        margin: '2%',
                        paddingTop: '16px', paddingBottom: '16px',
                        paddingRight: '32px', paddingLeft: '32px'
                    }}
                    >
                        Cancel
                    </Button> 

              <div className="nextBtn">
                <Button onClick={nextBtn}
                    type="submit" 
                    size= "large"
                    sx={{
                        backgroundColor: '#CE8077',
                        color: '#f8f8f8',
                        margin: '2%',
                        paddingTop: '16px', paddingBottom: '16px',
                        paddingRight: '32px', paddingLeft: '32px'
                    }}
                    >
                        Next
                  </Button>  
              </div>
              </form>
      </Stack> 
    </>
  );
}
export default PropertyBasicsForm;
