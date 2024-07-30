import React, { Component } from "react";
import BuyCake from "../Cake/CakeAction";
import { connect } from "react-redux";

class CakeContainer extends Component {
  render() {
    return (
      <div>
        <p>Number of Cakes-{this.props.numOfCakes}</p>
        <button onClick={this.props.buyCake}>Buy cakes</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(BuyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
