// app/projects/[[...slug]]/page.tsx

import { PlaceholderPage } from "@/components/shared/placeholder-page";
import { faPagesContent } from "@/content/fa/pages";

export default function ProjectsPage() {
  return (
    <PlaceholderPage
      title={faPagesContent.projects.index}
      description={faPagesContent.defaultDescription}
    />
  );
}