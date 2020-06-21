import React, { Component } from "react";
import Auxillary from "../../Hoc/Auxillary";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";

const INGREDIENTS_PRICE = {
  Meat: 0.7,
  Cheese: 0.4,
  Salad: 0.4,
  Bacon: 1.3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 6.8,
    purchasebuton: false,
    purchased: false,
    Loading: false,
  };

  componentDidMount() {
    axios
      .get("https://react-burgerbuilder-f1f12.firebaseio.com/ingredients.json")
      .then((Response) => {
        this.setState({ ingredients: Response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updatepurchasablestate(ingredients) {
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

  continueboughtHandler = () => {
    // this.setState({
    //   Loading: true,
    // });
    // const orders = {
    //   ingredients: this.state.ingredients,
    //   totalPrice: this.state.totalPrice,
    //   customerdetails: {
    //     name: "nagu",
    //     address: {
    //       street: "TestNaga street",
    //       Zipcode: "89029929",
    //       country: "Italy",
    //     },
    //     email: "kajshdahsj@aslajdkjdakls.com",
    //   },
    //   Deliverymethod: "Normal",
    // };
    // axios
    //   .post("/order.json", orders)
    //   .then((Response) => {
    //     console.log(Response);
    //     this.setState({ Loading: false, purchased: false });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     this.setState({ Loading: false, purchased: false });
    //   });
    const queryparams = [];
    for (let i in this.state.ingredients) {
      queryparams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
      console.log("The elements combines as ", queryparams);
    }
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

    if (this.state.ingredients) {
      let disabledicons = {
        ...this.state.ingredients,
      };

      for (let key in disabledicons) {
        disabledicons[key] = disabledicons[key] <= 0;
      }

      burger = (
        <Auxillary>
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
      orderSummary = (
        <OrderSummary
          show={this.state.purchased}
          ingredients={this.state.ingredients}
          butclicked={this.backdropclickedHandler}
          clickedcontinue={this.continueboughtHandler}
          price={this.state.totalPrice}
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

export default BurgerBuilder;
