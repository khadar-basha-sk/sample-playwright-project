// Test data reader loads JSON fixtures from src/data with one reusable helper.
const fs = require('fs');
const path = require('path');

function readJsonData(fileName) {
  const filePath = path.resolve(process.cwd(), 'src', 'data', fileName);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

module.exports = { readJsonData };
