"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Briefcase, Users } from "lucide-react";

const WorkExperience = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const experiences = [
    {
      type: "work",
      company: "Pain & Company (PT Subur Sakti)",
      position: "Senior Creative Specialist",
      location: "Bandung, Indonesia",
      period: "Sept 2024 – Apr 2025",
      description:
        "Led creative direction and managed branding across multiple platforms. Improved content workflows and boosted engagement through strong visual storytelling and digital campaigns.",
      technologies: ["Photoshop", "Illustrator", "Branding", "Content Strategy"],
    },
    {
      type: "work",
      company: "Babah A Hui Restaurant",
      position: "Creative & Visual Designer",
      location: "Bandung, Indonesia",
      period: "Jul 2025 – oct 2025",
      description:
        "Designed menu layouts, social media content, and marketing visuals to strengthen brand identity. Developed engaging promotional materials to support campaigns and seasonal events.",
      technologies: ["Photoshop", "Premiere Pro", "Canva", "Content Creation"],
    },
    {
      type: "work",
      company: "Vape Court Bojong Soang",
      position: "Freelance Graphic Designer",
      location: "Bojong Soang, Indonesia",
      period: "Aug 2025 – Oct 2025",
      description:
        "Created packaging designs, Instagram feed layouts, and logos for product branding and marketing campaigns. Worked closely with clients to ensure alignment with target audiences.",
      technologies: ["Photoshop", "Illustrator", "Logo Design", "Social Media"],
    },
    {
      type: "work",
      company: "Lightbox Indonesia",
      position: "Photography & Creative Intern",
      location: "Bandung, Indonesia",
      period: "Apr 2025 – Jul 2025",
      description:
        "Produced product photography and promotional videos using professional studio lighting techniques. Edited visual content to meet brand standards and campaign goals.",
      technologies: ["Photography", "Illustrator", "Photoshop"],
    },
    {
      type: "leadership",
      company: "Art Performance — Bandung Creative Hub",
      position: "Head of Documentation",
      location: "Bandung, Indonesia",
      period: "Oct 2024",
      description:
        "Directed the documentation team for photo and video coverage, ensuring high-quality media output and timely publication during the event.",
      technologies: ["Leadership", "Photography", "Teamwork"],
    },
    {
      type: "leadership",
      company: "Short Film Project — “Berbeda Tapi Satu Kesatuan”",
      position: "Director",
      location: "Bandung, Indonesia",
      period: "May 2024",
      description:
        "Directed a short film project, leading the team through the entire production process from concept to post-production.",
      technologies: ["Filmmaking", "Creative Direction", "Team Leadership"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden text-gray-900 dark:text-white transition-colors duration-700"
    >
      {/* 🌌 Background like PortfolioShowcase */}
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

      {/* ✨ Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 container mx-auto max-w-6xl px-4"
      >
        {/* 🔹 Title */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#7A5FFF] to-[#4B3F72] bg-clip-text text-transparent"
          >
            Experience & Leadership
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 180 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-[3px] bg-gradient-to-r from-[#7A5FFF] via-[#9C87FF] to-[#4B3F72] mx-auto rounded-full mt-3"
          />
        </div>

        {/* 🔹 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 0 25px rgba(122, 95, 255, 0.25)",
              }}
              className="relative group bg-white/80 dark:bg-[#0E061E]/70 backdrop-blur-sm border border-[#7A5FFF]/20 rounded-2xl p-6 transition-all duration-500 shadow-md hover:shadow-[0_0_20px_rgba(122,95,255,0.25)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#7A5FFF]/10 via-transparent to-[#4B3F72]/10 blur-2xl rounded-2xl transition duration-700"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center space-x-2 mb-3">
                  {exp.type === "work" ? (
                    <Briefcase
                      className="text-[#7A5FFF] group-hover:text-[#9C87FF] transition"
                      size={20}
                    />
                  ) : (
                    <Users
                      className="text-[#BBA9E8] group-hover:text-[#9C87FF] transition"
                      size={20}
                    />
                  )}
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {exp.company}
                  </h3>
                </div>

                <p className="text-[#7A5FFF] dark:text-[#BBA9E8] font-semibold mb-1">
                  {exp.position}
                </p>

                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-2 mb-1">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-2 mb-3">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-[#7A5FFF]/30 text-[#4B3F72] dark:text-[#BBA9E8] rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
