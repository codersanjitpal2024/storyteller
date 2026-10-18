const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// 1. Update the 6 reel cards in Section Trending Videos to have data-reel-index and reel-trigger class
const reelsData = [
  {
    index: 0,
    img: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=800&q=80",
    hook: "Toddler screaming 'NO'? Try this 30-sec trick 🧘‍♀️",
    likes: "14.8k",
    productTitle: "The Calm Toddler Blueprint",
    productThumb: "images/card-2-parenting.png",
    price: "$49",
    oldPrice: "$99",
    btnText: "ENROLL NOW",
    link: "contact.html?course=calm-toddler",
    caption: "When toddler says 'No' 50 times in a row... the 30-sec trick that saves your sanity 🧘‍♀️"
  },
  {
    index: 1,
    img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
    hook: "The silent loneliness at 3 AM nobody warned you about ☕",
    likes: "22.4k",
    productTitle: "Fourth Trimester Sanctuary",
    productThumb: "images/cat-photo-1.png",
    price: "$59",
    oldPrice: "$120",
    btnText: "ENROLL NOW",
    link: "contact.html?course=fourth-trimester",
    caption: "Postpartum truth: The silent loneliness at 3 AM that nobody warned you about ☕"
  },
  {
    index: 2,
    img: "images/cat-photo-4-feeding.jpg",
    hook: "Baby-led weaning: Day 1 vs Day 30 😂🥑",
    likes: "18.1k",
    productTitle: "Baby-Led Weaning Starter Guide",
    productThumb: "images/cat-photo-4-feeding.jpg",
    price: "FREE",
    oldPrice: "$29",
    btnText: "GET GUIDE",
    link: "contact.html?guide=baby-led-weaning",
    caption: "Baby-led weaning: Day 1 expectation vs reality! Watch till the messy end 😂🥑"
  },
  {
    index: 3,
    img: "images/cat-photo-3-maternity.jpg",
    hook: "4th Trimester: 3 things nobody told me before delivery 🌸",
    likes: "31.7k",
    productTitle: "Hospital Bag & Birth Checklist",
    productThumb: "images/cat-photo-3-maternity.jpg",
    price: "FREE",
    oldPrice: "$19",
    btnText: "DOWNLOAD",
    link: "contact.html?guide=hospital-checklist",
    caption: "3 things nobody told me about the fourth trimester that I wish I knew before delivery 🌸"
  },
  {
    index: 4,
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    hook: "Stop sibling fighting with this 15-min bedtime ritual 🧸",
    likes: "16.3k",
    productTitle: "The Connected Family Framework",
    productThumb: "images/card-5-everyday.png",
    price: "$69",
    oldPrice: "$140",
    btnText: "ENROLL NOW",
    link: "contact.html?course=connected-family",
    caption: "Turning sibling jealousy into teamwork: The 15-minute secret bedtime shift 🧸"
  },
  {
    index: 5,
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    hook: "To the exhausted mama reading this tonight: You are enough ♡",
    likes: "42.9k",
    productTitle: "WithTheMums Community Pass",
    productThumb: "images/testimonial-left-mother.png",
    price: "FREE",
    oldPrice: "$15/mo",
    btnText: "JOIN FREE",
    link: "share-your-story.html",
    caption: "To the mum reading this exhausted in the dark tonight: You are doing an incredible job. Save this ♡"
  }
];

