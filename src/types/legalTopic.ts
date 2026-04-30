export type LegalTopic = {
  slug: string;
  title: string;
  summary: string; // one-line plain language
  actReferences: { act: string; section: string }[];
  whatThisMeans: { english: string; swahili: string };
  rights: string[];
  steps: string[];
  redFlags: string[];
  alert?: string; // optional amber alert box text
  documentType: string;
  documentLabel: string;
  relatedSlugs: string[];
};
