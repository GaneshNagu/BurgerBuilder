import * as actionTypes from './action';


const initailState={
    ingredients: null,
    totalPrice: 6.8
}

const Reducer =(state=initailState,action)=>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENTS:
            return state;
        case actionTypes.REMOVE_INGREDIENTS:
            return state;
        default:
            return state
    }
       
    return state;

}

export default Reducer;

