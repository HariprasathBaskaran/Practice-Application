import React, { Component } from "react";
import BuyIceCream from "../IceCream/IceCreamAction";
import { connect } from "react-redux";

class IceCreamContainer extends Component {
  render() {
    return (
      <div>
        <p>Number of IceCream-{this.props.numOfIceCreams}</p>
        <button onClick={this.props.buyIceCream}>Buy IceCream</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(BuyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
