import { useState } from "react";

export const useToggle = (initialState) => {
  const [state, setState] = useState(initialState);

  const setToggle = () => setState(!state);
  return [state, setToggle];
};
