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
      <div className="dashboard">
        <h2>Renter Dashboard</h2>
      </div>
      <div className="bookedProperties">
        <h3>Current Stays</h3>
        <div className="stayGallery">
        </div>
      </div>
      <div className="savedProperties">
        <h3>Saved Properties</h3>
        <div className="savedGallery">
        </div>
      </div>
      
        {/* <div className="gallryContainer">
          {/* Mapping will start here */}
          {/* <div className="container">
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
        </div> */} 
    </>
  );
}

export default RenterDashboard;
