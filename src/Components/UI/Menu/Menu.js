import React from 'react';
import Menuimg from '../../../Assets/Images/Menu.png';
import classes from './Menu.css';
import Auxillary from '../../../Hoc/Auxillary';

const Menu = (props) => {

    return (
        <div onClick={props.imgclicked} className={classes.DrawerToggle} >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )

}

export default Menu;

//  <img src={Menuimg} alt='menu' className={classes.Menu} onClick={props.imgclicked} /><Auxillary>

        // </Auxillary >