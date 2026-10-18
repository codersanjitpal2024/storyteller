const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

const startMarker = '<!-- SECTION 8: INSTAGRAM CONVERSATION';
const endMarker = '<!-- SECTION 9: NEWSLETTER';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Markers not found! Start:", startIndex, "End:", endIndex);
  process.exit(1);
}

// Find previous <!-- === divider
const dividerIndex = content.lastIndexOf('<!-- ========================================== -->', startIndex);

const trendingReelsHtml = `<!-- ========================================== -->
      <!-- SECTION: TRENDING VIDEOS & REELS           -->
      <!-- (INDIAN HAIR WORLD INSPIRED CAROUSEL)      -->
      <!-- ========================================== -->
      <section
        class="py-16 sm:py-24 bg-white border-t border-[#F0EAE6] relative overflow-hidden"
        id="trending-videos-section"
      >
        <!-- Soft background blurs -->
        <div class="absolute -left-24 top-1/3 w-80 h-80 rounded-full bg-[#FAF0F2]/50 blur-3xl pointer-events-none select-none"></div>
        <div class="absolute -right-24 bottom-1/4 w-80 h-80 rounded-full bg-[#FAF5F0]/60 blur-3xl pointer-events-none select-none"></div>

        <div class="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <!-- Section Header Row (Directly Inspired by Indian Hair World) -->
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div class="max-w-2xl">
              <div class="flex items-center gap-2 mb-2.5">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#862D42]/10 to-[#F28B82]/20 text-[#862D42] text-[11px] font-bold tracking-widest uppercase">
                  <!-- Instagram Gradient Camera Icon -->
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  COMMUNITY REELS
                </span>
                <span class="text-xs text-[#8C827E]">· Updated Daily</span>
              </div>
              <h2 class="reveal-lines font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#221C1D] font-normal leading-[1.18]">
                Trending <span class="italic text-[#862D42]">Videos &amp; Reels</span>
              </h2>
              <p class="reveal-fade font-sans text-xs sm:text-sm text-[#5A524F] mt-2.5 leading-relaxed max-w-xl">
                Candid laughs, 30-second co-regulation scripts, raw postpartum truths, and heartfelt motherhood moments from our official Instagram feed.
              </p>
            </div>

            <!-- Follow on Instagram Action Link (IHW Style) -->
            <div class="flex items-center gap-4 shrink-0">
              <a
                href="https://www.instagram.com/wethemums/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FAF0F2] hover:bg-[#862D42] text-[#862D42] hover:text-white border border-[#E8CCD2] text-xs font-semibold shadow-2xs transition-all duration-300 group/link"
              >
                <!-- Instagram Colored Gradient Badge -->
                <svg class="w-4 h-4 fill-current transition-transform group-hover/link:scale-110" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow @wethemums</span>
                <span class="text-sm transition-transform group-hover/link:translate-x-1">&rarr;</span>
              </a>

              <!-- Arrow Carousel Navigation Buttons (IHW Style) -->
              <div class="hidden sm:flex items-center gap-2">
                <button
                  id="reels-btn-prev"
                  class="w-10 h-10 rounded-full bg-white border border-[#E0D4CD] shadow-sm flex items-center justify-center text-[#221C1D] hover:bg-[#862D42] hover:text-white hover:border-[#862D42] transition-all cursor-pointer focus:outline-none disabled:opacity-35"
                  aria-label="Previous Videos"
                >
                  <svg class="w-4 h-4 stroke-current fill-none" stroke-width="2.2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button
                  id="reels-btn-next"
                  class="w-10 h-10 rounded-full bg-white border border-[#E0D4CD] shadow-sm flex items-center justify-center text-[#221C1D] hover:bg-[#862D42] hover:text-white hover:border-[#862D42] transition-all cursor-pointer focus:outline-none"
                  aria-label="Next Videos"
                >
                  <svg class="w-4 h-4 stroke-current fill-none" stroke-width="2.2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Video Carousel Track (Relative with Side Controls for Mobile/Desktop) -->
          <div class="relative">
            <!-- Carousel Scroll Container -->
            <div
              id="reels-track"
              class="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 scrollbar-none"
              style="scrollbar-width: none; -ms-overflow-style: none;"
            >

              <!-- REEL 1: TODDLER EMOTIONS -->
              <a
                href="https://www.instagram.com/wethemums/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-[240px] sm:w-[270px] aspect-[9/16] shrink-0 snap-start rounded-[24px] overflow-hidden relative group bg-[#1F191A] shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(134,45,66,0.18)] hover:-translate-y-2 transition-all duration-300 block select-none border border-[#EBE1D9]"
              >
                <!-- Background Video Poster Image -->
                <img
                  src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=600&q=80"
                  alt="Toddler Tantrum Reset"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30"></div>

                <!-- Top Header Overlay -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide border border-white/20">
                    <svg class="w-3 h-3 fill-current text-[#F28B82]" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Reel
                  </span>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white/95 text-[10px] font-medium border border-white/20">
                    <svg class="w-3 h-3 text-[#F28B82] fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    14.8k
                  </span>
                </div>

                <!-- Center Hover Play Pulse Button -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div class="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-115 group-hover:bg-[#862D42] group-hover:border-[#862D42] transition-all duration-300">
                    <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>

                <!-- Bottom Captions & Profile Overlay -->
                <div class="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
                  <div class="flex items-center gap-2 mb-2">
                    <img src="images/testimonial-left-mother.png" alt="@wethemums" class="w-6 h-6 rounded-full object-cover border border-white/70 shadow-2xs" />
                    <span class="text-xs font-bold text-white tracking-wide">@wethemums</span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#3897F0] flex items-center justify-center text-white text-[8px] font-bold">✓</span>
                  </div>
                  <p class="text-white text-xs sm:text-[13px] font-medium leading-snug line-clamp-2">
                    "When toddler says 'No' 50 times in a row... the 30-sec trick that saves your sanity 🧘‍♀️"
                  </p>
                  <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-white/20 text-[10px] text-white/80">
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                      Original Audio
                    </span>
                    <span class="font-semibold text-white group-hover:text-[#F28B82] transition-colors flex items-center gap-1">
                      Watch on IG &rarr;
                    </span>
                  </div>
                </div>
              </a>

              <!-- REEL 2: POSTPARTUM TRUTH -->
              <a
                href="https://www.instagram.com/wethemums/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-[240px] sm:w-[270px] aspect-[9/16] shrink-0 snap-start rounded-[24px] overflow-hidden relative group bg-[#1F191A] shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(134,45,66,0.18)] hover:-translate-y-2 transition-all duration-300 block select-none border border-[#EBE1D9]"
              >
                <!-- Background Video Poster Image -->
                <img
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&q=80"
                  alt="Postpartum Truths"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30"></div>

                <!-- Top Header Overlay -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide border border-white/20">
                    <svg class="w-3 h-3 fill-current text-[#F28B82]" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Reel
                  </span>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white/95 text-[10px] font-medium border border-white/20">
                    <svg class="w-3 h-3 text-[#F28B82] fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    22.4k
                  </span>
                </div>

                <!-- Center Hover Play Pulse Button -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div class="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-115 group-hover:bg-[#862D42] group-hover:border-[#862D42] transition-all duration-300">
                    <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>

                <!-- Bottom Captions & Profile Overlay -->
                <div class="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
                  <div class="flex items-center gap-2 mb-2">
                    <img src="images/testimonial-left-mother.png" alt="@wethemums" class="w-6 h-6 rounded-full object-cover border border-white/70 shadow-2xs" />
                    <span class="text-xs font-bold text-white tracking-wide">@wethemums</span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#3897F0] flex items-center justify-center text-white text-[8px] font-bold">✓</span>
                  </div>
                  <p class="text-white text-xs sm:text-[13px] font-medium leading-snug line-clamp-2">
                    "Postpartum truth: The silent loneliness at 3 AM that nobody warned you about ☕"
                  </p>
                  <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-white/20 text-[10px] text-white/80">
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                      Original Audio
                    </span>
                    <span class="font-semibold text-white group-hover:text-[#F28B82] transition-colors flex items-center gap-1">
                      Watch on IG &rarr;
                    </span>
                  </div>
                </div>
              </a>

              <!-- REEL 3: BABY-LED WEANING -->
              <a
                href="https://www.instagram.com/wethemums/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-[240px] sm:w-[270px] aspect-[9/16] shrink-0 snap-start rounded-[24px] overflow-hidden relative group bg-[#1F191A] shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(134,45,66,0.18)] hover:-translate-y-2 transition-all duration-300 block select-none border border-[#EBE1D9]"
              >
                <!-- Background Video Poster Image -->
                <img
                  src="images/cat-photo-4-feeding.jpg"
                  alt="Baby-led Weaning"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30"></div>

                <!-- Top Header Overlay -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide border border-white/20">
                    <svg class="w-3 h-3 fill-current text-[#F28B82]" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Reel
                  </span>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white/95 text-[10px] font-medium border border-white/20">
                    <svg class="w-3 h-3 text-[#F28B82] fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    18.1k
                  </span>
                </div>

                <!-- Center Hover Play Pulse Button -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div class="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-115 group-hover:bg-[#862D42] group-hover:border-[#862D42] transition-all duration-300">
                    <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>

                <!-- Bottom Captions & Profile Overlay -->
                <div class="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
                  <div class="flex items-center gap-2 mb-2">
                    <img src="images/testimonial-left-mother.png" alt="@wethemums" class="w-6 h-6 rounded-full object-cover border border-white/70 shadow-2xs" />
                    <span class="text-xs font-bold text-white tracking-wide">@wethemums</span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#3897F0] flex items-center justify-center text-white text-[8px] font-bold">✓</span>
                  </div>
                  <p class="text-white text-xs sm:text-[13px] font-medium leading-snug line-clamp-2">
                    "Baby-led weaning: Day 1 expectation vs reality! Watch till the messy end 😂🥑"
                  </p>
                  <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-white/20 text-[10px] text-white/80">
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                      Original Audio
                    </span>
                    <span class="font-semibold text-white group-hover:text-[#F28B82] transition-colors flex items-center gap-1">
                      Watch on IG &rarr;
                    </span>
                  </div>
                </div>
              </a>

              <!-- REEL 4: PREGNANCY EXPECTATION -->
              <a
                href="https://www.instagram.com/wethemums/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-[240px] sm:w-[270px] aspect-[9/16] shrink-0 snap-start rounded-[24px] overflow-hidden relative group bg-[#1F191A] shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(134,45,66,0.18)] hover:-translate-y-2 transition-all duration-300 block select-none border border-[#EBE1D9]"
              >
                <!-- Background Video Poster Image -->
                <img
                  src="images/cat-photo-3-maternity.jpg"
                  alt="Pregnancy Real Talk"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30"></div>

                <!-- Top Header Overlay -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide border border-white/20">
                    <svg class="w-3 h-3 fill-current text-[#F28B82]" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Reel
                  </span>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white/95 text-[10px] font-medium border border-white/20">
                    <svg class="w-3 h-3 text-[#F28B82] fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    31.7k
                  </span>
                </div>

                <!-- Center Hover Play Pulse Button -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div class="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-115 group-hover:bg-[#862D42] group-hover:border-[#862D42] transition-all duration-300">
                    <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>

                <!-- Bottom Captions & Profile Overlay -->
                <div class="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
                  <div class="flex items-center gap-2 mb-2">
                    <img src="images/testimonial-left-mother.png" alt="@wethemums" class="w-6 h-6 rounded-full object-cover border border-white/70 shadow-2xs" />
                    <span class="text-xs font-bold text-white tracking-wide">@wethemums</span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#3897F0] flex items-center justify-center text-white text-[8px] font-bold">✓</span>
                  </div>
                  <p class="text-white text-xs sm:text-[13px] font-medium leading-snug line-clamp-2">
                    "3 things nobody told me about the fourth trimester that I wish I knew before delivery 🌸"
                  </p>
                  <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-white/20 text-[10px] text-white/80">
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                      Original Audio
                    </span>
                    <span class="font-semibold text-white group-hover:text-[#F28B82] transition-colors flex items-center gap-1">
                      Watch on IG &rarr;
                    </span>
                  </div>
                </div>
              </a>

              <!-- REEL 5: SIBLING HARMONY -->
              <a
                href="https://www.instagram.com/wethemums/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-[240px] sm:w-[270px] aspect-[9/16] shrink-0 snap-start rounded-[24px] overflow-hidden relative group bg-[#1F191A] shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(134,45,66,0.18)] hover:-translate-y-2 transition-all duration-300 block select-none border border-[#EBE1D9]"
              >
                <!-- Background Video Poster Image -->
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
                  alt="Sibling Bonding"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30"></div>

                <!-- Top Header Overlay -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide border border-white/20">
                    <svg class="w-3 h-3 fill-current text-[#F28B82]" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Reel
                  </span>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white/95 text-[10px] font-medium border border-white/20">
                    <svg class="w-3 h-3 text-[#F28B82] fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    16.3k
                  </span>
                </div>

                <!-- Center Hover Play Pulse Button -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div class="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-115 group-hover:bg-[#862D42] group-hover:border-[#862D42] transition-all duration-300">
                    <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>

                <!-- Bottom Captions & Profile Overlay -->
                <div class="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
                  <div class="flex items-center gap-2 mb-2">
                    <img src="images/testimonial-left-mother.png" alt="@wethemums" class="w-6 h-6 rounded-full object-cover border border-white/70 shadow-2xs" />
                    <span class="text-xs font-bold text-white tracking-wide">@wethemums</span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#3897F0] flex items-center justify-center text-white text-[8px] font-bold">✓</span>
                  </div>
                  <p class="text-white text-xs sm:text-[13px] font-medium leading-snug line-clamp-2">
                    "Turning sibling jealousy into teamwork: The 15-minute secret bedtime shift that changed everything 🧸"
                  </p>
                  <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-white/20 text-[10px] text-white/80">
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                      Original Audio
                    </span>
                    <span class="font-semibold text-white group-hover:text-[#F28B82] transition-colors flex items-center gap-1">
                      Watch on IG &rarr;
                    </span>
                  </div>
                </div>
              </a>

              <!-- REEL 6: EXHAUSTED MUM REMINDER -->
              <a
                href="https://www.instagram.com/wethemums/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-[240px] sm:w-[270px] aspect-[9/16] shrink-0 snap-start rounded-[24px] overflow-hidden relative group bg-[#1F191A] shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(134,45,66,0.18)] hover:-translate-y-2 transition-all duration-300 block select-none border border-[#EBE1D9]"
              >
                <!-- Background Video Poster Image -->
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
                  alt="Mother Encouragement"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30"></div>

                <!-- Top Header Overlay -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide border border-white/20">
                    <svg class="w-3 h-3 fill-current text-[#F28B82]" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Reel
                  </span>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white/95 text-[10px] font-medium border border-white/20">
                    <svg class="w-3 h-3 text-[#F28B82] fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    42.9k
                  </span>
                </div>

                <!-- Center Hover Play Pulse Button -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div class="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-115 group-hover:bg-[#862D42] group-hover:border-[#862D42] transition-all duration-300">
                    <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>

                <!-- Bottom Captions & Profile Overlay -->
                <div class="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
                  <div class="flex items-center gap-2 mb-2">
                    <img src="images/testimonial-left-mother.png" alt="@wethemums" class="w-6 h-6 rounded-full object-cover border border-white/70 shadow-2xs" />
                    <span class="text-xs font-bold text-white tracking-wide">@wethemums</span>
                    <span class="w-3.5 h-3.5 rounded-full bg-[#3897F0] flex items-center justify-center text-white text-[8px] font-bold">✓</span>
                  </div>
                  <p class="text-white text-xs sm:text-[13px] font-medium leading-snug line-clamp-2">
                    "To the mum reading this exhausted in the dark tonight: You are doing an incredible job. Save this ♡"
                  </p>
                  <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-white/20 text-[10px] text-white/80">
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                      Original Audio
                    </span>
                    <span class="font-semibold text-white group-hover:text-[#F28B82] transition-colors flex items-center gap-1">
                      Watch on IG &rarr;
                    </span>
                  </div>
                </div>
              </a>

            </div>
          </div>

          <!-- Bottom Follow Bar with Live Follower Social Proof -->
          <div class="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-[#FAF5F0] border border-[#EBE1D9] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3.5 text-center sm:text-left">
              <div class="w-10 h-10 rounded-full bg-[#862D42]/10 text-[#862D42] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs sm:text-[13px] font-semibold text-[#221C1D]">
                  Join 24,000+ mums learning, laughing, and supporting each other daily
                </p>
                <p class="text-[11px] text-[#786E69] mt-0.5">
                  Follow <span class="font-bold text-[#862D42]">@wethemums</span> for daily advice, community polls, and heartfelt story features.
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/wethemums/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#862D42] hover:bg-[#6D2335] text-white text-xs font-semibold shadow-sm hover:scale-[1.02] active:scale-95 transition-all shrink-0"
            >
              <span>Follow @wethemums</span>
              <span>&rarr;</span>
            </a>
          </div>

        </div>
      </section>
`;

