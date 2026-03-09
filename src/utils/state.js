import { normalizeHexColor } from "./color";
import { layerDefaults } from "./layers";

export function createDefaultDesignerState() {
  return {
    quantity: 1,
    englishColor: normalizeHexColor(layerDefaults[2].color),
    layers: layerDefaults.map((layer) => ({ ...layer })),
  };
}

export function normalizeDesignerState(input) {
  const defaults = createDefaultDesignerState();
  const nextState = input && typeof input === "object" ? input : {};
  const quantity = Math.max(1, Number.parseInt(nextState.quantity, 10) || 1);
  const englishColor = normalizeHexColor(nextState.englishColor || defaults.englishColor);
  const incomingLayers = Array.isArray(nextState.layers) ? nextState.layers : [];

  const layers = defaults.layers.map((layer) => {
    const incoming = incomingLayers.find((entry) => entry.id === layer.id) ?? {};
    const merged = {
      ...layer,
      ...incoming,
      x: Number.isFinite(Number(incoming.x)) ? Number(incoming.x) : layer.x,
      y: Number.isFinite(Number(incoming.y)) ? Number(incoming.y) : layer.y,
      size: Number.isFinite(Number(incoming.size)) ? Number(incoming.size) : layer.size,
    };

    if (merged.language === "english") {
      merged.color = normalizeHexColor(incoming.color || englishColor);
    }

    return merged;
  });

  return {
    quantity,
    englishColor,
    layers,
  };
}

export function serializeDesignerState(state) {
  return {
    quantity: state.quantity,
    englishColor: state.englishColor,
    layers: state.layers.map((layer) => ({
      id: layer.id,
      name: layer.name,
      x: layer.x,
      y: layer.y,
      size: layer.size,
      ...(layer.language === "english" ? { color: layer.color } : {}),
    })),
  };
}
