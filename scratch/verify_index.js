const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const openSections = (content.match(/<section[\s>]/gi) || []).length;
const closeSections = (content.match(/<\/section>/gi) || []).length;

const openDivs = (content.match(/<div[\s>]/gi) || []).length;
const closeDivs = (content.match(/<\/div>/gi) || []).length;

console.log(`Sections: <section> = ${openSections}, </section> = ${closeSections}`);
console.log(`Divs: <div> = ${openDivs}, </div> = ${closeDivs}`);

if (openSections !== closeSections || openDivs !== closeDivs) {
  console.error("Mismatch found!");
  process.exit(1);
} else {
  console.log("All tags are perfectly balanced!");
}
