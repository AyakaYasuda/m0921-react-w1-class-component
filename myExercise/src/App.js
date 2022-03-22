import React from "react";
import EventHandlers from "./components/EventHandlers";
import Forms from "./components/Forms";
import StyleAttribute from "./components/StyleAttribute";
import Button from "./components/Button";
import ContextAPI from "./components/ContextAPI";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <EventHandlers counter={0} /> */}
        {/* <Forms /> */}
        {/* <StyleAttribute itemId="hoge" /> */}
        {/* <Button /> */}
        <ContextAPI />
      </>
    );
  }
}

export default App;
