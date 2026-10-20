const fs = require('fs');

function createBanner(options) {
  const {
    pillText,
    headlineLead,
    headlineAccent,
    subtitle,
    badges,
    primaryCta,
    secondaryCta,
    imageSrc,
    imageAlt,
    quote,
    floatingIcon,
    floatingTitle,
    floatingSub
  } = options;

  const badgesHtml = badges.map(b => `
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-[#F5E9E6] text-[#6D2534] flex items-center justify-center font-bold text-xs shrink-0">${b.icon}</span>
                <span class="font-medium text-xs sm:text-sm text-[#4A4240]">${b.text}</span>
              </div>`).join('');

  const ctaHtml = (primaryCta || secondaryCta) ? `
            <div class="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              ${primaryCta ? `
              <a href="${primaryCta.href}" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#67212F] hover:bg-[#521925] text-white text-xs sm:text-sm font-medium shadow-sm transition-all hover:scale-[1.02] active:scale-95">
                <span>${primaryCta.text}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </a>` : ''}
              ${secondaryCta ? `
              <a href="${secondaryCta.href}" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-[#F5ECE8] text-[#67212F] text-xs sm:text-sm font-medium border border-[#E8D5D0] shadow-sm transition-all hover:scale-[1.02]">
                <span>${secondaryCta.text}</span>
              </a>` : ''}
            </div>` : '';

  return `
    <!-- ========================================== -->
    <!-- HERO BANNER SECTION                        -->
    <!-- ========================================== -->
    <section class="relative overflow-hidden bg-gradient-to-br from-[#FAF4EE] via-[#FCF8F5] to-[#F5ECE8] border-b border-[#EFE8E2] py-10 sm:py-14 lg:py-16">
      <!-- Decorative Botanical Leaf Accents in Background -->
      <div class="absolute -top-12 -right-12 w-64 h-64 pointer-events-none opacity-25 select-none">
        <img src="images/explore-decor-leaf.png" alt="" class="w-full h-full object-contain" />
      </div>
      <div class="absolute -bottom-10 -left-6 w-44 h-44 pointer-events-none opacity-20 select-none">
        <img src="images/explore-left-leaf.png" alt="" class="w-full h-full object-contain" />
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Column: Editorial Headline & Meta -->
          <div class="lg:col-span-7 space-y-5 sm:space-y-6">
            <div class="reveal-fade inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5E9E6] text-[#6D2534] text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
              <svg class="w-3.5 h-3.5 fill-[#6D2534] shrink-0" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>${pillText}</span>
            </div>

            <h1 class="reveal-lines font-serif text-3xl sm:text-4xl lg:text-5xl text-[#221C1D] font-normal leading-[1.18] tracking-tight">
              ${headlineLead} <br class="hidden sm:inline" />
              <span class="italic font-serif text-[#862D42]">${headlineAccent}</span>
            </h1>

            <p class="reveal-fade font-sans text-sm sm:text-base lg:text-lg text-[#5E5553] leading-relaxed max-w-2xl">
              ${subtitle}
            </p>

            <!-- Trust Badges -->
            <div class="reveal-fade pt-1 flex flex-wrap items-center gap-4 sm:gap-6">
              ${badgesHtml}
            </div>

            ${ctaHtml}
          </div>

          <!-- Right Column: Visual Photo Banner Card -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              <!-- Glow backdrop -->
              <div class="absolute -inset-2 bg-gradient-to-tr from-[#6D2534]/15 via-[#F5ECE8] to-[#E8D5D0]/50 rounded-[2.5rem] blur-xl opacity-80 pointer-events-none"></div>
              
              <!-- Main Photo Frame -->
              <div class="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl shadow-[#6D2534]/12 bg-white group">
                <img 
                  src="${imageSrc}" 
                  alt="${imageAlt}" 
                  class="w-full h-[260px] sm:h-[320px] lg:h-[350px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                
                <!-- Bottom Gradient Vignette with Quote -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent flex items-end p-5 pointer-events-none">
                  <p class="text-white text-xs sm:text-sm font-serif italic drop-shadow-md">
                    ${quote}
                  </p>
                </div>
              </div>

              <!-- Floating Micro-Badge -->
              <div class="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-[#F5E9E6] flex items-center gap-2.5 z-20">
                <div class="w-7 h-7 rounded-full bg-[#FAF0EC] flex items-center justify-center text-[#67212F] shrink-0 font-bold text-xs">
                  ${floatingIcon}
                </div>
                <div class="text-[11px] leading-tight">
                  <span class="font-bold text-[#221C1D] block">${floatingTitle}</span>
                  <span class="text-[#7A6E6B] block">${floatingSub}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
`;
}

// 1. stories.html
function updateStories() {
  let html = fs.readFileSync('stories.html', 'utf8');
  const banner = createBanner({
    pillText: 'Editorial Archive • Real Experiences',
    headlineLead: 'Lived Parenting Stories,',
    headlineAccent: 'raw & heartfelt.',
    subtitle: 'Real narratives contributed by mothers, fathers, and caregivers navigating pregnancy, postpartum, sleepless nights, and the profound joy of raising tiny humans.',
    badges: [
      { icon: '✓', text: '500+ Honest Stories' },
      { icon: '♡', text: '100% Judgment-Free' },
      { icon: '★', text: 'Verified Parent Voices' }
    ],
    primaryCta: { text: 'Browse & Search Stories', href: '#search-input' },
    secondaryCta: { text: 'Share Your Story', href: 'share-your-story.html' },
    imageSrc: 'images/banners/banner-stories.jpg',
    imageAlt: 'Mother and child reading a book in gentle morning sunlight',
    quote: '&ldquo;Because when one mother shares her truth, all of us feel less alone.&rdquo;',
    floatingIcon: '♡',
    floatingTitle: 'Safe Community',
    floatingSub: '500+ Stories Shared'
  });

  const mainPattern = /<main class="flex-grow py-12 md:py-16">[\s\S]*?<!-- FILTER CONTROLS & SEARCH BAR -->/;
  if (mainPattern.test(html)) {
    html = html.replace(mainPattern, `<main class="flex-grow">\n${banner}\n    <div class="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">\n      <!-- FILTER CONTROLS & SEARCH BAR -->`);
    fs.writeFileSync('stories.html', html, 'utf8');
    console.log('Updated stories.html');
  } else {
    console.warn('Could not match main in stories.html');
  }
}

// 2. journal.html
function updateJournal() {
  let html = fs.readFileSync('journal.html', 'utf8');
  const banner = createBanner({
    pillText: 'Editorial Journal • Wellbeing & Mindfulness',
    headlineLead: 'Reflections & Family Wellbeing,',
    headlineAccent: 'grounded & gentle.',
    subtitle: 'Evidence-informed perspectives, postpartum mental health resources, and thoughtful explorations of modern family life to nurture you through every stage.',
    badges: [
      { icon: '✦', text: 'Clinically Reviewed' },
      { icon: '♡', text: 'Maternal Mental Health' },
      { icon: '✓', text: 'Mindful Parenting' }
    ],
    primaryCta: { text: 'Explore Articles', href: '#journal-grid' },
    secondaryCta: { text: 'Subscribe to Newsletter', href: '#footer-newsletter' },
    imageSrc: 'images/banners/banner-journal.jpg',
    imageAlt: 'Mother and newborn in peaceful mindful moment',
    quote: '&ldquo;Taking care of yourself is taking care of your child.&rdquo;',
    floatingIcon: '✦',
    floatingTitle: 'Evidence-Led Wisdom',
    floatingSub: 'Doctor & Doula Guided'
  });

  const mainPattern = /<main class="flex-grow py-12 md:py-20">[\s\S]*?<!-- EDITORIAL \/ MEDICAL DISTINCTION NOTICE -->/;
  if (mainPattern.test(html)) {
    html = html.replace(mainPattern, `<main class="flex-grow">\n${banner}\n    <div class="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">\n      <!-- EDITORIAL / MEDICAL DISTINCTION NOTICE -->`);
    fs.writeFileSync('journal.html', html, 'utf8');
    console.log('Updated journal.html');
  } else {
    console.warn('Could not match main in journal.html');
  }
}

// 3. about.html
function updateAbout() {
  let html = fs.readFileSync('about.html', 'utf8');
  const banner = createBanner({
    pillText: 'Our Story & Purpose • The Village',
    headlineLead: 'Every parenting journey',
    headlineAccent: 'deserves a village.',
    subtitle: 'We founded WithTheMums on a simple, enduring conviction: parenthood is too raw, complex, and profound to navigate in isolation. Here is your warm, honest sanctuary.',
    badges: [
      { icon: '✿', text: 'Founded by Mothers' },
      { icon: '★', text: '10,000+ Community' },
      { icon: '♡', text: 'Zero Highlight Reels' }
    ],
    primaryCta: { text: 'Read Our Story', href: '#our-mission' },
    secondaryCta: { text: 'Join Our Community', href: 'stories.html' },
    imageSrc: 'images/banners/banner-about.jpg',
    imageAlt: 'Mothers smiling and holding their children together in community',
    quote: '&ldquo;Together, we lift the invisible weight of motherhood.&rdquo;',
    floatingIcon: '✿',
    floatingTitle: 'Motherhood United',
    floatingSub: '10,000+ Strong Village'
  });

  const heroPattern = /<!-- HERO -->[\s\S]*?<\/section>/;
  if (heroPattern.test(html)) {
    html = html.replace(heroPattern, banner.trim());
    // Also ensure the next section has id="our-mission"
    html = html.replace('<!-- MISSION STATEMENT & IMAGE -->\n    <section class="py-20 bg-ivory">', '<!-- MISSION STATEMENT & IMAGE -->\n    <section id="our-mission" class="py-20 bg-ivory">');
    fs.writeFileSync('about.html', html, 'utf8');
    console.log('Updated about.html');
  } else {
    console.warn('Could not match hero in about.html');
  }
}

// 4. brand-partnerships.html
function updateBrandPartnerships() {
  let html = fs.readFileSync('brand-partnerships.html', 'utf8');
  const banner = createBanner({
    pillText: 'B2B Collaborations • Purpose-Driven Partnerships',
    headlineLead: 'Connect meaningfully with',
    headlineAccent: 'discerning modern families.',
    subtitle: 'WithTheMums provides a thoughtful, high-trust environment for brands dedicated to maternal wellbeing, pediatric health, and conscious, mindful family living.',
    badges: [
      { icon: '★', text: '85% Active Engagement' },
      { icon: '✓', text: 'High-Trust Environment' },
      { icon: '✦', text: 'Zero Cluttered Ads' }
    ],
    primaryCta: { text: 'Partner With Us', href: '#enquiry-form' },
    secondaryCta: { text: 'View Audience Demographics', href: '#audience-metrics' },
    imageSrc: 'images/banners/banner-brand.jpg',
    imageAlt: 'Modern mindful family lifestyle',
    quote: '&ldquo;Partnering with brands that truly champion family wellness.&rdquo;',
    floatingIcon: '★',
    floatingTitle: 'High-Intent Audience',
    floatingSub: 'Authentic Storytelling'
  });

  const heroPattern = /<!-- B2B HERO SECTION -->[\s\S]*?<\/section>/;
  if (heroPattern.test(html)) {
    html = html.replace(heroPattern, banner.trim());
    // Ensure target demographics has id
    html = html.replace('<!-- TARGET DEMOGRAPHICS & TRUST METRICS -->\n    <section class="py-16 md:py-20 bg-ivory">', '<!-- TARGET DEMOGRAPHICS & TRUST METRICS -->\n    <section id="audience-metrics" class="py-16 md:py-20 bg-ivory">');
    fs.writeFileSync('brand-partnerships.html', html, 'utf8');
    console.log('Updated brand-partnerships.html');
  } else {
    console.warn('Could not match hero in brand-partnerships.html');
  }
}

// 5. courses.html
function updateCourses() {
  let html = fs.readFileSync('courses.html', 'utf8');
  const banner = createBanner({
    pillText: 'With The Mums Academy • Masterclasses',
    headlineLead: 'Parenting wisdom, guided',
    headlineAccent: 'by trusted specialists.',
    subtitle: 'Self-paced, judgment-free masterclasses created by certified pediatricians, child psychologists, and lactation consultants. Step-by-step video lessons and lifetime access.',
    badges: [
      { icon: '⭐', text: '4.9/5 Average Rating' },
      { icon: '✓', text: '8,500+ Mums Enrolled' },
      { icon: '✦', text: 'Lifetime Video Access' }
    ],
    primaryCta: { text: 'Explore All Courses', href: '#courses-grid' },
    secondaryCta: { text: 'Meet the Instructors', href: '#instructor-section' },
    imageSrc: 'images/banners/banner-courses.jpg',
    imageAlt: 'Mother and baby in mindful developmental guidance session',
    quote: '&ldquo;Confidence and calm in every step of your parenting journey.&rdquo;',
    floatingIcon: '🎓',
    floatingTitle: 'Certified Specialists',
    floatingSub: 'Pediatricians & Experts'
  });

  const heroPattern = /<!-- HERO SECTION -->[\s\S]*?<\/section>/;
  if (heroPattern.test(html)) {
    html = html.replace(heroPattern, banner.trim());
    fs.writeFileSync('courses.html', html, 'utf8');
    console.log('Updated courses.html');
  } else {
    console.warn('Could not match hero in courses.html');
  }
}

// 6. contact.html
function updateContact() {
  let html = fs.readFileSync('contact.html', 'utf8');
  const banner = createBanner({
    pillText: 'Connect With Us • We Are Listening',
    headlineLead: 'We are always here,',
    headlineAccent: 'ready to listen.',
    subtitle: 'Whether you want to share feedback, ask an editorial question, suggest a partnership, or simply say hello — our village inbox is always open and welcoming.',
    badges: [
      { icon: '✉', text: 'Personal Replies in 24-48h' },
      { icon: '♡', text: 'Caring Editorial Team' },
      { icon: '✓', text: 'Safe & Confidential' }
    ],
    primaryCta: { text: 'Send Us a Message', href: '#contact-form' },
    secondaryCta: { text: 'Editorial FAQ', href: 'about.html' },
    imageSrc: 'images/banners/banner-contact.jpg',
    imageAlt: 'Smiling mother and child in warm cozy living room',
    quote: '&ldquo;You are never alone on this journey. We are here.&rdquo;',
    floatingIcon: '✉',
    floatingTitle: 'Village Support',
    floatingSub: 'Replies in 24-48h'
  });

  const mainPattern = /<main class="flex-grow py-12 md:py-20">[\s\S]*?<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">/;
  if (mainPattern.test(html)) {
    html = html.replace(mainPattern, `<main class="flex-grow">\n${banner}\n    <div class="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">\n      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">`);
    fs.writeFileSync('contact.html', html, 'utf8');
    console.log('Updated contact.html');
  } else {
    console.warn('Could not match main in contact.html');
  }
}

// 7. share-your-story.html
function updateShareYourStory() {
  let html = fs.readFileSync('share-your-story.html', 'utf8');
  const banner = createBanner({
    pillText: 'Community Voices • Contributor Submissions',
    headlineLead: 'Your story has the power',
    headlineAccent: 'to heal and inspire.',
    subtitle: 'Parenthood comes with moments that change us, challenge us, and bring us closer together. When you share your truth, you illuminate the path for another parent walking a similar road.',
    badges: [
      { icon: '♡', text: 'Anonymous Options Available' },
      { icon: '✦', text: 'Compassionately Edited' },
      { icon: '✓', text: 'Global Parent Community' }
    ],
    primaryCta: { text: 'Start Story Submission', href: '#submission-form' },
    secondaryCta: { text: 'Read Community Stories', href: 'stories.html' },
    imageSrc: 'images/banners/banner-share.jpg',
    imageAlt: 'Tender embrace of mother and child hands',
    quote: '&ldquo;When one mother speaks honestly, a thousand breathe easier.&rdquo;',
    floatingIcon: '✎',
    floatingTitle: 'Your Voice Matters',
    floatingSub: 'Share your truth with care'
  });

  const mainPattern = /<main class="flex-grow py-12 md:py-20">[\s\S]*?<!-- EDITORIAL PRINCIPLES CARD -->/;
  if (mainPattern.test(html)) {
    html = html.replace(mainPattern, `<main class="flex-grow">\n${banner}\n    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-14">\n      <!-- EDITORIAL PRINCIPLES CARD -->`);
    fs.writeFileSync('share-your-story.html', html, 'utf8');
    console.log('Updated share-your-story.html');
  } else {
    console.warn('Could not match main in share-your-story.html');
  }
}

// 8. story-detail.html
function updateStoryDetail() {
  let html = fs.readFileSync('story-detail.html', 'utf8');
  // In story-detail.html, we add an editorial hero banner at top of main
  const banner = `
    <!-- ========================================== -->
    <!-- EDITORIAL STORY BANNER                     -->
    <!-- ========================================== -->
    <section class="relative overflow-hidden bg-gradient-to-br from-[#FAF4EE] via-[#FCF8F5] to-[#F5ECE8] border-b border-[#EFE8E2] py-8 sm:py-12">
      <!-- Decorative Botanical Leaf Accents in Background -->
      <div class="absolute -top-12 -right-12 w-64 h-64 pointer-events-none opacity-25 select-none">
        <img src="images/explore-decor-leaf.png" alt="" class="w-full h-full object-contain" />
      </div>
      <div class="absolute -bottom-10 -left-6 w-44 h-44 pointer-events-none opacity-20 select-none">
        <img src="images/explore-left-leaf.png" alt="" class="w-full h-full object-contain" />
      </div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <!-- BREADCRUMBS -->
        <nav class="flex items-center gap-2 text-xs text-[#7A6E6B] mb-6">
          <a href="index.html" class="hover:text-berry transition-colors">Home</a>
          <span>/</span>
          <a href="stories.html" class="hover:text-berry transition-colors">Stories</a>
          <span>/</span>
          <span id="breadcrumb-category" class="text-charcoal font-medium">Lived Experience</span>
        </nav>

        <div class="flex flex-wrap items-center gap-2 mb-4">
          <span id="story-category" class="bg-berry/10 text-berry px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Category
          </span>
          <span class="text-xs text-mutedText">•</span>
          <span id="story-readtime" class="text-xs text-mutedText font-medium">6 min read</span>
          <span class="text-xs text-mutedText">•</span>
          <span class="inline-flex items-center gap-1 text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
            ✓ Verified Submission
          </span>
        </div>

        <h1 id="story-title" class="reveal-lines font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal leading-[1.2] tracking-tight mb-4">
          Loading Story...
        </h1>

        <p id="story-excerpt" class="reveal-fade text-base sm:text-lg text-[#5E5553] leading-relaxed italic max-w-2xl">
          ...
        </p>

        <!-- ATTRIBUTION META -->
        <div class="pt-6 mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#7A6E6B] border-t border-[#E8D5D0]">
          <span id="story-author" class="font-semibold text-charcoal">Contributor</span>
          <span>•</span>
          <span id="story-date">Date</span>
          <span>•</span>
          <span class="text-berry font-medium">WithTheMums Community Voices</span>
        </div>
      </div>
    </section>
  `;

  // Check if we can replace from <main class="flex-grow py-10 md:py-16"> down to </header> inside article
  const pattern = /<main class="flex-grow py-10 md:py-16">\s*<article class="max-w-4xl mx-auto px-4 sm:px-6">[\s\S]*?<\/header>/;
  if (pattern.test(html)) {
    html = html.replace(pattern, `<main class="flex-grow">\n${banner}\n    <article class="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">`);
    fs.writeFileSync('story-detail.html', html, 'utf8');
    console.log('Updated story-detail.html');
  } else {
    console.warn('Could not match pattern in story-detail.html');
  }
}

updateStories();
updateJournal();
updateAbout();
updateBrandPartnerships();
updateCourses();
updateContact();
updateShareYourStory();
updateStoryDetail();
