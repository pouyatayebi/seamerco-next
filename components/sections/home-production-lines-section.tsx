// components/sections/home-production-lines-section.tsx

import { ExpandableCardGrid } from "@/components/shared/expandable-card-grid";
import type { MdCardGridItem } from "@/lib/content";
import { getContentPage } from "@/lib/content";

function isCardGridItem(
  item: MdCardGridItem | undefined,
): item is MdCardGridItem {
  return item !== undefined;
}

export function HomeProductionLinesSection() {
  const page = getContentPage("solutions/index.md");

  const items: MdCardGridItem[] = page?.cardGrid?.items ?? [];
  const selectedSlugs = page?.homeSection?.selectedSlugs ?? [];

  const selectedItems: MdCardGridItem[] = selectedSlugs.length
    ? selectedSlugs
        .map((slug) => items.find((item) => item.slug === slug))
        .filter(isCardGridItem)
    : items;

  return (
    <ExpandableCardGrid
      title={page?.homeSection?.title ?? page?.cardGrid?.title}
      items={selectedItems}
      detailButtonLabel="جزئیات بیشتر"
    />
  );
}