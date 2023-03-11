import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Button, TextField } from "@mui/material";
import './PropertyDescription.css'
import SingleFamilyIcon from "../HouseTypeIcons/SingleFamilyIcon";
import MultiFamilyIcon from "../HouseTypeIcons/MultiFamilyIcon";
import TownhouseIcon from "../HouseTypeIcons/TownhouseIcon";
import ApartmentIcon from "../HouseTypeIcons/ApartmentIcon";
import CondoIcon from "../HouseTypeIcons/CondoIcon";

function PropertyDescriptionForm() {
    const dispatch = useDispatch();
    const PropertyDescription = useSelector((store) => store.propertyReducer)
    const [newHouseType, setNewHouseType] = useState(0)
    const [newPropertyName, setNewPropertyName] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newAddress, setNewAddress] = useState('')
    const [newMaxGuests, setNewMaxGuests] = useState(0)
    const [newBedrooms, setNewBedrooms] = useState(0)
    const [newBeds, setNewBeds] = useState(0)
    const [newBathrooms, setNewBathrooms] = useState(0)
    const [newFeaturePhoto, setNewFeaturePhoto] = useState(0)
    const history = useHistory();

    const toAddressPage = (event) => {
        event.preventDefault();
        history.push('/address')
    }

    function setSingle() {
        console.log('single', 0)
        setNewHouseType(0);
    }

    function setMulti() {
        console.log('multi', 1)
        setNewHouseType(1);
    }

    function setTownhouse() {
        console.log('townhouse', 2)
        setNewHouseType(2);
    }

    function setApartment() {
        console.log('apartment', 3)
        setNewHouseType(3);
    }

    function setCondo() {
        console.log('condo', 4)
        setNewHouseType(4);
    }

    const addToResidence = (event) => {
        event.preventDefault();
        let newProperty={
            houseType: newHouseType,
            propertyName: newPropertyName,
            description: newDescription,
            address: newAddress,
            maxGuests: newMaxGuests,
            bedrooms: newBedrooms,
            beds: newBeds,
            bathrooms: newBathrooms,
            listed: false,
            featurePhoto: newFeaturePhoto
        }
        console.log('this is a new property description', newProperty);
        dispatch({
            type:'CREATE_PROPERTY_DESCRIPTION',
            payload: newProperty
        })
        console.log(newProperty)
        setNewHouseType(0),
        setNewPropertyName(''),
        setNewDescription(''),
        setNewAddress(''),
        setNewMaxGuests(0),
        setNewBedrooms(0),
        setNewBeds(0),
        setNewBathrooms(0),
        setNewFeaturePhoto(0)
    }
    
    return(
        <>
            <form className="describeForm" onSubmit={addToResidence}>
            <h1>Describe</h1>
            <p>Select your property type and write a short description.</p>
            <Grid 
            container spacing={1}
            direction='row' 
            flexWrap='nowrap' 
            justifyContent='space-between'
            marginTop={2}
            marginBottom={2}
            >
                <div className="iconContainer">
                    <Button onClick={setSingle}>
                        <SingleFamilyIcon/>
                    </Button>
                    <p>Single Family</p>
                </div>
                <div className="iconContainer">
                    <Button onClick={setMulti}>
                        <MultiFamilyIcon />
                    </Button>
                    <p>Multi-family</p>
                </div>
                <div className="iconContainer">
                    <Button onClick={setTownhouse}>
                        <TownhouseIcon />
                    </Button>
                    <p>Townhouse</p>
                </div>
                <div className="iconContainer">
                    <Button onClick={setApartment}>
                        <ApartmentIcon />
                    </Button>
                    <p>Apartment</p>
                </div>
                <div className="iconContainer">
                    <Button onClick={setCondo}>
                        <CondoIcon />
                    </Button>
                    <p>Condo</p>
                </div>
            </Grid>
            <h3>Property Name</h3>
            <TextField 
                id="outlined-basic" 
                label="Name" 
                variant="outlined"
                type="text"
                sx={{borderRadius: '10px'}}
                value={newPropertyName}
                onChange= {e=>setNewPropertyName(e.target.value)} 
                />
            <h3>Description</h3>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                sx={{borderRadius: '10px'}}
                type="text"
                value={newDescription}
                onChange= {e=>setNewDescription(e.target.value)}
            />
            <Button onClick={addToResidence} size= "medium" variant="outlined">Next</Button>  
            </form>
        </>
    )

}
export default PropertyDescriptionForm;