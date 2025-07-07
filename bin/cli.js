#!/usr/bin/env node

const minimist = require("minimist");
const hashFolder = require("../lib/hasher");

const args = minimist(process.argv.slice(2), {
  string: ["ext", "path"],
  alias: { p: "path", e: "ext" },
  default: { path: ".", ext: "" }
});

const extensions = args.ext ? args.ext.split(",") : [];

hashFolder(args.path, extensions)
  .then((digest) => {
    console.log(digest);
  })
  .catch((err) => {
    console.error("❌ Error:", err.message);
    process.exit(1);
  });
