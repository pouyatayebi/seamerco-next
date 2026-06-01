// app/contact-us/page.tsx

import { PlaceholderPage } from "@/components/shared/placeholder-page";
import { faPagesContent } from "@/content/fa/pages";

export default function ContactUsPage() {
  return (
    <PlaceholderPage
      title={faPagesContent.contact.title}
      description={faPagesContent.defaultDescription}
    />
  );
}