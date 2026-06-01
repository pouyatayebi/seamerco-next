// components/shared/restore-on-back.tsx

"use client";

/**
 * Refreshes client-side interactive components after browser back/forward cache restore.
 */

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function RestoreOnBack() {
  const router = useRouter();

  useEffect(() => {
    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        router.refresh();
      }
    }

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [router]);

  return null;
}