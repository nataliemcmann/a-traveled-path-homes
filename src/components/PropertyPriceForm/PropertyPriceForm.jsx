import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//mui components
import { Card, CardContent, Button, 
         TextField, InputAdornment} from '@mui/material';

import './PriceForm.css'
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";

function PropertyPriceForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const propertyReducer = useSelector((store) => store.propertyReducer);

        const backBtn = () => {
          history.push(`/stayLength`)
      }

      const nextBtn = () => {
        history.push(`/review`)
    }

    function fillPrice(){
      dispatch({type: 'SET_PRICEDAILY_INPUT', payload: 100});
      dispatch({type: 'SET_PRICEMONTHLY_INPUT', payload: 3100});
    }

    return (
      <>
        <PropertyFormNav className="price"/>
        <div className="priceForm">
          <div className="priceHeader">
            <h1 onClick={fillPrice}>Price</h1>
            <p>Prices are recommended based on similar housing in your area. 
              These prices also more accurately represent the cost of housing 
              that a traveling professional is expected to pay</p>
          </div>
        <div className="boxflex">
        <Card className="card" sx={{ width: 300, height: 250, borderRadius: 4, color: '#121957' }}>
        <React.Fragment>
          <CardContent>
            <h2>Daily</h2> 
            <label htmlFor="mininum stay length">
                  <TextField
                    type="number"
                    sx={{border: 'none',"& fieldset": { border: 'none' }}}
                    value={propertyReducer.priceDaily}
                    InputProps={{ 
                      startAdornment: <InputAdornment 
                                        position="start"
                                        sx={{fontSize:'40px', color: '#121957'}}
                                      >
                                        $
                                      </InputAdornment>,
                      inputProps: { 
                      min: 0, 
                      style: { 
                        textAlign: 'center', width: '120px', 
                        fontSize: '32px'} }
                        }}
                    required
                    onChange={(event) => {
                      
                    }}
                  />
              </label>
              <h3>
                Average: ${propertyReducer.priceDaily}-${Number(propertyReducer.priceDaily) + 20}
              </h3>
            </CardContent>
          
        </React.Fragment>
        </Card>
        <Card className="card" sx={{ width: 300, height: 250, borderRadius: 4, color: '#121957' }}>
        <React.Fragment>
          <CardContent>
          <h2>Monthly</h2>
          <label htmlFor="mininum stay length">
                  <TextField
                    type="number"
                    sx={{border: 'none',"& fieldset": { border: 'none' }}}
                    value={propertyReducer.priceMonthly}
                    InputProps={{ 
                      startAdornment: <InputAdornment 
                                        position="start"
                                        sx={{fontSize:'40px', color: '#121957'}}
                                      >
                                        $
                                      </InputAdornment>,
                      inputProps: { 
                      min: 0, 
                      style: { 
                        textAlign: 'center', width: '120px', 
                        fontSize: '32px'} }
                        }}
                    required
                    onChange={(event) => {
                      dispatch({type: 'SET_PRICEMONTHLY_INPUT', payload: event.target.value})
                    }}
                  />
            </label>
            <h3>
                Average: ${propertyReducer.priceMonthly}-${Number(propertyReducer.priceMonthly) + 500}
            </h3>
            </CardContent>
        </React.Fragment>
        </Card>
        </div>
      </div> 
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
    </>           
    )
}

export default PropertyPriceForm;