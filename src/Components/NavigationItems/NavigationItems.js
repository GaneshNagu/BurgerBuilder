import React from "react";
import classes from "./Navigationitems.css";
import Navigationitem from "./Navigationitem/Navigationitem";

const Navigationitems = (props) => (
  <ul className={classes.Navigationitems}>
    <Navigationitem link='/' active={true}>Burger Builder</Navigationitem>
    <Navigationitem link='/'> check Out</Navigationitem>

  </ul >
);

export default Navigationitems;
