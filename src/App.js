import Palette from "./Palette";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>palette list goes here</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>individual palette</h1>}
        />
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
