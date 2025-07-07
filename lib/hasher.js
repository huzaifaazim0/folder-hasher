const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { globby } = require("globby");

async function hashFolder(targetDir, extensions = []) {
  const resolvedDir = path.resolve(targetDir);
  const pattern = extensions.length > 0
    ? `**/*.{${extensions.join(",")}}`
    : "**/*";

  const files = await globby(pattern, {
    cwd: resolvedDir,
    absolute: true,
    onlyFiles: true,
    gitignore: true
  });

  const hash = crypto.createHash("sha256");

  for (const file of files.sort()) {
    const relPath = path.relative(resolvedDir, file);
    const content = fs.readFileSync(file);
    hash.update(relPath); // Include filename and path
    hash.update(content); // Include content
  }

  return hash.digest("hex");
}

module.exports = hashFolder;
