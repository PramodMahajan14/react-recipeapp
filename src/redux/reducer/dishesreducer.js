import { ActionTypes} from "../contants/dishaction-type";
const inlitialState={
    dishes:[],
};
export const dishReducers =(state=inlitialState,{type,payload})=>{
    switch (type){
        case ActionTypes.SET_DISHES:
            return {...state,dishes:payload};
        default:
            return state;    
    }
};

export const selecteddishReducers = (state={},{type,payload})=>{
    switch (type){
        case ActionTypes.SELECTED_DISH:
            return {...state,...payload};
        default:
            return state;    
    }
};
//https://api.edamam.com/search?&app_id=6285f990&app_key=9c46c80cc55cef69db9476a4619e7464&q=Dinner%20Rolls%20with%20Chive%20Butter