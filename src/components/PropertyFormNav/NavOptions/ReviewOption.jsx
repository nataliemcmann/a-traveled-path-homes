import React from 'react';
import { useHistory } from 'react-router-dom';
import '../PropertyFormNav';
import { Button } from '@mui/material';

function ReviewOption({ allowReview }) {
    const history = useHistory();

    function toReview() {
        history.push('/review')
    }

    return (allowReview) ? (
        <>
            <div className="indicatorCtnr">
                    <div className="indicator allow">
                        <Button onClick={toReview}></Button>
                    </div>
                    <p>Review</p>
            </div>
        </>
    ) : (
        <>
            <div className="indicatorCtnr">
                    <div className="indicator restrict"></div>
                    <p className="restricted">Review</p>
            </div>
        </>
    ) 
}

export default ReviewOption;