// app/events/[[...slug]]/page.tsx

import { PlaceholderPage } from "@/components/shared/placeholder-page";
import { faPagesContent } from "@/content/fa/pages";

export default function EventsPage() {
  return (
    <PlaceholderPage
      title={faPagesContent.events.index}
      description={faPagesContent.defaultDescription}
    />
  );
}