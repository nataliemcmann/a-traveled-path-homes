import React from "react"
import { useDispatch, useSelector} from "react-redux"
import { useHistory } from "react-router-dom";
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";
//mui components


const ProperyAddressForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const propertyReducer = useSelector((store) => store.propertyReducer);
    const address = useSelector((store) => store.address);

      let addressAsString = ''
      if (address.apartment) {
        addressAsString = `
        ${address.street} ${address.apartment} ${address.city}
        ${address.state} ${address.zip}
        `;
      } else {
        addressAsString = `
        ${address.street} ${address.city}
        ${address.state} ${address.zip}
        `;
      }

      function handleAddressSubmit() {
          event.preventDefault();
          console.log(addressAsString);
          dispatch({type: 'SET_ADDRESS',
          payload: addressAsString
        })
        history.push('/basics');
        }
      
    return (
      <>
      <PropertyFormNav className="address"/>
      <div className="propertyAddress">
            <form onSubmit={handleAddressSubmit}>
                <h1> Address </h1>
                <h5>Your address and location are safe with us. It won't be viewable by renders until you chose to list property publicly</h5>
              <label> Address
                <input 
                type="text" 
                value= {address.street || ''}
                onChange = {(event) => {
                dispatch({type: 'SET_STREET', payload: event.target.value})
                }}
                />
              </label>
              <label> Apartment, suite, etc.
                <input 
                type="text" 
                value= {address.apartment || ''}
                onChange = {(event) => {
                dispatch({type: 'SET_APARTMENT', payload: event.target.value})
                }}
                />
              </label>
              <label> City
                <input 
                type="text" 
                value= {address.city || ''}
                onChange = {(event) => {
                  dispatch({type: 'SET_CITY', payload: event.target.value})
                }}
                />
              </label>
              <label> State
                <input 
                type="text" 
                value= {address.state || ''}
                onChange = {(event) => {
                  dispatch({type: 'SET_STATE', payload: event.target.value})
                }}
                />
              </label>
              <label> Zip/postal code
                <input 
                type="text" 
                value= {address.zip || ''}
                onChange = {(event) => {
                  dispatch({type: 'SET_ZIP', payload: event.target.value})
                }}
                />
              </label>
              <button type= "submit" >Next</button>
            </form>
            </div>
      </>     
    )
}

export default ProperyAddressForm;