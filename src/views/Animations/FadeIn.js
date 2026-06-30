import React from "react";
// eslint-disable-next-line no-unused-vars
import fadeIn from "./FadeIn.css";

/**
 * Scroll-reveal wrapper.
 *
 * Props:
 *   direction - "up" | "down" | "left" | "right" | "zoom"  (default "up")
 *   delay     - ms before the reveal transition starts (stagger helper)
 *   once      - if true (default) the element stays revealed after it first
 *               enters the viewport instead of re-hiding on scroll-away.
 */
export default function FadeInSection({
  children,
  direction = "up",
  delay = 0,
  once = true,
}) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const node = domRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, [once]);

  return (
    <div
      className={`fade-in-section reveal-${direction} ${
        isVisible ? "is-visible" : ""
      }`}
      ref={domRef}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
