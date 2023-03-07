import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
// ----------------MUI-------------------
import { Card, Icon } from '@mui/material';
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


function LandingPage() {
  const [heading, setHeading] = useState('A Traveled Path Homes');
  const history = useHistory();

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
    <div className="container">
      <Card sx={{
        padding: 2,
        paddingLeft: 2,
        paddingRight: 2,
        fontSize: 30,
        marginLeft: 40,
        marginRight: 50,
          height: 38,
          width: 600
      }}>
      <Button sx={{color: '#121957'}}className="btn btn_sizeSm" >
              Where to?
      </Button>
      <Button sx={{color: '#121957'}}className="btn btn_sizeSm" >
              Check In - Check Out
      </Button>
      <Button sx={{color: '#121957'}}className="btn btn_sizeSm" >
              How many Travelers?
      </Button>
      <Button sx={{color: '#121957'}}className="btn btn_sizeSm" >
              Filters
      </Button>
      <SearchIcon></SearchIcon>
      </Card>
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
                boxShadow: "none"
              }}>
      <h1>{heading}</h1>
      <h2>A Space For You!</h2>
      </Card> 
      <Card sx={{
              width: 300,
                height: 200,
                color: '#121957',
                border: "none", 
                boxShadow: "none"
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
                        backgroundColor: '#CE8077'}}
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
