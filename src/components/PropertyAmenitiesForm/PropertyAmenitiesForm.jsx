import React, { useState } from "react";
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
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";

function PropertyAmenitiesForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const propertyReducer = useSelector((store) => store.propertyReducer);

  const [amenitiesList, setAmenitiesList] = useState([]);

  function handleShower() {
    setAmenitiesList([...amenitiesList, 1]);
    console.log('added shower');
  }

  function handleBathtub() {
    setAmenitiesList([...amenitiesList, 2]);
    console.log('added bathtub');
  }

  function handleWasher() {
    setAmenitiesList([...amenitiesList, 3]);
    console.log('added washer');
  }


  function handleParking() {
    setAmenitiesList([...amenitiesList, 4]);
    console.log('added parking');
  }

  function handlePets() {
    setAmenitiesList([...amenitiesList, 5]);
    console.log('added pets');
  }

  function handleHeating() {
    setAmenitiesList([...amenitiesList, 6]);
    console.log('added heating');
  }

  function handleFireplace() {
    setAmenitiesList([...amenitiesList, 7]);
    console.log('added fireplace');
  }

  function handleAc() {
    setAmenitiesList([...amenitiesList, 8]);
    console.log('added ac');
  }

  function handleWifi() {
    setAmenitiesList([...amenitiesList, 9]);
    console.log('added wifi');
  }

  function handleTV() {
    setAmenitiesList([...amenitiesList, 10]);
    console.log('added tv');
  }

  function handleElectricCharging() {
    setAmenitiesList([...amenitiesList, 11]);
    console.log('added electric_charging');
  }


  const addAmenities = (event) => {
    event.preventDefault();
    console.log(amenitiesList);
      dispatch({
          type: 'SET_AMENITIES',
          payload: amenitiesList
      })
  };

  const nextBtn = () => {
    history.push('/photos')
}

  const cancelBtn = () => {
    history.push(`/ownerdashboard`)
}


  return(
      <div className="amenities">
        <PropertyFormNav className="amenities"/>
          <form onSubmit={addAmenities}>
          <h1>All Amenities</h1>
          <div className="ammenitiestext">
          <h5>Click on an amenity to add it to your property. <br></br> 
            You'll be able to add more details after you've added your property.</h5>
            </div>
          <h3>Essentials</h3>
          <Button onClick={handleShower}><ShowerIcon/>Shower</Button>
          <Button onClick={handleBathtub}><BathtubIcon/>Bathtub</Button>
          <Button onClick={handleWasher}><LocalLaundryServiceIcon/>Laundry</Button>
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
          <Button onClick={handleTV}><MonitorIcon/>Monitor</Button>
          <Button onClick={handleWifi}><WifiIcon/>WIFI</Button>
          <div><br></br></div>
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
                      <Button onClick={cancelBtn}
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
                    </div>
                </div> 
          </form>
      </div>
  )

}
export default PropertyAmenitiesForm;