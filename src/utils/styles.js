export function getLayerStyle(layer) {
  return {
    className: layer.baseClassName,
    style: {
      fontSize: `${layer.size}px`,
      color: layer.color,
      transform: `translate(${layer.x}px, ${layer.y}px) ${layer.skew}`,
      textShadow: layer.textShadow,
      margin: 0,
      lineHeight: 1,
      whiteSpace: "pre-wrap",
    },
  };
}
