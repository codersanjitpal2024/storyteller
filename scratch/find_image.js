const fs = require('fs');
const path = require('path');

function searchDir(dir, targetName, maxDepth = 3, currentDepth = 0) {
  if (currentDepth > maxDepth || !fs.existsSync(dir)) return [];
  let results = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isFile()) {
        if (entry.name.toLowerCase().includes('golden') || entry.name.toLowerCase().includes('embrace')) {
          results.push(fullPath);
        }
      } else if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git') {
        results = results.concat(searchDir(fullPath, targetName, maxDepth, currentDepth + 1));
      }
    }
  } catch (e) {}
  return results;
}

const locations = [
  '.',
  'images',
  '..',
  'C:\\Users\\MSI 1\\.gemini\\antigravity\\brain\\36c29626-9a25-46b1-b3c1-ad0b9eddd1a9'
];

let allFound = [];
for (const loc of locations) {
  allFound = allFound.concat(searchDir(loc, 'Golden Garden Embrace-200kb.jpeg'));
}

console.log('Search results:', allFound);
