import React from "react";

function renderTree(node, edgeLabel = null) {
  if (!node) return null;
  const label =
    node.char !== null && node.char !== undefined
      ? `'${node.char}' (${node.freq})`
      : node.freq;

  return (
    <ul
      style={{
        listStyleType: "none",
        textAlign: "center",
        paddingLeft: 0,
      }}
    >
      <li
        style={{
          margin: "10px",
          position: "relative",
          display: "inline-block",
        }}
      >
        {edgeLabel !== null && (
          <div
            style={{
              position: "absolute",
              top: -18,
              left: "50%",
              transform: "translateX(-50%)",
              background: "#111827",
              color: "#f9fafb",
              borderRadius: "999px",
              padding: "2px 6px",
              fontSize: "0.7rem",
              fontWeight: 600,
            }}
          >
            {edgeLabel}
          </div>
        )}

        <div
          style={{
            display: "inline-block",
            padding: "8px 12px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            color: "white",
            fontWeight: "600",
            minWidth: "50px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          {label}
        </div>

        {node.left || node.right ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                margin: "0 20px",
                borderTop: "2px solid #888",
                width: "30px",
              }}
            ></div>
          </div>
        ) : null}

        {node.left || node.right ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ flex: 1 }}>{renderTree(node.left, "0")}</div>
            <div style={{ flex: 1 }}>{renderTree(node.right, "1")}</div>
          </div>
        ) : null}
      </li>
    </ul>
  );
}

export default function HuffmanTreeView({ tree }) {
  if (!tree) {
    return (
      <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
        Huffman tree will appear once you add some text.
      </p>
    );
  }

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "10px",
        background: "#f9fafb",
        overflowX: "auto",
      }}
    >
      {renderTree(tree)}
    </div>
  );
}
