import React, { Component } from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary';
import { Route } from 'react-router';
import ContactData from './ContactData/ContactData';
// import { withRouter } from 'react-router-dom';


class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice:0
    }

    UNSAFE_componentWillMount = () => {
        const query = new URLSearchParams(this.props.location.Search);
        console.log(this.props);
        const ingredients = {};
        let totalPrice=0;
        for (let params of query.entries()) {
                if(params[0]==="totalPrice"){
                    totalPrice=params[1];
                }else{
                    ingredients[params[0]] = +params[1];
                }
                
            
            console.log(params[0], params[1]);

        }

        this.setState({ ingredients: ingredients,totalPrice:totalPrice });
        console.log(this.state.ingredients);
    }


    clickedcancledhandler = () => {
        this.props.history.goBack();
    }

    clickedcontinuehandler = () => {
        this.props.history.push('/Checkout/collect-data')
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                    clickedcancled={this.clickedcancledhandler}
                    clickedcontinue={this.clickedcontinuehandler} />
                <Route path={this.props.match.path + '/collect-data'} render={(props)=>(
                    <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}/>
                )} />
            </div>
        );
    }

};

export default Checkout;