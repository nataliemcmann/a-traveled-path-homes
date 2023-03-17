import React from 'react';
import './AmenityItem.css';
//mui imports
import ShowerIcon from '@mui/icons-material/Shower';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PetsIcon from '@mui/icons-material/Pets';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WifiIcon from '@mui/icons-material/Wifi';
import MonitorIcon from '@mui/icons-material/Monitor';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';

function AmenityItem({ amenity }) {
    if (amenity === 1) {
        return (
            <div className="amenity">
                <ShowerIcon sx={{width: '3rem', height: '3rem'}}/>
            </div>    
        )
    }
    if (amenity === 2) {
        return (
            <div className="amenity">
                <BathtubIcon sx={{width: '3rem', height: '3rem'}}/>
            </div>
        )
    }
    if (amenity === 3) {
        return (
            <div className="amenity">
                <LocalLaundryServiceIcon sx={{width: '3rem', height: '3rem'}}/>
            </div>
        )
    }
    if (amenity === 4) {
        return (
            <div className="amenity">
                <DirectionsCarIcon sx={{width: '3rem', height: '3rem'}}/>
            </div>
        )
    }
    if (amenity === 5) {
        return (
            <div className="amenity">
                <PetsIcon sx={{width: '3rem', height: '3rem'}}/>
            </div>
        )
    }
    if (amenity === 6) {
        return (
            <div className="amenity">
                <AcUnitIcon sx={{width: '3rem', height: '3rem'}}/>
            </div>
        )
    }
    if (amenity === 7) {
        return (
            <div className="amenity">
                <FireplaceIcon sx={{width: '3rem', height: '3rem'}}/>
            </div>
        )
    }
    if (amenity === 8) {
        return (
            <div className="amenity">
                <LocalFireDepartmentIcon sx={{width: '3rem', height: '3rem'}}/>
            </div>
        )
    }
    if (amenity === 9) {
        return (<WifiIcon sx={{width: '3rem', height: '3rem'}}/>)
    }
    if (amenity === 10) {
        return (<MonitorIcon sx={{width: '3rem', height: '3rem'}}/>)
    }
    if (amenity === 11) {
        return (<ElectricCarIcon sx={{width: '3rem', height: '3rem'}}/>)
    }
}

export default AmenityItem;