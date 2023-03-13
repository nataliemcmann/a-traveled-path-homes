import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './LengthofStay.css'
import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import PropertyFormNav from "../PropertyFormNav/PropertyFormNav";
import { Stack } from '@mui/material';

function PropertyStayLengthForm () {
    const history = useHistory();
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

      const cancelBtn = () => {
        history.push(`/ownerdashboard`)
    }

    return (
    <>
      <PropertyFormNav className="stayLength"/>
      <Card sx={{border: "none",
boxShadow: "none"}}>
        <div>
            <h2 className="center"> Minimum Stay of Length</h2>
            <Card sx={{border: "none",
boxShadow: "none"}} className="p">
            <p> Why a minimum stay length? Traveling professionals need at least 1 month availability for their temporary housing (and often longer). A Traveled Path Homes directly serves these rent seekers, so we include a mininmum stay length for all properties to meet renter needs.</p>
            </Card>
        </div>
          <Card sx={{alignSelf: "center",
                      boxShadow: "none",
                      marginLeft: 80,
                      marginBottom: 15
                      }}>
          <h2> Month:{count }</h2>
          <Button
            variant="outlined"
            className="moveRight"
            onClick={Decrement}
          >
            {" "}
            -{" "}
          </Button>
          <Button
            variant="outlined"
          
            onClick={Increment}
          >
            {" "}
            +{" "}
          </Button>
          </Card>
          </Card>

          <div className="cancelBtn"></div>
                <Button onClick={cancelBtn}
                    type="submit" 
                    size= "large"
                    sx={{
                        backgroundColor: '#CE8077',
                        color: '#f8f8f8',
                        margin: '2%',
                        paddingTop: '16px', paddingBottom: '16px',
                        paddingRight: '32px', paddingLeft: '32px'
                    }}
                    >
                        Cancel
                    </Button> 
        
    </>
    )
}

export default PropertyStayLengthForm; 
