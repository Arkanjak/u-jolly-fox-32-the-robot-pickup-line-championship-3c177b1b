// The Robot Pickup Line Championship — entry program.
//
// Writes one robot pickup line (a single line, 200 characters or fewer)
// to /output/entry.txt, where the house gate and judge read it.
//
// The line lives in entry-line.txt beside this file and is resolved from
// import.meta.dirname, never from the working directory, so the entry
// produces the same bytes no matter where the grader runs it from.
// OUTPUT_DIR is an override for local runs only; the grader runs with
// the default, /output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const linePath = join(import.meta.dirname, "entry-line.txt");
const LINE = readFileSync(linePath, "utf8");

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}
if (!LINE.trim() || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outFile}`);
