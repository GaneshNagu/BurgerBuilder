import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        Name: '',
        MobileNumber: '',
        Address: {
            postalCode: '',
            Street: '',
            pinCode: ''
        },
        emailId: ''
    }
    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Please enter your contact Data</h4>
                <form>
                    <label className={classes.input}><input type='text' name='name' placeholder="Enter you name" /></label>
                    <label className={classes.input}><input type='number' min='1' name='name' placeholder="Enter you number" /></label>
                    <label className={classes.input}><input type='number' min='1' name='name' placeholder="Enter you postal code" /></label>
                    <label className={classes.input}><input type='text' name='name' placeholder="Enter you street" /> </label >
                    <label className={classes.input}><input type='email' name='name' placeholder="Enter you Mail" /></label >
                    <Button btnType="Success">Order Now</Button>
                </form>
            </div>
        );
    }


}

export default ContactData;