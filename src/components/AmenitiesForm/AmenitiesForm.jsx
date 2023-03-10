import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import './AmenitiesForm.css'

// -----------------MUI-ICONS-----------------------
import ShowerIcon from '@mui/icons-material/Shower';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PetsIcon from '@mui/icons-material/Pets';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WifiIcon from '@mui/icons-material/Wifi';
import MonitorIcon from '@mui/icons-material/Monitor';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';

function AmenitiesForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  

  const amenitiesList = [];

  function handleShower() {
    amenitiesList.push({amenity_id});
    console.log('added shower');
  }

  function handleBathtub() {
    amenitiesList.push('bathtub');
    console.log('added bathtub');
  }

  function handleWasher() {
    amenitiesList.push('washer');
    console.log('added washer');
  }

  function handleDryer() {
    amenitiesList.push('dryer');
    console.log('added dryer');
  }

  function handleParking() {
    amenitiesList.push('parking');
    console.log('added parking');
  }

  function handlePets() {
    amenitiesList.push('pets');
    console.log('added pets');
  }

  function handleHeating() {
    amenitiesList.push('heating');
    console.log('added heating');
  }

  function handleFireplace() {
    amenitiesList.push('fireplace');
    console.log('added fireplace');
  }

  function handleAc() {
    amenitiesList.push('ac');
    console.log('added ac');
  }

  function handleWifi() {
    amenitiesList.push('wifi');
    console.log('added wifi');
  }

  function handleMonitor() {
    amenitiesList.push('monitor');
    console.log('added monitor');
  }

  function handleElectricCharging() {
    amenitiesList.push('electric_charging');
    console.log('added electric_charging');
  }


  const addToResidence = (event) => {
      const amenitiesArray = [...event.target.amenitiesList];
      dispatch({
          type: 'SET_AMENITIES',
          payload: amenitiesArray
      })
      history.push('/propertyPhotoForm')
  };



  return(
      <div className="amenities">
          <form onSubmit={addToResidence}>
          <h1>All Amenities</h1>
          <div className="ammenitiestext">
          <h5>Click on an amenity to add it to your property. <br></br> 
            You'll be able to add more details after you've added your property.</h5>
            </div>
          <h3>Essentials</h3>
          <Button onClick={handleShower}><ShowerIcon/>Shower</Button>
          <Button onClick={handleBathtub}><BathtubIcon/>Bathtub</Button>
          <Button onClick={handleWasher}><LocalLaundryServiceIcon/>Washer</Button>
          <Button onClick={handleDryer}><LocalLaundryServiceIcon/>Dryer</Button>
          <Button onClick={handleParking}><DirectionsCarIcon/>Parking</Button>
          <Button onClick={handlePets}><PetsIcon/>Pets</Button>
          <div></div>
          <h3>Heating and Cooling</h3>
          <Button onClick={handleHeating}><LocalFireDepartmentIcon/>Heating</Button>
          <Button onClick={handleFireplace}>Fireplace<FireplaceIcon/></Button>
          <Button onClick={handleAc}><AcUnitIcon/>AC</Button>
          <div></div>
          <h3>Technology</h3>
          <Button onClick={handleElectricCharging}><ElectricCarIcon/>Electric Charging</Button>
          <Button onClick={handleMonitor}><MonitorIcon/>Monitor</Button>
          <Button onClick={handleWifi}><WifiIcon/>WIFI</Button>
          <div><br></br></div>
          <Button onClick={addToResidence} size= "medium" variant="outlined">Next</Button>  
          </form>
      </div>
  )

}
export default AmenitiesForm;