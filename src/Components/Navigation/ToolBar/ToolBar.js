import React from "react";
import classes from "../ToolBar/ToolBar.css";
import Logo from "../../UI/Logo/Logo";
import Navigationitems from "../../NavigationItems/NavigationItems";
import Menu from "../../UI/Menu/Menu";

const ToolBar = (props) => (
  <header className={classes.ToolBar}>
    <Menu imgclicked={props.imgclicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>

    <nav className={classes.sidebar}>
      <Navigationitems />
    </nav>
  </header>
);

export default ToolBar;
