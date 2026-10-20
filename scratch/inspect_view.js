// Let's create an HTML test page to view the image
const fs = require('fs');
const html = `<!DOCTYPE html>
<html>
<head>
  <title>Inspect</title>
</head>
<body style="margin:0; background:#FAF4EF;">
  <img src="images/Golden Garden Embrace-200kb.jpeg" style="max-width:100%; height:auto;" />
</body>
</html>`;
fs.writeFileSync('scratch/inspect_view.html', html, 'utf8');

const { execSync } = require('child_process');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
execSync(`"${edgePath}" --headless --disable-gpu --window-size=1200,600 --screenshot="scratch/screenshots/inspect-embrace.png" "file:///${require('path').resolve('scratch/inspect_view.html').replace(/\\\\/g, '/')}"`);
console.log('Screenshot of image taken');
