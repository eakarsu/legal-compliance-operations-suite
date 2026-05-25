export type Metric = {
  label: string;
  value: string;
  note: string;
};

export const sourceSystems = [
  {
    name: 'AIContractLifecycleManager',
    ownership: 'Contract lifecycle, clauses, obligations, approvals, and renewal workflows',
    coverage: ['Contracts', 'Obligations', 'Approvals', 'Renewals'],
  },
  {
    name: 'AIContractNegotiationAssistant',
    ownership: 'Contract negotiation, redlines, clause risk, and playbook guidance',
    coverage: ['Negotiation', 'Redlines', 'Clause risk', 'Playbooks'],
  },
  {
    name: 'AIeDiscoverySystem',
    ownership: 'eDiscovery, legal holds, evidence review, productions, and privilege workflows',
    coverage: ['Legal holds', 'Evidence', 'Privilege', 'Productions'],
  },
  {
    name: 'AiRegulatoryCompliance',
    ownership: 'Compliance controls, policy evidence, regulatory reviews, and audit readiness',
    coverage: ['Controls', 'Policies', 'Evidence', 'Audit readiness'],
  },
];

export const dashboardMetrics: Metric[] = [
  { label: 'Open Matters', value: '184', note: 'Active' },
  { label: 'Contracts', value: '612', note: 'Tracked' },
  { label: 'Clauses', value: '1.8K', note: 'Scored' },
  { label: 'New Requests', value: '92', note: 'This week' },
];

export const healthMetrics: Metric[] = [
  { label: 'High Risk', value: '21', note: 'Need review' },
  { label: 'Due Today', value: '7', note: 'Urgent' },
  { label: 'Attestations', value: '41', note: 'Due' },
  { label: 'AI Tool Runs', value: '374', note: 'Last 24 hours' },
];

export const dashboardModules = ['Matter intake and deadline risk', 'Contract review and clause risk', 'Legal holds and eDiscovery batches', 'Filing packets and deadlines', 'Compliance controls and policy evidence', 'Audit findings and remediation', 'Legal reports and AI assistant review'];

export const workflowHighlights = ['Matter intake and deadline risk', 'Contract review and clause risk', 'Legal holds and eDiscovery batches', 'Filing packets and deadlines', 'Compliance controls and policy evidence'];
