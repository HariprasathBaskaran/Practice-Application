import { iceCreamInitialState } from "../InitialState";
import { BUY_ICECREAM } from "../Types";

export const IceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
