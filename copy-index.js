const fs = require("fs");
const path = require("path");

const buildPath = path.join(__dirname, "build");
const indexPath = path.join(buildPath, "index.html");
const notFoundPath = path.join(buildPath, "404.html");

fs.copyFileSync(indexPath, notFoundPath);

console.log("Created build/404.html");