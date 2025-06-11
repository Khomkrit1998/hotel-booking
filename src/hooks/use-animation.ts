import { useState, useRef, useEffect } from "react";

export function useAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = elementRef.current; // ✅ copy ref ไว้ในตัวแปร

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target); // ✅ ใช้ target ที่เก็บไว้
    };
  }, []);

  return [elementRef, isVisible] as const;
}
