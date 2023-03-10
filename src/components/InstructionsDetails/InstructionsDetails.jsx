import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const InstructionsDetail = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [wifiInformationInput, setWifiInformationInput] = useState("");
  const [safetyProtocalInput, setSafetyProtocalInput] = useState(null);
  const [contactInformationInput, setContactInformationInput] = useState("");
  const [checkInDetailsInput, setCheckInDetailsInput] = useState("");
  const [checkOutDetailsInput, setCheckOutDetailsInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Dispatch the form data to Redux
    dispatch({
      type: "SAGA/ADD_TO_INSTRUCTIONS",
      payload: {
        wifiInformation: wifiInformationInput,
        safetyProtocal: safetyProtocalInput,
        contactInformation: contactInformationInput,
        checkInDetails: checkInDetailsInput,
        checkOutDetails: checkOutDetailsInput
      },
    });

    // Reset the form inputs
    wifiInformationInput("");
    safetyProtocalInput("");
    contactInformationInput("");
    checkInDetailsInput("");
    checkOutDetailsInput("");
    history.push('/review')
  };
  return (
    <div className="propertyAddress">
        <form onSubmit={handleSubmit}>
            <h1>Property Instructions</h1>
            <h5>Provide information to your guests regarding accessibility, safety, and contact information</h5>
          <label> Wifi Details
            <input 
            type="text" 
            value= {wifiInformationInput}
            onChange = {(event) => {
            setWifiInformationInput(event.target.value)
            }}
            />
          </label>
          <label> Safety Protocal
            <input 
            type="text" 
            value= {safetyProtocalInput}
            onChange = {(event) => {
            setSafetyProtocalInput(event.target.value)
            }}
            />
          </label>
          <label> Contact Information
            <input 
            type="text" 
            value= {contactInformationInput}
            onChange = {(event) => {
            setContactInformationInput(event.target.value)
            }}
            />
          </label>
          <label> Checkin Details
            <input 
            type="text" 
            value= {checkInDetailsInput}
            onChange = {(event) => {
            setCheckInDetailsInput(event.target.value)
            }}
            />
          </label>
          <label> Checkout Details
            <input 
            type="text" 
            value= {checkOutDetailsInput}
            onChange = {(event) => {
            setCheckOutDetailsInput(event.target.value)
            }}
            />
          </label>
          <button onSubmit={handleSubmit}>Next</button>
        </form>
        </div>
      
)
}

export default InstructionsDetail;