// app/factory-setup/[[...slug]]/page.tsx

import { PlaceholderPage } from "@/components/shared/placeholder-page";
import { faPagesContent } from "@/content/fa/pages";

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function FactorySetupPage({ params }: PageProps) {
  const { slug } = await params;
  const key = slug?.join("/") || "index";
  const title =
    faPagesContent.factorySetup[
      key as keyof typeof faPagesContent.factorySetup
    ] ?? faPagesContent.factorySetup.index;

  return (
    <PlaceholderPage
      title={title}
      description={faPagesContent.defaultDescription}
    />
  );
}