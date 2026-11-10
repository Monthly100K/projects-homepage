import Image from "next/image";
import { sgBusMrt } from "@/features/sg-bus-mrt/config";
import { overviewContent } from "@/features/sg-bus-mrt/content/overview";
import { StoreLinks } from "./store-links";

function AppHero() {
  return (
    <section
      aria-labelledby="app-title"
      className="grid items-center gap-10 pt-14 pb-16 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-12 sm:pt-24 sm:pb-24"
    >
      <div className="fade-in">
        <h1
          id="app-title"
          className="text-5xl leading-tight font-semibold tracking-tighter sm:text-6xl"
        >
          {sgBusMrt.name}
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
          {overviewContent.introduction}
        </p>
        <StoreLinks />
      </div>
      <Image
        {...sgBusMrt.icon}
        loading="eager"
        className="fade-in fade-in-delay-1 order-first h-auto w-44 rounded-[2rem] sm:order-last md:w-56"
      />
    </section>
  );
}

function AppFeatures() {
  return (
    <section
      aria-label="App features"
      className="fade-in fade-in-delay-2 grid gap-10 border-t border-white/10 py-12 md:grid-cols-3 md:gap-8 md:py-16"
    >
      {overviewContent.features.map((feature, index) => (
        <div key={feature.title}>
          <p className="font-mono text-xs text-zinc-600">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-5 text-lg font-medium tracking-tight text-zinc-100">
            {feature.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}

export function AppOverview() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 sm:px-10">
      <AppHero />
      <AppFeatures />
    </main>
  );
}
