const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const requestLog = new Map();

function getClientIp(req) {
  const forwardedFor = req.headers['x-forwarded-for'];
  return (forwardedFor ? forwardedFor.split(',')[0].trim() : req.socket?.remoteAddress) || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const requests = (requestLog.get(ip) || []).filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (requests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, requests);
    return true;
  }

  requests.push(now);
  requestLog.set(ip, requests);
  return false;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (isRateLimited(getClientIp(req))) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a minute.' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY is not configured' });
  }

  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'A non-empty messages array is required' });
    }

    const invalidMessage = messages.some((message, index) => (
      !message ||
      !['user', 'assistant'].includes(message.role) && !(index === 0 && message.role === 'system') ||
      typeof message.content !== 'string' ||
      message.content.length > ({ system: 20000, assistant: 4000 }[message.role] || 1000)
    ));

    if (invalidMessage) {
      return res.status(400).json({ error: 'Each message must have a valid role and content of 1000 characters or fewer' });
    }

    const safeMessages = messages
      .filter(message => message.role !== 'system')
      .slice(-12);
    const systemMessage = messages.find(message => message.role === 'system');

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || 'openai/gpt-oss-120b',
        reasoning_effort: 'low',
        messages: systemMessage ? [systemMessage, ...safeMessages] : safeMessages,
        max_tokens: 800,
        temperature: 0.7
      })
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Groq error', response.status, JSON.stringify(data)); return res.status(502).json({ error: 'The AI service is temporarily unavailable. Please try again shortly.' });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'The AI service is temporarily unavailable. Please try again shortly.' });
  }
}
