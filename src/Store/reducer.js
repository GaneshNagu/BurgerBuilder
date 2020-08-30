import * as actionTypes from './actionTypes';
// import { stat } from 'fs-extra';

const initialState = {
    ingredients: {
        Salad: 0,
        Bacon: 0,
        Meat: 0,
        Cheese: 0

    },
    totalPrice: 6.8
}

const INGREDIENTS_PRICE = {
    Meat: 0.7,
    Cheese: 0.4,
    Salad: 0.4,
    Bacon: 1.3,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            // console.log(action.ingredientName);
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.IngredientName]: state.ingredients[action.IngredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.IngredientName]

            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.IngredientName]: state.ingredients[action.IngredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.IngredientName]
            }
        default:
            return state
    }
}

export default reducer;