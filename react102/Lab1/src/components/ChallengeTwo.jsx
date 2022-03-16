import React, { Component } from "react";

const studentList = [
  "Randall Malfoy",
  "Kvothe Black",
  "Chun Zorander",
  "Leomund Ridcully",
  "Rary Stibbons",
  "Gandalf Dresden",
  "Zeddicus Doom",
];

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    studentList: [],
  };

  //a lifecycle method will execute when the page has loaded (this will only run once)
  componentDidMount() {
    this.setState(() => ({
      studentList: studentList,
    }));
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    const randomStudentList = this.state.studentList.sort(
      () => Math.random() - 0.5
    );
    this.setState(() => ({
      studentList: randomStudentList,
    }));
  };

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {this.state.studentList.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
        </div>
        <button className="btn large" onClick={this.randomize}>
          Randomize
        </button>
      </>
    );
  }
}
