import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Button, TextField } from "@mui/material";
import './PropertyDescription.css'
import SingleFamilyIcon from "../HouseTypeIcons/SingleFamilyIcon";
import MultiFamilyIcon from "../HouseTypeIcons/MultiFamilyIcon";
import TownhouseIcon from "../HouseTypeIcons/TownhouseIcon";
import ApartmentIcon from "../HouseTypeIcons/ApartmentIcon";
import CondoIcon from "../HouseTypeIcons/CondoIcon";
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";

function PropertyDescriptionForm() {
    //declare dispath
    const dispatch = useDispatch();

    //declare history
    const history = useHistory();

    const propertyReducer = useSelector((store) => store.propertyReducer);

    const [isActive, setActive] = useState(false);

    //functions to choose house type
    //single
    function setSingle() {
        console.log('single', 0)
        dispatch({type: 'SET_HOUSETYPE_INPUT', payload: 0});
        setActive(true);
    }
    //multi
    function setMulti() {
        console.log('multi', 1)
        dispatch({type: 'SET_HOUSETYPE_INPUT', payload: 1});
    }
    //townhouse
    function setTownhouse() {
        console.log('townhouse', 2)
        dispatch({type: 'SET_HOUSETYPE_INPUT', payload: 2});
    }
    //apartment
    function setApartment() {
        console.log('apartment', 3)
        dispatch({type: 'SET_HOUSETYPE_INPUT', payload: 3});
    }
    //condo
    function setCondo() {
        console.log('condo', 4)
        dispatch({type: 'SET_HOUSETYPE_INPUT', payload: 4});
    }

    //function to post and move on to address
    const addToResidence = (event) => {
        event.preventDefault();
        let newResidence={
            houseType: propertyReducer.houseType,
            propertyName: propertyReducer.propertyName,
            description: propertyReducer.description
        }
        console.log('this is a new residence', newResidence);
        dispatch({
            type:'CREATE_RESIDENCE',
            payload: newResidence
        })
        //clear inputs
        history.push('/address')
    }

    const nextBtn = () =>{
        history.push('/address')
    }

    const cancelBtn = () => {
        history.push(`/dashboard`)
    }
    
    return(
        <>
            <PropertyFormNav/>
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
                                <SingleFamilyIcon isActive={isActive}/>
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
                        value={propertyReducer.propertyName}
                        onChange= {e=>dispatch({type: 'SET_NAME_INPUT', payload: e.target.value})} 
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
                        value={propertyReducer.description}
                        onChange= {e=>dispatch({type: 'SET_DESCRIPTION_INPUT', payload: e.target.value})} 
                    />
                </div>

                <div className="btnContainer">
                    <div className="nextBtn">
                        <Button onClick={nextBtn}
                            // type="submit" 
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
        </>
    )
}
export default PropertyDescriptionForm;