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
import Laundry from "../AmenityOptions/Laundry";
import Parking from "../AmenityOptions/Parking";
import Pets from "../AmenityOptions/Pets";
import Heating from "../AmenityOptions/Heating";
import Fireplace from "../AmenityOptions/Fireplace";
import AC from '../AmenityOptions/AC';
import Wifi from "../AmenityOptions/Wifi";
import TV from '../AmenityOptions/TV';

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
            <Laundry sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 4) {
        return (
            <Parking sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 5) {
        return (
            <Pets sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 6) {
        return (
            <AC sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 7) {
        return (
            <Fireplace sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 8) {
        return (
            <Heating sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 9) {
        return (
            <Wifi sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    if (amenity === 10) {
        return (
            <TV sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
        )
    }
    // if (amenity === 11) {
    //     return (
    //         <ElectricCarIcon sx={{width: '3rem', height: '3rem', padding: '1%'}}/>
    //     )
    // }
}

export default AmenityItem;