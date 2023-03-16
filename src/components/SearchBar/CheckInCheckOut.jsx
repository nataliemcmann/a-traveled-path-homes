import React, { useState } from 'react';
import './CheckInCheckOut.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import  { Grid } from '@mui/material';


function CheckInCheckOut(props) {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());


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
      <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
      { props.children }
      </div>
      </div>
  ) : "";
}

export default CheckInCheckOut;