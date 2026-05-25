export type EntityRecord = {
  id: string;
  name: string;
  status: string;
  owner: string;
  amount?: string;
  dueDate?: string;
  priority?: string;
};

export type FeatureEntitySet = {
  title: string;
  columns: string[];
  rows: EntityRecord[];
};

const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];

const entitySeeds = [
  ['matters', 'Matters Records', 'Matters priority queue', 'Open', 'Matters exception list', 'Legal Operations Lead', '$0'],
  ['contracts', 'Contracts Records', 'Contracts priority queue', 'Review', 'Contracts exception list', 'Contract Operations Lead', '$0'],
  ['clause-review', 'Clause Review Records', 'Clause Review priority queue', 'Action needed', 'Clause Review exception list', 'Contract Operations Lead', '$0'],
  ['legal-intake', 'Legal Intake Records', 'Legal Intake priority queue', 'Open', 'Legal Intake exception list', 'Legal Operations Lead', '$0'],
  ['filings', 'Filings Records', 'Filings priority queue', 'Review', 'Filings exception list', 'Legal Operations Lead', '$0'],
  ['edisco', 'eDiscovery Records', 'eDiscovery priority queue', 'Action needed', 'eDiscovery exception list', 'Discovery & Evidence Lead', '$0'],
  ['public-records', 'Public Records Records', 'Public Records priority queue', 'Open', 'Public Records exception list', 'Discovery & Evidence Lead', '$0'],
  ['compliance-controls', 'Compliance Controls Records', 'Compliance Controls priority queue', 'Review', 'Compliance Controls exception list', 'Governance Lead', '$0'],
  ['policy-management', 'Policy Management Records', 'Policy Management priority queue', 'Action needed', 'Policy Management exception list', 'Governance Lead', '$0'],
  ['risk-assessments', 'Risk Assessments Records', 'Risk Assessments priority queue', 'Open', 'Risk Assessments exception list', 'Governance Lead', '$0'],
  ['audit-readiness', 'Audit Readiness Records', 'Audit Readiness priority queue', 'Review', 'Audit Readiness exception list', 'Governance Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(
  slug: string,
  title: string,
  firstName: string,
  firstStatus: string,
  secondName: string,
  owner: string,
  amount: string,
): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(
  entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [
    slug,
    buildSet(slug, title, firstName, firstStatus, secondName, owner, amount),
  ]),
);
