import { useCallback, useRef } from "react";

export const UseDebounce = (fn: any, delay: number) => {
  const timeOutId = useRef<NodeJS.Timeout | null>(null);

  const executeWithDelay = useCallback(
    (...args: any) => {
      if (timeOutId.current) {
        clearTimeout(timeOutId.current);
      }
      timeOutId.current = setTimeout(() => {
        fn(...args);
        timeOutId.current = null;
      }, delay);
    },
    [fn, delay]
  );

  return executeWithDelay;
};
