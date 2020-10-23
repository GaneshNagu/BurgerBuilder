import * as actionTypes from './actionTypes';
import axios from 'axios';

export const burgerPurchaseSuccess=(id,orderData)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        id:id,
        orderData:orderData
    }
}


export const burgerPurchaseFail=(error)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}

export const purchaseBurgerStart=(orderData)=>{
    return dispatch=>{
        axios
        .post("/order.json", orders)
        .then((Response) => {
          console.log(Response);
          dispatch(burgerPurchaseSuccess(Response.data,orderData))
          
        })
        .catch((error) => {
          console.log(error);
          dispatch(burgerPurchaseFail(error))
          
        });
  
    }

}