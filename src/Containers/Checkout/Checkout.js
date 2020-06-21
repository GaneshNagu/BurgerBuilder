import React, { Component } from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary';
import { Route } from 'react-router';
import ContactData from './ContactData/ContactData';
// import { withRouter } from 'react-router-dom';


class Checkout extends Component {
    state = {
        ingredients: {
            Meat: 1,
            Cheese: 1,
            Salad: 1,
            Bacon: 1
        }
    }

    componentDidMount = () => {
        const query = new URLSearchParams(this.props.location.Search);
        console.log(this.props);
        const ingredients = {};

        for (let params of query.entries()) {

            ingredients[params[0]] = +params[1];
            console.log(params[0], params[1]);

        }

        this.setState({ ingredients: ingredients });
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
                <Route path={this.props.match.path + '/collect-data'} component={ContactData} />
            </div>
        );
    }

};

export default Checkout;