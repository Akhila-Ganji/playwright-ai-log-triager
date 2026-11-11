import { GoogleGenAI } from '@google/genai';
import * as dotenv from 'dotenv';
dotenv.config();

// System Tier Configuration (Decoupled Guardrails for Lean Context)
const SYSTEM_INSTRUCTION = `
You are a lean, token-optimized AI Log Triage Engineer specializing in Playwright, Selenium, and Rest Assured environments.

Strict Context Guardrails:
1. Identify the structural root cause cleanly (e.g., Locator Timeout, 500 Internal Server Error, Assertion Failure).
2. Explicitly ban verbose tokens: stack traces longer than 3 rows, raw hex memory dumps, and underlying network handshake details.
3. Output Format:
   - 🚨 **Defect Identification**: [One sentence summary]
   - 🔍 **Root Cause Assertion**: [Specific line failure details]
   - 🛠️ **Mitigation Script**: [Actionable fix code snippet]
`;

async function triageAutomationLog(rawLogContents) {
  // Initializing the model client
  const ai = new GoogleGenAI();

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Triage this raw automation error log:\n\n${rawLogContents}`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2 // Kept low to enforce strict template predictability
      }
    });

    console.log(response.text);
  } catch (error) {
    console.error("Context evaluation engine error:", error);
  }
}

// Mocking a high-entropy automation failure log to simulate execution
const sampleFailureLog = `
2026-11-11T13:10:05Z - info: Launching chromium browser context...
2026-11-11T13:10:12Z - error: page.click: Timeout 30000ms exceeded.
=========================== logs ===========================
waiting for locator('button.submit-checkout-form-validated')
  - locator resolved to hidden <button class="submit-checkout-form-validated" disabled>Submit</button>
  - attempting click action...
  - waiting for element to be visible, enabled and stable...
  - element is not enabled - waiting...
============================================================
at CheckoutPage.submitOrder (/src/pages/checkout.page.js:42:29)
at Object.handler (/src/tests/checkout.spec.js:14:22)
[Internal memory heap dump tracking logs follow... 0x7fff5fbff608]
`;

// Execute Triage Run
triageAutomationLog(sampleFailureLog);
