import React from "react";

export default function CompressedOutput({ compressedText }) {
  if (!compressedText) {
    return (
      <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
        Compressed binary string will appear here.
      </p>
    );
  }

  return (
    <p
      style={{
        wordWrap: "break-word",
        fontFamily: "monospace",
        background: "#f9fafb",
        padding: "10px",
        borderRadius: "6px",
      }}
    >
      {compressedText}
    </p>
  );
}
