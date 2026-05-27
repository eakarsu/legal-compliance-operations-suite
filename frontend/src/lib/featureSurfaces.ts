export type FeatureSurfaceRow = {
  id: string;
  item: string;
  status: string;
  owner: string;
  nextStep: string;
};

export type FeatureSurface = {
  workItems: FeatureSurfaceRow[];
  quickActions: string[];
  controlChecks: Array<{ id: string; label: string; done: boolean }>;
  activityLog: Array<{ id: string; message: string; at: string }>;
};

const featureSeeds = [
  ['matters', 'Matters', 'Matters operating queue', 'Legal Operations Lead', 'Review and assign next action'],
  ['contracts', 'Contracts', 'Contracts operating queue', 'Contract Operations Lead', 'Review and assign next action'],
  ['clause-review', 'Clause Review', 'Clause Review operating queue', 'Contract Operations Lead', 'Review and assign next action'],
  ['legal-intake', 'Legal Intake', 'Legal Intake operating queue', 'Legal Operations Lead', 'Review and assign next action'],
  ['filings', 'Filings', 'Filings operating queue', 'Legal Operations Lead', 'Review and assign next action'],
  ['edisco', 'eDiscovery', 'eDiscovery operating queue', 'Discovery & Evidence Lead', 'Review and assign next action'],
  ['public-records', 'Public Records', 'Public Records operating queue', 'Discovery & Evidence Lead', 'Review and assign next action'],
  ['compliance-controls', 'Compliance Controls', 'Compliance Controls operating queue', 'Governance Lead', 'Review and assign next action'],
  ['policy-management', 'Policy Management', 'Policy Management operating queue', 'Governance Lead', 'Review and assign next action'],
  ['risk-assessments', 'Risk Assessments', 'Risk Assessments operating queue', 'Governance Lead', 'Review and assign next action'],
  ['audit-readiness', 'Audit Readiness', 'Audit Readiness operating queue', 'Governance Lead', 'Review and assign next action'],
  ['reports', 'Reports', 'Reports operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ["legal-transcripts","Legal Transcripts","Legal Transcripts review queue","Court Reporting Transcription","Review source context and assign owner"],
  ["transcript-issue-review","Transcript Issue Review","Transcript Issue Review review queue","Court Reporting Transcription","Confirm next action and update evidence"],
  ["deposition-summary","Deposition Summary","Deposition Summary review queue","Court Reporting Transcription","Confirm next action and update evidence"],
  ["speaker-diarization-review","Speaker Diarization Review","Speaker Diarization Review workspace","Court Transcription Deep Workflows","Review source evidence and assign owner"],
  ["exhibit-reference-index","Exhibit Reference Index","Exhibit Reference Index workspace","Court Transcription Deep Workflows","Confirm findings, next action, and audit evidence"],
  ["errata-correction-queue","Errata Correction Queue","Errata Correction Queue workspace","Court Transcription Deep Workflows","Confirm findings, next action, and audit evidence"],
  ["transcript-certification","Transcript Certification","Transcript Certification workspace","Court Transcription Deep Workflows","Confirm findings, next action, and audit evidence"],
  ['documents', 'Documents', 'Documents operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['notifications', 'Notifications', 'Notifications operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['integrations', 'Integrations', 'Integrations operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['profiles', 'Profiles', 'Profiles operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['ai-assistant', 'AI Assistant', 'AI Assistant operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['ai-tools', 'AI Tools', 'AI Tools operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
] as const;

function buildSurface(slug: string, title: string, item: string, owner: string, nextStep: string): FeatureSurface {
  return {
    workItems: [
      { id: `${slug}-1`, item, status: 'Open', owner, nextStep },
      { id: `${slug}-2`, item: `${title} exception review`, status: 'Review', owner: 'Operations', nextStep: 'Investigate exception and assign owner' },
      { id: `${slug}-3`, item: `${title} weekly operating queue`, status: 'Queued', owner: 'Team Lead', nextStep: 'Prioritize next actions' },
    ],
    quickActions: [`Create ${title} record`, `Export ${title} list`, `Review ${title} exceptions`],
    controlChecks: [
      { id: `${slug}-check-1`, label: `${title} owner assigned`, done: true },
      { id: `${slug}-check-2`, label: `${title} next step documented`, done: false },
      { id: `${slug}-check-3`, label: `${title} audit trail current`, done: true },
    ],
    activityLog: [
      { id: `${slug}-log-1`, message: `${title} queue refreshed`, at: '2026-05-24 09:00' },
      { id: `${slug}-log-2`, message: `${title} exception assigned`, at: '2026-05-24 11:30' },
    ],
  };
}

export const featureSurfaceBySlug: Record<string, FeatureSurface> = Object.fromEntries(
  featureSeeds.map(([slug, title, item, owner, nextStep]) => [
    slug,
    buildSurface(slug, title, item, owner, nextStep),
  ]),
);

export const featureSurfaces: Record<string, FeatureSurface> = Object.fromEntries(
  featureSeeds.map(([slug, title]) => [title, featureSurfaceBySlug[slug]]),
);
