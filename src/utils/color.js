export const DEFAULT_COLOR = "#0000ff";

export function isValidHexColor(value) {
  return /^#[0-9A-Fa-f]{6}$/.test(value);
}

export function normalizeHexColor(value = "") {
  const trimmed = value.trim();
  if (!trimmed) {
    return DEFAULT_COLOR;
  }

  const prefixed = trimmed.startsWith("#") ? trimmed : `#${trimmed}`;
  return isValidHexColor(prefixed) ? prefixed : DEFAULT_COLOR;
}
