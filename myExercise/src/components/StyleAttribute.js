import React, { Component } from "react";
import classNames from "classnames";
import "./StyleAttribute.css"

export default class StyleAttribute extends Component {
  state = {
    selectedItem: "hoge",
  };

  render() {
    return (
      <div
        className={classNames("item", {
          "item-selected": this.state.selectedItem === this.props.itemId,
        })}
      >
        Selecting CSS classes based on conditions
      </div>
    );
  }
}
