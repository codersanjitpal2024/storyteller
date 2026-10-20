const { execSync } = require('child_process');
const path = require('path');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outFile = path.resolve('scratch/screenshots/inspect-embrace.png');
const fileUrl = 'file:///' + path.resolve('scratch/inspect_view.html').replace(/\\/g, '/');
execSync(`"${edgePath}" --headless --disable-gpu --window-size=1200,600 --screenshot="${outFile}" "${fileUrl}"`, { stdio: 'ignore' });
console.log('Saved to', outFile);

// Copy to artifacts
const fs = require('fs');
const artDest = path.join('C:\\Users\\MSI 1\\.gemini\\antigravity\\brain\\36c29626-9a25-46b1-b3c1-ad0b9eddd1a9', 'inspect-embrace.png');
fs.copyFileSync(outFile, artDest);
console.log('Copied to artifacts');
