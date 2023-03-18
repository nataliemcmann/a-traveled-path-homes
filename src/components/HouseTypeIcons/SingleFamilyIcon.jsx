import React from 'react';

function SingleFamilyIcon({ isActive }) {

    return(
        <>
            <img
            className={isActive ? "icon clicked" : "icon"}
            alt="single family home icon" 
            width= "44.8px"
            height= "38px"
            src="https://aws-s3-atph-test-bucket.s3.us-east-2.amazonaws.com/Icons/SingleFamily.png"
            />
        </>
    )
}

export default SingleFamilyIcon;