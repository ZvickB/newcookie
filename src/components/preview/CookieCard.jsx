import tefillinImage from "../../assets/tefillin-pic.jpg";
import { getLayerStyle } from "../../utils/styles";

export function CookieCard({ cookie }) {
  return (
    <article className="mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-full border border-stone-200 bg-white shadow-soft print:shadow-none">
      <div className="relative h-full w-full">
        <img
          src={tefillinImage}
          alt="Cookie design preview"
          className="h-full w-full object-cover"
        />
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
