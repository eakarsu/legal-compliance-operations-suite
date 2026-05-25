# Legal Compliance Operations Merge Plan

Objective:
- Merge source capabilities into one application with one login, one sidebar, one dashboard, and feature-first navigation.

Source candidates:
- `AIContractLifecycleManager`
- `AIContractNegotiationAssistant`
- `AIeDiscoverySystem`
- `AICourtReportingLegalTranscription`
- `AiRegulatoryCompliance`
- `AIGDPRDataMappingPrivacyManager`
- `smallLawFirm`
- `legalForms`

Merged product model:
- Legal Operations
- Contract Operations
- Discovery & Evidence
- Governance
- Intelligence Layer
- Core Platform

Implementation pattern:
- Next.js frontend
- PostgreSQL persistence
- seeded role-based users
- protected routes
- smoke test coverage

Source-project rule:
- source projects are read-only inputs
- no source project folder is modified
