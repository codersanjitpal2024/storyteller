const fs = require('fs');
const stat1 = fs.statSync('images/Golden Garden Embrace-200kb.jpeg');
console.log('Golden Garden Embrace size:', stat1.size);
