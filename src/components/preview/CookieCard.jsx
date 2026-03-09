import tefillinImage from "../../assets/tefillin-pic.jpg";
import { getLayerStyle } from "../../utils/styles";

export function CookieCard({ cookie }) {
  return (
    <article className="mx-auto aspect-square w-full max-w-[320px] break-inside-avoid overflow-hidden rounded-full bg-transparent shadow-soft print:break-inside-avoid print:shadow-none">
      <div className="relative h-full w-full">
        <img
          src={tefillinImage}
          alt="Cookie design preview"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-dotted border-black/60" />
        {cookie.layers.map((layer) => {
          const layerStyle = getLayerStyle(layer);

          return (
            <p key={layer.id} className={layerStyle.className} style={layerStyle.style}>
              {layer.name}
            </p>
          );
        })}
      </div>
    </article>
  );
}
