export const deletePaletteFromList = (palettes, paletteItemToRemove) => {
  return palettes.filter((palette) => palette.id !== paletteItemToRemove.id);
};

export const findPalette = (palettes, id) => {
  return palettes.find((palette) => palette.id === id);
};
