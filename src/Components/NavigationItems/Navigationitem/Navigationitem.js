import React from "react";
import classes from './Navigationitem.css'
import {NavLink}from 'react-router-dom';
// import Navigationitems from '../NavigationItems';

const Navigationitem = (props) => (


    <li className={classes.Navigationitem}>
        <NavLink to={props.link}
        exact={props.exact}
        activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>


);


export default Navigationitem;