const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// 1. Add Courses to Navigation
const oldDesktopNav = `<a href="contact.html" class="hover:text-berry transition-colors"\n            >Contact</a\n          >`;
const newDesktopNav = `<a href="#parenting-courses-section" class="hover:text-berry transition-colors inline-flex items-center gap-1.5 font-medium"\n            ><span>Courses</span><span class="bg-[#862D42]/10 text-[#862D42] text-[10px] font-bold px-1.5 py-0.5 rounded-full">New</span></a\n          >\n          <a href="contact.html" class="hover:text-berry transition-colors"\n            >Contact</a\n          >`;

if (content.includes(oldDesktopNav)) {
  content = content.replace(oldDesktopNav, newDesktopNav);
} else {
  console.log("Could not find exact oldDesktopNav");
}

const oldMobileNav = `<a\n            href="contact.html"\n            class="text-charcoal hover:text-berry py-1.5 px-2"\n            >Contact</a\n          >`;
const newMobileNav = `<a\n            href="#parenting-courses-section"\n            class="text-charcoal hover:text-berry py-1.5 px-2 flex items-center justify-between"\n            ><span>Parenting Courses</span><span class="bg-[#862D42]/10 text-[#862D42] text-[10px] font-bold px-2 py-0.5 rounded-full">New</span></a\n          >\n          <a\n            href="contact.html"\n            class="text-charcoal hover:text-berry py-1.5 px-2"\n            >Contact</a\n          >`;

if (content.includes(oldMobileNav)) {
  content = content.replace(oldMobileNav, newMobileNav);
} else {
  console.log("Could not find exact oldMobileNav");
}

