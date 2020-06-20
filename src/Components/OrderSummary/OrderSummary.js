import React from "react";
import Auxillary from "../../Hoc/Auxillary";
import Button from "../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((igkey, index) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>
          {igkey} : {props.ingredients[igkey]}
        </span>
      </li>
    );
  });

  return (
    <Auxillary>
      <h3>Order Summary</h3>
      <p>your Order will be created with the Following ingredients</p>
      <ul>{ingredients}</ul>
      <p>
        <strong>Total price is : {props.price.toFixed(2)}</strong>
      </p>
      <p> Do you want to checkout ?</p>
      <Button butclicked={props.butclicked} btnType="Danger">
        CANCEL
      </Button>
      <Button butclicked={props.clickedcontinue} btnType="Success">
        CONTINUE
      </Button>
    </Auxillary>
  );
};

export default OrderSummary;
