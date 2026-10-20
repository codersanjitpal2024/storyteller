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
  
  // Sample average color at left (x=100), center (x=750), right (x=1200)
  function getAvg(startX, width) {
    const d = ctx.getImageData(startX, 100, width, 200).data;
    let r=0, g=0, b=0, count = d.length / 4;
    for (let i=0; i<d.length; i+=4) {
      r += d[i]; g += d[i+1]; b += d[i+2];
    }
    return Math.round(r/count) + ',' + Math.round(g/count) + ',' + Math.round(b/count);
  }
  document.body.setAttribute('data-left', getAvg(50, 200));
  document.body.setAttribute('data-mid', getAvg(650, 200));
  document.body.setAttribute('data-right', getAvg(1100, 200));
};
</script>
</body>
</html>`;

const fs = require('fs');
fs.writeFileSync('scratch/avg_color.html', html, 'utf8');
const fileUrl = 'file:///' + require('path').resolve('scratch/avg_color.html').replace(/\\/g, '/');
const res = execSync(`"${edgePath}" --headless --dump-dom "${fileUrl}"`).toString();
console.log('Colors:', res.match(/data-left="([^"]+)".*data-mid="([^"]+)".*data-right="([^"]+)"/));
