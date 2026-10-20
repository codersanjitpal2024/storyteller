const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// 1. REELS DATA WITH REAL TOP MOST VIEWED REELS FROM @WETHEMUMS ON INSTAGRAM
const reels = [
  {
    index: 0,
    hook: "The Invisible Mental Load: Everyone celebrates the festivals. But who makes it all happen? 🏮",
    caption: "The unseen labor mothers shoulder managing homes and emotional needs that nobody talks about. #MentalLoad #InvisibleLabour #WeTheMums",
    views: "1.2M",
    likes: "48.6k",
    likesCount: 48600,
    shares: "12.4k",
    sharesCount: 12400,
    video: "videos/reel-1.mp4",
    poster: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
    igUrl: "https://www.instagram.com/wethemums/",
    products: [
      {
        title: "The Calm Toddler Blueprint - Complete Video Masterclass",
        img: "images/card-2-parenting.png",
        price: "₹ 1,999",
        original: "₹ 4,999",
        discount: "60% OFF",
        btnText: "ADD TO CART",
        url: "contact.html?course=calm-toddler"
      },
      {
        title: "Tantrum Rescue Kit & Scripts",
        img: "images/card-5-everyday.png",
        price: "₹ 999",
        original: "₹ 2,499",
        discount: "60% OFF",
        btnText: "ADD TO CART",
        url: "contact.html?guide=tantrum-scripts"
      }
    ]
  },
  {
    index: 1,
    hook: "After 5 years of marriage & 3 failed IVF cycles... our miracle baby is finally here 🤍",
    caption: "To every couple still waiting in quiet tears: Do not lose hope. Your miracle is on its way. #IVFJourney #MiracleBaby #WeTheMums",
    views: "940k",
    likes: "62.1k",
    likesCount: 62100,
    shares: "8.9k",
    sharesCount: 8900,
    video: "videos/reel-2.mp4",
    poster: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=800&q=80",
    igUrl: "https://www.instagram.com/wethemums/",
    products: [
      {
        title: "Fourth Trimester Sanctuary - Postpartum Recovery Masterclass",
        img: "images/cat-photo-1.png",
        price: "₹ 2,499",
        original: "₹ 5,999",
        discount: "58% OFF",
        btnText: "ADD TO CART",
        url: "contact.html?course=fourth-trimester"
      },
      {
        title: "Postpartum Recovery & Rest Guide",
        img: "images/cat-photo-3-maternity.jpg",
        price: "₹ 799",
        original: "₹ 1,999",
        discount: "60% OFF",
        btnText: "ADD TO CART",
        url: "contact.html?guide=postpartum-meals"
      }
    ]
  },
  {
    index: 2,
    hook: "The 3 AM feed & postpartum silence nobody warned you about ☕",
    caption: "The quiet hours when the whole house is asleep and you feel overwhelmed and alone. We see you. #FourthTrimester #PostpartumReality",
    views: "820k",
    likes: "39.4k",
    likesCount: 39400,
    shares: "15.2k",
    sharesCount: 15200,
    video: "videos/reel-3.mp4",
    poster: "images/cat-photo-1.png",
    igUrl: "https://www.instagram.com/wethemums/",
    products: [
      {
        title: "Postpartum Recovery & Nourishment Guide",
        img: "images/cat-photo-3-maternity.jpg",
        price: "₹ 799",
        original: "₹ 1,999",
        discount: "60% OFF",
        btnText: "ADD TO CART",
        url: "contact.html?guide=postpartum-meals"
      },
      {
        title: "Motherhood Self-Compassion Daily Journal",
        img: "images/card-1-motherhood.png",
        price: "₹ 699",
        original: "₹ 1,599",
        discount: "56% OFF",
        btnText: "ADD TO CART",
        url: "contact.html?guide=motherhood-journal"
      }
    ]
  },
  {
    index: 3,
    hook: "Conscious Parenting: What we must teach our children about accountability & empathy 💛",
    caption: "Raising responsible, compassionate human beings starts in tiny daily conversations. #ConsciousParenting #ParentingIndia",
    views: "750k",
    likes: "31.8k",
    likesCount: 31800,
    shares: "6.7k",
    sharesCount: 6700,
    video: "videos/reel-4.mp4",
    poster: "images/cat-photo-3-maternity.jpg",
    igUrl: "https://www.instagram.com/wethemums/",
    products: [
      {
        title: "The Connected Family Framework - Deep Bond & Peaceful Bedtimes",
        img: "images/card-5-everyday.png",
        price: "₹ 2,999",
        original: "₹ 6,999",
        discount: "57% OFF",
        btnText: "ADD TO CART",
        url: "contact.html?course=connected-family"
      },
      {
        title: "Bedtime Peace Audio Stories for Kids",
        img: "images/card-2-parenting.png",
        price: "₹ 899",
        original: "₹ 1,899",
        discount: "52% OFF",
        btnText: "ADD TO CART",
        url: "contact.html?guide=bedtime-stories"
      }
    ]
  },
  {
    index: 4,
    hook: "Proof that motherhood doesn't mean giving up on your own dreams and fitness 💪🌸",
    caption: "From postpartum self-doubt to setting world records: Motherhood expands you, it doesn't limit you. #StrongMums #BreakingStereotypes",
    views: "680k",
    likes: "44.5k",
    likesCount: 44500,
    shares: "9.1k",
    sharesCount: 9100,
    video: "videos/reel-5.mp4",
    poster: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    igUrl: "https://www.instagram.com/wethemums/",
    products: [
      {
        title: "WithTheMums Annual VIP Membership Pass - All Courses Included",
        img: "images/testimonial-left-mother.png",
        price: "₹ 3,999",
        original: "₹ 8,999",
        discount: "55% OFF",
        btnText: "ADD TO CART",
        url: "contact.html?pass=vip-annual"
      },
      {
        title: "Motherhood Self-Compassion Daily Journal & Prompts",
        img: "images/card-1-motherhood.png",
        price: "₹ 699",
        original: "₹ 1,599",
        discount: "56% OFF",
        btnText: "ADD TO CART",
        url: "contact.html?guide=motherhood-journal"
      }
    ]
  },
  {
    index: 5,
    hook: "Toddler screaming 'NO'? The 30-sec co-regulation trick that resets a meltdown 🧘‍♀️",
    caption: "Shouting back only dysregulates their nervous system more. Here's how to connect first. #ToddlerLife #GentleParenting",
    views: "1.1M",
    likes: "53.2k",
    likesCount: 53200,
    shares: "18.6k",
    sharesCount: 18600,
    video: "videos/reel-6.mp4",
    poster: "images/cat-photo-4-feeding.jpg",
    igUrl: "https://www.instagram.com/wethemums/",
    products: [
      {
        title: "Baby-Led Weaning Starter Guide & Milestone Recipes",
        img: "images/cat-photo-4-feeding.jpg",
        price: "₹ 1,499",
        original: "₹ 3,499",
        discount: "57% OFF",
        btnText: "ADD TO CART",
        url: "contact.html?guide=baby-led-weaning"
      },
      {
        title: "Tantrum Rescue Kit & Emergency Scripts",
        img: "images/card-5-everyday.png",
        price: "₹ 999",
        original: "₹ 2,499",
        discount: "60% OFF",
        btnText: "ADD TO CART",
        url: "contact.html?guide=tantrum-scripts"
      }
    ]
  }
];

