import { LegalTopic } from "../../types/legalTopic";

export const squatterInformalRights: LegalTopic = {
  slug: "squatter-informal-rights",
  title: "Squatter & Informal Rights",
  summary: "Even without a title deed or formal lease, the law gives you housing rights.",
  actReferences: [
    { act: "Constitution of Kenya 2010", section: "Article 43" },
    { act: "Land Act 2012", section: "Eviction Procedures" },
    { act: "IDP Act", section: "Prevention of Forced Displacement" }
  ],
  whatThisMeans: {
    english: "The Constitution of Kenya protects your right to adequate housing, even in informal settlements or without formal documents.",
    swahili: "Katiba ya Kenya inalinda haki yako ya makazi ya kutosha, hata katika makazi yasiyo rasmi au bila hati rasmi."
  },
  rights: [
    "Constitutional right to accessible and adequate housing",
    "Right to notice before demolition or eviction",
    "Right to compensation or alternative accommodation",
    "Community land rights under the Land Act"
  ],
  steps: [
    "Document your occupation with any available evidence",
    "Organise with community members",
    "Contact a legal aid organisation immediately if threatened",
    "Do not sign any documents under pressure",
    "Request formal notice in writing from any authority"
  ],
  redFlags: [
    "Sudden demolition notices with no prior consultation",
    "No government engagement with community",
    "Forced relocation with no alternatives offered",
    "Pressure to sign away rights"
  ],
  alert: "This is one of the most complex areas of Kenyan law. Always contact a legal aid organisation such as Kituo cha Sheria before taking any action.",
  documentType: "demolition-challenge",
  documentLabel: "Challenge Demolition",
  relatedSlugs: ["evictions-notice-periods", "tribunal-court-process", "lease-agreements"]
};
