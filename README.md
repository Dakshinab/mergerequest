# MergeRequest

> An AI-powered personal agent that pitches me to recruiters — so they call me instead of scrolling past my CV.

**Live demo → [mergerequest.vercel.app](https://mergerequest-inky.vercel.app/)**

![MergeRequest Preview](Images/dakshina.jpeg)

---

## What is this?

MergeRequest is a recruiter-facing web app that acts as my personal AI hype agent. A recruiter describes the role they're hiring for, and the AI responds with exactly why I'm the right fit — pulling from my real background, projects, and skills.

Instead of a PDF that gets ignored, recruiters spend 5 minutes having a conversation with my AI agent. By the time they hit "Contact", they already know who I am.

---

## Features

- **AI Agent Chat** — powered by Groq LLaMA 3.3 70B, answers any question about my experience, skills, and projects
- **Suggestion chips** — pre-built questions so recruiters know where to start
- **Project showcase** — 6 selected projects with stack details and GitHub links
- **Skills grid** — organized by languages, frameworks, cloud/DevOps, and databases
- **Experience timeline** — internship history with key achievements
- **Contact section** — direct links to email, LinkedIn, and GitHub
- **Mobile-first** — works perfectly on any device from a LinkedIn link
- **Dark terminal aesthetic** — clean, premium, memorable

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JS |
| AI Model | Groq API — LLaMA 3.3 70B Versatile |
| Hosting | Vercel |
| Font | Inter + JetBrains Mono (Google Fonts) |

No frameworks. No build step. One file, zero dependencies. Ships anywhere instantly.

---

## Project Structure

```
mergerequest/
├── index.html       # Entire app — UI, styles, and AI logic
├── Images/          # Profile photo and project screenshots
└── README.md
```

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Dakshinab/mergerequest.git
cd mergerequest
```

### 2. Add your Groq API key

Open `index.html` and find this line near the bottom:

```js
const GROQ_API_KEY = "your_groq_api_key_here";
```

Replace it with your key from [console.groq.com](https://console.groq.com). The Groq free tier is sufficient for this app.

### 3. Add your photo

Place your profile photo in the `Images/` folder and name it `dakshina.jpeg`. The app will display it automatically.

### 4. Open locally

```bash
# No build needed — just open in browser
open index.html
```

If you are on Windows, open `index.html` directly in your browser or double-click the file in File Explorer.

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# Follow the prompts — your site goes live in under a minute
```

Or connect your GitHub repo directly at [vercel.com/new](https://vercel.com/new) for automatic deployments on every push.

> **Security note:** For production, move the Groq API key to a Vercel serverless function so it's never exposed in the client bundle. See the [Vercel Environment Variables docs](https://vercel.com/docs/environment-variables) for setup.

---

## Customising for Yourself

All personal data lives in two places inside `index.html`:

1. **`SYSTEM_PROMPT`** — the AI's knowledge base. Update your name, experience, projects, and skills here.
2. **HTML sections** — the visible skills grid, project cards, and experience items.

Search for `ABOUT DAKSHINA` in the file to find the AI context block. The current asset paths also live under `Images/`.

---

## Built by

**Dakshina Dissanayake** — Software Engineer & DevOps Engineer

[LinkedIn](https://www.linkedin.com/in/dakshina-dissanayake-301162227) · [GitHub](https://github.com/Dakshinab) · [dakshinabanu@gmail.com](mailto:dakshinabanu@gmail.com)
