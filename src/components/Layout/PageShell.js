import React, { useEffect } from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import ScrollProgress from "./ScrollProgress";
import Ambient from "./Ambient";

/**
 * Common chrome for every inner page: ocean background, scroll progress,
 * fixed glass navbar, ambient glow and the <main> landmark.
 *
 * `title` sets document.title for the page.
 */
function PageShell({ title, className = "", children }) {
  useEffect(() => {
    const base = "Team AUV-IITK";
    document.title = title ? `${title} · ${base}` : base;
    return () => {
      document.title = base;
    };
  }, [title]);

  return (
    <div className={`ocean-page ${className}`}>
      <ScrollProgress />
      <ExamplesNavbar />
      <Ambient />
      <main className="oc-main">{children}</main>
    </div>
  );
}

export default PageShell;
