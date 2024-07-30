import { combineReducers } from "redux";
import { cakeReducer } from "./Cake/CakeReducer";
import { IceCreamReducer } from "./IceCream/IceCreamReducer";

export const RootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
});
