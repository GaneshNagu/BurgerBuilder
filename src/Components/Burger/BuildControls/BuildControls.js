import React from "react";
import classes from "../BuildControls/BuildControls.css";
import BuildControl from "./buildControl/buildControl";

const controls = [
  { label: "Salad", type: "Salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Cheese", type: "Cheese" },
  { label: "Meat", type: "Meat" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Total price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientsadded(ctrl.type)}
          removed={() => props.igredientsremoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      );
    })}
    <button className={classes.OrderButton} disabled={!props.pruchasebut}>
      Order Now
    </button>
  </div>
);

export default BuildControls;
