import React from "react";
import './Review.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Card } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import propertyReducer from "../../redux/reducers/residence.reducer";
import residenceSaga from "../../redux/sagas/residence.saga";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";

function PropertyReview (){
    const history = useHistory()
    const dispatch = useDispatch();
    const propertyReducer = useSelector((store) => store.propertyReducer);
   
    

    const handleSubmit = (event) => {
        event.preventDefault();
    history.push('/ownerdashboard')
}



    return (
    <>
    <PropertyFormNav className="review"/>
    <Card sx={{textAlign: "center",
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 10,
                fontSize: 20,
                padding: 5,
                wordSpacing: 2}}>
        <h2> Review</h2>
        <p> Dust the shelves and clean the windows. Does everthing look like it should? <br>
        </br>This is what renters will see when looking at ypur property page. </p>
       
        <Box sx={{ width: '100%' }}>
           {/* {residenceSaga.map(( id))} */}
           <div> 
         
                <h2> Price: $3,000</h2>
           </div>
    </Box>
    </Card>
    <Button onClick={handleSubmit} type="submit"
                        size='large'
                        sx={{
                            backgroundColor: '#CE8077',
                            color: '#f8f8f8',
                            marginLeft: 140
                        }}> Submit </Button> 
    </>
    )
}

export default PropertyReview;