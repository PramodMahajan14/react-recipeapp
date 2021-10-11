import {ActionTypes} from "../contants/dishaction-type";
export const setdishes = (dishes)=>{
  return{
      type:ActionTypes.SET_DISHES,
      payload:dishes,
  };  
};

export const selecteddishes = (dish)=>{
    return{
        type:ActionTypes.SELECTED_DISH,
        payload:dish,
    };  
  };