// 2. Prepare the Parenting Courses Section HTML
const coursesSectionHtml = `
      <!-- ========================================== -->
      <!-- SECTION: ONLINE PARENTING COURSES & ACADEMY -->
      <!-- (VERY MODERN, ATTRACTIVE & HIGH CONVERTING) -->
      <!-- ========================================== -->
      <section
        class="py-16 sm:py-24 bg-[#FBF9F7] border-y border-[#EFE8E2] relative overflow-hidden"
        id="parenting-courses-section"
      >
        <!-- Soft background blurs -->
        <div class="absolute -left-20 top-1/4 w-96 h-96 rounded-full bg-[#F4E3DF]/45 blur-3xl pointer-events-none select-none"></div>
        <div class="absolute -right-20 bottom-10 w-96 h-96 rounded-full bg-[#EAE0D8]/40 blur-3xl pointer-events-none select-none"></div>

        <div class="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <!-- Top Tag, Title & Filter Row -->
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div class="max-w-2xl">
              <div class="flex items-center gap-2 mb-3">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#862D42]/10 text-[#862D42] text-[11px] font-bold tracking-widest uppercase">
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  WITH THE MUMS ACADEMY
                </span>
                <span class="text-xs text-[#8C827E]">· Doctor & Pediatrician Approved</span>
              </div>
              <h2 class="reveal-lines font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#221C1D] font-normal leading-[1.18]">
                Transform Your Home with <span class="italic text-[#862D42]">Calm & Confidence</span>
              </h2>
              <p class="reveal-fade font-sans text-xs sm:text-sm text-[#5A524F] mt-3 leading-relaxed max-w-xl">
                Practical, self-paced masterclasses designed by child psychologists, postpartum doulas, and real parents. Step-by-step video lessons, printable scripts, and lifetime support.
              </p>
            </div>

            <!-- Filter Tabs -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <div class="inline-flex p-1.5 rounded-full bg-white border border-[#E8DDD6] shadow-2xs" id="course-filter-group">
                <button class="course-tab-btn active px-4 py-1.5 rounded-full text-xs font-semibold bg-[#862D42] text-white transition-all shadow-xs cursor-pointer" data-filter="all">All Courses (3)</button>
                <button class="course-tab-btn px-4 py-1.5 rounded-full text-xs font-medium text-[#655B56] hover:text-[#221C1D] hover:bg-[#FAF4EE] transition-all cursor-pointer" data-filter="toddler">Toddler & Tantrums</button>
                <button class="course-tab-btn px-4 py-1.5 rounded-full text-xs font-medium text-[#655B56] hover:text-[#221C1D] hover:bg-[#FAF4EE] transition-all cursor-pointer" data-filter="postpartum">Postpartum & Baby</button>
                <button class="course-tab-btn px-4 py-1.5 rounded-full text-xs font-medium text-[#655B56] hover:text-[#221C1D] hover:bg-[#FAF4EE] transition-all cursor-pointer" data-filter="harmony">Family Harmony</button>
              </div>
            </div>
          </div>

          <!-- 3 Modern High-Converting Course Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8" id="courses-grid">
            
            <!-- COURSE 1: TODDLER EMOTIONS -->
            <div class="course-card bg-white rounded-[26px] border border-[#EBE1D9] shadow-[0_6px_28px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_rgba(134,45,66,0.11)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group" data-category="toddler">
              <!-- Top Photo Banner -->
              <div class="relative h-52 sm:h-56 overflow-hidden bg-[#F4EDE7]">
                <img
                  src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80"
                  alt="The Calm Toddler Blueprint"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                
                <!-- Pill Badges -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#862D42] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    ★ BESTSELLER
                  </span>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#221C1D] text-[11px] font-semibold shadow-2xs">
                    <svg class="w-3.5 h-3.5 fill-[#D97706]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    4.9 (1.4k reviews)
                  </span>
                </div>

                <!-- Video / Module stat banner inside image bottom -->
                <div class="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white text-[11px] font-medium">
                  <span class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#E6A857]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    24 Video Lessons (3.5 hrs)
                  </span>
                  <span class="bg-black/35 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">Self-Paced</span>
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2.5 mb-2">
                    <span class="text-[11px] font-bold text-[#862D42] uppercase tracking-wider">Ages 1 - 5 Years</span>
                    <span class="text-[#D3C7BF]">•</span>
                    <span class="text-xs text-[#7A706A]">Lifetime Access</span>
                  </div>

                  <h3 class="font-serif text-2xl text-[#221C1D] font-normal group-hover:text-[#862D42] transition-colors leading-snug">
                    The Calm Toddler Blueprint
                  </h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-2.5">
                    De-escalate public meltdowns, replace yelling with calm co-regulation scripts, and handle stubborn bedtime resistance with compassionate firmness.
                  </p>

                  <!-- Instructor Snippet -->
                  <div class="mt-4 flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF5F0] border border-[#EFE5DC]">
                    <img src="images/testimonial-card2-avatar.png" alt="Dr. Alisha Verma" class="w-9 h-9 rounded-full object-cover shrink-0 border border-white" />
                    <div class="text-left">
                      <p class="text-xs font-semibold text-[#221C1D] leading-none">Dr. Alisha Verma</p>
                      <p class="text-[11px] text-[#857B75] mt-0.5">Pediatric Psychologist & Mom of 2</p>
                    </div>
                  </div>

                  <!-- Curriculum Highlights Checklist -->
                  <div class="mt-4 space-y-2 pt-2 border-t border-[#F2E8E2]">
                    <div class="flex items-start gap-2 text-xs text-[#4A423F]">
                      <svg class="w-4 h-4 text-[#862D42] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span>20+ Word-for-Word Meltdown Scripts</span>
                    </div>
                    <div class="flex items-start gap-2 text-xs text-[#4A423F]">
                      <svg class="w-4 h-4 text-[#862D42] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span>Bedtime & Morning Routine Flowcharts</span>
                    </div>
                    <div class="flex items-start gap-2 text-xs text-[#4A423F]">
                      <svg class="w-4 h-4 text-[#862D42] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span>Printable "Emergency Calm" Fridge Cards</span>
                    </div>
                  </div>
                </div>

                <!-- Price & CTA Button Row -->
                <div class="mt-6 pt-5 border-t border-[#EFE5DC] flex items-center justify-between">
                  <div>
                    <div class="flex items-baseline gap-2">
                      <span class="font-serif text-2xl sm:text-3xl font-bold text-[#221C1D]">$49</span>
                      <span class="text-xs text-[#9E948E] line-through font-sans">$99</span>
                    </div>
                    <span class="text-[10px] uppercase font-bold text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full inline-block mt-0.5">Save 50% Today</span>
                  </div>

                  <a
                    href="contact.html?course=calm-toddler"
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#862D42] hover:bg-[#6D2335] text-white text-xs font-semibold shadow-sm hover:scale-[1.03] active:scale-95 transition-all group/btn"
                  >
                    <span>Enroll Now</span>
                    <span class="transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- COURSE 2: POSTPARTUM & NEWBORN SLEEP -->
            <div class="course-card bg-white rounded-[26px] border border-[#EBE1D9] shadow-[0_6px_28px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_rgba(134,45,66,0.11)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group" data-category="postpartum">
              <!-- Top Photo Banner -->
              <div class="relative h-52 sm:h-56 overflow-hidden bg-[#F4EDE7]">
                <img
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80"
                  alt="The Fourth Trimester Sanctuary"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                
                <!-- Pill Badges -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3D2645] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    ♥ MOST LOVED BY MOMS
                  </span>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#221C1D] text-[11px] font-semibold shadow-2xs">
                    <svg class="w-3.5 h-3.5 fill-[#D97706]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    4.95 (980 reviews)
                  </span>
                </div>

                <!-- Video / Module stat banner inside image bottom -->
                <div class="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white text-[11px] font-medium">
                  <span class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#E6A857]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    32 Lessons + Sleep Audio (4.2 hrs)
                  </span>
                  <span class="bg-black/35 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">Audio & Video</span>
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2.5 mb-2">
                    <span class="text-[11px] font-bold text-[#862D42] uppercase tracking-wider">0 - 12 Months</span>
                    <span class="text-[#D3C7BF]">•</span>
                    <span class="text-xs text-[#7A706A]">Lifetime Access</span>
                  </div>

                  <h3 class="font-serif text-2xl text-[#221C1D] font-normal group-hover:text-[#862D42] transition-colors leading-snug">
                    Fourth Trimester Sanctuary
                  </h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-2.5">
                    Newborn sleep conditioning without crying-it-out, maternal physical healing, hormonal rebalance, and partner night-duty choreography.
                  </p>

                  <!-- Instructor Snippet -->
                  <div class="mt-4 flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF5F0] border border-[#EFE5DC]">
                    <img src="images/testimonial-card3-avatar.png" alt="Nurse Sarah Lin" class="w-9 h-9 rounded-full object-cover shrink-0 border border-white" />
                    <div class="text-left">
                      <p class="text-xs font-semibold text-[#221C1D] leading-none">Nurse Sarah Lin, IBCLC</p>
                      <p class="text-[11px] text-[#857B75] mt-0.5">Postpartum Doula & Lactation Specialist</p>
                    </div>
                  </div>

                  <!-- Curriculum Highlights Checklist -->
                  <div class="mt-4 space-y-2 pt-2 border-t border-[#F2E8E2]">
                    <div class="flex items-start gap-2 text-xs text-[#4A423F]">
                      <svg class="w-4 h-4 text-[#862D42] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span>Month-by-Month Newborn Sleep Schedules</span>
                    </div>
                    <div class="flex items-start gap-2 text-xs text-[#4A423F]">
                      <svg class="w-4 h-4 text-[#862D42] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span>Pelvic Floor & Core Rehab Guided Routines</span>
                    </div>
                    <div class="flex items-start gap-2 text-xs text-[#4A423F]">
                      <svg class="w-4 h-4 text-[#862D42] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span>Soothing White Noise & Lullaby Audio Pack</span>
                    </div>
                  </div>
                </div>

                <!-- Price & CTA Button Row -->
                <div class="mt-6 pt-5 border-t border-[#EFE5DC] flex items-center justify-between">
                  <div>
                    <div class="flex items-baseline gap-2">
                      <span class="font-serif text-2xl sm:text-3xl font-bold text-[#221C1D]">$59</span>
                      <span class="text-xs text-[#9E948E] line-through font-sans">$120</span>
                    </div>
                    <span class="text-[10px] uppercase font-bold text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full inline-block mt-0.5">Save 51% Today</span>
                  </div>

                  <a
                    href="contact.html?course=fourth-trimester"
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#862D42] hover:bg-[#6D2335] text-white text-xs font-semibold shadow-sm hover:scale-[1.03] active:scale-95 transition-all group/btn"
                  >
                    <span>Enroll Now</span>
                    <span class="transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- COURSE 3: SIBLING HARMONY & MINDFUL BOUNDARIES -->
            <div class="course-card bg-white rounded-[26px] border border-[#EBE1D9] shadow-[0_6px_28px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_rgba(134,45,66,0.11)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group" data-category="harmony">
              <!-- Top Photo Banner -->
              <div class="relative h-52 sm:h-56 overflow-hidden bg-[#F4EDE7]">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
                  alt="The Connected Family Framework"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                
                <!-- Pill Badges -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B85D35] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    ✦ ALL-IN-ONE BUNDLE
                  </span>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#221C1D] text-[11px] font-semibold shadow-2xs">
                    <svg class="w-3.5 h-3.5 fill-[#D97706]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    4.92 (1.1k reviews)
                  </span>
                </div>

                <!-- Video / Module stat banner inside image bottom -->
                <div class="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white text-[11px] font-medium">
                  <span class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#E6A857]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    38 Video Lessons (5.0 hrs)
                  </span>
                  <span class="bg-black/35 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">Live Q&A Replays</span>
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2.5 mb-2">
                    <span class="text-[11px] font-bold text-[#862D42] uppercase tracking-wider">Ages 3 - 12 Years</span>
                    <span class="text-[#D3C7BF]">•</span>
                    <span class="text-xs text-[#7A706A]">Lifetime Access</span>
                  </div>

                  <h3 class="font-serif text-2xl text-[#221C1D] font-normal group-hover:text-[#862D42] transition-colors leading-snug">
                    The Connected Family Framework
                  </h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-2.5">
                    Dissolve daily sibling jealousy and bickering, establish respectful house agreements, and build heartfelt emotional bonds that last a lifetime.
                  </p>

                  <!-- Instructor Snippet -->
                  <div class="mt-4 flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF5F0] border border-[#EFE5DC]">
                    <img src="images/testimonial-card1-photo.png" alt="Marcus & Elena Vance" class="w-9 h-9 rounded-full object-cover shrink-0 border border-white" />
                    <div class="text-left">
                      <p class="text-xs font-semibold text-[#221C1D] leading-none">Marcus & Elena Vance</p>
                      <p class="text-[11px] text-[#857B75] mt-0.5">Family Counselors & Certified Educators</p>
                    </div>
                  </div>

                  <!-- Curriculum Highlights Checklist -->
                  <div class="mt-4 space-y-2 pt-2 border-t border-[#F2E8E2]">
                    <div class="flex items-start gap-2 text-xs text-[#4A423F]">
                      <svg class="w-4 h-4 text-[#862D42] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span>Sibling Conflict Mediation Framework</span>
                    </div>
                    <div class="flex items-start gap-2 text-xs text-[#4A423F]">
                      <svg class="w-4 h-4 text-[#862D42] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span>15-Minute Weekly 1-on-1 Connection Rituals</span>
                    </div>
                    <div class="flex items-start gap-2 text-xs text-[#4A423F]">
                      <svg class="w-4 h-4 text-[#862D42] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                      <span>Screen-Time & Digital Boundary Workbooks</span>
                    </div>
                  </div>
                </div>

                <!-- Price & CTA Button Row -->
                <div class="mt-6 pt-5 border-t border-[#EFE5DC] flex items-center justify-between">
                  <div>
                    <div class="flex items-baseline gap-2">
                      <span class="font-serif text-2xl sm:text-3xl font-bold text-[#221C1D]">$69</span>
                      <span class="text-xs text-[#9E948E] line-through font-sans">$140</span>
                    </div>
                    <span class="text-[10px] uppercase font-bold text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full inline-block mt-0.5">Save 51% Today</span>
                  </div>

                  <a
                    href="contact.html?course=connected-family"
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#862D42] hover:bg-[#6D2335] text-white text-xs font-semibold shadow-sm hover:scale-[1.03] active:scale-95 transition-all group/btn"
                  >
                    <span>Enroll Now</span>
                    <span class="transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <!-- Modern Trust & Feature Strip Underneath -->
          <div class="mt-14 pt-8 border-t border-[#EFE5DC] grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div class="flex items-center sm:items-start gap-3.5">
              <div class="w-10 h-10 rounded-2xl bg-[#FAF0F2] text-[#862D42] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4 class="font-semibold text-xs sm:text-sm text-[#221C1D]">Lifetime Access</h4>
                <p class="text-[11px] text-[#786E69] mt-0.5">Rewatch anytime on phone, tablet, or laptop.</p>
              </div>
            </div>

            <div class="flex items-center sm:items-start gap-3.5">
              <div class="w-10 h-10 rounded-2xl bg-[#FAF0F2] text-[#862D42] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"/></svg>
              </div>
              <div>
                <h4 class="font-semibold text-xs sm:text-sm text-[#221C1D]">Audio-First Mode</h4>
                <p class="text-[11px] text-[#786E69] mt-0.5">Listen hands-free while stroller-walking or cooking.</p>
              </div>
            </div>

            <div class="flex items-center sm:items-start gap-3.5">
              <div class="w-10 h-10 rounded-2xl bg-[#FAF0F2] text-[#862D42] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <h4 class="font-semibold text-xs sm:text-sm text-[#221C1D]">Printable Guides</h4>
                <p class="text-[11px] text-[#786E69] mt-0.5">Downloadable PDFs, checklists, & script cards.</p>
              </div>
            </div>

            <div class="flex items-center sm:items-start gap-3.5">
              <div class="w-10 h-10 rounded-2xl bg-[#FAF0F2] text-[#862D42] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div>
                <h4 class="font-semibold text-xs sm:text-sm text-[#221C1D]">30-Day Guarantee</h4>
                <p class="text-[11px] text-[#786E69] mt-0.5">100% money back if you don't feel calmer.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
`;

