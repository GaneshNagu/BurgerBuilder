import React, { Component } from "react";
import Auxillary from "../../Hoc/Auxillary";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
// import axios from "../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/actionTypes';
// import reducer from '../../Store/reducer';


class BurgerBuilder extends Component {
  state = {
    // totalPrice: 6.8,
    purchasebuton: false,
    purchased: false,
    Loading: false,
  };

  componentDidMount() {
    // axios
    //   .get("https://react-burgerbuilder-f1f12.firebaseio.com/ingredients.json")
    //   .then((Response) => {
    //     this.setState({ ingredients: Response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  updatepurchasablestate(ingredients) {
    let sum = null;
    for (let key in ingredients) {
      sum = sum + ingredients[key];
    }

    return sum > 0;
  }

  // addIngredientHandler = (type) => {
  //   const oldingredval = this.state.ingredients[type];
  //   const updateingredval = oldingredval + 1;
  //   const newIngredinets = { ...this.state.ingredients };
  //   newIngredinets[type] = updateingredval;

  //   const oldPrice = this.state.totalPrice;
  //   // console.log(typeof oldPrice);
  //   const priceAddition = INGREDIENTS_PRICE[type];
  //   // console.log("the priceaddition", typeof priceAddition);
  //   const newPriceVal = oldPrice + priceAddition;
  //   // console.log("the new price val", typeof newPriceVal);
  //   this.setState({ totalPrice: newPriceVal, ingredients: newIngredinets });
  //   // console.log("The Vallues of setstate", typeof this.state.totalPrice);
  //   this.updatepurchasablestate(newIngredinets);
  // };

  // removeIngredientHandler = (type) => {
  //   const oldingredval = this.state.ingredients[type];
  //   if (oldingredval <= 0) {
  //     return;
  //   }
  //   const updateingredval = oldingredval - 1;

  //   const newIngredinets = { ...this.state.ingredients };
  //   newIngredinets[type] = updateingredval;

  //   const oldPrice = this.state.totalPrice;
  //   const priceDelet = INGREDIENTS_PRICE[type];
  //   const newPriceVal = oldPrice - priceDelet;

  //   this.setState({ totalPrice: newPriceVal, ingredients: newIngredinets });
  //   this.updatepurchasablestate(newIngredinets);
  // };

  purchasedButon = () => {
    this.setState({ purchased: true });
  };

  backdropclickedHandler = () => {
    this.setState({ purchased: false });
  };

  continueboughtHandler = () => {

    const queryparams = [];
    for (let i in this.state.ingredients) {
      queryparams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
      console.log("The elements combines as ", queryparams);
    }
    queryparams.push('totalPrice=' + this.props.totalPrice);
    const queryString = queryparams.join("&");


    console.log(queryString);
    this.props.history.push({
      pathname: '/Checkout',
      Search: '?' + queryString
    })

  };

  render() {
    let orderSummary = null;
    let burger = <Spinner />;

    if (this.props.ing) {
      let disabledicons = {
        ...this.props.ing

      };

      for (let key in disabledicons) {
        disabledicons[key] = disabledicons[key] <= 0;
      }

      burger = (
        <Auxillary>
          <Burger ingredients={this.props.ing} />
          <BuildControls
            ingredientsadded={this.props.onIngredientsAdded}
            igredientsremoved={this.props.onIngredientsremoved}
            disabled={disabledicons}
            price={this.props.totalPrice}
            pruchasebut={this.updatepurchasablestate(this.props.ing)}
            clicked={this.purchasedButon}
          />
        </Auxillary>
      );
      orderSummary = (
        <OrderSummary
          show={this.state.purchased}
          ingredients={this.props.ing}
          butclicked={this.backdropclickedHandler}
          clickedcontinue={this.continueboughtHandler}
          price={this.props.totalPrice}
        />
      );
    }

    if (this.state.Loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Auxillary>
        <Modal
          show={this.state.purchased}
          backdropclosed={this.backdropclickedHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Auxillary>
    );
  }
}

const mapStateToProps = state => {
  // console.log("from state" + state.ingredients);
  return {
    ing: state.ingredients,
    totalPrice: state.totalPrice
  }
}

const mapDispatchToPorps = dispatch => {
  return {
    onIngredientsAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, IngredientName: ingName }),
    onIngredientsremoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, IngredientName: ingName })
  }
}

export default connect(mapStateToProps, mapDispatchToPorps)(BurgerBuilder);
