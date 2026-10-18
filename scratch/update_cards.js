const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

const startMarker = '<!-- 6 Cards Grid -->';
const endMarker = '<!-- ========================================== -->\n      <!-- SECTION 5: STORIES THAT STAY WITH YOU';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf('<!-- ========================================== -->\n      <!-- SECTION 5: STORIES THAT STAY WITH YOU');

if (startIndex === -1 || endIndex === -1) {
  console.error("Markers not found! Start:", startIndex, "End:", endIndex);
  process.exit(1);
}

// Locate the closing </div> of Section 3 before the endMarker
const section3End = content.lastIndexOf('</section>', endIndex);
if (section3End === -1) {
  console.error("Section 3 end not found!");
  process.exit(1);
}

const newGridHtml = `<!-- 6 Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            <!-- Category 1: Motherhood & Matrescence -->
            <div class="rounded-[22px] overflow-hidden bg-white border border-[#F0E5DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(134,45,66,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
              <!-- Card Photo Header -->
              <div class="relative h-48 sm:h-52 overflow-hidden bg-[#FAF5F0]">
                <img
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80"
                  alt="Motherhood & Matrescence"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <!-- Top Badges -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#862D42] text-[11px] font-semibold shadow-sm tracking-wide">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#862D42]"></span>
                    48 Stories
                  </span>
                  <span class="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#862D42] shadow-sm">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </span>
                </div>
                <!-- Organic wave divider cutting bottom of image -->
                <div class="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                  <svg class="w-full h-5 sm:h-6 text-white fill-current block" viewBox="0 0 300 25" preserveAspectRatio="none">
                    <path d="M0,12 C45,22 90,2 145,14 C205,26 260,6 300,10 L300,25 L0,25 Z"></path>
                  </svg>
                </div>
              </div>

              <!-- Card Body Content -->
              <div class="p-5 sm:p-6 pt-3 relative flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-[#862D42] bg-[#FAF0F2] px-2.5 py-0.5 rounded-full">Primary Hub</span>
                    <span class="text-xs text-[#9C928E]">· Updated weekly</span>
                  </div>
                  <h3 class="font-serif text-xl sm:text-[22px] font-normal text-[#221C1D] group-hover:text-[#862D42] transition-colors leading-snug">
                    Motherhood & Matrescence
                  </h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-2">
                    Raw reflections on postpartum identity, midnight feeds, sensory overload, and the gradual beauty of discovering who you are alongside your baby.
                  </p>

                  <!-- Topic Chips -->
                  <div class="flex flex-wrap gap-1.5 mt-3.5">
                    <a href="stories.html?tag=postpartum" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#Postpartum</a>
                    <a href="stories.html?tag=matrescence" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#Matrescence</a>
                    <a href="stories.html?tag=identity" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#Identity</a>
                  </div>

                  <!-- Featured Community Story Callout -->
                  <div class="mt-4 p-3 rounded-xl bg-[#FBF8F6] border border-[#F0E6DF]/80">
                    <div class="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-[#862D42]">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      Featured Story
                    </div>
                    <p class="font-serif text-xs sm:text-[13px] text-[#221C1D] italic mt-1 line-clamp-1">
                      "The Quiet Hours After 3 AM: Finding Peace When the House Sleeps"
                    </p>
                    <div class="flex items-center justify-between text-[11px] text-[#8C827E] mt-1.5">
                      <span>By Maya Patel</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>

                <!-- Card Bottom Row -->
                <div class="mt-5 pt-3.5 border-t border-[#F5ECE8] flex items-center justify-between">
                  <a
                    href="stories.html?category=motherhood"
                    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CAA0A8] text-[#862D42] text-xs font-semibold hover:bg-[#862D42] hover:text-white hover:border-[#862D42] transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                  >
                    <span>Explore 48 Stories</span>
                    <span class="text-sm font-normal transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                  </a>
                  <span class="text-[11px] text-[#9C928E] flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-[#CAA0A8]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    14.2k reads
                  </span>
                </div>
              </div>
            </div>

            <!-- Category 2: Parenting & Guidance -->
            <div class="rounded-[22px] overflow-hidden bg-white border border-[#F0E5DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(134,45,66,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
              <!-- Card Photo Header -->
              <div class="relative h-48 sm:h-52 overflow-hidden bg-[#FAF5F0]">
                <img
                  src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=800&q=80"
                  alt="Parenting & Guidance"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <!-- Top Badges -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#862D42] text-[11px] font-semibold shadow-sm tracking-wide">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#862D42]"></span>
                    36 Stories
                  </span>
                  <span class="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#862D42] shadow-sm">
                    <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <polygon points="12 8 8 12 12 16 16 12 12 8"/>
                    </svg>
                  </span>
                </div>
                <!-- Organic wave divider cutting bottom of image -->
                <div class="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                  <svg class="w-full h-5 sm:h-6 text-white fill-current block" viewBox="0 0 300 25" preserveAspectRatio="none">
                    <path d="M0,12 C45,22 90,2 145,14 C205,26 260,6 300,10 L300,25 L0,25 Z"></path>
                  </svg>
                </div>
              </div>

              <!-- Card Body Content -->
              <div class="p-5 sm:p-6 pt-3 relative flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-[#862D42] bg-[#FAF0F2] px-2.5 py-0.5 rounded-full">Frameworks</span>
                    <span class="text-xs text-[#9C928E]">· Evidence-informed</span>
                  </div>
                  <h3 class="font-serif text-xl sm:text-[22px] font-normal text-[#221C1D] group-hover:text-[#862D42] transition-colors leading-snug">
                    Parenting & Guidance
                  </h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-2">
                    Gentle discipline when emotions run hot, navigating public tantrums, setting firm boundaries with empathy, and raising emotionally confident kids.
                  </p>

                  <!-- Topic Chips -->
                  <div class="flex flex-wrap gap-1.5 mt-3.5">
                    <a href="stories.html?tag=gentle-parenting" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#GentleParenting</a>
                    <a href="stories.html?tag=tantrums" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#ToddlerFeelings</a>
                    <a href="stories.html?tag=boundaries" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#Boundaries</a>
                  </div>

                  <!-- Featured Community Story Callout -->
                  <div class="mt-4 p-3 rounded-xl bg-[#FBF8F6] border border-[#F0E6DF]/80">
                    <div class="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-[#862D42]">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      Featured Story
                    </div>
                    <p class="font-serif text-xs sm:text-[13px] text-[#221C1D] italic mt-1 line-clamp-1">
                      "What Happened in Our Home When I Finally Stopped Yelling"
                    </p>
                    <div class="flex items-center justify-between text-[11px] text-[#8C827E] mt-1.5">
                      <span>By David Chen</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>

                <!-- Card Bottom Row -->
                <div class="mt-5 pt-3.5 border-t border-[#F5ECE8] flex items-center justify-between">
                  <a
                    href="stories.html?category=parenting-and-guidance"
                    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CAA0A8] text-[#862D42] text-xs font-semibold hover:bg-[#862D42] hover:text-white hover:border-[#862D42] transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                  >
                    <span>Explore 36 Stories</span>
                    <span class="text-sm font-normal transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                  </a>
                  <span class="text-[11px] text-[#9C928E] flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-[#CAA0A8]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    9.8k reads
                  </span>
                </div>
              </div>
            </div>

            <!-- Category 3: Pregnancy & Birth -->
            <div class="rounded-[22px] overflow-hidden bg-white border border-[#F0E5DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(134,45,66,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
              <!-- Card Photo Header -->
              <div class="relative h-48 sm:h-52 overflow-hidden bg-[#FAF5F0]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                  alt="Pregnancy & Birth"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <!-- Top Badges -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#862D42] text-[11px] font-semibold shadow-sm tracking-wide">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#862D42]"></span>
                    29 Stories
                  </span>
                  <span class="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#862D42] shadow-sm">
                    <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                  </span>
                </div>
                <!-- Organic wave divider cutting bottom of image -->
                <div class="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                  <svg class="w-full h-5 sm:h-6 text-white fill-current block" viewBox="0 0 300 25" preserveAspectRatio="none">
                    <path d="M0,12 C45,22 90,2 145,14 C205,26 260,6 300,10 L300,25 L0,25 Z"></path>
                  </svg>
                </div>
              </div>

              <!-- Card Body Content -->
              <div class="p-5 sm:p-6 pt-3 relative flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-[#862D42] bg-[#FAF0F2] px-2.5 py-0.5 rounded-full">Journeys</span>
                    <span class="text-xs text-[#9C928E]">· Firsthand wisdom</span>
                  </div>
                  <h3 class="font-serif text-xl sm:text-[22px] font-normal text-[#221C1D] group-hover:text-[#862D42] transition-colors leading-snug">
                    Pregnancy & Birth
                  </h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-2">
                    Honest birth narratives across hospital, home, and surgical deliveries. Trimester changes, perinatal care, and preparing physically and mentally for labor.
                  </p>

                  <!-- Topic Chips -->
                  <div class="flex flex-wrap gap-1.5 mt-3.5">
                    <a href="stories.html?tag=birth-stories" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#BirthStories</a>
                    <a href="stories.html?tag=fourth-trimester" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#FourthTrimester</a>
                    <a href="stories.html?tag=healing" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#CSectionRecovery</a>
                  </div>

                  <!-- Featured Community Story Callout -->
                  <div class="mt-4 p-3 rounded-xl bg-[#FBF8F6] border border-[#F0E6DF]/80">
                    <div class="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-[#862D42]">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      Featured Story
                    </div>
                    <p class="font-serif text-xs sm:text-[13px] text-[#221C1D] italic mt-1 line-clamp-1">
                      "My Strict Birth Plan Fell Apart, and I Discovered Real Strength"
                    </p>
                    <div class="flex items-center justify-between text-[11px] text-[#8C827E] mt-1.5">
                      <span>By Dr. Aisha Rehman</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>

                <!-- Card Bottom Row -->
                <div class="mt-5 pt-3.5 border-t border-[#F5ECE8] flex items-center justify-between">
                  <a
                    href="stories.html?category=pregnancy-and-birth"
                    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CAA0A8] text-[#862D42] text-xs font-semibold hover:bg-[#862D42] hover:text-white hover:border-[#862D42] transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                  >
                    <span>Explore 29 Stories</span>
                    <span class="text-sm font-normal transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                  </a>
                  <span class="text-[11px] text-[#9C928E] flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-[#CAA0A8]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    11.5k reads
                  </span>
                </div>
              </div>
            </div>

            <!-- Category 4: Feeding & Family Living -->
            <div class="rounded-[22px] overflow-hidden bg-white border border-[#F0E5DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(134,45,66,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
              <!-- Card Photo Header -->
              <div class="relative h-48 sm:h-52 overflow-hidden bg-[#FAF5F0]">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                  alt="Feeding & Family Living"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <!-- Top Badges -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#862D42] text-[11px] font-semibold shadow-sm tracking-wide">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#862D42]"></span>
                    32 Stories
                  </span>
                  <span class="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#862D42] shadow-sm">
                    <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M12 21a9 9 0 100-18 9 9 0 000 18z"/>
                      <path d="M9 10h6"/>
                      <path d="M12 7v6"/>
                    </svg>
                  </span>
                </div>
                <!-- Organic wave divider cutting bottom of image -->
                <div class="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                  <svg class="w-full h-5 sm:h-6 text-white fill-current block" viewBox="0 0 300 25" preserveAspectRatio="none">
                    <path d="M0,12 C45,22 90,2 145,14 C205,26 260,6 300,10 L300,25 L0,25 Z"></path>
                  </svg>
                </div>
              </div>

              <!-- Card Body Content -->
              <div class="p-5 sm:p-6 pt-3 relative flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-[#862D42] bg-[#FAF0F2] px-2.5 py-0.5 rounded-full">Nourishment</span>
                    <span class="text-xs text-[#9C928E]">· Real tables</span>
                  </div>
                  <h3 class="font-serif text-xl sm:text-[22px] font-normal text-[#221C1D] group-hover:text-[#862D42] transition-colors leading-snug">
                    Feeding & Family Living
                  </h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-2">
                    Letting go of feeding guilt, baby-led weaning milestones, formula transitions, managing toddler food strikes, and creating welcoming family dinner tables.
                  </p>

                  <!-- Topic Chips -->
                  <div class="flex flex-wrap gap-1.5 mt-3.5">
                    <a href="stories.html?tag=baby-led-weaning" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#BabyLedWeaning</a>
                    <a href="stories.html?tag=fed-is-best" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#FedIsBest</a>
                    <a href="stories.html?tag=picky-eaters" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#FamilyRhythms</a>
                  </div>

                  <!-- Featured Community Story Callout -->
                  <div class="mt-4 p-3 rounded-xl bg-[#FBF8F6] border border-[#F0E6DF]/80">
                    <div class="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-[#862D42]">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      Featured Story
                    </div>
                    <p class="font-serif text-xs sm:text-[13px] text-[#221C1D] italic mt-1 line-clamp-1">
                      "Fed Is Best: How Dropping Pumping Guilt Saved My Mental Health"
                    </p>
                    <div class="flex items-center justify-between text-[11px] text-[#8C827E] mt-1.5">
                      <span>By Sarah Jenkins</span>
                      <span>3 min read</span>
                    </div>
                  </div>
                </div>

                <!-- Card Bottom Row -->
                <div class="mt-5 pt-3.5 border-t border-[#F5ECE8] flex items-center justify-between">
                  <a
                    href="stories.html?category=feeding-and-family-living"
                    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CAA0A8] text-[#862D42] text-xs font-semibold hover:bg-[#862D42] hover:text-white hover:border-[#862D42] transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                  >
                    <span>Explore 32 Stories</span>
                    <span class="text-sm font-normal transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                  </a>
                  <span class="text-[11px] text-[#9C928E] flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-[#CAA0A8]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    8.4k reads
                  </span>
                </div>
              </div>
            </div>

            <!-- Category 5: Everyday Life & Play -->
            <div class="rounded-[22px] overflow-hidden bg-white border border-[#F0E5DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(134,45,66,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
              <!-- Card Photo Header -->
              <div class="relative h-48 sm:h-52 overflow-hidden bg-[#FAF5F0]">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
                  alt="Everyday Life & Play"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <!-- Top Badges -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#862D42] text-[11px] font-semibold shadow-sm tracking-wide">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#862D42]"></span>
                    41 Stories
                  </span>
                  <span class="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#862D42] shadow-sm">
                    <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  </span>
                </div>
                <!-- Organic wave divider cutting bottom of image -->
                <div class="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                  <svg class="w-full h-5 sm:h-6 text-white fill-current block" viewBox="0 0 300 25" preserveAspectRatio="none">
                    <path d="M0,12 C45,22 90,2 145,14 C205,26 260,6 300,10 L300,25 L0,25 Z"></path>
                  </svg>
                </div>
              </div>

              <!-- Card Body Content -->
              <div class="p-5 sm:p-6 pt-3 relative flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-[#862D42] bg-[#FAF0F2] px-2.5 py-0.5 rounded-full">Joy & Play</span>
                    <span class="text-xs text-[#9C928E]">· Daily magic</span>
                  </div>
                  <h3 class="font-serif text-xl sm:text-[22px] font-normal text-[#221C1D] group-hover:text-[#862D42] transition-colors leading-snug">
                    Everyday Life & Play
                  </h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-2">
                    Finding wonder inside ordinary afternoons. Low-prep sensory bins, rainy Sunday games, sibling bonding rituals, and rediscovering play as an adult.
                  </p>

                  <!-- Topic Chips -->
                  <div class="flex flex-wrap gap-1.5 mt-3.5">
                    <a href="stories.html?tag=sensory-play" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#SensoryPlay</a>
                    <a href="stories.html?tag=rainy-days" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#RainyDays</a>
                    <a href="stories.html?tag=sibling-love" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#SiblingBonding</a>
                  </div>

                  <!-- Featured Community Story Callout -->
                  <div class="mt-4 p-3 rounded-xl bg-[#FBF8F6] border border-[#F0E6DF]/80">
                    <div class="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-[#862D42]">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      Featured Story
                    </div>
                    <p class="font-serif text-xs sm:text-[13px] text-[#221C1D] italic mt-1 line-clamp-1">
                      "The Giant Cardboard Castle That Saved Our Rainy Weekend"
                    </p>
                    <div class="flex items-center justify-between text-[11px] text-[#8C827E] mt-1.5">
                      <span>By Rohan & Priya</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>

                <!-- Card Bottom Row -->
                <div class="mt-5 pt-3.5 border-t border-[#F5ECE8] flex items-center justify-between">
                  <a
                    href="stories.html?category=everyday-life-and-play"
                    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CAA0A8] text-[#862D42] text-xs font-semibold hover:bg-[#862D42] hover:text-white hover:border-[#862D42] transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                  >
                    <span>Explore 41 Stories</span>
                    <span class="text-sm font-normal transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                  </a>
                  <span class="text-[11px] text-[#9C928E] flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-[#CAA0A8]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    13.1k reads
                  </span>
                </div>
              </div>
            </div>

            <!-- Category 6: Challenges & Growth -->
            <div class="rounded-[22px] overflow-hidden bg-white border border-[#F0E5DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(134,45,66,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
              <!-- Card Photo Header -->
              <div class="relative h-48 sm:h-52 overflow-hidden bg-[#FAF5F0]">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
                  alt="Challenges & Growth"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <!-- Top Badges -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#862D42] text-[11px] font-semibold shadow-sm tracking-wide">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#862D42]"></span>
                    25 Stories
                  </span>
                  <span class="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#862D42] shadow-sm">
                    <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </span>
                </div>
                <!-- Organic wave divider cutting bottom of image -->
                <div class="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
                  <svg class="w-full h-5 sm:h-6 text-white fill-current block" viewBox="0 0 300 25" preserveAspectRatio="none">
                    <path d="M0,12 C45,22 90,2 145,14 C205,26 260,6 300,10 L300,25 L0,25 Z"></path>
                  </svg>
                </div>
              </div>

              <!-- Card Body Content -->
              <div class="p-5 sm:p-6 pt-3 relative flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-[#862D42] bg-[#FAF0F2] px-2.5 py-0.5 rounded-full">Resilience</span>
                    <span class="text-xs text-[#9C928E]">· Safe space</span>
                  </div>
                  <h3 class="font-serif text-xl sm:text-[22px] font-normal text-[#221C1D] group-hover:text-[#862D42] transition-colors leading-snug">
                    Challenges & Growth
                  </h3>
                  <p class="font-sans text-xs sm:text-[13px] text-[#5A524F] leading-relaxed mt-2">
                    Vulnerable testimonies on parental burnout, neurodiversity diagnoses, solo parenting grit, loss, and the gradual emergence of inner resilience.
                  </p>

                  <!-- Topic Chips -->
                  <div class="flex flex-wrap gap-1.5 mt-3.5">
                    <a href="stories.html?tag=burnout" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#BurnoutRecovery</a>
                    <a href="stories.html?tag=neurodiversity" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#Neurodiversity</a>
                    <a href="stories.html?tag=solo-parent" class="text-[11px] font-medium text-[#736A66] bg-[#F8F4F1] hover:bg-[#862D42] hover:text-white px-2.5 py-0.5 rounded-md transition-colors">#InnerStrength</a>
                  </div>

                  <!-- Featured Community Story Callout -->
                  <div class="mt-4 p-3 rounded-xl bg-[#FBF8F6] border border-[#F0E6DF]/80">
                    <div class="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-[#862D42]">
                      <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      Featured Story
                    </div>
                    <p class="font-serif text-xs sm:text-[13px] text-[#221C1D] italic mt-1 line-clamp-1">
                      "Receiving Our Son's ASD Diagnosis: From Shock to Deep Advocacy"
                    </p>
                    <div class="flex items-center justify-between text-[11px] text-[#8C827E] mt-1.5">
                      <span>By Marcus Vance</span>
                      <span>7 min read</span>
                    </div>
                  </div>
                </div>

                <!-- Card Bottom Row -->
                <div class="mt-5 pt-3.5 border-t border-[#F5ECE8] flex items-center justify-between">
                  <a
                    href="stories.html?category=challenges-and-growth"
                    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CAA0A8] text-[#862D42] text-xs font-semibold hover:bg-[#862D42] hover:text-white hover:border-[#862D42] transition-all shadow-sm hover:scale-[1.02] active:scale-95 group/btn"
                  >
                    <span>Explore 25 Stories</span>
                    <span class="text-sm font-normal transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                  </a>
                  <span class="text-[11px] text-[#9C928E] flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-[#CAA0A8]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    10.9k reads
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
`;

const updatedContent = content.substring(0, startIndex) + newGridHtml + content.substring(endIndex);

fs.writeFileSync(indexPath, updatedContent, 'utf8');
console.log("Successfully updated Section 3 cards in index.html!");
