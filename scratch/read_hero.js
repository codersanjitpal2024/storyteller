const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const heroStart = html.indexOf('id="hero-section"');
console.log(html.substring(heroStart - 50, heroStart + 2000));
