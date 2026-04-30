import { LegalTopic } from "../../types/legalTopic";

export const kraTaxLandlordObligations: LegalTopic = {
  slug: "kra-tax-landlord-obligations",
  title: "KRA Tax & Landlord Obligations",
  summary: "The KRA landlord tax is the landlord's obligation — not yours to pay.",
  actReferences: [
    { act: "Finance Act 2023", section: "MRI Tax Provisions" },
    { act: "Income Tax Act", section: "Rental Income" }
  ],
  whatThisMeans: {
    english: "Landlords are responsible for paying tax on their rental income. They cannot legally add this as an extra cost on top of your agreed rent.",
    swahili: "Wenye nyumba wanawajibika kulipa kodi kwa mapato yao ya kodi. Hawezi kisheria kuongeza hii kama gharama ya ziada juu ya kodi yako uliyokubali."
  },
  rights: [
    "Tenants are not liable for the landlord's income tax",
    "Landlord cannot legally add KRA tax as a separate charge on your rent invoice",
    "Any rent increase must follow the standard legal process regardless of the reason given"
  ],
  steps: [
    "Check your lease — does it mention tax pass-through?",
    "If landlord adds KRA tax to invoice, write a formal objection",
    "Compare new invoice to your original agreed rent",
    "Seek legal advice if landlord insists",
    "File a complaint at the Rent Restriction Tribunal if unresolved"
  ],
  redFlags: [
    "'KRA tax' appearing as a new line item on your rent invoice",
    "Sudden rent increase framed as 'tax compliance'",
    "Landlord threatening eviction for refusing to pay the tax surcharge"
  ],
  alert: "A landlord passing KRA tax costs directly to tenants may be in violation of your lease agreement and the Rent Restriction Act. Do not pay without seeking legal advice first.",
  documentType: "kra-tax-dispute",
  documentLabel: "Dispute Tax Surcharge",
  relatedSlugs: ["rent-increases", "lease-agreements", "tribunal-court-process"]
};
