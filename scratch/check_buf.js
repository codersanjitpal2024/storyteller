const fs = require('fs');
const buf = fs.readFileSync('images/Golden Garden Embrace-200kb.jpeg');
// Search for text strings in exif/markers if any
console.log('File size:', buf.length);
