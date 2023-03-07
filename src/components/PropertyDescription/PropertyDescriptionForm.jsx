import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import './PropertyDescription.css'

function PropertyDescriptionForm() {
    const dispatch = useDispatch();
    const PropertyDescription = useSelector((store) => store.propertyReducer)
    // const [newHouseType, setNewHouseType] = useState('')
    const [newPropertyName, setNewPropertyName] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const history = useHistory();

    const toAddressPage = (event) => {
        event.preventDefault();
        history.push('/address')
    }

    const addToResidence = (event) => {
        event.preventDefault();
        let newProperty={
            // houseType: newHouseType,
            propertyName: newPropertyName,
            description: newDescription
        }
        console.log('this is a new property description', newProperty);
        dispatch({
            type:'SET_PROPERTY_DESCRIPTION',
            payload: newProperty
        })
        console.log(newProperty)
        // setNewHouseType(''),
        setNewPropertyName(''),
        setNewDescription('')
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