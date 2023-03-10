import React from "react";
import './Review.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import propertyReducer from "../../redux/reducers/residence.reducer";
import residenceSaga from "../../redux/sagas/residence.saga";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

function ReviewPage (){
    const history = useHistory()
    const dispatch = useDispatch();
    const propertyReducer = useSelector((store) => store.propertyReducer);
   
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    const handleSubmit = (event) => {
        event.preventDefault();
    history.push('/ownerdashboard')
}



    return (
    <>
    <div id="SquareinMiddle">
        <h2> Review</h2>

            <p> Dust the shelves and clean the windows. Does everthing look like it should? This is what renters will see when looking at ypur property page. </p>
        </div>
        <Box sx={{ width: '100%' }}>
           {/* {residenceSaga.map(( id))} */}
           <div> 
         
                <h2> Price: $3,000</h2>
           </div>
           <Button onClick={handleSubmit}> Submit </Button> 
    </Box>
    </>
    )
}

export default ReviewPage;