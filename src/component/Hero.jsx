import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowDown, Sparkles } from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import profile from "../assets/profilealif-no-bg.png"; // pastikan path benar

// 👉 Efek Mengetik (Dynamic Skills)
const TypingEffect = ({ texts = [], typingSpeed = 120, deletingSpeed = 80, pause = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentIndex];
    let timer;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
        if (displayedText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, texts, currentIndex, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="text-purple-500 dark:text-purple-400 font-semibold text-xl sm:text-2xl">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/hyymas_lif/", label: "Instagram" },
    { icon: Github, href: "https://github.com/MuhammadAlifThohir12", label: "GitHub" },
    { icon: FaBehance, href: "https://www.behance.net/MuhammadAlifThohir", label: "Behance" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-alif-thohir/", label: "LinkedIn" },
  ];

  const skills = [
    "Graphic Design",
    "UI/UX Design",
    "Social Media Strategy",
    "Content Creation",
    "Front-End Development",
    "Creative Direction",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-24 sm:pt-32 overflow-hidden"
    >
      {/* 🌈 Background Gradient Cinematic */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(155, 81, 224, 0.25), transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(108, 43, 217, 0.3), transparent 70%),
            radial-gradient(circle at 50% 80%, rgba(64, 0, 128, 0.3), transparent 80%),
            linear-gradient(135deg, #0D0D0D 0%, #150429 50%, #0A0018 100%)
          `,
          backgroundSize: "200% 200%",
          filter: "blur(80px)",
        }}
      />

      {/* ✨ Garis Cahaya Bergerak */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ["0% 100%", "100% 0%", "0% 100%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(155, 81, 224, 0.1) 0px,
              rgba(155, 81, 224, 0.1) 2px,
              transparent 2px,
              transparent 6px
            )
          `,
          backgroundSize: "300% 300%",
        }}
      />

      {/* 🎨 Konten Utama */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-6xl relative z-10 px-6"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 🖼️ Foto Profil */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full opacity-20 blur-xl"
              />
              <motion.img
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src={profile}
                alt="Profile"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
              />
            </div>
          </motion.div>

          {/* 🧠 Deskripsi */}
          <div className="text-center lg:text-left space-y-4 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start space-y-2">
              <Sparkles className="text-purple-400" size={40} />
              <span className="uppercase tracking-widest text-sm sm:text-base font-medium text-gray-400 dark:text-gray-400">
                Creative Specialist | Visual Designer | Social Media Strategist | Front-End Enthusiast
              </span>
            </motion.div> 

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                Muhammad Alif Thohir
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              I’m a multidisciplinary creative passionate about <b>design, digital storytelling,</b> 
              and <b>building engaging online experiences.</b> My journey blends <b>visual design, 
              social media strategy, UI/UX,</b> and <b>front-end development</b> to bring creative 
              visions to life through impactful visuals and interactive design.
            </motion.p>

            <motion.div variants={itemVariants}>
              <TypingEffect texts={skills} />
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition">
                Let's Collaborate
              </button>

              <a
                href="#projects"
                className="px-6 py-3 border-2 border-purple-500 text-purple-500 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition"
              >
                View My Work
              </a>
            </motion.div>

            {/* 🌐 Sosial Media */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-purple-500"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 🔽 Scroll Down */}
        <motion.div variants={itemVariants} className="flex justify-center mt-16">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-gray-400 dark:text-gray-500"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
