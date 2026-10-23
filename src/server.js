const path = require("node:path");
const fs = require("node:fs");
const express = require("express");

const ROOT = path.join(__dirname, "..");

function readConfig(name) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, "config", `${name}.json`), "utf8"));
}

const app = express();
app.use(express.static(path.join(ROOT, "public")));

app.get("/api/config", (req, res) => {
  res.json({
    theme: readConfig("theme"),
    texts: readConfig("texts"),
    pages: readConfig("pages"),
  });
});

const pages = readConfig("pages");
for (const page of Object.values(pages)) {
  app.get(page.path, (req, res) => {
    res.sendFile(path.join(ROOT, "public", page.file));
  });
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Tek Tek Oy website running at http://localhost:${port}`);
});
