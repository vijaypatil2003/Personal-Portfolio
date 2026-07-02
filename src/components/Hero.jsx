import vijayPhoto from "../assets/vijay.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#f0efeb] flex items-center px-6 py-20 border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Photo */}
        <div className="w-full md:w-1/3">
          <div className="relative border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white p-3">
            <img
              src={vijayPhoto}
              alt="Vijay Patil"
              className="w-full grayscale hover:grayscale-0 transition-all duration-500"
            />

            {/* Rotating Badge */}
            <div className="fixed bottom-8 right-8 w-28 h-28 z-50">
              {" "}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-spin"
                style={{ animationDuration: "10s" }}
              >
                <path
                  id="circle"
                  d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
                <text
                  fontSize="11.5"
                  fill="#111"
                  fontWeight="700"
                  letterSpacing="1"
                >
                  <textPath href="#circle">
                    MERN Stack Developer . Backend Engineer .{" "}
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-sm font-bold">Hire Me</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black mb-8 leading-[0.9]">
            50+ APIs. Multi-Tenant SaaS. <br />
            <span className="text-cyan-600">Production-Grade.</span>
          </h1>

          <p className="text-xl text-gray-700 mb-10 max-w-xl font-medium">
            Backend-first developer building production systems. Focused on
            scalability, not tutorials.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-black text-white px-8 py-4 font-black uppercase tracking-widest border-2 border-black hover:bg-cyan-600 hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(6,182,212,1)]"
            >
              Resume ↗
            </a>
            <a
              href="#contact"
              className="font-bold uppercase tracking-widest border-b-2 border-black hover:text-cyan-600 hover:border-cyan-600 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import vijayPhoto from "../assets/vijay.png";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="h-screen bg-[#f0efeb] flex items-center px-16 pt-20 pb-10 relative overflow-hidden"
//     >
//       <div className="w-full flex items-center justify-between gap-10">
//         {/* Left - Photo */}
//         <div className="relative w-[45%] flex justify-center items-center">
//           <img
//             src={vijayPhoto}
//             alt="Vijay Patil"
//             className="w-[420px] object-contain"
//           />

//           {/* Rotating Badge */}
//           <div className="absolute bottom-0 left-0 w-32 h-32">
//             <svg
//               viewBox="0 0 100 100"
//               className="w-full h-full animate-spin"
//               style={{ animationDuration: "10s" }}
//             >
//               <path
//                 id="circle"
//                 d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
//                 fill="none"
//               />
//               <text
//                 fontSize="11.5"
//                 fill="#111"
//                 fontWeight="700"
//                 letterSpacing="1"
//               >
//                 <textPath href="#circle">
//                   MERN Stack Developer . Backend Engineer .{" "}
//                 </textPath>
//               </text>
//             </svg>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
//                 <span className="text-white text-sm font-bold">Hire Me</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right - Text */}
//         <div className="w-[55%]">
//           <h1
//             className="text-6xl leading-tight text-gray-900 mb-6"
//             style={{
//               fontFamily: "'Plus Jakarta Sans', sans-serif",
//               fontWeight: 900,
//             }}
//           >
//             50+ APIs. Multi-tenant SaaS. Production systems,{" "}
//             <span style={{ color: "#06B6D4" }}>not tutorials.</span>
//           </h1>
//           <p className="text-lg text-gray-600 mb-8 max-w-lg">
//             I build production-grade backend systems — not tutorial projects.
//           </p>
//           <div className="flex items-center gap-6">
//             <a
//               href="/resume.pdf"
//               target="_blank"
//               className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
//             >
//               Resume ↗
//             </a>
//             <a
//               href="#contact"
//               className="text-sm font-medium text-gray-800 underline underline-offset-4 hover:text-black transition-colors"
//             >
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
