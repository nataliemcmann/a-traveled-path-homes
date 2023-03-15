import React from 'react';
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
        return (<ShowerIcon/>)
    }
    if (amenity === 2) {
        return (<BathtubIcon/>)
    }
    if (amenity === 3) {
        return (<LocalLaundryServiceIcon/>)
    }
    if (amenity === 4) {
        return (<DirectionsCarIcon/>)
    }
    if (amenity === 5) {
        return (<PetsIcon/>)
    }
    if (amenity === 6) {
        return (<AcUnitIcon/>)
    }
    if (amenity === 7) {
        return (<FireplaceIcon/>)
    }
    if (amenity === 8) {
        return (<LocalFireDepartmentIcon/>)
    }
    if (amenity === 9) {
        return (<WifiIcon/>)
    }
    if (amenity === 10) {
        return (<MonitorIcon/>)
    }
    if (amenity === 11) {
        return (<ElectricCarIcon/>)
    }
}

export default AmenityItem;