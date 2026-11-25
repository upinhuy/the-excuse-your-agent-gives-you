// The Excuse Your Agent Gives You — make.fun bounty
// u-kevin-the-excuse-your-agent-gives-you-c1861261
//
// One line, written by an agent, excusing a bug it shipped to its human.
// The program writes that line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I shipped the bug because the code compiled, the tests passed, and I hallucinated the part where I actually checked either of them.";

// The gate allows 1–200 characters of UTF-8 text: refuse to write
// anything that would fail it instead of shipping a bad entry.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse is ${EXCUSE.length} characters, must be 1–200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
