const CSS_URL = "https://assets.calendly.com/assets/external/widget.css";
const JS_URL = "https://assets.calendly.com/assets/external/widget.js";

type CalendlyApi = { initPopupWidget: (opts: { url: string }) => void };

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

let scriptPromise: Promise<void> | null = null;

function ensureStylesheet() {
  if (document.querySelector(`link[href="${CSS_URL}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CSS_URL;
  document.head.appendChild(link);
}

function loadScript(): Promise<void> {
  if (window.Calendly) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = JS_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Calendly widget"));
    document.head.appendChild(script);
  });

  return scriptPromise;
}

/**
 * Opens the Calendly scheduler as an overlay on top of the current page so the
 * visitor never leaves the site — after booking they close the overlay and are
 * exactly where they were. Widget assets are lazy-loaded on first use.
 *
 * Returns true if the popup was (or will be) handled so callers can preventDefault
 * on the link. If the assets fail to load it falls back to opening Calendly in a
 * new tab, which still keeps the current site open behind it.
 */
export function openCalendly(url: string): boolean {
  if (typeof window === "undefined") return false;

  ensureStylesheet();

  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url });
    return true;
  }

  loadScript()
    .then(() => window.Calendly?.initPopupWidget({ url }))
    .catch(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    });

  return true;
}
