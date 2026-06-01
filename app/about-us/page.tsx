// app/about-us/page.tsx

import { PlaceholderPage } from "@/components/shared/placeholder-page";
import { faPagesContent } from "@/content/fa/pages";

export default function AboutUsPage() {
  return (
    <PlaceholderPage
      title={faPagesContent.about.title}
      description={faPagesContent.defaultDescription}
    />
  );
}