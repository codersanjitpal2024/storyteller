const fs = require('fs');
const size = fs.statSync('scratch/screenshots/test-about-banner.png').size;
console.log('Size of rendered screenshot:', size);
