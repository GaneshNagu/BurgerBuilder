import React from "react";
import classes from "./Navigationitems.css";
import Navigationitem from "./Navigationitem/Navigationitem";

const Navigationitems = (props) => (
  <ul className={classes.Navigationitems}>
    <Navigationitem link='/' exact>Burger Builder</Navigationitem>
    <Navigationitem link='/Orders'> Orders</Navigationitem>

  </ul >
);

export default Navigationitems;
