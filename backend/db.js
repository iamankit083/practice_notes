const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "pastes.json");

if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, JSON.stringify([]));
}

const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

const writeDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

module.exports = { readDB, writeDB };
