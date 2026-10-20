const fs = require('fs');

const files = [
  'index.html',
  'stories.html',
  'journal.html',
  'about.html',
  'brand-partnerships.html',
  'courses.html',
  'contact.html',
  'share-your-story.html',
  'story-detail.html'
];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  // Check header patterns
  const topBarMatch = c.match(/<!-- TOP BAR[\s\S]*?<\/header>/i) || c.match(/<div class="bg-berry[\s\S]*?<\/header>/i) || c.match(/<header[\s\S]*?<\/header>/i);
  // Check footer patterns
  const footerMatch = c.match(/<!-- =+ -->\s*<!-- SITE FOOTER[\s\S]*?<\/footer>/i) || c.match(/<footer[\s\S]*?<\/footer>/i);

  console.log(`${f.padEnd(25)} | Header match: ${topBarMatch ? topBarMatch[0].length : 'NONE'} | Footer match: ${footerMatch ? footerMatch[0].length : 'NONE'}`);
});
