const fs = require('fs');

let html = fs.readFileSync('about.html', 'utf8');

const heroSectionRegex = /<!-- ========================================== -->\s*<!-- SECTION 1: HERO[\s\S]*?<\/section>/;

const newBannerHtml = `<!-- ========================================== -->
    <!-- SECTION 1: HERO (GOLDEN GARDEN EMBRACE)    -->
    <!-- ========================================== -->
    <section
      id="about-hero-section"
      class="relative w-full overflow-hidden select-none p-0 m-0 bg-[#FAF4EF]"
    >
      <!-- Full-Width Banner Graphic Container -->
      <div class="relative w-full select-none">
        <!-- Background Image: Golden Garden Embrace -->
        <img
          src="images/Golden%20Garden%20Embrace-200kb.jpeg"
          alt="WithTheMums — Every parenting journey deserves a village."
          class="w-full h-auto block select-none pointer-events-none"
        />

        <!-- Soft left gradient overlay to guarantee 100% crisp, readable typography -->
        <div class="absolute inset-y-0 left-0 w-[56%] bg-gradient-to-r from-[#FAF4EF] via-[#FAF4EF]/90 to-transparent pointer-events-none"></div>

        <!-- Left Side Content: Live Razor-Sharp Editorial Typography & Actions -->
        <div
          class="absolute left-[5.5%] top-[8%] bottom-[8%] w-[48%] flex flex-col justify-between pointer-events-auto z-10"
        >
          <!-- 1. Category Pill Badge -->
          <div class="reveal-fade">
            <span
              class="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#F5E9E6] text-[#6D2534] text-[clamp(8px,0.72vw,11.5px)] font-bold tracking-[0.14em] uppercase shadow-sm"
            >
              <svg
                class="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#6D2534] shrink-0"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              OUR STORY &bull; THE VILLAGE
            </span>
          </div>

          <!-- 2. Main Headline & Subtitle -->
          <div>
            <h1
              class="font-serif text-[#221C1D] text-[clamp(18px,2.9vw,48px)] font-normal leading-[1.14] tracking-[-0.01em]"
            >
              <span class="block">Every parenting journey</span>
              <span class="inline italic font-serif text-[#862D42]">deserves a village.</span>
              <svg
                class="inline-block w-[0.8em] h-[0.8em] ml-1.5 text-[#862D42] -translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                />
              </svg>
            </h1>

            <p
              class="reveal-fade font-sans text-[#534B49] text-[clamp(9px,0.95vw,15px)] leading-[1.45] mt-[2%] max-w-[95%]"
            >
              We founded WithTheMums on a simple, enduring conviction: parenthood is too raw, complex, and profound to navigate in isolation. Here is your warm, honest sanctuary.
            </p>
          </div>

          <!-- 3. Dual Action CTA Buttons -->
          <div class="reveal-fade flex items-center gap-2 sm:gap-3">
            <!-- Button 1: Read Our Story -->
            <a
              href="#our-mission"
              class="btn-shimmer group inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-[#67212F] hover:bg-[#521925] text-white font-medium text-[clamp(9.5px,0.95vw,14px)] shadow-sm hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#67212F]"
              aria-label="Read Our Story"
            >
              <svg
                class="w-3 h-3 sm:w-3.5 sm:h-3.5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>Read Our Story</span>
              <svg
                class="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <!-- Button 2: Join Our Community -->
            <a
              href="stories.html"
              class="btn-shimmer inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full border border-[#CAA0A8] hover:border-[#67212F] hover:bg-[#F8ECE9]/50 text-[#67212F] font-medium text-[clamp(9.5px,0.95vw,14px)] hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#67212F]"
              aria-label="Join Our Community"
            >
              <svg
                class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#67212F]"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Join Our Community</span>
              <svg
                class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#67212F]"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <!-- 4. Trust Badges Row -->
          <div
            class="reveal-fade flex items-center gap-2.5 sm:gap-4 lg:gap-5"
          >
            <!-- Badge 1: Founded by Mothers -->
            <div class="flex items-center gap-2">
              <div
                class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center shrink-0 text-[#7B2E3E]"
              >
                <svg
                  class="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div class="text-[clamp(7.5px,0.72vw,11.5px)] leading-[1.2]">
                <span class="font-semibold text-[#272122] block">Founded by Mothers</span>
                <span class="text-[#685F5D] block">Real care &amp; empathy</span>
              </div>
            </div>

            <!-- Vertical Divider -->
            <div class="w-[1px] h-5 sm:h-6 bg-[#E8D5D0]"></div>

            <!-- Badge 2: 10,000+ Community -->
            <div class="flex items-center gap-2">
              <div
                class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center shrink-0 text-[#7B2E3E]"
              >
                <svg
                  class="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  />
                </svg>
              </div>
              <div class="text-[clamp(7.5px,0.72vw,11.5px)] leading-[1.2]">
                <span class="font-semibold text-[#272122] block">10,000+ Strong</span>
                <span class="text-[#685F5D] block">Parent community</span>
              </div>
            </div>

            <!-- Vertical Divider -->
            <div class="w-[1px] h-5 sm:h-6 bg-[#E8D5D0]"></div>

            <!-- Badge 3: Zero Highlight Reels -->
            <div class="flex items-center gap-2">
              <div
                class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center shrink-0 text-[#7B2E3E]"
              >
                <svg
                  class="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  />
                </svg>
              </div>
              <div class="text-[clamp(7.5px,0.72vw,11.5px)] leading-[1.2]">
                <span class="font-semibold text-[#272122] block">Zero Highlight Reels</span>
                <span class="text-[#685F5D] block">Just real stories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

if (heroSectionRegex.test(html)) {
  html = html.replace(heroSectionRegex, newBannerHtml);
  fs.writeFileSync('about.html', html, 'utf8');
  console.log('Successfully updated about.html with Golden Garden Embrace background banner and left content overlay!');
} else {
  console.warn('Could not match heroSectionRegex in about.html');
}
