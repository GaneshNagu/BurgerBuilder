import * as actionTypes from './actionTypes';

const initialState = {
    ingredients: {
        Salad: 0,
        Bacon: 0,
        Meat: 0,
        Cheese: 0

    },
    totalPrice: 6.8
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            // console.log(action.ingredientName);
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.IngredientName]: state.ingredients[action.IngredientName] + 1
                }

            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.IngredientName]: state.ingredients[action.IngredientName] - 1
                }
            }
        default:
            return state
    }
}

export default reducer;