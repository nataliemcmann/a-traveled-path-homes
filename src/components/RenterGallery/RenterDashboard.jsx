import React from "react";
import "./RenterDashboard.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Card, Icon } from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function RenterDashboard() {
  const [heading, setHeading] = useState("A Traveled Path Homes");
  const history = useHistory();
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="savedproperties">
        <h1>Saved Properties</h1>
      </div>
      {/* <div className="containers">
      <Card sx={{
        padding: 2,
        paddingLeft: 2,
        paddingRight: 2,
        fontSize: 30,
        marginLeft: 40,
        marginRight: 50,
          height: 38,
          width: 600
      }}>
      <Button sx={{color: '#121957'}} onClick={() => setButtonPopup(true)}className="btn btn_sizeSm" >
              Where to?
      </Button>
      <Button sx={{color: '#121957'}} onClick={() => setButtonPopup(true)} className="btn btn_sizeSm" >
              Check In - Check Out
      </Button>
      <Button sx={{color: '#121957'}} onClick={() => setButtonPopup(true)} className="btn btn_sizeSm" >
              How many Travelers?
      </Button>
      <Button sx={{color: '#121957'}} onClick={() => setButtonPopup(true)} className="btn btn_sizeSm" >
              Filters
      </Button>
      </Card>
      
      </div> */}
      <div className="gallryContainer">
        {/* Mapping will start here */}
        <div className="container">
          <div className="img-container">
            <img src="https://picsum.photos/200" alt="" />
          </div>
          <div className="property-details">
            <div className="propertyInformation">
              <h4>Minneapolis, MN</h4>
              <p>5 Miles from work</p>
              <p>30 day minum stay</p>
              <h4>$1,000/month</h4>
            </div>
            <div className="propertyRatings">
              <div className="star">
                <span class="fa fa-star checked"></span>
                <div className="rating">4.1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="img-container">
            <img src="https://picsum.photos/200" alt="" />
          </div>
          <div className="property-details">
            <div className="propertyInformation">
              <h4>Minneapolis, MN</h4>
              <p>15 Miles from work</p>
              <p>30 day minum stay</p>
              <h4>$1,100/month</h4>
            </div>
            <div className="propertyRatings">
              <div className="star">
                <span class="fa fa-star checked"></span>
                <div className="rating">4.7</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="img-container">
            <img src="https://picsum.photos/200" alt="" />
          </div>
          <div className="property-details">
            <div className="propertyInformation">
              <h4>Minneapolis, MN</h4>
              <p>10 Miles from work</p>
              <p>30 day minum stay</p>
              <h4>$1,500/month</h4>
            </div>
            <div className="propertyRatings">
              <div className="star">
                <span class="fa fa-star checked"></span>
                <div className="rating">4.6</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="img-container">
            <img src="https://picsum.photos/200" alt="" />
          </div>
          <div className="property-details">
            <div className="propertyInformation">
              <h4>Minneapolis, MN</h4>
              <p>17 Miles from work</p>
              <p>30 day minum stay</p>
              <h4>$1,300/month</h4>
            </div>
            <div className="propertyRatings">
              <div className="star">
                <span class="fa fa-star checked"></span>
                <div className="rating">4.9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RenterDashboard;