content = content.substring(0, dividerIndex) + trendingReelsHtml + '\n' + content.substring(endIndex);

// Add JavaScript for horizontal carousel scrolling buttons
const jsCarouselCode = `
        // =============================================
        // TRENDING VIDEOS / REELS CAROUSEL ENGINE
        // (Smooth Scroll Inspired by Indian Hair World)
        // =============================================
        const reelsTrack = document.getElementById("reels-track");
        const reelsBtnPrev = document.getElementById("reels-btn-prev");
        const reelsBtnNext = document.getElementById("reels-btn-next");

        if (reelsTrack && reelsBtnPrev && reelsBtnNext) {
          const scrollStep = 300;

          reelsBtnPrev.addEventListener("click", () => {
            reelsTrack.scrollBy({ left: -scrollStep, behavior: "smooth" });
          });

          reelsBtnNext.addEventListener("click", () => {
            reelsTrack.scrollBy({ left: scrollStep, behavior: "smooth" });
          });

          // Update disabled state
          const updateReelsButtons = () => {
            if (reelsTrack.scrollLeft <= 5) {
              reelsBtnPrev.classList.add("opacity-40", "pointer-events-none");
            } else {
              reelsBtnPrev.classList.remove("opacity-40", "pointer-events-none");
            }

            const maxScroll = reelsTrack.scrollWidth - reelsTrack.clientWidth - 5;
            if (reelsTrack.scrollLeft >= maxScroll) {
              reelsBtnNext.classList.add("opacity-40", "pointer-events-none");
            } else {
              reelsBtnNext.classList.remove("opacity-40", "pointer-events-none");
            }
          };

          reelsTrack.addEventListener("scroll", updateReelsButtons, { passive: true });
          updateReelsButtons();
        }
`;

// Insert the JS code right before the closing of DOMContentLoaded listener
const domLoadedEnd = content.lastIndexOf('}); // End DOMContentLoaded');
if (domLoadedEnd !== -1) {
  content = content.substring(0, domLoadedEnd) + jsCarouselCode + '\n' + content.substring(domLoadedEnd);
} else {
  const scriptEnd = content.lastIndexOf('</script>');
  const lastClose = content.lastIndexOf('});', scriptEnd);
  content = content.substring(0, lastClose) + jsCarouselCode + '\n' + content.substring(lastClose);
}

fs.writeFileSync(indexPath, content, 'utf8');
console.log("Successfully replaced Instagram section with Trending Videos & Reels section in index.html!");
