# TransformAI: AI-Powered Content Transformation Engine 🚀
*Smart India Hackathon (SIH) - Team Submission*

TransformAI is an enterprise-grade and government-focused content transformation platform designed to ingest raw information (text or multimodal visuals) and instantly synthesize it into structured, multi-channel communication deliverables.

---

## 🌟 Key Features
* **Multi-Format Synthesis:** Converts a single source input into Executive Summaries, Video Scripts & Storyboards, Official Advisories, Presentation Outlines, and Social Media Threads simultaneously.
* **Granular Operational Parameters:** Tailor outputs by selecting target audiences, communication tones, regional languages, detail levels, communication objectives, and content styles.
* **Multimodal Ingestion:** Supports text pasting and direct image uploads processed via browser-based base64 conversion.
* **Bulletproof Fault Tolerance:** Built-in automatic fallback routing that intercepts network errors or server-side `503` overloads, ensuring continuous operation during live presentations.
* **Session Audit Trail:** Real-time tracking log that records transformation history and parameters during the evaluation session.
* **Instant Export:** One-click Markdown export (`.md`) for immediate deployment across communication channels.

---

## 🛠️ Technology Stack
* **Frontend:** React, Vite, Modern CSS
* **AI Intelligence Core:** Google Generative AI SDK (`@google/generative-ai`) utilizing the `gemini-3.6-flash` model endpoint.

---

## ⚙️ Setup & Installation Instructions

Follow these steps to run the platform locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Pavandex/transform-ai.git](https://github.com/Pavandex/transform-ai.git)
   cd sih-platform