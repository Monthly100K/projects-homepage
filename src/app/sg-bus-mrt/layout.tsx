import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ProjectHeader } from "@/components/project-header";
import { siteConfig } from "@/config/site";
import { sgBusMrt } from "@/features/sg-bus-mrt/config";

export const metadata: Metadata = {
  title: {
    default: `${sgBusMrt.name} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
};

const navigation = [
  { label: "Overview", href: sgBusMrt.path },
  { label: "Privacy Policy", href: sgBusMrt.privacyPath },
] as const;

export default function SgBusMrtLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div lang={sgBusMrt.language} className="flex min-h-svh flex-col">
      <ProjectHeader projectName={sgBusMrt.name} links={navigation} />
      {children}
    </div>
  );
}
