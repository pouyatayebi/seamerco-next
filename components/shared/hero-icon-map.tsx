// components/shared/hero-icon-map.tsx

import { TomatoProcessingLineIcon } from "@/components/svg/TomatoProcessingLineIcon";
import { CannedBeansLineIcon } from "@/components/svg/CannedBeansLineIcon";
import { CannedTunaLineIcon } from "@/components/svg/CannedTunaLineIcon";
import { TomatoPackagingLineIcon } from "@/components/svg/TomatoPackagingLineIcon";
import { CannedJamFruitLineIcon } from "@/components/svg/CannedJamFruitLineIcon";
import { CannedOlivePickledLineIcon } from "@/components/svg/CannedOlivePickledLineIcon";

export const heroIconMap = {
  "tomato-processing": <TomatoProcessingLineIcon className="size-6" />,
  "canned-beans": <CannedBeansLineIcon className="size-6" />,
  "canned-tuna": <CannedTunaLineIcon className="size-6" />,
  "tomato-packaging": <TomatoPackagingLineIcon className="size-6" />,
  "canned-jam-fruit": <CannedJamFruitLineIcon className="size-6" />,
  "canned-olive-pickled": <CannedOlivePickledLineIcon className="size-6" />,
} as const;

export type HeroIconKey = keyof typeof heroIconMap;