import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  FileSearch,
  FileText,
  Files,
  Gavel,
  Landmark,
  LayoutDashboard,
  LucideIcon,
  Plug,
  Scale,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type FeatureDefinition = {
  title: string;
  href: string;
  category: string;
  summary: string;
  bullets: string[];
};

export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};

export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'matters',
    title: 'Matters',
    href: '/matters',
    category: 'Legal Operations',
    icon: Gavel,
    summary: 'Matter intake, ownership, status, deadlines, and legal work queues.',
    bullets: ['Matter intake', 'Ownership', 'Deadlines'],
    metrics: [{ label: 'Open Matters', value: '184', note: 'Active' }, { label: 'High Risk', value: '21', note: 'Need review' }, { label: 'Deadlines', value: '37', note: 'Next 14 days' }],
  },
  {
    slug: 'contracts',
    title: 'Contracts',
    href: '/contracts',
    category: 'Contract Operations',
    icon: FileText,
    summary: 'Contract repository, draft status, negotiation stage, obligations, and renewals.',
    bullets: ['Repository', 'Negotiation', 'Renewals'],
    metrics: [{ label: 'Contracts', value: '612', note: 'Tracked' }, { label: 'In Review', value: '58', note: 'Open' }, { label: 'Renewals', value: '44', note: 'Due soon' }],
  },
  {
    slug: 'clause-review',
    title: 'Clause Review',
    href: '/clause-review',
    category: 'Contract Operations',
    icon: Scale,
    summary: 'Clause extraction, risk scoring, fallback language, and negotiation playbook review.',
    bullets: ['Clause risk', 'Fallbacks', 'Playbooks'],
    metrics: [{ label: 'Clauses', value: '1.8K', note: 'Scored' }, { label: 'High Risk', value: '73', note: 'Escalated' }, { label: 'Fallbacks', value: '126', note: 'Suggested' }],
  },
  {
    slug: 'legal-intake',
    title: 'Legal Intake',
    href: '/legal-intake',
    category: 'Legal Operations',
    icon: Workflow,
    summary: 'Request intake, triage, routing, prioritization, and SLA tracking.',
    bullets: ['Request intake', 'Triage', 'SLA tracking'],
    metrics: [{ label: 'New Requests', value: '92', note: 'This week' }, { label: 'SLA Risk', value: '13', note: 'Flagged' }, { label: 'Routed', value: '71', note: 'Assigned' }],
  },
  {
    slug: 'filings',
    title: 'Filings',
    href: '/filings',
    category: 'Legal Operations',
    icon: Landmark,
    summary: 'Court, regulatory, corporate, and administrative filing deadlines and packets.',
    bullets: ['Filing calendar', 'Packets', 'Deadlines'],
    metrics: [{ label: 'Filings', value: '39', note: 'In progress' }, { label: 'Due Today', value: '7', note: 'Urgent' }, { label: 'Rejected', value: '3', note: 'Needs fix' }],
  },
  {
    slug: 'edisco',
    title: 'eDiscovery',
    href: '/edisco',
    category: 'Discovery & Evidence',
    icon: FileSearch,
    summary: 'Legal holds, collections, review batches, privilege, productions, and chain of custody.',
    bullets: ['Legal holds', 'Review batches', 'Productions'],
    metrics: [{ label: 'Holds', value: '18', note: 'Active' }, { label: 'Review Docs', value: '24K', note: 'Queued' }, { label: 'Productions', value: '6', note: 'Due soon' }],
  },
  {
    slug: 'public-records',
    title: 'Public Records',
    href: '/public-records',
    category: 'Discovery & Evidence',
    icon: Files,
    summary: 'Public records search, retrieval, tracking, and evidence packaging.',
    bullets: ['Record search', 'Retrieval', 'Evidence packages'],
    metrics: [{ label: 'Requests', value: '53', note: 'Open' }, { label: 'Received', value: '214', note: 'Documents' }, { label: 'Exceptions', value: '9', note: 'Need review' }],
  },
  {
    slug: 'compliance-controls',
    title: 'Compliance Controls',
    href: '/compliance-controls',
    category: 'Governance',
    icon: ShieldCheck,
    summary: 'Control library, evidence, testing, exceptions, and regulatory mapping.',
    bullets: ['Controls', 'Evidence', 'Testing'],
    metrics: [{ label: 'Controls', value: '286', note: 'Mapped' }, { label: 'Passing', value: '92%', note: 'Current' }, { label: 'Exceptions', value: '17', note: 'Open' }],
  },
  {
    slug: 'policy-management',
    title: 'Policy Management',
    href: '/policy-management',
    category: 'Governance',
    icon: ClipboardList,
    summary: 'Policy lifecycle, attestations, training, exceptions, and approval status.',
    bullets: ['Policies', 'Attestations', 'Training'],
    metrics: [{ label: 'Policies', value: '74', note: 'Active' }, { label: 'Attestations', value: '41', note: 'Due' }, { label: 'Training Due', value: '19', note: 'Users' }],
  },
  {
    slug: 'risk-assessments',
    title: 'Risk Assessments',
    href: '/risk-assessments',
    category: 'Governance',
    icon: Activity,
    summary: 'Legal and compliance risk assessments, scoring, mitigation, and review cadence.',
    bullets: ['Risk scoring', 'Mitigation', 'Review cadence'],
    metrics: [{ label: 'Assessments', value: '68', note: 'Active' }, { label: 'Critical', value: '8', note: 'Escalated' }, { label: 'Mitigations', value: '29', note: 'Open' }],
  },
  {
    slug: 'audit-readiness',
    title: 'Audit Readiness',
    href: '/audit-readiness',
    category: 'Governance',
    icon: ClipboardCheck,
    summary: 'Audit evidence, readiness checks, findings, remediation, and executive reporting.',
    bullets: ['Evidence', 'Findings', 'Remediation'],
    metrics: [{ label: 'Evidence Items', value: '412', note: 'Collected' }, { label: 'Findings', value: '12', note: 'Open' }, { label: 'Ready', value: '86%', note: 'Audit score' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: BarChart3,
    summary: 'Legal, compliance, matter, contract, evidence, and risk reporting.',
    bullets: ['Matter reports', 'Risk reports', 'Compliance reports'],
    metrics: [{ label: 'Dashboards', value: '28', note: 'Published' }, { label: 'Reports Due', value: '5', note: 'This week' }, { label: 'Saved Views', value: '19', note: 'Active' }],
  },
  {
    slug: "legal-transcripts",
    title: "Legal Transcripts",
    href: "/legal-transcripts",
    category: "Court Reporting Transcription",
    icon: Workflow,
    summary: "Deposition or hearing transcript intake, speaker cleanup, and review status.",
    bullets: ["Legal Transcripts queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Legal Transcripts", value: "28", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "transcript-issue-review",
    title: "Transcript Issue Review",
    href: "/transcript-issue-review",
    category: "Court Reporting Transcription",
    icon: Workflow,
    summary: "Objections, unclear segments, exhibits, and correction queue.",
    bullets: ["Transcript Issue Review queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Transcript Issue Review", value: "39", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "deposition-summary",
    title: "Deposition Summary",
    href: "/deposition-summary",
    category: "Court Reporting Transcription",
    icon: Workflow,
    summary: "Key testimony, contradictions, admissions, and attorney-ready summary.",
    bullets: ["Deposition Summary queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Deposition Summary", value: "50", note: 'Active' },
      { label: 'Review', value: "7", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Contracts, filings, evidence, policies, legal memos, and compliance artifacts.',
    bullets: ['Contracts', 'Filings', 'Evidence'],
    metrics: [{ label: 'Documents', value: '1.2K', note: 'Tracked' }, { label: 'In Review', value: '94', note: 'Open' }, { label: 'Uploaded', value: '141', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Matter, contract, filing, discovery, compliance, and audit alerts.',
    bullets: ['Deadline alerts', 'Contract alerts', 'Audit alerts'],
    metrics: [{ label: 'Unread', value: '52', note: 'Needs review' }, { label: 'Critical', value: '11', note: 'Escalated' }, { label: 'Resolved', value: '312', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'CLM, DMS, eDiscovery, GRC, filing, and records connector health.',
    bullets: ['CLM sync', 'DMS documents', 'GRC controls'],
    metrics: [{ label: 'Connectors', value: '15', note: 'Configured' }, { label: 'Warnings', value: '4', note: 'Need attention' }, { label: 'Last Sync', value: '6m', note: 'Legal data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Legal team profiles, role permissions, departments, practice groups, and coverage.',
    bullets: ['Legal teams', 'Role permissions', 'Coverage'],
    metrics: [{ label: 'Users', value: '88', note: 'Active' }, { label: 'Teams', value: '11', note: 'Configured' }, { label: 'Access Reviews', value: '6', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Legal assistant for clause review, matter triage, compliance evidence, filing packets, and discovery summaries.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '148', note: 'Last 24 hours' },
      { label: 'Drafts', value: '226', note: 'Generated' },
      { label: 'Escalations', value: '17', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for contract risk, privilege review, policy mapping, filing checks, and audit evidence review.',
    bullets: ['Scoring', 'Review automation', 'Exception detection'],
    metrics: [
      { label: 'Runs', value: '374', note: 'Last 24 hours' },
      { label: 'Signals', value: '96', note: 'New alerts' },
      { label: 'Accepted', value: '131', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({
  label: feature.title,
  href: feature.href,
  icon: feature.icon,
}));

export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({
  title: feature.title,
  href: feature.href,
  category: feature.category,
  summary: feature.summary,
  bullets: [...feature.bullets],
}));

export const featureFamilies = [
  { name: 'Legal Operations', features: ['Matters', 'Legal Intake', 'Filings'] },
  { name: 'Contract Operations', features: ['Contracts', 'Clause Review'] },
  { name: 'Discovery & Evidence', features: ['eDiscovery', 'Public Records'] },
  { name: 'Governance', features: ['Compliance Controls', 'Policy Management', 'Risk Assessments', 'Audit Readiness'] },
  { name: 'Court Reporting Transcription', features: ["Legal Transcripts","Transcript Issue Review","Deposition Summary"] },
  { name: 'Intelligence Layer', features: ['Reports'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
  { name: 'Intelligence Layer', features: ['AI Assistant', 'AI Tools'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(
  features.map((feature) => [feature.slug, toPage(feature)]),
);

export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(
  aiFeatures.map((feature) => [feature.slug, toPage(feature)]),
);

export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['AIContractLifecycleManager', 'AIContractNegotiationAssistant where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'All Features', href: '/features' },
        { label: 'Reports', href: '/reports' },
      ],
    },
  ]),
);
