import React from 'react';
//component imports
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PetsIcon from '@mui/icons-material/Pets';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WifiIcon from '@mui/icons-material/Wifi';
import MonitorIcon from '@mui/icons-material/Monitor';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';

import Shower from '../AmenityOptions/Shower';
import Bathtub from '../AmenityOptions/Bathtub';

function AmenityItem({ amenity }) {
    if (amenity === 1) {
        return (
            <Shower />
            // <ShowerIcon sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 2) {
        return (
            <Bathtub />
        )
    }
    if (amenity === 3) {
        return (
            <LocalLaundryServiceIcon sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 4) {
        return (
            <DirectionsCarIcon sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 5) {
        return (
            <PetsIcon sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 6) {
        return (
            <AcUnitIcon sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 7) {
        return (
            <FireplaceIcon sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 8) {
        return (
            <LocalFireDepartmentIcon sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 9) {
        return (
            <WifiIcon sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 10) {
        return (
            <MonitorIcon sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 11) {
        return (
            <ElectricCarIcon sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
}

export default AmenityItem;