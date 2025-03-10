import { useEffect } from "react";

export function useEffectDelay(
  callback: () => void,
  deps: any[] = [],
  delay: number = 160
) {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(timer);
  }, deps);
}
