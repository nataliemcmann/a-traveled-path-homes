import React from "react";
import './Review.css'
import Box from '@mui/material/Box';
import { Stack, Grid, Card, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
    <Stack>
        <div>
            <h1> Review</h1>
            <p> Dust the shelves and clean the windows. Does everthing look like it should? </p>
            <p> This is what renters will see when looking at ypur property page. </p>
        </div> 
    </Stack>
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