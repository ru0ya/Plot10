import { LegalTopic } from "../../types/legalTopic";

export const maintenanceRepairs: LegalTopic = {
  slug: "maintenance-repairs",
  title: "Maintenance & Repairs",
  summary: "Your landlord is legally responsible for keeping your home habitable.",
  actReferences: [
    { act: "Common law", section: "Implied covenant of quiet enjoyment" },
    { act: "Lease agreement terms", section: "Standard Repair Clauses" }
  ],
  whatThisMeans: {
    english: "The landlord must ensure the house is safe and in good condition throughout your stay.",
    swahili: "Mwenye nyumba lazima ahakikishe kuwa nyumba ni salama na iko katika hali nzuri wakati wote wa kukaa kwako."
  },
  rights: [
    "Right to habitable premises",
    "Right to request repairs in writing",
    "Right to withhold rent in extreme uninhabitable conditions (seek legal advice first)",
    "Right to repair and deduct in some circumstances"
  ],
  steps: [
    "Document the issue with photos and date",
    "Send written repair request to landlord",
    "Give 14 days to respond",
    "Follow up in writing if ignored",
    "Seek legal advice if condition is dangerous or unlivable"
  ],
  redFlags: [
    "Ignored repair requests for structural issues",
    "Mold or persistent leaking roof",
    "No running water",
    "Broken security gates or locks",
    "Landlord dismissing safety concerns"
  ],
  documentType: "maintenance-demand",
  documentLabel: "Request Repairs",
  relatedSlugs: ["lease-agreements", "deposit-disputes", "illegal-lockouts"]
};
