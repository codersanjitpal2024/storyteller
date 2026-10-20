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

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  console.log(`\n=================== ${file} ===================`);
  const content = fs.readFileSync(file, 'utf8');
  
  // Find headings
  const headings = content.match(/<h[1-4][^>]*>[\s\S]*?<\/h[1-4]>/gi) || [];
  console.log(`Found ${headings.length} headings:`);
  headings.slice(0, 10).forEach(h => {
    const clean = h.replace(/\s+/g, ' ').slice(0, 120);
    console.log(`  - ${clean}`);
  });
}
