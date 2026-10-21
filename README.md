# MergeRequest

[![Portfolio CI](https://github.com/Dakshinab/mergerequest/actions/workflows/ci.yml/badge.svg)](https://github.com/Dakshinab/mergerequest/actions/workflows/ci.yml)

> A DevOps-focused portfolio and AI recruiter agent for Dakshina Dissanayake.

**Live demo → [mergerequest.vercel.app](https://mergerequest.vercel.app)**

![MergeRequest Preview](Images/dakshina.jpeg)

---

## What is this?

MergeRequest is a recruiter-facing portfolio for a Junior DevOps Engineer. It presents AWS, Terraform, Kubernetes, Docker, CI/CD, security, and observability work, then lets recruiters ask an AI agent about the projects and experience.

Instead of a PDF that gets ignored, recruiters spend 5 minutes having a conversation with my AI agent. By the time they hit "Contact", they already know who I am.

---

## Features

- **Live pipeline hero** — animated commit-to-health delivery flow with reduced-motion support
- **DevOps project showcase** — OrderFlow, DeployFlow, CloudPath, Serene Stay, SmartLink, and secondary projects
- **Architecture diagrams** — hand-authored accessible SVG diagrams for DevOps projects
- **DevOps skills grid** — AWS, Terraform, CI/CD, security, containers, Kubernetes, monitoring, Linux, networking, and cost management
- **AI Agent Chat** — powered by Groq LLaMA 3.3 70B, focused on DevOps and cloud questions
- **Experience and training** — Codezela and I4matrix experience plus DevOps training badges
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
| CI | GitHub Actions — HTML validation and link checks |

No frontend framework or build step is required. The static page and serverless chat route deploy directly to Vercel.

---

## Project Structure

```
mergerequest/
├── index.html       # Entire app — UI, styles, and AI logic
├── api/chat.js      # Hardened Vercel/Groq serverless endpoint
├── Images/          # Profile photo, project assets, and SVG architecture diagrams
├── favicon.svg      # Terminal-style site icon
├── .github/workflows/ci.yml # HTML and link validation
├── project.md       # Detailed project documentation
└── README.md
```

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Dakshinab/mergerequest.git
cd mergerequest
```

### 2. Configure your Groq API key

For local development, set the `GROQ_API_KEY` environment variable. For Vercel,
open **Project Settings → Environment Variables**, add a variable named
`GROQ_API_KEY`, and paste the key from [console.groq.com](https://console.groq.com).
The Groq free tier is sufficient for this app.

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

> **Security note:** The API key is read only by `api/chat.js` and is never exposed
> in the client bundle. See the [Vercel Environment Variables docs](https://vercel.com/docs/environment-variables) for setup.

---

## Customising for Yourself

All personal data lives in two places inside `index.html`:

1. **`SYSTEM_PROMPT`** — the AI's knowledge base. Update your name, experience, projects, and skills here.
2. **HTML sections** — the visible skills grid, project cards, and experience items.

Search for `ABOUT DAKSHINA` in the file to find the AI context block. The current asset paths also live under `Images/`.

---

## Built by

**Dakshina Dissanayake** — Junior DevOps Engineer

[LinkedIn](https://www.linkedin.com/in/dakshina-dissanayake-301162227) · [GitHub](https://github.com/Dakshinab) · [dakshinabanu@gmail.com](mailto:dakshinabanu@gmail.com)