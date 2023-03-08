import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import './PropertyDescription.css'

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
        <div className="propertyDescription">
            <form onSubmit={addToResidence}>
            <h1>Describe</h1>
            <h5>select your property type and write a short description</h5>
            <h3>Property Name</h3>
            <TextField 
                id="outlined-basic" 
                label="Name" 
                variant="outlined"
                type="text"
                value={newPropertyName}
                onChange= {e=>setNewPropertyName(e.target.value)} 
                />
            <h3>Description</h3>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                type="text"
                value={newDescription}
                onChange= {e=>setNewDescription(e.target.value)}
            />
            <Button onClick={addToResidence} size= "medium" variant="outlined">Next</Button>  
            </form>
        </div>
    )

}
export default PropertyDescriptionForm