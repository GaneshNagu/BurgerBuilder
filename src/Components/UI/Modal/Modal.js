import React from "react";
import classes from "./Modal.css";
import Auxillary from "../../../Hoc/Auxillary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <Auxillary>
      <Backdrop show={props.show} backdropclicked={props.backdropclosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxillary>
  );
};

export default Modal;
