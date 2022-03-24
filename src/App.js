import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { setPalettes } from "./redux/palette/palette.slices";
import { db } from "./firebase/firebase.utils";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import IndividualPalette from "./pages/individual-palette/individual-palette.component";
import SingleColorPalette from "./pages/single-color-palette/single-color-palette.component";
import Homepage from "./pages/homepage/homepage.component";
import NewPaletteForm from "./pages/new-palette-form/new-palette-form.component";
import { generatePalette } from "./colorHelpers";

const App = () => {
  const palettes = useSelector((state) => state.palette.palettes);
  const dispatch = useDispatch();
  useEffect(() => {
    const q = query(collection(db, "palettes", orderBy("timestamp", "desc")));
    onSnapshot(q, (snapshot) => {
      dispatch(
        setPalettes(
          snapshot.docs.map((doc) => ({
            docID: doc.id,
            ...doc.data(),
          }))
        )
      );
    });
  });
  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

  return (
    <Switch>
      <ErrorBoundary>
        <Route exact path="/palette/new" component={NewPaletteForm} />
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
      </ErrorBoundary>
    </Switch>
  );
};

export default App;
