import React from "react";
import Auxillary from "../../Hoc/Auxillary";

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
      <p> Do you want to checkout ?</p>
    </Auxillary>
  );
};

export default OrderSummary;
