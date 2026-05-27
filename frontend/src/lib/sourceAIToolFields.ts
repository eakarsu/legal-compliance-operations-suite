export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "court-reporting-transcription-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Court Reporting Transcription workflow and produce audit-ready next actions.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AICourtReportingLegalTranscription"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste Court Reporting Transcription source details, notes, records, or documents.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "AICourtReportingLegalTranscription"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "AICourtReportingLegalTranscription"
    }
  ],
  "ai-contract-lifecycle-manager-ai-advanced-page-f2qrqs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvancedPage.js"
    }
  ],
  "ai-contract-lifecycle-manager-ai-chat-page-96sg50-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Chat Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIChatPage.js"
    }
  ],
  "ai-contract-lifecycle-manager-ai-custom-tools-page-1oyd4w-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Custom Tools Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICustomToolsPage.js"
    }
  ],
  "ai-contract-lifecycle-manager-cf-agentic-contract-negotiation-1pio3j-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Contract Negotiation source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAgenticContractNegotiation.js"
    }
  ],
  "ai-contract-lifecycle-manager-agentic-negotiate-19vf1d-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Negotiate source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticNegotiate.js"
    }
  ],
  "ai-contract-lifecycle-manager-ai-5cuwes-exact-ai": [
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "clause_type",
      "label": "Clause Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_a",
      "label": "Contract A",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_b",
      "label": "Contract B",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_text",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_type",
      "label": "Contract Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_value",
      "label": "Contract Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conversation_id",
      "label": "Conversation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "desired_outcome",
      "label": "Desired Outcome",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "key_terms",
      "label": "Key Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "leverage_points",
      "label": "Leverage Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_terms",
      "label": "Original Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "parties",
      "label": "Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "regulations",
      "label": "Regulations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "review_focus",
      "label": "Review Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-contract-lifecycle-manager-ai-custom-1xv56e-exact-ai": [
    {
      "name": "amendment_id",
      "label": "Amendment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "amendment_text",
      "label": "Amendment Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "clause_type",
      "label": "Clause Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "contract_id",
      "label": "Contract Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "contract_type",
      "label": "Contract Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "counterparty_profile",
      "label": "Counterparty Profile",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "market_changes",
      "label": "Market Changes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "our_position",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "our_priorities",
      "label": "Our Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "party_id",
      "label": "Party Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "party_name",
      "label": "Party Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "regulation_changes",
      "label": "Regulation Changes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "regulations",
      "label": "Regulations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "version_a",
      "label": "Version A",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "version_b",
      "label": "Version B",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    }
  ],
  "ai-contract-lifecycle-manager-ai-new-7q6oy0-exact-ai": [
    {
      "name": "contract_id",
      "label": "Contract Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "contract_text",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-contract-lifecycle-manager-discovery-agents-1a1svb-exact-ai": [
    {
      "name": "case_description",
      "label": "Case Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discoveryAgents.js"
    },
    {
      "name": "document_text",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discoveryAgents.js"
    }
  ],
  "ai-contract-lifecycle-manager-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvancedPage.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "clause_type",
      "label": "Clause Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_a",
      "label": "Contract A",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_b",
      "label": "Contract B",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_text",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_type",
      "label": "Contract Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_value",
      "label": "Contract Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conversation_id",
      "label": "Conversation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "desired_outcome",
      "label": "Desired Outcome",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "key_terms",
      "label": "Key Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "leverage_points",
      "label": "Leverage Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_terms",
      "label": "Original Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "parties",
      "label": "Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "regulations",
      "label": "Regulations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "review_focus",
      "label": "Review Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "amendment_id",
      "label": "Amendment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "amendment_text",
      "label": "Amendment Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "contract_id",
      "label": "Contract Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "counterparty_profile",
      "label": "Counterparty Profile",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "market_changes",
      "label": "Market Changes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "our_position",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "our_priorities",
      "label": "Our Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "party_id",
      "label": "Party Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "party_name",
      "label": "Party Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "regulation_changes",
      "label": "Regulation Changes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "version_a",
      "label": "Version A",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "version_b",
      "label": "Version B",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "case_description",
      "label": "Case Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discoveryAgents.js"
    },
    {
      "name": "document_text",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discoveryAgents.js"
    }
  ],
  "ai-contract-lifecycle-manager-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvancedPage.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "clause_type",
      "label": "Clause Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_a",
      "label": "Contract A",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_b",
      "label": "Contract B",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_text",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_type",
      "label": "Contract Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contract_value",
      "label": "Contract Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conversation_id",
      "label": "Conversation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "desired_outcome",
      "label": "Desired Outcome",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "key_terms",
      "label": "Key Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "leverage_points",
      "label": "Leverage Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_terms",
      "label": "Original Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "parties",
      "label": "Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "regulations",
      "label": "Regulations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "review_focus",
      "label": "Review Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "amendment_id",
      "label": "Amendment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "amendment_text",
      "label": "Amendment Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "contract_id",
      "label": "Contract Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "counterparty_profile",
      "label": "Counterparty Profile",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "market_changes",
      "label": "Market Changes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "our_position",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "our_priorities",
      "label": "Our Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "party_id",
      "label": "Party Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "party_name",
      "label": "Party Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "regulation_changes",
      "label": "Regulation Changes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "version_a",
      "label": "Version A",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "version_b",
      "label": "Version B",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiCustom.js"
    },
    {
      "name": "case_description",
      "label": "Case Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discoveryAgents.js"
    },
    {
      "name": "document_text",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discoveryAgents.js"
    }
  ],
  "ai-contract-negotiation-assistant-ai-chat-uduhmp-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Chat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIChat.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-ai-custom-tools-11qs3x-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Custom Tools source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICustomTools.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-analytics-detail-17qgpg-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Analytics Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AnalyticsDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-cf-agentic-negotiation-modeling-1dl3ej-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Negotiation Modeling source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAgenticNegotiationModeling.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-cf-benchmarking-against-market-w4y92-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Benchmarking Against Market source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfBenchmarkingAgainstMarket.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-clause-detail-17uh91-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Clause Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ClauseDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-compliance-audit-agents-d6dlpp-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Compliance Audit Agents source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ComplianceAuditAgents.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-compliance-detail-35he2j-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Compliance Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ComplianceDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-contract-detail-wy0b1w-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Contract Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContractDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-deadline-detail-8k5kwc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Deadline Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DeadlineDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-gap-all-specialized-analyzers-leaseanalyzer-plainlanguagetransla-ja0x0h-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap All Specialized Analyzers Leaseanalyzer Plainlanguagetransla source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAllSpecializedAnalyzersLeaseanalyzerPlainlanguagetransla.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-lease-analyzer-detail-11nhln-exact-ai": [
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/LeaseAnalyzerDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-nda-generator-detail-2tbxa6-exact-ai": [
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NDAGeneratorDetail.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NDAGeneratorDetail.tsx"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NDAGeneratorDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-negotiation-detail-1wd8nd-exact-ai": [
    {
      "name": "counterProposal",
      "label": "Counter Proposal",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NegotiationDetail.tsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NegotiationDetail.tsx"
    },
    {
      "name": "proposedChanges",
      "label": "Proposed Changes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NegotiationDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-party-detail-7q5n8o-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Party Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PartyDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-plain-language-translator-1u0g9p-exact-ai": [
    {
      "name": "originalText",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlainLanguageTranslator.tsx"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlainLanguageTranslator.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-plain-language-translator-detail-x24e40-exact-ai": [
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlainLanguageTranslatorDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-precedent-finder-detail-1masbz-exact-ai": [
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PrecedentFinderDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-redline-detail-1wgvu6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Redline Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/RedlineDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-risk-clause-highlighter-detail-518otr-exact-ai": [
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/RiskClauseHighlighterDetail.tsx"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/RiskClauseHighlighterDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-risk-detail-14nizy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Risk Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/RiskDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-standard-terms-comparer-detail-xkqaut-exact-ai": [
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/StandardTermsComparerDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-template-detail-wlzhhy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Template Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TemplateDetail.tsx"
    }
  ],
  "ai-contract-negotiation-assistant-agentic-modeling-s3tsjx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Modeling source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticModeling.js"
    }
  ],
  "ai-contract-negotiation-assistant-ai-custom-12wqqq-exact-ai": [
    {
      "name": "additional_clauses",
      "label": "Additional Clauses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "contract_id",
      "label": "Contract Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "contract_type",
      "label": "Contract Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "counterparty_persona",
      "label": "Counterparty Persona",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "our_position",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "our_role = 'buyer'",
      "label": "Our Role = 'Buyer'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "parties",
      "label": "Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "party_id",
      "label": "Party Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "period_days = 365",
      "label": "Period Days = 365",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "policy",
      "label": "Policy",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "proposed_text",
      "label": "Proposed Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "regulations",
      "label": "Regulations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "requirements",
      "label": "Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "rounds = 5",
      "label": "Rounds = 5",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    }
  ],
  "ai-contract-negotiation-assistant-ai-new-46ven9-exact-ai": [
    {
      "name": "clauses",
      "label": "Clauses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "contract_terms",
      "label": "Contract Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "contract_text",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "contract_type",
      "label": "Contract Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "counterparty_profile",
      "label": "Counterparty Profile",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "counterparty_redline",
      "label": "Counterparty Redline",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "dispute_details",
      "label": "Dispute Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "messages",
      "label": "Messages",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "original_clause",
      "label": "Original Clause",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "original_text",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "our_position",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "our_priorities",
      "label": "Our Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "party_perspective",
      "label": "Party Perspective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "proposed_terms",
      "label": "Proposed Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "redlined_text",
      "label": "Redlined Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    }
  ],
  "ai-contract-negotiation-assistant-compliance-audit-agents-re22nf-exact-ai": [
    {
      "name": "control",
      "label": "Control",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "current_state",
      "label": "Current State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "findings",
      "label": "Findings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "requirement",
      "label": "Requirement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    }
  ],
  "ai-contract-negotiation-assistant-gap-all-specialized-analyzers-leaseanalyzer-plainlanguagetransla-n5bryw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap All Specialized Analyzers Leaseanalyzer Plainlanguagetransla source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_all_specialized_analyzers_leaseanalyzer_plainlanguagetransla.js"
    }
  ],
  "ai-contract-negotiation-assistant-plain-language-translator-7yl10n-exact-ai": [
    {
      "name": "originalText",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plainLanguageTranslator.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/plainLanguageTranslator.js"
    }
  ],
  "ai-contract-negotiation-assistant-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Chat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIChat.tsx"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/LeaseAnalyzerDetail.tsx"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NDAGeneratorDetail.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NDAGeneratorDetail.tsx"
    },
    {
      "name": "counterProposal",
      "label": "Counter Proposal",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NegotiationDetail.tsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NegotiationDetail.tsx"
    },
    {
      "name": "proposedChanges",
      "label": "Proposed Changes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NegotiationDetail.tsx"
    },
    {
      "name": "originalText",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlainLanguageTranslator.tsx"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PrecedentFinderDetail.tsx"
    },
    {
      "name": "additional_clauses",
      "label": "Additional Clauses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "contract_id",
      "label": "Contract Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "contract_type",
      "label": "Contract Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "counterparty_persona",
      "label": "Counterparty Persona",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "our_position",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "our_role = 'buyer'",
      "label": "Our Role = 'Buyer'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "parties",
      "label": "Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "party_id",
      "label": "Party Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "period_days = 365",
      "label": "Period Days = 365",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "policy",
      "label": "Policy",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "proposed_text",
      "label": "Proposed Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "regulations",
      "label": "Regulations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "requirements",
      "label": "Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "rounds = 5",
      "label": "Rounds = 5",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "clauses",
      "label": "Clauses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "contract_terms",
      "label": "Contract Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "contract_text",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "counterparty_profile",
      "label": "Counterparty Profile",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "counterparty_redline",
      "label": "Counterparty Redline",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "dispute_details",
      "label": "Dispute Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "messages",
      "label": "Messages",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "original_clause",
      "label": "Original Clause",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "original_text",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "our_priorities",
      "label": "Our Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "party_perspective",
      "label": "Party Perspective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "proposed_terms",
      "label": "Proposed Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "redlined_text",
      "label": "Redlined Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "control",
      "label": "Control",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "current_state",
      "label": "Current State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "findings",
      "label": "Findings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "requirement",
      "label": "Requirement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    }
  ],
  "ai-contract-negotiation-assistant-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Chat source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIChat.tsx"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/LeaseAnalyzerDetail.tsx"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NDAGeneratorDetail.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NDAGeneratorDetail.tsx"
    },
    {
      "name": "counterProposal",
      "label": "Counter Proposal",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NegotiationDetail.tsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NegotiationDetail.tsx"
    },
    {
      "name": "proposedChanges",
      "label": "Proposed Changes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NegotiationDetail.tsx"
    },
    {
      "name": "originalText",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlainLanguageTranslator.tsx"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PrecedentFinderDetail.tsx"
    },
    {
      "name": "additional_clauses",
      "label": "Additional Clauses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "contract_id",
      "label": "Contract Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "contract_type",
      "label": "Contract Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "counterparty_persona",
      "label": "Counterparty Persona",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "our_position",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "our_role = 'buyer'",
      "label": "Our Role = 'Buyer'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "parties",
      "label": "Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "party_id",
      "label": "Party Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "period_days = 365",
      "label": "Period Days = 365",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "policy",
      "label": "Policy",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "proposed_text",
      "label": "Proposed Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "regulations",
      "label": "Regulations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "requirements",
      "label": "Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "rounds = 5",
      "label": "Rounds = 5",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiCustom.js"
    },
    {
      "name": "clauses",
      "label": "Clauses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "contract_terms",
      "label": "Contract Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "contract_text",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "counterparty_profile",
      "label": "Counterparty Profile",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "counterparty_redline",
      "label": "Counterparty Redline",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "dispute_details",
      "label": "Dispute Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "messages",
      "label": "Messages",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "original_clause",
      "label": "Original Clause",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "original_text",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "our_priorities",
      "label": "Our Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "party_perspective",
      "label": "Party Perspective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "proposed_terms",
      "label": "Proposed Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "redlined_text",
      "label": "Redlined Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "control",
      "label": "Control",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "current_state",
      "label": "Current State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "findings",
      "label": "Findings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "requirement",
      "label": "Requirement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/complianceAuditAgents.js"
    }
  ],
  "ai-court-reporting-legal-transcription-ai-j615h1-exact-ai": [
    {
      "name": "case_summary",
      "label": "Case Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "claims",
      "label": "Claims",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deliveries",
      "label": "Deliveries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "events",
      "label": "Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "exhibit_label",
      "label": "Exhibit Label",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "exhibit_text",
      "label": "Exhibit Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "invoice_details",
      "label": "Invoice Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "jobs",
      "label": "Jobs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "known_witnesses",
      "label": "Known Witnesses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "reporters",
      "label": "Reporters",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "summary_type = 'detailed'",
      "label": "Summary Type = 'Detailed'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "term",
      "label": "Term",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transcript_text",
      "label": "Transcript Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-court-reporting-legal-transcription-gap-videosyncs-lacks-ai-driven-audio-video-alignment-1mo7xb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Videosyncs Lacks AI Driven Audio Video Alignment source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_videosyncs_lacks_ai_driven_audio_video_alignment.js"
    }
  ],
  "ai-court-reporting-legal-transcription-ai-features-new-page-x583dy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features New Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIFeaturesNewPage.js"
    }
  ],
  "ai-court-reporting-legal-transcription-ai-features-page-19vw8g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIFeaturesPage.js"
    }
  ],
  "ai-court-reporting-legal-transcription-gap-videosyncs-lacks-ai-driven-audio-video-alignment-40679t-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Videosyncs Lacks AI Driven Audio Video Alignment source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapVideosyncsLacksAiDrivenAudioVideoAlignment.js"
    }
  ],
  "ai-court-reporting-legal-transcription-source-workflow": [
    {
      "name": "case_summary",
      "label": "Case Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "claims",
      "label": "Claims",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deliveries",
      "label": "Deliveries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "events",
      "label": "Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "exhibit_label",
      "label": "Exhibit Label",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "exhibit_text",
      "label": "Exhibit Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "invoice_details",
      "label": "Invoice Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "jobs",
      "label": "Jobs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "known_witnesses",
      "label": "Known Witnesses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "reporters",
      "label": "Reporters",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "summary_type = 'detailed'",
      "label": "Summary Type = 'Detailed'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "term",
      "label": "Term",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transcript_text",
      "label": "Transcript Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Videosyncs Lacks AI Driven Audio Video Alignment source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_videosyncs_lacks_ai_driven_audio_video_alignment.js"
    }
  ],
  "ai-court-reporting-legal-transcription-ai-tools": [
    {
      "name": "case_summary",
      "label": "Case Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "claims",
      "label": "Claims",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deliveries",
      "label": "Deliveries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "events",
      "label": "Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "exhibit_label",
      "label": "Exhibit Label",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "exhibit_text",
      "label": "Exhibit Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "invoice_details",
      "label": "Invoice Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "jobs",
      "label": "Jobs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "known_witnesses",
      "label": "Known Witnesses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "reporters",
      "label": "Reporters",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "summary_type = 'detailed'",
      "label": "Summary Type = 'Detailed'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "term",
      "label": "Term",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transcript_text",
      "label": "Transcript Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Videosyncs Lacks AI Driven Audio Video Alignment source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_videosyncs_lacks_ai_driven_audio_video_alignment.js"
    }
  ],
  "ai-divorce-family-law-navigator-ai-center-14mie6-exact-ai": [
    {
      "name": "featureId",
      "label": "Feature Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    }
  ],
  "ai-divorce-family-law-navigator-ai-new-1l6olc-exact-ai": [
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "case_facts",
      "label": "Case Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "case_type",
      "label": "Case Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "child_factors",
      "label": "Child Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "claims",
      "label": "Claims",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "contested",
      "label": "Contested",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "custody_facts",
      "label": "Custody Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "document_text",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "draft",
      "label": "Draft",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "facts",
      "label": "Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "messages",
      "label": "Messages",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "new_message",
      "label": "New Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "parties",
      "label": "Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-divorce-family-law-navigator-ai-center-42pwwt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    }
  ],
  "ai-divorce-family-law-navigator-source-workflow": [
    {
      "name": "featureId",
      "label": "Feature Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "case_facts",
      "label": "Case Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "case_type",
      "label": "Case Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "child_factors",
      "label": "Child Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "claims",
      "label": "Claims",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "contested",
      "label": "Contested",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "custody_facts",
      "label": "Custody Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "document_text",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "draft",
      "label": "Draft",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "facts",
      "label": "Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "messages",
      "label": "Messages",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "new_message",
      "label": "New Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "parties",
      "label": "Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    }
  ],
  "ai-divorce-family-law-navigator-ai-tools": [
    {
      "name": "featureId",
      "label": "Feature Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiCenter.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "case_facts",
      "label": "Case Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "case_type",
      "label": "Case Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "child_factors",
      "label": "Child Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "claims",
      "label": "Claims",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "contested",
      "label": "Contested",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "custody_facts",
      "label": "Custody Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "document_text",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "draft",
      "label": "Draft",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "facts",
      "label": "Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "messages",
      "label": "Messages",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "new_message",
      "label": "New Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "parties",
      "label": "Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    }
  ],
  "a-ie-discovery-system-agentic-search-chain-page-1o7klm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Search Chain Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticSearchChainPage.jsx"
    }
  ],
  "a-ie-discovery-system-email-thread-cluster-page-1npt45-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Email Thread Cluster Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/EmailThreadClusterPage.jsx"
    }
  ],
  "a-ie-discovery-system-feature-detail-page-1aef0j-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Feature Detail Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FeatureDetailPage.jsx"
    }
  ],
  "a-ie-discovery-system-agentic-discovery-ibk6md-exact-ai": [
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticDiscovery.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticDiscovery.js"
    }
  ],
  "a-ie-discovery-system-ai-5cuwes-exact-ai": [
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "case_themes",
      "label": "Case Themes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "custodian_id",
      "label": "Custodian Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "doc_count_override",
      "label": "Doc Count Override",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "document_id",
      "label": "Document Id",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "document_ids",
      "label": "Document Ids",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "expected_review_pace_per_hour",
      "label": "Expected Review Pace Per Hour",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hourly_rate",
      "label": "Hourly Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "objective",
      "label": "Objective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "samples",
      "label": "Samples",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_name",
      "label": "Witness Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "a-ie-discovery-system-ai-extra-zoriwe-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Extra source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/aiExtra.js"
    }
  ],
  "a-ie-discovery-system-chain-of-custody-16nu2d-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/chainOfCustody.js"
    },
    {
      "name": "actor_email",
      "label": "Actor Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/chainOfCustody.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/chainOfCustody.js"
    },
    {
      "name": "document_id",
      "label": "Document Id",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/chainOfCustody.js"
    }
  ],
  "a-ie-discovery-system-email-thread-analysis-i8gdfw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Email Thread Analysis source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreadAnalysis.js"
    }
  ],
  "a-ie-discovery-system-email-threads-8q94zx-exact-ai": [
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "has_attachments",
      "label": "Has Attachments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "key_participants",
      "label": "Key Participants",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "message_count",
      "label": "Message Count",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "participant_count",
      "label": "Participant Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "relevance_score",
      "label": "Relevance Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "sentiment",
      "label": "Sentiment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "thread_subject",
      "label": "Thread Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "thread_summary",
      "label": "Thread Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    }
  ],
  "a-ie-discovery-system-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Search Chain Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticSearchChainPage.jsx"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticDiscovery.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticDiscovery.js"
    },
    {
      "name": "case_themes",
      "label": "Case Themes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "custodian_id",
      "label": "Custodian Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "doc_count_override",
      "label": "Doc Count Override",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "document_id",
      "label": "Document Id",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "document_ids",
      "label": "Document Ids",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "expected_review_pace_per_hour",
      "label": "Expected Review Pace Per Hour",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hourly_rate",
      "label": "Hourly Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "objective",
      "label": "Objective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "samples",
      "label": "Samples",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_name",
      "label": "Witness Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/chainOfCustody.js"
    },
    {
      "name": "actor_email",
      "label": "Actor Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/chainOfCustody.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/chainOfCustody.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "has_attachments",
      "label": "Has Attachments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "key_participants",
      "label": "Key Participants",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "message_count",
      "label": "Message Count",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "participant_count",
      "label": "Participant Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "relevance_score",
      "label": "Relevance Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "sentiment",
      "label": "Sentiment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "thread_subject",
      "label": "Thread Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "thread_summary",
      "label": "Thread Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    }
  ],
  "a-ie-discovery-system-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Search Chain Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticSearchChainPage.jsx"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticDiscovery.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticDiscovery.js"
    },
    {
      "name": "case_themes",
      "label": "Case Themes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "custodian_id",
      "label": "Custodian Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "doc_count_override",
      "label": "Doc Count Override",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "document_id",
      "label": "Document Id",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "document_ids",
      "label": "Document Ids",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "expected_review_pace_per_hour",
      "label": "Expected Review Pace Per Hour",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hourly_rate",
      "label": "Hourly Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "objective",
      "label": "Objective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "samples",
      "label": "Samples",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_name",
      "label": "Witness Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/chainOfCustody.js"
    },
    {
      "name": "actor_email",
      "label": "Actor Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/chainOfCustody.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/chainOfCustody.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "has_attachments",
      "label": "Has Attachments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "key_participants",
      "label": "Key Participants",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "message_count",
      "label": "Message Count",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "participant_count",
      "label": "Participant Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "relevance_score",
      "label": "Relevance Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "sentiment",
      "label": "Sentiment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "thread_subject",
      "label": "Thread Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    },
    {
      "name": "thread_summary",
      "label": "Thread Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/emailThreads.js"
    }
  ],
  "ai-regulatory-compliance-ai-assistant-uzhtm5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Assistant source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.js"
    }
  ],
  "ai-regulatory-compliance-audit-trail-gh3eym-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditTrail.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditTrail.js"
    }
  ],
  "ai-regulatory-compliance-cf-aigenerated-audit-documentation-awfz04-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Aigenerated Audit Documentation source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAigeneratedAuditDocumentation.jsx"
    }
  ],
  "ai-regulatory-compliance-gap-no-compliancegapfinder-against-selected-fram-1cm2fl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Compliancegapfinder Against Selected Fram source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoCompliancegapfinderAgainstSelectedFram.jsx"
    }
  ],
  "ai-regulatory-compliance-gap-no-remediationplanner-ai-1ql8v1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Remediationplanner AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoRemediationplannerAi.jsx"
    }
  ],
  "ai-regulatory-compliance-gap-no-vendorriskscorer-thirdparty-risk-ai-13aqu3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Vendorriskscorer Thirdparty Risk AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoVendorriskscorerThirdpartyRiskAi.jsx"
    }
  ],
  "ai-regulatory-compliance-training-19tyim-exact-ai": [
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "completion_status",
      "label": "Completion Status",
      "type": "text",
      "defaultValue": "not_started",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "course_name",
      "label": "Course Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "expiry_date",
      "label": "Expiry Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    }
  ],
  "ai-regulatory-compliance-training-tracker-3s3ond-exact-ai": [
    {
      "name": "completed_courses",
      "label": "Completed Courses",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "compliance_status",
      "label": "Status",
      "type": "badge",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "due_date",
      "label": "Due Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "employee_id",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "first_name",
      "label": "Employee",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "next_training",
      "label": "Next Training",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "overall_score",
      "label": "Overall Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "required_courses",
      "label": "Required Courses",
      "type": "number",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "skill_gaps",
      "label": "Skill Gaps",
      "type": "json",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "training_program",
      "label": "Training Program",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    }
  ],
  "ai-regulatory-compliance-ai-continuous-monitor-o4i1aw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Continuous Monitor source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai-continuous-monitor.js"
    }
  ],
  "ai-regulatory-compliance-ai-1lp99l-exact-ai": [
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "companyContext",
      "label": "Company Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "controls",
      "label": "Controls",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "conversationHistory = []",
      "label": "Conversation History = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentControls",
      "label": "Current Controls",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "documentContent",
      "label": "Document Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "evidenceContext",
      "label": "Evidence Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "frameworkName",
      "label": "Framework Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "incidentData",
      "label": "Incident Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "organizationData",
      "label": "Organization Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "policies",
      "label": "Policies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "policyType",
      "label": "Policy Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "regulationContext",
      "label": "Regulation Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "regulationData",
      "label": "Regulation Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "regulationName",
      "label": "Regulation Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "requirements",
      "label": "Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "vendorData",
      "label": "Vendor Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "violationData",
      "label": "Violation Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-regulatory-compliance-gap-no-compliancegapfinder-against-selected-fram-1ua4fa-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-no-compliancegapfinder-against-selected-fram.js"
    }
  ],
  "ai-regulatory-compliance-gap-no-remediationplanner-ai-sqbfly-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-no-remediationplanner-ai.js"
    }
  ],
  "ai-regulatory-compliance-gap-no-vendorriskscorer-thirdparty-risk-ai-11ztwb-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-no-vendorriskscorer-thirdparty-risk-ai.js"
    }
  ],
  "ai-regulatory-compliance-training-xs91zl-exact-ai": [
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "certificate_url",
      "label": "Certificate Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "completion_status",
      "label": "Completion Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "course_name",
      "label": "Course Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "expiry_date",
      "label": "Expiry Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "ids",
      "label": "Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "updates",
      "label": "Updates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    }
  ],
  "ai-regulatory-compliance-training-tracker-6uq8zt-exact-ai": [
    {
      "name": "completed_courses",
      "label": "Completed Courses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/trainingTracker.js"
    },
    {
      "name": "compliance_status",
      "label": "Compliance Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/trainingTracker.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/trainingTracker.js"
    },
    {
      "name": "due_date",
      "label": "Due Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/trainingTracker.js"
    },
    {
      "name": "employee_id",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/trainingTracker.js"
    },
    {
      "name": "ids",
      "label": "Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/trainingTracker.js"
    },
    {
      "name": "next_training",
      "label": "Next Training",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/trainingTracker.js"
    },
    {
      "name": "overall_score",
      "label": "Overall Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/trainingTracker.js"
    },
    {
      "name": "required_courses",
      "label": "Required Courses",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/trainingTracker.js"
    },
    {
      "name": "training_program",
      "label": "Training Program",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/trainingTracker.js"
    },
    {
      "name": "updates",
      "label": "Updates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/trainingTracker.js"
    }
  ],
  "ai-regulatory-compliance-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Assistant source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.js"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditTrail.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditTrail.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "completion_status",
      "label": "Completion Status",
      "type": "text",
      "defaultValue": "not_started",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "course_name",
      "label": "Course Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "expiry_date",
      "label": "Expiry Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "completed_courses",
      "label": "Completed Courses",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "compliance_status",
      "label": "Status",
      "type": "badge",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "due_date",
      "label": "Due Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "employee_id",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "first_name",
      "label": "Employee",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "next_training",
      "label": "Next Training",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "overall_score",
      "label": "Overall Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "required_courses",
      "label": "Required Courses",
      "type": "number",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "skill_gaps",
      "label": "Skill Gaps",
      "type": "json",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "training_program",
      "label": "Training Program",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "companyContext",
      "label": "Company Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "controls",
      "label": "Controls",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "conversationHistory = []",
      "label": "Conversation History = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentControls",
      "label": "Current Controls",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "documentContent",
      "label": "Document Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "evidenceContext",
      "label": "Evidence Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "frameworkName",
      "label": "Framework Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "incidentData",
      "label": "Incident Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "organizationData",
      "label": "Organization Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "policies",
      "label": "Policies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "policyType",
      "label": "Policy Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "regulationContext",
      "label": "Regulation Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "regulationData",
      "label": "Regulation Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "regulationName",
      "label": "Regulation Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "requirements",
      "label": "Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "vendorData",
      "label": "Vendor Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "violationData",
      "label": "Violation Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-no-compliancegapfinder-against-selected-fram.js"
    },
    {
      "name": "certificate_url",
      "label": "Certificate Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "ids",
      "label": "Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "updates",
      "label": "Updates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    }
  ],
  "ai-regulatory-compliance-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Assistant source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.js"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditTrail.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditTrail.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "completion_status",
      "label": "Completion Status",
      "type": "text",
      "defaultValue": "not_started",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "course_name",
      "label": "Course Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "expiry_date",
      "label": "Expiry Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Training.js"
    },
    {
      "name": "completed_courses",
      "label": "Completed Courses",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "compliance_status",
      "label": "Status",
      "type": "badge",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "due_date",
      "label": "Due Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "employee_id",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "first_name",
      "label": "Employee",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "next_training",
      "label": "Next Training",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "overall_score",
      "label": "Overall Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "required_courses",
      "label": "Required Courses",
      "type": "number",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "skill_gaps",
      "label": "Skill Gaps",
      "type": "json",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "training_program",
      "label": "Training Program",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingTracker.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "companyContext",
      "label": "Company Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "controls",
      "label": "Controls",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "conversationHistory = []",
      "label": "Conversation History = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "currentControls",
      "label": "Current Controls",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "documentContent",
      "label": "Document Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "evidenceContext",
      "label": "Evidence Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "frameworkName",
      "label": "Framework Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "incidentData",
      "label": "Incident Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "organizationData",
      "label": "Organization Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "policies",
      "label": "Policies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "policyType",
      "label": "Policy Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "regulationContext",
      "label": "Regulation Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "regulationData",
      "label": "Regulation Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "regulationName",
      "label": "Regulation Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "requirements",
      "label": "Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "vendorData",
      "label": "Vendor Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "violationData",
      "label": "Violation Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-no-compliancegapfinder-against-selected-fram.js"
    },
    {
      "name": "certificate_url",
      "label": "Certificate Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "ids",
      "label": "Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    },
    {
      "name": "updates",
      "label": "Updates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/training.js"
    }
  ],
  "ai-revenue-recognition-engine-gap-no-customer-churnretention-risk-ai-98w8h3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Customer Churnretention Risk AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoCustomerChurnretentionRiskAi.jsx"
    }
  ],
  "ai-revenue-recognition-engine-gap-no-performanceobligationtracking-ai-progress-mk3w7i-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Performanceobligationtracking AI Progress source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoPerformanceobligationtrackingAiProgress.jsx"
    }
  ],
  "ai-revenue-recognition-engine-ai-amendment-impact-tauirr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Amendment Impact source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-amendment-impact.js"
    }
  ],
  "ai-revenue-recognition-engine-ai-5cuwes-exact-ai": [
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-revenue-recognition-engine-audit-trail-1i7mu4-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "changes",
      "label": "Changes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    }
  ],
  "ai-revenue-recognition-engine-gap-no-customer-churnretention-risk-ai-1o8hir-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-customer-churnretention-risk-ai.js"
    }
  ],
  "ai-revenue-recognition-engine-gap-no-performanceobligationtracking-ai-progress-6kw5zv-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-performanceobligationtracking-ai-progress.js"
    }
  ],
  "ai-revenue-recognition-engine-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Customer Churnretention Risk AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoCustomerChurnretentionRiskAi.jsx"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "changes",
      "label": "Changes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-customer-churnretention-risk-ai.js"
    }
  ],
  "ai-revenue-recognition-engine-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Customer Churnretention Risk AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoCustomerChurnretentionRiskAi.jsx"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "changes",
      "label": "Changes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-customer-churnretention-risk-ai.js"
    }
  ],
  "ai-small-claims-court-guide-case-detail-1hmy88-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Case Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CaseDetail.jsx"
    }
  ],
  "ai-small-claims-court-guide-complaint-draft-11iyma-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Complaint Draft source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ComplaintDraft.jsx"
    }
  ],
  "ai-small-claims-court-guide-ai-case-evaluation-1wwpqg-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Case Evaluation source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-case-evaluation.js"
    }
  ],
  "ai-small-claims-court-guide-ai-5cuwes-exact-ai": [
    {
      "name": "alleged_errors",
      "label": "Alleged Errors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claim_amount",
      "label": "Claim Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claim_summary",
      "label": "Claim Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "county",
      "label": "County",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "deadline_known",
      "label": "Deadline Known",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "defendant_position",
      "label": "Defendant Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dispute_type",
      "label": "Dispute Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "evidence_items",
      "label": "Evidence Items",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "facts",
      "label": "Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "judgment_amount",
      "label": "Judgment Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "prior_offers",
      "label": "Prior Offers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ruling_summary",
      "label": "Ruling Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "user_answers",
      "label": "User Answers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_known_facts",
      "label": "Witness Known Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_role",
      "label": "Witness Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-small-claims-court-guide-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Case Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CaseDetail.jsx"
    },
    {
      "name": "alleged_errors",
      "label": "Alleged Errors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claim_amount",
      "label": "Claim Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claim_summary",
      "label": "Claim Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "county",
      "label": "County",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "deadline_known",
      "label": "Deadline Known",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "defendant_position",
      "label": "Defendant Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dispute_type",
      "label": "Dispute Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "evidence_items",
      "label": "Evidence Items",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "facts",
      "label": "Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "judgment_amount",
      "label": "Judgment Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "prior_offers",
      "label": "Prior Offers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ruling_summary",
      "label": "Ruling Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "user_answers",
      "label": "User Answers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_known_facts",
      "label": "Witness Known Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_role",
      "label": "Witness Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-small-claims-court-guide-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Case Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CaseDetail.jsx"
    },
    {
      "name": "alleged_errors",
      "label": "Alleged Errors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claim_amount",
      "label": "Claim Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claim_summary",
      "label": "Claim Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "county",
      "label": "County",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "deadline_known",
      "label": "Deadline Known",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "defendant_position",
      "label": "Defendant Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dispute_type",
      "label": "Dispute Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "evidence_items",
      "label": "Evidence Items",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "facts",
      "label": "Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "judgment_amount",
      "label": "Judgment Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "prior_offers",
      "label": "Prior Offers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ruling_summary",
      "label": "Ruling Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "user_answers",
      "label": "User Answers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_known_facts",
      "label": "Witness Known Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_role",
      "label": "Witness Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-smart-contract-auditor-gap-no-formalverificationsuggestion-ai-k9jq2u-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Formalverificationsuggestion AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoFormalverificationsuggestionAi.tsx"
    }
  ],
  "ai-smart-contract-auditor-gap-no-gasestimation-deployment-cost-ai-w6wb04-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Gasestimation Deployment Cost AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoGasestimationDeploymentCostAi.tsx"
    }
  ],
  "ai-smart-contract-auditor-gap-no-multichain-support-evmonly-assumed-yac2c9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Multichain Support Evmonly Assumed source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoMultichainSupportEvmonlyAssumed.tsx"
    }
  ],
  "ai-smart-contract-auditor-project-detail-4cxfay-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Project Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/projects/ProjectDetail.tsx"
    }
  ],
  "ai-smart-contract-auditor-contract-detail-1k4pas-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Contract Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/contracts/ContractDetail.tsx"
    }
  ],
  "ai-smart-contract-auditor-template-detail-1k4dh1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Template Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/compliance-templates/TemplateDetail.tsx"
    }
  ],
  "ai-smart-contract-auditor-audit-report-detail-13qmgl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Audit Report Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/audits/AuditReportDetail.tsx"
    }
  ],
  "ai-smart-contract-auditor-audit-history-detail-1ttf8g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Audit History Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/audit-history/AuditHistoryDetail.tsx"
    }
  ],
  "ai-smart-contract-auditor-advanced-analysis-tp0w7w-exact-ai": [
    {
      "name": "currentPattern",
      "label": "Current Pattern",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "expectedFunctions",
      "label": "Expected Functions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "propertiesOfInterest",
      "label": "Properties Of Interest",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "similarContractName",
      "label": "Similar Contract Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "sourceCode",
      "label": "Source Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "targetGoal",
      "label": "Target Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    }
  ],
  "ai-smart-contract-auditor-code-quality-laxqr4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Code Quality source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/CodeQuality.tsx"
    }
  ],
  "ai-smart-contract-auditor-compliance-checking-1u7r65-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Compliance Checking source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/ComplianceChecking.tsx"
    }
  ],
  "ai-smart-contract-auditor-gas-optimization-kedsxw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gas Optimization source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/GasOptimization.tsx"
    }
  ],
  "ai-smart-contract-auditor-reentrancy-detection-1bcsts-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Reentrancy Detection source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/ReentrancyDetection.tsx"
    }
  ],
  "ai-smart-contract-auditor-test-generation-1udsuq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Test Generation source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/TestGeneration.tsx"
    }
  ],
  "ai-smart-contract-auditor-vulnerability-detection-xml34b-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Vulnerability Detection source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/VulnerabilityDetection.tsx"
    }
  ],
  "ai-smart-contract-auditor-ai-continuous-monitor-o4i1mu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Continuous Monitor source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai-continuous-monitor.ts"
    }
  ],
  "ai-smart-contract-auditor-ai-1lp99q-exact-ai": [
    {
      "name": "auditReportId",
      "label": "Audit Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "contractId",
      "label": "Contract Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "contractIds",
      "label": "Contract Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "currentPattern",
      "label": "Current Pattern",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "expectedFunctions",
      "label": "Expected Functions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "propertiesOfInterest",
      "label": "Properties Of Interest",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "scanTypes = ['vulnerability_scan']",
      "label": "Scan Types = ['Vulnerability Scan']",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "similarContractName",
      "label": "Similar Contract Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "sourceCode",
      "label": "Source Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "standard",
      "label": "Standard",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "targetGoal",
      "label": "Target Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    }
  ],
  "ai-smart-contract-auditor-gap-no-formalverificationsuggestion-ai-oibaur-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-no-formalverificationsuggestion-ai.ts"
    }
  ],
  "ai-smart-contract-auditor-gap-no-gasestimation-deployment-cost-ai-8ohwch-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-no-gasestimation-deployment-cost-ai.ts"
    }
  ],
  "ai-smart-contract-auditor-gap-no-multichain-support-evmonly-assumed-gm7ugc-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-no-multichain-support-evmonly-assumed.ts"
    }
  ],
  "ai-smart-contract-auditor-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Formalverificationsuggestion AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoFormalverificationsuggestionAi.tsx"
    },
    {
      "name": "currentPattern",
      "label": "Current Pattern",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "expectedFunctions",
      "label": "Expected Functions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "propertiesOfInterest",
      "label": "Properties Of Interest",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "similarContractName",
      "label": "Similar Contract Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "sourceCode",
      "label": "Source Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "targetGoal",
      "label": "Target Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "auditReportId",
      "label": "Audit Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "contractId",
      "label": "Contract Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "contractIds",
      "label": "Contract Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "scanTypes = ['vulnerability_scan']",
      "label": "Scan Types = ['Vulnerability Scan']",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "standard",
      "label": "Standard",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-no-formalverificationsuggestion-ai.ts"
    }
  ],
  "ai-smart-contract-auditor-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Formalverificationsuggestion AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoFormalverificationsuggestionAi.tsx"
    },
    {
      "name": "currentPattern",
      "label": "Current Pattern",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "expectedFunctions",
      "label": "Expected Functions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "propertiesOfInterest",
      "label": "Properties Of Interest",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "similarContractName",
      "label": "Similar Contract Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "sourceCode",
      "label": "Source Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "targetGoal",
      "label": "Target Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ai/AdvancedAnalysis.tsx"
    },
    {
      "name": "auditReportId",
      "label": "Audit Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "contractId",
      "label": "Contract Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "contractIds",
      "label": "Contract Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "scanTypes = ['vulnerability_scan']",
      "label": "Scan Types = ['Vulnerability Scan']",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "standard",
      "label": "Standard",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap-no-formalverificationsuggestion-ai.ts"
    }
  ],
  "aisox-audit-automation-ai-j615h1-exact-ai": [
    {
      "name": "assessmentId",
      "label": "Assessment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "auditType",
      "label": "Audit Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "contextNotes",
      "label": "Context Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "controlId",
      "label": "Control Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deficiencyId",
      "label": "Deficiency Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "entityId",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "entityName",
      "label": "Entity Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "entityType",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "entries",
      "label": "Entries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "evidenceDescription",
      "label": "Evidence Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "evidenceMetadata",
      "label": "Evidence Metadata",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "feed = 'GL'",
      "label": "Feed = 'GL'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "feed_type",
      "label": "Feed Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "incidentId",
      "label": "Incident Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "itgcId",
      "label": "Itgc Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lookback_period",
      "label": "Lookback Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "materiality_threshold",
      "label": "Materiality Threshold",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "materialityThreshold",
      "label": "Materiality Threshold",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "newState",
      "label": "New State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "planId",
      "label": "Plan Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "policyId",
      "label": "Policy Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "populationSize",
      "label": "Population Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "reportId",
      "label": "Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "reviewId",
      "label": "Review Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "riskId",
      "label": "Risk Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "riskLevel",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sodId",
      "label": "Sod Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transactions",
      "label": "Transactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "walkthroughId",
      "label": "Walkthrough Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "aisox-audit-automation-gap-no-ai-driven-control-to-risk-auto-1fply0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Driven Control To Risk Auto source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoAiDrivenControlToRiskAuto.jsx"
    }
  ],
  "aisox-audit-automation-source-workflow": [
    {
      "name": "assessmentId",
      "label": "Assessment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "auditType",
      "label": "Audit Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "contextNotes",
      "label": "Context Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "controlId",
      "label": "Control Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deficiencyId",
      "label": "Deficiency Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "entityId",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "entityName",
      "label": "Entity Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "entityType",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "entries",
      "label": "Entries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "evidenceDescription",
      "label": "Evidence Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "evidenceMetadata",
      "label": "Evidence Metadata",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "feed = 'GL'",
      "label": "Feed = 'GL'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "feed_type",
      "label": "Feed Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "incidentId",
      "label": "Incident Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "itgcId",
      "label": "Itgc Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lookback_period",
      "label": "Lookback Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "materiality_threshold",
      "label": "Materiality Threshold",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "materialityThreshold",
      "label": "Materiality Threshold",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "newState",
      "label": "New State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "planId",
      "label": "Plan Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "policyId",
      "label": "Policy Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "populationSize",
      "label": "Population Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "reportId",
      "label": "Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "reviewId",
      "label": "Review Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "riskId",
      "label": "Risk Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "riskLevel",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sodId",
      "label": "Sod Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transactions",
      "label": "Transactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "walkthroughId",
      "label": "Walkthrough Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Driven Control To Risk Auto source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoAiDrivenControlToRiskAuto.jsx"
    }
  ],
  "aisox-audit-automation-ai-tools": [
    {
      "name": "assessmentId",
      "label": "Assessment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "auditType",
      "label": "Audit Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "contextNotes",
      "label": "Context Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "controlId",
      "label": "Control Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deficiencyId",
      "label": "Deficiency Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "entityId",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "entityName",
      "label": "Entity Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "entityType",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "entries",
      "label": "Entries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "evidenceDescription",
      "label": "Evidence Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "evidenceMetadata",
      "label": "Evidence Metadata",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "feed = 'GL'",
      "label": "Feed = 'GL'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "feed_type",
      "label": "Feed Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "incidentId",
      "label": "Incident Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "itgcId",
      "label": "Itgc Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lookback_period",
      "label": "Lookback Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "materiality_threshold",
      "label": "Materiality Threshold",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "materialityThreshold",
      "label": "Materiality Threshold",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "newState",
      "label": "New State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "planId",
      "label": "Plan Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "policyId",
      "label": "Policy Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "populationSize",
      "label": "Population Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "reportId",
      "label": "Report Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "reviewId",
      "label": "Review Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "riskId",
      "label": "Risk Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "riskLevel",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sodId",
      "label": "Sod Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transactions",
      "label": "Transactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "walkthroughId",
      "label": "Walkthrough Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Driven Control To Risk Auto source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoAiDrivenControlToRiskAuto.jsx"
    }
  ],
  "ai-sports-agent-contract-analyzer-cf-league-data-ingest-pipelines-with-scheduled-sync-1o2gz3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf League Data Ingest Pipelines With Scheduled Sync source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfLeagueDataIngestPipelinesWithScheduledSync.jsx"
    }
  ],
  "ai-sports-agent-contract-analyzer-cf-market-valuation-engine-trained-on-historical-contracts-bzcs6g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Market Valuation Engine Trained On Historical Contracts source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfMarketValuationEngineTrainedOnHistoricalContracts.jsx"
    }
  ],
  "ai-sports-agent-contract-analyzer-free-agents-page-u37h5w-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Free Agents Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/FreeAgentsPage.jsx"
    }
  ],
  "ai-sports-agent-contract-analyzer-gap-no-ai-driven-player-valuation-models-page-tl1wzf-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Driven Player Valuation Models Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoAiDrivenPlayerValuationModelsPage.jsx"
    }
  ],
  "ai-sports-agent-contract-analyzer-gap-no-ai-suggested-negotiation-tactics-beyond-static-jrh4g8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Suggested Negotiation Tactics Beyond Static source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoAiSuggestedNegotiationTacticsBeyondStatic.jsx"
    }
  ],
  "ai-sports-agent-contract-analyzer-gap-no-multi-party-negotiation-support-agent-team-bcu8ep-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Multi Party Negotiation Support Agent Team source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoMultiPartyNegotiationSupportAgentTeam.jsx"
    }
  ],
  "ai-sports-agent-contract-analyzer-ai-1lp99l-exact-ai": [
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "athlete",
      "label": "Athlete",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "athlete_profile",
      "label": "Athlete Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "contract_terms",
      "label": "Contract Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "counterparty",
      "label": "Counterparty",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "current_salary",
      "label": "Current Salary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "deal_constraints",
      "label": "Deal Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "injury_history",
      "label": "Injury History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "injury_severity",
      "label": "Injury Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "injury_type",
      "label": "Injury Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "leverage_points",
      "label": "Leverage Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "negotiation_id",
      "label": "Negotiation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "player_name",
      "label": "Player Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "position",
      "label": "Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recent_stats",
      "label": "Recent Stats",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "sport",
      "label": "Sport",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "target_salary",
      "label": "Target Salary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-sports-agent-contract-analyzer-free-agents-q5ifn4-exact-ai": [
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "agent_name",
      "label": "Agent Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "injury_history",
      "label": "Injury History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "last_contract_value",
      "label": "Last Contract Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "league",
      "label": "League",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "market_demand",
      "label": "Market Demand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "player_name",
      "label": "Player Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "position",
      "label": "Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "previous_team",
      "label": "Previous Team",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "projected_value",
      "label": "Projected Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "stats_summary",
      "label": "Stats Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "years_experience",
      "label": "Years Experience",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    }
  ],
  "ai-sports-agent-contract-analyzer-gap-no-ai-driven-player-valuation-models-page-exists-no-1je7wq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Driven Player Valuation Models Page Exists No source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gapNoAiDrivenPlayerValuationModelsPageExistsNo.js"
    }
  ],
  "ai-sports-agent-contract-analyzer-gap-no-ai-suggested-negotiation-tactics-beyond-static-analysis-srcrya-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Suggested Negotiation Tactics Beyond Static Analysis source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gapNoAiSuggestedNegotiationTacticsBeyondStaticAnalysis.js"
    }
  ],
  "ai-sports-agent-contract-analyzer-gap-no-multi-party-negotiation-support-agent-team-third-parties-z6po8y-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Multi Party Negotiation Support Agent Team Third Parties source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gapNoMultiPartyNegotiationSupportAgentTeamThirdParties.js"
    }
  ],
  "ai-sports-agent-contract-analyzer-league-data-ingest-sft18c-exact-ai": [
    {
      "name": "items = []",
      "label": "Items = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/leagueDataIngest.js"
    }
  ],
  "ai-sports-agent-contract-analyzer-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf League Data Ingest Pipelines With Scheduled Sync source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfLeagueDataIngestPipelinesWithScheduledSync.jsx"
    },
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "athlete",
      "label": "Athlete",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "athlete_profile",
      "label": "Athlete Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "contract_terms",
      "label": "Contract Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "counterparty",
      "label": "Counterparty",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "current_salary",
      "label": "Current Salary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "deal_constraints",
      "label": "Deal Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "injury_history",
      "label": "Injury History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "injury_severity",
      "label": "Injury Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "injury_type",
      "label": "Injury Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "leverage_points",
      "label": "Leverage Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "negotiation_id",
      "label": "Negotiation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "player_name",
      "label": "Player Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "position",
      "label": "Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recent_stats",
      "label": "Recent Stats",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "sport",
      "label": "Sport",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "target_salary",
      "label": "Target Salary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "agent_name",
      "label": "Agent Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "last_contract_value",
      "label": "Last Contract Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "league",
      "label": "League",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "market_demand",
      "label": "Market Demand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "previous_team",
      "label": "Previous Team",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "projected_value",
      "label": "Projected Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "stats_summary",
      "label": "Stats Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "years_experience",
      "label": "Years Experience",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "items = []",
      "label": "Items = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/leagueDataIngest.js"
    }
  ],
  "ai-sports-agent-contract-analyzer-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf League Data Ingest Pipelines With Scheduled Sync source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfLeagueDataIngestPipelinesWithScheduledSync.jsx"
    },
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "athlete",
      "label": "Athlete",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "athlete_profile",
      "label": "Athlete Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "contract_terms",
      "label": "Contract Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "counterparty",
      "label": "Counterparty",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "current_salary",
      "label": "Current Salary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "deal_constraints",
      "label": "Deal Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "injury_history",
      "label": "Injury History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "injury_severity",
      "label": "Injury Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "injury_type",
      "label": "Injury Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "leverage_points",
      "label": "Leverage Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "negotiation_id",
      "label": "Negotiation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "player_name",
      "label": "Player Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "position",
      "label": "Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recent_stats",
      "label": "Recent Stats",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "sport",
      "label": "Sport",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "target_salary",
      "label": "Target Salary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "agent_name",
      "label": "Agent Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "last_contract_value",
      "label": "Last Contract Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "league",
      "label": "League",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "market_demand",
      "label": "Market Demand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "previous_team",
      "label": "Previous Team",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "projected_value",
      "label": "Projected Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "stats_summary",
      "label": "Stats Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "years_experience",
      "label": "Years Experience",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/free_agents.js"
    },
    {
      "name": "items = []",
      "label": "Items = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/leagueDataIngest.js"
    }
  ],
  "legal-forms-ai-billing-5bvsk9-exact-ai": [
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-billing.js"
    },
    {
      "name": "days",
      "label": "Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-billing.js"
    },
    {
      "name": "sample_notes",
      "label": "Sample Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-billing.js"
    }
  ],
  "legal-forms-ai-calendar-1ikvbu-exact-ai": [
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "case_type",
      "label": "Case Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "discovery_date",
      "label": "Discovery Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "document_text",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "incident_date",
      "label": "Incident Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    }
  ],
  "legal-forms-ai-catalog-17jqn4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Catalog source input context",
      "options": [],
      "required": false,
      "source": "routes/ai-catalog.js"
    }
  ],
  "legal-forms-ai-communications-1p4hl7-exact-ai": [
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "draft_type = 'email'",
      "label": "Draft Type = 'Email'",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "message_content",
      "label": "Message Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "message_id",
      "label": "Message Id",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "subject_line",
      "label": "Subject Line",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "tone = 'professional'",
      "label": "Tone = 'Professional'",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    }
  ],
  "legal-forms-ai-conflicts-1d1z4d-exact-ai": [
    {
      "name": "analysis_type",
      "label": "Analysis Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-conflicts.js"
    },
    {
      "name": "conflict_check_id",
      "label": "Conflict Check Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-conflicts.js"
    },
    {
      "name": "party_names",
      "label": "Party Names",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-conflicts.js"
    }
  ],
  "legal-forms-ai-drafting-12npb6-exact-ai": [
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "custom_prompt",
      "label": "Custom Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "feedback",
      "label": "Feedback",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "feedback_notes",
      "label": "Feedback Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "include_citations",
      "label": "Include Citations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "input_data",
      "label": "Input Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "instructions",
      "label": "Instructions",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "is_public",
      "label": "Is Public",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "length",
      "label": "Length",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "prompt_template",
      "label": "Prompt Template",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "review_mode",
      "label": "Review Mode",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "revision_instructions",
      "label": "Revision Instructions",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "template_id",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "variables",
      "label": "Variables",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    }
  ],
  "legal-forms-ai-ediscovery-uiy44d-exact-ai": [
    {
      "name": "docs",
      "label": "Docs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-ediscovery.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-ediscovery.js"
    },
    {
      "name": "topK = 5",
      "label": "Top K = 5",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-ediscovery.js"
    }
  ],
  "legal-forms-ai-features-1ygs85-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Features source input context",
      "options": [],
      "required": false,
      "source": "routes/ai-features.js"
    }
  ],
  "legal-forms-ai-intake-builder-1vcvf8-exact-ai": [
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake-builder.js"
    },
    {
      "name": "emailText",
      "label": "Email Text",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake-builder.js"
    },
    {
      "name": "formId",
      "label": "Form Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake-builder.js"
    },
    {
      "name": "practiceArea",
      "label": "Practice Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake-builder.js"
    }
  ],
  "legal-forms-ai-intake-coqg7i-exact-ai": [
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake.js"
    },
    {
      "name": "session_id",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake.js"
    }
  ],
  "legal-forms-ai-matter-outcome-1hyneb-exact-ai": [
    {
      "name": "matter",
      "label": "Matter",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-matter-outcome.js"
    },
    {
      "name": "similarMatters = []",
      "label": "Similar Matters = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-matter-outcome.js"
    }
  ],
  "legal-forms-ai-pacer-1blqks-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Pacer source input context",
      "options": [],
      "required": false,
      "source": "routes/ai-pacer.js"
    }
  ],
  "legal-forms-ai-predictions-1w40el-exact-ai": [
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-predictions.js"
    },
    {
      "name": "disclaimer_acknowledged",
      "label": "Disclaimer Acknowledged",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-predictions.js"
    },
    {
      "name": "input_factors",
      "label": "Input Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-predictions.js"
    },
    {
      "name": "prediction_type",
      "label": "Prediction Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-predictions.js"
    }
  ],
  "legal-forms-ai-transcription-1hhtw3-exact-ai": [
    {
      "name": "audioUrl",
      "label": "Audio Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "caseId",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "speaker",
      "label": "Speaker",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "ts",
      "label": "Ts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    }
  ],
  "legal-forms-gap-ai-routes-exist-but-logic-depth-1ytvhv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Routes Exist But Logic Depth source input context",
      "options": [],
      "required": false,
      "source": "routes/gap_ai_routes_exist_but_logic_depth.js"
    }
  ],
  "legal-forms-gap-no-matter-outcome-forecasting-with-explainability-hvdlgt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Matter Outcome Forecasting With Explainability source input context",
      "options": [],
      "required": false,
      "source": "routes/gap_no_matter_outcome_forecasting_with_explainability.js"
    }
  ],
  "legal-forms-gap-no-real-time-courtroom-transcription-agent-1vmfvs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Real Time Courtroom Transcription Agent source input context",
      "options": [],
      "required": false,
      "source": "routes/gap_no_real_time_courtroom_transcription_agent.js"
    }
  ],
  "legal-forms-portal-ai-wdv946-exact-ai": [
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/portal-ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/portal-ai.js"
    },
    {
      "name": "message_id",
      "label": "Message Id",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/portal-ai.js"
    },
    {
      "name": "reason",
      "label": "Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/portal-ai.js"
    },
    {
      "name": "session_id",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/portal-ai.js"
    }
  ],
  "legal-forms-retainer-trust-reconciliation-1jrytj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Retainer Trust Reconciliation source input context",
      "options": [],
      "required": false,
      "source": "routes/retainerTrustReconciliation.js"
    }
  ],
  "legal-forms-source-workflow": [
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-billing.js"
    },
    {
      "name": "days",
      "label": "Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-billing.js"
    },
    {
      "name": "sample_notes",
      "label": "Sample Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-billing.js"
    },
    {
      "name": "case_type",
      "label": "Case Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "discovery_date",
      "label": "Discovery Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "document_text",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "incident_date",
      "label": "Incident Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Catalog source input context",
      "options": [],
      "required": false,
      "source": "routes/ai-catalog.js"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "draft_type = 'email'",
      "label": "Draft Type = 'Email'",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "message_content",
      "label": "Message Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "message_id",
      "label": "Message Id",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "subject_line",
      "label": "Subject Line",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "tone = 'professional'",
      "label": "Tone = 'Professional'",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "analysis_type",
      "label": "Analysis Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-conflicts.js"
    },
    {
      "name": "conflict_check_id",
      "label": "Conflict Check Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-conflicts.js"
    },
    {
      "name": "party_names",
      "label": "Party Names",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-conflicts.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "custom_prompt",
      "label": "Custom Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "feedback",
      "label": "Feedback",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "feedback_notes",
      "label": "Feedback Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "include_citations",
      "label": "Include Citations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "input_data",
      "label": "Input Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "instructions",
      "label": "Instructions",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "is_public",
      "label": "Is Public",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "length",
      "label": "Length",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "prompt_template",
      "label": "Prompt Template",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "review_mode",
      "label": "Review Mode",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "revision_instructions",
      "label": "Revision Instructions",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "template_id",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "variables",
      "label": "Variables",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "docs",
      "label": "Docs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-ediscovery.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-ediscovery.js"
    },
    {
      "name": "topK = 5",
      "label": "Top K = 5",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-ediscovery.js"
    },
    {
      "name": "emailText",
      "label": "Email Text",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake-builder.js"
    },
    {
      "name": "formId",
      "label": "Form Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake-builder.js"
    },
    {
      "name": "practiceArea",
      "label": "Practice Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake-builder.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake.js"
    },
    {
      "name": "session_id",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake.js"
    },
    {
      "name": "matter",
      "label": "Matter",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-matter-outcome.js"
    },
    {
      "name": "similarMatters = []",
      "label": "Similar Matters = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-matter-outcome.js"
    },
    {
      "name": "disclaimer_acknowledged",
      "label": "Disclaimer Acknowledged",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-predictions.js"
    },
    {
      "name": "input_factors",
      "label": "Input Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-predictions.js"
    },
    {
      "name": "prediction_type",
      "label": "Prediction Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-predictions.js"
    },
    {
      "name": "audioUrl",
      "label": "Audio Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "caseId",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "speaker",
      "label": "Speaker",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "ts",
      "label": "Ts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "reason",
      "label": "Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/portal-ai.js"
    }
  ],
  "legal-forms-ai-tools": [
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-billing.js"
    },
    {
      "name": "days",
      "label": "Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-billing.js"
    },
    {
      "name": "sample_notes",
      "label": "Sample Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-billing.js"
    },
    {
      "name": "case_type",
      "label": "Case Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "discovery_date",
      "label": "Discovery Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "document_text",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "incident_date",
      "label": "Incident Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-calendar.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Catalog source input context",
      "options": [],
      "required": false,
      "source": "routes/ai-catalog.js"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "draft_type = 'email'",
      "label": "Draft Type = 'Email'",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "message_content",
      "label": "Message Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "message_id",
      "label": "Message Id",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "subject_line",
      "label": "Subject Line",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "tone = 'professional'",
      "label": "Tone = 'Professional'",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-communications.js"
    },
    {
      "name": "analysis_type",
      "label": "Analysis Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-conflicts.js"
    },
    {
      "name": "conflict_check_id",
      "label": "Conflict Check Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-conflicts.js"
    },
    {
      "name": "party_names",
      "label": "Party Names",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-conflicts.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "custom_prompt",
      "label": "Custom Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "feedback",
      "label": "Feedback",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "feedback_notes",
      "label": "Feedback Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "include_citations",
      "label": "Include Citations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "input_data",
      "label": "Input Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "instructions",
      "label": "Instructions",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "is_public",
      "label": "Is Public",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "length",
      "label": "Length",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "prompt_template",
      "label": "Prompt Template",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "review_mode",
      "label": "Review Mode",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "revision_instructions",
      "label": "Revision Instructions",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "template_id",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "variables",
      "label": "Variables",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-drafting.js"
    },
    {
      "name": "docs",
      "label": "Docs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-ediscovery.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-ediscovery.js"
    },
    {
      "name": "topK = 5",
      "label": "Top K = 5",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-ediscovery.js"
    },
    {
      "name": "emailText",
      "label": "Email Text",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake-builder.js"
    },
    {
      "name": "formId",
      "label": "Form Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake-builder.js"
    },
    {
      "name": "practiceArea",
      "label": "Practice Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake-builder.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake.js"
    },
    {
      "name": "session_id",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-intake.js"
    },
    {
      "name": "matter",
      "label": "Matter",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-matter-outcome.js"
    },
    {
      "name": "similarMatters = []",
      "label": "Similar Matters = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-matter-outcome.js"
    },
    {
      "name": "disclaimer_acknowledged",
      "label": "Disclaimer Acknowledged",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-predictions.js"
    },
    {
      "name": "input_factors",
      "label": "Input Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-predictions.js"
    },
    {
      "name": "prediction_type",
      "label": "Prediction Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-predictions.js"
    },
    {
      "name": "audioUrl",
      "label": "Audio Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "caseId",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "speaker",
      "label": "Speaker",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "ts",
      "label": "Ts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/ai-transcription.js"
    },
    {
      "name": "reason",
      "label": "Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "routes/portal-ai.js"
    }
  ],
  "oracle-ai-advanced-w0lkpr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvanced.jsx"
    }
  ],
  "oracle-ai-assistant-s3rdmd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Assistant source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.jsx"
    }
  ],
  "oracle-ai-extras-12n56q-exact-ai": [
    {
      "name": "apAging = []",
      "label": "Ap Aging = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "arAging = []",
      "label": "Ar Aging = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "capexPipeline = []",
      "label": "Capex Pipeline = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "entities = []",
      "label": "Entities = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "horizonWeeks = 12",
      "label": "Horizon Weeks = 12",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "jurisdiction = 'US'",
      "label": "Jurisdiction = 'US'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "payrollCadence = 'biweekly'",
      "label": "Payroll Cadence = 'Biweekly'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "recentRuleChanges = ''",
      "label": "Recent Rule Changes = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "transactions = []",
      "label": "Transactions = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "userRole = 'employee'",
      "label": "User Role = 'Employee'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    }
  ],
  "oracle-ai-5cuwes-exact-ai": [
    {
      "name": "allRecords",
      "label": "All Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "budgetData",
      "label": "Budget Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "candidates",
      "label": "Candidates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contractMeta",
      "label": "Contract Meta",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contractText",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customPrompt",
      "label": "Custom Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "existingData",
      "label": "Existing Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "fields",
      "label": "Fields",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "moduleTitle",
      "label": "Module Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "niceToHaveSkills",
      "label": "Nice To Have Skills",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "record",
      "label": "Record",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recordCount",
      "label": "Record Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "records",
      "label": "Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "requiredSkills",
      "label": "Required Skills",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "roleTitle",
      "label": "Role Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "taxContext",
      "label": "Tax Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transactions",
      "label": "Transactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "oracle-audit-trail-1i7mu4-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "event_id",
      "label": "Event Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "event_timestamp",
      "label": "Event Timestamp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "ip_address",
      "label": "Ip Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "module",
      "label": "Module",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "resource",
      "label": "Resource",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "resource_id",
      "label": "Resource Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "user_name",
      "label": "User Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "user_role",
      "label": "User Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    }
  ],
  "oracle-supply-chain-1y5cir-exact-ai": [
    {
      "name": "actual_delivery",
      "label": "Actual Delivery",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "carrier",
      "label": "Carrier",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "destination",
      "label": "Destination",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "estimated_delivery",
      "label": "Estimated Delivery",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "origin",
      "label": "Origin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "shipment_id",
      "label": "Shipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "shipping_cost",
      "label": "Shipping Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "tracking_number",
      "label": "Tracking Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "weight_kg",
      "label": "Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    }
  ],
  "oracle-training-1iusxl-exact-ai": [
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "cost",
      "label": "Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "course_name",
      "label": "Course Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "duration_hours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "enrolled",
      "label": "Enrolled",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "instructor",
      "label": "Instructor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "max_participants",
      "label": "Max Participants",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    }
  ],
  "oracle-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvanced.jsx"
    },
    {
      "name": "apAging = []",
      "label": "Ap Aging = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "arAging = []",
      "label": "Ar Aging = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "capexPipeline = []",
      "label": "Capex Pipeline = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "entities = []",
      "label": "Entities = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "horizonWeeks = 12",
      "label": "Horizon Weeks = 12",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "jurisdiction = 'US'",
      "label": "Jurisdiction = 'US'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "payrollCadence = 'biweekly'",
      "label": "Payroll Cadence = 'Biweekly'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "recentRuleChanges = ''",
      "label": "Recent Rule Changes = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "transactions = []",
      "label": "Transactions = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "userRole = 'employee'",
      "label": "User Role = 'Employee'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "allRecords",
      "label": "All Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "budgetData",
      "label": "Budget Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "candidates",
      "label": "Candidates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contractMeta",
      "label": "Contract Meta",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contractText",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customPrompt",
      "label": "Custom Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "existingData",
      "label": "Existing Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "fields",
      "label": "Fields",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "moduleTitle",
      "label": "Module Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "niceToHaveSkills",
      "label": "Nice To Have Skills",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "record",
      "label": "Record",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recordCount",
      "label": "Record Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "records",
      "label": "Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "requiredSkills",
      "label": "Required Skills",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "roleTitle",
      "label": "Role Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "taxContext",
      "label": "Tax Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transactions",
      "label": "Transactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "event_id",
      "label": "Event Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "event_timestamp",
      "label": "Event Timestamp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "ip_address",
      "label": "Ip Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "module",
      "label": "Module",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "resource",
      "label": "Resource",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "resource_id",
      "label": "Resource Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "user_name",
      "label": "User Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "user_role",
      "label": "User Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "actual_delivery",
      "label": "Actual Delivery",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "carrier",
      "label": "Carrier",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "destination",
      "label": "Destination",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "estimated_delivery",
      "label": "Estimated Delivery",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "origin",
      "label": "Origin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "shipment_id",
      "label": "Shipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "shipping_cost",
      "label": "Shipping Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "tracking_number",
      "label": "Tracking Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "weight_kg",
      "label": "Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "cost",
      "label": "Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "course_name",
      "label": "Course Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "duration_hours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "enrolled",
      "label": "Enrolled",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "instructor",
      "label": "Instructor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "max_participants",
      "label": "Max Participants",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    }
  ],
  "oracle-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdvanced.jsx"
    },
    {
      "name": "apAging = []",
      "label": "Ap Aging = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "arAging = []",
      "label": "Ar Aging = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "capexPipeline = []",
      "label": "Capex Pipeline = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "entities = []",
      "label": "Entities = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "horizonWeeks = 12",
      "label": "Horizon Weeks = 12",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "jurisdiction = 'US'",
      "label": "Jurisdiction = 'US'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "payrollCadence = 'biweekly'",
      "label": "Payroll Cadence = 'Biweekly'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "recentRuleChanges = ''",
      "label": "Recent Rule Changes = ''",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "transactions = []",
      "label": "Transactions = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "userRole = 'employee'",
      "label": "User Role = 'Employee'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-extras.js"
    },
    {
      "name": "allRecords",
      "label": "All Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "budgetData",
      "label": "Budget Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "candidates",
      "label": "Candidates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contractMeta",
      "label": "Contract Meta",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contractText",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customPrompt",
      "label": "Custom Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "existingData",
      "label": "Existing Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "fields",
      "label": "Fields",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "moduleTitle",
      "label": "Module Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "niceToHaveSkills",
      "label": "Nice To Have Skills",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "record",
      "label": "Record",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recordCount",
      "label": "Record Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "records",
      "label": "Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "requiredSkills",
      "label": "Required Skills",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "roleTitle",
      "label": "Role Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "taxContext",
      "label": "Tax Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "transactions",
      "label": "Transactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "event_id",
      "label": "Event Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "event_timestamp",
      "label": "Event Timestamp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "ip_address",
      "label": "Ip Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "module",
      "label": "Module",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "resource",
      "label": "Resource",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "resource_id",
      "label": "Resource Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "user_name",
      "label": "User Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "user_role",
      "label": "User Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/audit-trail.js"
    },
    {
      "name": "actual_delivery",
      "label": "Actual Delivery",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "carrier",
      "label": "Carrier",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "destination",
      "label": "Destination",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "estimated_delivery",
      "label": "Estimated Delivery",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "origin",
      "label": "Origin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "shipment_id",
      "label": "Shipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "shipping_cost",
      "label": "Shipping Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "tracking_number",
      "label": "Tracking Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "weight_kg",
      "label": "Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/supply-chain.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "cost",
      "label": "Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "course_name",
      "label": "Course Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "duration_hours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "enrolled",
      "label": "Enrolled",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "instructor",
      "label": "Instructor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "max_participants",
      "label": "Max Participants",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    }
  ],
  "small-law-firm-route-cjotr3-exact-ai": [
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    }
  ],
  "small-law-firm-route-1hu7oa-exact-ai": [
    {
      "name": "documentText",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    }
  ],
  "small-law-firm-route-hgenmv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/legal-research-rag/route.ts"
    }
  ],
  "small-law-firm-route-8ntcid-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-assembly/route.ts"
    }
  ],
  "small-law-firm-route-x7hs4i-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deadline-flag/route.ts"
    }
  ],
  "small-law-firm-route-1spyee-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-assistant/route.ts"
    }
  ],
  "small-law-firm-route-186gwg-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/billing-optimize/route.ts"
    }
  ],
  "small-law-firm-page-vngytl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/page.tsx"
    }
  ],
  "small-law-firm-source-workflow": [
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "documentText",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/legal-research-rag/route.ts"
    }
  ],
  "small-law-firm-ai-tools": [
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "documentText",
      "label": "Document Text",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/route.ts"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/legal-research-rag/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-zatxu7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/trust-retainer-reconciliation/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-tuh0zy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-imap-email-archive/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-cjotr3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-9hox3b-exact-ai": [
    {
      "name": "additionalContext",
      "label": "Additional Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "knownCases",
      "label": "Known Cases",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "matterType",
      "label": "Matter Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "opposingCounselName",
      "label": "Opposing Counsel Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "opposingFirm",
      "label": "Opposing Firm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "practiceArea",
      "label": "Practice Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-1rq7qe-exact-ai": [
    {
      "name": "additionalJurisdictions",
      "label": "Additional Jurisdictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "clientLocations",
      "label": "Client Locations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "matterDescription",
      "label": "Matter Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "practiceArea",
      "label": "Practice Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "primaryJurisdiction",
      "label": "Primary Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "servicesOffered",
      "label": "Services Offered",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-103fs4-exact-ai": [
    {
      "name": "historicalMatters = []",
      "label": "Historical Matters = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/matter-outcome-predict/route.ts"
    },
    {
      "name": "matterContext",
      "label": "Matter Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/matter-outcome-predict/route.ts"
    },
    {
      "name": "practiceArea",
      "label": "Practice Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/matter-outcome-predict/route.ts"
    },
    {
      "name": "proposedStaffing",
      "label": "Proposed Staffing",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/matter-outcome-predict/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-pij9lq-exact-ai": [
    {
      "name": "additionalContext",
      "label": "Additional Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/legal-research/route.ts"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/legal-research/route.ts"
    },
    {
      "name": "practiceArea",
      "label": "Practice Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/legal-research/route.ts"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/legal-research/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-160y81-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/intake-chatbot-flow/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-7kiszs-exact-ai": [
    {
      "name": "activityCode",
      "label": "Activity Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/enhance-description/route.ts"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/enhance-description/route.ts"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/enhance-description/route.ts"
    },
    {
      "name": "hours",
      "label": "Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/enhance-description/route.ts"
    },
    {
      "name": "matterType",
      "label": "Matter Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/enhance-description/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-1726qi-exact-ai": [
    {
      "name": "additionalContext",
      "label": "Additional Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "caseNumber",
      "label": "Case Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "clientName",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "courtName",
      "label": "Court Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "opposingParty",
      "label": "Opposing Party",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-m1vslq-exact-ai": [
    {
      "name": "caseDetails",
      "label": "Case Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deadline-predictor/route.ts"
    },
    {
      "name": "filingDate",
      "label": "Filing Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deadline-predictor/route.ts"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deadline-predictor/route.ts"
    },
    {
      "name": "matterType",
      "label": "Matter Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deadline-predictor/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-1eon4n-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/conversational-case-companion/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-hosoy4-exact-ai": [
    {
      "name": "clientRole",
      "label": "Client Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-review/route.ts"
    },
    {
      "name": "contractText",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-review/route.ts"
    },
    {
      "name": "contractType",
      "label": "Contract Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-review/route.ts"
    },
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-review/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-153on4-exact-ai": [
    {
      "name": "adverseParties",
      "label": "Adverse Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/conflict-checker/route.ts"
    },
    {
      "name": "knownRepresentations",
      "label": "Known Representations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/conflict-checker/route.ts"
    },
    {
      "name": "prospectiveClient",
      "label": "Prospective Client",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/conflict-checker/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-11xi4w-exact-ai": [
    {
      "name": "additionalNotes",
      "label": "Additional Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "clientType",
      "label": "Client Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "companyName",
      "label": "Company Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "firstName",
      "label": "First Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "lastName",
      "label": "Last Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "legalIssue",
      "label": "Legal Issue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "phone",
      "label": "Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "referralSource",
      "label": "Referral Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "urgency",
      "label": "Urgency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-1488fs-exact-ai": [
    {
      "name": "caseDescription",
      "label": "Case Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/case-analysis/route.ts"
    },
    {
      "name": "evidence",
      "label": "Evidence",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/case-analysis/route.ts"
    },
    {
      "name": "opposingArguments",
      "label": "Opposing Arguments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/case-analysis/route.ts"
    },
    {
      "name": "witnesses",
      "label": "Witnesses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/case-analysis/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-1dj68h-exact-ai": [
    {
      "name": "end",
      "label": "End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/capture-time/route.ts"
    },
    {
      "name": "start",
      "label": "Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/capture-time/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-dhprx6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/billing-intelligence/route.ts"
    }
  ],
  "small-law-firm-salesforce-route-wa5ntl-exact-ai": [
    {
      "name": "caseFacts",
      "label": "Case Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    },
    {
      "name": "knownPrecedents = []",
      "label": "Known Precedents = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    },
    {
      "name": "matterId",
      "label": "Matter Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    },
    {
      "name": "opponentName",
      "label": "Opponent Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    }
  ],
  "small-law-firm-salesforce-page-593ktc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/trust-retainer-reconciliation/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-ouledf-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/gap/imap-email-archive/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-1xmy26-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/time-capture/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-12td91-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/opponent-analysis/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-17bkdk-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/multi-jurisdiction-compliance/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-16p96r-exact-ai": [
    {
      "name": "additionalContext",
      "label": "Additional Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/legal-research/page.tsx"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/legal-research/page.tsx"
    },
    {
      "name": "practiceArea",
      "label": "Practice Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/legal-research/page.tsx"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/legal-research/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-1onyf4-exact-ai": [
    {
      "name": "additionalContext",
      "label": "Additional Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/document-drafting/page.tsx"
    },
    {
      "name": "caseNumber",
      "label": "Case Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/document-drafting/page.tsx"
    },
    {
      "name": "clientName",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/document-drafting/page.tsx"
    },
    {
      "name": "courtName",
      "label": "Court Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/document-drafting/page.tsx"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/document-drafting/page.tsx"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/document-drafting/page.tsx"
    },
    {
      "name": "opposingParty",
      "label": "Opposing Party",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/document-drafting/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-x1i7q9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/deadline-predictor/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-mz9mmb-exact-ai": [
    {
      "name": "clientRole",
      "label": "Client Role",
      "type": "text",
      "defaultValue": "party_a",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/contract-review/page.tsx"
    },
    {
      "name": "contractType",
      "label": "Contract Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/contract-review/page.tsx"
    },
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/contract-review/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-1o00js-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/conflict-checker/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-nupbfy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/client-intake/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-10zonc-exact-ai": [
    {
      "name": "caseDescription",
      "label": "Case Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/case-analysis/page.tsx"
    },
    {
      "name": "evidence",
      "label": "Evidence",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/case-analysis/page.tsx"
    },
    {
      "name": "opposingArguments",
      "label": "Opposing Arguments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/case-analysis/page.tsx"
    },
    {
      "name": "witnesses",
      "label": "Witnesses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/case-analysis/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-17e4c3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(dashboard)/ai/billing-intelligence/page.tsx"
    }
  ],
  "small-law-firm-salesforce-page-8ecj2z-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(auth)/verify-email/page.tsx"
    }
  ],
  "small-law-firm-salesforce-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/trust-retainer-reconciliation/route.ts"
    },
    {
      "name": "additionalContext",
      "label": "Additional Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "knownCases",
      "label": "Known Cases",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "matterType",
      "label": "Matter Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "opposingCounselName",
      "label": "Opposing Counsel Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "opposingFirm",
      "label": "Opposing Firm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "practiceArea",
      "label": "Practice Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "additionalJurisdictions",
      "label": "Additional Jurisdictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "clientLocations",
      "label": "Client Locations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "matterDescription",
      "label": "Matter Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "primaryJurisdiction",
      "label": "Primary Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "servicesOffered",
      "label": "Services Offered",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "historicalMatters = []",
      "label": "Historical Matters = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/matter-outcome-predict/route.ts"
    },
    {
      "name": "matterContext",
      "label": "Matter Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/matter-outcome-predict/route.ts"
    },
    {
      "name": "proposedStaffing",
      "label": "Proposed Staffing",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/matter-outcome-predict/route.ts"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/legal-research/route.ts"
    },
    {
      "name": "activityCode",
      "label": "Activity Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/enhance-description/route.ts"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/enhance-description/route.ts"
    },
    {
      "name": "hours",
      "label": "Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/enhance-description/route.ts"
    },
    {
      "name": "caseNumber",
      "label": "Case Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "clientName",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "courtName",
      "label": "Court Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "opposingParty",
      "label": "Opposing Party",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "caseDetails",
      "label": "Case Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deadline-predictor/route.ts"
    },
    {
      "name": "filingDate",
      "label": "Filing Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deadline-predictor/route.ts"
    },
    {
      "name": "clientRole",
      "label": "Client Role",
      "type": "text",
      "defaultValue": "party_a",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-review/route.ts"
    },
    {
      "name": "contractText",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-review/route.ts"
    },
    {
      "name": "contractType",
      "label": "Contract Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-review/route.ts"
    },
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-review/route.ts"
    },
    {
      "name": "adverseParties",
      "label": "Adverse Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/conflict-checker/route.ts"
    },
    {
      "name": "knownRepresentations",
      "label": "Known Representations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/conflict-checker/route.ts"
    },
    {
      "name": "prospectiveClient",
      "label": "Prospective Client",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/conflict-checker/route.ts"
    },
    {
      "name": "additionalNotes",
      "label": "Additional Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "clientType",
      "label": "Client Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "companyName",
      "label": "Company Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "firstName",
      "label": "First Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "lastName",
      "label": "Last Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "legalIssue",
      "label": "Legal Issue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "phone",
      "label": "Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "referralSource",
      "label": "Referral Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "urgency",
      "label": "Urgency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "caseDescription",
      "label": "Case Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/case-analysis/route.ts"
    },
    {
      "name": "evidence",
      "label": "Evidence",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/case-analysis/route.ts"
    },
    {
      "name": "opposingArguments",
      "label": "Opposing Arguments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/case-analysis/route.ts"
    },
    {
      "name": "witnesses",
      "label": "Witnesses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/case-analysis/route.ts"
    },
    {
      "name": "end",
      "label": "End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/capture-time/route.ts"
    },
    {
      "name": "start",
      "label": "Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/capture-time/route.ts"
    },
    {
      "name": "caseFacts",
      "label": "Case Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    },
    {
      "name": "knownPrecedents = []",
      "label": "Known Precedents = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    },
    {
      "name": "matterId",
      "label": "Matter Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    },
    {
      "name": "opponentName",
      "label": "Opponent Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    }
  ],
  "small-law-firm-salesforce-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/trust-retainer-reconciliation/route.ts"
    },
    {
      "name": "additionalContext",
      "label": "Additional Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "knownCases",
      "label": "Known Cases",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "matterType",
      "label": "Matter Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "opposingCounselName",
      "label": "Opposing Counsel Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "opposingFirm",
      "label": "Opposing Firm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "practiceArea",
      "label": "Practice Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/opponent-analysis/route.ts"
    },
    {
      "name": "additionalJurisdictions",
      "label": "Additional Jurisdictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "clientLocations",
      "label": "Client Locations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "matterDescription",
      "label": "Matter Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "primaryJurisdiction",
      "label": "Primary Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "servicesOffered",
      "label": "Services Offered",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/multi-jurisdiction-compliance/route.ts"
    },
    {
      "name": "historicalMatters = []",
      "label": "Historical Matters = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/matter-outcome-predict/route.ts"
    },
    {
      "name": "matterContext",
      "label": "Matter Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/matter-outcome-predict/route.ts"
    },
    {
      "name": "proposedStaffing",
      "label": "Proposed Staffing",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/matter-outcome-predict/route.ts"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/legal-research/route.ts"
    },
    {
      "name": "activityCode",
      "label": "Activity Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/enhance-description/route.ts"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/enhance-description/route.ts"
    },
    {
      "name": "hours",
      "label": "Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/enhance-description/route.ts"
    },
    {
      "name": "caseNumber",
      "label": "Case Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "clientName",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "courtName",
      "label": "Court Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "opposingParty",
      "label": "Opposing Party",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/document-draft/route.ts"
    },
    {
      "name": "caseDetails",
      "label": "Case Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deadline-predictor/route.ts"
    },
    {
      "name": "filingDate",
      "label": "Filing Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/deadline-predictor/route.ts"
    },
    {
      "name": "clientRole",
      "label": "Client Role",
      "type": "text",
      "defaultValue": "party_a",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-review/route.ts"
    },
    {
      "name": "contractText",
      "label": "Contract Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-review/route.ts"
    },
    {
      "name": "contractType",
      "label": "Contract Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-review/route.ts"
    },
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/contract-review/route.ts"
    },
    {
      "name": "adverseParties",
      "label": "Adverse Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/conflict-checker/route.ts"
    },
    {
      "name": "knownRepresentations",
      "label": "Known Representations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/conflict-checker/route.ts"
    },
    {
      "name": "prospectiveClient",
      "label": "Prospective Client",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/conflict-checker/route.ts"
    },
    {
      "name": "additionalNotes",
      "label": "Additional Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "clientType",
      "label": "Client Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "companyName",
      "label": "Company Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "firstName",
      "label": "First Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "lastName",
      "label": "Last Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "legalIssue",
      "label": "Legal Issue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "phone",
      "label": "Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "referralSource",
      "label": "Referral Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "urgency",
      "label": "Urgency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/client-intake/route.ts"
    },
    {
      "name": "caseDescription",
      "label": "Case Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/case-analysis/route.ts"
    },
    {
      "name": "evidence",
      "label": "Evidence",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/case-analysis/route.ts"
    },
    {
      "name": "opposingArguments",
      "label": "Opposing Arguments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/case-analysis/route.ts"
    },
    {
      "name": "witnesses",
      "label": "Witnesses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/case-analysis/route.ts"
    },
    {
      "name": "end",
      "label": "End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/capture-time/route.ts"
    },
    {
      "name": "start",
      "label": "Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/capture-time/route.ts"
    },
    {
      "name": "caseFacts",
      "label": "Case Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    },
    {
      "name": "knownPrecedents = []",
      "label": "Known Precedents = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    },
    {
      "name": "matterId",
      "label": "Matter Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    },
    {
      "name": "opponentName",
      "label": "Opponent Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/agentic-case-prep/route.ts"
    }
  ]
};
