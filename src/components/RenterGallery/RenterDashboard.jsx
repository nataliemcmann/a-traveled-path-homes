import React from "react";
import "./RenterDashboard.css";

function RenterDashboard () {
  return (
    <>
      <div className="gallryContainer">
        {/* Mapping will start here */}
        <div className="container">
            <div className="img-container">
                <img src="https://picsum.photos/200" alt="" />
            </div>
            <div className="property-details">
                <div className="propertyInformation">
                  <h4>Minneapolis, MN</h4>
                  <p>10 Miles from work</p>
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
        <div className="container">
            <div className="img-container">
                <img src="https://picsum.photos/200" alt="" />
            </div>
            <div className="property-details">
                <div className="propertyInformation">
                  <h4>Minneapolis, MN</h4>
                  <p>10 Miles from work</p>
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
        <div className="container">
            <div className="img-container">
                <img src="https://picsum.photos/200" alt="" />
            </div>
            <div className="property-details">
                <div className="propertyInformation">
                  <h4>Minneapolis, MN</h4>
                  <p>10 Miles from work</p>
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
        <div className="container">
            <div className="img-container">
                <img src="https://picsum.photos/200" alt="" />
            </div>
            <div className="property-details">
                <div className="propertyInformation">
                  <h4>Minneapolis, MN</h4>
                  <p>10 Miles from work</p>
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
};

export default RenterDashboard;
