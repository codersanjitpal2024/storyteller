const fs = require('fs');
const src = 'C:/Users/MSI 1/.gemini/antigravity/brain/36c29626-9a25-46b1-b3c1-ad0b9eddd1a9/.user_uploaded/media_1792478809747_b44b97d2.png';
const dest = 'images/about-hero-banner.png';
fs.copyFileSync(src, dest);
console.log('Copied to', dest, fs.statSync(dest).size, 'bytes');
