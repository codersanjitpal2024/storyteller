const fs = require('fs');

function getHeaderHtml(activePage) {
  const linkClass = (page) => {
    if (page === activePage) {
      return 'text-[#632232] font-semibold border-b-2 border-[#632232] pb-1';
    }
    return 'hover:text-[#632232] transition-colors';
  };

  const mobileLinkClass = (page) => {
    if (page === activePage) {
      return 'text-[#632232] font-semibold py-1.5 px-2 bg-[#632232]/5 rounded-md';
    }
    return 'text-[#2D2926] hover:text-[#632232] py-1.5 px-2';
  };

  const coursesLinkClass = (page) => {
    if (page === activePage) {
      return 'text-[#632232] font-semibold border-b-2 border-[#632232] pb-1 inline-flex items-center gap-1.5 font-medium';
    }
    return 'hover:text-[#632232] transition-colors inline-flex items-center gap-1.5 font-medium';
  };

  const mobileCoursesLinkClass = (page) => {
    if (page === activePage) {
      return 'text-[#632232] font-semibold py-1.5 px-2 bg-[#632232]/5 rounded-md flex items-center justify-between';
    }
    return 'text-[#2D2926] hover:text-[#632232] py-1.5 px-2 flex items-center justify-between';
  };

  return `<!-- TOP BAR -->
    <div
      class="bg-[#541E2A] text-white text-[11px] sm:text-xs py-2 px-4 sm:px-8 border-b border-white/10 relative z-30"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Left: Heart icon + Tagline with small dropdown indicator -->
        <div class="flex items-center gap-1.5 font-normal tracking-wide">
          <svg
            class="w-3.5 h-3.5 text-[#E6B8AF] fill-current flex-shrink-0"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
          <span>A supportive community for every stage of motherhood</span>
          <svg
            class="w-2.5 h-2.5 ml-0.5 text-[#E6B8AF] opacity-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <!-- Right: Follow Us with social icons -->
        <div
          class="hidden sm:flex items-center gap-3 text-[11px] text-white/90"
        >
          <span class="text-white/80">Follow Us</span>
          <div class="flex items-center gap-2">
            <!-- Instagram -->
            <a
              href="https://www.instagram.com/wethemums/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#541E2A] transition-all"
              title="Instagram"
              aria-label="Instagram"
            >
              <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <!-- Facebook -->
            <a
              href="#"
              class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#541E2A] transition-all"
              title="Facebook"
              aria-label="Facebook"
            >
              <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <!-- YouTube -->
            <a
              href="#"
              class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#541E2A] transition-all"
              title="YouTube"
              aria-label="YouTube"
            >
              <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"
                />
              </svg>
            </a>
            <!-- Pinterest -->
            <a
              href="#"
              class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#541E2A] transition-all"
              title="Pinterest"
              aria-label="Pinterest"
            >
              <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.057.235-.188.286-.433.172-1.624-.755-2.639-3.127-2.639-5.033 0-4.101 2.979-7.868 8.593-7.868 4.512 0 8.018 3.216 8.018 7.513 0 4.484-2.827 8.093-6.75 8.093-1.318 0-2.557-.686-2.981-1.494l-.811 3.093c-.293 1.121-1.087 2.527-1.618 3.393 1.199.37 2.479.57 3.807.57 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- SITE NAVBAR -->
    <header class="bg-white border-b border-[#EFE7E1] sticky top-0 z-40">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
      >
        <!-- Brand Logo: WithTheMums. with subtitle -->
        <a href="index.html" class="flex flex-col group">
          <span
            class="font-serif text-2xl sm:text-3xl text-[#2D2926] font-normal tracking-tight group-hover:text-[#632232] transition-colors"
          >
            WithTheMums<span class="text-[#632232] font-bold">.</span>
          </span>
          <span class="text-[10px] text-[#635C57] -mt-0.5 tracking-wide">
            Real Stories. Stronger Together.
          </span>
        </a>

        <!-- Center Nav Links -->
        <nav
          class="hidden md:flex items-center space-x-7 text-xs sm:text-sm font-medium text-[#2D2926]/80"
        >
          <a
            href="index.html"
            class="${linkClass('home')}"
            >Home</a
          >
          <a
            href="stories.html"
            class="${linkClass('stories')}"
            >Stories</a
          >
          <a
            href="journal.html"
            class="${linkClass('resources')}"
            >Resources</a
          >
          <a
            href="about.html"
            class="${linkClass('about')}"
            >About</a
          >
          <a
            href="brand-partnerships.html"
            class="${linkClass('events')}"
            >Events</a
          >
          <a
            href="courses.html"
            class="${coursesLinkClass('courses')}"
            ><span>Courses</span
            ><span
              class="bg-[#862D42]/10 text-[#862D42] text-[10px] font-bold px-1.5 py-0.5 rounded-full"
              >New</span
            ></a
          >
          <a
            href="contact.html"
            class="${linkClass('contact')}"
            >Contact</a
          >
        </nav>

        <!-- Right: Search Button + Join Our Community pill -->
        <div class="flex items-center gap-3">
          <a
            href="stories.html"
            class="w-9 h-9 rounded-full hover:bg-[#FAF7F2] flex items-center justify-center text-[#2D2926]/70 hover:text-[#632232] transition-colors"
            title="Search Stories"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>

          <a
            href="share-your-story.html"
            class="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#632232] text-white text-xs font-semibold hover:bg-[#501A27] transition-all shadow-sm"
          >
            Join Our Community
          </a>

          <button
            id="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            class="md:hidden p-2 rounded-lg text-[#2D2926] hover:bg-[#EFE7E1]/50"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Drawer -->
      <div
        id="mobile-menu"
        class="hidden md:hidden bg-white border-b border-[#EFE7E1] px-4 pt-3 pb-6 space-y-3"
      >
        <nav class="flex flex-col space-y-2 text-sm font-medium">
          <a
            href="index.html"
            class="${mobileLinkClass('home')}"
            >Home</a
          >
          <a
            href="stories.html"
            class="${mobileLinkClass('stories')}"
            >Stories</a
          >
          <a
            href="journal.html"
            class="${mobileLinkClass('resources')}"
            >Resources</a
          >
          <a
            href="about.html"
            class="${mobileLinkClass('about')}"
            >About</a
          >
          <a
            href="brand-partnerships.html"
            class="${mobileLinkClass('events')}"
            >Events & Partnerships</a
          >
          <a
            href="courses.html"
            class="${mobileCoursesLinkClass('courses')}"
            ><span>Parenting Courses</span
            ><span
              class="bg-[#862D42]/10 text-[#862D42] text-[10px] font-bold px-2 py-0.5 rounded-full"
              >New</span
            ></a
          >
          <a
            href="contact.html"
            class="${mobileLinkClass('contact')}"
            >Contact</a
          >
        </nav>
        <div class="pt-3 border-t border-[#EFE7E1]">
          <a
            href="share-your-story.html"
            class="w-full inline-flex items-center justify-center py-2.5 px-4 text-xs font-semibold rounded-full bg-[#632232] text-white hover:bg-[#501A27] transition-all"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </header>`;
}

