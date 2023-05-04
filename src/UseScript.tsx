import { useEffect, useState } from "react";

export function UseScript(src) {
  const [scriptState, setScriptState] = useState("pending");

  useEffect(() => {
    console.log("useEffect");
    const script = document.querySelector(`[src="${src}"]`);
    if (script) {
      setScriptState("loaded");
    } else {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.setAttribute("data-status", "loading");

      script.onload = () => {
        script.setAttribute("data-status", "loaded");
        setScriptState("loaded");
      };

      script.onerror = () => {
        script.setAttribute("data-status", "error");
        setScriptState("error");
      };

      document.head.append(script);
    }
  }, []);

  return scriptState;
}
