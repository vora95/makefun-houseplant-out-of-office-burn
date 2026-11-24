// The Houseplant Out-of-Office — burn entry.
// Writes one out-of-office auto-reply (<=120 chars) in the voice of a fern
// that has been ignored since March, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The joke: the fern was never "in office" to begin with, it has not been
// watered since March, and it is thriving on the neglect — so do not rush back.
// Validated locally: 110 chars, 112 bytes, sha256
// 16d57729f2ad9380e1d212d4ab441c80cc14feac68a8dbd38f3f26e3049c9613, read-back OK.
// No puns ("leaf a message" and friends are the worn-out lines this judge
// penalises); the humour is the plant's attitude alone.
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const ENTRY =
  "Out of office: not watered since March, and honestly I'm thriving on the neglect. Don't rush back. — your fern";

// Validation: 1-120 chars, single line, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 120) throw new Error(`length ${ENTRY.length} out of 1-120`);
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back check: file on disk must be byte-identical to ENTRY.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) throw new Error("read-back mismatch");
if (back.endsWith("\n")) throw new Error("entry must not end with a newline");
const sha = createHash("sha256").update(back, "utf8").digest("hex");
console.log(`wrote ${ENTRY.length} chars, sha256 ${sha}, read-back OK`);
