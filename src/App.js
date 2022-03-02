import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Palette from "./components/palette/palette.component";
import PaletteList from "./components/palette-list/palette-list.component";
import { generatePalette } from "./colorHelpers";

const App = () => {
  const palettes = useSelector((state) => state.palette.palettes);
  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };
  return (
    // <div>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <PaletteList palettes={palettes} />}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
    // </div>
    // <div>
    //   <Palette palette={generatePalette(palettes[1])} />
    // </div>
  );
};

export default App;
