import  * as actionTypes from './actionTypes';
import axios from 'axios';

export const addIngredient =(name)=>{
    return{
        type:actionTypes.ADD_INGREDIENT,
        IngredientName:name
    }
}

export const setIngredients=(ingredients)=>{
    return{
        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients
    }
}


export const initIngredients=()=>{
    return dispatch=>{
        axios
        .get("https://react-burgerbuilder-f1f12.firebaseio.com/ingredients.json")
        .then((Response) => {
          dispatch(setIngredients(Response.data))
          console.log(Response.data)
        })
        .catch((error) => {
         dispatch(setIngredientsFailed());
        //  console.log("error raised");
        });
    }
}

export const setIngredientsFailed=()=>{
    return{
        type:actionTypes.SET_INGREDIENTS_FAILED
    }
}




export const removeIngredient =(name)=>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        IngredientName:name
    }
}