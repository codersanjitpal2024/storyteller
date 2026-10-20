const { execSync } = require('child_process');
const fs = require('fs');

const possiblePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
];

let browserPath = null;
for (const p of possiblePaths) {
  if (fs.existsSync(p)) {
    browserPath = p;
    break;
  }
}
console.log('Found browser:', browserPath);
