import * as actionTypes from '../actions/actionTypes';
// import { stat } from 'fs-extra';

const initialState = {
    ingredients: null,
    totalPrice: 6.8,
    error:false
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
            console.log(action.ingredientName);
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
            case actionTypes.SET_INGREDIENTS:
                return {
                    ...state,
                    ingredients:{
                        Salad: action.ingredients.Salad,
                        Bacon: action.ingredients.Bacon,
                        Cheese: action.ingredients.Cheese,
                        Meat: action.ingredients.Meat
                    },
                    error:false
                }
                case actionTypes.SET_INGREDIENTS_FAILED:
                    return {
                     ...state,
                     error:true
                    }    
        default:
            return state
    }
}

export default reducer;