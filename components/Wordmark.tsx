// components/Wordmark.tsx — typographic wordmark (presentational, usable in any tree).

export function Wordmark({
  size = "md",
  inverse = false,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  inverse?: boolean;
}) {
  const cl = "wm wm--" + size + (inverse ? " wm--inv" : "");
  return (
    <span className={cl} aria-label="The Skin Sanctuary Co">
      <span className="wm__eb">THE</span>
      <span className="wm__main">Skin Sanctuary</span>
      <span className="wm__eb">— CO. —</span>
    </span>
  );
}
