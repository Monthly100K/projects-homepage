import { sgBusMrt } from "@/features/sg-bus-mrt/config";

const buttonClassName =
  "inline-flex min-h-12 items-center justify-center gap-5 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

const buttonVariants = {
  primary: "bg-white text-zinc-950 hover:bg-zinc-200",
  secondary:
    "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
} as const;

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export function StoreLinks() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {sgBusMrt.stores.map((store) => (
        <a
          key={store.href}
          href={store.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={store.accessibleLabel}
          className={`${buttonClassName} ${buttonVariants[store.variant]}`}
        >
          {store.label} <ExternalArrow />
        </a>
      ))}
    </div>
  );
}
