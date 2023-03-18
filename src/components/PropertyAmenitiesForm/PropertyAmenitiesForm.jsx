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
import Heating from "../AmenityOptions/Heating";
import Fireplace from "../AmenityOptions/Fireplace";
import AC from '../AmenityOptions/AC';
import Wifi from "../AmenityOptions/Wifi";
import TV from '../AmenityOptions/TV';
// import EV from '../AmenityOptions/EV';

import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";

function PropertyAmenitiesForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const propertyReducer = useSelector((store) => store.propertyReducer);

  const [amenitiesList, setAmenitiesList] = useState([]);
  const [statusShower, setShower]=useState(false);
  const [statusBath, setBath]=useState(false);
  const [statusLaundry, setLaundry] =useState(false);
  const [statusParking, setParking]=useState(false);
  const [statusPets, setPets]=useState(false);
  const [statusHeat, setHeat]=useState(false);
  const [statusFire, setFire]=useState(false);
  const [statusAC, setAC]=useState(false);
  const [statusWifi, setWifi]=useState(false);
  const [statusTV, setTV]=useState(false);
  // const [statusEV, setEV]=useState(false);


  function handleShower() {
    setAmenitiesList([...amenitiesList, 1]);
    console.log('added shower');
    setShower(true);
  }

  function handleBathtub() {
    setAmenitiesList([...amenitiesList, 2]);
    console.log('added bathtub');
    setBath(true);
  }

  function handleWasher() {
    setAmenitiesList([...amenitiesList, 3]);
    console.log('added washer');
    setLaundry(true);
  }


  function handleParking() {
    setAmenitiesList([...amenitiesList, 4]);
    console.log('added parking');
    setParking(true);
  }

  function handlePets() {
    setAmenitiesList([...amenitiesList, 5]);
    console.log('added pets');
    setPets(true);
  }

  function handleHeating() {
    setAmenitiesList([...amenitiesList, 6]);
    console.log('added heating');
    setHeat(true);
  }

  function handleFireplace() {
    setAmenitiesList([...amenitiesList, 7]);
    console.log('added fireplace');
    setFire(true);
  }

  function handleAc() {
    setAmenitiesList([...amenitiesList, 8]);
    console.log('added ac');
    setAC(true);
  }

  function handleWifi() {
    setAmenitiesList([...amenitiesList, 9]);
    console.log('added wifi');
    setWifi(true);
  }

  function handleTV() {
    setAmenitiesList([...amenitiesList, 10]);
    console.log('added tv');
    setTV(true);
  }

  // function handleElectricCharging() {
  //   setAmenitiesList([...amenitiesList, 11]);
  //   console.log('added electric_charging');
  //   setEV(true);
  // }


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

  const backBtn = () => {
    history.push(`/basics`)
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
                  <Button onClick={handleShower}><Shower status={statusShower}/></Button>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleBathtub}><Bathtub status={statusBath}/></Button>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleWasher}><Laundry status={statusLaundry}/></Button>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleParking}><Parking status={statusParking}/></Button>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handlePets}><Pets status={statusPets}/></Button>
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
                  <Button onClick={handleHeating}><Heating status={statusHeat}/></Button>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleFireplace}><Fireplace status={statusFire}/></Button>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleAc}><AC status={statusAC}/></Button>
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
                {/* <div className="amenityContainer">
                  <Button onClick={handleElectricCharging}><EV status={statusEV}/></Button>
                </div> */}
                <div className="amenityContainer">
                  <Button onClick={handleTV}><TV status={statusTV}/></Button>
                </div>
                <div className="amenityContainer">
                  <Button onClick={handleWifi}><Wifi status={statusWifi}/></Button>
                </div>
            </Grid>
          </div>
          </form>
          <div className="btnContainer">
            <div className="cancelBtn">
                <Button onClick={backBtn}
                    size= "large"
                    sx={{
                        backgroundColor: '#CE8077',
                        color: '#f8f8f8',
                        margin: '2%',
                        paddingTop: '16px', paddingBottom: '16px',
                        paddingRight: '32px', paddingLeft: '32px'
                    }}
                    >
                        Back
                  </Button> 
              </div>
              
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
              
          </div> 
      </div>
  )

}
export default PropertyAmenitiesForm;