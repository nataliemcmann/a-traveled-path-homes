import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import './AmenitiesForm.css'

// -----------------MUI-ICONS-----------------------
import Shower from '../AmenityOptions/Shower';
import Bathtub from '../AmenityOptions/Bathtub';
import Laundry from "../AmenityOptions/Laundry";
import Parking from "../AmenityOptions/Parking";
import Pets from "../AmenityOptions/Pets";

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
  const [status, setStatus]=useState(false);

  function handleShower() {
    setAmenitiesList([...amenitiesList, 1]);
    console.log('added shower');
    setStatus(true);
  }

  function handleBathtub() {
    setAmenitiesList([...amenitiesList, 2]);
    console.log('added bathtub');
    setStatus(true);
  }

  function handleWasher() {
    setAmenitiesList([...amenitiesList, 3]);
    console.log('added washer');
    setStatus(true);
  }


  function handleParking() {
    setAmenitiesList([...amenitiesList, 4]);
    console.log('added parking');
    setStatus(true);
  }

  function handlePets() {
    setAmenitiesList([...amenitiesList, 5]);
    console.log('added pets');
    setStatus(true);
  }

  function handleHeating() {
    setAmenitiesList([...amenitiesList, 6]);
    console.log('added heating');
    setStatus(true);
  }

  function handleFireplace() {
    setAmenitiesList([...amenitiesList, 7]);
    console.log('added fireplace');
    setStatus(true);
  }

  function handleAc() {
    setAmenitiesList([...amenitiesList, 8]);
    console.log('added ac');
    setStatus(true);
  }

  function handleWifi() {
    setAmenitiesList([...amenitiesList, 9]);
    console.log('added wifi');
    setStatus(true);
  }

  function handleTV() {
    setAmenitiesList([...amenitiesList, 10]);
    console.log('added tv');
    setStatus(true);
  }

  function handleElectricCharging() {
    setAmenitiesList([...amenitiesList, 11]);
    console.log('added electric_charging');
    setStatus(true);
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
    dispatch({
      type: 'SET_AMENITIES',
      payload: amenitiesList
  })
    history.push('/photos')
}

  const cancelBtn = () => {
    history.push(`/dashboard`)
}


  return(
      <div>
        <PropertyFormNav className="amenities"/>
          <form onSubmit={addAmenities} className="amenities">
          <div className="ammenitiestext">
            <h1>All Amenities</h1>
            <p>
              Click on an amenity to add it to your property. You'll be able to add more details after you've added your property.
            </p>
          </div>
          <div>
            <h3>Essentials</h3>
            <Grid 
                    container spacing={1}
                    direction='row' 
                    flexWrap='wrap' 
                    justifyContent='flex-start'
                    marginTop={2}
            >
                <div className="amenityContainer">
                  <Button onClick={handleShower}><Shower status={status}/></Button>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleBathtub}><Bathtub status={status}/></Button>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleWasher}><Laundry status={status}/></Button>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleParking}><Parking status={status}/></Button>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handlePets}><Pets status={status}/></Button>
                </div>
            </Grid>
          </div>
          <div>
            <h3>Heating and Cooling</h3>
            <Grid 
                      container spacing={1}
                      direction='row' 
                      flexWrap='wrap' 
                      justifyContent='flex-start'
            > 
                <div className="amenityContainer">
                  <Button onClick={handleHeating}><LocalFireDepartmentIcon/></Button>
                  <p>Heating</p>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleFireplace}><FireplaceIcon/></Button>
                  <p>Fireplace</p>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleAc}><AcUnitIcon/></Button>
                  <p>A/C</p>
                </div>
            </Grid>
          </div>
          <div>
            <h3>Technology</h3>
            <Grid 
                      container spacing={1}
                      direction='row' 
                      flexWrap='wrap' 
                      justifyContent='flex-start'
            > 
                <div className="amenityContainer">
                  <Button onClick={handleElectricCharging}><ElectricCarIcon/></Button>
                  <p>EV Charger</p>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleTV}><MonitorIcon/></Button>
                  <p>TV</p>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleWifi}><WifiIcon/></Button>
                  <p>WI-FI</p>
                </div>
            </Grid>
          </div>
          </form>
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
      </div>
  )

}
export default PropertyAmenitiesForm;