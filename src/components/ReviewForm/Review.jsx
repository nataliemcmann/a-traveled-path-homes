import React from "react";
import './Review.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


function ReviewPage (){

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
    <>
    <div id="SquareinMiddle">
        <h2> Review</h2>
            <p> Dust the shelves and clean the windows. Does everthing look like it should? This is what renters will see when looking at ypur property page. </p>
        </div>
        <Box sx={{ width: '100%' }}>
      
    </Box>
    </>
    )
}

export default ReviewPage;