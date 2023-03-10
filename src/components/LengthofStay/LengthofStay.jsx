import React, { useState } from "react";
import './LengthofStay.css'
import Button from "@mui/material/Button";

function LengthofStay () {
    const [count, setCount] = useState(0);
    function Increment() {
        setCount(function (prevCount) {
          return (prevCount += 1);
        });
      }
      function Decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1);
          } else {
            return (prevCount = 0);
          }
        });
      }
    return (
    <>
        <div>
            <h2 className="center"> Minimum Stay of Length</h2>
            <p className="box"> Why a minimum stay length? Traveling professionals need at least 1 month availability for their temporary housing (and often longer). A Traveled Path Homes directly serves these rent seekers, so we include a mininmum stay length for al properties to meet renter needs.</p>
        </div>

        <div id="SquareinMiddle">
           <h2> Month:{count }</h2>
           <Button
            variant="outlined"
          
            onClick={Increment}
          >
            {" "}
            +{" "}
          </Button>
          <Button
            variant="outlined"
           
            onClick={Decrement}
          >
            {" "}
            -{" "}
          </Button>
        </div>
    </>
    )
}

export default LengthofStay; 
