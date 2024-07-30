import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BuyCake from "../Cake/CakeAction";

function HookCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Number of Cakes-{numOfCakes}</p>
      <button onClick={() => dispatch(BuyCake())}>Buy cake</button>
    </div>
  );
}

export default HookCakeContainer;
