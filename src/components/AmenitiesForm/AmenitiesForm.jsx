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
  const PropertyDescription = useSelector((store) => store.propertyReducer)
  
  const [newPropertyName, setNewPropertyName] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const history = useHistory();


  const addToResidence = (event) => {
      event.preventDefault();
      // let newProperty={
      //     // houseType: newHouseType,
      //     propertyName: newPropertyName,
      //     description: newDescription
      // }
      // console.log('this is a new property description', newProperty);
      // dispatch({
      //     type:'SET_PROPERTY_DESCRIPTION',
      //     payload: newProperty
      // })


      event.preventDefault();
      history.push('/photos')
    
  }
  
  return(
      <div className="amenities">
          <form onSubmit={addToResidence}>
          <h1>All Amenities</h1>
          <div className="ammenitiestext">
          <h5>Click on an amenity to add it to your property. <br></br> 
            You'll be able to add more details after you've added your property.</h5>
            </div>
          <h3>Essentials</h3>
          <Button><ShowerIcon/></Button>
          <Button><BathtubIcon/></Button>
          <Button><LocalLaundryServiceIcon/></Button>
          <Button><DirectionsCarIcon/></Button>
          <Button><PetsIcon/></Button>
          <div></div>
          <h3>Heating and Cooling</h3>
          <Button><LocalFireDepartmentIcon/></Button>
          <Button><FireplaceIcon/></Button>
          <Button><AcUnitIcon/></Button>
          <div></div>
          <h3>Technology</h3>
          <Button><ElectricCarIcon/></Button>
          <Button><MonitorIcon/></Button>
          <Button><WifiIcon/></Button>
          <div><br></br></div>
          <Button onClick={addToResidence} size= "medium" variant="outlined">Next</Button>  
          </form>
      </div>
  )

}
export default AmenitiesForm;