const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const footerMatch = indexHtml.match(/<!-- =+ -->\s*<!-- SITE FOOTER \(100% MATCH TO REFERENCE\)[\s\S]*?<\/footer>/);

if (!footerMatch) {
  console.error('Could not find new footer in index.html');
  process.exit(1);
}

const newFooter = footerMatch[0];
console.log('Found new footer block, length:', newFooter.length);

const otherPages = [
  'about.html',
  'brand-partnerships.html',
  'contact.html',
  'journal.html',
  'share-your-story.html',
  'stories.html',
  'story-detail.html'
];

otherPages.forEach(page => {
  if (!fs.existsSync(page)) return;
  let pageContent = fs.readFileSync(page, 'utf8');
  
  // Look for any existing footer block
  const oldFooterRegex = /(<!-- =+ -->\s*<!-- SITE FOOTER[\s\S]*?<\/footer>|<footer[\s\S]*?<\/footer>)/;
  if (oldFooterRegex.test(pageContent)) {
    pageContent = pageContent.replace(oldFooterRegex, newFooter);
    fs.writeFileSync(page, pageContent, 'utf8');
    console.log(`Updated footer in ${page}`);
  } else {
    console.warn(`No footer found in ${page}`);
  }
});

console.log('All pages synchronized!');
