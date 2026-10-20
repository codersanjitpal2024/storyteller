const fs = require('fs');

const testFooterHtml = fs.readFileSync('scratch/test-footer-page.html', 'utf8');
const footerMatch = testFooterHtml.match(/<!-- =+ -->\s*<!-- SITE FOOTER[\s\S]*?<\/footer>/);
const universalFooter = footerMatch[0];

const pageConfigs = [
  { file: 'index.html', active: 'home' },
  { file: 'stories.html', active: 'stories' },
  { file: 'journal.html', active: 'resources' },
  { file: 'about.html', active: 'about' },
  { file: 'brand-partnerships.html', active: 'events' },
  { file: 'courses.html', active: 'courses' },
  { file: 'contact.html', active: 'contact' },
  { file: 'share-your-story.html', active: 'none' },
  { file: 'story-detail.html', active: 'stories' }
];

pageConfigs.forEach(({ file, active }) => {
  const content = fs.readFileSync(file, 'utf8');

  // Header indices
  let headerStart = content.search(/<!-- (?:TOP BAR|TOP ANNOUNCEMENT BAR)/i);
  if (headerStart === -1) {
    headerStart = content.indexOf('<header');
  }
  const headerEnd = content.indexOf('</header>') + 9;

  // Footer indices
  const footerStart = content.search(/(<!-- =+ -->\s*<!-- SITE FOOTER|<footer)/i);
  const footerEnd = content.indexOf('</footer>') + 9;

  console.log(`${file.padEnd(25)} | Header: [${headerStart}, ${headerEnd}] (${headerEnd - headerStart} chars) | Footer: [${footerStart}, ${footerEnd}] (${footerEnd - footerStart} chars)`);
});
