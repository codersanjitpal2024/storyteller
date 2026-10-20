const fs = require('fs');
const path = require('path');
const artDir = 'C:\\Users\\MSI 1\\.gemini\\antigravity\\brain\\36c29626-9a25-46b1-b3c1-ad0b9eddd1a9';
fs.copyFileSync('images/Golden Garden Embrace-200kb.jpeg', path.join(artDir, 'golden-embrace-inspect.jpeg'));
console.log('Copied to artifacts for inspection');
