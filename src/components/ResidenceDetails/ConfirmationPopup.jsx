import React from "react";
import { Button } from "@mui/material";

function ConfirmationPopup(props) {
  return (props.trigger) ? (
   <div className="popup">
     <div className="popup-inner">
      <Button className="close-btn">See Bookings</Button>
      { props.children }
     </div>
   </div>
  ) : "";
}

export default ConfirmationPopup;