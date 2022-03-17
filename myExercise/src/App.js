import React from "react";
import EventHandlers from "./components/EventHandlers";
import Forms from "./components/Forms";
import StyleAttribute from "./components/StyleAttribute";
import Button from "./components/Button";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <EventHandlers counter={0} /> */}
        {/* <Forms /> */}
        {/* <StyleAttribute itemId="hoge" /> */}
        <Button />
      </>
    );
  }
}

export default App;
