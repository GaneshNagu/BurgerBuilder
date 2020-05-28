import React from 'react';
import Logo from '../../UI/Logo/Logo';
import Navigationitems from '../../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Auxillary from '../../../Hoc/Auxillary';
import Backdrop from '../../UI/Backdrop/Backdrop';


const SideDrawer = (props) => {
    let attacchedclasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attacchedclasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Auxillary>
            <div className={classes.Sideclose}>
                <Backdrop show={props.open} backdropclicked={props.closed} />
            </div>
            <div className={attacchedclasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <Navigationitems />
                </nav>
            </div>
        </Auxillary>
    );
}

export default SideDrawer;