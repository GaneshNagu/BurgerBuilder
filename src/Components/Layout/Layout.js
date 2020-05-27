import React from "react";
import Auxillary from "../../Hoc/Auxillary";
import classes from "./Layout.css";
import ToolBar from "../Navigation/ToolBar/ToolBar";

const Layout = (props) => (
  <Auxillary>
    <div className={classes.Content}>
      <ToolBar />
    </div>
    <main className={classes.Content}>{props.children}</main>
  </Auxillary>
);

export default Layout;
