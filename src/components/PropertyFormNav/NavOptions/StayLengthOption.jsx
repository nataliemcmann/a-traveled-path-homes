import React from 'react';
import { useHistory } from 'react-router-dom';
import '../PropertyFormNav';
import { Button } from '@mui/material';

function StayLengthOption({ allowStayLength }) {
    const history = useHistory();

    function toStayLength() {
        history.push('/stayLength')
    }

    return (allowStayLength) ? (
        <>
            <div className="indicatorCtnr">
                    <div className="indicator allow">
                        <Button onClick={toStayLength}></Button>
                    </div>
                    <p>Stay Length</p>
            </div>
        </>
    ) : (
        <>
            <div className="indicatorCtnr">
                    <div className="indicator restrict"></div>
                    <p className="restricted">Stay Length</p>
            </div>
        </>
    ) 
}

export default StayLengthOption;