import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";

import "./BasicsPage.css";
//mui components
import { Stack, Grid, Button} from '@mui/material';

function PropertyBasicsForm() {
  const [guestcount, setGuestCount] = useState(0);
  const [bedsCount, setBedsCount] = useState(0);
  const [bedrooomCount, setBedroomCount] = useState(0);
  const [bathCount, setBathCount] = useState(0);
  
  function guestIncrement() {
    setGuestCount(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function guestDecrement() {
    setGuestCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  function bedsIncrement() {
    setBedsCount(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function bedsDecrement() {
    setBedsCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  function bedroomIncrement() {
    setBedroomCount(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function bedroomDecrement() {
    setBedroomCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  function bathIncrement() {
    setBathCount(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function bathDecrement() {
    setBathCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  return (
    <>
      <PropertyFormNav className="basics"/>
      <Stack>
        <form className="basicForm">
          <h1> Basics </h1>
            <p> Fill in the basics </p>
              <h2> Guests: {guestcount} </h2>
              <Button
                variant="outlined"
                className="moveRight"
                onClick={guestIncrement}
              >
                {" "}
                +{" "}
              </Button>
              <Button
                variant="outlined"
                className="moveRight"
                onClick={guestDecrement}
              >
                {" "}
                -{" "}
              </Button>
              <h2> Beds: {bedsCount} </h2>
              <Button
                variant="outlined"
                className="moveRight"
                onClick={bedsIncrement}
              >
                {" "}
                +{" "}
              </Button>
              <Button
                variant="outlined"
                className="moveRight"
                onClick={bedsDecrement}
              >
                {" "}
                -{" "}
              </Button>
              <h2> Bedrooms: {bedrooomCount}</h2>
              <Button
                variant="outlined"
                className="moveRight"
                onClick={bedroomIncrement}
              >
                {" "}
                +{" "}
              </Button>
              <Button
                variant="outlined"
                className="moveRight"
                onClick={bedroomDecrement}
              >
                {" "}
                -{" "}
              </Button>
              <h2> Bathrooms: {bathCount} </h2>
              <Button
                variant="outlined"
                className="moveRight"
                onClick={bathIncrement}
              >
                {" "}
                +{" "}
              </Button>
              <Button
                variant="outlined"
                className="moveRight"
                onClick={bathDecrement}
              >
                {" "}
                -{" "}
              </Button>
              </form>
      </Stack> 
    </>
  );
}
export default PropertyBasicsForm;
