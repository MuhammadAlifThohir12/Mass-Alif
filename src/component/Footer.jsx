import { motion } from 'framer-motion';
import { Code } from 'lucide-react'; // pastikan sudah di-import
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { FaBehance } from "react-icons/fa"; // ✅ Import Behance icon

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/hyymas_lif/", label: "Instagram" },
    { icon: Github, href: "https://github.com/MuhammadAlifThohir12", label: "GitHub" },
    { icon: FaBehance, href: "https://www.behance.net/MuhammadAlifThohir", label: "Behance" }, // ✅ Ganti Twitter jadi Behance
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-alif-thohir/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
            Muhammad Alif Thohir
          </h3>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
            {['Home', 'About', 'Education', 'Experience', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>
          
          <div className="flex justify-center space-x-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
        
<div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
  <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
    © {new Date().getFullYear()} Muhammad Alif Thohir. All Rights Reserved.
  </p>
  <div className="flex items-center space-x-1 text-gray-400 text-xs sm:text-sm">
    <span>Crafted with</span>
    <Code className="text-primary-500" size={14} />
    <span>using React & Tailwind CSS</span>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
