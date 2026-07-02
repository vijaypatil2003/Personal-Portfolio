import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiArrowRight,
  FiX,
  FiServer,
  FiDatabase,
  FiCpu,
  FiShoppingBag,
} from "react-icons/fi";
import instabooking from "../assets/instabooking.png";
import instacrm from "../assets/instabooking.png";
import jobtracker from "../assets/instabooking.png";
import viishop from "../assets/instabooking.png";

// import instacrm from "../assets/instacrm.png";
// import jobtracker from "../assets/jobtracker.png";
// import viishop from "../assets/viishop.png";

const projects = [
  {
    id: 1,
    // counter: "01 / 04",
    tag: "Production · Company Project",
    name: "InstaBooking",
    subtitle: "Role-Aware Multi-Tenant Booking Engine",
    description:
      "A unified REST API architecture serving 2+ business verticals (hotels + amusement parks) on a single backend. Multiple roles — User, Admin, Caller, Ticket Booking and more — each with route-level permission guards.",
    tech: "Node.js / Express.js / MongoDB / JWT",
    image: instabooking,
    liveLink: "https://brtengine.instabooking.in/",
    githubLink: null,
    drawer: {
      icon: <FiServer size={16} />,
      problem:
        "Serving 2+ business verticals (hotels and amusement parks) on one backend without code duplication, while enforcing strict role-based access for multiple user types across all tenants.",
      solution: [
        {
          highlight: "Unified API Architecture",
          text: "— single backend serving multiple business verticals with shared middleware and reusable controller patterns.",
        },
        {
          highlight: "12+ MongoDB Models",
          text: "— designed with schema-level tenant isolation ensuring zero data leakage between clients.",
        },
        {
          highlight: "3-Layer Middleware Pipeline",
          text: "— authentication → validation → error handling applied uniformly across 30+ routes.",
        },
        {
          highlight: "Role-Aware Access",
          text: "— User, Admin, Caller, Ticket Booking roles with route-level permission guards.",
        },
      ],
      code: `// Tenant-scoped query — prevents cross-tenant data access
const getBookings = async (req, res) => {
  const { tenantId, role } = req.user;

  const filter = { tenantId };

  // Role-aware data scoping
  if (role === 'caller') {
    filter.assignedTo = req.user._id;
  }

  const bookings = await Booking
    .find(filter)
    .populate('userId', 'name email')
    .sort({ createdAt: -1 });

  res.json({ success: true, data: bookings });
};`,
      codeLabel: "Tenant-Scoped Query with Role-Aware Filtering",
    },
  },
  {
    id: 2,
    // counter: "02 / 04",
    tag: "Production · Company Project",
    name: "InstaCRM",
    subtitle: "SaaS CRM with Async Queue Architecture",
    description:
      "A multi-tenant CRM platform with RBAC for 3 roles (Admin, Manager, Agent), BullMQ async email processing, and SSE real-time streaming — built for competing businesses on shared infrastructure.",
    tech: "Node.js / Express.js / MongoDB / BullMQ / SSE / JWT",
    image: instacrm,
    liveLink: "https://brtengine.instabooking.in/",
    githubLink: null,
    drawer: {
      icon: <FiDatabase size={16} />,
      problem:
        "A CRM serving competing businesses on shared infrastructure — any data bleed between tenants is a critical failure. High-load notification triggers were causing API timeouts on the main thread.",
      solution: [
        {
          highlight: "RBAC from Scratch",
          text: "— 3 roles (Admin, Manager, Agent) with route-level permission guards, eliminating hardcoded role checks.",
        },
        {
          highlight: "BullMQ Workers",
          text: "— decoupled email delivery from request lifecycle, preventing API timeouts under high notification load.",
        },
        {
          highlight: "SSE Real-Time Streaming",
          text: "— live client updates without polling overhead.",
        },
        {
          highlight: "Zero Data Leakage",
          text: "— schema-level tenant isolation ensuring Client A can never access Client B's CRM data.",
        },
      ],
      code: `// BullMQ worker — decoupled from request lifecycle
const emailQueue = new Queue('email-notifications', {
  connection: redisClient
});

// Producer — non-blocking, returns immediately
export const queueEmail = async (payload) => {
  await emailQueue.add('send', payload, {
    attempts: 3,
    backoff: { type: 'exponential', delay: 2000 }
  });
};

// Worker — runs independently
const worker = new Worker('email-notifications',
  async (job) => {
    await sendEmail(job.data);
  },
  { connection: redisClient }
);`,
      codeLabel: "BullMQ Async Email Queue — Decoupled from API",
    },
  },
  {
    id: 3,
    // counter: "03 / 04",
    tag: "Personal · AI Integration",
    name: "JobTracker Pro",
    subtitle: "AI-Powered Application Intelligence Platform",
    description:
      "A full-stack job tracker where Groq's LLaMA 3.3 parses resumes, extracts job descriptions, and scores candidate-job fit across 4 weighted dimensions — built solo, frontend to AI layer.",
    tech: "React.js / Node.js / MongoDB / Groq LLaMA 3.3 / JWT / Zod",
    image: jobtracker,
    liveLink: null,
    githubLink: null,
    drawer: {
      icon: <FiCpu size={16} />,
      problem:
        "Job seekers track applications across spreadsheets with no visibility into fit, no feedback loop between profile and opportunity, and no way to know if a resume matches a role before applying.",
      solution: [
        {
          highlight: "AI Resume Parsing",
          text: "— Groq LLaMA 3.3 extracts structured JSON from uploaded resume, auto-fills profile form.",
        },
        {
          highlight: "AI JD Extraction",
          text: "— paste any job description, AI extracts company, role, salary, location in one click.",
        },
        {
          highlight: "Fit Score Engine",
          text: "— weighted scoring: Skills 40% + Experience 30% + Education 20% + Location 10%, with matched/missing skills breakdown.",
        },
        {
          highlight: "9-Stage Pipeline",
          text: "— Not Applied → Selected/Rejected, with activity log on every status change.",
        },
      ],
      code: `// Fit score — computed on-demand, never stored
// (stored score goes stale on profile update)
const computeFitScore = async (profile, jobDescription) => {
  const prompt = buildScoringPrompt(profile, jobDescription);

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" }
  });

  const raw = JSON.parse(response.choices[0].message.content);

  // Normalize on backend — never trust raw LLM shape
  return normalizeFitScore(raw);
};`,
      codeLabel: "On-Demand Fit Scoring — LLM Output Normalized Server-Side",
    },
  },
  {
    id: 4,
    // counter: "04 / 04",
    tag: "Personal · Full-Stack",
    name: "ViiShop",
    subtitle: "Full-Stack Commerce with Cloud Asset Pipeline",
    description:
      "A dual-module MERN e-commerce platform with separate user and admin interfaces, Cloudinary image pipeline, and paginated filtered product browsing for large catalogs.",
    tech: "React.js / Node.js / Express.js / MongoDB / Cloudinary / Tailwind CSS",
    image: viishop,
    liveLink: null,
    githubLink: "https://github.com/vijaypatil2003/ViiShop-E-Commerce-Website",
    drawer: {
      icon: <FiShoppingBag size={16} />,
      problem:
        "Image storage on the server doesn't scale — large catalogs slow down the backend. Product browsing with no pagination or filtering degrades frontend performance on large datasets.",
      solution: [
        {
          highlight: "Cloudinary Integration",
          text: "— offloaded image storage from server, enabling dynamic transformations without backend changes.",
        },
        {
          highlight: "Dual-Module Architecture",
          text: "— separate user and admin interfaces with role-based protected routing.",
        },
        {
          highlight: "Paginated + Filtered Browsing",
          text: "— reduced frontend data load, improving perceived performance on large catalogs.",
        },
        {
          highlight: "Full Product Lifecycle",
          text: "— creation to order fulfillment handled end-to-end in the admin module.",
        },
      ],
      code: `// Cloudinary upload — server-side, not client-side
// Keeps API keys off the browser
const uploadToCloudinary = async (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: 'image' },
      (error, result) => {
        if (error) reject(error);
        else resolve({
          url: result.secure_url,
          publicId: result.public_id
        });
      }
    );
    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};`,
      codeLabel: "Server-Side Cloudinary Upload — Keys Never Exposed to Client",
    },
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const project = projects[activeProject];

  if (typeof window !== "undefined") {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "unset";
  }

  const nextProject = () =>
    setActiveProject((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="bg-[#f0efeb] py-16 border-t-2 border-black overflow-hidden relative"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-8 border-b-2 border-black pb-6">
        <div>
          <h2 className="text-m font-mono tracking-widest uppercase text-cyan-600 mb-2 font-bold">
            03. Proof of Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight">
            Shipped Systems.
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={prevProject}
            disabled={activeProject === 0}
            className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] disabled:opacity-20 disabled:cursor-not-allowed hover:enabled:bg-black hover:enabled:text-white"
          >
            <FiArrowRight size={16} className="rotate-180" />
          </button>
          <span className="font-mono text-sm font-black">
            {activeProject + 1} / {projects.length}
          </span>
          <button
            onClick={nextProject}
            disabled={activeProject === projects.length - 1}
            className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] disabled:opacity-20 disabled:cursor-not-allowed hover:enabled:bg-black hover:enabled:text-white"
          >
            <FiArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* Left */}
        <div className="flex-1 w-full pt-2">
          <div className="mb-4">
            <span className="text-sm font-mono font-bold text-gray-500 mb-2 block">
              {project.counter}
            </span>
            <span className="text-xs font-mono font-bold text-cyan-600 uppercase tracking-widest mb-3 block">
              {project.tag}
            </span>
            <h4 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight leading-[1.1] mb-1">
              {project.name}
            </h4>
            <p className="text-sm font-mono text-gray-500 font-bold mb-4">
              {project.subtitle}
            </p>
          </div>
          <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed max-w-md">
            {project.description}
          </p>
          <div className="text-black font-mono text-xs md:text-sm font-bold mb-6 uppercase tracking-widest border-l-2 border-cyan-600 pl-3">
            {project.tech}
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 font-bold uppercase tracking-wider border-2 border-black transition-all hover:bg-cyan-600 hover:text-black text-xs md:text-sm"
            >
              Case Study <FiArrowUpRight size={16} strokeWidth={3} />
            </button>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-black px-5 py-2.5 font-bold uppercase tracking-wider border-2 border-black transition-all hover:bg-black hover:text-white text-xs md:text-sm"
              >
                Live Demo <FiArrowUpRight size={16} strokeWidth={3} />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-black px-5 py-2.5 font-bold uppercase tracking-wider border-2 border-black transition-all hover:bg-black hover:text-white text-xs md:text-sm"
              >
                GitHub <FiGithub size={16} strokeWidth={3} />
              </a>
            )}
          </div>

          {/* Project navigation dots */}
          <div className="flex gap-2 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveProject(i)}
                className={`w-2 h-2 border border-black transition-all ${activeProject === i ? "bg-black w-6" : "bg-transparent"}`}
              />
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div
          className="flex-1 w-full relative group cursor-pointer"
          onClick={() => setIsDrawerOpen(true)}
        >
          <div className="relative border-2 border-black bg-white aspect-[16/10] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top filter grayscale-0 group-hover:grayscale transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white text-black px-4 py-2 font-bold font-mono uppercase text-sm">
                View Case Study
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[620px] bg-[#f0efeb] border-l-4 border-black z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-y-auto ${isDrawerOpen ? "translate-x-0 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="sticky top-0 bg-[#f0efeb] border-b-4 border-black p-6 flex justify-between items-center z-10">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-600 uppercase tracking-widest mb-1 block">
              Case Study — {project.counter}
            </span>
            <h2 className="text-2xl font-black uppercase tracking-tight">
              {project.name}
            </h2>
            <p className="text-xs font-mono text-gray-500 font-bold mt-1">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            <FiX size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-8 space-y-10">
          {/* Problem */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 inline-block border border-black"></span>{" "}
              The Problem
            </h3>
            <p className="text-gray-700 leading-relaxed font-medium text-sm">
              {project.drawer.problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 inline-block border border-black"></span>{" "}
              The Solution
            </h3>
            <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ul className="space-y-4 text-sm">
                {project.drawer.solution.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-cyan-600 font-black flex-shrink-0 mt-0.5">
                      →
                    </span>
                    <span className="text-gray-700 font-medium">
                      <span className="font-black text-black">
                        {item.highlight}
                      </span>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Code Snippet */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-4">
              {project.drawer.codeLabel}
            </h3>
            <div className="bg-[#111] text-zinc-300 p-6 font-mono text-xs overflow-x-auto border-2 border-black shadow-[4px_4px_0px_0px_rgba(6,182,212,1)]">
              <pre>{project.drawer.code}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// import React, { useState } from "react";
// import {
//   FiArrowUpRight,
//   FiGithub,
//   FiArrowRight,
//   FiX,
//   FiServer,
//   FiDatabase,
// } from "react-icons/fi";
// import project1 from "../assets/project1.png"; // Assuming your image is here

// const FeaturedProject = () => {
//   // 1. State to control the drawer
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   // Prevent background scrolling when drawer is open
//   if (typeof window !== "undefined") {
//     document.body.style.overflow = isDrawerOpen ? "hidden" : "unset";
//   }

//   return (
//     <section
//       id="projects"
//       className="bg-[#f0efeb] py-16 border-t-2 border-black overflow-hidden relative"
//     >
//       {/* --- EXISTING PROJECT HEADER & CONTENT (Kept intact) --- */}
//       <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-8 border-b-2 border-black pb-6">
//         <div>
//           <h2 className="text-sm font-mono tracking-widest uppercase text-cyan-600 mb-2 font-bold">
//             03. Proof of Work
//           </h2>
//           <h3 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight">
//             Shipped Systems.
//           </h3>
//         </div>
//         <a
//           href="#project-2"
//           className="group flex items-center gap-3 text-right cursor-pointer hover:-translate-y-1 transition-transform"
//         >
//           <div className="hidden sm:block">
//             <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">
//               Next Project
//             </div>
//             <div className="text-sm font-bold text-black uppercase group-hover:text-cyan-600 transition-colors">
//               Auth Microservice
//             </div>
//           </div>
//           <div className="w-10 h-10 flex-shrink-0 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
//             <FiArrowRight size={16} />
//           </div>
//         </a>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
//         {/* Left Column */}
//         <div className="flex-1 w-full pt-2">
//           <div className="flex flex-col mb-4">
//             <span className="text-sm font-mono font-bold text-gray-500 mb-2">
//               01 / 03
//             </span>
//             <h4 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight leading-[1.1]">
//               Cargo Logistics
//               <br />
//               Multi-Tenant SaaS.
//             </h4>
//           </div>
//           <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed max-w-md">
//             A comprehensive logistics platform engineered to handle complex
//             freight routing. Offloaded heavy parsing to background workers to
//             prevent main-thread bottlenecking.
//           </p>

//           <div className="text-black font-mono text-xs md:text-sm font-bold mb-6 uppercase tracking-widest border-l-2 border-black pl-3">
//             React.js / Node.js / MongoDB / SSE
//           </div>

//           <div className="flex flex-wrap gap-3">
//             {/* 2. Changed this button to open the Case Study Drawer instead of Live Demo */}
//             <button
//               onClick={() => setIsDrawerOpen(true)}
//               className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 font-bold uppercase tracking-wider border-2 border-black transition-all hover:bg-[#06B6D4] hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs md:text-sm"
//             >
//               Read Case Study <FiArrowUpRight size={16} strokeWidth={3} />
//             </button>
//             <a
//               href="#github"
//               className="inline-flex items-center gap-2 bg-transparent text-black px-5 py-2.5 font-bold uppercase tracking-wider border-2 border-black transition-all hover:bg-black hover:text-white hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs md:text-sm"
//             >
//               GitHub <FiGithub size={16} strokeWidth={3} />
//             </a>
//           </div>
//         </div>

//         {/* Right Column: Image */}
//         <div
//           className="flex-1 w-full relative group cursor-pointer"
//           onClick={() => setIsDrawerOpen(true)}
//         >
//           <div className="relative border-2 border-black bg-white aspect-[16/10] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1">
//             <img
//               src={project1}
//               alt="Cargo Management Dashboard"
//               className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
//             />

//             {/* Overlay hint to click */}
//             <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <span className="bg-white text-black px-4 py-2 font-bold font-mono uppercase text-sm">
//                 View Architecture
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//           THE SLIDE-OUT DRAWER OVERLAY
//           ========================================= */}

//       {/* 1. The Dark Background Overlay (Clicks close the drawer) */}
//       <div
//         className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
//         onClick={() => setIsDrawerOpen(false)}
//       ></div>

//       {/* 2. The Brutalist Drawer Panel */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full md:w-[600px] bg-[#f0efeb] border-l-4 border-black z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-y-auto ${isDrawerOpen ? "translate-x-0 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]" : "translate-x-full"}`}
//       >
//         {/* Drawer Header */}
//         <div className="sticky top-0 bg-[#f0efeb] border-b-4 border-black p-6 flex justify-between items-center z-10">
//           <div className="flex flex-col">
//             <span className="text-xs font-mono font-bold text-cyan-600 uppercase tracking-widest mb-1">
//               System Architecture
//             </span>
//             <h2 className="text-2xl font-black uppercase tracking-tight">
//               Cargo Logistics
//             </h2>
//           </div>
//           <button
//             onClick={() => setIsDrawerOpen(false)}
//             className="p-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
//           >
//             <FiX size={24} strokeWidth={3} />
//           </button>
//         </div>

//         {/* Drawer Content */}
//         <div className="p-8 space-y-12">
//           {/* Section: The Challenge */}
//           <section>
//             <h3 className="text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
//               <span className="w-4 h-4 bg-red-500 inline-block border border-black"></span>{" "}
//               The Bottleneck
//             </h3>
//             <p className="text-gray-700 leading-relaxed font-medium">
//               Processing daily shipping manifests (often 10,000+ rows of CSV
//               data) synchronously was blocking the Node.js event loop. This
//               caused the main dashboard to freeze for active dispatchers,
//               leading to a degraded user experience across the entire
//               multi-tenant system.
//             </p>
//           </section>

//           {/* Section: The Solution */}
//           <section>
//             <h3 className="text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
//               <span className="w-4 h-4 bg-green-500 inline-block border border-black"></span>{" "}
//               The Solution
//             </h3>
//             <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
//               <ul className="space-y-4 font-mono text-sm">
//                 <li className="flex gap-3">
//                   <FiServer className="text-cyan-600 shrink-0 mt-1" size={18} />
//                   <span>
//                     <strong>Decoupled Processing:</strong> Offloaded CSV parsing
//                     and database writes to{" "}
//                     <span className="bg-yellow-200 px-1">
//                       BullMQ background workers
//                     </span>{" "}
//                     backed by Redis.
//                   </span>
//                 </li>
//                 <li className="flex gap-3">
//                   <FiDatabase
//                     className="text-cyan-600 shrink-0 mt-1"
//                     size={18}
//                   />
//                   <span>
//                     <strong>Real-Time Updates:</strong> Implemented{" "}
//                     <span className="bg-yellow-200 px-1">
//                       Server-Sent Events (SSE)
//                     </span>{" "}
//                     to push non-blocking progress updates (e.g., "75%
//                     processed") to the React frontend.
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </section>

//           {/* Section: Database Schema Example */}
//           <section>
//             <h3 className="text-lg font-black uppercase tracking-widest mb-4">
//               Tenant Schema Isolation
//             </h3>
//             <div className="bg-[#111] text-zinc-300 p-6 font-mono text-xs overflow-x-auto border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,182,212,1)]">
//               <pre>{`// Mongoose Schema Design
// const CargoSchema = new Schema({
//   tenantId: {
//     type: Schema.Types.ObjectId,
//     ref: 'Tenant',
//     required: true,
//     index: true // Crucial for multi-tenant query speed
//   },
//   manifestId: { type: String, required: true },
//   status: {
//     type: String,
//     enum: ['PENDING', 'IN_TRANSIT', 'DELIVERED'],
//     default: 'PENDING'
//   },
//   routeData: {
//     origin: String,
//     destination: String,
//     waypoints: [WaypointSchema]
//   }
// }, { timestamps: true });

// // Compound index to prevent data bleeding
// CargoSchema.index({ tenantId: 1, manifestId: 1 });
// `}</pre>
//             </div>
//           </section>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProject;
