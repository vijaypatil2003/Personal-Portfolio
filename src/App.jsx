import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FeaturedProject from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <Navbar toggleDark={toggleDark} isDark={isDark} />
      <Hero />
      <About />
      <Skills isDark={isDark} />
      <FeaturedProject />
      <Contact />
    </div>
  );
}

export default App;
