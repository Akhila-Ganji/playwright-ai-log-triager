# 🤖 playwright-ai-log-triager

An AI-driven test automation pipeline that uses LLM Context Engineering to parse and distill high-entropy Playwright and Azure DevOps failure logs into concise engineering defect reports.

---

## 📊 Core Architecture & Tech Stack

This project interfaces a hybrid UI/API test automation ecosystem with an LLM token-optimized log assessment layer to dramatically reduce debug time.

| Category | Frameworks / Tools | Languages & Runtimes |
| :--- | :--- | :--- |
| **UI Automation** | Playwright, Selenium WebDriver | Java (JDK 17+), JavaScript / Node.js |
| **API Testing** | Rest Assured | Java |
| **AI Triager Layer** | Custom LLM Prompt Context Engine | Token-Optimized System Prompting |

---

## 🛠️ LLM Context Engineering & Token Optimization Mechanics

To successfully meet the evaluation criteria for professional AI annotation and engineering pipelines, this system operates under tight context-window configurations across three development runs:

### 📉 Run 1: The Baseline
* **Setup:** Direct submission of verbose, multi-megabyte raw terminal logs directly into a generic model interface.
* **Output:** Highly chaotic, unstructured responses filled with redundant console details and low-priority system outputs.

### 🛠️ Run 2: Engineered Constraints + Feedback Optimization
* **Setup:** Structural framing enforcing negative constraints (`Banned tokens: verbose, heap memory dumps, internal stack-traces`) and strict template targets.
* **Token Mechanics:** By explicitly filtering specific keywords, the model's token distribution space is highly steered, forcing attention heads away from high-entropy log noise and focusing entirely on functional assertions.
* **Manual Feedback Loop:** Implemented a targeted revision layer to dynamically recalibrate the output tone, shifting from high-level summaries into concrete engineering defect logs.

### 🏗️ Run 3: Separating System Tier Configuration (Lean Context Execution)
* **Setup:** Extracted all formatting guardrails and architectural parameters away from the user input box into the system instruction architecture tier.
* **Token Mechanics:** Decoupling system roles from volatile test data inputs eliminates positional bias. Pruning unneeded contextual logs ensures optimal attention bias dispersion, saving context tokens and maximizing prediction accuracy.

---

## 🚀 Quick Start & Project Execution

### 1. Prerequisites
Ensure you have the following environments configured locally:
* Java Development Kit (JDK 17 or higher)
* Apache Maven
* Node.js (v18+)

### 2. Installation
Clone the repository and install all language dependencies:
```bash
# Clone the repository
git clone https://github.com
cd playwright-ai-log-triager

# Install Node.js automation dependencies (Playwright)
npm install

# Build Maven project dependencies (Selenium & Rest Assured)
mvn clean install -DskipTests
```

### 3. Running the Test Automation Suites
Execute tests depending on your target validation environment:

* **Run Playwright (UI Verification - JavaScript):**
  ```bash
  npx playwright test
  ```
* **Run Selenium & Rest Assured (UI & API - Java/Maven):**
  ```bash
  mvn test
  ```

### 4. Executing the AI Log Triage Script
Pass failed log strings through the context manager:
```bash
npm run triage -- --log=path/to/failed-playwright-log.txt
```

---

## 📝 Capstone Project Checklist Status
- [x] Select a specific, high-frequency professional workflow (Log Triage).
- [x] Run 1: Establish baseline with basic prompting mechanics.
- [x] Run 2: Implement negative constraints and clear stylistic boundaries.
- [x] Run 2b: Apply manual corrective instruction loops to steer output.
- [x] Run 3: Optimize context windows using decoupled System-level parameters.
- [x] Defend structural output variations using mathematical Token Prediction analysis.
