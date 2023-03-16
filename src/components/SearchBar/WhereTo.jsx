import React from 'react';
import './WhereTo.css';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

function WhereTo(props) {
    const dispatch = useDispatch();
    const bookingReducer = useSelector((store) => store.bookingReducer);

    return (props.trigger) ? (
        <div className='where'>
            <div className='where-inner'>
                <h2>Number of Travelers:</h2>
                <TextField
                    type="number"
                    sx={{border: 'none',"& fieldset": { border: 'none' }}}
                    value={bookingReducer.travelers}
                    InputProps={{ inputProps: { min: 0, style: { textAlign: 'right', width: '35px', fontSize: '32px'}}}}
                    required
                    onChange={(event) => {
                    dispatch({type: 'SET_TRAVELERS', payload: event.target.value})
                    }}
                />
            <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
            { props.children }
            </div>
        </div>
    ) : "";

}

export default WhereTo;