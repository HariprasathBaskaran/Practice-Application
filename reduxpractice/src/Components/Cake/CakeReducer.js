import { cakeInitialState } from "../InitialState";
import { BUY_CAKE } from "../Types";

export const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};
