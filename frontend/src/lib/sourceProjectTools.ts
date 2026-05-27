export const sourceProjectTools = [
  {
    "id": "court-transcription-deep-workflows-copilot",
    "title": "Court Transcription Deep Workflows Copilot",
    "category": "Court Transcription Deep Workflows",
    "description": "Deep source-derived AI tool for Court Transcription Deep Workflows inside the current merged suite.",
    "defaultPrompt": "Review the Court Transcription Deep Workflows context. Return a professional summary, evidence table, risks, missing information, recommended actions, owner assignments, and audit-ready output.",
    "inputLabel": "Court Transcription Deep Workflows context",
    "outputLabel": "Court Transcription Deep Workflows AI response",
    "signals": [
      "Speaker Diarization Review",
      "Exhibit Reference Index",
      "Errata Correction Queue",
      "Transcript Certification"
    ]
  },
  {
    "id": "court-reporting-transcription-copilot",
    "title": "Court Reporting Transcription Copilot",
    "category": "Court Reporting Transcription",
    "description": "Focused Court Reporting Transcription AI tool elevated inside the current merged suite.",
    "defaultPrompt": "Review the Court Reporting Transcription context. Return a professional summary, risks, missing evidence, next actions, and audit-ready outputs.",
    "inputLabel": "Court Reporting Transcription context",
    "outputLabel": "Court Reporting Transcription AI response",
    "signals": [
      "Legal Transcripts",
      "Transcript Issue Review",
      "Deposition Summary"
    ]
  },
  {
    "id": "ai-contract-lifecycle-manager-source-workflow",
    "title": "AI Contract Lifecycle Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIContractLifecycleManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIContractLifecycleManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Contract Lifecycle Manager source context",
    "outputLabel": "AI Contract Lifecycle Manager source analysis",
    "signals": [
      "frontend/src/pages/AIAdvancedPage",
      "frontend/src/pages/AIChatPage",
      "frontend/src/pages/AICustomToolsPage",
      "frontend/src/pages/CfAgenticContractNegotiation",
      "backend/services/aiHelper",
      "backend/routes/agenticNegotiate",
      "backend/routes/ai",
      "backend/routes/aiCustom"
    ]
  },
  {
    "id": "ai-contract-lifecycle-manager-ai-tools",
    "title": "AI Contract Lifecycle Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIContractLifecycleManager.",
    "defaultPrompt": "Review AIContractLifecycleManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Contract Lifecycle Manager AI prompt or tool context",
    "outputLabel": "AI Contract Lifecycle Manager AI tool response",
    "signals": [
      "frontend/src/pages/AIAdvancedPage.js",
      "frontend/src/pages/AIChatPage.js",
      "frontend/src/pages/AICustomToolsPage.js",
      "frontend/src/pages/CfAgenticContractNegotiation.js",
      "backend/services/aiHelper.js",
      "backend/routes/agenticNegotiate.js",
      "backend/routes/ai.js",
      "backend/routes/aiCustom.js"
    ]
  },
  {
    "id": "ai-contract-lifecycle-manager-ai-advanced-page-f2qrqs-exact-ai",
    "title": "AI Contract Lifecycle Manager: AI Advanced Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAdvancedPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Advanced Page\" from AIContractLifecycleManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Advanced Page donor inputs",
    "outputLabel": "AI Advanced Page AI response",
    "signals": [
      "frontend/src/pages/AIAdvancedPage.js"
    ]
  },
  {
    "id": "ai-contract-lifecycle-manager-ai-chat-page-96sg50-exact-ai",
    "title": "AI Contract Lifecycle Manager: AI Chat Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIChatPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Chat Page\" from AIContractLifecycleManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Chat Page donor inputs",
    "outputLabel": "AI Chat Page AI response",
    "signals": [
      "frontend/src/pages/AIChatPage.js"
    ]
  },
  {
    "id": "ai-contract-lifecycle-manager-ai-custom-tools-page-1oyd4w-exact-ai",
    "title": "AI Contract Lifecycle Manager: AI Custom Tools Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AICustomToolsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Custom Tools Page\" from AIContractLifecycleManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Custom Tools Page donor inputs",
    "outputLabel": "AI Custom Tools Page AI response",
    "signals": [
      "frontend/src/pages/AICustomToolsPage.js"
    ]
  },
  {
    "id": "ai-contract-lifecycle-manager-cf-agentic-contract-negotiation-1pio3j-exact-ai",
    "title": "AI Contract Lifecycle Manager: Cf Agentic Contract Negotiation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfAgenticContractNegotiation.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Agentic Contract Negotiation\" from AIContractLifecycleManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Agentic Contract Negotiation donor inputs",
    "outputLabel": "Cf Agentic Contract Negotiation AI response",
    "signals": [
      "frontend/src/pages/CfAgenticContractNegotiation.js"
    ]
  },
  {
    "id": "ai-contract-lifecycle-manager-agentic-negotiate-19vf1d-exact-ai",
    "title": "AI Contract Lifecycle Manager: Agentic Negotiate",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/agenticNegotiate.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Negotiate\" from AIContractLifecycleManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Negotiate donor inputs",
    "outputLabel": "Agentic Negotiate AI response",
    "signals": [
      "backend/routes/agenticNegotiate.js"
    ]
  },
  {
    "id": "ai-contract-lifecycle-manager-ai-5cuwes-exact-ai",
    "title": "AI Contract Lifecycle Manager: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIContractLifecycleManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Audience",
      "Clause Type",
      "Context",
      "Contract A",
      "Contract B",
      "Contract Text",
      "Contract Type",
      "Contract Value"
    ]
  },
  {
    "id": "ai-contract-lifecycle-manager-ai-custom-1xv56e-exact-ai",
    "title": "AI Contract Lifecycle Manager: AI Custom",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiCustom.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Custom\" from AIContractLifecycleManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Custom donor inputs",
    "outputLabel": "AI Custom AI response",
    "signals": [
      "Amendment Id",
      "Amendment Text",
      "Clause Type",
      "Contract Id",
      "Contract Type",
      "Counterparty Profile",
      "Industry",
      "Jurisdiction"
    ]
  },
  {
    "id": "ai-contract-lifecycle-manager-ai-new-7q6oy0-exact-ai",
    "title": "AI Contract Lifecycle Manager: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIContractLifecycleManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Contract Id",
      "Contract Text"
    ]
  },
  {
    "id": "ai-contract-lifecycle-manager-discovery-agents-1a1svb-exact-ai",
    "title": "AI Contract Lifecycle Manager: Discovery Agents",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/discoveryAgents.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Discovery Agents\" from AIContractLifecycleManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Discovery Agents donor inputs",
    "outputLabel": "Discovery Agents AI response",
    "signals": [
      "Case Description",
      "Document Text"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-source-workflow",
    "title": "AI Contract Negotiation Assistant Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIContractNegotiationAssistant.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIContractNegotiationAssistant to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Contract Negotiation Assistant source context",
    "outputLabel": "AI Contract Negotiation Assistant source analysis",
    "signals": [
      "frontend/tailwind.config",
      "frontend/src/main",
      "frontend/src/pages/AIChat",
      "frontend/src/pages/AICustomTools",
      "frontend/src/pages/AnalyticsDetail",
      "frontend/src/pages/ApprovalDetail",
      "frontend/src/pages/CfAgenticNegotiationModeling",
      "frontend/src/pages/CfBenchmarkingAgainstMarket"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-ai-tools",
    "title": "AI Contract Negotiation Assistant AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIContractNegotiationAssistant.",
    "defaultPrompt": "Review AIContractNegotiationAssistant AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Contract Negotiation Assistant AI prompt or tool context",
    "outputLabel": "AI Contract Negotiation Assistant AI tool response",
    "signals": [
      "frontend/tailwind.config.js",
      "frontend/src/main.tsx",
      "frontend/src/pages/AIChat.tsx",
      "frontend/src/pages/AICustomTools.tsx",
      "frontend/src/pages/AnalyticsDetail.tsx",
      "frontend/src/pages/ApprovalDetail.tsx",
      "frontend/src/pages/CfAgenticNegotiationModeling.tsx",
      "frontend/src/pages/CfBenchmarkingAgainstMarket.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-ai-chat-uduhmp-exact-ai",
    "title": "AI Contract Negotiation Assistant: AI Chat",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIChat.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Chat\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Chat donor inputs",
    "outputLabel": "AI Chat AI response",
    "signals": [
      "frontend/src/pages/AIChat.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-ai-custom-tools-11qs3x-exact-ai",
    "title": "AI Contract Negotiation Assistant: AI Custom Tools",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AICustomTools.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Custom Tools\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Custom Tools donor inputs",
    "outputLabel": "AI Custom Tools AI response",
    "signals": [
      "frontend/src/pages/AICustomTools.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-analytics-detail-17qgpg-exact-ai",
    "title": "AI Contract Negotiation Assistant: Analytics Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AnalyticsDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Analytics Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Analytics Detail donor inputs",
    "outputLabel": "Analytics Detail AI response",
    "signals": [
      "frontend/src/pages/AnalyticsDetail.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-cf-agentic-negotiation-modeling-1dl3ej-exact-ai",
    "title": "AI Contract Negotiation Assistant: Cf Agentic Negotiation Modeling",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfAgenticNegotiationModeling.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Agentic Negotiation Modeling\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Agentic Negotiation Modeling donor inputs",
    "outputLabel": "Cf Agentic Negotiation Modeling AI response",
    "signals": [
      "frontend/src/pages/CfAgenticNegotiationModeling.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-cf-benchmarking-against-market-w4y92-exact-ai",
    "title": "AI Contract Negotiation Assistant: Cf Benchmarking Against Market",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfBenchmarkingAgainstMarket.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Benchmarking Against Market\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Benchmarking Against Market donor inputs",
    "outputLabel": "Cf Benchmarking Against Market AI response",
    "signals": [
      "frontend/src/pages/CfBenchmarkingAgainstMarket.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-clause-detail-17uh91-exact-ai",
    "title": "AI Contract Negotiation Assistant: Clause Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ClauseDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Clause Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Clause Detail donor inputs",
    "outputLabel": "Clause Detail AI response",
    "signals": [
      "frontend/src/pages/ClauseDetail.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-compliance-audit-agents-d6dlpp-exact-ai",
    "title": "AI Contract Negotiation Assistant: Compliance Audit Agents",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ComplianceAuditAgents.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Compliance Audit Agents\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Compliance Audit Agents donor inputs",
    "outputLabel": "Compliance Audit Agents AI response",
    "signals": [
      "frontend/src/pages/ComplianceAuditAgents.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-compliance-detail-35he2j-exact-ai",
    "title": "AI Contract Negotiation Assistant: Compliance Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ComplianceDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Compliance Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Compliance Detail donor inputs",
    "outputLabel": "Compliance Detail AI response",
    "signals": [
      "frontend/src/pages/ComplianceDetail.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-contract-detail-wy0b1w-exact-ai",
    "title": "AI Contract Negotiation Assistant: Contract Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ContractDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Contract Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Contract Detail donor inputs",
    "outputLabel": "Contract Detail AI response",
    "signals": [
      "frontend/src/pages/ContractDetail.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-deadline-detail-8k5kwc-exact-ai",
    "title": "AI Contract Negotiation Assistant: Deadline Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/DeadlineDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Deadline Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Deadline Detail donor inputs",
    "outputLabel": "Deadline Detail AI response",
    "signals": [
      "frontend/src/pages/DeadlineDetail.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-gap-all-specialized-analyzers-leaseanalyzer-plainlanguagetransla-ja0x0h-exact-ai",
    "title": "AI Contract Negotiation Assistant: Gap All Specialized Analyzers Leaseanalyzer Plainlanguagetransla",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAllSpecializedAnalyzersLeaseanalyzerPlainlanguagetransla.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap All Specialized Analyzers Leaseanalyzer Plainlanguagetransla\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap All Specialized Analyzers Leaseanalyzer Plainlanguagetransla donor inputs",
    "outputLabel": "Gap All Specialized Analyzers Leaseanalyzer Plainlanguagetransla AI response",
    "signals": [
      "frontend/src/pages/GapAllSpecializedAnalyzersLeaseanalyzerPlainlanguagetransla.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-lease-analyzer-detail-11nhln-exact-ai",
    "title": "AI Contract Negotiation Assistant: Lease Analyzer Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/LeaseAnalyzerDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Lease Analyzer Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Lease Analyzer Detail donor inputs",
    "outputLabel": "Lease Analyzer Detail AI response",
    "signals": [
      "Title"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-nda-generator-detail-2tbxa6-exact-ai",
    "title": "AI Contract Negotiation Assistant: NDA Generator Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NDAGeneratorDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"NDA Generator Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "NDA Generator Detail donor inputs",
    "outputLabel": "NDA Generator Detail AI response",
    "signals": [
      "Content",
      "Status",
      "Title"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-negotiation-detail-1wd8nd-exact-ai",
    "title": "AI Contract Negotiation Assistant: Negotiation Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NegotiationDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Negotiation Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Negotiation Detail donor inputs",
    "outputLabel": "Negotiation Detail AI response",
    "signals": [
      "Counter Proposal",
      "Notes",
      "Proposed Changes"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-party-detail-7q5n8o-exact-ai",
    "title": "AI Contract Negotiation Assistant: Party Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/PartyDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Party Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Party Detail donor inputs",
    "outputLabel": "Party Detail AI response",
    "signals": [
      "frontend/src/pages/PartyDetail.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-plain-language-translator-1u0g9p-exact-ai",
    "title": "AI Contract Negotiation Assistant: Plain Language Translator",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/PlainLanguageTranslator.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Plain Language Translator\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Plain Language Translator donor inputs",
    "outputLabel": "Plain Language Translator AI response",
    "signals": [
      "Original Text",
      "Title"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-plain-language-translator-detail-x24e40-exact-ai",
    "title": "AI Contract Negotiation Assistant: Plain Language Translator Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/PlainLanguageTranslatorDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Plain Language Translator Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Plain Language Translator Detail donor inputs",
    "outputLabel": "Plain Language Translator Detail AI response",
    "signals": [
      "Title"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-precedent-finder-detail-1masbz-exact-ai",
    "title": "AI Contract Negotiation Assistant: Precedent Finder Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/PrecedentFinderDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Precedent Finder Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Precedent Finder Detail donor inputs",
    "outputLabel": "Precedent Finder Detail AI response",
    "signals": [
      "Query"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-redline-detail-1wgvu6-exact-ai",
    "title": "AI Contract Negotiation Assistant: Redline Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/RedlineDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Redline Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Redline Detail donor inputs",
    "outputLabel": "Redline Detail AI response",
    "signals": [
      "frontend/src/pages/RedlineDetail.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-risk-clause-highlighter-detail-518otr-exact-ai",
    "title": "AI Contract Negotiation Assistant: Risk Clause Highlighter Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/RiskClauseHighlighterDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Risk Clause Highlighter Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Risk Clause Highlighter Detail donor inputs",
    "outputLabel": "Risk Clause Highlighter Detail AI response",
    "signals": [
      "Content",
      "Title"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-risk-detail-14nizy-exact-ai",
    "title": "AI Contract Negotiation Assistant: Risk Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/RiskDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Risk Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Risk Detail donor inputs",
    "outputLabel": "Risk Detail AI response",
    "signals": [
      "frontend/src/pages/RiskDetail.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-standard-terms-comparer-detail-xkqaut-exact-ai",
    "title": "AI Contract Negotiation Assistant: Standard Terms Comparer Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/StandardTermsComparerDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Standard Terms Comparer Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Standard Terms Comparer Detail donor inputs",
    "outputLabel": "Standard Terms Comparer Detail AI response",
    "signals": [
      "Title"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-template-detail-wlzhhy-exact-ai",
    "title": "AI Contract Negotiation Assistant: Template Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/TemplateDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Template Detail\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Template Detail donor inputs",
    "outputLabel": "Template Detail AI response",
    "signals": [
      "frontend/src/pages/TemplateDetail.tsx"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-agentic-modeling-s3tsjx-exact-ai",
    "title": "AI Contract Negotiation Assistant: Agentic Modeling",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/agenticModeling.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Modeling\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Modeling donor inputs",
    "outputLabel": "Agentic Modeling AI response",
    "signals": [
      "backend/src/routes/agenticModeling.js"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-ai-custom-12wqqq-exact-ai",
    "title": "AI Contract Negotiation Assistant: AI Custom",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/aiCustom.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Custom\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Custom donor inputs",
    "outputLabel": "AI Custom AI response",
    "signals": [
      "Additional Clauses",
      "Contract Id",
      "Contract Type",
      "Counterparty Persona",
      "Duration",
      "Industry",
      "Jurisdiction",
      "Our Position"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-ai-new-46ven9-exact-ai",
    "title": "AI Contract Negotiation Assistant: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Clauses",
      "Contract Terms",
      "Contract Text",
      "Contract Type",
      "Counterparty Profile",
      "Counterparty Redline",
      "Dispute Details",
      "Industry"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-compliance-audit-agents-re22nf-exact-ai",
    "title": "AI Contract Negotiation Assistant: Compliance Audit Agents",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/complianceAuditAgents.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Compliance Audit Agents\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Compliance Audit Agents donor inputs",
    "outputLabel": "Compliance Audit Agents AI response",
    "signals": [
      "Control",
      "Current State",
      "Findings",
      "Framework",
      "Requirement",
      "Scope",
      "Timeline"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-gap-all-specialized-analyzers-leaseanalyzer-plainlanguagetransla-n5bryw-exact-ai",
    "title": "AI Contract Negotiation Assistant: Gap All Specialized Analyzers Leaseanalyzer Plainlanguagetransla",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap_all_specialized_analyzers_leaseanalyzer_plainlanguagetransla.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap All Specialized Analyzers Leaseanalyzer Plainlanguagetransla\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap All Specialized Analyzers Leaseanalyzer Plainlanguagetransla donor inputs",
    "outputLabel": "Gap All Specialized Analyzers Leaseanalyzer Plainlanguagetransla AI response",
    "signals": [
      "backend/src/routes/gap_all_specialized_analyzers_leaseanalyzer_plainlanguagetransla.js"
    ]
  },
  {
    "id": "ai-contract-negotiation-assistant-plain-language-translator-7yl10n-exact-ai",
    "title": "AI Contract Negotiation Assistant: Plain Language Translator",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/plainLanguageTranslator.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Plain Language Translator\" from AIContractNegotiationAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Plain Language Translator donor inputs",
    "outputLabel": "Plain Language Translator AI response",
    "signals": [
      "Original Text",
      "Title"
    ]
  },
  {
    "id": "ai-court-reporting-legal-transcription-source-workflow",
    "title": "AI Court Reporting Legal Transcription Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AICourtReportingLegalTranscription.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AICourtReportingLegalTranscription to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Court Reporting Legal Transcription source context",
    "outputLabel": "AI Court Reporting Legal Transcription source analysis",
    "signals": [
      "server/services/openrouter",
      "server/routes/ai",
      "server/routes/gap_videosyncs_lacks_ai_driven_audio_video_alignment",
      "client/src/pages/AIFeaturesNewPage",
      "client/src/pages/AIFeaturesPage",
      "client/src/pages/GapVideosyncsLacksAiDrivenAudioVideoAlignment"
    ]
  },
  {
    "id": "ai-court-reporting-legal-transcription-ai-tools",
    "title": "AI Court Reporting Legal Transcription AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AICourtReportingLegalTranscription.",
    "defaultPrompt": "Review AICourtReportingLegalTranscription AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Court Reporting Legal Transcription AI prompt or tool context",
    "outputLabel": "AI Court Reporting Legal Transcription AI tool response",
    "signals": [
      "server/services/openrouter.js",
      "server/routes/ai.js",
      "server/routes/gap_videosyncs_lacks_ai_driven_audio_video_alignment.js",
      "client/src/pages/AIFeaturesNewPage.js",
      "client/src/pages/AIFeaturesPage.js",
      "client/src/pages/GapVideosyncsLacksAiDrivenAudioVideoAlignment.js"
    ]
  },
  {
    "id": "ai-court-reporting-legal-transcription-ai-j615h1-exact-ai",
    "title": "AI Court Reporting Legal Transcription: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AICourtReportingLegalTranscription. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Case Summary",
      "Claims",
      "Constraints",
      "Deliveries",
      "Events",
      "Exhibit Label",
      "Exhibit Text",
      "Invoice Details"
    ]
  },
  {
    "id": "ai-court-reporting-legal-transcription-gap-videosyncs-lacks-ai-driven-audio-video-alignment-1mo7xb-exact-ai",
    "title": "AI Court Reporting Legal Transcription: Gap Videosyncs Lacks AI Driven Audio Video Alignment",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap_videosyncs_lacks_ai_driven_audio_video_alignment.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Videosyncs Lacks AI Driven Audio Video Alignment\" from AICourtReportingLegalTranscription. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Videosyncs Lacks AI Driven Audio Video Alignment donor inputs",
    "outputLabel": "Gap Videosyncs Lacks AI Driven Audio Video Alignment AI response",
    "signals": [
      "server/routes/gap_videosyncs_lacks_ai_driven_audio_video_alignment.js"
    ]
  },
  {
    "id": "ai-court-reporting-legal-transcription-ai-features-new-page-x583dy-exact-ai",
    "title": "AI Court Reporting Legal Transcription: AI Features New Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIFeaturesNewPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Features New Page\" from AICourtReportingLegalTranscription. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Features New Page donor inputs",
    "outputLabel": "AI Features New Page AI response",
    "signals": [
      "client/src/pages/AIFeaturesNewPage.js"
    ]
  },
  {
    "id": "ai-court-reporting-legal-transcription-ai-features-page-19vw8g-exact-ai",
    "title": "AI Court Reporting Legal Transcription: AI Features Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIFeaturesPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Features Page\" from AICourtReportingLegalTranscription. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Features Page donor inputs",
    "outputLabel": "AI Features Page AI response",
    "signals": [
      "client/src/pages/AIFeaturesPage.js"
    ]
  },
  {
    "id": "ai-court-reporting-legal-transcription-gap-videosyncs-lacks-ai-driven-audio-video-alignment-40679t-exact-ai",
    "title": "AI Court Reporting Legal Transcription: Gap Videosyncs Lacks AI Driven Audio Video Alignment",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapVideosyncsLacksAiDrivenAudioVideoAlignment.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Videosyncs Lacks AI Driven Audio Video Alignment\" from AICourtReportingLegalTranscription. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Videosyncs Lacks AI Driven Audio Video Alignment donor inputs",
    "outputLabel": "Gap Videosyncs Lacks AI Driven Audio Video Alignment AI response",
    "signals": [
      "client/src/pages/GapVideosyncsLacksAiDrivenAudioVideoAlignment.js"
    ]
  },
  {
    "id": "ai-divorce-family-law-navigator-source-workflow",
    "title": "AI Divorce Family Law Navigator Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIDivorceFamilyLawNavigator.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIDivorceFamilyLawNavigator to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Divorce Family Law Navigator source context",
    "outputLabel": "AI Divorce Family Law Navigator source analysis",
    "signals": [
      "server/config/openrouter",
      "server/utils/parseAIJson",
      "server/routes/aiCenter",
      "server/routes/aiNew",
      "server/routes/gap_no_co_parenting_app_or_family_communication_tools",
      "client/tailwind.config",
      "client/src/main",
      "client/src/pages/AICenter"
    ]
  },
  {
    "id": "ai-divorce-family-law-navigator-ai-tools",
    "title": "AI Divorce Family Law Navigator AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIDivorceFamilyLawNavigator.",
    "defaultPrompt": "Review AIDivorceFamilyLawNavigator AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Divorce Family Law Navigator AI prompt or tool context",
    "outputLabel": "AI Divorce Family Law Navigator AI tool response",
    "signals": [
      "server/config/openrouter.js",
      "server/utils/parseAIJson.js",
      "server/routes/aiCenter.js",
      "server/routes/aiNew.js",
      "server/routes/gap_no_co_parenting_app_or_family_communication_tools.js",
      "client/tailwind.config.js",
      "client/src/main.jsx",
      "client/src/pages/AICenter.jsx"
    ]
  },
  {
    "id": "ai-divorce-family-law-navigator-ai-center-14mie6-exact-ai",
    "title": "AI Divorce Family Law Navigator: AI Center",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiCenter.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Center\" from AIDivorceFamilyLawNavigator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Center donor inputs",
    "outputLabel": "AI Center AI response",
    "signals": [
      "Feature Id",
      "Prompt"
    ]
  },
  {
    "id": "ai-divorce-family-law-navigator-ai-new-1l6olc-exact-ai",
    "title": "AI Divorce Family Law Navigator: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIDivorceFamilyLawNavigator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Audience",
      "Case Facts",
      "Case Id",
      "Case Type",
      "Child Factors",
      "Claims",
      "Contested",
      "Custody Facts"
    ]
  },
  {
    "id": "ai-divorce-family-law-navigator-ai-center-42pwwt-exact-ai",
    "title": "AI Divorce Family Law Navigator: AI Center",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AICenter.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Center\" from AIDivorceFamilyLawNavigator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Center donor inputs",
    "outputLabel": "AI Center AI response",
    "signals": [
      "client/src/pages/AICenter.jsx"
    ]
  },
  {
    "id": "a-ie-discovery-system-source-workflow",
    "title": "A Ie Discovery System Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIeDiscoverySystem.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIeDiscoverySystem to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "A Ie Discovery System source context",
    "outputLabel": "A Ie Discovery System source analysis",
    "signals": [
      "backend/services/openrouter",
      "frontend/tailwind.config",
      "frontend/src/main",
      "frontend/src/pages/AgenticSearchChainPage",
      "frontend/src/pages/EmailThreadClusterPage",
      "frontend/src/pages/FeatureDetailPage",
      "frontend/src/pages/SimpleAIPage",
      "frontend/src/components/AIAnalysisPanel"
    ]
  },
  {
    "id": "a-ie-discovery-system-ai-tools",
    "title": "A Ie Discovery System AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIeDiscoverySystem.",
    "defaultPrompt": "Review AIeDiscoverySystem AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "A Ie Discovery System AI prompt or tool context",
    "outputLabel": "A Ie Discovery System AI tool response",
    "signals": [
      "backend/services/openrouter.js",
      "frontend/tailwind.config.js",
      "frontend/src/main.jsx",
      "frontend/src/pages/AgenticSearchChainPage.jsx",
      "frontend/src/pages/EmailThreadClusterPage.jsx",
      "frontend/src/pages/FeatureDetailPage.jsx",
      "frontend/src/pages/SimpleAIPage.jsx",
      "frontend/src/components/AIAnalysisPanel.jsx"
    ]
  },
  {
    "id": "a-ie-discovery-system-agentic-search-chain-page-1o7klm-exact-ai",
    "title": "A Ie Discovery System: Agentic Search Chain Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AgenticSearchChainPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Search Chain Page\" from AIeDiscoverySystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Search Chain Page donor inputs",
    "outputLabel": "Agentic Search Chain Page AI response",
    "signals": [
      "frontend/src/pages/AgenticSearchChainPage.jsx"
    ]
  },
  {
    "id": "a-ie-discovery-system-email-thread-cluster-page-1npt45-exact-ai",
    "title": "A Ie Discovery System: Email Thread Cluster Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/EmailThreadClusterPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Email Thread Cluster Page\" from AIeDiscoverySystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Email Thread Cluster Page donor inputs",
    "outputLabel": "Email Thread Cluster Page AI response",
    "signals": [
      "frontend/src/pages/EmailThreadClusterPage.jsx"
    ]
  },
  {
    "id": "a-ie-discovery-system-feature-detail-page-1aef0j-exact-ai",
    "title": "A Ie Discovery System: Feature Detail Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/FeatureDetailPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Feature Detail Page\" from AIeDiscoverySystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Feature Detail Page donor inputs",
    "outputLabel": "Feature Detail Page AI response",
    "signals": [
      "frontend/src/pages/FeatureDetailPage.jsx"
    ]
  },
  {
    "id": "a-ie-discovery-system-agentic-discovery-ibk6md-exact-ai",
    "title": "A Ie Discovery System: Agentic Discovery",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/agenticDiscovery.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Discovery\" from AIeDiscoverySystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Discovery donor inputs",
    "outputLabel": "Agentic Discovery AI response",
    "signals": [
      "Case Id",
      "Query"
    ]
  },
  {
    "id": "a-ie-discovery-system-ai-5cuwes-exact-ai",
    "title": "A Ie Discovery System: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIeDiscoverySystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Case Id",
      "Case Themes",
      "Custodian Id",
      "Doc Count Override",
      "Document Id",
      "Document Ids",
      "Expected Review Pace Per Hour",
      "Hourly Rate"
    ]
  },
  {
    "id": "a-ie-discovery-system-ai-extra-zoriwe-exact-ai",
    "title": "A Ie Discovery System: AI Extra",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiExtra.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Extra\" from AIeDiscoverySystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Extra donor inputs",
    "outputLabel": "AI Extra AI response",
    "signals": [
      "backend/routes/aiExtra.js"
    ]
  },
  {
    "id": "a-ie-discovery-system-chain-of-custody-16nu2d-exact-ai",
    "title": "A Ie Discovery System: Chain Of Custody",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/chainOfCustody.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Chain Of Custody\" from AIeDiscoverySystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Chain Of Custody donor inputs",
    "outputLabel": "Chain Of Custody AI response",
    "signals": [
      "Action",
      "Actor Email",
      "Details",
      "Document Id"
    ]
  },
  {
    "id": "a-ie-discovery-system-email-thread-analysis-i8gdfw-exact-ai",
    "title": "A Ie Discovery System: Email Thread Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/emailThreadAnalysis.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Email Thread Analysis\" from AIeDiscoverySystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Email Thread Analysis donor inputs",
    "outputLabel": "Email Thread Analysis AI response",
    "signals": [
      "backend/routes/emailThreadAnalysis.js"
    ]
  },
  {
    "id": "a-ie-discovery-system-email-threads-8q94zx-exact-ai",
    "title": "A Ie Discovery System: Email Threads",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/emailThreads.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Email Threads\" from AIeDiscoverySystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Email Threads donor inputs",
    "outputLabel": "Email Threads AI response",
    "signals": [
      "Case Id",
      "Date Range",
      "Has Attachments",
      "Key Participants",
      "Message Count",
      "Participant Count",
      "Relevance Score",
      "Sentiment"
    ]
  },
  {
    "id": "ai-regulatory-compliance-source-workflow",
    "title": "AI Regulatory Compliance Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AiRegulatoryCompliance.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AiRegulatoryCompliance to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Regulatory Compliance source context",
    "outputLabel": "AI Regulatory Compliance source analysis",
    "signals": [
      "frontend/src/pages/AIAssistant",
      "frontend/src/pages/AuditTrail",
      "frontend/src/pages/CfAigeneratedAuditDocumentation",
      "frontend/src/pages/GapNoCompliancegapfinderAgainstSelectedFram",
      "frontend/src/pages/GapNoRemediationplannerAi",
      "frontend/src/pages/GapNoVendorriskscorerThirdpartyRiskAi",
      "frontend/src/pages/Training",
      "frontend/src/pages/TrainingTracker"
    ]
  },
  {
    "id": "ai-regulatory-compliance-ai-tools",
    "title": "AI Regulatory Compliance AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AiRegulatoryCompliance.",
    "defaultPrompt": "Review AiRegulatoryCompliance AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Regulatory Compliance AI prompt or tool context",
    "outputLabel": "AI Regulatory Compliance AI tool response",
    "signals": [
      "frontend/src/pages/AIAssistant.js",
      "frontend/src/pages/AuditTrail.js",
      "frontend/src/pages/CfAigeneratedAuditDocumentation.jsx",
      "frontend/src/pages/GapNoCompliancegapfinderAgainstSelectedFram.jsx",
      "frontend/src/pages/GapNoRemediationplannerAi.jsx",
      "frontend/src/pages/GapNoVendorriskscorerThirdpartyRiskAi.jsx",
      "frontend/src/pages/Training.js",
      "frontend/src/pages/TrainingTracker.js"
    ]
  },
  {
    "id": "ai-regulatory-compliance-ai-assistant-uzhtm5-exact-ai",
    "title": "AI Regulatory Compliance: AI Assistant",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAssistant.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Assistant\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Assistant donor inputs",
    "outputLabel": "AI Assistant AI response",
    "signals": [
      "frontend/src/pages/AIAssistant.js"
    ]
  },
  {
    "id": "ai-regulatory-compliance-audit-trail-gh3eym-exact-ai",
    "title": "AI Regulatory Compliance: Audit Trail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AuditTrail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Audit Trail\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Audit Trail donor inputs",
    "outputLabel": "Audit Trail AI response",
    "signals": [
      "Action",
      "Entity Type"
    ]
  },
  {
    "id": "ai-regulatory-compliance-cf-aigenerated-audit-documentation-awfz04-exact-ai",
    "title": "AI Regulatory Compliance: Cf Aigenerated Audit Documentation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfAigeneratedAuditDocumentation.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Aigenerated Audit Documentation\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Aigenerated Audit Documentation donor inputs",
    "outputLabel": "Cf Aigenerated Audit Documentation AI response",
    "signals": [
      "frontend/src/pages/CfAigeneratedAuditDocumentation.jsx"
    ]
  },
  {
    "id": "ai-regulatory-compliance-gap-no-compliancegapfinder-against-selected-fram-1cm2fl-exact-ai",
    "title": "AI Regulatory Compliance: Gap No Compliancegapfinder Against Selected Fram",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoCompliancegapfinderAgainstSelectedFram.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Compliancegapfinder Against Selected Fram\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Compliancegapfinder Against Selected Fram donor inputs",
    "outputLabel": "Gap No Compliancegapfinder Against Selected Fram AI response",
    "signals": [
      "frontend/src/pages/GapNoCompliancegapfinderAgainstSelectedFram.jsx"
    ]
  },
  {
    "id": "ai-regulatory-compliance-gap-no-remediationplanner-ai-1ql8v1-exact-ai",
    "title": "AI Regulatory Compliance: Gap No Remediationplanner AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoRemediationplannerAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Remediationplanner AI\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Remediationplanner AI donor inputs",
    "outputLabel": "Gap No Remediationplanner AI AI response",
    "signals": [
      "frontend/src/pages/GapNoRemediationplannerAi.jsx"
    ]
  },
  {
    "id": "ai-regulatory-compliance-gap-no-vendorriskscorer-thirdparty-risk-ai-13aqu3-exact-ai",
    "title": "AI Regulatory Compliance: Gap No Vendorriskscorer Thirdparty Risk AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoVendorriskscorerThirdpartyRiskAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Vendorriskscorer Thirdparty Risk AI\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Vendorriskscorer Thirdparty Risk AI donor inputs",
    "outputLabel": "Gap No Vendorriskscorer Thirdparty Risk AI AI response",
    "signals": [
      "frontend/src/pages/GapNoVendorriskscorerThirdpartyRiskAi.jsx"
    ]
  },
  {
    "id": "ai-regulatory-compliance-training-19tyim-exact-ai",
    "title": "AI Regulatory Compliance: Training",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/Training.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training donor inputs",
    "outputLabel": "Training AI response",
    "signals": [
      "Category",
      "Completion Status",
      "Course Name",
      "Description",
      "Expiry Date",
      "Score",
      "User Id"
    ]
  },
  {
    "id": "ai-regulatory-compliance-training-tracker-3s3ond-exact-ai",
    "title": "AI Regulatory Compliance: Training Tracker",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/TrainingTracker.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training Tracker\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training Tracker donor inputs",
    "outputLabel": "Training Tracker AI response",
    "signals": [
      "Completed Courses",
      "Status",
      "Department",
      "Due Date",
      "Employee Id",
      "Employee",
      "Next Training",
      "Overall Score"
    ]
  },
  {
    "id": "ai-regulatory-compliance-ai-continuous-monitor-o4i1aw-exact-ai",
    "title": "AI Regulatory Compliance: AI Continuous Monitor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai-continuous-monitor.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Continuous Monitor\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Continuous Monitor donor inputs",
    "outputLabel": "AI Continuous Monitor AI response",
    "signals": [
      "backend/src/routes/ai-continuous-monitor.js"
    ]
  },
  {
    "id": "ai-regulatory-compliance-ai-1lp99l-exact-ai",
    "title": "AI Regulatory Compliance: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Audience",
      "Company Context",
      "Constraints",
      "Context",
      "Controls",
      "Conversation History = []",
      "Current Controls",
      "Document Content"
    ]
  },
  {
    "id": "ai-regulatory-compliance-gap-no-compliancegapfinder-against-selected-fram-1ua4fa-exact-ai",
    "title": "AI Regulatory Compliance: Gap No Compliancegapfinder Against Selected Fram",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap-no-compliancegapfinder-against-selected-fram.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Compliancegapfinder Against Selected Fram\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Compliancegapfinder Against Selected Fram donor inputs",
    "outputLabel": "Gap No Compliancegapfinder Against Selected Fram AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-regulatory-compliance-gap-no-remediationplanner-ai-sqbfly-exact-ai",
    "title": "AI Regulatory Compliance: Gap No Remediationplanner AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap-no-remediationplanner-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Remediationplanner AI\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Remediationplanner AI donor inputs",
    "outputLabel": "Gap No Remediationplanner AI AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-regulatory-compliance-gap-no-vendorriskscorer-thirdparty-risk-ai-11ztwb-exact-ai",
    "title": "AI Regulatory Compliance: Gap No Vendorriskscorer Thirdparty Risk AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap-no-vendorriskscorer-thirdparty-risk-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Vendorriskscorer Thirdparty Risk AI\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Vendorriskscorer Thirdparty Risk AI donor inputs",
    "outputLabel": "Gap No Vendorriskscorer Thirdparty Risk AI AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-regulatory-compliance-training-xs91zl-exact-ai",
    "title": "AI Regulatory Compliance: Training",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/training.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training donor inputs",
    "outputLabel": "Training AI response",
    "signals": [
      "Audience",
      "Category",
      "Certificate Url",
      "Completion Status",
      "Course Name",
      "Description",
      "Expiry Date",
      "Ids"
    ]
  },
  {
    "id": "ai-regulatory-compliance-training-tracker-6uq8zt-exact-ai",
    "title": "AI Regulatory Compliance: Training Tracker",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/trainingTracker.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training Tracker\" from AiRegulatoryCompliance. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training Tracker donor inputs",
    "outputLabel": "Training Tracker AI response",
    "signals": [
      "Completed Courses",
      "Compliance Status",
      "Department",
      "Due Date",
      "Employee Id",
      "Ids",
      "Next Training",
      "Overall Score"
    ]
  },
  {
    "id": "ai-revenue-recognition-engine-source-workflow",
    "title": "AI Revenue Recognition Engine Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIRevenueRecognitionEngine.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIRevenueRecognitionEngine to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Revenue Recognition Engine source context",
    "outputLabel": "AI Revenue Recognition Engine source analysis",
    "signals": [
      "frontend/src/pages/GapNoCustomerChurnretentionRiskAi",
      "frontend/src/pages/GapNoPerformanceobligationtrackingAiProgress",
      "frontend/src/components/AIAuditReadiness",
      "frontend/src/components/AIComplianceCheck",
      "frontend/src/components/AIContractAmendmentImpact",
      "frontend/src/components/AIContractClause",
      "frontend/src/components/AIContractModification",
      "frontend/src/components/AIContractSummarizer"
    ]
  },
  {
    "id": "ai-revenue-recognition-engine-ai-tools",
    "title": "AI Revenue Recognition Engine AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIRevenueRecognitionEngine.",
    "defaultPrompt": "Review AIRevenueRecognitionEngine AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Revenue Recognition Engine AI prompt or tool context",
    "outputLabel": "AI Revenue Recognition Engine AI tool response",
    "signals": [
      "frontend/src/pages/GapNoCustomerChurnretentionRiskAi.jsx",
      "frontend/src/pages/GapNoPerformanceobligationtrackingAiProgress.jsx",
      "frontend/src/components/AIAuditReadiness.js",
      "frontend/src/components/AIComplianceCheck.js",
      "frontend/src/components/AIContractAmendmentImpact.js",
      "frontend/src/components/AIContractClause.js",
      "frontend/src/components/AIContractModification.js",
      "frontend/src/components/AIContractSummarizer.js"
    ]
  },
  {
    "id": "ai-revenue-recognition-engine-gap-no-customer-churnretention-risk-ai-98w8h3-exact-ai",
    "title": "AI Revenue Recognition Engine: Gap No Customer Churnretention Risk AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoCustomerChurnretentionRiskAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Customer Churnretention Risk AI\" from AIRevenueRecognitionEngine. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Customer Churnretention Risk AI donor inputs",
    "outputLabel": "Gap No Customer Churnretention Risk AI AI response",
    "signals": [
      "frontend/src/pages/GapNoCustomerChurnretentionRiskAi.jsx"
    ]
  },
  {
    "id": "ai-revenue-recognition-engine-gap-no-performanceobligationtracking-ai-progress-mk3w7i-exact-ai",
    "title": "AI Revenue Recognition Engine: Gap No Performanceobligationtracking AI Progress",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoPerformanceobligationtrackingAiProgress.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Performanceobligationtracking AI Progress\" from AIRevenueRecognitionEngine. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Performanceobligationtracking AI Progress donor inputs",
    "outputLabel": "Gap No Performanceobligationtracking AI Progress AI response",
    "signals": [
      "frontend/src/pages/GapNoPerformanceobligationtrackingAiProgress.jsx"
    ]
  },
  {
    "id": "ai-revenue-recognition-engine-ai-amendment-impact-tauirr-exact-ai",
    "title": "AI Revenue Recognition Engine: AI Amendment Impact",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai-amendment-impact.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Amendment Impact\" from AIRevenueRecognitionEngine. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Amendment Impact donor inputs",
    "outputLabel": "AI Amendment Impact AI response",
    "signals": [
      "backend/routes/ai-amendment-impact.js"
    ]
  },
  {
    "id": "ai-revenue-recognition-engine-ai-5cuwes-exact-ai",
    "title": "AI Revenue Recognition Engine: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIRevenueRecognitionEngine. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Period"
    ]
  },
  {
    "id": "ai-revenue-recognition-engine-audit-trail-1i7mu4-exact-ai",
    "title": "AI Revenue Recognition Engine: Audit Trail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/audit-trail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Audit Trail\" from AIRevenueRecognitionEngine. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Audit Trail donor inputs",
    "outputLabel": "Audit Trail AI response",
    "signals": [
      "Action",
      "Changes",
      "Entity Id",
      "Entity Type",
      "User Id"
    ]
  },
  {
    "id": "ai-revenue-recognition-engine-gap-no-customer-churnretention-risk-ai-1o8hir-exact-ai",
    "title": "AI Revenue Recognition Engine: Gap No Customer Churnretention Risk AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-no-customer-churnretention-risk-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Customer Churnretention Risk AI\" from AIRevenueRecognitionEngine. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Customer Churnretention Risk AI donor inputs",
    "outputLabel": "Gap No Customer Churnretention Risk AI AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-revenue-recognition-engine-gap-no-performanceobligationtracking-ai-progress-6kw5zv-exact-ai",
    "title": "AI Revenue Recognition Engine: Gap No Performanceobligationtracking AI Progress",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-no-performanceobligationtracking-ai-progress.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Performanceobligationtracking AI Progress\" from AIRevenueRecognitionEngine. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Performanceobligationtracking AI Progress donor inputs",
    "outputLabel": "Gap No Performanceobligationtracking AI Progress AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-small-claims-court-guide-source-workflow",
    "title": "AI Small Claims Court Guide Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AISmallClaimsCourtGuide.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AISmallClaimsCourtGuide to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Small Claims Court Guide source context",
    "outputLabel": "AI Small Claims Court Guide source analysis",
    "signals": [
      "frontend/src/main",
      "frontend/src/pages/CaseDetail",
      "frontend/src/pages/ComplaintDraft",
      "backend/routes/ai-case-evaluation",
      "backend/routes/ai",
      "backend/middleware/parseAIJson"
    ]
  },
  {
    "id": "ai-small-claims-court-guide-ai-tools",
    "title": "AI Small Claims Court Guide AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AISmallClaimsCourtGuide.",
    "defaultPrompt": "Review AISmallClaimsCourtGuide AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Small Claims Court Guide AI prompt or tool context",
    "outputLabel": "AI Small Claims Court Guide AI tool response",
    "signals": [
      "frontend/src/main.jsx",
      "frontend/src/pages/CaseDetail.jsx",
      "frontend/src/pages/ComplaintDraft.jsx",
      "backend/routes/ai-case-evaluation.js",
      "backend/routes/ai.js",
      "backend/middleware/parseAIJson.js"
    ]
  },
  {
    "id": "ai-small-claims-court-guide-case-detail-1hmy88-exact-ai",
    "title": "AI Small Claims Court Guide: Case Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CaseDetail.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Case Detail\" from AISmallClaimsCourtGuide. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Case Detail donor inputs",
    "outputLabel": "Case Detail AI response",
    "signals": [
      "frontend/src/pages/CaseDetail.jsx"
    ]
  },
  {
    "id": "ai-small-claims-court-guide-complaint-draft-11iyma-exact-ai",
    "title": "AI Small Claims Court Guide: Complaint Draft",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ComplaintDraft.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Complaint Draft\" from AISmallClaimsCourtGuide. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Complaint Draft donor inputs",
    "outputLabel": "Complaint Draft AI response",
    "signals": [
      "frontend/src/pages/ComplaintDraft.jsx"
    ]
  },
  {
    "id": "ai-small-claims-court-guide-ai-case-evaluation-1wwpqg-exact-ai",
    "title": "AI Small Claims Court Guide: AI Case Evaluation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai-case-evaluation.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Case Evaluation\" from AISmallClaimsCourtGuide. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Case Evaluation donor inputs",
    "outputLabel": "AI Case Evaluation AI response",
    "signals": [
      "backend/routes/ai-case-evaluation.js"
    ]
  },
  {
    "id": "ai-small-claims-court-guide-ai-5cuwes-exact-ai",
    "title": "AI Small Claims Court Guide: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AISmallClaimsCourtGuide. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Alleged Errors",
      "Case Id",
      "Claim Amount",
      "Claim Summary",
      "County",
      "Deadline Known",
      "Defendant Position",
      "Dispute Type"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-source-workflow",
    "title": "AI Smart Contract Auditor Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AISmartContractAuditor.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AISmartContractAuditor to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Smart Contract Auditor source context",
    "outputLabel": "AI Smart Contract Auditor source analysis",
    "signals": [
      "frontend/src/main",
      "frontend/src/pages/GapNoFormalverificationsuggestionAi",
      "frontend/src/pages/GapNoGasestimationDeploymentCostAi",
      "frontend/src/pages/GapNoMultichainSupportEvmonlyAssumed",
      "frontend/src/pages/projects/ProjectDetail",
      "frontend/src/pages/contracts/ContractDetail",
      "frontend/src/pages/compliance-templates/TemplateDetail",
      "frontend/src/pages/audits/AuditReportDetail"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-ai-tools",
    "title": "AI Smart Contract Auditor AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AISmartContractAuditor.",
    "defaultPrompt": "Review AISmartContractAuditor AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Smart Contract Auditor AI prompt or tool context",
    "outputLabel": "AI Smart Contract Auditor AI tool response",
    "signals": [
      "frontend/src/main.tsx",
      "frontend/src/pages/GapNoFormalverificationsuggestionAi.tsx",
      "frontend/src/pages/GapNoGasestimationDeploymentCostAi.tsx",
      "frontend/src/pages/GapNoMultichainSupportEvmonlyAssumed.tsx",
      "frontend/src/pages/projects/ProjectDetail.tsx",
      "frontend/src/pages/contracts/ContractDetail.tsx",
      "frontend/src/pages/compliance-templates/TemplateDetail.tsx",
      "frontend/src/pages/audits/AuditReportDetail.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-gap-no-formalverificationsuggestion-ai-k9jq2u-exact-ai",
    "title": "AI Smart Contract Auditor: Gap No Formalverificationsuggestion AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoFormalverificationsuggestionAi.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Formalverificationsuggestion AI\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Formalverificationsuggestion AI donor inputs",
    "outputLabel": "Gap No Formalverificationsuggestion AI AI response",
    "signals": [
      "frontend/src/pages/GapNoFormalverificationsuggestionAi.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-gap-no-gasestimation-deployment-cost-ai-w6wb04-exact-ai",
    "title": "AI Smart Contract Auditor: Gap No Gasestimation Deployment Cost AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoGasestimationDeploymentCostAi.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Gasestimation Deployment Cost AI\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Gasestimation Deployment Cost AI donor inputs",
    "outputLabel": "Gap No Gasestimation Deployment Cost AI AI response",
    "signals": [
      "frontend/src/pages/GapNoGasestimationDeploymentCostAi.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-gap-no-multichain-support-evmonly-assumed-yac2c9-exact-ai",
    "title": "AI Smart Contract Auditor: Gap No Multichain Support Evmonly Assumed",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoMultichainSupportEvmonlyAssumed.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Multichain Support Evmonly Assumed\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Multichain Support Evmonly Assumed donor inputs",
    "outputLabel": "Gap No Multichain Support Evmonly Assumed AI response",
    "signals": [
      "frontend/src/pages/GapNoMultichainSupportEvmonlyAssumed.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-project-detail-4cxfay-exact-ai",
    "title": "AI Smart Contract Auditor: Project Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/projects/ProjectDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Project Detail\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Project Detail donor inputs",
    "outputLabel": "Project Detail AI response",
    "signals": [
      "frontend/src/pages/projects/ProjectDetail.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-contract-detail-1k4pas-exact-ai",
    "title": "AI Smart Contract Auditor: Contract Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/contracts/ContractDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Contract Detail\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Contract Detail donor inputs",
    "outputLabel": "Contract Detail AI response",
    "signals": [
      "frontend/src/pages/contracts/ContractDetail.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-template-detail-1k4dh1-exact-ai",
    "title": "AI Smart Contract Auditor: Template Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/compliance-templates/TemplateDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Template Detail\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Template Detail donor inputs",
    "outputLabel": "Template Detail AI response",
    "signals": [
      "frontend/src/pages/compliance-templates/TemplateDetail.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-audit-report-detail-13qmgl-exact-ai",
    "title": "AI Smart Contract Auditor: Audit Report Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/audits/AuditReportDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Audit Report Detail\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Audit Report Detail donor inputs",
    "outputLabel": "Audit Report Detail AI response",
    "signals": [
      "frontend/src/pages/audits/AuditReportDetail.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-audit-history-detail-1ttf8g-exact-ai",
    "title": "AI Smart Contract Auditor: Audit History Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/audit-history/AuditHistoryDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Audit History Detail\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Audit History Detail donor inputs",
    "outputLabel": "Audit History Detail AI response",
    "signals": [
      "frontend/src/pages/audit-history/AuditHistoryDetail.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-advanced-analysis-tp0w7w-exact-ai",
    "title": "AI Smart Contract Auditor: Advanced Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ai/AdvancedAnalysis.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Advanced Analysis\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Advanced Analysis donor inputs",
    "outputLabel": "Advanced Analysis AI response",
    "signals": [
      "Current Pattern",
      "Expected Functions",
      "Language",
      "Properties Of Interest",
      "Similar Contract Name",
      "Source Code",
      "Target Goal"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-code-quality-laxqr4-exact-ai",
    "title": "AI Smart Contract Auditor: Code Quality",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ai/CodeQuality.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Code Quality\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Code Quality donor inputs",
    "outputLabel": "Code Quality AI response",
    "signals": [
      "frontend/src/pages/ai/CodeQuality.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-compliance-checking-1u7r65-exact-ai",
    "title": "AI Smart Contract Auditor: Compliance Checking",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ai/ComplianceChecking.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Compliance Checking\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Compliance Checking donor inputs",
    "outputLabel": "Compliance Checking AI response",
    "signals": [
      "frontend/src/pages/ai/ComplianceChecking.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-gas-optimization-kedsxw-exact-ai",
    "title": "AI Smart Contract Auditor: Gas Optimization",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ai/GasOptimization.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gas Optimization\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gas Optimization donor inputs",
    "outputLabel": "Gas Optimization AI response",
    "signals": [
      "frontend/src/pages/ai/GasOptimization.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-reentrancy-detection-1bcsts-exact-ai",
    "title": "AI Smart Contract Auditor: Reentrancy Detection",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ai/ReentrancyDetection.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Reentrancy Detection\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Reentrancy Detection donor inputs",
    "outputLabel": "Reentrancy Detection AI response",
    "signals": [
      "frontend/src/pages/ai/ReentrancyDetection.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-test-generation-1udsuq-exact-ai",
    "title": "AI Smart Contract Auditor: Test Generation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ai/TestGeneration.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Test Generation\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Test Generation donor inputs",
    "outputLabel": "Test Generation AI response",
    "signals": [
      "frontend/src/pages/ai/TestGeneration.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-vulnerability-detection-xml34b-exact-ai",
    "title": "AI Smart Contract Auditor: Vulnerability Detection",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ai/VulnerabilityDetection.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Vulnerability Detection\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Vulnerability Detection donor inputs",
    "outputLabel": "Vulnerability Detection AI response",
    "signals": [
      "frontend/src/pages/ai/VulnerabilityDetection.tsx"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-ai-continuous-monitor-o4i1mu-exact-ai",
    "title": "AI Smart Contract Auditor: AI Continuous Monitor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai-continuous-monitor.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Continuous Monitor\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Continuous Monitor donor inputs",
    "outputLabel": "AI Continuous Monitor AI response",
    "signals": [
      "backend/src/routes/ai-continuous-monitor.ts"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-ai-1lp99q-exact-ai",
    "title": "AI Smart Contract Auditor: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Audit Report Id",
      "Contract Id",
      "Contract Ids",
      "Current Pattern",
      "Expected Functions",
      "Language",
      "Properties Of Interest",
      "Scan Types = ['Vulnerability Scan']"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-gap-no-formalverificationsuggestion-ai-oibaur-exact-ai",
    "title": "AI Smart Contract Auditor: Gap No Formalverificationsuggestion AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap-no-formalverificationsuggestion-ai.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Formalverificationsuggestion AI\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Formalverificationsuggestion AI donor inputs",
    "outputLabel": "Gap No Formalverificationsuggestion AI AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-gap-no-gasestimation-deployment-cost-ai-8ohwch-exact-ai",
    "title": "AI Smart Contract Auditor: Gap No Gasestimation Deployment Cost AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap-no-gasestimation-deployment-cost-ai.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Gasestimation Deployment Cost AI\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Gasestimation Deployment Cost AI donor inputs",
    "outputLabel": "Gap No Gasestimation Deployment Cost AI AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-smart-contract-auditor-gap-no-multichain-support-evmonly-assumed-gm7ugc-exact-ai",
    "title": "AI Smart Contract Auditor: Gap No Multichain Support Evmonly Assumed",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap-no-multichain-support-evmonly-assumed.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Multichain Support Evmonly Assumed\" from AISmartContractAuditor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Multichain Support Evmonly Assumed donor inputs",
    "outputLabel": "Gap No Multichain Support Evmonly Assumed AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "aisox-audit-automation-source-workflow",
    "title": "AISOX Audit Automation Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AISOXAuditAutomation.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AISOXAuditAutomation to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AISOX Audit Automation source context",
    "outputLabel": "AISOX Audit Automation source analysis",
    "signals": [
      "server/config/openrouter",
      "server/routes/ai",
      "server/routes/gapNoAiDrivenControlToRiskAutoMapping",
      "server/routes/gapNoDedicatedAuditTrailSubsystemDespiteDomainRequirement",
      "client/tailwind.config",
      "client/src/main",
      "client/src/pages/GapNoAiDrivenControlToRiskAuto",
      "client/src/pages/GapNoDedicatedAuditTrailSubsystemDespiteDomain"
    ]
  },
  {
    "id": "aisox-audit-automation-ai-tools",
    "title": "AISOX Audit Automation AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AISOXAuditAutomation.",
    "defaultPrompt": "Review AISOXAuditAutomation AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AISOX Audit Automation AI prompt or tool context",
    "outputLabel": "AISOX Audit Automation AI tool response",
    "signals": [
      "server/config/openrouter.js",
      "server/routes/ai.js",
      "server/routes/gapNoAiDrivenControlToRiskAutoMapping.js",
      "server/routes/gapNoDedicatedAuditTrailSubsystemDespiteDomainRequirement.js",
      "client/tailwind.config.js",
      "client/src/main.jsx",
      "client/src/pages/GapNoAiDrivenControlToRiskAuto.jsx",
      "client/src/pages/GapNoDedicatedAuditTrailSubsystemDespiteDomain.jsx"
    ]
  },
  {
    "id": "aisox-audit-automation-ai-j615h1-exact-ai",
    "title": "AISOX Audit Automation: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AISOXAuditAutomation. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Assessment Id",
      "Audit Type",
      "Context Notes",
      "Control Id",
      "Deficiency Id",
      "Entity Id",
      "Entity Name",
      "Entity Type"
    ]
  },
  {
    "id": "aisox-audit-automation-gap-no-ai-driven-control-to-risk-auto-1fply0-exact-ai",
    "title": "AISOX Audit Automation: Gap No AI Driven Control To Risk Auto",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoAiDrivenControlToRiskAuto.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Driven Control To Risk Auto\" from AISOXAuditAutomation. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Driven Control To Risk Auto donor inputs",
    "outputLabel": "Gap No AI Driven Control To Risk Auto AI response",
    "signals": [
      "client/src/pages/GapNoAiDrivenControlToRiskAuto.jsx"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-source-workflow",
    "title": "AI Sports Agent Contract Analyzer Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AISportsAgentContractAnalyzer.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AISportsAgentContractAnalyzer to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Sports Agent Contract Analyzer source context",
    "outputLabel": "AI Sports Agent Contract Analyzer source analysis",
    "signals": [
      "backend/src/services/openrouter",
      "frontend/src/main",
      "frontend/src/pages/CfLeagueDataIngestPipelinesWithScheduledSync",
      "frontend/src/pages/CfMarketValuationEngineTrainedOnHistoricalContracts",
      "frontend/src/pages/FreeAgentsPage",
      "frontend/src/pages/GapNoAiDrivenPlayerValuationModelsPage",
      "frontend/src/pages/GapNoAiSuggestedNegotiationTacticsBeyondStatic",
      "frontend/src/pages/GapNoMultiPartyNegotiationSupportAgentTeam"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-ai-tools",
    "title": "AI Sports Agent Contract Analyzer AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AISportsAgentContractAnalyzer.",
    "defaultPrompt": "Review AISportsAgentContractAnalyzer AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Sports Agent Contract Analyzer AI prompt or tool context",
    "outputLabel": "AI Sports Agent Contract Analyzer AI tool response",
    "signals": [
      "backend/src/services/openrouter.js",
      "frontend/src/main.jsx",
      "frontend/src/pages/CfLeagueDataIngestPipelinesWithScheduledSync.jsx",
      "frontend/src/pages/CfMarketValuationEngineTrainedOnHistoricalContracts.jsx",
      "frontend/src/pages/FreeAgentsPage.jsx",
      "frontend/src/pages/GapNoAiDrivenPlayerValuationModelsPage.jsx",
      "frontend/src/pages/GapNoAiSuggestedNegotiationTacticsBeyondStatic.jsx",
      "frontend/src/pages/GapNoMultiPartyNegotiationSupportAgentTeam.jsx"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-cf-league-data-ingest-pipelines-with-scheduled-sync-1o2gz3-exact-ai",
    "title": "AI Sports Agent Contract Analyzer: Cf League Data Ingest Pipelines With Scheduled Sync",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfLeagueDataIngestPipelinesWithScheduledSync.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf League Data Ingest Pipelines With Scheduled Sync\" from AISportsAgentContractAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf League Data Ingest Pipelines With Scheduled Sync donor inputs",
    "outputLabel": "Cf League Data Ingest Pipelines With Scheduled Sync AI response",
    "signals": [
      "frontend/src/pages/CfLeagueDataIngestPipelinesWithScheduledSync.jsx"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-cf-market-valuation-engine-trained-on-historical-contracts-bzcs6g-exact-ai",
    "title": "AI Sports Agent Contract Analyzer: Cf Market Valuation Engine Trained On Historical Contracts",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfMarketValuationEngineTrainedOnHistoricalContracts.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Market Valuation Engine Trained On Historical Contracts\" from AISportsAgentContractAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Market Valuation Engine Trained On Historical Contracts donor inputs",
    "outputLabel": "Cf Market Valuation Engine Trained On Historical Contracts AI response",
    "signals": [
      "frontend/src/pages/CfMarketValuationEngineTrainedOnHistoricalContracts.jsx"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-free-agents-page-u37h5w-exact-ai",
    "title": "AI Sports Agent Contract Analyzer: Free Agents Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/FreeAgentsPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Free Agents Page\" from AISportsAgentContractAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Free Agents Page donor inputs",
    "outputLabel": "Free Agents Page AI response",
    "signals": [
      "frontend/src/pages/FreeAgentsPage.jsx"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-gap-no-ai-driven-player-valuation-models-page-tl1wzf-exact-ai",
    "title": "AI Sports Agent Contract Analyzer: Gap No AI Driven Player Valuation Models Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoAiDrivenPlayerValuationModelsPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Driven Player Valuation Models Page\" from AISportsAgentContractAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Driven Player Valuation Models Page donor inputs",
    "outputLabel": "Gap No AI Driven Player Valuation Models Page AI response",
    "signals": [
      "frontend/src/pages/GapNoAiDrivenPlayerValuationModelsPage.jsx"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-gap-no-ai-suggested-negotiation-tactics-beyond-static-jrh4g8-exact-ai",
    "title": "AI Sports Agent Contract Analyzer: Gap No AI Suggested Negotiation Tactics Beyond Static",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoAiSuggestedNegotiationTacticsBeyondStatic.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Suggested Negotiation Tactics Beyond Static\" from AISportsAgentContractAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Suggested Negotiation Tactics Beyond Static donor inputs",
    "outputLabel": "Gap No AI Suggested Negotiation Tactics Beyond Static AI response",
    "signals": [
      "frontend/src/pages/GapNoAiSuggestedNegotiationTacticsBeyondStatic.jsx"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-gap-no-multi-party-negotiation-support-agent-team-bcu8ep-exact-ai",
    "title": "AI Sports Agent Contract Analyzer: Gap No Multi Party Negotiation Support Agent Team",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoMultiPartyNegotiationSupportAgentTeam.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Multi Party Negotiation Support Agent Team\" from AISportsAgentContractAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Multi Party Negotiation Support Agent Team donor inputs",
    "outputLabel": "Gap No Multi Party Negotiation Support Agent Team AI response",
    "signals": [
      "frontend/src/pages/GapNoMultiPartyNegotiationSupportAgentTeam.jsx"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-ai-1lp99l-exact-ai",
    "title": "AI Sports Agent Contract Analyzer: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AISportsAgentContractAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Age",
      "Athlete",
      "Athlete Profile",
      "Contract Terms",
      "Counterparty",
      "Current Salary",
      "Deal Constraints",
      "Injury History"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-free-agents-q5ifn4-exact-ai",
    "title": "AI Sports Agent Contract Analyzer: Free Agents",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/free_agents.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Free Agents\" from AISportsAgentContractAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Free Agents donor inputs",
    "outputLabel": "Free Agents AI response",
    "signals": [
      "Age",
      "Agent Name",
      "Data",
      "Injury History",
      "Last Contract Value",
      "League",
      "Market Demand",
      "Player Name"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-gap-no-ai-driven-player-valuation-models-page-exists-no-1je7wq-exact-ai",
    "title": "AI Sports Agent Contract Analyzer: Gap No AI Driven Player Valuation Models Page Exists No",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gapNoAiDrivenPlayerValuationModelsPageExistsNo.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Driven Player Valuation Models Page Exists No\" from AISportsAgentContractAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Driven Player Valuation Models Page Exists No donor inputs",
    "outputLabel": "Gap No AI Driven Player Valuation Models Page Exists No AI response",
    "signals": [
      "backend/src/routes/gapNoAiDrivenPlayerValuationModelsPageExistsNo.js"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-gap-no-ai-suggested-negotiation-tactics-beyond-static-analysis-srcrya-exact-ai",
    "title": "AI Sports Agent Contract Analyzer: Gap No AI Suggested Negotiation Tactics Beyond Static Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gapNoAiSuggestedNegotiationTacticsBeyondStaticAnalysis.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Suggested Negotiation Tactics Beyond Static Analysis\" from AISportsAgentContractAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Suggested Negotiation Tactics Beyond Static Analysis donor inputs",
    "outputLabel": "Gap No AI Suggested Negotiation Tactics Beyond Static Analysis AI response",
    "signals": [
      "backend/src/routes/gapNoAiSuggestedNegotiationTacticsBeyondStaticAnalysis.js"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-gap-no-multi-party-negotiation-support-agent-team-third-parties-z6po8y-exact-ai",
    "title": "AI Sports Agent Contract Analyzer: Gap No Multi Party Negotiation Support Agent Team Third Parties",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gapNoMultiPartyNegotiationSupportAgentTeamThirdParties.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Multi Party Negotiation Support Agent Team Third Parties\" from AISportsAgentContractAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Multi Party Negotiation Support Agent Team Third Parties donor inputs",
    "outputLabel": "Gap No Multi Party Negotiation Support Agent Team Third Parties AI response",
    "signals": [
      "backend/src/routes/gapNoMultiPartyNegotiationSupportAgentTeamThirdParties.js"
    ]
  },
  {
    "id": "ai-sports-agent-contract-analyzer-league-data-ingest-sft18c-exact-ai",
    "title": "AI Sports Agent Contract Analyzer: League Data Ingest",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/leagueDataIngest.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"League Data Ingest\" from AISportsAgentContractAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "League Data Ingest donor inputs",
    "outputLabel": "League Data Ingest AI response",
    "signals": [
      "Items = []"
    ]
  },
  {
    "id": "legal-forms-source-workflow",
    "title": "Legal Forms Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from legalForms.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from legalForms to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Legal Forms source context",
    "outputLabel": "Legal Forms source analysis",
    "signals": [
      ".aider.chat.history",
      "tests/e2e/ai-communications.spec",
      "tests/e2e/ai-drafting.spec",
      "routes/ai-billing",
      "routes/ai-calendar",
      "routes/ai-catalog",
      "routes/ai-communications",
      "routes/ai-conflicts"
    ]
  },
  {
    "id": "legal-forms-ai-tools",
    "title": "Legal Forms AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from legalForms.",
    "defaultPrompt": "Review legalForms AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Legal Forms AI prompt or tool context",
    "outputLabel": "Legal Forms AI tool response",
    "signals": [
      ".aider.chat.history.md",
      "tests/e2e/ai-communications.spec.js",
      "tests/e2e/ai-drafting.spec.js",
      "routes/ai-billing.js",
      "routes/ai-calendar.js",
      "routes/ai-catalog.js",
      "routes/ai-communications.js",
      "routes/ai-conflicts.js"
    ]
  },
  {
    "id": "legal-forms-ai-billing-5bvsk9-exact-ai",
    "title": "Legal Forms: AI Billing",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-billing.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Billing\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Billing donor inputs",
    "outputLabel": "AI Billing AI response",
    "signals": [
      "Case Id",
      "Days",
      "Sample Notes"
    ]
  },
  {
    "id": "legal-forms-ai-calendar-1ikvbu-exact-ai",
    "title": "Legal Forms: AI Calendar",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-calendar.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Calendar\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Calendar donor inputs",
    "outputLabel": "AI Calendar AI response",
    "signals": [
      "Case Id",
      "Case Type",
      "Discovery Date",
      "Document Text",
      "Document Type",
      "Incident Date",
      "Jurisdiction"
    ]
  },
  {
    "id": "legal-forms-ai-catalog-17jqn4-exact-ai",
    "title": "Legal Forms: AI Catalog",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-catalog.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Catalog\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Catalog donor inputs",
    "outputLabel": "AI Catalog AI response",
    "signals": [
      "routes/ai-catalog.js"
    ]
  },
  {
    "id": "legal-forms-ai-communications-1p4hl7-exact-ai",
    "title": "Legal Forms: AI Communications",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-communications.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Communications\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Communications donor inputs",
    "outputLabel": "AI Communications AI response",
    "signals": [
      "Body",
      "Client Id",
      "Context",
      "Draft Type = 'Email'",
      "Message Content",
      "Message Id",
      "Subject",
      "Subject Line"
    ]
  },
  {
    "id": "legal-forms-ai-conflicts-1d1z4d-exact-ai",
    "title": "Legal Forms: AI Conflicts",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-conflicts.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Conflicts\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Conflicts donor inputs",
    "outputLabel": "AI Conflicts AI response",
    "signals": [
      "Analysis Type",
      "Conflict Check Id",
      "Party Names"
    ]
  },
  {
    "id": "legal-forms-ai-drafting-12npb6-exact-ai",
    "title": "Legal Forms: AI Drafting",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-drafting.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Drafting\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Drafting donor inputs",
    "outputLabel": "AI Drafting AI response",
    "signals": [
      "Case Id",
      "Category",
      "Client Id",
      "Content",
      "Context",
      "Custom Prompt",
      "Description",
      "Document Type"
    ]
  },
  {
    "id": "legal-forms-ai-ediscovery-uiy44d-exact-ai",
    "title": "Legal Forms: AI Ediscovery",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-ediscovery.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Ediscovery\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Ediscovery donor inputs",
    "outputLabel": "AI Ediscovery AI response",
    "signals": [
      "Docs",
      "Query",
      "Top K = 5"
    ]
  },
  {
    "id": "legal-forms-ai-features-1ygs85-exact-ai",
    "title": "Legal Forms: AI Features",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-features.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Features\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Features donor inputs",
    "outputLabel": "AI Features AI response",
    "signals": [
      "routes/ai-features.js"
    ]
  },
  {
    "id": "legal-forms-ai-intake-builder-1vcvf8-exact-ai",
    "title": "Legal Forms: AI Intake Builder",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-intake-builder.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Intake Builder\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Intake Builder donor inputs",
    "outputLabel": "AI Intake Builder AI response",
    "signals": [
      "Description",
      "Email Text",
      "Form Id",
      "Practice Area"
    ]
  },
  {
    "id": "legal-forms-ai-intake-coqg7i-exact-ai",
    "title": "Legal Forms: AI Intake",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-intake.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Intake\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Intake donor inputs",
    "outputLabel": "AI Intake AI response",
    "signals": [
      "Message",
      "Session Id"
    ]
  },
  {
    "id": "legal-forms-ai-matter-outcome-1hyneb-exact-ai",
    "title": "Legal Forms: AI Matter Outcome",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-matter-outcome.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Matter Outcome\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Matter Outcome donor inputs",
    "outputLabel": "AI Matter Outcome AI response",
    "signals": [
      "Matter",
      "Similar Matters = []"
    ]
  },
  {
    "id": "legal-forms-ai-pacer-1blqks-exact-ai",
    "title": "Legal Forms: AI Pacer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-pacer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Pacer\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Pacer donor inputs",
    "outputLabel": "AI Pacer AI response",
    "signals": [
      "routes/ai-pacer.js"
    ]
  },
  {
    "id": "legal-forms-ai-predictions-1w40el-exact-ai",
    "title": "Legal Forms: AI Predictions",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-predictions.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Predictions\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Predictions donor inputs",
    "outputLabel": "AI Predictions AI response",
    "signals": [
      "Case Id",
      "Disclaimer Acknowledged",
      "Input Factors",
      "Prediction Type"
    ]
  },
  {
    "id": "legal-forms-ai-transcription-1hhtw3-exact-ai",
    "title": "Legal Forms: AI Transcription",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/ai-transcription.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Transcription\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Transcription donor inputs",
    "outputLabel": "AI Transcription AI response",
    "signals": [
      "Audio Url",
      "Case Id",
      "Speaker",
      "Text",
      "Ts"
    ]
  },
  {
    "id": "legal-forms-gap-ai-routes-exist-but-logic-depth-1ytvhv-exact-ai",
    "title": "Legal Forms: Gap AI Routes Exist But Logic Depth",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/gap_ai_routes_exist_but_logic_depth.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Routes Exist But Logic Depth\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Routes Exist But Logic Depth donor inputs",
    "outputLabel": "Gap AI Routes Exist But Logic Depth AI response",
    "signals": [
      "routes/gap_ai_routes_exist_but_logic_depth.js"
    ]
  },
  {
    "id": "legal-forms-gap-no-matter-outcome-forecasting-with-explainability-hvdlgt-exact-ai",
    "title": "Legal Forms: Gap No Matter Outcome Forecasting With Explainability",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/gap_no_matter_outcome_forecasting_with_explainability.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Matter Outcome Forecasting With Explainability\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Matter Outcome Forecasting With Explainability donor inputs",
    "outputLabel": "Gap No Matter Outcome Forecasting With Explainability AI response",
    "signals": [
      "routes/gap_no_matter_outcome_forecasting_with_explainability.js"
    ]
  },
  {
    "id": "legal-forms-gap-no-real-time-courtroom-transcription-agent-1vmfvs-exact-ai",
    "title": "Legal Forms: Gap No Real Time Courtroom Transcription Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/gap_no_real_time_courtroom_transcription_agent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Real Time Courtroom Transcription Agent\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Real Time Courtroom Transcription Agent donor inputs",
    "outputLabel": "Gap No Real Time Courtroom Transcription Agent AI response",
    "signals": [
      "routes/gap_no_real_time_courtroom_transcription_agent.js"
    ]
  },
  {
    "id": "legal-forms-portal-ai-wdv946-exact-ai",
    "title": "Legal Forms: Portal AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/portal-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Portal AI\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Portal AI donor inputs",
    "outputLabel": "Portal AI AI response",
    "signals": [
      "Case Id",
      "Message",
      "Message Id",
      "Reason",
      "Session Id"
    ]
  },
  {
    "id": "legal-forms-retainer-trust-reconciliation-1jrytj-exact-ai",
    "title": "Legal Forms: Retainer Trust Reconciliation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from routes/retainerTrustReconciliation.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Retainer Trust Reconciliation\" from legalForms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Retainer Trust Reconciliation donor inputs",
    "outputLabel": "Retainer Trust Reconciliation AI response",
    "signals": [
      "routes/retainerTrustReconciliation.js"
    ]
  },
  {
    "id": "oracle-source-workflow",
    "title": "Oracle Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from oracle.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from oracle to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Oracle source context",
    "outputLabel": "Oracle source analysis",
    "signals": [
      "frontend/src/main",
      "frontend/src/pages/AIAdvanced",
      "frontend/src/pages/AIAssistant",
      "backend/routes/ai-extras",
      "backend/routes/ai",
      "backend/routes/audit-trail",
      "backend/routes/supply-chain",
      "backend/routes/training"
    ]
  },
  {
    "id": "oracle-ai-tools",
    "title": "Oracle AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from oracle.",
    "defaultPrompt": "Review oracle AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Oracle AI prompt or tool context",
    "outputLabel": "Oracle AI tool response",
    "signals": [
      "frontend/src/main.jsx",
      "frontend/src/pages/AIAdvanced.jsx",
      "frontend/src/pages/AIAssistant.jsx",
      "backend/routes/ai-extras.js",
      "backend/routes/ai.js",
      "backend/routes/audit-trail.js",
      "backend/routes/supply-chain.js",
      "backend/routes/training.js"
    ]
  },
  {
    "id": "oracle-ai-advanced-w0lkpr-exact-ai",
    "title": "Oracle: AI Advanced",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAdvanced.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Advanced\" from oracle. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Advanced donor inputs",
    "outputLabel": "AI Advanced AI response",
    "signals": [
      "frontend/src/pages/AIAdvanced.jsx"
    ]
  },
  {
    "id": "oracle-ai-assistant-s3rdmd-exact-ai",
    "title": "Oracle: AI Assistant",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAssistant.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Assistant\" from oracle. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Assistant donor inputs",
    "outputLabel": "AI Assistant AI response",
    "signals": [
      "frontend/src/pages/AIAssistant.jsx"
    ]
  },
  {
    "id": "oracle-ai-extras-12n56q-exact-ai",
    "title": "Oracle: AI Extras",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai-extras.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Extras\" from oracle. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Extras donor inputs",
    "outputLabel": "AI Extras AI response",
    "signals": [
      "Ap Aging = []",
      "Ar Aging = []",
      "Capex Pipeline = []",
      "Entities = []",
      "Horizon Weeks = 12",
      "Jurisdiction = 'US'",
      "Payroll Cadence = 'Biweekly'",
      "Period"
    ]
  },
  {
    "id": "oracle-ai-5cuwes-exact-ai",
    "title": "Oracle: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from oracle. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "All Records",
      "Budget Data",
      "Candidates",
      "Context",
      "Contract Meta",
      "Contract Text",
      "Custom Prompt",
      "Description"
    ]
  },
  {
    "id": "oracle-audit-trail-1i7mu4-exact-ai",
    "title": "Oracle: Audit Trail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/audit-trail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Audit Trail\" from oracle. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Audit Trail donor inputs",
    "outputLabel": "Audit Trail AI response",
    "signals": [
      "Action",
      "Description",
      "Event Id",
      "Event Timestamp",
      "Ip Address",
      "Module",
      "Resource",
      "Resource Id"
    ]
  },
  {
    "id": "oracle-supply-chain-1y5cir-exact-ai",
    "title": "Oracle: Supply Chain",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/supply-chain.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Supply Chain\" from oracle. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Supply Chain donor inputs",
    "outputLabel": "Supply Chain AI response",
    "signals": [
      "Actual Delivery",
      "Carrier",
      "Destination",
      "Estimated Delivery",
      "Origin",
      "Shipment Id",
      "Shipping Cost",
      "Status"
    ]
  },
  {
    "id": "oracle-training-1iusxl-exact-ai",
    "title": "Oracle: Training",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/training.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training\" from oracle. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training donor inputs",
    "outputLabel": "Training AI response",
    "signals": [
      "Category",
      "Cost",
      "Course Name",
      "Department",
      "Duration Hours",
      "End Date",
      "Enrolled",
      "Instructor"
    ]
  },
  {
    "id": "small-law-firm-source-workflow",
    "title": "Small Law Firm Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from smallLawFirm.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from smallLawFirm to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Small Law Firm source context",
    "outputLabel": "Small Law Firm source analysis",
    "signals": [
      "src/app/api/auth/verify-email/route",
      "src/app/api/ai/route",
      "src/app/api/ai/legal-research-rag/route",
      "src/app/api/ai/document-assembly/route",
      "src/app/api/ai/deadline-flag/route",
      "src/app/api/ai/contract-assistant/route",
      "src/app/api/ai/billing-optimize/route",
      "src/app/(dashboard)/ai/page"
    ]
  },
  {
    "id": "small-law-firm-ai-tools",
    "title": "Small Law Firm AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from smallLawFirm.",
    "defaultPrompt": "Review smallLawFirm AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Small Law Firm AI prompt or tool context",
    "outputLabel": "Small Law Firm AI tool response",
    "signals": [
      "src/app/api/auth/verify-email/route.ts",
      "src/app/api/ai/route.ts",
      "src/app/api/ai/legal-research-rag/route.ts",
      "src/app/api/ai/document-assembly/route.ts",
      "src/app/api/ai/deadline-flag/route.ts",
      "src/app/api/ai/contract-assistant/route.ts",
      "src/app/api/ai/billing-optimize/route.ts",
      "src/app/(dashboard)/ai/page.tsx"
    ]
  },
  {
    "id": "small-law-firm-route-cjotr3-exact-ai",
    "title": "Small Law Firm: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/auth/verify-email/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Token"
    ]
  },
  {
    "id": "small-law-firm-route-1hu7oa-exact-ai",
    "title": "Small Law Firm: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Document Text",
      "Document Type",
      "Prompt"
    ]
  },
  {
    "id": "small-law-firm-route-hgenmv-exact-ai",
    "title": "Small Law Firm: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/legal-research-rag/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/legal-research-rag/route.ts"
    ]
  },
  {
    "id": "small-law-firm-route-8ntcid-exact-ai",
    "title": "Small Law Firm: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/document-assembly/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/document-assembly/route.ts"
    ]
  },
  {
    "id": "small-law-firm-route-x7hs4i-exact-ai",
    "title": "Small Law Firm: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/deadline-flag/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/deadline-flag/route.ts"
    ]
  },
  {
    "id": "small-law-firm-route-1spyee-exact-ai",
    "title": "Small Law Firm: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/contract-assistant/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/contract-assistant/route.ts"
    ]
  },
  {
    "id": "small-law-firm-route-186gwg-exact-ai",
    "title": "Small Law Firm: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/billing-optimize/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/billing-optimize/route.ts"
    ]
  },
  {
    "id": "small-law-firm-page-vngytl-exact-ai",
    "title": "Small Law Firm: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/ai/page.tsx"
    ]
  },
  {
    "id": "small-law-firm-salesforce-source-workflow",
    "title": "Small Law Firm Salesforce Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from smallLawFirm_salesforce.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from smallLawFirm_salesforce to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Small Law Firm Salesforce source context",
    "outputLabel": "Small Law Firm Salesforce source analysis",
    "signals": [
      "prompt-small-law-firm-ai",
      "prompt-small-law-firm-ai",
      "tailwind.config",
      "src/lib/ai",
      "src/lib/email",
      "src/app/api/trust-retainer-reconciliation/route",
      "src/app/api/gap-imap-email-archive/route",
      "src/app/api/auth/verify-email/route"
    ]
  },
  {
    "id": "small-law-firm-salesforce-ai-tools",
    "title": "Small Law Firm Salesforce AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from smallLawFirm_salesforce.",
    "defaultPrompt": "Review smallLawFirm_salesforce AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Small Law Firm Salesforce AI prompt or tool context",
    "outputLabel": "Small Law Firm Salesforce AI tool response",
    "signals": [
      "prompt-small-law-firm-ai.md",
      "prompt-small-law-firm-ai.md",
      "tailwind.config.ts",
      "src/lib/ai.ts",
      "src/lib/email.ts",
      "src/app/api/trust-retainer-reconciliation/route.ts",
      "src/app/api/gap-imap-email-archive/route.ts",
      "src/app/api/auth/verify-email/route.ts"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-zatxu7-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/trust-retainer-reconciliation/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/trust-retainer-reconciliation/route.ts"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-tuh0zy-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/gap-imap-email-archive/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/gap-imap-email-archive/route.ts"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-cjotr3-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/auth/verify-email/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/auth/verify-email/route.ts"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-9hox3b-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/opponent-analysis/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Additional Context",
      "Jurisdiction",
      "Known Cases",
      "Matter Type",
      "Opposing Counsel Name",
      "Opposing Firm",
      "Practice Area"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-1rq7qe-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/multi-jurisdiction-compliance/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Additional Jurisdictions",
      "Client Locations",
      "Matter Description",
      "Practice Area",
      "Primary Jurisdiction",
      "Services Offered"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-103fs4-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/matter-outcome-predict/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Historical Matters = []",
      "Matter Context",
      "Practice Area",
      "Proposed Staffing"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-pij9lq-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/legal-research/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Additional Context",
      "Jurisdiction",
      "Practice Area",
      "Query"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-160y81-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/intake-chatbot-flow/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/intake-chatbot-flow/route.ts"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-7kiszs-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/enhance-description/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Activity Code",
      "Context",
      "Description",
      "Hours",
      "Matter Type"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-1726qi-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/document-draft/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Additional Context",
      "Case Number",
      "Client Name",
      "Court Name",
      "Document Type",
      "Jurisdiction",
      "Opposing Party"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-m1vslq-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/deadline-predictor/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Case Details",
      "Filing Date",
      "Jurisdiction",
      "Matter Type"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-1eon4n-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/conversational-case-companion/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/conversational-case-companion/route.ts"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-hosoy4-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/contract-review/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Client Role",
      "Contract Text",
      "Contract Type",
      "Focus Areas"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-153on4-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/conflict-checker/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Adverse Parties",
      "Known Representations",
      "Prospective Client"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-11xi4w-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/client-intake/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Additional Notes",
      "Budget",
      "Client Type",
      "Company Name",
      "Email",
      "First Name",
      "Last Name",
      "Legal Issue"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-1488fs-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/case-analysis/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Case Description",
      "Evidence",
      "Opposing Arguments",
      "Witnesses"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-1dj68h-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/capture-time/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "End",
      "Start"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-dhprx6-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/billing-intelligence/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/ai/billing-intelligence/route.ts"
    ]
  },
  {
    "id": "small-law-firm-salesforce-route-wa5ntl-exact-ai",
    "title": "Small Law Firm Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/agentic-case-prep/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Case Facts",
      "Jurisdiction",
      "Known Precedents = []",
      "Matter Id",
      "Opponent Name"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-593ktc-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/trust-retainer-reconciliation/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/trust-retainer-reconciliation/page.tsx"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-ouledf-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/gap/imap-email-archive/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/gap/imap-email-archive/page.tsx"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-1xmy26-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/time-capture/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/ai/time-capture/page.tsx"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-12td91-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/opponent-analysis/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/ai/opponent-analysis/page.tsx"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-17bkdk-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/multi-jurisdiction-compliance/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/ai/multi-jurisdiction-compliance/page.tsx"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-16p96r-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/legal-research/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Additional Context",
      "Jurisdiction",
      "Practice Area",
      "Query"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-1onyf4-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/document-drafting/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Additional Context",
      "Case Number",
      "Client Name",
      "Court Name",
      "Document Type",
      "Jurisdiction",
      "Opposing Party"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-x1i7q9-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/deadline-predictor/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/ai/deadline-predictor/page.tsx"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-mz9mmb-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/contract-review/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Client Role",
      "Contract Type",
      "Focus Areas"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-1o00js-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/conflict-checker/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/ai/conflict-checker/page.tsx"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-nupbfy-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/client-intake/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/ai/client-intake/page.tsx"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-10zonc-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/case-analysis/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Case Description",
      "Evidence",
      "Opposing Arguments",
      "Witnesses"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-17e4c3-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(dashboard)/ai/billing-intelligence/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(dashboard)/ai/billing-intelligence/page.tsx"
    ]
  },
  {
    "id": "small-law-firm-salesforce-page-8ecj2z-exact-ai",
    "title": "Small Law Firm Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/(auth)/verify-email/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from smallLawFirm_salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/(auth)/verify-email/page.tsx"
    ]
  }
];
