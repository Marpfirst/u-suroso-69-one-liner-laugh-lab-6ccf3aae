import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The sock entered my mouth voluntarily. I have the suction logs to prove it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
