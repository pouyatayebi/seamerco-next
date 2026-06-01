// components/sections/home-guides-section.tsx

/**
 * Homepage guide section.
 * Desktop order from right to left: text, image, text, image.
 */

import { VideoGuideCard } from "@/components/shared/video-guide-card";
import { faHomeGuidesContent } from "@/content/fa/home/guides";
import { AppSection } from "../shared/app-section";

export function HomeGuidesSection() {
  const [factorySetup, manufacturing] = faHomeGuidesContent.items;

  return (
   <AppSection tone="surface">
  <div className="grid gap-8 lg:grid-cols-[1fr_15rem_1fr_15rem] lg:items-stretch lg:gap-10 [direction:rtl]">
    <VideoGuideCard
      variant="text"
      titleTop={manufacturing.titleTop}
      titleBottom={manufacturing.titleBottom}
      description={manufacturing.description}
      buttonTextTop={manufacturing.buttonTextTop}
      buttonTextBottom={manufacturing.buttonTextBottom}
      href={manufacturing.href}
    />

    <VideoGuideCard
      variant="media"
      title={`${manufacturing.titleTop} ${manufacturing.titleBottom}`}
      image={manufacturing.image}
      video={manufacturing.video}
    />

    <VideoGuideCard
      variant="text"
      titleTop={factorySetup.titleTop}
      titleBottom={factorySetup.titleBottom}
      description={factorySetup.description}
      buttonTextTop={factorySetup.buttonTextTop}
      buttonTextBottom={factorySetup.buttonTextBottom}
      href={factorySetup.href}
    />

    <VideoGuideCard
      variant="media"
      title={`${factorySetup.titleTop} ${factorySetup.titleBottom}`}
      image={factorySetup.image}
      video={factorySetup.video}
    />
  </div>
</AppSection>
  );
}