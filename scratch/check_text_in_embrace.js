// Let's inspect the dimensions and see if there is text in Golden Garden Embrace-200kb.jpeg
const fs = require('fs');
const size = fs.statSync('images/Golden Garden Embrace-200kb.jpeg').size;
console.log('Size:', size);
