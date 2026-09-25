import React from "react";

/**
 * Renders a plain string with lightweight `**bold**` markup as React nodes.
 * Used by the data-driven vehicle pages so content can stay in data files.
 */
export function inline(text) {
  if (typeof text !== "string") return text;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

/* Resolves an image path relative to src/assets/img at build time. */
export function img(path) {
  return require(`assets/img/${path}`);
}

const FIG_SIZE = { sm: "oc-figure--sm", md: "", lg: "oc-figure--lg" };

/**
 * Renders an array of content blocks:
 *   { type: "p",   text }
 *   { type: "h",   text }
 *   { type: "ol" | "ul", items: [text] }
 *   { type: "img", src, caption, size: "sm" | "md" | "lg" }
 * `src` is resolved relative to `imgDir` (inside assets/img).
 */
function RichText({ blocks = [], imgDir = "" }) {
  return (
    <div className="oc-rich">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h":
            return <h4 key={i}>{inline(b.text)}</h4>;
          case "ol":
          case "ul": {
            const Tag = b.type;
            return (
              <Tag key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </Tag>
            );
          }
          case "img":
            if (!b.src) return null;
            return (
              <figure key={i} className={`oc-figure ${FIG_SIZE[b.size] || ""}`}>
                <img
                  src={img(imgDir ? `${imgDir}/${b.src}` : b.src)}
                  alt={b.caption || ""}
                  loading="lazy"
                />
                {b.caption && <figcaption>{b.caption}</figcaption>}
              </figure>
            );
          case "p":
          default:
            return (
              <p key={i} className="lm-body">
                {inline(b.text)}
              </p>
            );
        }
      })}
    </div>
  );
}

export default RichText;
