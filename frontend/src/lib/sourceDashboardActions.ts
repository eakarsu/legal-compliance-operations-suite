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
    "id": "court-transcription-deep-workflows",
    "label": "Court Transcription Deep Workflows",
    "description": "Open deeper Court Transcription Deep Workflows workflows elevated from AICourtReportingLegalTranscription.",
    "href": "/speaker-diarization-review",
    "sourceProjects": [
      "AICourtReportingLegalTranscription"
    ],
    "examples": [
      "Speaker Diarization Review",
      "Exhibit Reference Index",
      "Errata Correction Queue",
      "Transcript Certification"
    ],
    "count": 1
  },
  {
    "id": "court-reporting-transcription",
    "label": "Court Reporting Transcription",
    "description": "Open Court Reporting Transcription workflows elevated from AICourtReportingLegalTranscription.",
    "href": "/legal-transcripts",
    "sourceProjects": [
      "AICourtReportingLegalTranscription"
    ],
    "examples": [
      "Legal Transcripts",
      "Transcript Issue Review",
      "Deposition Summary"
    ],
    "count": 1
  },
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