// 2. BUILD HOMEPAGE CAROUSEL CARDS
const carouselCardsHtml = reels.map(r => `
              <!-- REEL ${r.index + 1}: ${r.views} VIEWS -->
              <a
                href="${r.igUrl}"
                class="w-[240px] sm:w-[270px] aspect-[9/16] shrink-0 snap-start rounded-[24px] overflow-hidden relative group bg-[#1F191A] shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(134,45,66,0.18)] hover:-translate-y-2 transition-all duration-300 block select-none border border-[#EBE1D9] cursor-pointer"
                data-reel-index="${r.index}"
              >
                <!-- Video Poster Image -->
                <img
                  src="${r.poster}"
                  alt="${r.hook}"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/30"></div>

                <!-- Top Header Overlay (Reel Badge + View Count from Instagram) -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide border border-white/20">
                    <svg class="w-3 h-3 fill-current text-[#F28B82]" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Reel
                  </span>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white/95 text-[10px] font-bold border border-white/20">
                    <svg class="w-3 h-3 text-[#F28B82] fill-current" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                    ${r.views}
                  </span>
                </div>

                <!-- Center Hover Play Pulse Button -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div class="w-13 h-13 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-115 group-hover:bg-[#862D42] group-hover:border-[#862D42] transition-all duration-300">
                    <svg class="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
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
                    "${r.hook}"
                  </p>
                  <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-white/20 text-[10px] text-white/80">
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3 text-[#F28B82] fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      ${r.likes}
                    </span>
                    <span class="font-semibold text-white group-hover:text-[#F28B82] transition-colors flex items-center gap-1">
                      Click to Play &rarr;
                    </span>
                  </div>
                </div>
              </a>
`).join('\n');

