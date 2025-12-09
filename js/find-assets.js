const fs = require("fs");
const path = require("path");

const exts = [".jpg", ".jpeg", ".png", ".svg", ".webp", ".gif", ".mp4", ".mov"];

function scan(dir, results = new Set()) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      scan(full, results);
    } else {
      const data = fs.readFileSync(full, "utf-8");
      for (const ext of exts) {
        const regex = new RegExp(`[^"'()\\s]+\\${ext}`, "gi");
        const matches = data.match(regex);
        if (matches) matches.forEach((m) => results.add(m));
      }
    }
  }
  return results;
}

const found = scan("./");
console.log("\n🔥 ALL ASSETS FOUND 🔥\n");
found.forEach((f) => console.log(f));
console.log("\nTotal Assets:", found.size);
