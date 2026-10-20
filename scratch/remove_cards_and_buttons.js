const fs = require('fs');

const file = 'c:\\Users\\MSI 1\\Downloads\\Parenting\\index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove Card Bottom Row from Category 1
const card1BottomRegex = /\s*<!-- Card Bottom Row -->\s*<div\s+class="mt-5 pt-3\.5 border-t border-\[#F5ECE8\] flex items-center justify-between">[\s\S]*?14\.2k reads\s*<\/span>\s*<\/div>/;
if (!card1BottomRegex.test(content)) {
  console.error('Failed to find Card 1 bottom row');
} else {
  content = content.replace(card1BottomRegex, '');
  console.log('Removed Card 1 bottom row');
}

// 2. Remove Card Bottom Row from Category 2
const card2BottomRegex = /\s*<!-- Card Bottom Row -->\s*<div\s+class="mt-5 pt-3\.5 border-t border-\[#F5ECE8\] flex items-center justify-between">[\s\S]*?9\.8k reads\s*<\/span>\s*<\/div>/;
if (!card2BottomRegex.test(content)) {
  console.error('Failed to find Card 2 bottom row');
} else {
  content = content.replace(card2BottomRegex, '');
  console.log('Removed Card 2 bottom row');
}

// 3. Remove Card Bottom Row from Category 3
const card3BottomRegex = /\s*<!-- Card Bottom Row -->\s*<div\s+class="mt-5 pt-3\.5 border-t border-\[#F5ECE8\] flex items-center justify-between">[\s\S]*?11\.5k reads\s*<\/span>\s*<\/div>/;
if (!card3BottomRegex.test(content)) {
  console.error('Failed to find Card 3 bottom row');
} else {
  content = content.replace(card3BottomRegex, '');
  console.log('Removed Card 3 bottom row');
}

// 4. Remove Category 4, 5, 6
const cards456Regex = /\s*<!-- Category 4: Feeding & Family Living -->[\s\S]*?<!-- End 6 Cards Grid -->/;
// Wait, check how cards 4, 5, 6 end: before line 2029 (</div> for grid)
const cat4to6Regex = /\s*<!-- Category 4: Feeding & Family Living -->[\s\S]*?10\.9k reads\s*<\/span>\s*<\/div>\s*<\/div>\s*<\/div>/;
if (!cat4to6Regex.test(content)) {
  console.error('Failed to find Category 4 to 6 block');
} else {
  content = content.replace(cat4to6Regex, '');
  console.log('Removed Category 4, 5, and 6');
}

// Make card headers and titles clickable links in Card 1, 2, 3
content = content.replace(
  '<h3\n                    class="font-serif text-xl sm:text-[22px] font-normal text-[#221C1D] group-hover:text-[#862D42] transition-colors leading-snug"\n                  >\n                    Motherhood & Matrescence\n                  </h3>',
  '<h3\n                    class="font-serif text-xl sm:text-[22px] font-normal text-[#221C1D] group-hover:text-[#862D42] transition-colors leading-snug"\n                  >\n                    <a href="stories.html?category=motherhood" class="hover:text-[#862D42] transition-colors">\n                      Motherhood & Matrescence\n                    </a>\n                  </h3>'
);

content = content.replace(
  '<h3\n                    class="font-serif text-xl sm:text-[22px] font-normal text-[#221C1D] group-hover:text-[#862D42] transition-colors leading-snug"\n                  >\n                    Parenting Dynamics\n                  </h3>',
  '<h3\n                    class="font-serif text-xl sm:text-[22px] font-normal text-[#221C1D] group-hover:text-[#862D42] transition-colors leading-snug"\n                  >\n                    <a href="stories.html?category=parenting-and-guidance" class="hover:text-[#862D42] transition-colors">\n                      Parenting Dynamics\n                    </a>\n                  </h3>'
);

content = content.replace(
  '<h3\n                    class="font-serif text-xl sm:text-[22px] font-normal text-[#221C1D] group-hover:text-[#862D42] transition-colors leading-snug"\n                  >\n                    Pregnancy & Postpartum\n                  </h3>',
  '<h3\n                    class="font-serif text-xl sm:text-[22px] font-normal text-[#221C1D] group-hover:text-[#862D42] transition-colors leading-snug"\n                  >\n                    <a href="stories.html?category=pregnancy-and-birth" class="hover:text-[#862D42] transition-colors">\n                      Pregnancy & Postpartum\n                    </a>\n                  </h3>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('index.html updated successfully.');
