import { cn } from "../../utils/cn";

export function Select({ className, ...props }) {
  return (
    <select
      className={cn(
        "flex h-11 w-full rounded-xl border border-input bg-white/90 px-3 py-2 text-sm text-foreground shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    />
  );
}
