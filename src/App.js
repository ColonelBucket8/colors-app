import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPalette } from "./redux/palette/palette.actions";
import Palette from "./components/palette/palette.component";

const App = () => {
  const dispatch = useDispatch();
  const handleSetCurrentPalette = () => dispatch(setCurrentPalette());

  useEffect(() => {
    handleSetCurrentPalette();
  });

  return (
    <div>
      <Palette />
    </div>
  );
};

export default App;
