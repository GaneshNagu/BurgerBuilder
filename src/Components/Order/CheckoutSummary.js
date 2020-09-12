import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.css';
import {connect} from 'react-redux';


const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ings} />
            </div>
            <div>
                <Button btnType="Danger"
                    butclicked={props.clickedcancled}
                >CANCEL</Button>
                <Button
                    btnType="Success"
                    butclicked={props.clickedcontinue}>
                    CONTINUE</Button>
            </div>
        </div>
    );

}

const mapStateToProps=state=>{
    return{
        ings:state.ingredients
    }
}

export default connect(mapStateToProps)(CheckoutSummary);