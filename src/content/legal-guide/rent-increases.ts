import { LegalTopic } from "../../types/legalTopic";

export const rentIncreases: LegalTopic = {
  slug: "rent-increases",
  title: "Rent Increases",
  summary: "Your landlord cannot increase rent arbitrarily — the law sets strict rules.",
  actReferences: [
    { act: "Rent Restriction Act Cap 296", section: "Section 9" }
  ],
  whatThisMeans: {
    english: "Rent increases must follow a legal process, often requiring approval from the Rent Tribunal for many residential properties.",
    swahili: "Kuongezwa kwa kodi lazima kufuata mchakato wa kisheria, mara nyingi kuhitaji idhini kutoka kwa Mahakama ya Kodi."
  },
  rights: [
    "Landlord must apply to Rent Tribunal for controlled tenancies",
    "Right to dispute unreasonable increases",
    "Increase must be in writing with adequate notice",
    "No increases mid-lease without agreement"
  ],
  steps: [
    "Request written notice of increase",
    "Check if your tenancy is controlled under the Rent Restriction Act",
    "File objection at Rent Tribunal within 30 days",
    "Continue paying current rent while dispute is pending",
    "Keep all payment receipts"
  ],
  redFlags: [
    "Sudden verbal increase",
    "Increase mid-lease",
    "Increase framed as 'KRA tax compliance'",
    "No written notice",
    "Increase as retaliation for complaints"
  ],
  documentType: "rent-increase-objection",
  documentLabel: "Object to Rent Increase",
  relatedSlugs: ["kra-tax-landlord-obligations", "lease-agreements", "tribunal-court-process"]
};
