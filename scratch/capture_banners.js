const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const pages = [
  'stories.html',
  'journal.html',
  'about.html',
  'brand-partnerships.html',
  'courses.html',
  'contact.html',
  'share-your-story.html',
  'story-detail.html'
];

for (const p of pages) {
  const filePath = path.resolve(p);
  const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');
  const outFile = path.join(outDir, p.replace('.html', '-banner.png'));
  const cmd = `"${edgePath}" --headless --disable-gpu --window-size=1280,900 --screenshot="${outFile}" "${fileUrl}"`;
  console.log('Capturing', p, '...');
  try {
    execSync(cmd, { stdio: 'ignore' });
    if (fs.existsSync(outFile)) {
      console.log('Saved', outFile, '(' + (fs.statSync(outFile).size / 1024).toFixed(1) + ' KB)');
    }
  } catch (err) {
    console.error('Failed to capture', p, err.message);
  }
}
console.log('All screenshots captured!');
