# MergeRequest

AI-powered DevOps portfolio of Dakshina Dissanayake (Junior DevOps Engineer).

## Live demo

https://mergerequest-inky.vercel.app

[![CI](https://github.com/Dakshinab/mergerequest/actions/workflows/ci.yml/badge.svg)](https://github.com/Dakshinab/mergerequest/actions/workflows/ci.yml)

## What is on the site

- Pipeline hero showing a deployment run from commit to healthy service
- Four DevOps projects with architecture diagrams in `Images/*.svg`
- DevOps skills
- Work experience
- Certifications and training
- AI agent for recruiter questions
- CV download

## Tech stack

- HTML and CSS
- Vanilla JavaScript
- Vercel serverless function
- Groq: `llama-3.3-70b-versatile`

There is no build step.

## How the chat works

```text
Browser -> /api/chat (Vercel serverless function) -> Groq
```

The browser sends the conversation to `/api/chat`. The Vercel function sends it to Groq and returns the AI response.

## Security notes

- `GROQ_API_KEY` is used only on the server as a Vercel environment variable.
- The API allows 10 requests per minute per IP. The limit is in memory and applies per serverless instance.
- Each message is limited to 1000 characters.
- Only the last 12 messages are sent upstream.
- The system prompt is limited to 20,000 characters.
- Chat text is rendered safely as text, not as HTML.

## Run locally

```bash
git clone https://github.com/Dakshinab/mergerequest.git
cd mergerequest
vercel dev
```

Set `GROQ_API_KEY` as a Vercel environment variable before using the chat.

Opening `index.html` directly will show the page, but the chat will not work because `/api/chat` needs the Vercel function.

## Deploy

Connect this repository to Vercel and add `GROQ_API_KEY` as a Vercel environment variable.

## CI

`.github/workflows/ci.yml` runs on pushes and pull requests. It:

- Checks `index.html` with `html-validate`
- Checks links and referenced assets with `linkinator`

## How to update

- Replace `Dakshina_Dissanayake_DevOps_CV.pdf` to update the CV.
- Update the visible page text and `SYSTEM_PROMPT` together.
- For every new DevOps project, add a project card and a new architecture SVG in `Images/`.
