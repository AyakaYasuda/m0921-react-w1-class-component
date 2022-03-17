import React, { Component } from "react";

export default class Forms extends React.Component {
  state = {
    text: "",
    textarea: "",
    checkbox: false,
    singleSelect: "",
    multipleSelect: [],
  };

  changeValue = e => {
    const { value, name } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  };

  changeCheckbox = e => {
    const { checked, name } = e.target;
    this.setState(() => ({
      [name]: checked,
    }));
  };

  changeSelect = ({ target: { name, value, multiple, selectedOptions } }) => {
    //   const { name, value, multiple, selectedOptions } = e.target
    if (multiple) {
      value = Array.from(selectedOptions).map(option => option.value);
      console.log(value);
    }

    this.setState(() => ({
      [name]: value,
    }));
  };

  //   submitHandler = () => {};

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>

          <label>Text</label>
          <br />
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.changeValue}
          />
          <br />

          <label>Text Area</label>
          <br />
          <input
            name="textarea"
            value={this.state.textarea}
            onChange={this.changeValue}
          />
          <br />

          <label>Checkbox</label>
          <br />
          <input
            type="checkbox"
            name="checkbox"
            value={this.state.checkbox}
            onChange={this.changeCheckbox}
          />
          <br />

          <label>Single Select</label>
          <br />
          <select
            name="singleSelect"
            value={this.state.singleSelect}
            onChange={this.changeSelect}
          >
            <option value="">Please Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
          <br />

          <label>Multiple Select</label>
          <br />
          <select
            name="multipleSelect"
            value={this.state.multipleSelect}
            onChange={this.changeSelect}
            multiple
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </select>
          <br />
        </form>
      </div>
    );
  }
}
