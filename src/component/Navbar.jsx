import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass dark:bg-dark-900/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl md:text-2xl bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent"
          >
            Muhammad Alif Thohir
          </motion.h1>

          {/* 🌐 Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                whileHover={{ y: -2 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium cursor-pointer"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* 🌙 Tombol Aksi */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isDark ? 0 : 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`p-2 rounded-full transition-colors duration-500 ${
                isDark ? "bg-gray-900 text-yellow-400" : "bg-white text-black"
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.a
              href="/src/assets/file/Resume_Muhammad_Alif-Thohir_Graphic_Design.pdf"
              download="RESUME-Muhammad_Alif_Thohir.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center space-x-2 btn-primary"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/src/assets/file/Resume_Muhammad_Alif-Thohir_Graphic_Design.pdf"
              download="RESUME-Muhammad_Alif_Thohir.pdf"
              className="mt-4 w-full btn-primary flex items-center justify-center"
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