// Insert before SECTION 8: RESPONSIBLE STORYTELLING
const targetAnchor = '<!-- SECTION 8: RESPONSIBLE STORYTELLING';
const anchorIdx = content.indexOf(targetAnchor);

if (anchorIdx === -1) {
  console.error("Could not find anchor for Section 8!");
  process.exit(1);
}

// Find previous <!-- === before Section 8
const dividerIdx = content.lastIndexOf('<!-- ========================================== -->', anchorIdx);

content = content.substring(0, dividerIdx) + coursesSectionHtml + '\n' + content.substring(dividerIdx);

// 3. Add Tab Filtering JS to the DOMContentLoaded listener
const jsFilterCode = `
        // =============================================
        // PARENTING COURSES TAB FILTERING ENGINE
        // =============================================
        const courseTabBtns = document.querySelectorAll(".course-tab-btn");
        const courseCards = document.querySelectorAll(".course-card");

        if (courseTabBtns.length && courseCards.length) {
          courseTabBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
              const filter = btn.dataset.filter;

              // Active tab button styling
              courseTabBtns.forEach((b) => {
                b.classList.remove("active", "bg-[#862D42]", "text-white", "font-semibold", "shadow-xs");
                b.classList.add("text-[#655B56]", "font-medium");
              });
              btn.classList.add("active", "bg-[#862D42]", "text-white", "font-semibold", "shadow-xs");
              btn.classList.remove("text-[#655B56]", "font-medium");

              // Filter cards
              courseCards.forEach((card) => {
                const category = card.dataset.category;
                if (filter === "all" || category === filter) {
                  card.style.display = "flex";
                  card.style.opacity = "0";
                  card.style.transform = "translateY(8px)";
                  setTimeout(() => {
                    card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                  }, 20);
                } else {
                  card.style.display = "none";
                }
              });
            });
          });
        }
`;

// Insert the JS code right before the closing of DOMContentLoaded listener
const domLoadedEnd = content.lastIndexOf('}); // End DOMContentLoaded');
if (domLoadedEnd !== -1) {
  content = content.substring(0, domLoadedEnd) + jsFilterCode + '\n' + content.substring(domLoadedEnd);
} else {
  // Try finding the last }); before </script>
  const scriptEnd = content.lastIndexOf('</script>');
  const lastClose = content.lastIndexOf('});', scriptEnd);
  content = content.substring(0, lastClose) + jsFilterCode + '\n' + content.substring(lastClose);
}

fs.writeFileSync(indexPath, content, 'utf8');
console.log("Successfully inserted Parenting Courses Section into index.html!");
