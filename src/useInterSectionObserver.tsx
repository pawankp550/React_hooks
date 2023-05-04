import { useEffect, useState } from "react";

export function InterObserver(ref: any) {
  const [visible, setVisible] = useState(false);
  const observer = new IntersectionObserver((ele) => {
    console.log(ele);
  });
  useEffect(() => {
    if (ref) {
      observer.observe(ref.current);
    }
  });
}
