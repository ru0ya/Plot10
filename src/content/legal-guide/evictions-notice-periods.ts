import { LegalTopic } from "../../types/legalTopic";

export const evictionsNoticePeriods: LegalTopic = {
  slug: "evictions-notice-periods",
  title: "Evictions & Notice Periods",
  summary: "A landlord cannot evict you without proper written notice and a court order.",
  actReferences: [
    { act: "Landlord & Tenant Act", section: "General Provisions" },
    { act: "Rent Restriction Act Cap 296", section: "Section 15" }
  ],
  whatThisMeans: {
    english: "Your landlord must give you a specific amount of time to leave and cannot physically throw you out without a court's permission.",
    swahili: "Mwenye nyumba lazima akupe muda maalum wa kuondoka na hawezi kukutoa kwa nguvu bila idhini ya mahakama."
  },
  rights: [
    "Right to minimum notice period (30 days for monthly tenancies)",
    "Written notice required by law",
    "Landlord must obtain court order before physical eviction",
    "Right to contest notice at the Rent Restriction Tribunal"
  ],
  steps: [
    "Request written notice if not provided",
    "Check notice period is legally sufficient",
    "File at Rent Restriction Tribunal if notice is invalid",
    "Do not vacate until court order is issued",
    "Document everything in writing"
  ],
  redFlags: [
    "Verbal eviction threats only",
    "Landlord changing locks",
    "Removing tenant belongings",
    "Cutting utilities to force exit",
    "Eviction with less than legal notice period"
  ],
  documentType: "eviction-challenge",
  documentLabel: "Challenge an Eviction",
  relatedSlugs: ["illegal-lockouts", "tribunal-court-process", "lease-agreements"]
};
