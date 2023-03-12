import React from 'react';
import { useHistory } from 'react-router-dom';
import '../PropertyFormNav';
import { Button } from '@mui/material';

function AddressOption({ allowed }) {
    const history = useHistory();

    function toAddress() {
        history.push('/address')
    }

    if (allowed) {
        return (
            <>
                <div className="indicatorCtnr">
                        <div className="indicator allow">
                            <Button onClick={toAddress}></Button>
                        </div>
                        <p>Address</p>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="indicatorCtnr">
                        <div className="indicator restrict"></div>
                        <p className="restricted">Address</p>
                </div>
            </>
        )
    }   
}

export default AddressOption;