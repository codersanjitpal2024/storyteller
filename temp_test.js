
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            berry: {
              50: '#FAF4F5',
              100: '#F5E8EB',
              200: '#ECCFD4',
              300: '#DFAAB3',
              400: '#BA6B7A',
              DEFAULT: '#632232', // Exact deep rich berry from screenshot
              hover: '#501A27',
              dark: '#3D1520',
              topbar: '#541E2A',
              footer: '#270F16',
            },
            cream: {
              DEFAULT: '#FAF7F2', // Soft warm cream hero background
              card: '#FFFFFF',
              border: '#EFE7E1',
            },
            tagBorder: '#F2DFDA',
            tagBg: '#FCF5F3',
            dustyPeach: '#E6B8AF',
            iconBg: '#FCECEF',
            charcoal: '#2D2926',
            muted: '#635C57',
          },
          fontFamily: {
            serif: ['Newsreader', 'Georgia', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
            hand: ['Caveat', 'cursive'],
          }
        }
      }
    }
  </script>

  <!-- GSAP + ScrollTrigger for premium scroll text animations -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

  <style>
    /* ======================================================== */
    /* SCROLL TEXT ANIMATION ENGINE (SteadyShield-inspired)     */
    /* ======================================================== */

    /* Word-level reveal: each word clips up from below */
    .reveal-lines .word {
      display: inline-block;
      will-change: transform, opacity;
    }

    /* Fade-up reveal for paragraphs, subtext, buttons */
    .reveal-fade {
      will-change: transform, opacity;
    }

    /* Staggered card/block reveal */
    .reveal-block {
      will-change: transform, opacity;
    }
    ::selection {
      background-color: #ECCFD4;
      color: #3D1520;
    }
    .hand-script {
      font-family: 'Caveat', cursive;
    }

    /* ======================================================== */
    /* $100K LUXURY ANIMATIONS & MICRO-INTERACTIONS ENGINE     */
    /* ======================================================== */

    /* Custom Luxury Magnetic Cursor */
    .custom-cursor-dot {
      position: fixed;
      top: 0;
      left: 0;
      width: 8px;
      height: 8px;
      background-color: #BA6B7A;
      border-radius: 50%;
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
      transition: width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s;
    }
    .custom-cursor-ring {
      position: fixed;
      top: 0;
      left: 0;
      width: 38px;
      height: 38px;
      border: 1.5px solid rgba(186, 107, 122, 0.45);
      border-radius: 50%;
      pointer-events: none;
      z-index: 99998;
      transform: translate(-50%, -50%);
      transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s, background-color 0.2s;
    }
    .cursor-hover .custom-cursor-ring {
      width: 64px;
      height: 64px;
      border-color: rgba(99, 34, 50, 0.3);
      background-color: rgba(236, 207, 212, 0.15);
      backdrop-filter: blur(2px);
    }
    .cursor-hover .custom-cursor-dot {
      width: 4px;
      height: 4px;
      opacity: 0.5;
    }
    @media (hover: none) and (pointer: coarse) {
      .custom-cursor-dot, .custom-cursor-ring { display: none !important; }
    }

    /* Top Reading Progress Bar */
    #progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      width: 0%;
      background: linear-gradient(90deg, #541E2A 0%, #BA6B7A 50%, #ECCFD4 100%);
      z-index: 100000;
      transition: width 0.08s ease-out;
    }

    /* Sweeping Organic Arch & Wave Mask on Hero Photo matching screenshot */
    .hero-photo-curve {
      border-top-left-radius: 280px;
      border-bottom-left-radius: 280px;
      border-bottom-right-radius: 120px;
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @media (min-width: 1024px) {
      .hero-photo-curve {
        border-top-left-radius: 420px;
        border-bottom-left-radius: 360px;
        border-bottom-right-radius: 140px;
      }
    }
    @media (max-width: 768px) {
      .hero-photo-curve {
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 60px;
      }
    }

    /* Delicate Heartbeat Pulse */
    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      14% { transform: scale(1.18); }
      28% { transform: scale(1); }
      42% { transform: scale(1.14); }
      70% { transform: scale(1); }
    }
    .animate-heartbeat {
      animation: heartbeat 2.6s ease-in-out infinite;
      transform-origin: center;
      display: inline-block;
    }

    /* Ambient Float Animation for Doodles & Leaves */
    @keyframes gentleFloat {
      0%, 100% { transform: translateY(0px) rotate(-3deg); }
      50% { transform: translateY(-7px) rotate(-1deg); }
    }
    .animate-gentle-float {
      animation: gentleFloat 5s ease-in-out infinite;
    }

    @keyframes botanicalSway {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-5px) rotate(2deg); }
    }
    .animate-sway {
      animation: botanicalSway 7s ease-in-out infinite;
    }

    /* Liquid Shimmer Light-Beam for Luxury Pill Buttons */
    .btn-shimmer {
      position: relative;
      overflow: hidden;
    }
    .btn-shimmer::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -60%;
      width: 40%;
      height: 200%;
      background: linear-gradient(
        60deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.45) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: rotate(25deg);
      transition: all 0.75s ease-in-out;
      opacity: 0;
      pointer-events: none;
    }
    .btn-shimmer:hover::after {
      left: 120%;
      opacity: 1;
    }

    /* 3D Interactive Card Tilt Perspective */
    .card-3d {
      perspective: 1000px;
      transform-style: preserve-3d;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .card-3d-inner {
      transform-style: preserve-3d;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Scroll-Triggered Fade & Slide Reveals */
    .reveal-init {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity, transform;
    }
    .reveal-active {
      opacity: 1;
      transform: translateY(0);
    }

    /* Floating Heart Reaction Bursts */
    .flying-heart {
      position: fixed;
      pointer-events: none;
      z-index: 100000;
      user-select: none;
      animation: flyUpAndFade 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    @keyframes flyUpAndFade {
      0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(0.6) rotate(0deg);
      }
      50% {
        opacity: 0.9;
        transform: translate(calc(-50% + var(--dx, 0px)), calc(-50% - 60px)) scale(1.2) rotate(var(--rot, 15deg));
      }
      100% {
        opacity: 0;
        transform: translate(calc(-50% + calc(var(--dx, 0px) * 1.5)), calc(-50% - 130px)) scale(1.4) rotate(var(--rot, 25deg));
      }
    }

    /* Soft Glow for Dark Berry Banner */
    .berry-ambient-glow {
      position: absolute;
      width: 320px;
      height: 320px;
      background: radial-gradient(circle, rgba(186, 107, 122, 0.35) 0%, rgba(99, 34, 50, 0) 70%);
      filter: blur(40px);
      border-radius: 50%;
      pointer-events: none;
    }
  </style>
</head>
<body class="bg-cream text-charcoal font-sans antialiased min-h-screen flex flex-col selection:bg-berry-200">

  <!-- LUXURY READING PROGRESS BAR -->
  <div id="progress-bar"></div>

  <!-- LUXURY CUSTOM MAGNETIC CURSOR -->
  <div class="custom-cursor-dot" id="cursor-dot"></div>
  <div class="custom-cursor-ring" id="cursor-ring"></div>

  <!-- TOP BAR -->
  <div class="bg-berry-topbar text-white text-[11px] sm:text-xs py-2 px-4 sm:px-8 border-b border-white/10 relative z-30">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- Left: Heart icon + Tagline with small dropdown indicator -->
      <div class="flex items-center gap-1.5 font-normal tracking-wide">
        <svg class="w-3.5 h-3.5 text-dustyPeach fill-current flex-shrink-0" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
        </svg>
        <span>A supportive community for every stage of motherhood</span>
        <svg class="w-2.5 h-2.5 ml-0.5 text-dustyPeach opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
      </div>

      <!-- Right: Follow Us with social icons -->
      <div class="hidden sm:flex items-center gap-3 text-[11px] text-white/90">
        <span class="text-white/80">Follow Us</span>
        <div class="flex items-center gap-2">
          <!-- Instagram -->
          <a href="https://www.instagram.com/wethemums/" target="_blank" rel="noopener noreferrer" class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-berry-topbar transition-all" title="Instagram">
            <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <!-- Facebook -->
          <a href="#" class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-berry-topbar transition-all" title="Facebook">
            <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <!-- YouTube -->
          <a href="#" class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-berry-topbar transition-all" title="YouTube">
            <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
          </a>
          <!-- Pinterest -->
          <a href="#" class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-berry-topbar transition-all" title="Pinterest">
            <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.057.235-.188.286-.433.172-1.624-.755-2.639-3.127-2.639-5.033 0-4.101 2.979-7.868 8.593-7.868 4.512 0 8.018 3.216 8.018 7.513 0 4.484-2.827 8.093-6.75 8.093-1.318 0-2.557-.686-2.981-1.494l-.811 3.093c-.293 1.121-1.087 2.527-1.618 3.393 1.199.37 2.479.57 3.807.57 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>

    </div>
  </div>

  <!-- SITE NAVBAR -->
  <header class="bg-white border-b border-cream-border sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <!-- Brand Logo: WithTheMums. with subtitle -->
      <a href="index.html" class="flex flex-col group">
        <span class="font-serif text-2xl sm:text-3xl text-charcoal font-normal tracking-tight group-hover:text-berry transition-colors">
          WithTheMums<span class="text-berry font-bold">.</span>
        </span>
        <span class="text-[10px] text-muted -mt-0.5 tracking-wide">
          Real Stories. Stronger Together.
        </span>
      </a>

      <!-- Center Nav Links -->
      <nav class="hidden md:flex items-center space-x-7 text-xs sm:text-sm font-medium text-charcoal/80">
        <a href="index.html" class="text-berry font-semibold border-b-2 border-berry pb-1">Home</a>
        <a href="stories.html" class="hover:text-berry transition-colors">Stories</a>
        <a href="journal.html" class="hover:text-berry transition-colors">Resources</a>
        <a href="about.html" class="hover:text-berry transition-colors">About</a>
        <a href="brand-partnerships.html" class="hover:text-berry transition-colors">Events</a>
        <a href="contact.html" class="hover:text-berry transition-colors">Contact</a>
      </nav>

      <!-- Right: Search Button + Join Our Community pill -->
      <div class="flex items-center gap-3">
        <a href="stories.html" class="w-9 h-9 rounded-full hover:bg-cream flex items-center justify-center text-charcoal/70 hover:text-berry transition-colors" title="Search Stories">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </a>

        <a href="share-your-story.html" class="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-berry text-white text-xs font-semibold hover:bg-berry-hover transition-all shadow-sm">
          Join Our Community
        </a>

        <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg text-charcoal hover:bg-cream-border/50">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

    </div>

    <!-- Mobile Drawer -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-cream-border px-4 pt-3 pb-6 space-y-3">
      <nav class="flex flex-col space-y-2 text-sm font-medium">
        <a href="index.html" class="text-berry font-semibold py-1.5 px-2 bg-berry/5 rounded-md">Home</a>
        <a href="stories.html" class="text-charcoal hover:text-berry py-1.5 px-2">Stories</a>
        <a href="journal.html" class="text-charcoal hover:text-berry py-1.5 px-2">Resources</a>
        <a href="about.html" class="text-charcoal hover:text-berry py-1.5 px-2">About</a>
        <a href="brand-partnerships.html" class="text-charcoal hover:text-berry py-1.5 px-2">Events & Partnerships</a>
        <a href="contact.html" class="text-charcoal hover:text-berry py-1.5 px-2">Contact</a>
      </nav>
      <div class="pt-3 border-t border-cream-border">
        <a href="share-your-story.html" class="w-full inline-flex items-center justify-center py-2.5 px-4 text-xs font-semibold rounded-full bg-berry text-white">
          Share Your Story
        </a>
      </div>
    </div>
  </header>

  <main class="flex-grow">

    <!-- ========================================== -->
    <!-- SECTION 1: HERO (100% FULL-WIDTH MATCH)    -->
    <!-- ========================================== -->
    <section id="hero-section" class="relative w-full overflow-hidden select-none p-0 m-0 bg-[#FAF4EF]">
      
      <!-- Full-Width Banner Graphic Container -->
      <div class="relative w-full select-none">
        
        <!-- Clean Background Graphic (Baby feet, organic curve, doodles, leaves, waves - 100% intact, no raster text) -->
        <img 
          src="images/hero-banner-clean-bg.png" 
          alt="WithTheMums — Every parent has a story. Every story deserves to be heard." 
          class="w-full h-auto block select-none pointer-events-none"
        />

        <!-- Razor-Sharp Live HTML Overlay (Vector Typography, Not Blurry) -->
        <div class="absolute left-[5.8%] top-[9.5%] bottom-[12.5%] w-[44%] flex flex-col justify-between pointer-events-auto z-10">
          
          <!-- 1. Category Pill Badge -->
          <div class="reveal-fade">
            <span class="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#F5E9E6] text-[#6D2534] text-[clamp(8px,0.7vw,11px)] font-bold tracking-[0.14em] uppercase">
              <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#6D2534] shrink-0" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              PARENTING &bull; SUPPORT &bull; REAL STORIES
            </span>
          </div>

          <!-- 2. Main Headline & Subtitle -->
          <div>
            <h1 class="reveal-lines font-serif text-[#221C1D] text-[clamp(18px,2.95vw,46px)] font-medium leading-[1.12] tracking-[-0.01em]">
              Every parent has a story.
              <span class="block italic font-normal text-[#862D42] mt-0.5">
                Every story deserves to be heard.
                <svg class="inline-block w-[0.72em] h-[0.72em] ml-1.5 -translate-y-0.5 text-[#862D42]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </span>
            </h1>

            <p class="reveal-fade font-sans text-[#534B49] text-[clamp(9.5px,0.98vw,15px)] leading-[1.4] mt-[2%] max-w-[96%]">
              Parenthood is a journey of love, challenges and growth. Discover heartfelt experiences, expert advice and a supportive community of mums who understand.
            </p>
          </div>

          <!-- 3. Dual Action Buttons -->
          <div class="reveal-fade flex items-center gap-2 sm:gap-3">
            <!-- Button 1: Read Real Stories -->
            <a 
              href="stories.html" 
              class="btn-shimmer group inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-[#67212F] hover:bg-[#521925] text-white font-medium text-[clamp(9.5px,0.95vw,14px)] shadow-sm hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#67212F]"
              aria-label="Read Real Stories"
            >
              <span>Read Real Stories</span>
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </a>

            <!-- Button 2: Share Your Story -->
            <a 
              href="share-your-story.html" 
              class="btn-shimmer inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full border border-[#CAA0A8] hover:border-[#67212F] hover:bg-[#F8ECE9]/50 text-[#67212F] font-medium text-[clamp(9.5px,0.95vw,14px)] hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#67212F]"
              aria-label="Share Your Story"
            >
              <span>Share Your Story</span>
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#67212F]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
              </svg>
            </a>
          </div>

          <!-- 4. Trust Badges Row -->
          <div class="reveal-fade flex items-center gap-2.5 sm:gap-4 lg:gap-5">
            <!-- Badge 1 -->
            <div class="flex items-center gap-2">
              <div class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center shrink-0 text-[#7B2E3E]">
                <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div class="text-[clamp(7.5px,0.72vw,11.5px)] leading-[1.2]">
                <span class="font-semibold text-[#272122] block">Real stories</span>
                <span class="text-[#685F5D] block">from real mums</span>
              </div>
            </div>

            <!-- Vertical Divider -->
            <div class="w-[1px] h-5 sm:h-6 bg-[#E8D5D0]"></div>

            <!-- Badge 2 -->
            <div class="flex items-center gap-2">
              <div class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center shrink-0 text-[#7B2E3E]">
                <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div class="text-[clamp(7.5px,0.72vw,11.5px)] leading-[1.2]">
                <span class="font-semibold text-[#272122] block">Trusted advice</span>
                <span class="text-[#685F5D] block">from experts</span>
              </div>
            </div>

            <!-- Vertical Divider -->
            <div class="w-[1px] h-5 sm:h-6 bg-[#E8D5D0]"></div>

            <!-- Badge 3 -->
            <div class="flex items-center gap-2">
              <div class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center shrink-0 text-[#7B2E3E]">
                <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div class="text-[clamp(7.5px,0.72vw,11.5px)] leading-[1.2]">
                <span class="font-semibold text-[#272122] block">A safe &amp; supportive</span>
                <span class="text-[#685F5D] block">community</span>
              </div>
            </div>
          </div>

        </div>    <!-- closes the overlay div -->

      </div>      <!-- closes the relative w-full select-none div -->
      </section>

    <!-- ========================================== -->
    <!-- SECTION 2: OUR MISSION (ELEVATED 3D & BOTANICAL) -->
    <!-- ========================================== -->
    <section class="py-20 bg-white border-y border-cream-border relative overflow-hidden">
      
      <!-- Subtle botanical leaf on left edge matching screenshot -->
      <div class="absolute -left-4 top-1/2 -translate-y-1/2 w-24 sm:w-28 h-56 pointer-events-none opacity-45 select-none animate-sway">
        <svg viewBox="0 0 100 200" fill="none" class="w-full h-full">
          <path d="M0,100 C30,80 50,50 40,10 C70,40 60,85 30,105 C70,100 90,130 95,170 C60,150 40,135 0,140" fill="#E2C7C0" />
          <path d="M10,80 C30,55 55,45 65,15" stroke="#C9A69E" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>

      <!-- Subtle botanical leaf on right edge matching screenshot -->
      <div class="absolute -right-4 top-1/3 w-28 sm:w-36 h-64 pointer-events-none opacity-45 select-none animate-sway">
        <svg viewBox="0 0 120 220" fill="none" class="w-full h-full">
          <path d="M120,110 C90,90 70,60 80,20 C50,50 60,95 90,115 C50,110 30,140 25,180 C60,160 80,145 120,150" fill="#E8D2CC" />
          <path d="M110,90 C90,65 65,55 55,25" stroke="#C9A69E" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <!-- Mission Left: Parent and Baby Hands Photo with 3D Tilt Card Physics -->
          <div class="lg:col-span-5 reveal-block">
            <div class="card-3d rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-cream-border h-72 sm:h-80 transition-shadow duration-500 group">
              <div class="card-3d-inner w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" 
                  alt="Parent tenderly holding newborn baby hands" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          <!-- Mission Center/Right: Text and CTA + Handwritten Script -->
          <div class="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal-block">
            <div class="space-y-4 max-w-xl">
              <span class="reveal-fade text-[11px] uppercase tracking-widest font-semibold text-berry/80 block">
                OUR MISSION
              </span>
              <h2 class="reveal-lines font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-snug">
                Parenthood is more than the picture-perfect moments.
              </h2>
              <p class="reveal-fade text-xs sm:text-sm text-muted leading-relaxed">
                Behind every family is a journey worth understanding. WithTheMums creates a space for honest conversations, real stories and practical support &mdash; because every parent's experience matters.
              </p>
              <div class="reveal-fade pt-2">
                <a href="about.html" class="btn-shimmer inline-flex items-center justify-center px-7 py-3 rounded-full bg-berry text-white text-xs font-semibold hover:bg-berry-hover transition-all shadow-md group heart-burst-trigger" data-cursor="pointer">
                  <span>Discover Our Story</span>
                  <span class="ml-2 font-normal group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>

            <!-- Whimsical Handwritten Script Callout with Heartbeat -->
            <div class="hidden sm:block text-right flex-shrink-0 self-center select-none animate-gentle-float">
              <span class="hand-script text-2xl sm:text-3xl text-berry/80 leading-snug block transform -rotate-3">
                Real mums.<br>Real stories.<br>Real support.
              </span>
              <svg class="w-6 h-6 ml-auto mr-3 text-berry/80 animate-heartbeat mt-1 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 3: EXPLORE STORIES BY CATEGORY     -->
    <!-- (100% EXACT MATCH TO REFERENCE DESIGN)    -->
    <!-- ========================================== -->
    <section class="py-16 sm:py-20 bg-[#FAF5F0] relative overflow-hidden">
      
      <!-- Top-Left Botanical Leaf Illustration -->
      <div class="absolute -left-1 top-2 w-16 sm:w-24 pointer-events-none opacity-40 select-none">
        <svg viewBox="0 0 100 180" fill="none" class="w-full h-auto">
          <path d="M5,160 Q30,100 80,40" stroke="#C9A69E" stroke-width="2" stroke-linecap="round"/>
          <path d="M30,120 C10,110 5,85 25,90 C45,95 40,115 30,120 Z" fill="#E6B8AF" opacity="0.65"/>
          <path d="M55,80 C35,70 30,45 50,50 C70,55 65,75 55,80 Z" fill="#ECCFD4" opacity="0.7"/>
          <path d="M75,45 C65,30 65,10 80,18 C95,25 85,42 75,45 Z" fill="#E6B8AF" opacity="0.6"/>
        </svg>
      </div>

      <!-- Top-Right Organic Blush Shape & Handwritten Script Note -->
      <div class="absolute -right-8 -top-8 w-64 h-64 rounded-full bg-[#F4E4DF]/50 blur-2xl pointer-events-none select-none"></div>
      
      <div class="hidden sm:block absolute top-6 sm:top-8 right-6 sm:right-12 text-right select-none pointer-events-none z-10">
        <span class="font-hand text-2xl sm:text-[27px] text-[#862D42] block -rotate-6 leading-tight">
          Different journeys,<br><span class="inline-block translate-x-3">same heart.</span>
        </span>
        <svg class="w-5 h-5 ml-auto mr-3 text-[#862D42] -rotate-12 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </div>

      <div class="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="mb-10 sm:mb-12">
          <div class="flex items-center gap-2.5 mb-2">
            <span class="reveal-fade text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#862D42] uppercase block">
              EXPLORE STORIES
            </span>
            <span class="w-8 sm:w-10 h-[1.5px] bg-[#862D42]"></span>
          </div>

          <h2 class="reveal-lines font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#221C1D] font-normal leading-[1.15]">
            Explore Stories by <span class="italic text-[#862D42]">Category</span>
          </h2>
          
          <p class="reveal-fade font-sans text-xs sm:text-sm text-[#5A524F] mt-2 max-w-xl">
            Real experiences. Practical advice. A community that feels like home.
          </p>
        </div>

        <!-- 6 Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          
          <!-- Category 1: Motherhood -->
          <div class="reveal-block rounded-[22px] overflow-hidden bg-white border border-[#F0E5DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(103,33,47,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
            <div class="relative h-44 sm:h-48 overflow-hidden bg-[#FAF5F0]">
              <img src="images/cat-photo-1.png" alt="Motherhood" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <!-- Organic wave divider cutting bottom of image -->
              <div class="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                <svg class="w-full h-5 sm:h-6 text-white fill-current block" viewBox="0 0 300 25" preserveAspectRatio="none">
                  <path d="M0,12 C45,22 90,2 145,14 C205,26 260,6 300,10 L300,25 L0,25 Z"></path>
                </svg>
              </div>
            </div>

            <div class="p-5 sm:p-6 pt-3 relative flex-1 flex flex-col justify-between">
              <div class="flex items-start gap-3.5">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FCEEEB] text-[#862D42] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-serif text-lg sm:text-[19px] font-semibold text-[#221C1D] leading-snug">Motherhood</h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-1">From pregnancy to raising little ones, real stories from every stage.</p>
                </div>
              </div>

              <div class="mt-5 flex items-center justify-between">
                <a 
                  href="stories.html?category=motherhood" 
                  class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#CAA0A8] text-[#862D42] text-xs font-semibold hover:bg-[#862D42] hover:text-white transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                >
                  <span>Explore</span>
                  <span class="text-sm font-normal transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                </a>
                
                <!-- Bottom-Right Botanical Branch Doodle -->
                <svg class="w-10 h-10 text-[#DEB5AF] pointer-events-none stroke-current fill-none" viewBox="0 0 50 50" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M42,46 Q32,28 15,10" />
                  <path d="M35,35 C28,33 30,26 37,29 C39,30 37,34 35,35 Z" fill="#FBF3F0" />
                  <path d="M28,24 C21,24 23,16 29,19 C31,21 29,23 28,24 Z" fill="#FBF3F0" />
                  <path d="M20,15 C14,15 15,8 21,11 C23,12 22,14 20,15 Z" fill="#FBF3F0" />
                  <path d="M15,10 C10,7 12,3 16,5 C17,6 16,8 15,10 Z" fill="#FBF3F0" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Category 2: Parenting -->
          <div class="reveal-block rounded-[22px] overflow-hidden bg-white border border-[#F0E5DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(103,33,47,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
            <div class="relative h-44 sm:h-48 overflow-hidden bg-[#FAF5F0]">
              <img src="images/cat-photo-2.png" alt="Parenting" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                <svg class="w-full h-5 sm:h-6 text-white fill-current block" viewBox="0 0 300 25" preserveAspectRatio="none">
                  <path d="M0,12 C45,22 90,2 145,14 C205,26 260,6 300,10 L300,25 L0,25 Z"></path>
                </svg>
              </div>
            </div>

            <div class="p-5 sm:p-6 pt-3 relative flex-1 flex flex-col justify-between">
              <div class="flex items-start gap-3.5">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FDF0ED] text-[#D26E60] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-serif text-lg sm:text-[19px] font-semibold text-[#221C1D] leading-snug">Parenting</h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-1">Practical tips, heartfelt stories, and everyday wins (and struggles).</p>
                </div>
              </div>

              <div class="mt-5 flex items-center justify-between">
                <a 
                  href="stories.html?category=parenting" 
                  class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#CAA0A8] text-[#862D42] text-xs font-semibold hover:bg-[#862D42] hover:text-white transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                >
                  <span>Explore</span>
                  <span class="text-sm font-normal transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                </a>
                
                <!-- Bottom-Right Loop Heart Doodle -->
                <svg class="w-10 h-8 text-[#DEB5AF] pointer-events-none stroke-current fill-none" viewBox="0 0 50 40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M48,22 C40,32 30,30 25,23 C20,16 16,7 24,3 C32,-1 36,11 25,22 C18,30 30,36 48,22 Z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Category 3: Pregnancy & Birth -->
          <div class="reveal-block rounded-[22px] overflow-hidden bg-white border border-[#F0E5DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(103,33,47,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
            <div class="relative h-44 sm:h-48 overflow-hidden bg-[#FAF5F0]">
              <img src="images/cat-photo-3.png" alt="Pregnancy & Birth" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                <svg class="w-full h-5 sm:h-6 text-white fill-current block" viewBox="0 0 300 25" preserveAspectRatio="none">
                  <path d="M0,12 C45,22 90,2 145,14 C205,26 260,6 300,10 L300,25 L0,25 Z"></path>
                </svg>
              </div>
            </div>

            <div class="p-5 sm:p-6 pt-3 relative flex-1 flex flex-col justify-between">
              <div class="flex items-start gap-3.5">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F8EDF3] text-[#864F69] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 3c-1.5 3-4.5 7-4.5 10a4.5 4.5 0 0 0 9 0c0-3-3-7-4.5-10z"/>
                    <path d="M7.5 13C5 12 3 14 3 16.5A4.5 4.5 0 0 0 7.5 21c2 0 4-1 4.5-2"/>
                    <path d="M16.5 13C19 12 21 14 21 16.5A4.5 4.5 0 0 1 16.5 21c-2 0-4-1-4.5-2"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-serif text-lg sm:text-[19px] font-semibold text-[#221C1D] leading-snug">Pregnancy & Birth</h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-1">Wellness, preparation and the joys of a new beginning.</p>
                </div>
              </div>

              <div class="mt-5 flex items-center justify-between">
                <a 
                  href="stories.html?category=pregnancy-and-birth" 
                  class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#CAA0A8] text-[#862D42] text-xs font-semibold hover:bg-[#862D42] hover:text-white transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                >
                  <span>Explore</span>
                  <span class="text-sm font-normal transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                </a>
                
                <!-- Bottom-Right Botanical Branch Doodle -->
                <svg class="w-10 h-10 text-[#DEB5AF] pointer-events-none stroke-current fill-none" viewBox="0 0 50 50" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M42,46 Q32,28 15,10" />
                  <path d="M35,35 C28,33 30,26 37,29 C39,30 37,34 35,35 Z" fill="#FBF3F0" />
                  <path d="M28,24 C21,24 23,16 29,19 C31,21 29,23 28,24 Z" fill="#FBF3F0" />
                  <path d="M20,15 C14,15 15,8 21,11 C23,12 22,14 20,15 Z" fill="#FBF3F0" />
                  <path d="M15,10 C10,7 12,3 16,5 C17,6 16,8 15,10 Z" fill="#FBF3F0" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Category 4: Feeding & Family Lifestyle -->
          <div class="reveal-block rounded-[22px] overflow-hidden bg-white border border-[#F0E5DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(103,33,47,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
            <div class="relative h-44 sm:h-48 overflow-hidden bg-[#FAF5F0]">
              <img src="images/cat-photo-4.png" alt="Feeding & Family Lifestyle" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                <svg class="w-full h-5 sm:h-6 text-white fill-current block" viewBox="0 0 300 25" preserveAspectRatio="none">
                  <path d="M0,12 C45,22 90,2 145,14 C205,26 260,6 300,10 L300,25 L0,25 Z"></path>
                </svg>
              </div>
            </div>

            <div class="p-5 sm:p-6 pt-3 relative flex-1 flex flex-col justify-between">
              <div class="flex items-start gap-3.5">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FDF3ED] text-[#D57538] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 2v20M18 8a3 3 0 0 1-3-3V2h6v3a3 3 0 0 1-3 3z"/>
                    <path d="M6 2v20M4 2v6a2 2 0 0 0 4 0V2M6 8v14"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-serif text-lg sm:text-[19px] font-semibold text-[#221C1D] leading-snug">Feeding & Family Lifestyle</h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-1">Nutrition, routines, home life and making it all work.</p>
                </div>
              </div>

              <div class="mt-5 flex items-center justify-between">
                <a 
                  href="stories.html?category=feeding-and-lifestyle" 
                  class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#CAA0A8] text-[#862D42] text-xs font-semibold hover:bg-[#862D42] hover:text-white transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                >
                  <span>Explore</span>
                  <span class="text-sm font-normal transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                </a>
                
                <!-- Bottom-Right Loop Heart Doodle -->
                <svg class="w-10 h-8 text-[#DEB5AF] pointer-events-none stroke-current fill-none" viewBox="0 0 50 40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M48,22 C40,32 30,30 25,23 C20,16 16,7 24,3 C32,-1 36,11 25,22 C18,30 30,36 48,22 Z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Category 5: Everyday Parenting -->
          <div class="reveal-block rounded-[22px] overflow-hidden bg-white border border-[#F0E5DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(103,33,47,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
            <div class="relative h-44 sm:h-48 overflow-hidden bg-[#FAF5F0]">
              <img src="images/cat-photo-5.png" alt="Everyday Parenting" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                <svg class="w-full h-5 sm:h-6 text-white fill-current block" viewBox="0 0 300 25" preserveAspectRatio="none">
                  <path d="M0,12 C45,22 90,2 145,14 C205,26 260,6 300,10 L300,25 L0,25 Z"></path>
                </svg>
              </div>
            </div>

            <div class="p-5 sm:p-6 pt-3 relative flex-1 flex flex-col justify-between">
              <div class="flex items-start gap-3.5">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EDF7F4] text-[#388F78] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-serif text-lg sm:text-[19px] font-semibold text-[#221C1D] leading-snug">Everyday Parenting</h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-1">Real-life moments, challenges and beautiful chaos.</p>
                </div>
              </div>

              <div class="mt-5 flex items-center justify-between">
                <a 
                  href="stories.html?category=everyday-parenting" 
                  class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#CAA0A8] text-[#862D42] text-xs font-semibold hover:bg-[#862D42] hover:text-white transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                >
                  <span>Explore</span>
                  <span class="text-sm font-normal transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                </a>
                
                <!-- Bottom-Right Burst Rays Doodle -->
                <svg class="w-7 h-7 text-[#A04254] pointer-events-none stroke-current" viewBox="0 0 30 30" stroke-width="2.2" stroke-linecap="round">
                  <line x1="7" y1="23" x2="13" y2="15" />
                  <line x1="17" y1="24" x2="18" y2="13" />
                  <line x1="26" y1="19" x2="21" y2="13" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Category 6: Challenges & Growth -->
          <div class="reveal-block rounded-[22px] overflow-hidden bg-white border border-[#F0E5DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(103,33,47,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
            <div class="relative h-44 sm:h-48 overflow-hidden bg-[#FAF5F0]">
              <img src="images/cat-photo-6.png" alt="Challenges & Growth" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                <svg class="w-full h-5 sm:h-6 text-white fill-current block" viewBox="0 0 300 25" preserveAspectRatio="none">
                  <path d="M0,12 C45,22 90,2 145,14 C205,26 260,6 300,10 L300,25 L0,25 Z"></path>
                </svg>
              </div>
            </div>

            <div class="p-5 sm:p-6 pt-3 relative flex-1 flex flex-col justify-between">
              <div class="flex items-start gap-3.5">
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F8EEF8] text-[#77517B] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-serif text-lg sm:text-[19px] font-semibold text-[#221C1D] leading-snug">Challenges & Growth</h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-1">Because even the hard days make us stronger.</p>
                </div>
              </div>

              <div class="mt-5 flex items-center justify-between">
                <a 
                  href="stories.html?category=challenges-and-growth" 
                  class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#CAA0A8] text-[#862D42] text-xs font-semibold hover:bg-[#862D42] hover:text-white transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                >
                  <span>Explore</span>
                  <span class="text-sm font-normal transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                </a>
                
                <!-- Bottom-Right Heart with Underline Doodle -->
                <svg class="w-9 h-9 text-[#DEB5AF] pointer-events-none stroke-current fill-none" viewBox="0 0 40 40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20,13 C18,7 10,7 10,13 C10,18 20,25 20,25 C20,25 30,18 30,13 C30,7 22,7 20,13 Z"/>
                  <path d="M6,31 L34,25" />
                </svg>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 4: FEATURED STORY SPOTLIGHT BOX   -->
    <!-- ========================================== -->
    <section class="py-20 bg-cream relative overflow-hidden">
      
      <!-- Botanical watercolor on right margin matching screenshot -->
      <div class="absolute -right-4 top-1/2 -translate-y-1/2 w-32 sm:w-40 h-80 pointer-events-none opacity-50 select-none animate-sway">
        <svg viewBox="0 0 140 300" fill="none" class="w-full h-full">
          <path d="M140,150 C100,125 70,85 85,20 C40,60 55,120 100,155 C40,140 0,180 -25,240 C30,215 70,190 140,205" fill="#E8D2CC" opacity="0.6"/>
          <path d="M125,100 C95,65 55,55 35,5 C45,45 65,85 110,120" stroke="#C9A69E" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div id="featured-story-card" class="card-3d bg-white rounded-3xl overflow-hidden border border-cream-border shadow-sm hover:shadow-2xl transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 items-center reveal-block">
          
          <!-- Left: Portrait Photo with handwritten "My story matters ♡" -->
          <div class="lg:col-span-5 relative h-80 sm:h-96 lg:h-full min-h-[400px] overflow-hidden group">
            <img 
              id="featured-image"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" 
              alt="Contributor holding orange folder with gentle smile" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            <div class="absolute top-8 right-6 text-center bg-white/85 backdrop-blur-sm px-3.5 py-2 rounded-2xl border border-white/60 shadow-xs transform rotate-6 select-none animate-gentle-float">
              <span class="hand-script text-2xl text-charcoal leading-none block">
                My story<br>matters
              </span>
              <svg class="w-5 h-5 mx-auto text-berry animate-heartbeat mt-1 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

          <!-- Right: Editorial Content -->
          <div class="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-6">
            <div class="space-y-3">
              <span class="reveal-fade text-[11px] uppercase tracking-widest font-semibold text-berry/80 block">
                FEATURED STORY
              </span>

              <h3 id="featured-title" class="reveal-lines font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-normal leading-snug transition-opacity duration-300">
                The Paperwork of Love: Navigating Infertility and Our Adoption Journey
              </h3>

              <p id="featured-excerpt" class="reveal-fade text-xs sm:text-sm text-muted leading-relaxed transition-opacity duration-300">
                A personal story of hope, resilience and the incredible love that comes with building a family through adoption.
              </p>
            </div>

            <div class="flex items-center gap-3 pt-2">
              <img 
                id="featured-avatar"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                alt="Priya Sharma" 
                class="w-10 h-10 rounded-full object-cover border border-cream-border shadow-2xs"
              />
              <div class="text-xs">
                <span id="featured-author" class="font-semibold text-charcoal block">By Priya Sharma</span>
                <span id="featured-meta" class="text-muted text-[11px]">Mother of 1 &bull; 7 min read</span>
              </div>
            </div>

            <div class="reveal-fade pt-2 flex items-center justify-between">
              <a id="featured-link" href="story-detail.html?slug=adoption-road-to-miracles" class="btn-shimmer inline-flex items-center justify-center px-7 py-3 rounded-full bg-berry text-white text-xs font-semibold hover:bg-berry-hover transition-all shadow-md group heart-burst-trigger" data-cursor="pointer">
                <span>Read Full Story</span>
                <span class="ml-2 font-normal group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>

              <!-- Interactive Carousel Pagination -->
              <div class="flex items-center gap-2 text-muted text-xs">
                <button id="featured-prev-btn" class="w-8 h-8 rounded-full border border-cream-border flex items-center justify-center hover:border-berry hover:text-berry hover:bg-white transition-all shadow-2xs cursor-pointer" title="Previous Story">&larr;</button>
                <div id="featured-dots-container" class="flex gap-1.5 items-center px-1">
                  <span class="w-2.5 h-2.5 rounded-full bg-berry transition-all dot-indicator" data-index="0"></span>
                  <span class="w-2 h-2 rounded-full bg-charcoal/20 hover:bg-charcoal/40 transition-all cursor-pointer dot-indicator" data-index="1"></span>
                  <span class="w-2 h-2 rounded-full bg-charcoal/20 hover:bg-charcoal/40 transition-all cursor-pointer dot-indicator" data-index="2"></span>
                </div>
                <button id="featured-next-btn" class="w-8 h-8 rounded-full border border-cream-border flex items-center justify-center hover:border-berry hover:text-berry hover:bg-white transition-all shadow-2xs cursor-pointer" title="Next Story">&rarr;</button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 5: STORIES THAT STAY WITH YOU      -->
    <!-- (100% EXACT MATCH TO REFERENCE DESIGN)     -->
    <!-- ========================================== -->
    <section class="py-16 sm:py-20 bg-[#FAF7F2] relative overflow-hidden" id="stories-that-stay-section">
      
      <!-- Left soft blush watercolor wash -->
      <div class="absolute -left-16 top-1/4 w-80 h-80 rounded-full bg-[#F7E7E1]/50 blur-3xl pointer-events-none select-none"></div>

      <!-- Right soft blush watercolor wash -->
      <div class="absolute -right-16 bottom-10 w-80 h-80 rounded-full bg-[#F7E7E1]/50 blur-3xl pointer-events-none select-none"></div>

      <!-- Far Right Watercolor Botanical Olive Leaves -->
      <div class="absolute right-0 top-6 sm:top-10 w-16 sm:w-20 pointer-events-none opacity-60 select-none">
        <svg viewBox="0 0 80 180" fill="none" class="w-full h-auto">
          <path d="M75,10 Q50,70 65,170" stroke="#B0A495" stroke-width="2" stroke-linecap="round"/>
          <path d="M70,30 C50,22 40,40 55,50 C70,60 75,40 70,30 Z" fill="#C5BDB0" opacity="0.6"/>
          <path d="M58,65 C40,55 30,75 48,85 C65,95 65,75 58,65 Z" fill="#B8ADA0" opacity="0.65"/>
          <path d="M62,105 C45,95 38,115 54,125 C70,135 68,115 62,105 Z" fill="#C5BDB0" opacity="0.6"/>
          <path d="M64,145 C52,135 48,155 60,162 C72,170 70,152 64,145 Z" fill="#B8ADA0" opacity="0.55"/>
        </svg>
      </div>

      <div class="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header Area -->
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-7">
          
          <!-- Left: Title, Tag & Subtitle -->
          <div>
            <div class="flex items-center gap-2.5 mb-2.5">
              <span class="reveal-fade text-[11px] font-bold tracking-[0.2em] text-[#862D42] uppercase block">
                LATEST STORIES
              </span>
              <span class="w-8 sm:w-10 h-[1.5px] bg-[#862D42]"></span>
            </div>

            <h2 class="reveal-lines font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#1E2B37] font-normal leading-[1.18]">
              Stories That <span class="font-hand text-4xl sm:text-5xl lg:text-[52px] text-[#9A4259] font-normal ml-1 inline-block -rotate-1">Stay With You</span>
            </h2>

            <p class="reveal-fade font-sans text-xs sm:text-sm text-[#5B6670] mt-2.5 max-w-xl leading-relaxed">
              Real moments, honest experiences and helpful tips for every stage of motherhood.<br class="hidden sm:inline">
              Because every story matters.
              <svg class="inline-block w-3.5 h-3.5 ml-1 text-[#9A4259] fill-none stroke-current align-baseline -translate-y-0.5" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </p>
          </div>

          <!-- Right: Handwritten "Real Mothers Real Stories ♡" + Curved Arrow + "View All Stories →" Button -->
          <div class="flex items-center gap-3 sm:gap-4 self-start lg:self-end">
            <div class="text-right select-none pointer-events-none hidden sm:block">
              <span class="font-hand text-xl sm:text-2xl text-[#9A4259] block -rotate-6 leading-tight">
                Real Mothers<br><span class="inline-block translate-x-1.5">Real Stories</span>
              </span>
              <svg class="w-4 h-4 ml-auto mr-2 text-[#9A4259] -rotate-12 mt-0.5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>

            <!-- Hand-drawn curved arrow pointing to button -->
            <svg class="hidden sm:block w-7 h-7 sm:w-8 sm:h-8 text-[#9A4259] -scale-y-100 rotate-12 stroke-current fill-none shrink-0" viewBox="0 0 40 40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10,25 Q20,10 32,18" />
              <path d="M26,14 L33,18 L29,24" />
            </svg>

            <!-- View All Stories Button -->
            <a href="stories.html" class="btn-shimmer group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#7A283C] hover:bg-[#631E2E] text-white text-xs sm:text-sm font-semibold shadow-sm hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#7A283C]">
              <span>View All Stories</span>
              <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </a>
          </div>

        </div>

        <!-- Category Filter Tabs Row -->
        <div class="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 mb-8 no-scrollbar select-none" id="stay-filter-tabs">
          <!-- Tab 1: All (Active by default) -->
          <button data-filter="all" class="stay-tab-btn active inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7A283C] text-white transition-all shadow-xs cursor-pointer">
            <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/>
            </svg>
            <span>All</span>
          </button>

          <!-- Tab 2: Motherhood -->
          <button data-filter="motherhood" class="stay-tab-btn inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-[#F5EFEB] hover:bg-[#EFE4DE] text-[#554C47] hover:text-[#221C1D] transition-all cursor-pointer">
            <svg class="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>Motherhood</span>
          </button>

          <!-- Tab 3: Parenting -->
          <button data-filter="parenting" class="stay-tab-btn inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-[#F5EFEB] hover:bg-[#EFE4DE] text-[#554C47] hover:text-[#221C1D] transition-all cursor-pointer">
            <svg class="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>Parenting</span>
          </button>

          <!-- Tab 4: Everyday Life -->
          <button data-filter="everyday" class="stay-tab-btn inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-[#F5EFEB] hover:bg-[#EFE4DE] text-[#554C47] hover:text-[#221C1D] transition-all cursor-pointer">
            <svg class="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <span>Everyday Life</span>
          </button>

          <!-- Tab 5: Family & Lifestyle -->
          <button data-filter="family" class="stay-tab-btn inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-[#F5EFEB] hover:bg-[#EFE4DE] text-[#554C47] hover:text-[#221C1D] transition-all cursor-pointer">
            <svg class="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Family &amp; Lifestyle</span>
          </button>
        </div>

        <!-- 4 Story Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6" id="stay-cards-grid">
          
          <!-- ======================== Card 1: Motherhood ======================== -->
          <article data-category="motherhood" class="stay-story-card bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EDE4DE] hover:border-[#DECEC5] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group relative" data-cursor="pointer">
            
            <!-- Photo Container with aspect-[232/116] matching reference -->
            <div class="relative w-full aspect-[232/116] overflow-hidden select-none bg-[#F5EBE6]">
              <img 
                src="images/story-card-1.png" 
                alt="Baby feet wrapped in white knit blanket" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              <!-- Razor-Sharp Vector Badge Overlay -->
              <div class="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8C3A4D] text-white text-[9.5px] font-bold tracking-wider uppercase shadow-xs">
                  <svg class="w-2.5 h-2.5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <span>MOTHERHOOD</span>
                </span>
              </div>

              <!-- Top-Right Triple Heart Doodle (Crisp SVG Overlay) -->
              <div class="absolute top-2 right-2.5 pointer-events-none select-none z-10">
                <svg class="w-8 h-8 text-white/90 drop-shadow-xs fill-none stroke-current" viewBox="0 0 32 32" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22,12 C20,7 15,7 15,11 C15,14 22,19 22,19 C22,19 29,14 29,11 C29,7 24,7 22,12 Z" />
                  <path d="M12,19 C10,16 7,16 7,18 C7,20 12,23 12,23 C12,23 17,20 17,18 C17,16 14,16 12,19 Z" />
                  <path d="M27,21 C26,19 24,19 24,20 C24,21 27,23 27,23 C27,23 30,21 30,20 C30,19 28,19 27,21 Z" />
                </svg>
              </div>
            </div>

            <!-- Content Body -->
            <div class="p-5 sm:p-5.5 flex-1 flex flex-col justify-between">
              <div>
                <!-- Date -->
                <div class="flex items-center gap-1.5 text-[11px] font-semibold text-[#7A8B99] tracking-wide uppercase">
                  <svg class="w-3.5 h-3.5 text-[#8A9BA8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>JAN 12, 2025</span>
                </div>

                <!-- Title -->
                <h3 class="font-serif text-[17px] sm:text-[18px] text-[#1E2B37] font-semibold leading-[1.3] mt-2 group-hover:text-[#862D42] transition-colors">
                  <a href="story-detail.html?slug=quiet-hours-early-motherhood">The Quiet Hours of Early Motherhood: Finding Peace in the Chaos</a>
                </h3>

                <!-- Excerpt -->
                <p class="font-sans text-[12px] sm:text-[12.5px] text-[#667085] leading-[1.5] mt-2">
                  A heartfelt look at the beautiful and exhausting early days of new motherhood.
                </p>
              </div>

              <!-- Bottom Row: Read More + Botanical Sprig Doodle -->
              <div class="mt-5 pt-1 flex items-center justify-between">
                <a href="story-detail.html?slug=quiet-hours-early-motherhood" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F8EEEE] hover:bg-[#F2DFDF] text-[#8C3A4D] text-[11.5px] font-semibold transition-all group/btn">
                  <span>Read More</span>
                  <span class="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                </a>

                <!-- Botanical Leaf Doodle in Dusty Rose -->
                <svg class="w-7 h-7 text-[#D6A0AA] stroke-current fill-none pointer-events-none shrink-0" viewBox="0 0 36 36" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8,30 Q16,20 28,8" />
                  <path d="M14,24 C10,21 12,17 17,21" />
                  <path d="M19,19 C23,16 26,19 22,23" />
                  <path d="M22,14 C19,11 21,7 26,11" />
                  <path d="M26,10 C29,7 32,10 28,14" />
                </svg>
              </div>
            </div>

          </article>

          <!-- ======================== Card 2: Parenting ======================== -->
          <article data-category="parenting" class="stay-story-card bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EDE4DE] hover:border-[#DECEC5] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group relative" data-cursor="pointer">
            
            <!-- Photo Container -->
            <div class="relative w-full aspect-[232/116] overflow-hidden select-none bg-[#E7F0EE]">
              <img 
                src="images/story-card-2.png" 
                alt="Mother lifting toddler up in sunlight" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              <!-- Razor-Sharp Vector Badge Overlay -->
              <div class="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#3D6F68] text-white text-[9.5px] font-bold tracking-wider uppercase shadow-xs">
                  <svg class="w-2.5 h-2.5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span>PARENTING</span>
                </span>
              </div>
            </div>

            <!-- Content Body -->
            <div class="p-5 sm:p-5.5 flex-1 flex flex-col justify-between">
              <div>
                <!-- Date -->
                <div class="flex items-center gap-1.5 text-[11px] font-semibold text-[#7A8B99] tracking-wide uppercase">
                  <svg class="w-3.5 h-3.5 text-[#8A9BA8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>JAN 10, 2025</span>
                </div>

                <!-- Title -->
                <h3 class="font-serif text-[17px] sm:text-[18px] text-[#1E2B37] font-semibold leading-[1.3] mt-2 group-hover:text-[#3D6F68] transition-colors">
                  <a href="story-detail.html?slug=learning-to-be-present-fatherhood">Life, Love and Little Moments: A Mother's Gratitude Journal</a>
                </h3>

                <!-- Excerpt -->
                <p class="font-sans text-[12px] sm:text-[12.5px] text-[#667085] leading-[1.5] mt-2">
                  Small moments, big feelings &mdash; what motherhood has taught me so far.
                </p>
              </div>

              <!-- Bottom Row: Read More + Teal Line Heart Doodle -->
              <div class="mt-5 pt-1 flex items-center justify-between">
                <a href="story-detail.html?slug=learning-to-be-present-fatherhood" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF3F2] hover:bg-[#DCEAE8] text-[#346660] text-[11.5px] font-semibold transition-all group/btn">
                  <span>Read More</span>
                  <span class="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                </a>

                <!-- Teal Line Heart with Whiskers Doodle -->
                <svg class="w-8 h-8 text-[#5E9890] stroke-current fill-none pointer-events-none shrink-0" viewBox="0 0 40 40" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6,21 L12,21" />
                  <path d="M28,21 L34,21" />
                  <path d="M20,29 C14,23 12,18 12,15 C12,11 15,9 18,11 C20,13 20,14 20,14 C20,14 20,13 22,11 C25,9 28,11 28,15 C28,18 26,23 20,29 Z" />
                  <path d="M29,14 L32,12" />
                  <path d="M30,17 L33,17" />
                </svg>
              </div>
            </div>

          </article>

          <!-- ======================== Card 3: Everyday Parenting ======================== -->
          <article data-category="everyday" class="stay-story-card bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EDE4DE] hover:border-[#DECEC5] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group relative" data-cursor="pointer">
            
            <!-- Photo Container -->
            <div class="relative w-full aspect-[232/116] overflow-hidden select-none bg-[#FDF4EA]">
              <img 
                src="images/story-card-3.png" 
                alt="Toddler playing with colorful toy camera in high chair" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              <!-- Razor-Sharp Vector Badge Overlay -->
              <div class="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAA03E] text-white text-[9.5px] font-bold tracking-wider uppercase shadow-xs">
                  <svg class="w-2.5 h-2.5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                  <span>EVERYDAY PARENTING</span>
                </span>
              </div>
            </div>

            <!-- Content Body -->
            <div class="p-5 sm:p-5.5 flex-1 flex flex-col justify-between">
              <div>
                <!-- Date -->
                <div class="flex items-center gap-1.5 text-[11px] font-semibold text-[#7A8B99] tracking-wide uppercase">
                  <svg class="w-3.5 h-3.5 text-[#8A9BA8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>JAN 8, 2025</span>
                </div>

                <!-- Title -->
                <h3 class="font-serif text-[17px] sm:text-[18px] text-[#1E2B37] font-semibold leading-[1.3] mt-2 group-hover:text-[#EAA03E] transition-colors">
                  <a href="story-detail.html?slug=everyday-chaos-sibling-love">Raising Confident Kids: What Really Matters</a>
                </h3>

                <!-- Excerpt -->
                <p class="font-sans text-[12px] sm:text-[12.5px] text-[#667085] leading-[1.5] mt-2">
                  Confidence isn't about perfection; it's about presence, patience and trust.
                </p>
              </div>

              <!-- Bottom Row: Read More + Orange Sun Doodle -->
              <div class="mt-5 pt-1 flex items-center justify-between">
                <a href="story-detail.html?slug=everyday-chaos-sibling-love" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCF5EB] hover:bg-[#F7EBD8] text-[#B87728] text-[11.5px] font-semibold transition-all group/btn">
                  <span>Read More</span>
                  <span class="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                </a>

                <!-- Warm Yellow Sun with Rays Doodle -->
                <svg class="w-8 h-8 text-[#E6A857] stroke-current fill-none pointer-events-none shrink-0" viewBox="0 0 36 36" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="18" cy="18" r="6"/>
                  <line x1="18" y1="4" x2="18" y2="7"/>
                  <line x1="18" y1="29" x2="18" y2="32"/>
                  <line x1="4" y1="18" x2="7" y2="18"/>
                  <line x1="29" y1="18" x2="32" y2="18"/>
                  <line x1="8.1" y1="8.1" x2="10.2" y2="10.2"/>
                  <line x1="25.8" y1="25.8" x2="27.9" y2="27.9"/>
                  <line x1="8.1" y1="27.9" x2="10.2" y2="25.8"/>
                  <line x1="25.8" y1="10.2" x2="27.9" y2="8.1"/>
                </svg>
              </div>
            </div>

          </article>

          <!-- ======================== Card 4: Family & Lifestyle ======================== -->
          <article data-category="family" class="stay-story-card bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EDE4DE] hover:border-[#DECEC5] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group relative" data-cursor="pointer">
            
            <!-- Photo Container -->
            <div class="relative w-full aspect-[232/116] overflow-hidden select-none bg-[#F5EEF7]">
              <img 
                src="images/story-card-4.png" 
                alt="Smiling blonde mother in sunset nature" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              <!-- Razor-Sharp Vector Badge Overlay -->
              <div class="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7C5C89] text-white text-[9.5px] font-bold tracking-wider uppercase shadow-xs">
                  <svg class="w-2.5 h-2.5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  <span>FAMILY &amp; LIFESTYLE</span>
                </span>
              </div>
            </div>

            <!-- Content Body -->
            <div class="p-5 sm:p-5.5 flex-1 flex flex-col justify-between">
              <div>
                <!-- Date -->
                <div class="flex items-center gap-1.5 text-[11px] font-semibold text-[#7A8B99] tracking-wide uppercase">
                  <svg class="w-3.5 h-3.5 text-[#8A9BA8] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>JAN 5, 2025</span>
                </div>

                <!-- Title -->
                <h3 class="font-serif text-[17px] sm:text-[18px] text-[#1E2B37] font-semibold leading-[1.3] mt-2 group-hover:text-[#7C5C89] transition-colors">
                  <a href="story-detail.html?slug=unexpected-birth-story">Building a Family Life We Love</a>
                </h3>

                <!-- Excerpt -->
                <p class="font-sans text-[12px] sm:text-[12.5px] text-[#667085] leading-[1.5] mt-2">
                  Simple ways to stay connected, create routines and enjoy the journey.
                </p>
              </div>

              <!-- Bottom Row: Read More + Lavender Heart Doodle -->
              <div class="mt-5 pt-1 flex items-center justify-between">
                <a href="story-detail.html?slug=unexpected-birth-story" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5EEF7] hover:bg-[#ECE0F0] text-[#7C5C89] text-[11.5px] font-semibold transition-all group/btn">
                  <span>Read More</span>
                  <span class="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                </a>

                <!-- Lavender Line Heart with Sparkle Lines Doodle -->
                <svg class="w-8 h-8 text-[#9B7FA8] stroke-current fill-none pointer-events-none shrink-0" viewBox="0 0 36 36" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5,20 L8,20" />
                  <path d="M18,27 C13,22 11,18 11,15 C11,12 13.5,10 16,11.5 C17.5,12.5 18,13.5 18,13.5 C18,13.5 18.5,12.5 20,11.5 C22.5,10 25,12 25,15 C25,18 23,22 18,27 Z" />
                  <path d="M26,11 L29,9" />
                  <path d="M27,15 L30,15" />
                </svg>
              </div>
            </div>

          </article>

        </div>

        <!-- Center Bottom Divider: Line — Heart — Line -->
        <div class="mt-14 sm:mt-16 flex items-center justify-center gap-3 select-none">
          <div class="w-20 sm:w-32 h-[1px] bg-[#E8D4CD]"></div>
          <svg class="w-4 h-4 text-[#9A4259] fill-none stroke-current" viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <div class="w-20 sm:w-32 h-[1px] bg-[#E8D4CD]"></div>
        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 6: YOU ARE NOT ALONE BANNER        -->
    <!-- (100% FULL-WIDTH & PURE WHITE BACKGROUND)  -->
    <!-- ========================================== -->
    <section class="w-full bg-white relative overflow-hidden border-y border-[#F0EAE6] py-14 sm:py-18 lg:py-20" id="you-are-not-alone-section">
      
      <!-- Bottom-Left Decorative Wave Graphic -->
      <div class="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-80 h-36 sm:h-48 lg:h-60 pointer-events-none select-none z-0">
        <svg viewBox="0 0 200 160" fill="none" class="w-full h-full">
          <!-- Lighter berry under-wave -->
          <path d="M0,70 Q70,90 120,160 L0,160 Z" fill="#7A2D3E" opacity="0.35" />
          <!-- Deep rich berry main wave -->
          <path d="M0,90 Q50,105 90,160 L0,160 Z" fill="#581D29" opacity="0.95" />
          <!-- Fine rose curve line -->
          <path d="M0,60 Q80,85 140,160" stroke="#E6B4BE" stroke-width="1.8" stroke-linecap="round" opacity="0.75" />
        </svg>
      </div>

      <!-- Main Full-Width Content Container -->
      <div class="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-14 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        <!-- Left Column: Editorial & CTA Content -->
        <div class="lg:col-span-7 relative z-10 flex flex-col justify-between">
          
          <!-- Category Pill Badge & Rule -->
          <div class="reveal-fade flex items-center gap-2.5 mb-3.5 sm:mb-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6EBE8] text-[#7B2638] text-[11px] font-bold tracking-[0.14em] uppercase shadow-2xs">
              <svg class="w-2.5 h-2.5 fill-[#7B2638] shrink-0" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>YOU ARE NOT ALONE</span>
            </span>
            <span class="w-8 sm:w-12 h-[1.5px] bg-[#D4BCB5]"></span>
          </div>

          <!-- Main Headline -->
          <h2 class="reveal-lines font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] text-[#1E191A] font-medium leading-[1.15] tracking-[-0.01em]">
            Your story might be 
            <span class="relative inline-block font-hand font-normal text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] text-[#B85567] -rotate-1 px-1 mr-2.5 sm:mr-3">
              exactly
              <!-- Brush underline doodle matching reference -->
              <svg class="absolute -bottom-1 left-0 w-full h-2 text-[#E8A5B2] pointer-events-none fill-none stroke-current" viewBox="0 0 100 12" stroke-width="2.5" stroke-linecap="round">
                <path d="M2,7 Q50,11 98,4" />
              </svg>
            </span>
            what<br> someone needs to hear.
            <svg class="inline-block w-6 h-6 sm:w-7 sm:h-7 ml-1.5 text-[#B85567] stroke-current fill-none align-baseline -translate-y-0.5 rotate-6" viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </h2>

          <!-- Editorial Subtitle Paragraph -->
          <p class="reveal-fade font-sans text-xs sm:text-sm text-[#665C58] leading-[1.65] mt-3.5 sm:mt-4 max-w-xl">
            Every family's journey is different. If you have an experience or journey you would like to share &mdash; whether it's a challenge, a triumph, or simply a moment of joy &mdash; we'd love to hear from you.
          </p>

          <!-- Dual Action Buttons -->
          <div class="reveal-fade flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-7">
            <!-- Button 1: Share Your Story -->
            <a 
              href="share-your-story.html" 
              class="btn-shimmer group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#5B1E2B] via-[#6B2232] to-[#78283B] hover:from-[#4E1824] hover:to-[#631E2E] text-white text-xs sm:text-[13.5px] font-semibold shadow-[0_8px_22px_rgba(91,30,43,0.28)] hover:shadow-[0_12px_28px_rgba(91,30,43,0.38)] hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#6B2232]"
              aria-label="Share Your Story"
            >
              <!-- Pencil / Edit Icon -->
              <svg class="w-4 h-4 text-white/90 stroke-current fill-none shrink-0" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
              </svg>
              <span>Share Your Story</span>
              <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>

            <!-- Button 2: Join Our Community -->
            <a 
              href="contact.html" 
              class="btn-shimmer inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-white/90 hover:bg-white border border-[#D9C4BD] hover:border-[#6B2232] text-[#4A1E27] text-xs sm:text-[13.5px] font-semibold shadow-2xs hover:shadow-sm hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#6B2232]"
              aria-label="Join Our Community"
            >
              <!-- Community 2-People Icon -->
              <svg class="w-4 h-4 text-[#7A283C] stroke-current fill-none shrink-0" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>Join Our Community</span>
            </a>
          </div>

          <!-- 3-Pillar Trust Row (Bottom) -->
          <div class="reveal-fade flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-4 border-t border-[#EDE1DC]/70">
            
            <!-- Pillar 1: Real Stories -->
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-[#F9ECE9] text-[#7A283C] flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div class="text-left">
                <span class="font-semibold text-[#1F191A] text-xs sm:text-[13px] block leading-tight">Real Stories</span>
                <span class="text-[#736A66] text-[11px] block mt-0.5">Inspire &amp; be inspired</span>
              </div>
            </div>

            <!-- Vertical Divider 1 -->
            <div class="hidden sm:block w-[1px] h-8 bg-[#E6D4CE]"></div>

            <!-- Pillar 2: Supportive Community -->
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-[#F9ECE9] text-[#7A283C] flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div class="text-left">
                <span class="font-semibold text-[#1F191A] text-xs sm:text-[13px] block leading-tight">Supportive Community</span>
                <span class="text-[#736A66] text-[11px] block mt-0.5">You're never alone</span>
              </div>
            </div>

            <!-- Vertical Divider 2 -->
            <div class="hidden sm:block w-[1px] h-8 bg-[#E6D4CE]"></div>

            <!-- Pillar 3: Safe & Respectful -->
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-[#F9ECE9] text-[#7A283C] flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div class="text-left">
                <span class="font-semibold text-[#1F191A] text-xs sm:text-[13px] block leading-tight">Safe &amp; Respectful</span>
                <span class="text-[#736A66] text-[11px] block mt-0.5">Your story matters</span>
              </div>
            </div>

          </div>

        </div>

        <!-- Right Column: Tilted Story Card Visual -->
        <div class="reveal-block lg:col-span-5 relative flex items-center justify-center lg:justify-end select-none">
          <div class="relative w-full max-w-[480px] xl:max-w-[540px] group">
            <!-- High-res cropped card graphic matching reference 100% -->
            <img 
              src="images/banner-right-full.png" 
              alt="Together we grow — Watch their stories" 
              class="w-full h-auto block select-none pointer-events-none drop-shadow-md group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              loading="lazy"
            />
            
            <!-- Interactive Video Play Trigger Overlay -->
            <a 
              href="stories.html" 
              class="absolute right-[10%] bottom-[13%] w-12 h-12 rounded-full cursor-pointer group/play focus:outline-none" 
              title="Watch Their Stories"
              aria-label="Watch Their Stories"
            >
              <span class="absolute inset-0 rounded-full bg-[#E89297]/30 group-hover/play:scale-125 transition-transform duration-300"></span>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 7: PARENT TESTIMONIALS (REVIEWS)   -->
    <!-- (100% EXACT MATCH TO REFERENCE DESIGN)     -->
    <!-- ========================================== -->
    <section class="w-full bg-[#FAF4EE] relative overflow-hidden border-b border-[#EFE5DE] py-14 sm:py-18 lg:py-20" id="parent-testimonials-section">
      
      <!-- Top Right Botanical Leaf Branch Doodle -->
      <img 
        src="images/testimonial-botanical-top.png" 
        alt="" 
        class="absolute top-0 right-0 w-32 sm:w-44 lg:w-56 pointer-events-none select-none opacity-85 z-0" 
      />

      <!-- Bottom Center Botanical Leaf Sprout Doodle -->
      <img 
        src="images/testimonial-botanical-bottom.png" 
        alt="" 
        class="hidden md:block absolute bottom-0 left-[36%] lg:left-[40%] w-14 sm:w-18 pointer-events-none select-none opacity-80 z-0" 
      />

      <!-- Main Content Container -->
      <div class="max-w-7xl xl:max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left Column: Mother & Toddler Loving Hug Photo -->
        <div class="reveal-block lg:col-span-5 relative flex items-center justify-center">
          <div class="relative w-full max-w-[440px] lg:max-w-none rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-[#EFE5DE] group">
            <img 
              src="images/testimonial-left-mother.png" 
              alt="Smiling mother and laughing toddler daughter" 
              class="w-full h-full object-cover object-center max-h-[520px] select-none pointer-events-none group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Right Column: Editorial Header + Review Cards Grid + Controls -->
        <div class="lg:col-span-7 flex flex-col justify-between">
          
          <!-- Header Area -->
          <div>
            <!-- Category Label & Line -->
            <div class="reveal-fade flex items-center gap-3 mb-2.5 sm:mb-3">
              <span class="text-[#5A2633] text-[11px] sm:text-[12px] font-bold tracking-[0.15em] uppercase">
                PARENT TESTIMONIALS
              </span>
              <span class="w-10 sm:w-14 h-[1.5px] bg-[#D6BFB8]"></span>
            </div>

            <!-- Main Headline -->
            <h2 class="reveal-lines font-serif text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] text-[#1E191A] font-medium leading-[1.15] tracking-[-0.01em]">
              Real Parents. Real Growth.
            </h2>

            <!-- Editorial Subtitle Paragraph -->
            <p class="reveal-fade font-sans text-xs sm:text-[13.5px] text-[#635752] leading-[1.65] mt-2.5 sm:mt-3 max-w-xl">
              Hear how thoughtful guidance is helping families build stronger connections, calmer routines, and more confident parenting.
            </p>
          </div>

          <!-- Featured Top Review Card (Card 1: Ananya M.) -->
          <div id="testi-card-1" class="reveal-block bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#EDE3DC] shadow-[0_6px_28px_rgba(0,0,0,0.035)] flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-5 transition-all duration-300 mt-6 sm:mt-7">
            <!-- Left Photo of Card 1 -->
            <div class="w-full sm:w-36 h-36 sm:h-auto rounded-xl sm:rounded-2xl overflow-hidden shrink-0 select-none bg-[#F7EFEA]">
              <img 
                id="testi-c1-photo"
                src="images/testimonial-card1-photo.png" 
                alt="Ananya M. and daughter" 
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <!-- Right Content of Card 1 -->
            <div class="flex-1 flex flex-col justify-between py-0.5">
              <div>
                <!-- 5 Stars in dark berry -->
                <div class="flex items-center gap-1 text-[#6B2232] text-xs sm:text-[13px] tracking-wider select-none">
                  <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                </div>

                <!-- Quote Text -->
                <blockquote id="testi-c1-quote" class="font-serif text-[13.5px] sm:text-[15px] lg:text-[15.5px] text-[#1E191A] leading-[1.45] font-normal mt-2">
                  &ldquo;I feel more confident and connected with my child. The practical tools helped us turn everyday challenges into moments of understanding.&rdquo;
                </blockquote>
              </div>

              <div>
                <!-- Thin Divider Line -->
                <div class="w-full h-[1px] bg-[#EFE6DF] my-2.5"></div>

                <!-- Author Details -->
                <div>
                  <h4 id="testi-c1-author" class="font-semibold text-[#5B1E2B] text-xs sm:text-[13px] leading-tight">
                    Ananya M.
                  </h4>
                  <span id="testi-c1-role" class="text-[#786E69] text-[10.5px] sm:text-[11px] block mt-0.5">
                    Parenting Program Participant
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Row: 2 Compact Review Cards (Cards 2 & 3) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-3.5 sm:mt-4">
            
            <!-- Card 2: Rahul S. -->
            <div id="testi-card-2" class="reveal-block bg-white rounded-2xl p-3.5 sm:p-4 border border-[#EDE3DC] shadow-[0_4px_22px_rgba(0,0,0,0.03)] flex items-center gap-3.5 transition-all duration-300">
              <img 
                id="testi-c2-avatar"
                src="images/testimonial-card2-avatar.png" 
                alt="Rahul S." 
                class="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover shrink-0 select-none border border-[#EDE3DC]"
                loading="lazy"
              />
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-0.5 text-[#6B2232] text-[10px] sm:text-[11px] tracking-wider select-none">
                  <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                </div>
                <p id="testi-c2-quote" class="font-serif text-[11.5px] sm:text-[12.5px] text-[#1E191A] leading-snug font-normal mt-1 line-clamp-2">
                  &ldquo;Bedtime is calmer, and I finally feel like I have a plan.&rdquo;
                </p>
                <span id="testi-c2-author" class="text-[#5B1E2B] font-semibold text-[10.5px] sm:text-[11px] block mt-1 truncate">
                  Rahul S., <span class="text-[#786E69] font-normal">Dad of 2</span>
                </span>
              </div>
            </div>

            <!-- Card 3: Meera K. -->
            <div id="testi-card-3" class="reveal-block bg-white rounded-2xl p-3.5 sm:p-4 border border-[#EDE3DC] shadow-[0_4px_22px_rgba(0,0,0,0.03)] flex items-center gap-3.5 transition-all duration-300">
              <img 
                id="testi-c3-avatar"
                src="images/testimonial-card3-avatar.png" 
                alt="Meera K." 
                class="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover shrink-0 select-none border border-[#EDE3DC]"
                loading="lazy"
              />
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-0.5 text-[#6B2232] text-[10px] sm:text-[11px] tracking-wider select-none">
                  <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                </div>
                <p id="testi-c3-quote" class="font-serif text-[11.5px] sm:text-[12.5px] text-[#1E191A] leading-snug font-normal mt-1 line-clamp-2">
                  &ldquo;The sessions helped us understand our child instead of just reacting.&rdquo;
                </p>
                <span id="testi-c3-author" class="text-[#5B1E2B] font-semibold text-[10.5px] sm:text-[11px] block mt-1 truncate">
                  Meera K., <span class="text-[#786E69] font-normal">Mother</span>
                </span>
              </div>
            </div>

          </div>

          <!-- Bottom Action Button & Carousel Controls -->
          <div class="reveal-fade flex items-center justify-between mt-5 sm:mt-6 pt-1">
            
            <!-- Button: Explore Parent Stories -->
            <a 
              href="stories.html" 
              class="btn-shimmer group inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#4E1824] via-[#5B1E2B] to-[#6B2232] hover:from-[#3E121B] hover:to-[#5B1E2B] text-white text-xs sm:text-[12.5px] font-semibold shadow-[0_6px_20px_rgba(78,24,36,0.25)] hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#5B1E2B]"
              aria-label="Explore Parent Stories"
            >
              <span>Explore Parent Stories</span>
              <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>

            <!-- Carousel Pagination Controls (← ● ● ● →) -->
            <div class="flex items-center gap-2 sm:gap-2.5 select-none">
              <!-- Prev Arrow Button -->
              <button 
                id="testi-prev" 
                class="w-8 h-8 rounded-full bg-white border border-[#DDD0C8] hover:border-[#5B1E2B] text-[#4E1824] flex items-center justify-center text-xs shadow-2xs hover:bg-[#FAF4EE] transition-all cursor-pointer focus:outline-none"
                aria-label="Previous Testimonials"
              >
                &larr;
              </button>

              <!-- Dot Indicators -->
              <div class="flex items-center gap-1.5 px-1">
                <button class="testi-dot w-2 h-2 rounded-full bg-[#5B1E2B] transition-all cursor-pointer" data-index="0" aria-label="Slide 1"></button>
                <button class="testi-dot w-1.5 h-1.5 rounded-full bg-[#D8CCC4] hover:bg-[#5B1E2B] transition-all cursor-pointer" data-index="1" aria-label="Slide 2"></button>
                <button class="testi-dot w-1.5 h-1.5 rounded-full bg-[#D8CCC4] hover:bg-[#5B1E2B] transition-all cursor-pointer" data-index="2" aria-label="Slide 3"></button>
              </div>

              <!-- Next Arrow Button -->
              <button 
                id="testi-next" 
                class="w-8 h-8 rounded-full bg-white border border-[#DDD0C8] hover:border-[#5B1E2B] text-[#4E1824] flex items-center justify-center text-xs shadow-2xs hover:bg-[#FAF4EE] transition-all cursor-pointer focus:outline-none"
                aria-label="Next Testimonials"
              >
                &rarr;
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 8: RESPONSIBLE STORYTELLING        -->
    <!-- ========================================== -->
    <section class="py-16 bg-cream">
      <div class="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="reveal-fade text-[11px] uppercase tracking-widest font-semibold text-berry/80 block">
            OUR COMMITMENT
          </span>
          <h2 class="reveal-lines font-serif text-3xl sm:text-4xl text-charcoal font-normal mt-1">
            Our Commitment to Responsible Storytelling
          </h2>
          <p class="reveal-fade text-xs sm:text-sm text-muted mt-2">
            We believe in real stories, kind communities and a safe space for every parent.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="reveal-block bg-white p-7 rounded-2xl border border-cream-border text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div class="w-11 h-11 rounded-full bg-iconBg text-berry flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <div>
              <h3 class="font-serif text-lg font-medium text-charcoal">Respect & Privacy</h3>
              <p class="text-xs text-muted mt-1 leading-relaxed">Your story, your choice. We protect your identity and privacy.</p>
            </div>
          </div>

          <div class="reveal-block bg-white p-7 rounded-2xl border border-cream-border text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div class="w-11 h-11 rounded-full bg-iconBg text-berry flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            </div>
            <div>
              <h3 class="font-serif text-lg font-medium text-charcoal">Community First</h3>
              <p class="text-xs text-muted mt-1 leading-relaxed">A safe, supportive and judgment-free space for all parents.</p>
            </div>
          </div>

          <div class="reveal-block bg-white p-7 rounded-2xl border border-cream-border text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div class="w-11 h-11 rounded-full bg-iconBg text-berry flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            </div>
            <div>
              <h3 class="font-serif text-lg font-medium text-charcoal">Authenticity</h3>
              <p class="text-xs text-muted mt-1 leading-relaxed">Real experiences, real voices, real support.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 8: INSTAGRAM CONVERSATION          -->
    <!-- ========================================== -->
    <section class="py-16 bg-cream border-t border-cream-border">
      <div class="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-4 space-y-4">
            <h3 class="reveal-lines font-serif text-2xl sm:text-3xl text-charcoal font-normal">
              Join the Conversation on Instagram
            </h3>
            <p class="reveal-fade text-xs text-muted leading-relaxed">
              Follow us for daily inspiration, community highlights and real mum moments.
            </p>
            <div class="reveal-fade">
              <a href="https://www.instagram.com/wethemums/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-berry text-white text-xs font-semibold hover:bg-berry-hover transition-all shadow-sm">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Follow @withthemums
              </a>
            </div>
          </div>

          <div class="lg:col-span-8 flex items-center gap-3">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
              <a href="https://www.instagram.com/wethemums/" target="_blank" rel="noopener noreferrer" class="reveal-block rounded-2xl overflow-hidden aspect-square border border-cream-border group">
                <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=400&q=80" alt="Instagram 1" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
              </a>
              <a href="https://www.instagram.com/wethemums/" target="_blank" rel="noopener noreferrer" class="reveal-block rounded-2xl overflow-hidden aspect-square border border-cream-border group">
                <img src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=400&q=80" alt="Instagram 2" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
              </a>
              <a href="https://www.instagram.com/wethemums/" target="_blank" rel="noopener noreferrer" class="reveal-block rounded-2xl overflow-hidden aspect-square border border-cream-border group">
                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80" alt="Instagram 3" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
              </a>
              <a href="https://www.instagram.com/wethemums/" target="_blank" rel="noopener noreferrer" class="reveal-block rounded-2xl overflow-hidden aspect-square border border-cream-border group">
                <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80" alt="Instagram 4" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
              </a>
            </div>

            <button class="hidden sm:flex w-8 h-8 rounded-full bg-white border border-cream-border items-center justify-center text-charcoal hover:border-berry hover:text-berry transition-colors shadow-xs flex-shrink-0">
              &rarr;
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 9: NEWSLETTER                      -->
    <!-- ========================================== -->
    <section class="py-16 bg-cream border-t border-cream-border relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        
        <h3 class="reveal-lines font-serif text-3xl sm:text-4xl text-charcoal font-normal">
          Stories Worth Coming Back For
        </h3>
        
        <p class="reveal-fade text-xs text-muted max-w-md mx-auto">
          Get the latest stories, parenting tips and community updates in a thoughtful weekly inbox.
        </p>

        <form id="newsletter-form" class="reveal-fade mt-6 max-w-md mx-auto flex items-center bg-white p-1 rounded-full border border-cream-border shadow-xs">
          <input 
            type="email" 
            id="newsletter-email" 
            required 
            placeholder="Your email address" 
            class="flex-1 px-5 py-2.5 bg-transparent text-xs text-charcoal focus:outline-none placeholder:text-muted"
          />
          <button type="submit" class="px-6 py-2.5 rounded-full bg-berry text-white text-xs font-semibold hover:bg-berry-hover transition-colors flex items-center gap-1.5 flex-shrink-0">
            Subscribe <span>&rarr;</span>
          </button>
        </form>

        <div id="newsletter-feedback" class="hidden text-xs text-emerald-700 font-medium pt-2">
          &check; Thank you for subscribing!
        </div>

        <div class="absolute right-6 sm:right-16 bottom-6 hidden sm:block text-right">
          <span class="hand-script text-2xl sm:text-3xl text-berry/80 leading-tight block transform rotate-6">
            Small steps.<br>Big stories.
          </span>
          <span class="hand-script text-berry/80 text-xl block pr-2">&hearts;</span>
        </div>

      </div>
    </section>

  </main>

  <!-- ========================================== -->
  <!-- SITE FOOTER                                -->
  <!-- ========================================== -->
  <footer class="bg-berry-footer text-white/80 pt-16 pb-10 border-t border-berry-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        
        <!-- Col 1: Brand & Tagline -->
        <div class="space-y-4">
          <div>
            <span class="font-serif text-2xl font-normal text-white tracking-tight">
              WithTheMums<span class="text-dustyPeach">.</span>
            </span>
            <p class="text-[11px] text-white/60 -mt-0.5">Real Stories. Stronger Together.</p>
          </div>
          <p class="text-xs text-white/70 leading-relaxed max-w-xs">
            A supportive community for every stage of motherhood. Because you're not alone.
          </p>
          <div class="flex items-center gap-3 pt-2">
            <a href="https://www.instagram.com/wethemums/" target="_blank" rel="noopener noreferrer" class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.057.235-.188.286-.433.172-1.624-.755-2.639-3.127-2.639-5.033 0-4.101 2.979-7.868 8.593-7.868 4.512 0 8.018 3.216 8.018 7.513 0 4.484-2.827 8.093-6.75 8.093-1.318 0-2.557-.686-2.981-1.494l-.811 3.093c-.293 1.121-1.087 2.527-1.618 3.393 1.199.37 2.479.57 3.807.57 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
            </a>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div class="space-y-3">
          <span class="text-xs uppercase tracking-wider text-dustyPeach font-semibold block">Quick Links</span>
          <ul class="space-y-2 text-xs">
            <li><a href="index.html" class="hover:text-white transition-colors">Home</a></li>
            <li><a href="stories.html" class="hover:text-white transition-colors">Stories</a></li>
            <li><a href="journal.html" class="hover:text-white transition-colors">Resources</a></li>
            <li><a href="about.html" class="hover:text-white transition-colors">About</a></li>
            <li><a href="brand-partnerships.html" class="hover:text-white transition-colors">Events</a></li>
            <li><a href="contact.html" class="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Col 3: Categories -->
        <div class="space-y-3">
          <span class="text-xs uppercase tracking-wider text-dustyPeach font-semibold block">Categories</span>
          <ul class="space-y-2 text-xs">
            <li><a href="stories.html?category=motherhood" class="hover:text-white transition-colors">Motherhood</a></li>
            <li><a href="stories.html?category=everyday-parenting" class="hover:text-white transition-colors">Parenting</a></li>
            <li><a href="stories.html?category=pregnancy-and-birth" class="hover:text-white transition-colors">Pregnancy & Birth</a></li>
            <li><a href="stories.html?category=everyday-parenting" class="hover:text-white transition-colors">Feeding & Lifestyle</a></li>
            <li><a href="stories.html?category=everyday-parenting" class="hover:text-white transition-colors">Everyday Parenting</a></li>
            <li><a href="stories.html?category=challenges-and-personal-growth" class="hover:text-white transition-colors">Challenges & Growth</a></li>
          </ul>
        </div>

        <!-- Col 4: Stay Connected Newsletter -->
        <div class="space-y-3">
          <span class="text-xs uppercase tracking-wider text-dustyPeach font-semibold block">Stay Connected</span>
          <p class="text-xs text-white/70 leading-relaxed">
            Subscribe to our newsletter for the latest stories and updates.
          </p>
          <form id="footer-newsletter" class="flex items-center bg-white/10 p-1 rounded-full border border-white/20">
            <input 
              type="email" 
              required 
              placeholder="Your email address" 
              class="w-full px-3 py-1.5 bg-transparent text-xs text-white placeholder:text-white/50 focus:outline-none"
            />
            <button type="submit" class="w-7 h-7 rounded-full bg-white text-berry flex items-center justify-center flex-shrink-0 hover:bg-dustyPeach transition-colors">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </button>
          </form>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
        <p>&copy; 2025 WithTheMums. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <a href="contact.html#privacy" class="hover:text-white transition-colors">Privacy Policy</a>
          <span>&bull;</span>
          <a href="contact.html#terms" class="hover:text-white transition-colors">Terms of Service</a>
          <span>&bull;</span>
          <a href="contact.html" class="hover:text-white transition-colors">Contact</a>
        </div>
      </div>

    </div>
  </footer>

  <!-- ======================================================== -->
  <!-- $100K LUXURY ANIMATION & INTERACTION JAVASCRIPT ENGINE   -->
  <!-- ======================================================== -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // =============================================
      // GSAP BIDIRECTIONAL SCROLL ANIMATION ENGINE
      // (Smooth word reveals & section reveals when scrolling down AND scrolling up)
      // =============================================
      gsap.registerPlugin(ScrollTrigger);

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Split text into individual words for reveal animation
      function splitIntoWords(el) {
        if (el.dataset.split === 'done') return Array.from(el.querySelectorAll('.word'));
        el.dataset.split = 'done';
        // Preserve existing markup (em, br, span with classes)
        if (el.querySelector('em, br, span')) {
          const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
          const textNodes = [];
          while (walker.nextNode()) textNodes.push(walker.currentNode);
          textNodes.forEach(node => {
            const words = node.textContent.split(/\s+/).filter(w => w.length > 0);
            if (words.length === 0) return;
            const frag = document.createDocumentFragment();
            words.forEach((w, i) => {
              const span = document.createElement('span');
              span.className = 'word';
              span.style.display = 'inline-block';
              span.textContent = w;
              frag.appendChild(span);
              if (i < words.length - 1) frag.appendChild(document.createTextNode(' '));
            });
            node.parentNode.replaceChild(frag, node);
          });
          return Array.from(el.querySelectorAll('.word'));
        }
        // Simple text — split on spaces
        const text = el.textContent.trim();
        const words = text.split(/\s+/);
        el.innerHTML = words.map(w => `<span class="word" style="display:inline-block">${w}</span>`).join(' ');
        return Array.from(el.querySelectorAll('.word'));
      }

      if (!prefersReduced) {
        // 1. HEADINGS & TITLES WORD-BY-WORD REVEAL (Bidirectional: scroll down AND scroll up)
        document.querySelectorAll('.reveal-lines').forEach(el => {
          const words = splitIntoWords(el);
          const rect = el.getBoundingClientRect();
          const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

          if (inViewport) {
            gsap.fromTo(words, 
              { yPercent: 40, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.025 }
            );
          } else {
            gsap.set(words, { yPercent: 100, opacity: 0 });
          }

          ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            end: 'bottom top',
            onEnter: () => gsap.to(words, {
              yPercent: 0,
              opacity: 1,
              duration: 0.85,
              ease: 'power4.out',
              stagger: words.length > 1 ? 0.03 : 0,
              overwrite: 'auto'
            }),
            onEnterBack: () => gsap.to(words, {
              yPercent: 0,
              opacity: 1,
              duration: 0.75,
              ease: 'power4.out',
              stagger: words.length > 1 ? 0.025 : 0,
              overwrite: 'auto'
            }),
            onLeave: () => gsap.set(words, {
              yPercent: 50,
              opacity: 0,
              overwrite: 'auto'
            }),
            onLeaveBack: () => gsap.set(words, {
              yPercent: 100,
              opacity: 0,
              overwrite: 'auto'
            })
          });
        });

        // 2. PARAGRAPHS, LABELS, BUTTONS FADE-UP (Bidirectional: scroll down AND scroll up)
        document.querySelectorAll('.reveal-fade').forEach(el => {
          const rect = el.getBoundingClientRect();
          const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

          if (inViewport) {
            gsap.fromTo(el, 
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }
            );
          } else {
            gsap.set(el, { y: 28, opacity: 0 });
          }

          ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            end: 'bottom top',
            onEnter: () => gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              overwrite: 'auto'
            }),
            onEnterBack: () => gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power3.out',
              overwrite: 'auto'
            }),
            onLeave: () => gsap.set(el, {
              y: -15,
              opacity: 0,
              overwrite: 'auto'
            }),
            onLeaveBack: () => gsap.set(el, {
              y: 28,
              opacity: 0,
              overwrite: 'auto'
            })
          });
        });

        // 3. CARDS, GRIDS & SECTION CONTAINERS REVEAL (Bidirectional: scroll down AND scroll up)
        document.querySelectorAll('.reveal-block, .stay-story-card, .card-3d').forEach((el) => {
          const rect = el.getBoundingClientRect();
          const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

          const parentGrid = el.closest('.grid');
          let delay = 0;
          if (parentGrid) {
            const siblings = Array.from(parentGrid.children);
            const pos = siblings.indexOf(el);
            if (pos !== -1) delay = (pos % 4) * 0.07;
          }

          if (inViewport) {
            gsap.fromTo(el, 
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, delay, ease: 'power3.out' }
            );
          } else {
            gsap.set(el, { y: 35, opacity: 0 });
          }

          ScrollTrigger.create({
            trigger: el,
            start: 'top 92%',
            end: 'bottom top',
            onEnter: () => gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 0.85,
              delay,
              ease: 'power3.out',
              overwrite: 'auto'
            }),
            onEnterBack: () => gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 0.75,
              delay: delay * 0.5,
              ease: 'power3.out',
              overwrite: 'auto'
            }),
            onLeave: () => gsap.set(el, {
              y: -20,
              opacity: 0,
              overwrite: 'auto'
            }),
            onLeaveBack: () => gsap.set(el, {
              y: 35,
              opacity: 0,
              overwrite: 'auto'
            })
          });
        });
      }
      // END GSAP SCROLL TEXT ANIMATION ENGINE

      
      // 1. TOP READING PROGRESS BAR
      const progressBar = document.getElementById('progress-bar');
      window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) progressBar.style.width = scrolled + '%';
      }, { passive: true });

      // 2. LUXURY CUSTOM MAGNETIC CURSOR
      const cursorDot = document.getElementById('cursor-dot');
      const cursorRing = document.getElementById('cursor-ring');
      
      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let ringX = mouseX;
      let ringY = mouseY;
      let isHovering = false;

      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursorDot) {
          cursorDot.style.left = mouseX + 'px';
          cursorDot.style.top = mouseY + 'px';
        }
      }, { passive: true });

      // Smooth Lerp loop for luxury ring momentum
      function renderCursor() {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        if (cursorRing) {
          cursorRing.style.left = ringX + 'px';
          cursorRing.style.top = ringY + 'px';
        }
        requestAnimationFrame(renderCursor);
      }
      renderCursor();

      // Magnetic hover states on all interactive elements
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [data-cursor="pointer"], .card-3d');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          document.body.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
          document.body.classList.remove('cursor-hover');
        });
      });

      // Cursor pulse on mousedown/mouseup
      window.addEventListener('mousedown', () => {
        if (cursorRing) cursorRing.style.transform = 'translate(-50%, -50%) scale(0.85)';
      });
      window.addEventListener('mouseup', () => {
        if (cursorRing) cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
      });

      // 3. HERO BANNER 3D MOUSE PARALLAX
      const heroSection = document.getElementById('hero-section');
      const heroPhotoContainer = document.getElementById('hero-photo-container');
      const heroDoodle = document.getElementById('hero-doodle');

      if (heroSection && heroPhotoContainer) {
        let heroTargetX = 0;
        let heroTargetY = 0;
        let heroCurrentX = 0;
        let heroCurrentY = 0;

        heroSection.addEventListener('mousemove', (e) => {
          const rect = heroSection.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          heroTargetX = x * 10; // max rotation degrees
          heroTargetY = -y * 10;
        });

        heroSection.addEventListener('mouseleave', () => {
          heroTargetX = 0;
          heroTargetY = 0;
        });

        function animateHeroParallax() {
          heroCurrentX += (heroTargetX - heroCurrentX) * 0.08;
          heroCurrentY += (heroTargetY - heroCurrentY) * 0.08;
          
          heroPhotoContainer.style.transform = `perspective(1000px) rotateY(${heroCurrentX}deg) rotateX(${heroCurrentY}deg)`;
          
          if (heroDoodle) {
            heroDoodle.style.transform = `translate3d(${-heroCurrentX * 1.8}px, ${-heroCurrentY * 1.8}px, 20px) rotate(-3deg)`;
          }

          requestAnimationFrame(animateHeroParallax);
        }
        animateHeroParallax();
      }

      // 4. SCROLL-TRIGGERED CINEMATIC REVEAL ENGINE
      const reveals = document.querySelectorAll('.reveal-init');
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      reveals.forEach((el, index) => {
        // Stagger cards within grids
        const parentGrid = el.closest('.grid');
        if (parentGrid) {
          const siblings = Array.from(parentGrid.children);
          const pos = siblings.indexOf(el);
          if (pos !== -1) {
            el.style.transitionDelay = (pos * 0.08) + 's';
          }
        }
        revealObserver.observe(el);
      });

      // 5. 3D INTERACTIVE CARD PERSPECTIVE PHYSICS
      const cards3D = document.querySelectorAll('.card-3d');
      cards3D.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -5;
          const rotateY = ((x - centerX) / centerX) * 5;

          card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
      });

      // 6. HEARTBURST REACTION CANNON (EMOTIONAL MICRO-DELIGHT)
      function spawnHeartBurst(x, y) {
        const heartCount = 6;
        const colors = ['#BA6B7A', '#632232', '#ECCFD4', '#9C4456'];
        
        for (let i = 0; i < heartCount; i++) {
          const heart = document.createElement('div');
          heart.className = 'flying-heart';
          const dx = (Math.random() - 0.5) * 120 + 'px';
          const rot = (Math.random() - 0.5) * 60 + 'deg';
          const size = Math.floor(Math.random() * 12 + 14);
          const color = colors[Math.floor(Math.random() * colors.length)];

          heart.style.left = x + 'px';
          heart.style.top = y + 'px';
          heart.style.setProperty('--dx', dx);
          heart.style.setProperty('--rot', rot);

          heart.innerHTML = `
            <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="1.5">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          `;
          document.body.appendChild(heart);

          setTimeout(() => {
            heart.remove();
          }, 1400);
        }
      }

      // Attach heartburst to triggers and cards
      document.querySelectorAll('.heart-burst-trigger, .animate-heartbeat').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          const rect = trigger.getBoundingClientRect();
          spawnHeartBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
        });
      });

      // 7. INTERACTIVE FEATURED STORY SPOTLIGHT CAROUSEL
      const featuredStories = [
        {
          title: "The Paperwork of Love: Navigating Infertility and Our Adoption Journey",
          excerpt: "A personal story of hope, resilience and the incredible love that comes with building a family through adoption.",
          author: "By Priya Sharma",
          meta: "Mother of 1 • 7 min read",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
          link: "story-detail.html?slug=adoption-road-to-miracles"
        },
        {
          title: "Quiet Mornings, Loud Hearts: Parenting a Child on the Spectrum",
          excerpt: "How our family learned to trade society's milestones for our own quiet victories, patience, and unconditional love.",
          author: "By Ananya Sen",
          meta: "Mother of 2 • 9 min read",
          image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
          link: "story-detail.html?slug=quiet-hours-early-motherhood"
        },
        {
          title: "Learning to Breathe Again: Postpartum Anxiety and Finding My Feet",
          excerpt: "The raw truth behind the smiles in baby photos, and the compassionate circle of women who brought me home to myself.",
          author: "By Radhika Patel",
          meta: "Mother of 1 • 6 min read",
          image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=800&q=80",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
          link: "story-detail.html?slug=unexpected-birth-story"
        }
      ];

      let currentStoryIndex = 0;
      const featTitle = document.getElementById('featured-title');
      const featExcerpt = document.getElementById('featured-excerpt');
      const featAuthor = document.getElementById('featured-author');
      const featMeta = document.getElementById('featured-meta');
      const featImage = document.getElementById('featured-image');
      const featAvatar = document.getElementById('featured-avatar');
      const featLink = document.getElementById('featured-link');
      const featDots = document.querySelectorAll('.dot-indicator');
      const prevBtn = document.getElementById('featured-prev-btn');
      const nextBtn = document.getElementById('featured-next-btn');

      function updateFeaturedStory(newIndex) {
        if (newIndex === currentStoryIndex) return;
        currentStoryIndex = newIndex;
        const story = featuredStories[currentStoryIndex];

        // Fade transition
        [featTitle, featExcerpt, featAuthor, featMeta, featImage].forEach(el => {
          if (el) el.style.opacity = '0';
        });

        setTimeout(() => {
          if (featTitle) featTitle.textContent = story.title;
          if (featExcerpt) featExcerpt.textContent = story.excerpt;
          if (featAuthor) featAuthor.textContent = story.author;
          if (featMeta) featMeta.textContent = story.meta;
          if (featImage) featImage.src = story.image;
          if (featAvatar) featAvatar.src = story.avatar;
          if (featLink) featLink.href = story.link;

          featDots.forEach((dot, idx) => {
            if (idx === currentStoryIndex) {
              dot.className = 'w-2.5 h-2.5 rounded-full bg-berry transition-all dot-indicator';
            } else {
              dot.className = 'w-2 h-2 rounded-full bg-charcoal/20 hover:bg-charcoal/40 transition-all cursor-pointer dot-indicator';
            }
          });

          [featTitle, featExcerpt, featAuthor, featMeta, featImage].forEach(el => {
            if (el) el.style.opacity = '1';
          });
        }, 250);
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          const nextIdx = (currentStoryIndex - 1 + featuredStories.length) % featuredStories.length;
          updateFeaturedStory(nextIdx);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          const nextIdx = (currentStoryIndex + 1) % featuredStories.length;
          updateFeaturedStory(nextIdx);
        });
      }

      featDots.forEach((dot, idx) => {
        dot.addEventListener('click', () => updateFeaturedStory(idx));
      });

      // 7.5. STORIES THAT STAY WITH YOU — CATEGORY FILTERING TABS
      const stayTabs = document.querySelectorAll('.stay-tab-btn');
      const stayCards = document.querySelectorAll('.stay-story-card');
      
      stayTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const filter = tab.dataset.filter;

          // Update tab button styles
          stayTabs.forEach(t => {
            t.classList.remove('active', 'bg-[#7A283C]', 'text-white', 'shadow-xs');
            t.classList.add('bg-[#F5EFEB]', 'text-[#554C47]');
          });
          tab.classList.add('active', 'bg-[#7A283C]', 'text-white', 'shadow-xs');
          tab.classList.remove('bg-[#F5EFEB]', 'text-[#554C47]');

          // Filter and animate cards
          stayCards.forEach(card => {
            const cardCat = card.dataset.category;
            if (filter === 'all' || cardCat === filter) {
              card.style.display = 'flex';
              card.style.opacity = '0';
              card.style.transform = 'translateY(10px)';
              setTimeout(() => {
                card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, 20);
            } else {
              card.style.display = 'none';
            }
          });
        });
      });

      // 7.6. PARENT TESTIMONIALS (REVIEWS) CAROUSEL ENGINE
      const testimonialSlides = [
        {
          c1: {
            photo: 'images/testimonial-card1-photo.png',
            quote: '“I feel more confident and connected with my child. The practical tools helped us turn everyday challenges into moments of understanding.”',
            author: 'Ananya M.',
            role: 'Parenting Program Participant'
          },
          c2: {
            avatar: 'images/testimonial-card2-avatar.png',
            quote: '“Bedtime is calmer, and I finally feel like I have a plan.”',
            author: 'Rahul S., <span class="text-[#786E69] font-normal">Dad of 2</span>'
          },
          c3: {
            avatar: 'images/testimonial-card3-avatar.png',
            quote: '“The sessions helped us understand our child instead of just reacting.”',
            author: 'Meera K., <span class="text-[#786E69] font-normal">Mother</span>'
          }
        },
        {
          c1: {
            photo: 'images/story-card-4.png',
            quote: '“Finding WithTheMums felt like an exhale. Real parents talking about the hardest days with grace and practical wisdom.”',
            author: 'Pooja & Vikram D.',
            role: 'Parents of 3'
          },
          c2: {
            avatar: 'images/cat-photo-2.png',
            quote: '“Morning routines went from daily chaos to calm family teamwork.”',
            author: 'Tariq M., <span class="text-[#786E69] font-normal">Dad of 1</span>'
          },
          c3: {
            avatar: 'images/story-card-3.png',
            quote: '“The community made me feel seen and supported during postpartum.”',
            author: 'Radhika S., <span class="text-[#786E69] font-normal">Mother of 1</span>'
          }
        },
        {
          c1: {
            photo: 'images/story-card-1.png',
            quote: '“No judgment, no unrealistic perfectionism — just authentic empathy and honest tools that work for real families.”',
            author: 'Shalini N.',
            role: 'Mother & Community Contributor'
          },
          c2: {
            avatar: 'images/cat-photo-1.png',
            quote: '“I learned how to stay patient even during the toughest toddler tantrums.”',
            author: 'Arjun K., <span class="text-[#786E69] font-normal">Father of 2</span>'
          },
          c3: {
            avatar: 'images/cat-photo-5.png',
            quote: '“Every article feels like a warm conversation with a trusted friend.”',
            author: 'Sunita P., <span class="text-[#786E69] font-normal">Mother</span>'
          }
        }
      ];

      let currentTestiSlide = 0;
      const testiC1Photo = document.getElementById('testi-c1-photo');
      const testiC1Quote = document.getElementById('testi-c1-quote');
      const testiC1Author = document.getElementById('testi-c1-author');
      const testiC1Role = document.getElementById('testi-c1-role');

      const testiC2Avatar = document.getElementById('testi-c2-avatar');
      const testiC2Quote = document.getElementById('testi-c2-quote');
      const testiC2Author = document.getElementById('testi-c2-author');

      const testiC3Avatar = document.getElementById('testi-c3-avatar');
      const testiC3Quote = document.getElementById('testi-c3-quote');
      const testiC3Author = document.getElementById('testi-c3-author');

      const testiDots = document.querySelectorAll('.testi-dot');
      const testiPrev = document.getElementById('testi-prev');
      const testiNext = document.getElementById('testi-next');

      function updateTestimonialSlide(idx) {
        if (idx === currentTestiSlide) return;
        currentTestiSlide = idx;
        const data = testimonialSlides[currentTestiSlide];

        const cards = [
          document.getElementById('testi-card-1'),
          document.getElementById('testi-card-2'),
          document.getElementById('testi-card-3')
        ];

        cards.forEach(c => { 
          if (c) {
            c.style.opacity = '0.3';
            c.style.transform = 'translateY(6px)';
          }
        });

        setTimeout(() => {
          if (testiC1Photo) testiC1Photo.src = data.c1.photo;
          if (testiC1Quote) testiC1Quote.textContent = data.c1.quote;
          if (testiC1Author) testiC1Author.textContent = data.c1.author;
          if (testiC1Role) testiC1Role.textContent = data.c1.role;

          if (testiC2Avatar) testiC2Avatar.src = data.c2.avatar;
          if (testiC2Quote) testiC2Quote.textContent = data.c2.quote;
          if (testiC2Author) testiC2Author.innerHTML = data.c2.author;

          if (testiC3Avatar) testiC3Avatar.src = data.c3.avatar;
          if (testiC3Quote) testiC3Quote.textContent = data.c3.quote;
          if (testiC3Author) testiC3Author.innerHTML = data.c3.author;

          testiDots.forEach((dot, dIdx) => {
            if (dIdx === currentTestiSlide) {
              dot.className = 'testi-dot w-2 h-2 rounded-full bg-[#5B1E2B] transition-all cursor-pointer';
            } else {
              dot.className = 'testi-dot w-1.5 h-1.5 rounded-full bg-[#D8CCC4] hover:bg-[#5B1E2B] transition-all cursor-pointer';
            }
          });

          cards.forEach(c => { 
            if (c) {
              c.style.opacity = '1';
              c.style.transform = 'translateY(0)';
            }
          });
        }, 180);
      }

      if (testiPrev) {
        testiPrev.addEventListener('click', () => {
          const prev = (currentTestiSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
          updateTestimonialSlide(prev);
        });
      }
      if (testiNext) {
        testiNext.addEventListener('click', () => {
          const next = (currentTestiSlide + 1) % testimonialSlides.length;
          updateTestimonialSlide(next);
        });
      }
      testiDots.forEach((dot, idx) => {
        dot.addEventListener('click', () => updateTestimonialSlide(idx));
      });

      // 8. MOBILE NAVIGATION DRAWER
      const mobileBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // 9. NEWSLETTER SUBSCRIPTION ENGINE (WITH LOCALSTORAGE PERSISTENCE)
      const form = document.getElementById('newsletter-form');
      const feedback = document.getElementById('newsletter-feedback');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const email = document.getElementById('newsletter-email').value.trim();
          if (email) {
            const subs = JSON.parse(localStorage.getItem('wethemums_newsletter') || '[]');
            subs.push({ email, date: new Date().toISOString() });
            localStorage.setItem('wethemums_newsletter', JSON.stringify(subs));
            if (feedback) feedback.classList.remove('hidden');
            form.reset();
            const rect = form.getBoundingClientRect();
            spawnHeartBurst(rect.left + rect.width / 2, rect.top);
            setTimeout(() => { if (feedback) feedback.classList.add('hidden'); }, 4000);
          }
        });
      }

      const footerForm = document.getElementById('footer-newsletter');
      if (footerForm) {
        footerForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const input = footerForm.querySelector('input[type="email"]');
          if (input && input.value) {
            const subs = JSON.parse(localStorage.getItem('wethemums_newsletter') || '[]');
            subs.push({ email: input.value, date: new Date().toISOString() });
            localStorage.setItem('wethemums_newsletter', JSON.stringify(subs));
            footerForm.reset();
            alert('Welcome to WithTheMums! Thank you for subscribing.');
          }
        });
      }

    });
  