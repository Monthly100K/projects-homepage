import Link from "next/link";
import { siteConfig } from "@/config/site";
import { sgBusMrt } from "@/features/sg-bus-mrt/config";

export default function Home() {
  return (
    <main className="flex min-h-svh items-center justify-center px-6 py-16">
      <div className="w-full max-w-6xl text-center">
        <h1 className="fade-in text-[clamp(2.5rem,11vw,9rem)] leading-none font-bold tracking-tighter">
          {siteConfig.name}
        </h1>
        <p className="fade-in fade-in-delay-1 mx-auto mt-5 max-w-xl text-sm leading-relaxed text-balance tracking-wide text-zinc-400 sm:text-lg md:text-xl">
          {siteConfig.tagline}
        </p>
        <div className="fade-in fade-in-delay-2 mx-auto mt-10 w-full max-w-xl sm:mt-12">
          <hr className="border-0 border-t border-white/15" />
          <Link
            href={sgBusMrt.path}
            className="mt-6 inline-block rounded-sm text-sm font-medium tracking-wide text-white underline underline-offset-4 transition-colors hover:text-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white"
          >
            {sgBusMrt.homeLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
