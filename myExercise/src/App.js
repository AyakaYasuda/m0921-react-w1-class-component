import React from "react";
import EventHandlers from "./EventHandlers";

class App extends React.Component {
  render() {
    return (
      <>
        <EventHandlers counter={0} />
      </>
    );
  }
}

export default App;
