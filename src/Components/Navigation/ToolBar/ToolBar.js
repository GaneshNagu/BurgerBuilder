import React from "react";
import classes from "../ToolBar/ToolBar.css";
import Logo from "../../UI/Logo/Logo";

const ToolBar = (props) => (
  <header className={classes.ToolBar}>
    <div>MENU</div>
    <Logo />
    <nav>Dummy Navigation</nav>
  </header>
);

export default ToolBar;
