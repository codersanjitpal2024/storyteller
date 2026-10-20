const fs = require('fs');

let html = fs.readFileSync('about.html', 'utf8');

const heroSectionRegex = /<!-- ========================================== -->\s*<!-- HERO BANNER SECTION\s*-->\s*<!-- ========================================== -->[\s\S]*?<\/section>/;

const newBannerHtml = `<!-- ========================================== -->
    <!-- SECTION 1: HERO (100% MATCHED TO BANNER)   -->
    <!-- ========================================== -->
    <section
      id="about-hero-section"
      class="relative w-full overflow-hidden select-none p-0 m-0 bg-[#FAF4EF]"
    >
      <!-- Full-Width Banner Graphic Container -->
      <div class="relative w-full select-none">
        <img
          src="images/about-hero-banner.png"
          alt="Every parenting journey deserves a village. - WithTheMums"
          class="w-full h-auto block select-none"
        />

        <!-- Interactive Hotspot Overlays for the Banner Buttons -->
        <a
          href="#our-mission"
          class="absolute left-[7.0%] top-[75.5%] w-[12.8%] h-[11.8%] rounded-full cursor-pointer transition-all hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#67212F]"
          title="Read Our Story"
          aria-label="Read Our Story"
        ></a>
        <a
          href="stories.html"
          class="absolute left-[20.8%] top-[75.5%] w-[14.2%] h-[11.8%] rounded-full cursor-pointer transition-all hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#67212F]"
          title="Join Our Community"
          aria-label="Join Our Community"
        ></a>
      </div>
    </section>`;

if (heroSectionRegex.test(html)) {
  html = html.replace(heroSectionRegex, newBannerHtml);
  fs.writeFileSync('about.html', html, 'utf8');
  console.log('Successfully updated about.html with 100% matched hero banner!');
} else {
  console.warn('Could not match heroSectionRegex in about.html');
}
