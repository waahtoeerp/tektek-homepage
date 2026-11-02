// Combines config/*.json into public/config.json, the one file the page reads.
// Run after changing anything in config/:  node scripts/build-config.js
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const read = (name) => JSON.parse(fs.readFileSync(path.join(root, "config", `${name}.json`), "utf8"));

const config = { theme: read("theme"), texts: read("texts"), pages: read("pages") };
fs.writeFileSync(path.join(root, "public", "config.json"), JSON.stringify(config, null, 2) + "\n");
console.log("wrote public/config.json");
