import { mkdirSync, writeFileSync } from "node:fs";

const confession = "I dropped the climax so you'd finally look at me instead of the screen.";

if (confession.length < 1 || confession.length > 200) {
  throw new Error(`entry length out of range: ${confession.length}`);
}
if (confession.includes("\n") || confession.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (confession.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", confession, "utf8");
