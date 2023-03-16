import React, { useState } from 'react';
import './CheckInCheckOut.css';
import { useDispatch, useSelector } from 'react-redux';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import  { Grid } from '@mui/material';
import { m } from 'framer-motion';


function CheckInCheckOut(props) {
  const dispatch = useDispatch();
  const bookingReducer = useSelector((store) => store.bookingReducer)
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  function setReducer() {
    props.setTrigger(false);
    dispatch({
      type: 'SET_CHECK_IN',
      payload: checkInDate.toISOString()
    })
    dispatch({
      type: 'SET_CHECK_OUT',
      payload: checkOutDate.toISOString()
    })
  }

  return (props.trigger) ? (
    <div className='daypicker'>
        <div className='daypicker-inner'>
          <Grid
          container spacing = {2}
          sx={{ textAlign: 'center'}}
          >
            <Grid>
              <h2>Check-In Date</h2>
              <DayPicker 
              mode="single"
              defaultMonth={checkInDate}
              selected={checkInDate}
              onSelect={setCheckInDate}
              />
            </Grid>
            <Grid>
              <h2>Check-Out Date</h2>
              <DayPicker 
              mode="single"
              defaultMonth={checkOutDate}
              selected={checkOutDate}
              onSelect={setCheckOutDate}
              />
            </Grid>
          </Grid>
      <button className="close-btn" onClick={setReducer}>Close</button>
      { props.children }
      </div>
      </div>
  ) : "";
}

export default CheckInCheckOut;