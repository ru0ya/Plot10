import { LegalTopic } from "../../types/legalTopic";

export const depositDisputes: LegalTopic = {
  slug: "deposit-disputes",
  title: "Deposit Disputes",
  summary: "Your deposit must be returned — deductions require written proof.",
  actReferences: [
    { act: "Common law principles", section: "Implied Terms" },
    { act: "Contractual terms", section: "Lease Clause" }
  ],
  whatThisMeans: {
    english: "You are entitled to get your full deposit back unless the landlord can prove you caused damage beyond normal use.",
    swahili: "Una haki ya kurejeshewa kodi yako yote ya dhamana isipokuwa mwenye nyumba athibitishe kuwa ulisababisha uharibifu zaidi ya matumizi ya kawaida."
  },
  rights: [
    "Full return of deposit unless landlord proves damages",
    "Deductions must be itemised in writing",
    "Normal wear and tear cannot be deducted",
    "Deposit cannot be withheld as punishment"
  ],
  steps: [
    "Send written request for deposit return",
    "Request itemised list of any deductions",
    "Give landlord 14 days to respond",
    "Send formal demand letter",
    "File at Small Claims Court or Rent Tribunal if unresolved"
  ],
  redFlags: [
    "Landlord goes silent after move-out",
    "Partial return with no written explanation",
    "Deposit used as last month's rent without prior agreement",
    "Deductions for normal wear and tear"
  ],
  documentType: "deposit-demand",
  documentLabel: "Demand Deposit Refund",
  relatedSlugs: ["lease-agreements", "maintenance-repairs", "tribunal-court-process"]
};
