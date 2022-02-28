import React from "react";
import Palette from "./components/palette.component";
import seedColors from "./seedColors";

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[5]} />
      </div>
    );
  }
}

export default App;
