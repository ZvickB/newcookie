export function buildCookieCopies(layers, quantity) {
  return Array.from({ length: quantity }, (_, index) => ({
    id: `cookie-${index + 1}`,
    layers,
  }));
}