// Add Whatmore Modal HTML right before closing </body>
const whatmoreModalHtml = `
    <!-- ============================================= -->
    <!-- WHATMORE AI FULLSCREEN REELS POPUP PLAYER     -->
    <!-- (100% MATCH TO WHATMORE AI REEL MODAL UX)     -->
    <!-- ============================================= -->
    <div
      id="whatmore-reels-modal"
      class="fixed inset-0 z-[999999] bg-black/92 backdrop-blur-md hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-0 sm:p-4 select-none"
      aria-modal="true"
      role="dialog"
    >
      <!-- Desktop Close Button (Top-Right of screen) -->
      <button
        id="whatmore-close-desktop"
        class="hidden sm:flex absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20 hover:scale-105"
        aria-label="Close Reels Player"
      >
        <svg class="w-6 h-6 stroke-current fill-none" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>

      <!-- Desktop Vertical Navigation Arrows (Beside Phone Frame) -->
      <div class="hidden lg:flex flex-col items-center gap-3 absolute right-[calc(50%-270px)] top-1/2 -translate-y-1/2 z-50">
        <button
          id="whatmore-nav-up"
          class="w-12 h-12 rounded-full bg-white/20 hover:bg-[#862D42] text-white backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95"
          title="Previous Video (Scroll Up)"
        >
          <svg class="w-5 h-5 stroke-current fill-none" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"/></svg>
        </button>
        <div class="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-mono font-semibold border border-white/20" id="whatmore-counter">
          1 / 6
        </div>
        <button
          id="whatmore-nav-down"
          class="w-12 h-12 rounded-full bg-white/20 hover:bg-[#862D42] text-white backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95"
          title="Next Video (Scroll Down)"
        >
          <svg class="w-5 h-5 stroke-current fill-none" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </button>
      </div>

      <!-- Central Phone Frame -->
      <div
        id="whatmore-phone-frame"
        class="relative w-full sm:w-[410px] h-full sm:h-[90vh] sm:max-h-[820px] sm:rounded-[36px] overflow-hidden bg-black shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col border border-white/10"
      >
        <!-- Top Multi-Segment Progress Bars (Instagram/TikTok/Whatmore Style) -->
        <div class="absolute top-3 left-4 right-4 z-40 flex gap-1.5 pointer-events-none">
          <div class="reel-prog-bar flex-1 h-[2.5px] bg-white/30 rounded-full overflow-hidden">
            <div class="reel-prog-fill w-0 h-full bg-white"></div>
          </div>
          <div class="reel-prog-bar flex-1 h-[2.5px] bg-white/30 rounded-full overflow-hidden">
            <div class="reel-prog-fill w-0 h-full bg-white"></div>
          </div>
          <div class="reel-prog-bar flex-1 h-[2.5px] bg-white/30 rounded-full overflow-hidden">
            <div class="reel-prog-fill w-0 h-full bg-white"></div>
          </div>
          <div class="reel-prog-bar flex-1 h-[2.5px] bg-white/30 rounded-full overflow-hidden">
            <div class="reel-prog-fill w-0 h-full bg-white"></div>
          </div>
          <div class="reel-prog-bar flex-1 h-[2.5px] bg-white/30 rounded-full overflow-hidden">
            <div class="reel-prog-fill w-0 h-full bg-white"></div>
          </div>
          <div class="reel-prog-bar flex-1 h-[2.5px] bg-white/30 rounded-full overflow-hidden">
            <div class="reel-prog-fill w-0 h-full bg-white"></div>
          </div>
        </div>

        <!-- Top Right In-Video Controls (Sound + Instagram + Mobile Close) -->
        <div class="absolute top-7 right-4 z-40 flex items-center gap-2.5">
          <!-- Sound Toggle Button (Matching Whatmore top right speaker icon) -->
          <button
            id="whatmore-sound-btn"
            class="w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-md"
            title="Toggle Sound"
          >
            <!-- Speaker Playing Sound Icon -->
            <svg id="whatmore-icon-sound-on" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
            <!-- Speaker Muted Icon -->
            <svg id="whatmore-icon-sound-off" class="w-5 h-5 fill-current hidden" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          </button>

          <!-- Instagram Camera Badge (Matching Whatmore IG Icon) -->
          <a
            href="https://www.instagram.com/wethemums/"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-black/50 hover:bg-[#862D42] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-md group"
            title="Open on Instagram @wethemums"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          <!-- Mobile Close Button -->
          <button
            id="whatmore-close-mobile"
            class="sm:hidden w-10 h-10 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-md"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <!-- Vertical Slides Track (Transitions on wheel / swipe / next) -->
        <div
          id="whatmore-slides-track"
          class="w-full h-full flex flex-col transition-transform duration-500 ease-out"
          style="transform: translateY(0%);"
        >
          <!-- 6 Reels Stacked Vertically (100% Height Each) -->
          ${reelsData.map((reel, i) => `
          <div class="whatmore-slide w-full h-full shrink-0 relative overflow-hidden bg-neutral-900 flex flex-col justify-between" data-index="${i}">
            <!-- Background Image Poster (Full height) -->
            <img
              src="${reel.img}"
              alt="${reel.hook}"
              class="absolute inset-0 w-full h-full object-cover select-none pointer-events-none scale-100 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/35 pointer-events-none"></div>

            <!-- Top Profile Tag (Left) -->
            <div class="relative z-30 pt-7 pl-4 flex items-center gap-2">
              <img src="images/testimonial-left-mother.png" alt="@wethemums" class="w-8 h-8 rounded-full object-cover border-2 border-white shadow-md" />
              <div>
                <div class="flex items-center gap-1">
                  <span class="text-xs font-bold text-white tracking-wide">@wethemums</span>
                  <span class="w-3.5 h-3.5 rounded-full bg-[#3897F0] flex items-center justify-center text-white text-[8px] font-bold">✓</span>
                </div>
                <span class="text-[10px] text-white/80 block -mt-0.5">WithTheMums Community</span>
              </div>
            </div>

            <!-- Center Reel Big Hook (Exact Whatmore Style: Bold white serif/sans with subtle shadow) -->
            <div class="relative z-30 px-6 text-center my-auto">
              <h3
                class="font-serif text-2xl sm:text-[28px] font-semibold text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] max-w-xs mx-auto"
                style="text-shadow: 0 2px 10px rgba(0,0,0,0.9), 0 0 2px #000;"
              >
                ${reel.hook}
              </h3>
              <!-- Pulsing Central Play Ring -->
              <div class="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mx-auto mt-5 flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <svg class="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            </div>

            <!-- Bottom Floating Whatmore Product / Course Card (100% MATCH TO REFERENCE IMAGE 2) -->
            <div class="relative z-30 p-4 pb-5">
              <div class="bg-white rounded-2xl p-3 sm:p-3.5 shadow-2xl border border-gray-100 flex items-center justify-between gap-3 transform hover:scale-[1.01] transition-transform">
                <img
                  src="${reel.productThumb}"
                  alt="${reel.productTitle}"
                  class="w-12 h-12 rounded-xl object-cover shrink-0 border border-gray-100 bg-[#FAF5F0]"
                />
                <div class="min-w-0 flex-1 text-left">
                  <h4 class="font-bold text-xs sm:text-[13px] text-gray-900 truncate leading-snug">
                    ${reel.productTitle}
                  </h4>
                  <div class="flex items-baseline gap-1.5 mt-0.5">
                    <span class="font-black text-sm text-[#862D42]">${reel.price}</span>
                    <span class="text-[11px] text-gray-400 line-through">${reel.oldPrice}</span>
                  </div>
                </div>
                <a
                  href="${reel.link}"
                  class="bg-[#862D42] hover:bg-[#6D2335] text-white font-bold text-xs px-4 py-2.5 rounded-xl shrink-0 uppercase tracking-wide shadow-sm hover:scale-105 active:scale-95 transition-all text-center leading-none"
                >
                  ${reel.btnText}
                </a>
              </div>

              <!-- Swipe / Scroll Up / Down Indicator Hint -->
              <div class="mt-2.5 flex items-center justify-center gap-1.5 text-white/70 text-[10px] font-medium tracking-wide">
                <span>Scroll down or swipe for next video</span>
                <svg class="w-3.5 h-3.5 stroke-current fill-none animate-bounce" stroke-width="2.2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
          </div>
          `).join('')}
        </div>
      </div>
    </div>
`;

