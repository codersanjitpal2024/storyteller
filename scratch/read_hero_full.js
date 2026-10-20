const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const heroStart = html.indexOf('id="hero-section"');
const heroEnd = html.indexOf('</section>', heroStart);
console.log(html.substring(heroStart, heroEnd + 10));
