import React from "react";
import { Link } from "react-router-dom";
import PageShell from "components/Layout/PageShell";

function NotFound() {
  return (
    <PageShell title="Page not found">
      <section className="oc-empty">
        <div>
          <p className="oc-empty__code lm-grad">404</p>
          <h1 className="oc-empty__title">Lost in the deep</h1>
          <p className="lm-body" style={{ maxWidth: "46rem", margin: "0 auto 3rem" }}>
            The page you are looking for has drifted away. Surface back to the
            home page or explore the fleet instead.
          </p>
          <div className="lm-cta__actions">
            <Link to="/landing-page" className="lp-btn lp-btn--primary">
              <span>Back to Surface</span>
            </Link>
            <Link to="/vehicles/atal" className="lp-btn lp-btn--ghost">
              <span>Explore the Fleet</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default NotFound;
