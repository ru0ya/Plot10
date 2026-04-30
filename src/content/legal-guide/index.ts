import { evictionsNoticePeriods } from "./evictions-notice-periods";
import { rentIncreases } from "./rent-increases";
import { depositDisputes } from "./deposit-disputes";
import { maintenanceRepairs } from "./maintenance-repairs";
import { illegalLockouts } from "./illegal-lockouts";
import { leaseAgreements } from "./lease-agreements";
import { tribunalCourtProcess } from "./tribunal-court-process";
import { squatterInformalRights } from "./squatter-informal-rights";
import { kraTaxLandlordObligations } from "./kra-tax-landlord-obligations";
import { LegalTopic } from "../../types/legalTopic";

export const legalTopics: Record<string, LegalTopic> = {
  "evictions-notice-periods": evictionsNoticePeriods,
  "rent-increases": rentIncreases,
  "deposit-disputes": depositDisputes,
  "maintenance-repairs": maintenanceRepairs,
  "illegal-lockouts": illegalLockouts,
  "lease-agreements": leaseAgreements,
  "tribunal-court-process": tribunalCourtProcess,
  "squatter-informal-rights": squatterInformalRights,
  "kra-tax-landlord-obligations": kraTaxLandlordObligations,
};

export const getAllTopicSlugs = () => Object.keys(legalTopics);
export const getTopicBySlug = (slug: string) => legalTopics[slug];
