import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
// import Addition from "./Addition";


const reducers= combineReducers({
    cart: cartReducer
})
export default reducers;