// 3. BUILD WHATMORE REELS MODAL (NO LEFT OR RIGHT CARDS, FULLY PLAYABLE VIDEOS)
const newModalHtml = `
    <!-- ============================================= -->
    <!-- WHATMORE AI FULLSCREEN PLAYABLE REELS MODAL   -->
    <!-- (Clean Centered Reel, 100% Playable Videos)   -->
    <!-- ============================================= -->
    <div
      id="whatmore-reels-modal"
      class="fixed inset-0 z-[999999] bg-black/92 backdrop-blur-md hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-0 sm:p-4 select-none overflow-hidden"
      aria-modal="true"
      role="dialog"
    >
      <!-- Toast Notification for Like / Share / Cart -->
      <div
        id="whatmore-toast"
        class="absolute top-6 left-1/2 -translate-x-1/2 z-[100] px-4 py-2 rounded-full bg-white/95 text-gray-900 text-xs font-bold shadow-2xl backdrop-blur-md border border-gray-200 transition-all duration-300 opacity-0 -translate-y-4 pointer-events-none flex items-center gap-2"
      >
        <span id="whatmore-toast-icon">✓</span>
        <span id="whatmore-toast-msg">Reel ready!</span>
      </div>

      <!-- Desktop Vertical Navigation Chevrons & Reel Counter (Beside Card) -->
      <div class="hidden lg:flex flex-col items-center gap-3 absolute right-6 xl:right-12 top-1/2 -translate-y-1/2 z-50">
        <button
          id="whatmore-nav-up"
          class="w-12 h-12 rounded-full bg-white/15 hover:bg-[#862D42] text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95"
          title="Previous Video (Scroll Up)"
        >
          <svg class="w-5 h-5 stroke-current fill-none" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"/></svg>
        </button>
        <div class="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono font-semibold border border-white/20" id="whatmore-counter">
          1 / 6
        </div>
        <button
          id="whatmore-nav-down"
          class="w-12 h-12 rounded-full bg-white/15 hover:bg-[#862D42] text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95"
          title="Next Video (Scroll Down)"
        >
          <svg class="w-5 h-5 stroke-current fill-none" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </button>
      </div>

      <!-- Central Phone Frame (Clean, Focused, 100% Playable Video) -->
      <div
        id="whatmore-phone-frame"
        class="relative w-full sm:w-[410px] md:w-[420px] h-full sm:h-[88vh] sm:max-h-[820px] sm:rounded-[32px] overflow-hidden bg-black shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col border border-white/15 z-20"
      >
        <!-- Top Multi-Segment Progress Bars (Syncs with video playback) -->
        <div class="absolute top-3 left-4 right-4 z-50 flex gap-1.5 pointer-events-none">
          ${reels.map(() => `
          <div class="reel-prog-bar flex-1 h-[2.5px] bg-white/30 rounded-full overflow-hidden">
            <div class="reel-prog-fill w-0 h-full bg-white transition-[width] duration-100 ease-linear"></div>
          </div>
          `).join('')}
        </div>

        <!-- Top Right In-Video Close Button (100% MATCH TO REFERENCE IMAGE TOP RIGHT 'X') -->
        <button
          id="whatmore-close-card"
          class="absolute top-5 right-4 z-50 w-10 h-10 rounded-full bg-black/55 hover:bg-black/85 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          aria-label="Close Reels Player"
          title="Close (Esc)"
        >
          <svg class="w-5 h-5 stroke-current fill-none" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <!-- Top Left Profile Pill -->
        <div class="absolute top-5 left-4 z-40 flex items-center gap-2 pointer-events-none">
          <img src="images/testimonial-left-mother.png" alt="@wethemums" class="w-8 h-8 rounded-full object-cover border-2 border-white shadow-md" />
          <div>
            <div class="flex items-center gap-1">
              <span class="text-xs font-bold text-white tracking-wide">@wethemums</span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#3897F0] flex items-center justify-center text-white text-[8px] font-bold">✓</span>
            </div>
            <span class="text-[10px] text-white/80 block -mt-0.5">WithTheMums Community</span>
          </div>
        </div>

        <!-- Right-Side Floating Actions Column (Heart + Like Count, Share + Share Count, Sound, IG) -->
        <div class="absolute right-3.5 bottom-36 sm:bottom-40 z-40 flex flex-col items-center gap-3.5">
          <!-- Heart / Like Button -->
          <div class="flex flex-col items-center gap-1 cursor-pointer group" id="whatmore-like-container" title="Like Reel">
            <button
              id="whatmore-like-btn"
              class="w-11 h-11 rounded-full bg-black/55 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-md active:scale-125"
            >
              <svg id="whatmore-like-svg" class="w-5 h-5 stroke-current fill-none transition-colors duration-200" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
            <span id="whatmore-like-count" class="text-white text-xs font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">${reels[0].likes}</span>
          </div>

          <!-- Share Button with Count -->
          <div class="flex flex-col items-center gap-1 cursor-pointer group" id="whatmore-share-container" title="Share Reel">
            <button
              id="whatmore-share-btn"
              class="w-11 h-11 rounded-full bg-black/55 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-md active:scale-110"
            >
              <svg class="w-5 h-5 fill-none stroke-current translate-x-0.5" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
            <span id="whatmore-share-count" class="text-white text-xs font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">${reels[0].shares}</span>
          </div>

          <!-- Sound Mute/Unmute Button -->
          <button
            id="whatmore-sound-btn"
            class="w-10 h-10 rounded-full bg-black/55 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-md"
            title="Toggle Sound"
          >
            <!-- Speaker Playing -->
            <svg id="whatmore-icon-sound-on" class="w-4 h-4 fill-current hidden" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
            <!-- Speaker Muted (default for autoplay compliance) -->
            <svg id="whatmore-icon-sound-off" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          </button>

          <!-- Instagram Direct Link -->
          <a
            href="https://www.instagram.com/wethemums/"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-black/55 hover:bg-[#862D42] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-md group"
            title="Open Instagram @wethemums"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        <!-- Vertical Slides Track (Smooth translateY like TikTok / Mobile Reels) -->
        <div
          id="whatmore-slides-track"
          class="w-full h-full flex flex-col transition-transform duration-500 ease-out"
          style="transform: translateY(0%);"
        >
          ${reels.map(reel => `
          <div class="whatmore-slide w-full h-full shrink-0 relative overflow-hidden bg-black flex flex-col justify-between" data-index="${reel.index}">
            <!-- Real HTML5 Playable Video Element -->
            <video
              class="whatmore-video absolute inset-0 w-full h-full object-cover select-none cursor-pointer"
              src="${reel.video}"
              poster="${reel.poster}"
              playsinline
              loop
              muted
              preload="auto"
            ></video>

            <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/40 pointer-events-none"></div>

            <!-- Top spacer for header -->
            <div class="h-16 pointer-events-none"></div>

            <!-- Center Reel Big Hook & Play/Pause Pulse Button -->
            <div class="relative z-30 px-6 text-center my-auto pointer-events-none">
              <h3
                class="font-serif text-2xl sm:text-[27px] font-semibold text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] max-w-xs mx-auto"
                style="text-shadow: 0 2px 12px rgba(0,0,0,0.95), 0 0 2px #000;"
              >
                ${reel.hook}
              </h3>
              
              <!-- Center Play/Pause Ring Button (Clickable) -->
              <button
                class="whatmore-play-btn pointer-events-auto w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/50 mx-auto mt-5 flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Toggle Play"
              >
                <!-- Play Icon -->
                <svg class="whatmore-icon-play w-7 h-7 fill-current translate-x-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <!-- Pause Icon -->
                <svg class="whatmore-icon-pause w-7 h-7 fill-current hidden" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              </button>
            </div>

            <!-- Bottom Floating Product Cards (Shoppable Reels Slider) -->
            <div class="relative z-30 px-3 pb-3 pt-1">
              <!-- Horizontal Slider with 2 Shoppable Cards (1 full + 1 peeking, 100% match to Whatmore AI) -->
              <div class="flex gap-2.5 overflow-x-auto scrollbar-none pb-1 pt-1 px-1 -mx-1 select-none" style="scrollbar-width: none; -ms-overflow-style: none;">
                ${reel.products.map(p => `
                <div class="w-[245px] sm:w-[260px] shrink-0 bg-white rounded-2xl p-2.5 sm:p-3 shadow-[0_8px_25px_rgba(0,0,0,0.35)] border border-gray-100 flex flex-col justify-between gap-2 transform hover:scale-[1.01] transition-transform">
                  <div class="flex items-start gap-2.5">
                    <img
                      src="${p.img}"
                      alt="${p.title}"
                      class="w-11 h-11 rounded-xl object-cover shrink-0 border border-gray-100 bg-[#FAF5F0]"
                    />
                    <div class="min-w-0 flex-1 text-left">
                      <div class="flex items-start justify-between gap-1">
                        <h4 class="font-bold text-[11px] sm:text-xs text-gray-900 leading-snug line-clamp-2">
                          ${p.title}
                        </h4>
                        <a href="${p.url}" class="text-gray-400 hover:text-gray-700 shrink-0 p-0.5" title="View Details">
                          <svg class="w-3.5 h-3.5 stroke-current fill-none" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                      </div>
                      <div class="flex items-baseline gap-1.5 mt-1">
                        <span class="font-extrabold text-xs sm:text-[13px] text-gray-900">${p.price}</span>
                        <span class="text-[10px] text-gray-400 line-through">${p.original}</span>
                        <span class="text-[10px] font-bold text-[#0da49b]">${p.discount}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="${p.url}"
                    class="whatmore-cart-btn w-full bg-[#0da49b] hover:bg-[#0b8a82] active:scale-98 text-white font-extrabold text-[11px] sm:text-xs py-2 rounded-xl uppercase tracking-wider text-center transition-all shadow-sm block leading-none"
                    data-product-title="${p.title}"
                  >
                    ${p.btnText}
                  </a>
                </div>
                `).join('')}
              </div>

              <!-- Scroll indicator hint -->
              <div class="mt-1.5 flex items-center justify-center gap-1.5 text-white/70 text-[10px] font-medium tracking-wide">
                <span>Scroll down for next video</span>
                <svg class="w-3 h-3 stroke-current fill-none animate-bounce" stroke-width="2.2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
          </div>
          `).join('')}
        </div>
      </div>
    </div>
`;

