import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Gamepad2,
  Code2,
  BrainCircuit,
  PenTool,
  Terminal,
  ExternalLink,
  GraduationCap,
  Award,
  Menu,
  X,
  ChevronRight,
  Boxes,
  Wrench,
  Users,
  Globe,
} from "lucide-react";

/* lucide-react 1.0 dropped trademarked brand icons (GitHub, LinkedIn, etc.)
   for legal reasons — using small inline SVGs instead so this keeps working
   regardless of lucide's icon set. */
function Github({ size = 16, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}
function Linkedin({ size = 16, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   DATA — sourced from resume content, copy lightly polished
--------------------------------------------------------------- */

const NAV_ITEMS = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const TERMINAL_LINES = [
  "> profile.init(\"Mohammad Adi\")",
  "> loading modules: web, unity, ml...",
  "> status: available for internships & entry-level roles",
];

const EXPERIENCE = [
  {
    id: "ebts",
    script: "./run experience/ebts-unity-internship.sh",
    role: "Unity Game Engine Intern",
    org: "EBTS Organization",
    period: "06/2024 – 07/2024",
    lines: [
      "Developed 3+ interactive AR/VR prototypes in Unity, focused on asset management and C# scripting.",
      "Applied scene setup and optimization techniques to reduce prototype load times during testing.",
    ],
  },
  {
    id: "etrain",
    script: "./run experience/etrain-ml-internship.sh",
    role: "Machine Learning Intern",
    org: "E-Train",
    period: "04/2025 – 05/2025",
    lines: [
      "Collaborated in a 5-member team to build a predictive model using diverse real-world datasets, improving data processing efficiency by approximately 20%.",
      "Applied feature analysis and model evaluation to address technical challenges and deliver results to stakeholders.",
    ],
  },
  {
    id: "zidio",
    script: "./run experience/zidio-web-dev-internship.sh",
    role: "Web Development Intern",
    org: "Zidio Development",
    period: "06/06/2026 – 06/07/2026",
    lines: [
      "Completed a hands-on web development training and internship program with Zidio Development.",
      "Built IntellMeet, an AI-powered MERN collaboration platform, as the internship project — covering real-time video via WebRTC, an AI transcription/summary layer, and a full backend.",
    ],
  },
];

const PROJECTS = [
  {
    id: "intellmeet",
    name: "IntellMeet — AI Collaboration Platform",
    tag: "MERN / AI · ZIDIO INTERNSHIP",
    accent: "#5EEAD4",
    stack: ["React 18", "Node.js", "Socket.IO", "WebRTC", "SQLite", "OpenAI API"],
    icon: BrainCircuit,
    desc: [
      "Built as the capstone project for a web development internship at Zidio Development.",
      "An enterprise-oriented meeting platform on the MERN stack with real-time HD video via WebRTC and Socket.IO signaling.",
      "Layered in an AI intelligence pipeline: Whisper transcription plus GPT-4o / Mistral summaries, action-item extraction, and engagement scoring.",
    ],
    href: "https://github.com/Adi432144",
    demo: "https://intellmeet-ai-powered-enterprise.onrender.com/",
  },
  {
    id: "gemini-gems",
    name: "Custom Google Gemini Gems Vault",
    tag: "WEB",
    accent: "#7DD3FC",
    stack: ["React"],
    icon: Boxes,
    desc: [
      "Built a focused React app for browsing, understanding, and reusing custom Google Gemini Gems.",
      "Each Gem ships with a clear purpose and a full instruction set, with one-click copy controls to recreate it in Gemini.",
      "Supports filtering the Gem library by category or search.",
    ],
    href: "https://github.com/Adi432144",
    demo: "https://custom-google-gemini-gems.onrender.com/",
  },
  {
    id: "fifa",
    name: "FIFA World Cup Database (FIFAWCDB)",
    tag: "WEB",
    accent: "#5EEAD4",
    stack: ["HTML5", "CSS3", "JavaScript"],
    icon: Globe,
    desc: [
      "Built a fully responsive FIFA World Cup database covering every tournament from 1930 to 2022.",
      "Surfaced hosts, winners, runners-up, final scores, and team participation trends across decades.",
      "Focused on clean UI and efficient data visualization for quick access to historical stats.",
    ],
    href: "https://github.com/Adi432144/FIFAWCDB-COMPLETE",
    demo: "https://fifawcdb-complete.onrender.com",
  },
  {
    id: "sportstore",
    name: "Sport Store E-Commerce Website",
    tag: "FULL-STACK",
    accent: "#FF8A4C",
    stack: ["C#", "CSHTML", "CSS", "JavaScript"],
    icon: Boxes,
    desc: [
      "Architected an interactive full-stack solution using C# and CSHTML for server-side logic and modular rendering.",
      "Implemented shopping cart and user authentication features for state management.",
    ],
    href: "https://github.com/Adi432144",
  },
  {
    id: "animalmatch",
    name: "Animal Matching Game",
    tag: "MOBILE / GAME",
    accent: "#B79CFF",
    stack: [".NET MAUI", "C#", "XAML"],
    icon: Gamepad2,
    desc: [
      "Built a cross-platform mobile app with an asynchronous game loop for real-time user interactions.",
      "Engineered a pattern-recognition matching engine with dynamic time-scaling for difficulty balance.",
      "Used MVVM architecture to decouple game logic from UI for smooth, responsive touch events.",
    ],
    href: "https://github.com/Adi432144",
  },
];

const SKILLS = [
  { category: "Languages", icon: Code2, items: ["C", "C++", "C#", "Python", "JavaScript", "SQL"] },
  { category: "Frameworks & Engines", icon: Gamepad2, items: ["Unity Engine", ".NET MAUI"] },
  { category: "Web", icon: Globe, items: ["HTML5", "CSS3", "Bootstrap", "React JS"] },
  { category: "Tools", icon: Wrench, items: ["Git", "GitHub", "VS Code", "Jupyter", "Pandas"] },
  {
    category: "Soft Skills",
    icon: Users,
    items: ["Creative Writing", "Critical Reading", "Narrative Design", "Prompt Engineering"],
  },
];

const LANGUAGES = [
  { name: "Hindi", level: "Fluent", fill: 100 },
  { name: "English", level: "Intermediate", fill: 62 },
  { name: "Japanese", level: "Beginner", fill: 28 },
];

const CERTIFICATIONS = [
  { name: "RPG in Unity", issuer: "Brackeys / Cursa" },
  { name: "Start Writing Fiction", issuer: "The Open University" },
  { name: "Creative Writing", issuer: "The Open University" },
  { name: "Problem Solving", issuer: "HackerRank" },
  { name: "Data Structures", issuer: "Great Learning" },
  { name: "Unity VR/AR", issuer: "EBTS" },
  { name: "Front End HTML", issuer: "Great Learning" },
  { name: "Web Design", issuer: "Great Learning" },
  { name: "Business Intelligence", issuer: "IBM" },
  { name: "Predictive Analysis", issuer: "IBM" },
  { name: "Python Basic", issuer: "HackerRank" },
  { name: "JavaScript Basic", issuer: "HackerRank" },
  { name: "SQL Basic", issuer: "HackerRank" },
  { name: "Intro to Generative AI", issuer: "UpGrad" },
  { name: "Advanced Prompt Engineering", issuer: "UpGrad" },
  { name: "ReactJS for Beginners", issuer: "Simplilearn" },
  { name: "Advanced Git Concepts", issuer: "Simplilearn" },
];

const EDUCATION = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science Engineering",
    school: "Integral University, Lucknow",
    period: "08/2022 – 07/2026",
    detail: "GPA: 7.9 / 10",
  },
  {
    id: "inter",
    degree: "Intermediate (Class XII)",
    school: "St. Mary Inter College, Etawah, India",
    period: "01/2021 – 12/2021",
    detail: "GPA: 7.7",
  },
];

/* ---------------------------------------------------------------
   SMALL UI PRIMITIVES
--------------------------------------------------------------- */

function Reveal({ children, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`pf-reveal ${visible ? "pf-reveal-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Chip({ children }) {
  return <span className="pf-chip">{children}</span>;
}

/* ---------------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------------- */

export default function PortfolioSite() {
  const [active, setActive] = useState("summary");
  const [navOpen, setNavOpen] = useState(false);
  const [revealedLines, setRevealedLines] = useState(0);
  const heroRef = useRef(null);
  const rafRef = useRef(null);

  // scroll-spy
  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // terminal boot effect
  useEffect(() => {
    if (revealedLines >= TERMINAL_LINES.length) return;
    const t = setTimeout(() => setRevealedLines((n) => n + 1), revealedLines === 0 ? 400 : 650);
    return () => clearTimeout(t);
  }, [revealedLines]);

  // subtle grid parallax on hero mousemove
  const handleHeroMouseMove = useCallback((e) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        heroRef.current.style.setProperty("--mx", `${x}%`);
        heroRef.current.style.setProperty("--my", `${y}%`);
      }
      rafRef.current = null;
    });
  }, []);

  const goTo = (id) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

        :root {
          --bg-deep: #0a0d12;
          --panel: #12161d;
          --panel-2: #171c25;
          --border: #262c38;
          --border-soft: #1c212b;
          --cyan: #5eead4;
          --orange: #ff8a4c;
          --violet: #b79cff;
          --text: #e9edf3;
          --muted: #8a93a6;
          --dim: #545c6c;
        }

        .pf-root {
          background: var(--bg-deep);
          color: var(--text);
          font-family: 'Inter', system-ui, sans-serif;
          min-height: 100vh;
          line-height: 1.55;
        }

        .pf-root *, .pf-root *::before, .pf-root *::after { box-sizing: border-box; }

        .pf-mono { font-family: 'JetBrains Mono', monospace; }

        a { color: inherit; text-decoration: none; }
        button { font-family: inherit; cursor: pointer; }

        .pf-root a:focus-visible,
        .pf-root button:focus-visible {
          outline: 2px solid var(--cyan);
          outline-offset: 3px;
          border-radius: 4px;
        }

        /* ---------- layout shell ---------- */
        .pf-shell {
          display: grid;
          grid-template-columns: 250px 1fr;
        }
        @media (max-width: 960px) {
          .pf-shell { grid-template-columns: 1fr; }
        }

        /* ---------- sidebar ---------- */
        .pf-sidebar {
          position: fixed;
          top: 0; left: 0; bottom: 0;
          width: 250px;
          background: var(--panel);
          border-right: 1px solid var(--border-soft);
          display: flex;
          flex-direction: column;
          padding: 28px 18px;
          z-index: 40;
          transition: transform 0.3s ease;
        }
        @media (max-width: 960px) {
          .pf-sidebar {
            transform: translateX(-100%);
            box-shadow: 20px 0 40px rgba(0,0,0,0.5);
          }
          .pf-sidebar.open { transform: translateX(0); }
        }

        .pf-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 20px;
          margin-bottom: 18px;
          border-bottom: 1px solid var(--border-soft);
        }
        .pf-brand-dot {
          width: 9px; height: 9px; border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 10px var(--cyan);
          animation: pf-pulse 2.2s ease-in-out infinite;
        }
        @keyframes pf-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .pf-brand-text { font-size: 13px; letter-spacing: 0.02em; color: var(--muted); }
        .pf-brand-text b { color: var(--text); display: block; font-size: 14px; }

        .pf-hierarchy-label {
          font-size: 10.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--dim);
          margin-bottom: 10px;
          padding-left: 4px;
        }

        .pf-navlist { display: flex; flex-direction: column; gap: 2px; flex: 1; }
        .pf-navitem {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          text-align: left;
          color: var(--muted);
          font-size: 13.5px;
          padding: 8px 10px;
          border-radius: 6px;
          border-left: 2px solid transparent;
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
        }
        .pf-navitem:hover { background: var(--panel-2); color: var(--text); }
        .pf-navitem.active {
          color: var(--cyan);
          border-left-color: var(--cyan);
          background: rgba(94,234,212,0.06);
        }
        .pf-navitem svg { flex-shrink: 0; opacity: 0.8; }

        .pf-sidebar-foot {
          padding-top: 16px;
          margin-top: 16px;
          border-top: 1px solid var(--border-soft);
          font-size: 11px;
          color: var(--dim);
        }
        .pf-sidebar-socials { display: flex; gap: 10px; margin-top: 10px; }
        .pf-icon-btn {
          width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--border);
          border-radius: 7px;
          color: var(--muted);
          background: var(--panel-2);
          transition: color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
        }
        .pf-icon-btn:hover { color: var(--cyan); border-color: var(--cyan); transform: translateY(-2px); }

        /* mobile topbar */
        .pf-topbar {
          display: none;
          position: sticky; top: 0; z-index: 50;
          background: rgba(10,13,18,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border-soft);
          padding: 14px 18px;
          align-items: center;
          justify-content: space-between;
        }
        @media (max-width: 960px) { .pf-topbar { display: flex; } }
        .pf-topbar-btn {
          background: var(--panel-2);
          border: 1px solid var(--border);
          border-radius: 7px;
          color: var(--text);
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
        }
        .pf-overlay {
          display: none;
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 35;
        }
        .pf-overlay.show { display: block; }

        /* ---------- main content ---------- */
        .pf-main { grid-column: 2; padding: 0 40px 80px; max-width: 980px; }
        @media (max-width: 960px) { .pf-main { grid-column: 1; padding: 0 20px 60px; } }

        section { scroll-margin-top: 24px; }

        /* ---------- hero / inspector ---------- */
        .pf-hero {
          padding: 64px 0 40px;
          position: relative;
          background-image:
            linear-gradient(rgba(94,234,212,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(94,234,212,0.05) 1px, transparent 1px);
          background-size: 34px 34px;
          background-position: var(--mx, 50%) var(--my, 50%);
          transition: background-position 0.2s ease-out;
        }
        .pf-hero::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(94,234,212,0.08), transparent 55%);
          pointer-events: none;
        }

        .pf-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; color: var(--cyan);
          letter-spacing: 0.08em;
          margin-bottom: 18px;
        }

        .pf-inspector {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
          position: relative;
          z-index: 1;
        }
        .pf-inspector-bar {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 16px;
          background: var(--panel-2);
          border-bottom: 1px solid var(--border-soft);
          font-size: 11.5px;
          color: var(--dim);
        }
        .pf-inspector-dots { display: flex; gap: 6px; margin-right: 6px; }
        .pf-inspector-dots span { width: 9px; height: 9px; border-radius: 50%; background: var(--border); }

        .pf-inspector-body { padding: 26px 28px 28px; }

        .pf-name {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: clamp(32px, 5vw, 52px);
          letter-spacing: -0.01em;
          margin: 0 0 6px;
          background: linear-gradient(120deg, #ffffff 30%, var(--cyan));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pf-role { color: var(--muted); font-size: 15.5px; margin-bottom: 22px; }
        .pf-role b { color: var(--text); }

        .pf-field-row {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 6px 16px;
          padding: 9px 0;
          border-top: 1px dashed var(--border-soft);
          font-size: 13.5px;
        }
        .pf-field-row:first-of-type { border-top: none; }
        .pf-field-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: var(--dim); letter-spacing: 0.05em;
          padding-top: 2px;
        }
        .pf-field-value { color: var(--text); display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
        .pf-field-value svg { color: var(--dim); }

        .pf-component-row { display: flex; flex-wrap: wrap; gap: 8px; }

        .pf-terminal {
          margin-top: 22px;
          background: #0d1015;
          border: 1px solid var(--border-soft);
          border-radius: 8px;
          padding: 14px 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          color: #9fe8d8;
          min-height: 90px;
        }
        .pf-terminal-line { opacity: 0; animation: pf-line-in 0.4s ease forwards; margin-bottom: 4px; }
        .pf-terminal-line:last-child { margin-bottom: 0; }
        @keyframes pf-line-in { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        .pf-cursor {
          display: inline-block; width: 7px; height: 13px;
          background: var(--cyan); margin-left: 2px;
          animation: pf-blink 1s step-end infinite;
          vertical-align: middle;
        }
        @keyframes pf-blink { 50% { opacity: 0; } }

        .pf-cta-row { display: flex; gap: 12px; margin-top: 26px; flex-wrap: wrap; }
        .pf-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 13.5px; font-weight: 600;
          border: 1px solid var(--border);
          transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
        }
        .pf-btn-primary { background: var(--cyan); color: #06211c; border-color: var(--cyan); }
        .pf-btn-primary:hover { transform: translateY(-2px); background: #79f0da; }
        .pf-btn-ghost { background: var(--panel-2); color: var(--text); }
        .pf-btn-ghost:hover { border-color: var(--cyan); color: var(--cyan); transform: translateY(-2px); }

        /* ---------- section heading ---------- */
        .pf-section { padding: 56px 0; border-top: 1px solid var(--border-soft); }
        .pf-section-head { display: flex; align-items: baseline; gap: 12px; margin-bottom: 30px; }
        .pf-section-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: var(--cyan);
          letter-spacing: 0.1em;
        }
        .pf-section-title { font-size: 24px; font-weight: 800; margin: 0; }

        /* ---------- reveal utility ---------- */
        .pf-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .pf-reveal-visible { opacity: 1; transform: translateY(0); }

        /* ---------- experience (console log cards) ---------- */
        .pf-exp-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          margin-bottom: 18px;
          overflow: hidden;
        }
        .pf-exp-head {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px;
          padding: 12px 18px;
          background: var(--panel-2);
          border-bottom: 1px solid var(--border-soft);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--muted);
          flex-wrap: wrap;
        }
        .pf-exp-head .pf-dollar { color: var(--orange); margin-right: 6px; }
        .pf-exp-period {
          font-size: 11px; color: var(--dim);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 3px 10px;
        }
        .pf-exp-body { padding: 18px 20px 20px; }
        .pf-exp-role { font-size: 17px; font-weight: 700; margin: 0 0 2px; }
        .pf-exp-org { color: var(--cyan); font-size: 13.5px; margin-bottom: 14px; }
        .pf-exp-list { margin: 0; padding-left: 0; list-style: none; }
        .pf-exp-list li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          font-size: 14px;
          color: #c7cdda;
        }
        .pf-exp-list li::before {
          content: '›';
          position: absolute; left: 2px; top: -1px;
          color: var(--orange);
          font-weight: 700;
        }

        /* ---------- projects ---------- */
        .pf-project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 18px;
        }
        .pf-project-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .pf-project-card:hover { transform: translateY(-4px); border-color: var(--card-accent, var(--cyan)); }
        .pf-project-top {
          height: 5px;
          background: var(--card-accent, var(--cyan));
        }
        .pf-project-body { padding: 20px; flex: 1; display: flex; flex-direction: column; }
        .pf-project-icon {
          width: 38px; height: 38px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          background: color-mix(in srgb, var(--card-accent, var(--cyan)) 16%, transparent);
          color: var(--card-accent, var(--cyan));
          margin-bottom: 14px;
        }
        .pf-project-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          color: var(--card-accent, var(--cyan));
          margin-bottom: 6px;
        }
        .pf-project-name { font-size: 16.5px; font-weight: 700; margin: 0 0 10px; }
        .pf-project-desc { list-style: none; padding: 0; margin: 0 0 16px; flex: 1; }
        .pf-project-desc li {
          font-size: 13.5px; color: var(--muted);
          margin-bottom: 7px; padding-left: 14px; position: relative;
        }
        .pf-project-desc li::before {
          content: '';
          position: absolute; left: 0; top: 7px;
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--card-accent, var(--cyan));
        }
        .pf-project-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
        .pf-project-links {
          display: flex; align-items: center; gap: 16px;
          border-top: 1px solid var(--border-soft);
          padding-top: 14px;
        }
        .pf-project-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 600; color: var(--text);
        }
        .pf-project-link:hover { color: var(--card-accent, var(--cyan)); }
        .pf-project-link-demo { color: var(--card-accent, var(--cyan)); }

        /* ---------- chips ---------- */
        .pf-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          padding: 5px 10px;
          border-radius: 6px;
          border: 1px solid var(--border);
          background: var(--panel-2);
          color: #c7cdda;
        }

        /* ---------- skills ---------- */
        .pf-skills-grid { display: grid; gap: 22px; }
        .pf-skill-group-head {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 700; color: var(--text);
          margin-bottom: 10px;
        }
        .pf-skill-group-head svg { color: var(--cyan); }
        .pf-skill-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .pf-skill-chips .pf-chip { transition: border-color 0.15s ease, color 0.15s ease; }
        .pf-skill-chips .pf-chip:hover { border-color: var(--cyan); color: var(--cyan); }

        .pf-lang-block { margin-top: 30px; padding-top: 26px; border-top: 1px solid var(--border-soft); }
        .pf-lang-row { display: grid; grid-template-columns: 90px 1fr 90px; align-items: center; gap: 14px; margin-bottom: 12px; }
        .pf-lang-name { font-size: 13.5px; font-weight: 600; }
        .pf-lang-track { height: 6px; background: var(--panel-2); border-radius: 4px; overflow: hidden; border: 1px solid var(--border-soft); }
        .pf-lang-fill { height: 100%; background: linear-gradient(90deg, var(--cyan), var(--violet)); border-radius: 4px; transition: width 1s ease; }
        .pf-lang-level { font-size: 11.5px; color: var(--muted); text-align: right; }

        /* ---------- certifications ---------- */
        .pf-cert-repo-link {
          display: flex; align-items: center; gap: 14px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 16px 18px;
          margin-bottom: 20px;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .pf-cert-repo-link:hover { border-color: var(--cyan); transform: translateY(-2px); }
        .pf-cert-repo-link svg:first-child { color: var(--cyan); flex-shrink: 0; }
        .pf-cert-repo-link > span { display: flex; flex-direction: column; gap: 3px; flex: 1; }
        .pf-cert-repo-title { font-size: 14px; font-weight: 700; color: var(--text); }
        .pf-cert-repo-sub { font-size: 11.5px; color: var(--dim); }
        .pf-cert-repo-arrow { color: var(--dim); flex-shrink: 0; }
        .pf-cert-repo-link:hover .pf-cert-repo-arrow { color: var(--cyan); }

        .pf-cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
        }
        .pf-cert-card {
          display: flex; align-items: flex-start; gap: 10px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 9px;
          padding: 13px 14px;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .pf-cert-card:hover { border-color: var(--orange); transform: translateY(-2px); }
        .pf-cert-card svg { color: var(--orange); flex-shrink: 0; margin-top: 2px; }
        .pf-cert-name { font-size: 13px; font-weight: 600; line-height: 1.3; }
        .pf-cert-issuer { font-size: 11.5px; color: var(--dim); margin-top: 2px; }

        /* ---------- education timeline ---------- */
        .pf-timeline { position: relative; padding-left: 28px; }
        .pf-timeline::before {
          content: '';
          position: absolute; left: 6px; top: 6px; bottom: 6px;
          width: 1px; background: var(--border);
        }
        .pf-timeline-item { position: relative; margin-bottom: 26px; }
        .pf-timeline-item:last-child { margin-bottom: 0; }
        .pf-timeline-dot {
          position: absolute; left: -28px; top: 4px;
          width: 13px; height: 13px; border-radius: 50%;
          background: var(--bg-deep);
          border: 2px solid var(--cyan);
        }
        .pf-edu-degree { font-size: 15.5px; font-weight: 700; margin: 0 0 3px; }
        .pf-edu-school { color: var(--cyan); font-size: 13.5px; margin-bottom: 3px; }
        .pf-edu-meta { font-size: 12px; color: var(--dim); display: flex; gap: 10px; flex-wrap: wrap; }

        /* ---------- contact / footer ---------- */
        .pf-contact-panel {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 36px 32px;
          text-align: left;
          position: relative;
          overflow: hidden;
        }
        .pf-contact-panel::before {
          content: '';
          position: absolute; top: -40%; right: -10%;
          width: 260px; height: 260px; border-radius: 50%;
          background: radial-gradient(circle, rgba(94,234,212,0.12), transparent 70%);
        }
        .pf-contact-title { font-size: 24px; font-weight: 800; margin: 0 0 8px; }
        .pf-contact-sub { color: var(--muted); font-size: 14px; margin-bottom: 24px; max-width: 480px; }
        .pf-contact-grid { display: flex; flex-wrap: wrap; gap: 12px; }
        .pf-contact-item {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 14px;
          background: var(--panel-2);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 13px;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .pf-contact-item:hover { border-color: var(--cyan); color: var(--cyan); }
        .pf-contact-item svg { color: var(--cyan); }

        .pf-footer {
          text-align: center;
          padding: 30px 0 10px;
          font-size: 12px;
          color: var(--dim);
          font-family: 'JetBrains Mono', monospace;
        }

        @media (prefers-reduced-motion: reduce) {
          .pf-reveal { opacity: 1; transform: none; transition: none; }
          .pf-brand-dot, .pf-cursor { animation: none; }
          .pf-terminal-line { animation: none; opacity: 1; }
        }
      `}</style>

      {/* mobile topbar */}
      <div className="pf-topbar">
        <div className="pf-brand" style={{ border: "none", margin: 0, padding: 0 }}>
          <span className="pf-brand-dot" />
          <span className="pf-brand-text pf-mono">
            <b>Mohammad Adi</b>
          </span>
        </div>
        <button className="pf-topbar-btn" onClick={() => setNavOpen((v) => !v)} aria-label="Toggle navigation">
          {navOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>
      <div className={`pf-overlay ${navOpen ? "show" : ""}`} onClick={() => setNavOpen(false)} />

      <div className="pf-shell">
        {/* sidebar / scene hierarchy */}
        <aside className={`pf-sidebar ${navOpen ? "open" : ""}`}>
          <div className="pf-brand">
            <span className="pf-brand-dot" />
            <span className="pf-brand-text pf-mono">
              <b>Mohammad Adi</b>
              Scene Hierarchy
            </span>
          </div>

          <div className="pf-hierarchy-label pf-mono">▾ Portfolio.scene</div>
          <nav className="pf-navlist">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`pf-navitem pf-mono ${active === item.id ? "active" : ""}`}
                onClick={() => goTo(item.id)}
              >
                <ChevronRight size={13} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pf-sidebar-foot">
            <div className="pf-mono">Etawah, U.P. · India</div>
            <div className="pf-sidebar-socials">
              <a className="pf-icon-btn" href="https://github.com/Adi432144" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={15} />
              </a>
              <a className="pf-icon-btn" href="https://linkedin.com/in/mohammad-adi-748109306" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a className="pf-icon-btn" href="mailto:mdadiprivate31@gmail.com" aria-label="Email">
                <Mail size={15} />
              </a>
            </div>
          </div>
        </aside>

        {/* main content */}
        <main className="pf-main">
          {/* ---------- HERO / INSPECTOR ---------- */}
          <section id="summary" ref={heroRef} className="pf-hero" onMouseMove={handleHeroMouseMove}>
            <div className="pf-eyebrow pf-mono">
              <Terminal size={14} /> inspector — GameObject
            </div>

            <div className="pf-inspector">
              <div className="pf-inspector-bar pf-mono">
                <span className="pf-inspector-dots">
                  <span /><span /><span />
                </span>
                Inspector · MohammadAdi.prefab
              </div>

              <div className="pf-inspector-body">
                <h1 className="pf-name">Mohammad Adi</h1>
                <p className="pf-role">
                  <b>Aspiring Developer</b> — Web &amp; Game Development, with a growing focus on Machine Learning
                </p>

                <div className="pf-field-row">
                  <span className="pf-field-label pf-mono">TRANSFORM</span>
                  <span className="pf-field-value">
                    <MapPin size={13} /> Etawah, U.P. 260001, India
                  </span>
                </div>
                <div className="pf-field-row">
                  <span className="pf-field-label pf-mono">TAGS</span>
                  <span className="pf-field-value">
                    <div className="pf-component-row">
                      <Chip>Web Dev</Chip>
                      <Chip>Game Dev</Chip>
                      <Chip>Machine Learning</Chip>
                      <Chip>Narrative Design</Chip>
                    </div>
                  </span>
                </div>
                <div className="pf-field-row">
                  <span className="pf-field-label pf-mono">COMPONENTS</span>
                  <span className="pf-field-value">
                    <div className="pf-component-row">
                      <Chip><Code2 size={11} style={{ marginRight: 4, verticalAlign: -2 }} />C# / C / C++</Chip>
                      <Chip><Gamepad2 size={11} style={{ marginRight: 4, verticalAlign: -2 }} />Unity Engine</Chip>
                      <Chip><BrainCircuit size={11} style={{ marginRight: 4, verticalAlign: -2 }} />Python / SQL</Chip>
                      <Chip><PenTool size={11} style={{ marginRight: 4, verticalAlign: -2 }} />Creative Writing</Chip>
                    </div>
                  </span>
                </div>

                <div className="pf-terminal">
                  {TERMINAL_LINES.slice(0, revealedLines).map((line, i) => (
                    <div className="pf-terminal-line" key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                      {line}
                      {i === revealedLines - 1 && <span className="pf-cursor" />}
                    </div>
                  ))}
                </div>

                <div className="pf-cta-row">
                  <a className="pf-btn pf-btn-primary" href="mailto:mdadiprivate31@gmail.com">
                    <Mail size={15} /> Get in touch
                  </a>
                  <a className="pf-btn pf-btn-ghost" href="https://github.com/Adi432144" target="_blank" rel="noreferrer">
                    <Github size={15} /> View GitHub
                  </a>
                  <button className="pf-btn pf-btn-ghost" onClick={() => goTo("projects")}>
                    <Boxes size={15} /> See projects
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- EXPERIENCE ---------- */}
          <section id="experience" className="pf-section">
            <Reveal className="pf-section-head" as="div">
              <span className="pf-section-tag pf-mono">02</span>
              <h2 className="pf-section-title">Experience</h2>
            </Reveal>

            {EXPERIENCE.map((exp) => (
              <Reveal key={exp.id} className="pf-exp-card">
                <div className="pf-exp-head">
                  <span><span className="pf-dollar">$</span>{exp.script}</span>
                  <span className="pf-exp-period">{exp.period}</span>
                </div>
                <div className="pf-exp-body">
                  <h3 className="pf-exp-role">{exp.role}</h3>
                  <div className="pf-exp-org">{exp.org}</div>
                  <ul className="pf-exp-list">
                    {exp.lines.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </section>

          {/* ---------- PROJECTS ---------- */}
          <section id="projects" className="pf-section">
            <Reveal className="pf-section-head" as="div">
              <span className="pf-section-tag pf-mono">03</span>
              <h2 className="pf-section-title">Projects</h2>
            </Reveal>

            <div className="pf-project-grid">
              {PROJECTS.map((p) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.id} className="pf-project-card" style={{ "--card-accent": p.accent }}>
                    <div className="pf-project-top" />
                    <div className="pf-project-body">
                      <div className="pf-project-icon">
                        <Icon size={19} />
                      </div>
                      <div className="pf-project-tag pf-mono">{p.tag}</div>
                      <h3 className="pf-project-name">{p.name}</h3>
                      <ul className="pf-project-desc">
                        {p.desc.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                      <div className="pf-project-stack">
                        {p.stack.map((s) => (
                          <Chip key={s}>{s}</Chip>
                        ))}
                      </div>
                      <div className="pf-project-links">
                        <a className="pf-project-link" href={p.href} target="_blank" rel="noreferrer">
                          <Github size={14} /> Code
                        </a>
                        {p.demo && (
                          <a className="pf-project-link pf-project-link-demo" href={p.demo} target="_blank" rel="noreferrer">
                            <ExternalLink size={14} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* ---------- SKILLS ---------- */}
          <section id="skills" className="pf-section">
            <Reveal className="pf-section-head" as="div">
              <span className="pf-section-tag pf-mono">04</span>
              <h2 className="pf-section-title">Skills</h2>
            </Reveal>

            <div className="pf-skills-grid">
              {SKILLS.map((group) => {
                const Icon = group.icon;
                return (
                  <Reveal key={group.category}>
                    <div className="pf-skill-group-head">
                      <Icon size={16} /> {group.category}
                    </div>
                    <div className="pf-skill-chips">
                      {group.items.map((item) => (
                        <Chip key={item}>{item}</Chip>
                      ))}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="pf-lang-block">
              <div className="pf-skill-group-head">
                <Globe size={16} /> Languages
              </div>
              {LANGUAGES.map((lang) => (
                <div className="pf-lang-row" key={lang.name}>
                  <span className="pf-lang-name">{lang.name}</span>
                  <div className="pf-lang-track">
                    <div className="pf-lang-fill" style={{ width: `${lang.fill}%` }} />
                  </div>
                  <span className="pf-lang-level pf-mono">{lang.level}</span>
                </div>
              ))}
            </Reveal>
          </section>

          {/* ---------- CERTIFICATIONS ---------- */}
          <section id="certifications" className="pf-section">
            <Reveal className="pf-section-head" as="div">
              <span className="pf-section-tag pf-mono">05</span>
              <h2 className="pf-section-title">Certifications</h2>
            </Reveal>

            <Reveal
              as="a"
              className="pf-cert-repo-link"
              href="https://github.com/Adi432144/CERTIFICATE"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
              <span>
                <span className="pf-cert-repo-title">View verified proofs on GitHub</span>
                <span className="pf-cert-repo-sub pf-mono">github.com/Adi432144/CERTIFICATE</span>
              </span>
              <ExternalLink size={14} className="pf-cert-repo-arrow" />
            </Reveal>

            <div className="pf-cert-grid">
              {CERTIFICATIONS.map((c) => (
                <Reveal key={c.name} className="pf-cert-card">
                  <Award size={17} />
                  <div>
                    <div className="pf-cert-name">{c.name}</div>
                    <div className="pf-cert-issuer">{c.issuer}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ---------- EDUCATION ---------- */}
          <section id="education" className="pf-section">
            <Reveal className="pf-section-head" as="div">
              <span className="pf-section-tag pf-mono">06</span>
              <h2 className="pf-section-title">Education</h2>
            </Reveal>

            <div className="pf-timeline">
              {EDUCATION.map((edu) => (
                <Reveal key={edu.id} className="pf-timeline-item">
                  <div className="pf-timeline-dot" />
                  <h3 className="pf-edu-degree">{edu.degree}</h3>
                  <div className="pf-edu-school">{edu.school}</div>
                  <div className="pf-edu-meta pf-mono">
                    <span><GraduationCap size={12} style={{ verticalAlign: -2, marginRight: 4 }} />{edu.period}</span>
                    <span>{edu.detail}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ---------- CONTACT ---------- */}
          <section id="contact" className="pf-section">
            <Reveal className="pf-section-head" as="div">
              <span className="pf-section-tag pf-mono">07</span>
              <h2 className="pf-section-title">Contact</h2>
            </Reveal>

            <Reveal className="pf-contact-panel">
              <h3 className="pf-contact-title">Let's build something.</h3>
              <p className="pf-contact-sub">
                Open to internships and entry-level roles in web or game development. Reach out any time —
                I usually reply within a day.
              </p>
              <div className="pf-contact-grid">
                <a className="pf-contact-item" href="mailto:mdadiprivate31@gmail.com">
                  <Mail size={15} /> mdadiprivate31@gmail.com
                </a>
                <a className="pf-contact-item" href="tel:+918532954649">
                  <Phone size={15} /> +91 8532954649
                </a>
                <span className="pf-contact-item">
                  <MapPin size={15} /> Etawah, U.P. 260001
                </span>
                <a className="pf-contact-item" href="https://linkedin.com/in/mohammad-adi-748109306" target="_blank" rel="noreferrer">
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a className="pf-contact-item" href="https://github.com/Adi432144" target="_blank" rel="noreferrer">
                  <Github size={15} /> GitHub
                </a>
              </div>
            </Reveal>
          </section>

          <div className="pf-footer">
            © {new Date().getFullYear()} Mohammad Adi — built with React
          </div>
        </main>
      </div>
    </div>
  );
}