import React, { useState } from 'react';
import './WhereTo.css';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, MenuItem } from '@mui/material';

function WhereTo(props) {
    const dispatch = useDispatch();
    const bookingReducer = useSelector((store) => store.bookingReducer);
    const [selected, setSelected] = useState('')

    return (props.trigger) ? (
        <div className='where'>
            <div className='where-inner'>
                <h2>Select Your Facility</h2>
                <TextField
                    type="text"
                    sx={{border: 'none',"& fieldset": { border: 'none' }}}
                    value={selected}
                    required
                    onChange={setSelected}
                />
            <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
            { props.children }
            </div>
        </div>
    ) : "";
}

export default WhereTo;