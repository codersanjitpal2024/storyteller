const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const trackStart = content.indexOf('id="reels-track"');
const trackEnd = content.indexOf('<!-- Bottom Follow Bar', trackStart);
const chunk = content.slice(trackStart, trackEnd);

const aMatches = chunk.match(/<a\s/gi) || [];
console.log('Cards count in reels-track:', aMatches.length);
console.log('Divs opened in chunk:', (chunk.match(/<div(\s|>)/gi) || []).length);
console.log('Divs closed in chunk:', (chunk.match(/<\/div>/gi) || []).length);
