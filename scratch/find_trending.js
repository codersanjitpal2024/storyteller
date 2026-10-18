const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\MSI 1\\.gemini\\antigravity\\brain\\4157ab86-96f0-4da9-9b9a-6fac62268c72\\.system_generated\\steps\\1345\\content.md', 'utf8');

const regex = /trending|reel|video|watch|youtube|shorts|instagram/gi;
let match;
const matches = [];

while ((match = regex.exec(content)) !== null) {
  matches.push({ word: match[0], index: match.index });
}

console.log('Matches found:', matches.length);
matches.forEach(m => {
  const snippet = content.substring(Math.max(0, m.index - 80), Math.min(content.length, m.index + 200)).replace(/\s+/g, ' ');
  if (snippet.toLowerCase().includes('trending') || snippet.toLowerCase().includes('video')) {
    console.log(`[${m.word} @ ${m.index}]: ${snippet}`);
  }
});
