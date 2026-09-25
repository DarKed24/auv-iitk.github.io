import React, { useEffect, useRef } from "react";

/**
 * Fixed gradient progress bar driven by scroll position. With `showDepth`
 * (landing page) it also renders the thematic "depth" readout.
 */
function ScrollProgress({ showDepth = false }) {
  const barRef = useRef(null);
  const depthRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const p = max > 0 ? window.scrollY / max : 0;
        if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
        if (depthRef.current) {
          depthRef.current.textContent = `${Math.round(p * 1000)}m`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="lm-progress" aria-hidden="true">
        <span ref={barRef} className="lm-progress__bar" />
      </div>
      {showDepth && (
        <div className="lm-depth" aria-hidden="true">
          <span className="lm-depth__icon">🌊</span>
          <span ref={depthRef} className="lm-depth__value">
            0m
          </span>
          <span className="lm-depth__label">depth</span>
        </div>
      )}
    </>
  );
}

export default ScrollProgress;
