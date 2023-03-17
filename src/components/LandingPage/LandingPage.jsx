import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import CheckInCheckOut from '../SearchBar/CheckInCheckOut';
// ----------------MUI-------------------
import { Card, Grid } from '@mui/material';
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Travelers from '../SearchBar/Travelers';
import WhereTo from '../SearchBar/WhereTo';


function LandingPage() {
  const [heading, setHeading] = useState('A Traveled Path Homes');
  const history = useHistory();
  const [datesPopup, setDatesPopup] = useState(false);
  const [travelersPopup, setTravelersPopup] = useState(false);
  const [wherePopup, setWherePopup] = useState(false);
  const [locationPopup, setLocationPopup] = useState(false);


  const bookingReducer = useSelector((store) => store.bookingReducer);

  const onLogin = (event) => {
    history.push('/login');
  };

  const onRegister = (event) => {
    history.push('/registration');
  };

  const onProperties = (event) => {
    history.push('/propertygallery');
  };

  // ---------------------DIALOG-MUI-----------------------------------

  return (
    <div className="containers">
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
          <SearchIcon></SearchIcon>
        </Grid>
      </Card>
      <CheckInCheckOut trigger={datesPopup} setTrigger={setDatesPopup}/>
      <Travelers trigger={travelersPopup} setTrigger={setTravelersPopup}/>
      <WhereTo trigger={locationPopup} setTrigger={setLocationPopup}/>

      <br></br>
      <Card sx={{
        padding: 4,
        marginRight: 120,
        boxShadow: -3,
        border: "none", 
        boxShadow: "none"
      }}>
      <Card sx={{
              width: 300,
                height: 200,
                color: '#121957',
                border: "none", 
                boxShadow: "none",
                textAlign: 'center',
                marginLeft: 10,
                fontSize: 22
              }}>
      <h1>{heading}</h1>
      <h2>A Space For You!</h2>
      
      </Card> 
      <br></br>
      <br></br>
      <Card sx={{
              width: 330,
                height: 200,
                color: '#121957',
                border: "none", 
                boxShadow: "none",
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 300,
                marginLeft: 10
              }}>
        We take care of you so you can take care of us. 
        At A Traveled Path Homes we want you to take a load off, 
        so we offer exclusive housing to traveling medical professionals and educators.
        </Card>
        </Card>
      <div className="grid">
        <div className="grid-col grid-col_8">
          <img src='images/renter.png' className='renter'></img>
          <img src='images/kitchen.png' className='kitchen'></img>
          <img src='images/livingroom.png' className='livingroom'></img>
        <div className="viewprop">
          <Button sx={{color: '#ffffff',
                        backgroundColor: '#CE8077',
                      marginLeft: 24,
                    marginTop: 10}}
            onClick={onProperties}>View Properties</Button>
          </div>
        </div>
        <div className="grid-col grid-col_4">
          <center className='buttons'>
          <Button sx={{color: '#121957'}}className="btn btn_sizeSm" onClick={onRegister}>
              Register
            </Button>
            <Button sx={{color: '#121957'}}className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
