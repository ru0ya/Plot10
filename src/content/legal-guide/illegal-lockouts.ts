import { LegalTopic } from "../../types/legalTopic";

export const illegalLockouts: LegalTopic = {
  slug: "illegal-lockouts",
  title: "Illegal Lockouts",
  summary: "Changing your locks without a court order is a criminal offence in Kenya.",
  actReferences: [
    { act: "Penal Code", section: "Criminal Trespass" },
    { act: "Landlord & Tenant Act", section: "Unlawful Eviction" }
  ],
  whatThisMeans: {
    english: "It is illegal for a landlord to lock you out or remove your things by force without a specific order from a judge.",
    swahili: "Ni kinyume cha sheria kwa mwenye nyumba kukufungia nje au kutoa vitu vyako kwa nguvu bila amri maalum kutoka kwa jaji."
  },
  rights: [
    "Right to immediate re-entry",
    "Right to call police and file a report",
    "Right to claim damages for illegal lockout",
    "Landlord cannot lock out even for rent arrears without court order"
  ],
  steps: [
    "Call the police immediately and file an OB (Occurrence Book) report",
    "Contact a lawyer or legal aid",
    "Do not force entry yourself",
    "Document everything with photos and timestamps",
    "File for damages at the Rent Restriction Tribunal"
  ],
  redFlags: [
    "Locks changed while tenant is out",
    "Belongings removed or withheld",
    "Electricity or water cut to force exit",
    "Landlord threatening lockout verbally"
  ],
  alert: "This is a legal emergency. Call the police immediately and contact a lawyer. Do not attempt to force re-entry alone.",
  documentType: "illegal-lockout-notice",
  documentLabel: "Report Illegal Lockout",
  relatedSlugs: ["evictions-notice-periods", "tribunal-court-process", "maintenance-repairs"]
};
