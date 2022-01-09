import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import "./App.css";
import { render } from "@testing-library/react";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
