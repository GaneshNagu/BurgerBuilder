import React, { Component } from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary';
import { Route } from 'react-router';
import ContactData from './ContactData/ContactData';
// import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


class Checkout extends Component {
   
    clickedcancledhandler = () => {
        this.props.history.goBack();
    }

    clickedcontinuehandler = () => {
        this.props.history.push('/Checkout/collect-data')
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.props.ing}
                    clickedcancled={this.clickedcancledhandler}
                    clickedcontinue={this.clickedcontinuehandler} />
                <Route path={this.props.match.path + '/collect-data'} 
                component={ContactData} />
            </div>
        );
    }

};

const mapStateToProps = state => {
    //  console.log("from state" + state.ingredients);
    return {
      ing: state.ingredients
      
    }
  }

export default connect(mapStateToProps) (Checkout);