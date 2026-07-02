import React from "react";
import { FiServer, FiLayout, FiDatabase, FiTool } from "react-icons/fi";

const SkillCard = ({ title, icon: Icon, skills }) => (
  <div className="border-2 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
        <Icon size={24} className="text-black" />
      </div>
      <h4 className="text-xl font-black uppercase tracking-tight">{title}</h4>
    </div>
    <ul className="group/list space-y-3">
      {skills.map((skill, i) => (
        <li
          key={i}
          className="flex items-center gap-3 font-mono font-bold text-sm text-black transition-all duration-300 group-hover/list:opacity-30 hover:!opacity-100 hover:translate-x-2 hover:text-cyan-600"
        >
          <span className="w-2 h-2 bg-black flex-shrink-0"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillData = [
    {
      title: "Backend",
      icon: FiServer,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "BullMQ", "SSE"],
    },
    {
      title: "Frontend",
      icon: FiLayout,
      skills: [
        "React.js",
        "JavaScript ES6+",
        "Tailwind CSS",
        "React Router",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Database",
      icon: FiDatabase,
      skills: ["MongoDB", "Mongoose", "MySQL"],
    },
    {
      title: "Tools",
      icon: FiTool,
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="bg-[#f0efeb] py-20 border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-m font-mono tracking-widest uppercase text-cyan-600 mb-2 font-bold">
            04. Skills
          </h2>
          <h3 className="text-4xl font-black uppercase tracking-tight">
            My Tech Stack.
          </h3>
          <div className="w-16 h-1 bg-black mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillData.map((data, index) => (
            <SkillCard key={index} {...data} />
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-black flex items-center gap-4">
          <span className="text-xl">|</span>
          <span className="text-sm font-mono font-bold uppercase tracking-widest">
            <span className="text-cyan-600 mr-2">*</span> Always learning.
            Always building.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;

// import React from "react";
// import { FiServer, FiLayout, FiDatabase, FiTool } from "react-icons/fi";

// const SkillCard = ({ title, icon: Icon, skills }) => (
//   <div className="border-2 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
//     <div className="flex items-center gap-4 mb-6">
//       <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
//         <Icon size={24} className="text-black" />
//       </div>
//       <h4 className="text-xl font-black uppercase tracking-tight">{title}</h4>
//     </div>
//     <ul className="group/list space-y-3">
//       {skills.map((skill, i) => (
//         <li
//           key={i}
//           className="flex items-center gap-3 font-mono font-bold text-sm text-black transition-all duration-300 group-hover/list:opacity-30 hover:!opacity-100 hover:translate-x-2 hover:text-[#06B6D4]"
//         >
//           <span className="w-2 h-2 bg-black group-hover/list:bg-[#06B6D4]"></span>
//           {skill}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const Skills = () => {
//   const skillData = [
//     {
//       title: "Backend",
//       icon: FiServer,
//       skills: [
//         "NODE.JS",
//         "EXPRESS.JS",
//         "REST APIS",
//         "BULLMQ",
//         "SERVER-SENT EVENTS (SSE)",
//         "JSON WEB TOKENS (JWT)",
//       ],
//     },
//     {
//       title: "Frontend",
//       icon: FiLayout,
//       skills: [
//         "REACT.JS",
//         "JAVASCRIPT (ES6+)",
//         "TAILWIND CSS",
//         "REDUX TOOLKIT",
//         "REACT ROUTER",
//         "RESPONSIVE DESIGN",
//       ],
//     },
//     {
//       title: "Database",
//       icon: FiDatabase,
//       skills: ["MONGODB", "MONGOOSE", "REDIS", "MYSQL"],
//     },
//     {
//       title: "Devops & Tools",
//       icon: FiTool,
//       skills: ["GIT", "GITHUB", "DOCKER", "POSTMAN", "ENVIRONMENT MANAGEMENT"],
//     },
//   ];

//   return (
//     <section id="skills" className="bg-[#f0efeb] py-20 border-t-2 border-black">
//       <div className="max-w-6xl mx-auto px-6 md:px-12">
//         {/* Section Header */}
//         <div className="mb-16">
//           <h2 className="text-sm font-mono tracking-widest uppercase text-cyan-600 mb-2 font-bold">
//             04. Skills
//           </h2>
//           <h3 className="text-4xl font-black uppercase tracking-tight">
//             My Tech Stack.
//           </h3>
//           <div className="w-16 h-1 bg-black mt-4"></div>
//         </div>

//         {/* 2x2 Grid */}
//         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//           {skillData.map((data, index) => (
//             <SkillCard key={index} {...data} />
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="mt-16 pt-8 border-t border-black flex items-center gap-4">
//           <span className="text-xl">|</span>
//           <span className="text-sm font-mono font-bold uppercase tracking-widest">
//             <span className="text-cyan-600 mr-2">*</span> Always learning.
//             Always building.
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
