"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

// 🌌 Background animasi seperti PortfolioShowcase
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

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const educationData = [
    {
      id: 1,
      title: "Universitas Teknologi Bandung",
      subtitle: "Bachelor's Degree in Informatics Engineering",
      period: "September 2023 – Present",
      location: "Bandung, Indonesia",
      desc: "Currently pursuing a degree focused on technology, software development, and digital innovation.",
      icon: <GraduationCap size={26} />,
    },
    {
      id: 2,
      title: "SMAN 1 Cipeundeuy",
      subtitle: "MIPA — Final Score: 82.5",
      period: "2019 – 2022",
      location: "Bandung Barat, Indonesia",
      desc: "Built a strong foundation in science and analytical thinking, which supports my transition into technology and design.",
      icon: <GraduationCap size={26} />,
    },
    {
      id: 3,
      title: "Most Active 12th Grade Student",
      subtitle: "Bimbel CoLearn — 2023",
      period: "2023",
      location: "Bandung, Indonesia",
      desc: "Recognized for active participation, consistency, and leadership in academic activities.",
      icon: <Award size={26} />,
    },
    {
      id: 4,
      title: "3rd Place, National Short Movie Competition",
      subtitle: "UFP 2024 — Editor",
      period: "2024",
      location: "Bandung, Indonesia",
      desc: "Achieved 3rd place nationally as video editor, demonstrating creativity, teamwork, and storytelling skills.",
      icon: <Award size={26} />,
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 overflow-hidden text-gray-900 dark:text-white transition-colors duration-700"
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
        {/* 🔹 Section Title */}
        <motion.h2
          ref={ref}
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-14 bg-gradient-to-r from-[#7A5FFF] to-[#4B3F72] bg-clip-text text-transparent"
        >
          Education Journey
        </motion.h2>

        {/* 🔹 Timeline */}
        <div className="relative border-l border-[#7A5FFF]/30 pl-8 ml-2 sm:ml-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12"
            >
              {/* Dot Glow */}
              <div className="absolute -left-[27px] top-2 w-5 h-5 rounded-full bg-gradient-to-br from-[#7A5FFF] to-[#4B3F72] shadow-[0_0_15px_rgba(122,95,255,0.6)]" />

              {/* Card */}
              <div className="bg-white/80 dark:bg-[#0E061E]/70 border border-[#7A5FFF]/20 backdrop-blur-md rounded-3xl p-6 shadow-md hover:shadow-[0_0_25px_rgba(122,95,255,0.25)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A5FFF] to-[#4B3F72] text-white shadow-lg">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#9C87FF] to-[#6D5B98] bg-clip-text text-transparent">
                      {edu.title}
                    </h3>
                    <p className="text-[#7A5FFF] dark:text-[#BBA9E8] text-sm font-medium">
                      {edu.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {edu.desc}
                </p>

                {/* Footer Info */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} /> {edu.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} /> {edu.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
