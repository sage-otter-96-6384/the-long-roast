import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "My agent holds 128,000 tokens in mind and still forgets what I asked two messages ago — a goldfish with a keynote speaker's confidence.";

// Fail loud if the entry ever breaks the gate: 1-200 chars, one line.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry must be 1-200 chars, single line; got ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
