import { Fragment } from "react";
import type {
  PolicyBlock,
  PolicyText,
  PrivacyPolicyContent,
} from "@/types/privacy-policy";

const policyLinkClassName =
  "rounded-sm text-zinc-200 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

function RichText({ value }: { value: PolicyText }) {
  if (typeof value === "string") return <>{value}</>;

  return value.map((part, index) => (
    <Fragment key={index}>
      {typeof part === "string" ? (
        part
      ) : (
        <a href={part.href} className={policyLinkClassName}>
          {part.label}
        </a>
      )}
    </Fragment>
  ));
}

function PolicyContentBlock({ block }: { block: PolicyBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p>
          <RichText value={block.text} />
        </p>
      );
    case "heading":
      return <h3 className="font-medium text-zinc-200">{block.text}</h3>;
    case "subsections":
      return (
        <div className="space-y-4">
          {block.items.map((item, index) => (
            <div key={item.id} id={item.id} className="space-y-3">
              <h3 className="font-medium text-zinc-200">
                {`${String.fromCharCode(97 + index)}. ${item.title}`}
              </h3>
              {item.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>
                  <RichText value={paragraph} />
                </p>
              ))}
            </div>
          ))}
        </div>
      );
    case "services":
      return (
        <ul className="list-disc space-y-3 pl-5 marker:text-zinc-600">
          {block.items.map((service) => (
            <li key={service.label}>
              <a href={service.href} className={policyLinkClassName}>
                {service.label}
              </a>
              {` — ${service.description}`}
            </li>
          ))}
        </ul>
      );
  }
}

export function PrivacyPolicy({ content }: { content: PrivacyPolicyContent }) {
  const updatedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(content.updatedAt));

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 pt-14 pb-20 sm:px-10 sm:pt-20">
      <div className="fade-in max-w-2xl">
        <p className="text-xs font-medium tracking-[0.18em] text-zinc-500">
          {content.eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-5 text-sm text-zinc-500">
          Last updated: <time dateTime={content.updatedAt}>{updatedDate}</time>
        </p>
        <p className="mt-6 text-base leading-8 text-zinc-400">
          <RichText value={content.introduction} />
        </p>
      </div>

      <div className="mt-12 max-w-3xl space-y-10">
        {content.sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-title`}
            className="scroll-mt-8"
          >
            <h2
              id={`${section.id}-title`}
              className="mb-4 text-lg leading-7 font-medium tracking-tight text-zinc-100"
            >
              {`${index + 1}. ${section.title}`}
            </h2>
            <div className="space-y-4 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
              {section.blocks.map((block, blockIndex) => (
                <PolicyContentBlock key={blockIndex} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
