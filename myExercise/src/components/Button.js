import React, { Component } from "react";
import styled from "styled-components";

export default class Button extends Component {
  render() {
    const Button = styled.button`
      background-color: yellow;
      border: 1px solid black;
      padding: 8px;
      color: black;
      cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
      :hover {
        background-color: blue;
      }
    `;

    return (
      <div>
        <h1>This is an example of a styled component</h1>
        <Button disabled={true}>Button</Button>
      </div>
    );
  }
}
