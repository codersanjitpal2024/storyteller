const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outFile = path.resolve('scratch/screenshots/about-embrace-final.png');
const fileUrl = 'file:///' + path.resolve('about.html').replace(/\\/g, '/');

const cmd = `"${edgePath}" --headless --disable-gpu --window-size=1280,850 --screenshot="${outFile}" "${fileUrl}"`;
console.log('Capturing about.html screenshot with Golden Garden Embrace...');
execSync(cmd, { stdio: 'ignore' });

if (fs.existsSync(outFile)) {
  console.log('Saved screenshot:', outFile, '(' + (fs.statSync(outFile).size / 1024).toFixed(1) + ' KB)');
  // Copy to artifacts directory
  const artDest = path.join('C:\\Users\\MSI 1\\.gemini\\antigravity\\brain\\36c29626-9a25-46b1-b3c1-ad0b9eddd1a9', 'about-embrace-final.png');
  fs.copyFileSync(outFile, artDest);
  console.log('Copied to artifacts:', artDest);
}
