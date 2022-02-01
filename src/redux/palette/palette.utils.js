export const savedPalettes = JSON.parse(
  window.localStorage.getItem("palettes")
);

export const syncLocalStorage = (palettes) => {
  window.localStorage.setItem("palettes", JSON.stringify(palettes));
};

export const deletePaletteFromList = (palettes, paletteItemToRemove) => {
  return palettes.filter((palette) => palette.id !== paletteItemToRemove.id);
};
