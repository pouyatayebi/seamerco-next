// app/solutions/[[...slug]]/page.tsx

import { PlaceholderPage } from "@/components/shared/placeholder-page";
import { faPagesContent } from "@/content/fa/pages";

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function SolutionsPage({ params }: PageProps) {
  const { slug } = await params;
  const key = slug?.join("/") || "index";
  const title =
    faPagesContent.solutions[key as keyof typeof faPagesContent.solutions] ??
    faPagesContent.solutions.index;

  return (
    <PlaceholderPage
      title={title}
      description={faPagesContent.defaultDescription}
    />
  );
}