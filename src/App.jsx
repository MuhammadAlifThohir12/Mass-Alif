"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Education from "./component/Education";
import WorkExperience from "./component/WorkExperience";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

// 🌌 Dark Cinematic Background
const GalaxyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050509]">
      {/* Deep gradient lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#09090e] via-[#07070b] to-[#050509] opacity-95"></div>

      {/* Floating glow lights */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full blur-[180px] bg-blue-900/15"
        animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "-200px", left: "-250px" }}
      />
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[150px] bg-cyan-800/20"
        animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "-200px", right: "-250px" }}
      />

      {/* Twinkling stars */}
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 2 + "px",
            height: Math.random() * 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            opacity: Math.random() * 0.7 + 0.2,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            y: [0, -10, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// 💫 Elegant Intro Screen
const IntroScreen = ({ onFinish }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 400), // Hi 👋
      setTimeout(() => setStep(2), 1700), // Nama
      setTimeout(() => setStep(3), 5500), // Fade out
      setTimeout(onFinish, 6500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1, scale: 1 }}
      animate={step >= 3 ? { opacity: 0, scale: 1.08 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <GalaxyBackground />

      <AnimatePresence>
        {/* 👋 Hi */}
        {step >= 1 && step < 3 && (
          <motion.div
            key="hi"
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-100"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              Hi
            </motion.h1>
            <motion.span
              className="text-5xl origin-bottom"
              animate={{ rotate: [0, 25, 0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            >
              👋
            </motion.span>
          </motion.div>
        )}

        {/* ✨ Nama */}
        {step >= 2 && step < 3 && (
          <motion.h2
            key="name"
            className="mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-cyan-400 to-blue-400 drop-shadow-2xl text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            I’m Muhammad Alif Thohir
          </motion.h2>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// 🚀 Main App
export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ThemeProvider>
      <div className="font-sans min-h-screen bg-white dark:bg-[#050509] text-gray-900 dark:text-white transition-colors duration-300">
        <AnimatePresence>
          {showIntro && <IntroScreen onFinish={() => setShowIntro(false)} />}
        </AnimatePresence>

        {!showIntro && (
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Education />
              <WorkExperience />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
