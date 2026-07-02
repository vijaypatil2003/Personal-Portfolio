import vijayPhoto from "../assets/vijay.png";

const stats = [
  { number: "50+", label: "REST APIs Shipped" },
  { number: "2", label: "Live Projects" },
  { number: "20+", label: "MongoDB Models" },
  { number: "6", label: "Months Experience" },
];

const experience = [
  "Engineered <n>50+</n> REST APIs across <n>2</n> live production platforms using reusable controller patterns.",
  "Built a <n>3</n>-layer middleware pipeline — auth → validation → error handling — across all routes.",
  "Implemented RBAC for <n>3</n> roles (Admin, Manager, Agent) with route-level permission guards.",
  "Architected multi-tenant isolation with <n>zero</n> data leakage between clients.",
  "Decoupled email delivery via BullMQ workers — eliminated timeouts under high load.",
  "Designed <n>20+</n> MongoDB models across a multi-tenant SaaS architecture.",
];

const highlight = (text) => {
  const parts = text.split(/(<n>.*?<\/n>)/g);
  return parts.map((part, i) =>
    part.startsWith("<n>") ? (
      <span
        key={i}
        style={{
          color: "#095e6d",
          fontWeight: "800",
          // borderBottom: "2px solid #095e6d",
        }}
      >
        {part.replace(/<\/?n>/g, "")}
      </span>
    ) : (
      part
    ),
  );
};