// Insert modal right before </body>
const bodyCloseIdx = content.lastIndexOf('</body>');
if (bodyCloseIdx !== -1) {
  content = content.substring(0, bodyCloseIdx) + whatmoreModalHtml + '\n' + content.substring(bodyCloseIdx);
}

// 2. Add Whatmore Controller Engine to JS
const jsWhatmoreEngine = `
        // =============================================
        // WHATMORE AI REELS FULLSCREEN MODAL CONTROLLER
        // (Scroll to Next Video · Up/Down Navigation)
        // =============================================
        const whatmoreModal = document.getElementById("whatmore-reels-modal");
        const whatmoreTrack = document.getElementById("whatmore-slides-track");
        const whatmoreCloseDesktop = document.getElementById("whatmore-close-desktop");
        const whatmoreCloseMobile = document.getElementById("whatmore-close-mobile");
        const whatmoreNavUp = document.getElementById("whatmore-nav-up");
        const whatmoreNavDown = document.getElementById("whatmore-nav-down");
        const whatmoreCounter = document.getElementById("whatmore-counter");
        const whatmoreSoundBtn = document.getElementById("whatmore-sound-btn");
        const iconSoundOn = document.getElementById("whatmore-icon-sound-on");
        const iconSoundOff = document.getElementById("whatmore-icon-sound-off");
        const progFills = document.querySelectorAll(".reel-prog-fill");

        let currentReelIndex = 0;
        const totalReels = 6;
        let isReelTransitioning = false;
        let reelTimer = null;
        let isMuted = false;

        function updateReelUI(index) {
          currentReelIndex = Math.max(0, Math.min(totalReels - 1, index));
          
          // Smooth slide vertical transform
          if (whatmoreTrack) {
            whatmoreTrack.style.transform = "translateY(-" + (currentReelIndex * 100) + "%)";
          }

          // Update Counter
          if (whatmoreCounter) {
            whatmoreCounter.textContent = (currentReelIndex + 1) + " / " + totalReels;
          }

          // Update progress bars
          progFills.forEach((fill, idx) => {
            if (idx < currentReelIndex) {
              fill.style.width = "100%";
            } else if (idx === currentReelIndex) {
              fill.style.width = "0%";
              setTimeout(() => {
                fill.style.transition = "width 6s linear";
                fill.style.width = "100%";
              }, 50);
            } else {
              fill.style.transition = "none";
              fill.style.width = "0%";
            }
          });

          // Disable buttons at boundary
          if (whatmoreNavUp) {
            if (currentReelIndex === 0) {
              whatmoreNavUp.classList.add("opacity-40", "pointer-events-none");
            } else {
              whatmoreNavUp.classList.remove("opacity-40", "pointer-events-none");
            }
          }
          if (whatmoreNavDown) {
            if (currentReelIndex === totalReels - 1) {
              whatmoreNavDown.classList.add("opacity-40", "pointer-events-none");
            } else {
              whatmoreNavDown.classList.remove("opacity-40", "pointer-events-none");
            }
          }

          // Auto-advance after 6.5 seconds if user doesn't scroll
          clearTimeout(reelTimer);
          reelTimer = setTimeout(() => {
            if (whatmoreModal && !whatmoreModal.classList.contains("hidden")) {
              if (currentReelIndex < totalReels - 1) {
                goToReel(currentReelIndex + 1);
              }
            }
          }, 6500);
        }

        function goToReel(newIndex) {
          if (isReelTransitioning) return;
          if (newIndex < 0 || newIndex >= totalReels) return;
          isReelTransitioning = true;
          updateReelUI(newIndex);
          setTimeout(() => {
            isReelTransitioning = false;
          }, 500);
        }

        function openWhatmoreModal(startIndex = 0) {
          if (!whatmoreModal) return;
          whatmoreModal.classList.remove("hidden");
          setTimeout(() => {
            whatmoreModal.classList.remove("opacity-0");
            whatmoreModal.classList.add("opacity-100");
          }, 10);
          document.body.style.overflow = "hidden";
          goToReel(startIndex);
        }

        function closeWhatmoreModal() {
          if (!whatmoreModal) return;
          clearTimeout(reelTimer);
          whatmoreModal.classList.remove("opacity-100");
          whatmoreModal.classList.add("opacity-0");
          setTimeout(() => {
            whatmoreModal.classList.add("hidden");
            document.body.style.overflow = "";
          }, 300);
        }

        // Attach Click to Play on all 6 Reel Cards in Trending Videos section
        const carouselCards = document.querySelectorAll("#reels-track > a");
        carouselCards.forEach((card, idx) => {
          card.style.cursor = "pointer";
          card.addEventListener("click", (e) => {
            e.preventDefault();
            openWhatmoreModal(idx);
          });
        });

        // Close handlers
        if (whatmoreCloseDesktop) whatmoreCloseDesktop.addEventListener("click", closeWhatmoreModal);
        if (whatmoreCloseMobile) whatmoreCloseMobile.addEventListener("click", closeWhatmoreModal);
        if (whatmoreModal) {
          whatmoreModal.addEventListener("click", (e) => {
            if (e.target === whatmoreModal) closeWhatmoreModal();
          });
        }

        // Navigation button handlers
        if (whatmoreNavUp) whatmoreNavUp.addEventListener("click", () => goToReel(currentReelIndex - 1));
        if (whatmoreNavDown) whatmoreNavDown.addEventListener("click", () => goToReel(currentReelIndex + 1));

        // Sound Toggle Handler
        if (whatmoreSoundBtn) {
          whatmoreSoundBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            isMuted = !isMuted;
            if (isMuted) {
              iconSoundOn.classList.add("hidden");
              iconSoundOff.classList.remove("hidden");
            } else {
              iconSoundOn.classList.remove("hidden");
              iconSoundOff.classList.add("hidden");
            }
          });
        }

        // MOUSE WHEEL SCROLL EVENT (WHATMORE AI FEATURE: Scroll wheel moves to next video)
        const phoneFrame = document.getElementById("whatmore-phone-frame");
        if (phoneFrame) {
          let lastWheelTime = 0;
          phoneFrame.addEventListener("wheel", (e) => {
            e.preventDefault();
            const now = Date.now();
            if (now - lastWheelTime < 450) return; // Debounce wheel
            lastWheelTime = now;

            if (e.deltaY > 25) {
              // Scroll Down -> Next Video
              goToReel(currentReelIndex + 1);
            } else if (e.deltaY < -25) {
              // Scroll Up -> Previous Video
              goToReel(currentReelIndex - 1);
            }
          }, { passive: false });

          // TOUCH SWIPE UP / DOWN EVENT (Mobile TikTok style)
          let touchStartY = 0;
          let touchEndY = 0;

          phoneFrame.addEventListener("touchstart", (e) => {
            touchStartY = e.changedTouches[0].screenY;
          }, { passive: true });

          phoneFrame.addEventListener("touchend", (e) => {
            touchEndY = e.changedTouches[0].screenY;
            const diff = touchStartY - touchEndY;
            if (Math.abs(diff) > 45) {
              if (diff > 0) {
                // Swiped Up -> Next Video
                goToReel(currentReelIndex + 1);
              } else {
                // Swiped Down -> Previous Video
                goToReel(currentReelIndex - 1);
              }
            }
          }, { passive: true });
        }

        // Keyboard navigation (Arrow keys + Escape)
        window.addEventListener("keydown", (e) => {
          if (!whatmoreModal || whatmoreModal.classList.contains("hidden")) return;
          if (e.key === "Escape") {
            closeWhatmoreModal();
          } else if (e.key === "ArrowDown" || e.key === "PageDown") {
            e.preventDefault();
            goToReel(currentReelIndex + 1);
          } else if (e.key === "ArrowUp" || e.key === "PageUp") {
            e.preventDefault();
            goToReel(currentReelIndex - 1);
          }
        });
`;

// Insert the JS code right before the closing of DOMContentLoaded listener
const domLoadedEnd = content.lastIndexOf('}); // End DOMContentLoaded');
if (domLoadedEnd !== -1) {
  content = content.substring(0, domLoadedEnd) + jsWhatmoreEngine + '\n' + content.substring(domLoadedEnd);
} else {
  const scriptEnd = content.lastIndexOf('</script>');
  const lastClose = content.lastIndexOf('});', scriptEnd);
  content = content.substring(0, lastClose) + jsWhatmoreEngine + '\n' + content.substring(lastClose);
}

fs.writeFileSync(indexPath, content, 'utf8');
console.log("Successfully implemented Whatmore AI interactive reels player in index.html!");
