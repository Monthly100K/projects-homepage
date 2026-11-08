import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { sgBusMrt } from "@/features/sg-bus-mrt/config";
import { privacyPolicy } from "@/features/sg-bus-mrt/content/privacy-policy";

export const metadata: Metadata = {
  title: `${privacyPolicy.title} — ${sgBusMrt.name}`,
  description:
    "How SG Bus MRT handles location, locally saved data, advertising and usage analytics, and how to contact the developer.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy content={privacyPolicy} />;
}
