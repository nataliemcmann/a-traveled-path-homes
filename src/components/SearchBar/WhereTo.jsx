import React from 'react';
import './WhereTo.css';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem, Stack } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

function WhereTo(props) {
    const dispatch = useDispatch();

    function handleDispatch () {
        dispatch ({
            type: 'SET_HOSPITAL',
            payload: 'North Kansas City Hospital'
        })
        props.setTrigger(false)
    }
    function handleClick () {
        props.setTrigger(false)
    }

    return (props.trigger) ? (
        <div className='where'>
            <div className='where-inner'>
                <Stack>
                    <h2>Select Your Facility</h2>
                    <MenuItem onClick={handleDispatch}>
                        <PlaceIcon/><p>North Kansas City Hospital</p>
                    </MenuItem>
                    <MenuItem onClick={handleClick}>
                        <PlaceIcon/><p>Saint Luke's Hospital of Kansas</p>
                    </MenuItem>
                    <MenuItem onClick={handleClick}>
                        <PlaceIcon/><p>St. Joseph Medical Center</p>
                    </MenuItem>
                    <MenuItem onClick={handleClick}>
                        <PlaceIcon/><p>Saint Luke's North Hospital-Barry Road</p>
                    </MenuItem>
                    <MenuItem onClick={handleClick}>
                        <PlaceIcon/><p>Kindred Hospital Northland</p>
                    </MenuItem>
                    <MenuItem onClick={handleClick}>
                        <PlaceIcon/><p>Liberty Hospital</p>
                    </MenuItem>
                    <MenuItem onClick={handleClick}>
                        <PlaceIcon/><p> Kansas City VA Medical Center</p>
                    </MenuItem>
                    <MenuItem onClick={handleClick}>
                        <PlaceIcon/><p>University Health Truman Medical Center</p>
                    </MenuItem>
                </Stack>
            <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
            { props.children }
            </div>
        </div>
    ) : "";

}

export default WhereTo;