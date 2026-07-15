// Central data source for the portfolio. Non-technical users can safely
// edit the strings/arrays here without touching component code.

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const HERO_METRICS = [
  { value: "50+", label: "AI Systems Delivered" },
  { value: "10+", label: "Technologies" },
  { value: "1000+", label: "Hours Saved" },
  { value: "99%", label: "Workflow Reliability" },
];

export const TECH_MARQUEE = [
  "OpenAI", "n8n", "VAPI", "Supabase", "ElevenLabs", "LangChain",
  "Qdrant", "Pinecone", "Zapier", "Make", "Retool", "Appsmith",
  "Airtable", "Claude", "Gemini", "WhatsApp API", "PostgreSQL", "Redis",
];

export const ABOUT_CARDS = [
  { title: "Experience", value: "4+ Years", note: "Designing AI-native systems" },
  { title: "Technologies", value: "18+", note: "Modern AI + automation stack" },
  { title: "Industries", value: "12+", note: "Retail, F&B, SaaS, Health, Real-estate" },
  { title: "Achievements", value: "50+", note: "Production systems shipped" },
];

export const SERVICES = [
  {
    title: "AI Automation Systems",
    desc: "End-to-end intelligent workflows that replace repetitive operations with reliable AI pipelines.",
    icon: "sparkles",
  },
  {
    title: "Voice AI Agents",
    desc: "Human-quality inbound and outbound voice agents built on VAPI, ElevenLabs and OpenAI Realtime.",
    icon: "mic",
  },
  {
    title: "WhatsApp AI Assistants",
    desc: "24/7 sales and support assistants on WhatsApp Business, connected to your CRM and knowledge base.",
    icon: "chat",
  },
  {
    title: "Business Workflow Automation",
    desc: "n8n, Make and Zapier orchestrations that connect every tool your team already uses.",
    icon: "flow",
  },
  {
    title: "RAG & Knowledge Systems",
    desc: "Private knowledge bases powered by vector DBs, hybrid search and grounded LLM answers.",
    icon: "book",
  },
  {
    title: "AI Consulting & Strategy",
    desc: "Roadmaps, architecture reviews and hands-on delivery for teams adopting AI in production.",
    icon: "compass",
  },
];

export const SKILLS = [
  {
    category: "AI",
    items: [
      { name: "OpenAI", level: 96 },
      { name: "Claude", level: 92 },
      { name: "Gemini", level: 86 },
      { name: "LangChain", level: 88 },
    ],
  },
  {
    category: "Automation",
    items: [
      { name: "n8n", level: 98 },
      { name: "Zapier", level: 90 },
      { name: "Make", level: 88 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "Supabase", level: 94 },
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 82 },
      { name: "Qdrant", level: 85 },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "React", level: 92 },
      { name: "Tailwind", level: 94 },
      { name: "Node.js", level: 88 },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "Vercel", level: 90 },
      { name: "Railway", level: 84 },
      { name: "Render", level: 80 },
    ],
  },
];

export const PROJECTS = [
  {
    title: "AI Restaurant Receptionist",
    tag: "Voice · VAPI",
    span: "lg:col-span-2 lg:row-span-2",
    accent: "tangerine",
    kind: "voice",
    payload: {
      agent: "Restaurant AI",
      platform: "VAPI",
      callsHandled: 2451,
      availability: "24/7",
      accuracy: "98.7%",
    },
  },
  {
    title: "WhatsApp Sales Agent",
    tag: "Chat · WhatsApp",
    span: "",
    accent: "sage",
    kind: "chat",
    payload: {
      channel: "WhatsApp Business",
      leadsHandled: 1284,
      conversionLift: "+37%",
    },
  },
  {
    title: "Voice Appointment Scheduler",
    tag: "Voice · Calendar",
    span: "",
    accent: "ink",
    kind: "schedule",
    payload: {
      bookings: 812,
      noShowDrop: "-42%",
      channels: ["Voice", "SMS"],
    },
  },
  {
    title: "Retail AI Assistant",
    tag: "RAG · Support",
    span: "lg:col-span-2",
    accent: "sage",
    kind: "rag",
    payload: {
      workflow: "Lead Automation",
      tool: "n8n",
      integrations: ["WhatsApp", "OpenAI", "Google Sheets", "Supabase"],
    },
  },
  {
    title: "AI Knowledge Base",
    tag: "Qdrant · Hybrid Search",
    span: "",
    accent: "ink",
    kind: "rag",
    payload: {
      documents: 12480,
      p95Latency: "310ms",
      groundedness: "0.94",
    },
  },
  {
    title: "Customer Support Agent",
    tag: "Multichannel",
    span: "",
    accent: "tangerine",
    kind: "chat",
    payload: {
      tickets: 5320,
      csat: "4.86 / 5",
      autoResolve: "72%",
    },
  },
];

export const CERTIFICATIONS = [
  {
    issuer: "OpenAI",
    title: "Applied AI & Assistants API",
    date: "Mar 2025",
    id: "OAI-AAI-2451",
    featured: true,
  },
  { issuer: "n8n", title: "Advanced Workflow Architect", date: "Feb 2025", id: "N8N-AWA-0812" },
  { issuer: "Google", title: "Gemini for Developers", date: "Jan 2025", id: "GGL-GFD-3312" },
  { issuer: "Meta", title: "WhatsApp Business Platform", date: "Dec 2024", id: "META-WBP-1180" },
  { issuer: "Microsoft", title: "Azure AI Fundamentals", date: "Oct 2024", id: "MS-AI-900" },
  { issuer: "AWS", title: "Cloud Practitioner", date: "Aug 2024", id: "AWS-CP-9921" },
];

export const TESTIMONIALS = [
  {
    name: "Rania Al-Farsi",
    role: "Startup Founder, Beacon Labs",
    quote:
      "The voice agent replaced our entire night shift. Calls sound human, bookings just show up in our calendar. It paid for itself in three weeks.",
    rating: 5,
    initials: "RA",
  },
  {
    name: "David Kimura",
    role: "CEO, Northline Group",
    quote:
      "A rare engineer who talks like a strategist. Mapped our operations end-to-end and shipped automations we still rely on daily.",
    rating: 5,
    initials: "DK",
  },
  {
    name: "Sofia Marino",
    role: "Owner, Marino Trattoria",
    quote:
      "We stopped missing reservations. The WhatsApp assistant answers in Italian and English and my team finally sleeps at night.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "Amir Haddad",
    role: "Founder, Northstar Agency",
    quote:
      "Delivered a full RAG stack and CRM automation in under a month. Clean, documented, production-grade.",
    rating: 5,
    initials: "AH",
  },
];

export const CONTACT_INFO = [
  { label: "Email", value: "hello@yourdomain.com", href: "mailto:hello@yourdomain.com" },
  { label: "LinkedIn", value: "linkedin.com/in/you", href: "https://linkedin.com" },
  { label: "GitHub", value: "github.com/you", href: "https://github.com" },
  { label: "WhatsApp", value: "+1 (555) 010-2451", href: "https://wa.me/15550102451" },
  { label: "Location", value: "Remote · Worldwide", href: null },
];
