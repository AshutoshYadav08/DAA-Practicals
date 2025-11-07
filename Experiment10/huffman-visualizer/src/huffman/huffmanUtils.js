/**
 * Core Huffman helper functions
 */

export function buildFrequencyMap(text) {
  const freq = new Map();
  for (const ch of text) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
  return freq;
}

export function buildHuffmanTree(freqMap) {
  const nodes = [];
  for (const [char, freq] of freqMap.entries()) {
    nodes.push({ char, freq, left: null, right: null });
  }
  if (nodes.length === 0) return null;
  if (nodes.length === 1) {
    const only = nodes[0];
    return { char: null, freq: only.freq, left: only, right: null };
  }
  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);
    const left = nodes.shift();
    const right = nodes.shift();
    const parent = { char: null, freq: left.freq + right.freq, left, right };
    nodes.push(parent);
  }
  return nodes[0];
}

export function buildCodes(root) {
  const codes = {};
  const dfs = (node, prefix) => {
    if (!node) return;
    if (node.char !== null && node.char !== undefined) {
      codes[node.char] = prefix || "0";
      return;
    }
    dfs(node.left, prefix + "0");
    dfs(node.right, prefix + "1");
  };
  dfs(root, "");
  return codes;
}

export function computeCompressionStats(text, compressedBitsLength) {
  const originalBits = text.length * 8;
  const compressedBits = compressedBitsLength;
  const ratio = originalBits ? compressedBits / originalBits : 0;
  return { originalBits, compressedBits, ratio };
}
