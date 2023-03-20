import React from "react";
import './ConfirmationPopup.css';
import { Button } from "@mui/material";

function ConfirmationPopup(props) {
  return (props.trigger) ? (
   <div className="popup">
     <div className="popup-inner">
      <Button className="close-btn" onClick={() => props.setTrigger(false)}>Close</Button>
      { props.children }
     </div>
   </div>
  ) : "";
}

export default ConfirmationPopup;

