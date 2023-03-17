import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../LandingPage/LandingPage.css';
import { Card, Grid } from '@mui/material';
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Travelers from '../SearchBar/Travelers';
import WhereTo from '../SearchBar/WhereTo';
import CheckInCheckOut from '../SearchBar/CheckInCheckOut';


function SearchBar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [datesPopup, setDatesPopup] = useState(false);
    const [travelersPopup, setTravelersPopup] = useState(false);
    const [locationPopup, setLocationPopup] = useState(false);
    const bookingReducer = useSelector((store) => store.bookingReducer);

    const seeSearchResults = (event) => {
        dispatch({type: 'FETCH_SEARCH_RESIDENCES', payload: bookingReducer.travelers});
        history.push('/propertygallery');
    }
    
    return(
        <>
            <Card sx={{
            padding: 2,
            paddingLeft: 2,
            paddingRight: 2,
            fontSize: 30,
            marginLeft: 40,
            marginRight: 50,
            height: 38,
            width: 900
            }}>
                <Grid 
                display='flex'
                justifyContent='space-around'
                >
                    <Button sx={{color: '#121957'}} 
                    onClick={() => setLocationPopup(true)}className="btn btn_sizeSm" >
                            {bookingReducer.hospital}
                    </Button>
                    <Button sx={{color: '#121957'}} onClick={() => setDatesPopup(true)} className="btn btn_sizeSm" >
                            Check In - Check Out
                    </Button>
                    <Button sx={{color: '#121957'}} onClick={() => setTravelersPopup(true)} className="btn btn_sizeSm" >
                            How many Travelers?
                    </Button>
                    <Button sx={{color: '#121957'}} onClick={() => setButtonPopup(true)} className="btn btn_sizeSm" >
                            Filters
                    </Button>
                <SearchIcon onClick={seeSearchResults}></SearchIcon>
                </Grid>
            </Card>
        <CheckInCheckOut trigger={datesPopup} setTrigger={setDatesPopup}/>
        <Travelers trigger={travelersPopup} setTrigger={setTravelersPopup}/>
        <WhereTo trigger={locationPopup} setTrigger={setLocationPopup}/>

        </>
    )
}

export default SearchBar;