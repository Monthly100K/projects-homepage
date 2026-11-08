import Link from "next/link";
import { siteConfig } from "@/config/site";

type ProjectHeaderProps = {
  projectName: string;
  links: readonly { label: string; href: string }[];
};

const navLinkClassName =
  "rounded-sm text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-white";

export function ProjectHeader({ projectName, links }: ProjectHeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-5 border-b border-white/10 px-6 py-7 sm:px-10">
      <Link
        href={siteConfig.homePath}
        className="rounded-sm text-sm font-semibold tracking-tight transition-colors hover:text-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-white"
      >
        {siteConfig.name}
      </Link>
      <nav aria-label={projectName} className="flex items-center gap-5 sm:gap-7">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={navLinkClassName}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
