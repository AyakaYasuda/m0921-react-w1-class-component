import React, { Component } from "react";
import LookLeft from "../assets/look-left.jpeg";
import LookRight from "../assets/look-right.jpeg";

class ChallengeOne extends Component {
  //declare the state here
  state = {
    direction: "",
  };

  //click left/right button handler goes here
  lookLeftHandler = () => {
    this.setState(() => ({
      direction: "left",
    }));
  };

  lookRightHandler = () => {
    this.setState(() => ({
      direction: "right",
    }));
  };

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          {this.state.direction === "right" ? (
            <img className="ch1" src={LookRight} alt="look right image" />
          ) : (
            <img className="ch1" src={LookLeft} alt="look left image" />
          )}
        </div>
        <button className="btn" onClick={this.lookLeftHandler}>
          ⭠
        </button>
        <button className="btn" onClick={this.lookRightHandler}>
          ⭢
        </button>
      </>
    );
  }
}

export default ChallengeOne;
