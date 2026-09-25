import React, { useId, useState } from "react";

/**
 * Accessible accordion. `items` is an array of { id, title, content } where
 * `content` is a React node. One item is open at a time.
 */
function Accordion({ items, numbered = true }) {
  const [open, setOpen] = useState(null);
  const baseId = useId();

  return (
    <div className="oc-acc">
      {items.map((item, i) => {
        const key = item.id ?? i;
        const isOpen = open === key;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div
            className={`oc-acc__item ${isOpen ? "oc-acc__item--open" : ""}`}
            key={key}
          >
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                id={btnId}
                className="oc-acc__btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : key)}
              >
                {numbered && (
                  <span className="oc-acc__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <span className="oc-acc__label">{item.title}</span>
                <span className="oc-acc__icon" aria-hidden="true">
                  +
                </span>
              </button>
            </h3>
            <div
              className="oc-acc__panel"
              id={panelId}
              role="region"
              aria-labelledby={btnId}
            >
              <div className="oc-acc__panel-inner">
                <div className="oc-acc__body">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
