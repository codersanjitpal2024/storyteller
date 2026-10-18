const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// 1. Add opacity: 0 to custom-cursor-dot and custom-cursor-ring
content = content.replace(
`      .custom-cursor-dot {
        position: fixed;`,
`      .custom-cursor-dot {
        opacity: 0;
        position: fixed;`
);

content = content.replace(
`      .custom-cursor-ring {
        position: fixed;`,
`      .custom-cursor-ring {
        opacity: 0;
        position: fixed;`
);

// 2. Reveal cursor on first mousemove
content = content.replace(
`          (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (cursorDot) {
              cursorDot.style.left = mouseX + "px";
              cursorDot.style.top = mouseY + "px";
            }
          },`,
`          (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (cursorDot) {
              cursorDot.style.opacity = "1";
              cursorDot.style.left = mouseX + "px";
              cursorDot.style.top = mouseY + "px";
            }
            if (cursorRing) {
              cursorRing.style.opacity = "1";
            }
          },`
);

// 3. Update Category 3 Pregnancy photo to genuine glowing maternity bump photo
content = content.replace(
  'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=800&q=80'
);

// 4. Update Category 4 Feeding photo to joyful baby mealtime in high chair
content = content.replace(
  'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80'
);

fs.writeFileSync(indexPath, content, 'utf8');
console.log('Successfully applied refinements to index.html!');
