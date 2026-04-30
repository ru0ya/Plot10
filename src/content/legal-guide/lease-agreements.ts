import { LegalTopic } from "../../types/legalTopic";

export const leaseAgreements: LegalTopic = {
  slug: "lease-agreements",
  title: "Lease Agreements",
  summary: "Understand what your lease can and cannot legally require you to agree to.",
  actReferences: [
    { act: "Law of Contract Act Cap 23", section: "General Contracts" },
    { act: "Landlord & Tenant Act", section: "Tenancy Agreements" }
  ],
  whatThisMeans: {
    english: "Your lease is a legal contract, but it cannot take away your basic rights guaranteed by Kenyan law.",
    swahili: "Mkataba wako wa kukodisha ni mkataba wa kisheria, lakini hauwezi kuondoa haki zako za kimsingi zilizohakikishwa na sheria ya Kenya."
  },
  rights: [
    "Right to a copy of the signed lease",
    "Right to negotiate terms before signing",
    "Certain clauses are void by law even if you signed them",
    "Oral leases are legally valid"
  ],
  steps: [
    "Always request a written lease",
    "Read all clauses before signing",
    "Query any clause that waives your legal rights",
    "Request changes in writing",
    "Keep a signed copy safely"
  ],
  redFlags: [
    "No written lease offered",
    "Lease waiving your right to go to the Tribunal",
    "Advance rent demanded beyond 2 months",
    "Lease with automatic rent escalation clauses",
    "No inventory list attached"
  ],
  documentType: "lease-review-checklist",
  documentLabel: "Review Lease Clauses",
  relatedSlugs: ["rent-increases", "deposit-disputes", "maintenance-repairs"]
};
