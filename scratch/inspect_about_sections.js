const fs = require('fs');

const content = fs.readFileSync('about.html', 'utf8');
const sections = content.match(/<section[\s\S]*?<\/section>/gi) || [];
console.log(`Found ${sections.length} sections in about.html:`);
sections.forEach((sec, i) => {
  const h = sec.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/i);
  console.log(`Section ${i+1}: ${h ? h[1].replace(/\s+/g, ' ').trim().slice(0, 80) : 'no heading'}`);
});
