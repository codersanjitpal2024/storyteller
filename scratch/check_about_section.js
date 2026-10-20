const fs = require('fs');
const html = fs.readFileSync('about.html', 'utf8');
const mainIdx = html.indexOf('<main');
const nextSection = html.indexOf('<!-- MISSION STATEMENT', mainIdx);
console.log(html.substring(mainIdx, nextSection));
