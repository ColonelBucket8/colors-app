import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import IndividualPalette from "./pages/individual-palette/individual-palette.component";
import SingleColorPalette from "./pages/single-color-palette/single-color-palette.component";
import Homepage from "./pages/homepage/homepage.component";
import NewPaletteForm from "./pages/new-palette-form/new-palette-form.component";
import { generatePalette } from "./colorHelpers";

const App = () => {
  const palettes = useSelector((state) => state.palette.palettes);
  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };
  return (
    <Switch>
      <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
      <Route exact path="/" component={Homepage} />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <IndividualPalette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  );
};

export default App;
