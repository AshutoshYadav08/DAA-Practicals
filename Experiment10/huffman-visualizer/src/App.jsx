import React, { useState, useMemo } from "react";
import {
  buildFrequencyMap,
  buildHuffmanTree,
  buildCodes,
  computeCompressionStats,
} from "./huffman/huffmanUtils";
import FrequencyTable from "./huffman/FrequencyTable";
import CompressedOutput from "./huffman/CompressedOutput";
import SizeSummary from "./huffman/SizeSummary";
import HuffmanTreeView from "./huffman/HuffmanTreeView";

export default function App() {
  const [inputText, setInputText] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setInputText(String(ev.target.result || ""));
    reader.readAsText(file);
  };

  const { freqArray, compressedText, stats, tree } = useMemo(() => {
    if (!inputText) {
      return {
        freqArray: [],
        compressedText: "",
        stats: {},
        tree: null,
      };
    }

    const freqMap = buildFrequencyMap(inputText);
    const tree = buildHuffmanTree(freqMap);
    const codes = tree ? buildCodes(tree) : {};

    let compressed = "";
    for (const ch of inputText) {
      compressed += codes[ch] || "";
    }

    const stats = computeCompressionStats(inputText, compressed.length);

    const freqArray = Array.from(freqMap.entries()).map(([char, freq]) => ({
      char: char === " " ? "␣" : char,
      freq,
      code: codes[char] || "",
    }));

    return {
      freqArray,
      compressedText: compressed,
      stats,
      tree,
    };
  }, [inputText]);

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        padding: "2rem",
        background: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "#111827",
          marginBottom: "1rem",
        }}
      >
        Huffman Coding Visualizer
      </h1>

      <section
        style={{
          background: "white",
          borderRadius: "10px",
          padding: "1rem",
          marginBottom: "1rem",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            marginBottom: "0.5rem",
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: "0.25rem",
          }}
        >
          Input
        </h2>
        <textarea
          rows={6}
          placeholder="Enter or paste text here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "1rem",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            fontFamily: "monospace",
          }}
        />
        <input
          type="file"
          accept=".txt"
          onChange={handleFileChange}
          style={{ marginBottom: "0.5rem" }}
        />
        <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>
          Uploading a file will replace the current text.
        </p>
      </section>

      {inputText && (
        <>
          <section
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                marginBottom: "0.5rem",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "0.25rem",
              }}
            >
              Frequency Table
            </h2>
            <FrequencyTable rows={freqArray} />
          </section>

          <section
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                marginBottom: "0.5rem",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "0.25rem",
              }}
            >
              Compressed Output
            </h2>
            <CompressedOutput compressedText={compressedText} />
          </section>

          <section
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                marginBottom: "0.5rem",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "0.25rem",
              }}
            >
              Size Comparison
            </h2>
            <SizeSummary stats={stats} />
          </section>

          <section
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "1rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                marginBottom: "0.5rem",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "0.25rem",
              }}
            >
              Huffman Tree
            </h2>
            <HuffmanTreeView tree={tree} />
          </section>
        </>
      )}
    </div>
  );
}
