import { CookieCard } from "./CookieCard";

export function CookiePreviewGrid({ cookies }) {
  return (
    <div className="grid min-w-0 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 print:grid-cols-2">
      {cookies.map((cookie) => (
        <CookieCard key={cookie.id} cookie={cookie} />
      ))}
    </div>
  );
}
