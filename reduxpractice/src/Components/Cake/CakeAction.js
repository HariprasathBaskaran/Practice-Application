import { BUY_CAKE } from "../Types";

function BuyCake(number = 1) {
  return {
    type: BUY_CAKE,
    payload: number,
  };
}

export default BuyCake;
