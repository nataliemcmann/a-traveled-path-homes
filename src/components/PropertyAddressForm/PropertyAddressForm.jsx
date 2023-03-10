import { ParameterStatusMessage } from "pg-protocol/dist/messages";
import React, {useEffect, useState} from "react"
import { useDispatch} from "react-redux"

const ProperyAddressForm = () => {

    const dispatch = useDispatch();

        const [addressinput, setAddressInput] = useState("");
        const [apartmentInput, setApartmentInput] = useState("");
        const [cityInput, setCityInput] = useState("");
        const [stateInput, setStateInput] = useState("");
        const [zipInput, setZipInput] = useState("");

       useEffect(() =>{
        dispatch({ 
          type: 'FETCH_RESIDENCE',
          payload: params.id
        })
       }, [])

       
        const setAddress = (event) => {
            dispatch ({
              type: 'SET_ADDRESS',
              payload: evt.target.value
            })
        }

        const addressToEdit= (evt) => {
          dispatch({
            type: 'ADDRESS_TO_EDIT',
            payload: evt.target.value
          })
        }

        handleSubmit = () => {
          event.preventDefault();
          dispatch({type: 'EDIT_RESIDENCE',
          payload: evt.target.value
        })
        
        }
      
    return (
        <div className="propertyAddress">
            <form onSubmit={addToResidence}>
                <h1> Address </h1>
                <h5>Your address and location are safe with us. It won't be viewable by renders until you chose to list property publicly</h5>
              <label> Address
                <input 
                type="text" 
                value= {addressinput}
                onChange = {(event) => {
                setAddressInput(event.target.value)
                }}
                />
              </label>
              <label> Apartment, suite, etc.
                <input 
                type="text" 
                value= {apartmentInput}
                onChange = {(event) => {
                setApartmentInput(event.target.value)
                }}
                />
              </label>
              <label> City
                <input 
                type="text" 
                value= {cityInput}
                onChange = {(event) => {
                setCityInput(event.target.value)
                }}
                />
              </label>
              <label> State
                <input 
                type="text" 
                value= {stateInput}
                onChange = {(event) => {
                setStateInput(event.target.value)
                }}
                />
              </label>
              <label> Zip/postal code
                <input 
                type="text" 
                value= {zipInput}
                onChange = {(event) => {
                setZipInput(event.target.value)
                }}
                />
              </label>
              <button onClick={addToResidence}>Next</button>
            </form>
            </div>
          
    )
}

export default ProperyAddressForm;