import type { Metadata } from "next";
import { AppOverview } from "@/features/sg-bus-mrt/components/app-overview";
import { sgBusMrt } from "@/features/sg-bus-mrt/config";
import { overviewContent } from "@/features/sg-bus-mrt/content/overview";

export const metadata: Metadata = {
  title: sgBusMrt.name,
  description: overviewContent.metadataDescription,
};

export default function SgBusMrtPage() {
  return <AppOverview />;
}
