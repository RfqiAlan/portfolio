"use client";

import dynamic from "next/dynamic";

const MinimalBackground = dynamic(
  () => import("@/components/shared/MinimalBackground").then((mod) => mod.MinimalBackground),
  { ssr: false, loading: () => null }
);

export function BackgroundEffects() {
  return <MinimalBackground />;
}
