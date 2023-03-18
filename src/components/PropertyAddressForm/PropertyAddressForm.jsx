import React from "react"
import { useDispatch, useSelector} from "react-redux"
import { useHistory } from "react-router-dom";
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";
import './AddressForm.css';
//mui components
import { Stack, TextField, Button } from '@mui/material';

const ProperyAddressForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const propertyReducer = useSelector((store) => store.propertyReducer);
    const address = useSelector((store) => store.address);

    function handleAddressSubmit(event) {
        event.preventDefault();
        // let addressAsString = ''
        // if (address.apartment) {
        //   addressAsString = `${address.street} ${address.apartment} ${address.city} ${address.state} ${address.zip}`;
        // } else {
        //   addressAsString = `${address.street} ${address.city} ${address.state} ${address.zip}`;
        // }
        // console.log(addressAsString);
        // dispatch({type: 'SET_ADDRESS',
        // payload: addressAsString
        // })
        // history.push('/basics');
      }

      const nextBtn = () => {
        history.push('/basics');
      }
      const backBtn = () => {
        history.push(`/describe`);
    }

      function fillAddress() {
        dispatch({type: 'SET_STREET', payload: '8503 NE 89th Terrace'});
        dispatch({type: 'SET_CITY', payload: 'Kansas City'});
        dispatch({type: 'SET_STATE', payload: 'MO'});
        dispatch({type: 'SET_ZIP', payload: '64157'});
      }
      
    return (
      <>
        <PropertyFormNav className="address"/>
        <div className="propertyAddress">
            <form onSubmit={handleAddressSubmit}>
            <Stack alignItems='center'>
              <div className="addressHeader">
                <h1 onClick={fillAddress}> Address </h1>
                <p>Your address and location are safe with us. It won't be viewable by renders until you chose to list property publicly.</p>
              </div>  
              <div className="addressFields">
              <p>Address</p>
                <TextField 
                variant="outlined"
                type="text" 
                value= {address.street || ''}
                onChange = {(event) => {
                dispatch({type: 'SET_STREET', payload: event.target.value})
                }}
                />
                
                <p>Apartment, suite, etc.</p>
                  <TextField 
                  variant="outlined"
                  type="text" 
                  value= {address.apartment || ''}
                  onChange = {(event) => {
                  dispatch({type: 'SET_APARTMENT', payload: event.target.value})
                  }}
                  />


                <p>City</p>
                  <TextField 
                  variant="outlined"
                  type="text" 
                  value= {address.city || ''}
                  onChange = {(event) => {
                    dispatch({type: 'SET_CITY', payload: event.target.value})
                  }}
                  />


                <p>State</p>
                  <TextField 
                  variant="outlined"
                  type="text" 
                  value= {address.state || ''}
                  onChange = {(event) => {
                    dispatch({type: 'SET_STATE', payload: event.target.value})
                  }}
                  />

                <p>Zip/Postal code</p>
                  <TextField 
                  variant="outlined"
                  type="text" 
                  value= {address.zip || ''}
                  onChange = {(event) => {
                    dispatch({type: 'SET_ZIP', payload: event.target.value})
                  }}
                  />
              </div>     
            </Stack>
          </form>
        </div>
        <div className="btnContainer">

          <div className="cancelBtn">
                <Button onClick={backBtn}
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
      </>     
    )
}

export default ProperyAddressForm;