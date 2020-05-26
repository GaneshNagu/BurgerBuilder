import React from "react";
import Auxillary from "../../Hoc/Auxillary";
import classes from './Layout.css';


const Layout = (props) => (

    <Auxillary >

        <div className={classes.Content}>Tool Bar,Side Bar,Back drop</div>
        <main className={classes.Content}>
            {props.children}
        </main>

    </Auxillary>


);

export default Layout;
