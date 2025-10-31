"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PenTool, Palette, Monitor, Globe } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skills = [
    { icon: PenTool, name: "Graphic Design", desc: "Photoshop, Illustrator" },
    { icon: Palette, name: "Creative Production", desc: "Content Creation, Video Editing, Branding" },
    { icon: Monitor, name: "UI/UX Design", desc: "Figma, Wireframing, Prototyping (Learning)" },
    { icon: Globe, name: "Front-End Development", desc: "HTML, CSS, JavaScript (Learning)" },
  ];

  const prismaSkills = [
    "Photoshop", "Illustrator", "Premiere Pro",
    "After Effects", "Lightroom", "Canva", "Figma",
    "HTML", "CSS",
  ];

  const toolLogos = [
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968428.png", alt: "After Effects" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968525.png", alt: "Premiere Pro" },
    { src: "/show/416889/behance-internet-media.svg", alt: "Behance" },
    { src: "/show/341669/canva.svg", alt: "Canva" },
    { src: "/show/452185/css-3.svg", alt: "CSS" },
    { src: "/show/452202/figma.svg", alt: "Figma" },
    { src: "/show/373669/html.svg", alt: "HTML" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968472.png", alt: "Illustrator" },
    { src: "/show/452045/js.svg", alt: "JavaScript" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png", alt: "Photoshop" },
  ];

  return (
    <section
      id="about"
      className="relative section-padding px-4 sm:px-6 md:px-8 
                 bg-white text-gray-900 dark:bg-[#050505] dark:text-white transition-colors duration-500"
    >
      {/* 🌌 Background aura hanya aktif di dark mode */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative container mx-auto max-w-6xl z-10"
      >
        {/* Judul */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                       bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 120 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
          />
        </div>

        {/* Konten */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Skill Cards */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 order-1 lg:order-2"
          >
            {skills.map(({ icon: Icon, name, desc }, index) => (
              <motion.div
                key={name}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow:
                    "0 0 25px rgba(139,92,246,0.4)",
                }}
                className="p-5 sm:p-6 rounded-2xl border transition-all duration-300
                           bg-gray-50 border-gray-200 
                           dark:bg-[#111]/70 dark:border-white/10 
                           backdrop-blur-lg hover:dark:border-indigo-500/40 hover:shadow-lg"
              >
                <div className="p-3 rounded-lg bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 w-fit mb-3">
                  <Icon className="text-indigo-500 dark:text-indigo-400" size={28} />
                </div>
                <h4 className="font-semibold mb-2 text-lg">{name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Deskripsi */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-5 sm:space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-2xl font-semibold">
              Creative Specialist & Aspiring UI/UX Designer
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a Creative Specialist and Visual Designer with a passion for turning ideas into
              visuals that connect with people. Skilled in branding, graphic design, and creative
              production — now expanding into UI/UX and front-end development to bring digital
              experiences to life with design precision and emotional impact.
            </p>

            {/* Skill bubbles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {prismaSkills.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white 
                             bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 
                             bg-[length:200%_200%] animate-[gradient-x_6s_ease_infinite] 
                             shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Logo scroll */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2, duration: 0.8 }}
              className="relative overflow-hidden w-full mt-6 sm:mt-10"
            >
              <div className="flex gap-8 sm:gap-12 animate-scroll-left w-max opacity-80 hover:opacity-100 transition-all">
                {toolLogos.concat(toolLogos).map((tool, i) => (
                  <motion.img
                    key={i}
                    src={tool.src}
                    alt={tool.alt}
                    className="h-8 sm:h-12 w-auto object-contain hover:scale-110 transition duration-300"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
