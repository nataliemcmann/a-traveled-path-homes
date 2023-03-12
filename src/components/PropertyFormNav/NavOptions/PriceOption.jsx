import React from 'react';
import { useHistory } from 'react-router-dom';
import '../PropertyFormNav';
import { Button } from '@mui/material';

function PriceOption({ allowPrice }) {
    const history = useHistory();

    function toPrice() {
        history.push('/price')
    }

    return (allowPrice) ? (
        <>
            <div className="indicatorCtnr">
                    <div className="indicator allow">
                        <Button onClick={toPrice}></Button>
                    </div>
                    <p>Price</p>
            </div>
        </>
    ) : (
        <>
            <div className="indicatorCtnr">
                    <div className="indicator restrict"></div>
                    <p className="restricted">Price</p>
            </div>
        </>
    ) 
}

export default PriceOption;