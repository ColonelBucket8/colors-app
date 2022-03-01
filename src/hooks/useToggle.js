import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const setToggle = () => setState(!state);
  return [state, setToggle];
};
