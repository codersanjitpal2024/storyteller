const { execSync } = require('child_process');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const html = `<!DOCTYPE html>
<html>
<body>
<img id="img" src="images/Golden Garden Embrace-200kb.jpeg">
<canvas id="cvs"></canvas>
<script>
window.onload = function() {
  const img = document.getElementById('img');
  const cvs = document.getElementById('cvs');
  cvs.width = img.naturalWidth;
  cvs.height = img.naturalHeight;
  const ctx = cvs.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  // Let's sample pixel at x=200, y=120 (where "Every parenting journey" is)
  // And let's sample 100 pixels in a grid
  let texts = [];
  for (let x = 100; x < 500; x += 20) {
    for (let y = 80; y < 250; y += 20) {
      const p = ctx.getImageData(x, y, 1, 1).data;
      if (p[0] < 80 && p[1] < 80 && p[2] < 80) {
        texts.push({x, y, r: p[0], g: p[1], b: p[2]});
      }
    }
  }
  document.body.setAttribute('data-dark-count', texts.length);
  console.log('DARK_COUNT:' + texts.length);
};
</script>
</body>
</html>`;

const fs = require('fs');
fs.writeFileSync('scratch/pixel_check.html', html, 'utf8');
const fileUrl = 'file:///' + require('path').resolve('scratch/pixel_check.html').replace(/\\/g, '/');
const res = execSync(`"${edgePath}" --headless --dump-dom "${fileUrl}"`).toString();
console.log('Match data-dark-count:', res.match(/data-dark-count="(\d+)"/));
