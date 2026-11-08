export type PolicyLink = {
  label: string;
  href: string;
};

export type PolicyText = string | readonly (string | PolicyLink)[];

export type PolicyBlock =
  | { type: "paragraph"; text: PolicyText }
  | { type: "heading"; text: string }
  | {
      type: "subsections";
      items: readonly {
        id: string;
        title: string;
        paragraphs: readonly PolicyText[];
      }[];
    }
  | {
      type: "services";
      items: readonly (PolicyLink & { description: string })[];
    };

export type PrivacyPolicyContent = {
  title: string;
  eyebrow: string;
  updatedAt: string;
  introduction: PolicyText;
  sections: readonly {
    id: string;
    title: string;
    blocks: readonly PolicyBlock[];
  }[];
};
