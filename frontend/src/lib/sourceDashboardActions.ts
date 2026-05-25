export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIContractLifecycleManager",
      "AIContractNegotiationAssistant",
      "AICourtReportingLegalTranscription",
      "AIDivorceFamilyLawNavigator",
      "AIRevenueRecognitionEngine",
      "AISOXAuditAutomation",
      "AISmallClaimsCourtGuide",
      "AISmartContractAuditor",
      "AISportsAgentContractAnalyzer",
      "AIeDiscoverySystem",
      "AiRegulatoryCompliance",
      "legalForms"
    ],
    "examples": [
      ".aider.chat.history",
      "backend/middleware/parseAIJson",
      "backend/routes/agenticDiscovery",
      "backend/routes/agenticNegotiate",
      "backend/routes/ai",
      "backend/routes/ai-case-evaluation"
    ],
    "count": 15
  },
  {
    "id": "customers",
    "label": "Customers",
    "description": "Open customer, client, patient, member, or lead workflows.",
    "href": "/features",
    "sourceProjects": [
      "AIDivorceFamilyLawNavigator"
    ],
    "examples": [
      "client/src/pages/GapNoCoParentingAppOrFamilyCommunicationTools"
    ],
    "count": 1
  },
  {
    "id": "source-workflows",
    "label": "Source Workflows",
    "description": "Open source-derived workflows and feature actions.",
    "href": "/features",
    "sourceProjects": [
      "AIDivorceFamilyLawNavigator"
    ],
    "examples": [
      "server/routes/gap_no_co_parenting_app_or_family_communication_tools"
    ],
    "count": 1
  }
];
