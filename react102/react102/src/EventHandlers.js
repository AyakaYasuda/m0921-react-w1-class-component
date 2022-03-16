import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };

    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleSubmit = (event) => {
      event.preventDefault()
      console.log('Clicked Submit')
      this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <input type="text" onChange={this.handleChange} /> */}
          <button type="submit">Submit</button>
        </form>
        <p>Number of times the button was pressed: {this.state.counter}</p>
      </div>
    );
  }
}
