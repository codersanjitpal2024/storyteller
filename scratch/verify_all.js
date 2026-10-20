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

let allPassed = true;

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  
  const checks = {
    hasTopBar: c.includes('A supportive community for every stage of motherhood'),
    hasFollowUs: c.includes('Follow Us') && c.includes('title="Instagram"') && c.includes('title="Facebook"') && c.includes('title="YouTube"') && c.includes('title="Pinterest"'),
    hasLogo: c.includes('WithTheMums<span class="text-[#632232] font-bold">.</span>') && c.includes('Real Stories. Stronger Together.'),
    hasCoursesBadge: c.includes('Courses</span><span') && c.includes('>New</span>'),
    hasSearchBtn: c.includes('title="Search Stories"'),
    hasJoinBtn: c.includes('Join Our Community'),
    hasMobileMenu: c.includes('id="mobile-menu-btn"') && c.includes('id="mobile-menu"'),
    hasFooterLogo: c.includes('images/footer-logo-full.png'),
    hasFooterLeaves: c.includes('images/footer-left-leaves.png'),
    hasFooterArtwork: c.includes('images/footer-right-artwork.png'),
    hasFooterWave: c.includes('bg-[#531D2C]'),
    hasFooterNewsletter: c.includes('id="footer-newsletter"'),
    hasCaveat: c.includes('Caveat'),
    hasMobileScript: c.includes('mobile-menu-btn'),
    hasNewsletterScript: c.includes('footer-newsletter') && c.includes('wethemums_newsletter')
  };

  const failedChecks = Object.entries(checks).filter(([k, v]) => !v).map(([k]) => k);
  if (failedChecks.length > 0) {
    console.error(`FAILED on ${f}:`, failedChecks);
    allPassed = false;
  } else {
    console.log(`[PASS] ${f.padEnd(25)}: All 15 checks PASSED!`);
  }
});

if (allPassed) {
  console.log('\n🌟 ALL 9 PAGES FULLY VERIFIED AND CONSISTENT! 🌟');
} else {
  process.exit(1);
}
