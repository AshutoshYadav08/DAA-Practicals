import React from "react";

export default function FrequencyTable({ rows }) {
  if (!rows?.length) {
    return (
      <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
        Frequency table will appear once you add some text.
      </p>
    );
  }

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr style={{ background: "#f3f4f6" }}>
          <th
            style={{
              textAlign: "left",
              padding: "8px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            Char
          </th>
          <th
            style={{
              textAlign: "left",
              padding: "8px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            Frequency
          </th>
          <th
            style={{
              textAlign: "left",
              padding: "8px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            Code
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}>
            <td style={{ padding: "8px" }}>{row.char}</td>
            <td style={{ padding: "8px" }}>{row.freq}</td>
            <td
              style={{
                padding: "8px",
                fontFamily: "monospace",
              }}
            >
              {row.code}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
