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
    //declare dispath
    const dispatch = useDispatch();

    //declare history
    const history = useHistory();

    //useState
    const [newHouseType, setNewHouseType] = useState(0)
    const [newPropertyName, setNewPropertyName] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newAddress, setNewAddress] = useState('')
    const [newMaxGuests, setNewMaxGuests] = useState(0)
    const [newBedrooms, setNewBedrooms] = useState(0)
    const [newBeds, setNewBeds] = useState(0)
    const [newBathrooms, setNewBathrooms] = useState(0)
    const [newFeaturePhoto, setNewFeaturePhoto] = useState(0)

    //functions to choose house type
    //single
    function setSingle() {
        console.log('single', 0)
        setNewHouseType(0);
    }
    //multi
    function setMulti() {
        console.log('multi', 1)
        setNewHouseType(1);
    }
    //townhouse
    function setTownhouse() {
        console.log('townhouse', 2)
        setNewHouseType(2);
    }
    //apartment
    function setApartment() {
        console.log('apartment', 3)
        setNewHouseType(3);
    }
    //condo
    function setCondo() {
        console.log('condo', 4)
        setNewHouseType(4);
    }

    //function to post and move on to address
    const addToResidence = (event) => {
        event.preventDefault();
        let newResidence={
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
        console.log('this is a new residence', newResidence);
        dispatch({
            type:'CREATE_RESIDENCE',
            payload: newResidence
        })
        //clear inputs
        setNewHouseType(0),
        setNewPropertyName(''),
        setNewDescription(''),
        setNewAddress(''),
        setNewMaxGuests(0),
        setNewBedrooms(0),
        setNewBeds(0),
        setNewBathrooms(0),
        setNewFeaturePhoto(0)
        history.push('/address')
    }
    
    return(
        <>
            <form onSubmit={addToResidence}>
                <div className="describeForm">
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
                        placeholder="Include facts about the neighborhood, 
                        general information about amenities, and details about the property that make it a home away from home."
                        rows={4}
                        sx={{borderRadius: '10px'}}
                        type="text"
                        value={newDescription}
                        onChange= {e=>setNewDescription(e.target.value)}
                    />
                </div>
                <div className="nextBtn">
                    <Button 
                    type="submit" 
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
            </form>
        </>
    )
}
export default PropertyDescriptionForm;