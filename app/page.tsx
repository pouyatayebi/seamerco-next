// app/page.tsx

import { HomeAboutSection } from "@/components/sections/home-about-section";
import { HomeCtaSection } from "@/components/sections/home-cta-section";
import { HomeGuidesSection } from "@/components/sections/home-guides-section";
import { HomeLatestBlogSection } from "@/components/sections/home-latest-blog-section";
import { HomeProductionLinesSection } from "@/components/sections/home-production-lines-section";
import { HomeProjectsSection } from "@/components/sections/home-projects-section";
import { IndustrialHero } from "@/components/sections/industrial-hero";
import { faHomeHeroContent } from "@/content/fa/home/hero";

export default function HomePage() {
  return (
    <main>
      <IndustrialHero
        videoSrc={faHomeHeroContent.video.src}
        videoPoster={faHomeHeroContent.video.poster}
        yearsBadge={faHomeHeroContent.yearsBadge}
        logoType={faHomeHeroContent.logoType}
        eyebrow={faHomeHeroContent.eyebrow}
        title={faHomeHeroContent.title}
        shortcuts={faHomeHeroContent.shortcuts}
      /> 
      <HomeAboutSection /> 
       <HomeProductionLinesSection /> 
       <HomeGuidesSection />
       <HomeProjectsSection />

       <HomeLatestBlogSection />
                <HomeCtaSection />
     
       
    </main>
  );
}
