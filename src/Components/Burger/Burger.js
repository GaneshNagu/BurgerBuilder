import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css";

const Burger = (props) => {

  let transformedingredients = Object.keys(props.ingredients)
    .map((product) => {
      return [...Array(props.ingredients[product])].map((_, times) => {
        return <BurgerIngredient type={product} key={product + times} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log("from burgerjs" + transformedingredients);

  if (transformedingredients.length === 0) {
    transformedingredients = <p>please start adding the ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
