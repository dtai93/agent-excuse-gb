// Excuse an agent gives its human for a missed deadline. Printed as entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Late update: ready at 14:02. One comma lost to your last hundred commas, so I no longer trust commas.";

const chars = [...LINE].length;
if (chars < 1 || chars > 160 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-160 non-blank characters, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
