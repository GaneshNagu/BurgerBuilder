import React from "react";
import classes from './Navigationitem.css'
// import Navigationitems from '../NavigationItems';

const Navigationitem = (props) => (


    <li className={classes.Navigationitem}>
        <a href='/' className={props.active ? classes.active : null}>
            {props.children}
        </a>
    </li>


);


export default Navigationitem;