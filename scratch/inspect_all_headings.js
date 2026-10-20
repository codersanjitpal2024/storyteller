const fs = require('fs');

const files = [
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

for (const f of files) {
  if (!fs.existsSync(f)) continue;
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n=============================================`);
  console.log(`PAGE: ${f}`);
  console.log(`=============================================`);
  
  // Find all h1, h2, h3 and check their classes
  const headingRegex = /<(h[1-3])([^>]*)>([\s\S]*?)<\/\1>/gi;
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const tag = match[1];
    const attrs = match[2];
    const text = match[3].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 60);
    const hasRL = attrs.includes('reveal-lines');
    const hasRF = attrs.includes('reveal-fade');
    console.log(`[${tag.toUpperCase()}] RL:${hasRL} RF:${hasRF} | Text: "${text}"`);
  }
}
