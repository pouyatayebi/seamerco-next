// app/machinery/[[...slug]]/page.tsx

import { PlaceholderPage } from "@/components/shared/placeholder-page";
import { faPagesContent } from "@/content/fa/pages";

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function MachineryPage({ params }: PageProps) {
  const { slug } = await params;
  const key = slug?.join("/") || "index";
  const title =
    faPagesContent.machinery[key as keyof typeof faPagesContent.machinery] ??
    faPagesContent.machinery.index;

  return (
    <PlaceholderPage
      title={title}
      description={faPagesContent.defaultDescription}
    />
  );
}