const About = () => {
  return (
    <>
      {/* 01. ABOUT */}
      <section id="about" className="bg-[#f0efeb] py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-end gap-6 mb-12">
            <div className="w-28 h-28 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white p-1 flex-shrink-0">
              <img
                src={vijayPhoto}
                alt="Vijay Patil"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div>
              <p className="text-s font-mono tracking-widest uppercase text-cyan-600 font-bold mb-1">
                01. About
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black leading-tight">
                Backend-first.
                <br />
                Production-proven.
              </h2>
            </div>
          </div>

          {/* Bio */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-12 font-medium">
            MERN Stack Developer specializing in backend architecture. Built and
            maintained systems supporting multi-tenant architectures, role-based
            access control, and asynchronous job processing during a 6-month
            internship at Instaplex Technologies. I build even when nobody's
            asking me to.
          </p>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white"
              >
                <p className="text-4xl font-black text-cyan-600 mb-1">
                  {stat.number}
                </p>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-600 font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02. EXPERIENCE */}
      <section id="experience" className="bg-[#f0efeb] pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-s font-mono tracking-widest uppercase text-cyan-600 font-bold mb-8">
            02. Experience
          </p>

          <div className="border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Instaplex Technologies
              </h3>
              {/*  Internship  duration */}
              <div className="flex items-center gap-3">
                {/* <span className="bg-cyan-600 text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
                  6 Months
                </span> */}
                <p className="font-mono text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Nov 2025 – May 2026
                </p>
              </div>
            </div>
            <p className="font-mono text-sm font-bold text-cyan-600 uppercase tracking-widest mb-6">
              MERN Stack Developer Intern | 6 Months
            </p>
            <ul className="space-y-4">
              {experience.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-sm leading-7 items-start"
                >
                  <span className="text-cyan-600 font-black flex-shrink-0 w-4">
                    →
                  </span>
                  <span className="text-gray-700 font-medium flex-1">
                    {highlight(item)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 03. EDUCATION */}
      <section id="education" className="bg-[#f0efeb] pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-s font-mono tracking-widest uppercase text-cyan-600 font-bold mb-8">
            03. Education
          </p>

          <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white p-6 inline-block">
            <h4 className="text-xl font-black uppercase tracking-tight mb-1">
              R. C. Patel Institute of Technology
            </h4>
            <p className="font-mono text-sm font-bold text-gray-600">
              B.Tech Computer Science & Engineering
            </p>
            <p className="font-mono text-sm font-bold text-gray-500">
              2021 – 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

// import React from "react";
// import vijayPhoto from "../assets/vijay.png";

// const About = () => {
//   return (
//     <>
//       {/* 01. ABOUT */}
//       <section id="about" className="bg-[#f0efeb] py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row items-end gap-6 mb-16">
//             <div className="w-32 h-32 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white p-1 flex-shrink-0">
//               <img
//                 src={vijayPhoto}
//                 alt="Vijay Patil"
//                 className="w-full h-full object-cover grayscale"
//               />
//             </div>
//             <div>
//               <h2 className="text-sm font-mono tracking-widest uppercase text-cyan-600 mb-1 font-bold">
//                 01. About
//               </h2>
//               <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
//                 Backend-first.
//                 <br /> Production-proven.
//               </h1>
//             </div>
//           </div>

//           <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-xl mb-16">
//             MERN Stack Developer specializing in backend architecture. Built and
//             maintained systems supporting multi-tenant architectures, role-based
//             access control, and asynchronous job processing during a 6-month
//             internship at Instaplex Technologies.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             {[
//               { w: "w-40", label: "50+ REST APIs" },
//               { w: "w-64", label: "MULTI-TENANT" },
//               { w: "w-48", label: "JOB PROCESSING" },
//               { w: "w-32", label: "6 MONTHS" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className={`${item.w} border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white`}
//               >
//                 <h3 className="text-lg font-black uppercase tracking-tight text-cyan-600">
//                   {item.label}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 02. EXPERIENCE */}
//       <section id="experience" className="bg-[#f0efeb] pb-20">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-sm font-mono tracking-widest uppercase text-cyan-600 mb-12 font-bold">
//             02. Experience
//           </h2>
//           <div className="border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
//             <h3 className="text-3xl font-black uppercase tracking-tight mb-2">
//               Instaplex Technologies
//             </h3>
//             <p className="font-mono text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest">
//               Intern Software Engineer | 2025
//             </p>
//             <ul className="space-y-4 font-mono text-sm font-bold">
//               <li className="flex gap-2">
//                 <span>●</span> Built production-grade backend systems.
//               </li>
//               <li className="flex gap-2">
//                 <span>●</span> Implemented BullMQ workers and Redis for job
//                 processing.
//               </li>
//               <li className="flex gap-2">
//                 <span>●</span> Architected multi-tenant SaaS environments.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* 03. EDUCATION */}
//       <section id="education" className="bg-[#f0efeb] pb-20">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-sm font-mono tracking-widest uppercase text-cyan-600 mb-8 font-bold">
//             03. Education
//           </h2>
//           <div className="border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white inline-block">
//             <h4 className="text-lg font-black uppercase tracking-tight">
//               R. C. Patel Institute of Technology
//             </h4>
//             <p className="text-sm font-mono font-bold text-gray-700">
//               B.Tech CSE | 2021–2025
//             </p>
//             <p className="text-sm font-mono font-bold text-cyan-600 mt-2">
//               CGPA: 7.59
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;

// import { Code2, Server, Database, ShieldCheck } from "lucide-react";

// const About = () => {
//   const stats = [
//     {
//       icon: <Server size={22} color="#06B6D4" />,
//       number: "2",
//       label: "Production Applications",
//     },
//     {
//       icon: <Code2 size={22} color="#06B6D4" />,
//       number: "50+",
//       label: "API Endpoints Built",
//     },
//     {
//       icon: <Database size={22} color="#06B6D4" />,
//       number: "20+",
//       label: "MongoDB Models Designed",
//     },
//     {
//       icon: <ShieldCheck size={22} color="#06B6D4" />,
//       number: "6",
//       label: "Months Industry Experience",
//     },
//   ];

//   return (
//     <section id="about" className="bg-white py-24 px-16">
//       <div className="w-full flex items-start gap-16">
//         {/* Left - Photo */}
//         <div className="w-[28%] flex justify-start pt-2">
//           <img
//             src="/vijay.png"
//             alt="Vijay Patil"
//             className="w-56 h-56 object-cover rounded-2xl"
//           />
//         </div>

//         {/* Right - Content */}
//         <div className="w-[72%]">
//           <p
//             className="text-sm font-mono tracking-widest uppercase mb-2"
//             style={{ color: "#06B6D4" }}
//           >
//             About
//           </p>
//           <h2
//             className="text-4xl font-black text-gray-900 mb-6"
//             style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
//           >
//             Backend-first. Production-proven.
//           </h2>

//           <p className="text-gray-600 text-base leading-relaxed mb-4">
//             MERN Stack Developer specializing in backend architecture. Available
//             for full-time roles.
//           </p>
//           <p className="text-gray-600 text-base leading-relaxed mb-4">
//             Built and maintained backend systems supporting multi-tenant
//             architectures, role-based access control, and asynchronous job
//             processing in production environments during a 6-month internship at
//             Instaplex Technologies.
//           </p>
//           <p className="text-gray-600 text-base leading-relaxed mb-10">
//             Beyond work, I build personal projects — because shipping code is
//             how I learn best.
//           </p>

//           {/* Stat Cards */}
//           <div className="grid grid-cols-4 gap-4">
//             {stats.map((stat) => (
//               <div
//                 key={stat.label}
//                 className="bg-[#f0efeb] rounded-xl p-5 flex flex-col gap-3"
//               >
//                 {stat.icon}
//                 <p
//                   className="text-3xl font-black"
//                   style={{
//                     fontFamily: "'Plus Jakarta Sans', sans-serif",
//                     color: "#06B6D4",
//                   }}
//                 >
//                   {stat.number}
//                 </p>
//                 <p className="text-xs text-gray-500 leading-snug">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
