import { LegalTopic } from "../../types/legalTopic";

export const tribunalCourtProcess: LegalTopic = {
  slug: "tribunal-court-process",
  title: "Tribunal & Court Process",
  summary: "You can file a case at the Rent Restriction Tribunal without a lawyer — and it's free.",
  actReferences: [
    { act: "Rent Restriction Act Cap 296", section: "Procedures" },
    { act: "Business Premises (Rent Control) Act", section: "Tribunal Powers" }
  ],
  whatThisMeans: {
    english: "The Rent Tribunal is designed to help tenants and landlords solve problems quickly and without expensive legal fees.",
    swahili: "Mahakama ya Kodi imeundwa kusaidia wapangaji na wenye nyumba kutatua matatizo haraka na bila ada ghali za kisheria."
  },
  rights: [
    "Right to file without legal representation",
    "No filing fee for basic cases",
    "Right to a hearing date within reasonable time",
    "Right to appeal tribunal decisions"
  ],
  steps: [
    "Gather all documentation (lease, payment receipts, correspondence)",
    "Visit the Rent Restriction Tribunal offices",
    "Fill in the application form",
    "File and receive your case number",
    "Attend hearing on assigned date",
    "Bring a witness if possible"
  ],
  redFlags: [
    "Being told you need a lawyer to file",
    "Being asked for unofficial payments",
    "Hearing dates continuously postponed without reason"
  ],
  documentType: "tribunal-filing-guide",
  documentLabel: "Prepare Tribunal Filing",
  relatedSlugs: ["evictions-notice-periods", "rent-increases", "illegal-lockouts"]
};
