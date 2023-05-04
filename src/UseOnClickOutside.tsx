import { useEffect } from "react";

export function UseOnClickOutside(ref: any, cb: any) {
  const onDocClick = (e: Event) => {
    console.log(e.target);
    if (
      !(
        e.target === ref.current ||
        Array.from(ref.current.children).includes(e.target)
      )
    ) {
      cb();
    }
  };

  useEffect(() => {
    if (ref) {
      document.addEventListener("click", onDocClick);
    }
    return () => {
      document.removeEventListener("click", onDocClick);
    };
  }, [ref]);
}
