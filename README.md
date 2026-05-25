# Legal Compliance Operations Suite

Wave:
- Wave 03 - Legal, Compliance, Government, and Risk

Source candidates represented:
- `AIContractLifecycleManager`
- `AIContractNegotiationAssistant`
- `AIeDiscoverySystem`
- `AICourtReportingLegalTranscription`
- `AiRegulatoryCompliance`
- `AIGDPRDataMappingPrivacyManager`
- `smallLawFirm`
- `legalForms`

This suite merges domain capabilities into one feature-first application:
- one login
- one combined dashboard
- one sidebar with all suite features
- PostgreSQL-backed feature state, entity records, documents, notifications, and audit log
- role behavior for admin, manager, and analyst users

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/legal-compliance-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:3700`

Seeded users:
- `admin@legal-compliance.local / admin123`
- `manager@legal-compliance.local / manager123`
- `analyst@legal-compliance.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/legal-compliance-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:3700 npm run smoke
```

## Completion Scope

Implemented feature groups:
- Legal Operations
- Contract Operations
- Discovery & Evidence
- Governance
- Intelligence Layer
- Core Platform

This is a Wave 03 suite created without modifying any original source project.
