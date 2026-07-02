import React from "react";
import {
  FiLinkedin,
  FiGithub,
  FiMail,
  FiPhone,
  FiDownload,
  FiArrowUpRight,
} from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#f0efeb] py-20 border-t-2 border-black"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-sm font-mono tracking-widest uppercase text-cyan-600 mb-2 font-bold">
            05. Contact
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight">
            Let's Build Something Together.
          </h3>
          <div className="w-20 h-1 bg-black mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-3 border-2 border-black bg-white p-8 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <p className="text-xl font-medium text-gray-800 mb-10 leading-relaxed max-w-lg">
                MERN Stack Developer open to full-time roles — backend-strong,
                full-stack capable.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-black uppercase tracking-widest border-2 border-black transition-all hover:bg-[#06B6D4] hover:text-black hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-sm w-max"
                >
                  Download Resume <FiDownload size={20} strokeWidth={3} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vijayptl0106@gmail.com&su=Hiring%20Inquiry%20%E2%80%94%20Vijay%20Patil%20(MERN%20Stack%20Developer)&body=Hi%20Vijay,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-transparent text-black px-8 py-4 font-black uppercase tracking-widest border-2 border-black transition-all hover:bg-black hover:text-white hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-sm w-max"
                >
                  Hire Me
                  <FiArrowUpRight size={20} strokeWidth={3} />
                </a>
              </div>

              <div className="space-y-3 font-mono text-sm font-bold text-gray-700 mb-10">
                <div className="flex items-center gap-3">
                  <FiMail /> vijayptl0106@gmail.com
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone /> +91 70573 31995
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-mono font-bold uppercase tracking-widest text-gray-500 mb-6">
                Connect with me
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    icon: FiMail,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=vijayptl0106@gmail.com&su=Hiring%20Inquiry%20%E2%80%94%20Vijay%20Patil&body=Hi%20Vijay,",
                  },
                  { icon: FiPhone, href: "tel:+917057331995" },
                  {
                    icon: FiLinkedin,
                    href: "https://linkedin.com/in/vijaypatil0106",
                  },
                  { icon: FiGithub, href: "https://github.com/vijaypatil2003" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  >
                    <item.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 border-2 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-8 border-b-2 border-black pb-4">
                What I Can Help With
              </h4>
              <ul className="space-y-6 font-mono text-sm font-bold">
                {[
                  "Backend Development",
                  "API Design & Architecture",
                  "Database Design",
                  "Multi-Tenant Systems",
                  "Full-Stack MERN Projects",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-600 flex-shrink-0"></span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f0efeb] border-2 border-black p-6 mt-8">
              <div className="text-cyan-600 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <span>*</span> Open to Opportunities
              </div>
              <p className="text-sm font-mono font-bold leading-relaxed">
                Available for full-time MERN Stack / Backend roles. Let's talk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import React from "react";
// import {
//   FiLinkedin,
//   FiGithub,
//   FiArrowUpRight,
//   FiMail,
//   FiPhone,
// } from "react-icons/fi";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="bg-[#f0efeb] py-20 border-t-2 border-black"
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         {/* Header */}
//         <div className="mb-12">
//           <h2 className="text-sm font-mono tracking-widest uppercase text-cyan-600 mb-2 font-bold">
//             04. Contact
//           </h2>
//           <h3 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight">
//             Let's build something together.
//           </h3>
//           <div className="w-20 h-1 bg-black mt-6"></div>
//         </div>

//         {/* The "Equal Height" Container */}
//         <div className="grid lg:grid-cols-5 gap-8 items-stretch">
//           {/* Left Column (3/5) */}
//           <div className="lg:col-span-3 border-2 border-black bg-white p-8 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
//             <div>
//               <p className="text-xl font-medium text-gray-800 mb-10 leading-relaxed max-w-lg">
//                 I'm actively seeking trainee software engineer roles where I can
//                 contribute and grow.
//               </p>

//               <a
//                 href="mailto:vijaypatil@example.com"
//                 className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 font-black uppercase tracking-widest border-2 border-black transition-all hover:bg-[#06B6D4] hover:text-black hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-lg w-max mb-10"
//               >
//                 Hire Me (For HR) <FiArrowUpRight size={24} strokeWidth={3} />
//               </a>

//               {/* Text-based Contact Details for clarity */}
//               <div className="space-y-3 font-mono text-sm font-bold text-gray-700 mb-10">
//                 <div className="flex items-center gap-3">
//                   <FiMail /> vijaypatil@example.com
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <FiPhone /> +91 00000 00000
//                 </div>
//               </div>
//             </div>

//             {/* Unified Contact Bar */}
//             <div>
//               <div className="text-sm font-mono font-bold uppercase tracking-widest text-gray-500 mb-6">
//                 Connect with me
//               </div>
//               <div className="flex flex-wrap gap-4">
//                 {[
//                   {
//                     icon: FiMail,
//                     label: "Email",
//                     href: "mailto:vijaypatil@example.com",
//                   },
//                   { icon: FiPhone, label: "Phone", href: "tel:+910000000000" },
//                   { icon: FiLinkedin, label: "LinkedIn", href: "#" },
//                   { icon: FiGithub, label: "GitHub", href: "#" },
//                 ].map((item, index) => (
//                   <a
//                     key={index}
//                     href={item.href}
//                     className="w-14 h-14 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
//                   >
//                     <item.icon size={24} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column (2/5) */}
//           <div className="lg:col-span-2 border-2 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
//             <div>
//               <h4 className="text-sm font-black uppercase tracking-widest mb-8 border-b-2 border-black pb-4">
//                 What I can help with
//               </h4>
//               <ul className="space-y-6 font-mono text-sm font-bold">
//                 {[
//                   "Backend Development",
//                   "API Design & Architecture",
//                   "Database Design",
//                   "System Optimization",
//                   "Bug Fixing & Support",
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3">
//                     <span className="w-2 h-2 bg-cyan-600"></span> {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Trainee Callout */}
//             <div className="bg-[#f0efeb] border-2 border-black p-6 mt-8">
//               <div className="text-cyan-600 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
//                 <span>*</span> Looking for a trainee?
//               </div>
//               <p className="text-sm font-mono font-bold leading-relaxed">
//                 I'm actively looking for opportunities to learn, contribute and
//                 grow.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
