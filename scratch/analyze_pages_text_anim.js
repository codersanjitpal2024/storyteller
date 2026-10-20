const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'about.html',
  'brand-partnerships.html',
  'contact.html',
  'courses.html',
  'journal.html',
  'share-your-story.html',
  'stories.html',
  'story-detail.html',
  'editorial-dashboard.html'
];

console.log('File'.padEnd(25) + 'GSAP '.padEnd(6) + 'ST '.padEnd(6) + 'Engine '.padEnd(8) + 'H1 '.padEnd(4) + 'H2 '.padEnd(4) + 'H3 '.padEnd(4) + 'RL '.padEnd(5) + 'RF '.padEnd(5));
console.log('-'.repeat(65));

for (const f of files) {
  if (!fs.existsSync(f)) continue;
  const txt = fs.readFileSync(f, 'utf8');
  const gsap = txt.includes('gsap.min.js') ? 'YES' : 'NO';
  const st = txt.includes('ScrollTrigger.min.js') ? 'YES' : 'NO';
  const engine = txt.includes('splitIntoWords') ? 'YES' : 'NO';
  const h1 = (txt.match(/<h1[\s>]/gi) || []).length;
  const h2 = (txt.match(/<h2[\s>]/gi) || []).length;
  const h3 = (txt.match(/<h3[\s>]/gi) || []).length;
  const rl = (txt.match(/reveal-lines/g) || []).length;
  const rf = (txt.match(/reveal-fade/g) || []).length;
  console.log(f.padEnd(25) + gsap.padEnd(6) + st.padEnd(6) + engine.padEnd(8) + String(h1).padEnd(4) + String(h2).padEnd(4) + String(h3).padEnd(4) + String(rl).padEnd(5) + String(rf).padEnd(5));
}
