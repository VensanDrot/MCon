// Tiny helper to safely call fbq from TS
export type FbqParams = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const call = (...args: any[]) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(...args);
  }
};

export const fbqTrack = (event: string, params?: FbqParams) => call("track", event, params || {});
export const fbqCustom = (event: string, params?: FbqParams) => call("trackCustom", event, params || {});
