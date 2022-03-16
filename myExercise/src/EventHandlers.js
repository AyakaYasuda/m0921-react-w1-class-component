import React from "react";

class EventHandlers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      counter: props.counter,
    };

    // this.handleUpdateCounter = this.handleUpdateCounter.bind(this);
  }
  // to use this syntax, binding will be required
  // handleUpdateCounter() {
  //   this.setState({ counter: this.state.counter + 1 });

  // another option is to make the function an arrow function
  handleUpdateCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  // componentDidUpdate() {
  //   console.log(this.state.counter);
  // }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(() => ({
        date: new Date(),
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <>
        <div>Current Counter: {this.state.counter}</div>
        <button onClick={this.handleUpdateCounter}>Count Up</button>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </>
    );
  }
}
export default EventHandlers;
