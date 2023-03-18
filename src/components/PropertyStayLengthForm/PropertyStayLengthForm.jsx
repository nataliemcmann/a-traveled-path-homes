import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './LengthofStay.css'
import { Stack, Grid, Button, TextField } from "@mui/material";
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";

function PropertyStayLengthForm () {
    const dispatch = useDispatch();
    const history = useHistory();

    const propertyReducer = useSelector((store) => store.propertyReducer);

      const nextBtn = () => {
        history.push(`/price`)
    }

      const backBtn = () => {
        history.push(`/photos`)
    }

    return (
    <>
      <PropertyFormNav className="stayLength"/>
      <div className="sLForm">
        <Stack>
          <div className="sLHeader">
              <h1> Minimum Stay of Length</h1>
              <p> Why a minimum stay length? Traveling professionals need at least 1 month availability for their temporary housing (and often longer). A Traveled Path Homes directly serves these rent seekers, so we include a mininmum stay length for all properties to meet renter needs.</p>
          </div>
          <div className="sLBorder">
            <Grid
              container spacing={1} 
              direction='column' 
              justifyContent='center'
              alignContent='center'
              alignItems='center'
              marginTop={4}
            >
              <label htmlFor="mininum stay length">
                    <TextField
                      type="number"
                      sx={{border: 'none',"& fieldset": { border: 'none' }}}
                      value={propertyReducer.stayLength}
                      InputProps={{ inputProps: { 
                        min: 0, 
                        style: { 
                          textAlign: 'right', width: '35px', 
                          fontSize: '32px'} } }}
                      required
                      onChange={(event) => {
                        dispatch({type: 'SET_STAYLENGTH_INPUT', payload: event.target.value})
                      }}
                    />
                </label>
              <h2> Month </h2>
            </Grid>
          </div>
        </Stack>
      </div>
      <div className="btnContainer">
          <div className="nextBtn">
              <Button 
                  onClick={nextBtn}
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
              <div className="cancelBtn">
                <Button onClick={backBtn}
                  size= "large"
                  sx={{
                      backgroundColor: '#CE8077',
                      color: '#f8f8f8',
                      margin: '2%',
                      paddingTop: '16px', paddingBottom: '16px',
                      paddingRight: '32px', paddingLeft: '32px'
                  }}
                  >
                      Back
                  </Button> 
              </div>
        </div>
    </>
    )
}

export default PropertyStayLengthForm; 
