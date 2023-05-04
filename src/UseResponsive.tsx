import { useEffect, useState } from "react";
import { useThrottle } from "./UseThrottle";

enum DevicesType {
  Mobile = "Mobile",
  Tablet = "Tablet",
  Laptop = "Laptop",
  Desktop = "Desktop"
}

export const useResponsive = () => {
  const [device, setDevice] = useState<DevicesType>(DevicesType.Mobile);
  const onResize = (e: any) => {
    const width = window.screen.width;
    console.log(width);
  };
  const throttledResize = useThrottle(onResize, 500);

  useEffect(() => {
    window.addEventListener("resize", throttledResize);

    return () => {
      document.removeEventListener("resize", throttledResize);
    };
  }, []);

  return device;
};
