import { useCallback, useRef } from "react";

export function useThrottle(fn: any, delay: number) {
  const timeOutId = useRef<NodeJS.Timeout | null>(null);
  const latestArgs = useRef<any>(null);

  const throttledFn = useCallback(
    function (...args: any) {
      if (!timeOutId.current) {
        timeOutId.current = setTimeout(() => {
          if (latestArgs.current) {
            fn(...latestArgs.current);
            latestArgs.current = null;
          } else {
            fn(...args);
          }
          timeOutId.current = null;
        }, delay);
      } else {
        latestArgs.current = args;
      }
    },
    [fn, delay]
  );
  return throttledFn;
}
