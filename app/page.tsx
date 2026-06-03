// app/page.tsx

import { HomeAboutSection } from "@/components/sections/home-about-section";
import { HomeCtaSection } from "@/components/sections/home-cta-section";
import { HomeGuidesSection } from "@/components/sections/home-guides-section";
import { HomeLatestBlogSection } from "@/components/sections/home-latest-blog-section";
import { HomeProductionLinesSection } from "@/components/sections/home-production-lines-section";
import { HomeProjectsSection } from "@/components/sections/home-projects-section";

import { Hero } from "@/components/shared/hero";
import { heroIconMap } from "@/components/shared/hero-icon-map";
import { faHomeHeroContent } from "@/content/fa/home/hero";

export default function HomePage() {
  return (
    <main>
     
<Hero
  videoSrc={faHomeHeroContent.video.src}
  videoPoster={faHomeHeroContent.video.poster}
  heroBadge={faHomeHeroContent.heroBadge}
  logoType={faHomeHeroContent.logoType}
  subtitle={faHomeHeroContent.eyebrow}
  title={faHomeHeroContent.title}
  featureLinks={{
    titleTop: faHomeHeroContent.featureLinks.titleTop,
    titleBottom: faHomeHeroContent.featureLinks.titleBottom,
    items: faHomeHeroContent.featureLinks.items.map((item) => ({
      ...item,
      icon: heroIconMap[item.icon],
    })),
  }}
  showBreadcrumbs={false}
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
