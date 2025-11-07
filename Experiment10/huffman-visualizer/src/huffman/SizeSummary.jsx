import React from "react";

export default function SizeSummary({ stats }) {
  if (!stats || !stats.originalBits) {
    return (
      <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
        Size comparison will appear after compression.
      </p>
    );
  }

  const { originalBits, compressedBits, ratio } = stats;

  return (
    <>
      <p>
        Original size: <strong>{originalBits}</strong> bits
      </p>
      <p>
        Compressed size: <strong>{compressedBits}</strong> bits
      </p>
      <p>
        Compression ratio: <strong>{(ratio * 100).toFixed(2)}%</strong>
      </p>
      <p>
        Space saved: <strong>{((1 - ratio) * 100).toFixed(2)}%</strong>
      </p>
    </>
  );
}
