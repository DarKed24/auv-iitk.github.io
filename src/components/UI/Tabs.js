import React, { useId, useState } from "react";

/**
 * Accessible pill tabs. `tabs` is an array of { key, label, content }.
 */
function Tabs({ tabs, defaultKey }) {
  const [active, setActive] = useState(defaultKey || tabs[0]?.key);
  const baseId = useId();

  const onKeyDown = (e, idx) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = (idx + dir + tabs.length) % tabs.length;
    setActive(tabs[next].key);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <>
      <div className="oc-tabs" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            className="oc-tab"
            aria-selected={active === t.key}
            aria-controls={`${baseId}-panel-${i}`}
            tabIndex={active === t.key ? 0 : -1}
            onClick={() => setActive(t.key)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.key}
          role="tabpanel"
          id={`${baseId}-panel-${i}`}
          aria-labelledby={`${baseId}-tab-${i}`}
          className="oc-tabpanel"
          hidden={active !== t.key}
        >
          {active === t.key && t.content}
        </div>
      ))}
    </>
  );
}

export default Tabs;