// Extract exact reference footer from index.html
const indexHtml = fs.readFileSync('index.html', 'utf8');
const footerMatch = indexHtml.match(/<!-- =+ -->\s*<!-- SITE FOOTER \(100% MATCH TO REFERENCE\)[\s\S]*?<\/footer>/);
if (!footerMatch) {
  console.error('Footer not found in index.html');
  process.exit(1);
}
const universalFooter = footerMatch[0];

const pageConfigs = [
  { file: 'index.html', active: 'home' },
  { file: 'stories.html', active: 'stories' },
  { file: 'journal.html', active: 'resources' },
  { file: 'about.html', active: 'about' },
  { file: 'brand-partnerships.html', active: 'events' },
  { file: 'courses.html', active: 'courses' },
  { file: 'contact.html', active: 'contact' },
  { file: 'share-your-story.html', active: 'none' },
  { file: 'story-detail.html', active: 'stories' }
];

pageConfigs.forEach(({ file, active }) => {
  let content = fs.readFileSync(file, 'utf8');

  // 1. Google font with Caveat
  if (!content.includes('Caveat')) {
    content = content.replace(
      /https:\/\/fonts\.googleapis\.com\/css2\?[^"']*/,
      'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap'
    );
  }

  // 2. Ensure .font-hand style
  if (!content.includes('.font-hand')) {
    content = content.replace('</head>', `  <style>\n    .font-hand { font-family: "Caveat", cursive; }\n  </style>\n</head>`);
  }

  // 3. Header replacement:
  // Find start of header
  let headerStart = -1;
  const topBarIdx = content.search(/<!-- (?:TOP BAR|TOP ANNOUNCEMENT BAR)/i);
  if (topBarIdx !== -1) {
    headerStart = topBarIdx;
  } else {
    // If no comment, find <header
    headerStart = content.indexOf('<header');
  }

  const headerEnd = content.indexOf('</header>') + 9;

  if (headerStart === -1 || headerEnd < 9) {
    console.error(`Failed to locate header in ${file}`);
    return;
  }

  const newHeader = getHeaderHtml(active);
  content = content.substring(0, headerStart) + newHeader + content.substring(headerEnd);

  // 4. Footer replacement:
  const footerStart = content.search(/(<!-- =+ -->\s*<!-- SITE FOOTER|<footer)/i);
  const footerEnd = content.indexOf('</footer>') + 9;

  if (footerStart === -1 || footerEnd < 9) {
    console.error(`Failed to locate footer in ${file}`);
    return;
  }

  content = content.substring(0, footerStart) + universalFooter + content.substring(footerEnd);

  // 5. Ensure scripts for mobile drawer and newsletter are present
  // Check if mobileBtn listener exists
  const hasMobileListener = content.includes('mobileBtn') && content.includes('mobileMenu');
  const hasFooterNewsletterListener = content.includes('footer-newsletter');

  let scriptAdditions = '';
  if (!hasMobileListener) {
    scriptAdditions += `
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
    `;
  }

  if (!hasFooterNewsletterListener) {
    scriptAdditions += `
    const footerForm = document.getElementById("footer-newsletter");
    if (footerForm) {
      footerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = footerForm.querySelector('input[type="email"]');
        if (input && input.value) {
          const subs = JSON.parse(
            localStorage.getItem("wethemums_newsletter") || "[]"
          );
          subs.push({ email: input.value, date: new Date().toISOString() });
          localStorage.setItem("wethemums_newsletter", JSON.stringify(subs));
          footerForm.reset();
          alert("Welcome to WithTheMums! Thank you for subscribing.");
        }
      });
    }
    `;
  }

  if (scriptAdditions) {
    content = content.replace('</body>', `<script>${scriptAdditions}</script>\n</body>`);
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Successfully unified header & footer in ${file}!`);
});

console.log('Done!');