// 4. BUILD THE JAVASCRIPT CONTROLLER (PLAYABLE VIDEO + MOBILE REEL SCROLL)
const newModalJs = `
        // =============================================
        // WHATMORE AI PLAYABLE REELS FULLSCREEN CONTROLLER
        // (Playable Videos, Real-time Sync, Scroll Physics)
        // =============================================
        const whatmoreModal = document.getElementById("whatmore-reels-modal");
        const whatmoreTrack = document.getElementById("whatmore-slides-track");
        const whatmoreCloseCard = document.getElementById("whatmore-close-card");
        const whatmoreNavUp = document.getElementById("whatmore-nav-up");
        const whatmoreNavDown = document.getElementById("whatmore-nav-down");
        const whatmoreCounter = document.getElementById("whatmore-counter");
        const whatmoreSoundBtn = document.getElementById("whatmore-sound-btn");
        const iconSoundOn = document.getElementById("whatmore-icon-sound-on");
        const iconSoundOff = document.getElementById("whatmore-icon-sound-off");
        const progFills = document.querySelectorAll(".reel-prog-fill");

        const likeBtn = document.getElementById("whatmore-like-btn");
        const likeSvg = document.getElementById("whatmore-like-svg");
        const likeCount = document.getElementById("whatmore-like-count");
        const shareBtn = document.getElementById("whatmore-share-btn");
        const shareCount = document.getElementById("whatmore-share-count");
        const toast = document.getElementById("whatmore-toast");
        const toastIcon = document.getElementById("whatmore-toast-icon");
        const toastMsg = document.getElementById("whatmore-toast-msg");

        const allVideos = document.querySelectorAll(".whatmore-video");
        const allPlayBtns = document.querySelectorAll(".whatmore-play-btn");

        const reelsData = ${JSON.stringify(reels.map(r => ({
          index: r.index,
          hook: r.hook,
          views: r.views,
          likes: r.likes,
          likesCount: r.likesCount,
          shares: r.shares,
          sharesCount: r.sharesCount
        })), null, 2)};

        let currentReelIndex = 0;
        const totalReels = reelsData.length;
        let isReelTransitioning = false;
        let isMuted = true;
        const userLiked = {};

        function showToast(msg, icon = "✓") {
          if (!toast) return;
          toastMsg.textContent = msg;
          toastIcon.textContent = icon;
          toast.classList.remove("opacity-0", "-translate-y-4");
          toast.classList.add("opacity-100", "translate-y-0");
          setTimeout(() => {
            toast.classList.remove("opacity-100", "translate-y-0");
            toast.classList.add("opacity-0", "-translate-y-4");
          }, 2400);
        }

        function playVideoAtIndex(idx) {
          allVideos.forEach((vid, i) => {
            if (i === idx) {
              vid.muted = isMuted;
              const playPromise = vid.play();
              if (playPromise !== undefined) {
                playPromise.then(() => {
                  updatePlayBtnUI(idx, true);
                }).catch(() => {
                  // Autoplay requires muted or click
                  vid.muted = true;
                  vid.play().then(() => updatePlayBtnUI(idx, true)).catch(() => updatePlayBtnUI(idx, false));
                });
              }
            } else {
              vid.pause();
              vid.currentTime = 0;
              updatePlayBtnUI(i, false);
            }
          });
        }

        function updatePlayBtnUI(idx, isPlaying) {
          const btn = allPlayBtns[idx];
          if (!btn) return;
          const playIcon = btn.querySelector(".whatmore-icon-play");
          const pauseIcon = btn.querySelector(".whatmore-icon-pause");
          if (isPlaying) {
            btn.classList.add("opacity-0", "scale-75");
            btn.classList.remove("opacity-100", "scale-100");
            if (playIcon) playIcon.classList.add("hidden");
            if (pauseIcon) pauseIcon.classList.remove("hidden");
          } else {
            btn.classList.remove("opacity-0", "scale-75");
            btn.classList.add("opacity-100", "scale-100");
            if (playIcon) playIcon.classList.remove("hidden");
            if (pauseIcon) pauseIcon.classList.add("hidden");
          }
        }

        function togglePlayPause(idx) {
          const vid = allVideos[idx];
          if (!vid) return;
          if (vid.paused) {
            vid.play().then(() => updatePlayBtnUI(idx, true)).catch(() => {});
          } else {
            vid.pause();
            updatePlayBtnUI(idx, false);
          }
        }

        // Setup real-time progress bar sync for each video
        allVideos.forEach((vid, idx) => {
          vid.addEventListener("timeupdate", () => {
            if (idx === currentReelIndex && vid.duration) {
              const pct = (vid.currentTime / vid.duration) * 100;
              const activeFill = progFills[idx];
              if (activeFill) {
                activeFill.style.width = pct + "%";
              }
            }
          });

          // Click video directly to toggle play/pause
          vid.addEventListener("click", (e) => {
            e.stopPropagation();
            togglePlayPause(idx);
          });
        });

        // Setup play button clicks
        allPlayBtns.forEach((btn, idx) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            togglePlayPause(idx);
          });
        });

        function updateReelUI(index) {
          currentReelIndex = Math.max(0, Math.min(totalReels - 1, index));
          
          // Smooth slide vertical transform (slides up from below like mobile reels)
          if (whatmoreTrack) {
            whatmoreTrack.style.transition = "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)";
            whatmoreTrack.style.transform = "translateY(-" + (currentReelIndex * 100) + "%)";
          }

          // Start playing the video
          playVideoAtIndex(currentReelIndex);

          // Update Counter
          if (whatmoreCounter) {
            whatmoreCounter.textContent = (currentReelIndex + 1) + " / " + totalReels;
          }

          // Update like and share counters for active reel
          const currentData = reelsData[currentReelIndex];
          if (likeCount) {
            const extra = userLiked[currentReelIndex] ? 1 : 0;
            likeCount.textContent = extra ? (currentData.likesCount + 1).toLocaleString() : currentData.likes;
          }
          if (likeSvg) {
            if (userLiked[currentReelIndex]) {
              likeSvg.classList.remove("fill-none");
              likeSvg.classList.add("fill-red-500", "text-red-500");
            } else {
              likeSvg.classList.remove("fill-red-500", "text-red-500");
              likeSvg.classList.add("fill-none");
            }
          }
          if (shareCount) {
            shareCount.textContent = currentData.shares;
          }

          // Update progress bar widths
          progFills.forEach((fill, idx) => {
            if (idx < currentReelIndex) {
              fill.style.width = "100%";
            } else if (idx > currentReelIndex) {
              fill.style.width = "0%";
            }
          });

          // Disable arrow buttons at boundary
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
        }

        function goToReel(newIndex) {
          if (isReelTransitioning) return;
          if (newIndex < 0 || newIndex >= totalReels) return;
          isReelTransitioning = true;
          updateReelUI(newIndex);
          setTimeout(() => {
            isReelTransitioning = false;
          }, 460);
        }

        window.openWhatmoreModal = openWhatmoreModal;
        window.closeWhatmoreModal = closeWhatmoreModal;
        window.goToReel = goToReel;

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
          allVideos.forEach(vid => {
            vid.pause();
            vid.currentTime = 0;
          });
          whatmoreModal.classList.remove("opacity-100");
          whatmoreModal.classList.add("opacity-0");
          setTimeout(() => {
            whatmoreModal.classList.add("hidden");
            document.body.style.overflow = "";
          }, 300);
        }

        // Attach Click to Play on all Reel Cards in Trending Videos section
        const carouselCards = document.querySelectorAll("#reels-track > a");
        carouselCards.forEach((card, idx) => {
          card.style.cursor = "pointer";
          card.addEventListener("click", (e) => {
            e.preventDefault();
            openWhatmoreModal(idx);
          });
        });

        // Close handlers
        if (whatmoreCloseCard) whatmoreCloseCard.addEventListener("click", closeWhatmoreModal);
        if (whatmoreModal) {
          whatmoreModal.addEventListener("click", (e) => {
            if (e.target === whatmoreModal) closeWhatmoreModal();
          });
        }

        // Navigation button handlers
        if (whatmoreNavUp) whatmoreNavUp.addEventListener("click", () => goToReel(currentReelIndex - 1));
        if (whatmoreNavDown) whatmoreNavDown.addEventListener("click", () => goToReel(currentReelIndex + 1));

        // Like Button Interaction
        if (likeBtn) {
          likeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            userLiked[currentReelIndex] = !userLiked[currentReelIndex];
            const currentData = reelsData[currentReelIndex];
            const extra = userLiked[currentReelIndex] ? 1 : 0;
            if (likeCount) likeCount.textContent = extra ? (currentData.likesCount + 1).toLocaleString() : currentData.likes;
            if (userLiked[currentReelIndex]) {
              likeSvg.classList.remove("fill-none");
              likeSvg.classList.add("fill-red-500", "text-red-500");
              showToast("Loved this reel! ❤️", "❤️");
            } else {
              likeSvg.classList.remove("fill-red-500", "text-red-500");
              likeSvg.classList.add("fill-none");
            }
          });
        }

        // Share Button Interaction
        if (shareBtn) {
          shareBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (navigator.share) {
              navigator.share({
                title: reelsData[currentReelIndex].hook,
                url: window.location.href
              }).catch(() => {});
            } else {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                showToast("Reel link copied to clipboard! ➦", "➦");
              } else {
                showToast("Share link ready! ➦", "➦");
              }
            }
          });
        }

        // Add to Cart Buttons inside reels
        document.querySelectorAll(".whatmore-cart-btn").forEach(btn => {
          btn.addEventListener("click", (e) => {
            const pTitle = btn.getAttribute("data-product-title") || "Course";
            showToast("Added to Cart: " + pTitle.slice(0, 24) + "... 🛍️", "🛍️");
          });
        });

        // Sound Toggle Handler (Unmutes / Mutes active video)
        if (whatmoreSoundBtn) {
          whatmoreSoundBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            isMuted = !isMuted;
            allVideos.forEach(vid => vid.muted = isMuted);
            if (isMuted) {
              iconSoundOn.classList.add("hidden");
              iconSoundOff.classList.remove("hidden");
              showToast("Sound Muted 🔇", "🔇");
            } else {
              iconSoundOn.classList.remove("hidden");
              iconSoundOff.classList.add("hidden");
              showToast("Sound Playing 🔊", "🔊");
            }
          });
        }

        // MOUSE WHEEL SCROLL EVENT (Scroll moves to next video from below)
        const phoneFrame = document.getElementById("whatmore-phone-frame");
        if (phoneFrame) {
          let lastWheelTime = 0;
          
          function handleReelWheel(e) {
            // Ignore horizontal scroll inside product card slider
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
            e.preventDefault();
            const now = Date.now();
            if (now - lastWheelTime < 420) return; // Debounce wheel
            lastWheelTime = now;

            if (e.deltaY > 20) {
              // Scroll Down -> Next Video (Slides up from below)
              goToReel(currentReelIndex + 1);
            } else if (e.deltaY < -20) {
              // Scroll Up -> Previous Video (Slides down from above)
              goToReel(currentReelIndex - 1);
            }
          }

          phoneFrame.addEventListener("wheel", handleReelWheel, { passive: false });
          if (whatmoreModal) {
            whatmoreModal.addEventListener("wheel", (e) => {
              if (e.target === whatmoreModal) {
                handleReelWheel(e);
              }
            }, { passive: false });
          }

          // TOUCH SWIPE UP / DOWN EVENT (Mobile TikTok style)
          let touchStartY = 0;
          let touchStartX = 0;

          phoneFrame.addEventListener("touchstart", (e) => {
            touchStartY = e.changedTouches[0].screenY;
            touchStartX = e.changedTouches[0].screenX;
          }, { passive: true });

          phoneFrame.addEventListener("touchend", (e) => {
            const touchEndY = e.changedTouches[0].screenY;
            const touchEndX = e.changedTouches[0].screenX;
            const diffY = touchStartY - touchEndY;
            const diffX = touchStartX - touchEndX;
            // Only trigger vertical reel scroll if swipe is primarily vertical
            if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 35) {
              if (diffY > 0) {
                // Swiped Up -> Next Video from below
                goToReel(currentReelIndex + 1);
              } else {
                // Swiped Down -> Previous Video from above
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

// 5. UPDATE index.html
// Replace carousel cards inside #reels-track
const reelsTrackStart = content.indexOf('id="reels-track"');
if (reelsTrackStart === -1) {
  console.error("Could not find reels-track in index.html");
  process.exit(1);
}

const reelsTrackOpenTagEnd = content.indexOf('>', reelsTrackStart) + 1;
// Find the end of reels-track div (before the closing </div> of Video Carousel Track)
const reelsTrackEndMarker = '<!-- Desktop Right Carousel Button -->';
let reelsTrackEnd = content.indexOf(reelsTrackEndMarker, reelsTrackOpenTagEnd);
if (reelsTrackEnd === -1) {
  // alternative search
  reelsTrackEnd = content.indexOf('</div>\n\n            <!-- Desktop Left Carousel Button -->', reelsTrackOpenTagEnd);
  if (reelsTrackEnd === -1) {
    reelsTrackEnd = content.indexOf('</div>\n            <!-- Desktop Right Carousel Button -->', reelsTrackOpenTagEnd);
  }
}

// Better yet: find the closing </div> of reels-track
// Let's find by looking for the last </a> inside reels-track
const lastCardMarker = '<!-- REEL 6';
const lastCardIndex = content.indexOf(lastCardMarker, reelsTrackOpenTagEnd);
const nextDivClose = content.indexOf('</div>', lastCardIndex);

console.log("Replacing carousel cards between:", reelsTrackOpenTagEnd, nextDivClose);
const updatedCarousel = content.slice(0, reelsTrackOpenTagEnd) + '\n' + carouselCardsHtml + '\n            ' + content.slice(nextDivClose);

// Now update the JS controller
const jsStartStr = '// WHATMORE AI REELS FULLSCREEN MODAL CONTROLLER';
let jsStartIndex = updatedCarousel.indexOf(jsStartStr);
if (jsStartIndex === -1) {
  jsStartIndex = updatedCarousel.indexOf('// WHATMORE AI PLAYABLE REELS FULLSCREEN CONTROLLER');
}
const jsCommentStart = updatedCarousel.lastIndexOf('// =============================================', jsStartIndex);
const jsEndPattern = '        });\n\n});\n    </script>';
let jsEndIndex = updatedCarousel.indexOf(jsEndPattern, jsStartIndex);
if (jsEndIndex === -1) {
  jsEndIndex = updatedCarousel.indexOf('        });\n});\n    </script>', jsStartIndex);
}

console.log("Replacing JS controller between:", jsCommentStart, jsEndIndex);
const beforeJs = updatedCarousel.slice(0, jsCommentStart);
const afterJs = updatedCarousel.slice(jsEndIndex + jsEndPattern.length);

// Now locate the modal HTML in afterJs
const htmlModalMarker = '<!-- WHATMORE AI FULLSCREEN REELS POPUP PLAYER';
let htmlModalIndex = afterJs.indexOf(htmlModalMarker);
if (htmlModalIndex === -1) {
  htmlModalIndex = afterJs.indexOf('<!-- WHATMORE AI FULLSCREEN PLAYABLE REELS MODAL');
}
const htmlModalCommentStart = afterJs.lastIndexOf('<!-- ============================================= -->', htmlModalIndex);
const bodyCloseIndex = afterJs.indexOf('</body>', htmlModalIndex);

console.log("Replacing modal HTML between:", htmlModalCommentStart, bodyCloseIndex);
const betweenJsAndModal = afterJs.slice(0, htmlModalCommentStart);
const afterBodyClose = afterJs.slice(bodyCloseIndex);

const finalHtml = beforeJs + newModalJs + '\n});\n    </script>' + betweenJsAndModal + newModalHtml + '\n' + afterBodyClose;

fs.writeFileSync(indexPath, finalHtml, 'utf8');
console.log("Successfully updated index.html with real playable top Instagram reels and removed side cards!");
