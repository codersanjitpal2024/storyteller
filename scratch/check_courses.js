const fs = require('fs');
const c = fs.readFileSync('index.html', 'utf8');
const m = c.match(/parenting-courses-section[\s\S]*?<\/section>/);
if (m) {
  console.log(m[0].match(/href="[^"]*"/g));
}
