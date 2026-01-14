import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

let lenisInstance = null;

export const getLenis = () => lenisInstance;

export default function SmoothScroll({ children }) {
  useEffect(() => {
    lenisInstance = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      wheelMultiplier: 0.8,
    });

    const raf = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, []);

  return children;
}
