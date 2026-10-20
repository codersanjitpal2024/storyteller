const fs = require('fs');

const pages = [
  'about.html',
  'brand-partnerships.html',
  'contact.html',
  'courses.html',
  'editorial-dashboard.html',
  'journal.html',
  'share-your-story.html',
  'stories.html',
  'story-detail.html'
];

for (const p of pages) {
  if (!fs.existsSync(p)) continue;
  const content = fs.readFileSync(p, 'utf8');
  console.log('=== ' + p + ' ===');
  console.log('GSAP script: ' + content.includes('gsap.min.js'));
  console.log('ScrollTrigger script: ' + content.includes('ScrollTrigger.min.js'));
  console.log('CSS .reveal-lines: ' + content.includes('.reveal-lines .word'));
  console.log('CSS .reveal-fade: ' + content.includes('.reveal-fade'));
  console.log('Engine splitIntoWords: ' + content.includes('splitIntoWords'));
  console.log('ScrollTrigger.create count: ' + (content.match(/ScrollTrigger\.create/g) || []).length);
}
