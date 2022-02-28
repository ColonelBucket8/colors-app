import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPalette } from "./redux/palette/palette.slices";
import Palette from "./components/palette/palette.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPalette());
  });

  return (
    <div>
      <Palette />
    </div>
  );
};

export default App;
