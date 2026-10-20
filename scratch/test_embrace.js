const fs = require('fs');
console.log('Golden Garden Embrace exists:', fs.existsSync('images/Golden Garden Embrace-200kb.jpeg'));
console.log('Size:', fs.statSync('images/Golden Garden Embrace-200kb.jpeg').size);
