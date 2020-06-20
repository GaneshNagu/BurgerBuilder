import React from "react";
import BurgerLogo from "../../../Assets/Images/Logo.png";
import classes from "./Logo.css";

// F: \projects\burgerbuilder\src\Assets\Images\Logo.png
const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="Burgerimage" />
  </div>
);

export default Logo;
