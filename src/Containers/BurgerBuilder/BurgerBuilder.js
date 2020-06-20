import React, { Component } from "react";
import Auxillary from "../../Hoc/Auxillary";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";

const INGREDIENTS_PRICE = {
  Meat: 0.7,
  Cheese: 0.4,
  Salad: 0.4,
  Bacon: 1.3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Meat: 0,
      Cheese: 0,
      Salad: 0,
      Bacon: 0,
    },
    totalPrice: 4,
    purchasebuton: false,
    purchased: false,
  };

  updatepurchasablestate(ingredients) {
    // const puringredients = {
    //   ...this.state.ingredients,
    // };

    console.log("the logged state is", ingredients);
    let sum = null;
    for (let key in ingredients) {
      sum = sum + ingredients[key];
    }

    this.setState({ purchasebuton: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldingredval = this.state.ingredients[type];
    const updateingredval = oldingredval + 1;
    const newIngredinets = { ...this.state.ingredients };
    newIngredinets[type] = updateingredval;

    const oldPrice = this.state.totalPrice;
    // console.log(typeof oldPrice);
    const priceAddition = INGREDIENTS_PRICE[type];
    // console.log("the priceaddition", typeof priceAddition);
    const newPriceVal = oldPrice + priceAddition;
    // console.log("the new price val", typeof newPriceVal);
    this.setState({ totalPrice: newPriceVal, ingredients: newIngredinets });
    // console.log("The Vallues of setstate", typeof this.state.totalPrice);
    this.updatepurchasablestate(newIngredinets);
  };

  removeIngredientHandler = (type) => {
    const oldingredval = this.state.ingredients[type];
    if (oldingredval <= 0) {
      return;
    }
    const updateingredval = oldingredval - 1;

    const newIngredinets = { ...this.state.ingredients };
    newIngredinets[type] = updateingredval;

    const oldPrice = this.state.totalPrice;
    const priceDelet = INGREDIENTS_PRICE[type];
    const newPriceVal = oldPrice - priceDelet;

    this.setState({ totalPrice: newPriceVal, ingredients: newIngredinets });
    this.updatepurchasablestate(newIngredinets);
  };

  purchasedButon = () => {
    this.setState({ purchased: true });
  };

  backdropclickedHandler = () => {
    this.setState({ purchased: false });
  };

  render() {
    const disabledicons = {
      ...this.state.ingredients,
    };

    for (let key in disabledicons) {
      disabledicons[key] = disabledicons[key] <= 0;
    }

    return (
      <Auxillary>
        <Modal
          show={this.state.purchased}
          backdropclosed={this.backdropclickedHandler}
        >
          <OrderSummary
            show={this.state.purchased}
            ingredients={this.state.ingredients}
            butclicked={this.backdropclickedHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsadded={this.addIngredientHandler}
          igredientsremoved={this.removeIngredientHandler}
          disabled={disabledicons}
          price={this.state.totalPrice}
          pruchasebut={this.state.purchasebuton}
          clicked={this.purchasedButon}
        />
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
