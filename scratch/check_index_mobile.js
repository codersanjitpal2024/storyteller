const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const hero = html.substring(html.indexOf('id="hero-section"'), html.indexOf('</section>', html.indexOf('id="hero-section"')));
console.log('Mobile media queries or hidden classes in hero:');
const matches = hero.match(/class="[^"]*"/g) || [];
matches.forEach(m => {
  if (m.includes('sm:') || m.includes('md:') || m.includes('lg:') || m.includes('clamp')) {
    console.log(m);
  }
});
