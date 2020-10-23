import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
import axios from "../../../axios-orders";
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';
import {connect} from 'react-redux';


class ContactData extends Component {
  state = {
    OrderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: ''
      },
      Street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Enter Zipcode'
        },
        value: ''
      },
      Country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'your Country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'your Email'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'Normal', displayValue: 'Normal' },
            { value: 'slow', displayValue: 'slow' }
          ]
        },
        value: ''
      }
    },
    Loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    // console.log(this.props.ingredients);

    this.setState({ Loading: true });

    let formData = {};
    for (let identifier in this.state.OrderForm) {
      formData[identifier] = this.state.OrderForm[identifier].value;
    }
    console.log(formData);

    const orders = {
      ingredients: this.props.ings,
      totalPrice: this.props.totalPrice,
      OrderData: formData

    };
    console.log(orders);

 

  }
  onchangeHandler = (event, identifier) => {
    const updatedform = {
      ...this.state.OrderForm
    }
    // console.log(updatedform);
    const updatedorderElement = {
      ...updatedform[identifier]
    }

    updatedorderElement.value = event.target.value;
    updatedform[identifier] = updatedorderElement;

    this.setState({ OrderForm: updatedform })
    // console.log(this.state.OrderForm);
  }



  render() {

    let formElementArray = [];
    for (let key in this.state.OrderForm) {
      formElementArray.push({
        id: key,
        config: this.state.OrderForm[key]
      })
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {
          formElementArray.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              Changed={(event) => this.onchangeHandler(event, formElement.id)}
            />
          ))
        }
        <Button btnType="Success" >Order Now</Button>
      </form>
    );
    if (this.state.Loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Please enter your contact Data</h4>
        {form}
      </div>
    );
  }


}

const mapStateToProps=state=>{
  return{
    ings:state.ingredients,
    totalPrice:state.totalPrice
  }
}

export default connect(mapStateToProps)(ContactData);