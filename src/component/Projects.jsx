"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiCanva,
  SiFigma,
  SiAdobeillustrator,
} from "react-icons/si";

// 🌌 Background animasi
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#0A0014] dark:via-[#13042B] dark:to-[#000000] bg-gradient-to-b from-[#F8F6FF] via-[#ECE7FC] to-[#FFFFFF]" />
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#8C6FFF]/15 to-transparent"
        style={{ left: `${i * 10}%`, opacity: 0.15 }}
      />
    ))}
  </div>
);

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState("projects");

  // 📂 Data Projects
  const projects = [
    {
      title: "Loyalty Card Student Design",
      technologies: ["Illustrator", "Canva"],
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ffb53f236301833.68e8c337b1d1e.png",
      demo: "https://www.behance.net/gallery/236301833/Loyalty-Card-Design-Babah-Ahui-Retro-Edition",
    },
    {
      title: "Visual Branding & Food Design",
      technologies: ["Photoshop", "Illustrator"],
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f5b14c236315773.68e8ff8cee11c.png",
      demo: "https://www.behance.net/gallery/236315773/Visual-Branding-Food-Design",
    },
    {
      title: "Vape Branding Design",
      technologies: ["Photoshop", "Branding"],
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2c784d236597999.68ef3327be421.png",
      demo: "https://www.behance.net/gallery/236597999/Creative-Vape-Branding-Collection",
    },
    {
      title: "Dessert & Beverage Story Design",
      technologies: ["Photoshop", "Canva"],
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/537ab5236525583.68edf2d230d0f.png",
      demo: "https://www.behance.net/gallery/236525583/Instagram-Stories-Promotion-Food-Drink-Design",
    },
    {
      title: "Foom Device Design",
      technologies: ["Premiere Pro"],
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/48e0d8236597999.68ef3327bfbaf.png",
      demo: "https://www.instagram.com/reel/DAUy1Ikv4AW/",
    },
    {
      title: "Creative Vape Branding Collection",
      technologies: ["Photoshop", "Canva"],
      image: "/public/3.png",
      demo: "https://www.behance.net/gallery/236597999/Creative-Vape-Branding-Collection",
    },
    {
      title: "Creative Vape Branding — OXVA Series",
      technologies: ["Illustrator", "Photoshop"],
      image: "/public/vape (5).png",
      demo: "https://www.behance.net/gallery/236601735/Creative-Vape-Branding-OXVA-Series",
    },
    {
      title: "Modern Poster Design Collection",
      technologies: ["Photoshop", "Illustrator"],
      image: "/public/poster behance.png",
      demo: "https://www.behance.net/gallery/236605997/Modern-Poster-Design-Collection",
    },
    {
      title: "Social Media Visual Branding & Menu Design",
      technologies: ["Photoshop", "Canva","Ilustrator"],
      image: "/public/design feeds.png",
      demo: "https://www.behance.net/gallery/237018025/Social-Media-Visual-Branding-Menu-Design",
    },
    {
      title: "Bequ Liquid Design",
      technologies: ["Photoshop","Ilustrator"],
      image: "/public/project akhir (1).png",
      demo: "https://www.behance.net/gallery/237557549/liquid-bequ-design",
    },
    {
      title: "Foom Liquid Design",
      technologies: ["Photoshop", "Canva","Ilustrator"],
      image: "/public/project akhir (2).png",
      demo: "https://www.behance.net/gallery/237557743/foom-liquid-design",
    },
    {
      title: "Liquid Design Vape",
      technologies: ["Photoshop","Ilustrator"],
      image: "/public/project akhir (3).png",
      demo: "https://www.behance.net/gallery/237557197/Liquid-Design-Vape-Flavor-in-Motion",
    },
    {
      title: "Logo Design",
      technologies: ["Ilustrator"],
      image: "/public/logo design .png",
      demo: "https://www.behance.net/gallery/237565393/Logo-Design",
    },
    {
      title: "Thumbnail Youtube Design",
      technologies: ["Canva"],
      image: "/public/thumnbail .png",
      demo: "https://www.behance.net/gallery/237566625/Thumbnail-Youtube-Design",
    },
    {
      title: "Menu A3 BABAH A HUI Restaurant",
      technologies: ["Canva"],
      image: "/public/menu a3 babah .png",
      demo: "https://www.behance.net/gallery/237567757/menu-a3-babah-ahui-restaurant",
    },
  ];

  // 🧾 Data Certificates — tanpa link demo
  const certificates = [
    {
      title: "Graduation & Appreciation Certificate CoFriends",
      technologies: ["Colearn"],
      image: "/public/serti 1.jfif",
    },
    {
      title: "Most Active CoFriends Nominee Certificate",
      technologies: ["Colearn Awards"],
      image: "/public/serti 2.jfif",
    },
    {
      title: "3rd Place in Short Movie Category (CORISINDO Competition)",
      technologies: ["CORISINDO"],
      image: "/public/serti 3.jpg",
    },
  ];

  // 🎨 Tools Graphic Design
  const designTools = [
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={38} /> },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={38} /> },
    { name: "Figma", icon: <SiFigma size={38} /> },
    { name: "Canva", icon: <SiCanva size={38} /> },
    { name: "Premiere Pro", icon: <SiAdobepremierepro size={38} /> },
    { name: "After Effects", icon: <SiAdobeaftereffects size={38} /> },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden text-gray-900 dark:text-white transition-colors duration-700"
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* 🔹 Section Title */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-14 bg-gradient-to-r from-[#7A5FFF] to-[#4B3F72] bg-clip-text text-transparent"
        >
          Portfolio Showcase
        </motion.h2>

        {/* 🔹 Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-3 bg-black/10 dark:bg-white/5 backdrop-blur-md p-2 rounded-3xl border border-[#7A5FFF]/20">
            {["projects", "certificates", "tools"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#7A5FFF] to-[#4B3F72] text-white shadow-lg"
                    : "text-gray-500 dark:text-gray-300 hover:text-[#7A5FFF]"
                }`}
              >
                {tab === "projects"
                  ? "Projects"
                  : tab === "certificates"
                  ? "Certificates"
                  : "Tools Graphic Design"}
              </button>
            ))}
          </div>
        </div>

        {/* 🔹 Content */}
        <AnimatePresence mode="wait">
          {/* 🖼 Projects */}
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="bg-white/80 dark:bg-[#0E061E]/70 rounded-3xl border border-[#7A5FFF]/20 shadow-md overflow-hidden hover:shadow-[0_0_20px_rgba(122,95,255,0.25)] transition-all duration-300 w-full max-w-[420px]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-[#9C87FF] to-[#6D5B98] bg-clip-text text-transparent line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] border border-[#6D5B98]/40 rounded-full text-[#4B3F72] dark:text-[#BBA9E8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[#7A5FFF] hover:text-[#9C87FF] text-sm font-medium mt-1"
                    >
                      <ExternalLink size={15} /> View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* 📜 Certificates */}
          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="bg-white/80 dark:bg-[#0E061E]/70 rounded-3xl border border-[#7A5FFF]/20 shadow-md overflow-hidden hover:shadow-[0_0_20px_rgba(122,95,255,0.25)] transition-all duration-300 w-full max-w-[420px]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-[#9C87FF] to-[#6D5B98] bg-clip-text text-transparent line-clamp-2">
                      {cert.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] border border-[#6D5B98]/40 rounded-full text-[#4B3F72] dark:text-[#BBA9E8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* 🛠 Tools */}
          {activeTab === "tools" && (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 place-items-center"
            >
              {designTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center bg-white/70 dark:bg-[#0E061E]/60 border border-[#7A5FFF]/20 rounded-2xl w-[220px] h-[180px] shadow-md hover:shadow-[0_0_15px_rgba(122,95,255,0.2)] transition-all duration-300"
                >
                  <div className="text-[#7A5FFF] mb-2">{tool.icon}</div>
                  <p className="text-sm sm:text-base text-center">
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
