"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp } from "react-icons/fa"; // ✅ Tambah ikon WhatsApp saja

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

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const form = useRef();
  const [sending, setSending] = useState(false);

  const phoneNumber = "6283829047529"; // 🔹 Nomor WhatsApp kamu

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const title = formData.get("title");
    const message = formData.get("message");

    const encodedMsg = encodeURIComponent(
      `*New Message from Portfolio Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${title}\n*Message:*\n${message}`
    );

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    window.open(whatsappURL, "_blank");

    setTimeout(() => setSending(false), 2000);
    form.current.reset();
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center 
                 text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <AnimatedBackground />

      {/* Efek cahaya latar */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7A5FFF]/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#4B3F72]/10 blur-[160px] rounded-full" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-6 md:px-8 max-w-6xl"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold mb-3 
                       bg-gradient-to-r from-[#7A5FFF] to-[#4B3F72] 
                       bg-clip-text text-transparent"
          >
            Let’s Collaborate
          </motion.h2>
          <div className="h-[3px] w-28 bg-gradient-to-r from-[#7A5FFF] to-[#4B3F72] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ℹ️ Info Kontak */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold">Open for Creative Projects</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              Have a vision in mind? Let’s make it real. I’m open for design collaborations,
              UI/UX projects, or any creative challenge that blends imagination with precision.
            </p>

            <div className="space-y-5">
              {[
                { label: "Email", value: "muhammadalifthohir@gmail.com" },
                { label: "Phone", value: `(+62) ${phoneNumber.slice(2)}` },
                { label: "Location", value: "Bandung Barat, Jawa Barat" },
              ].map(({ label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="bg-white/70 border border-[#7A5FFF]/20 
                             dark:bg-[#0E061E]/70 dark:border-[#7A5FFF]/20 
                             backdrop-blur-md rounded-xl p-4 
                             hover:shadow-[0_0_20px_rgba(122,95,255,0.2)] 
                             transition-all duration-300"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-500">{label}</p>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 🟢 Form WhatsApp */}
          <motion.form
            ref={form}
            onSubmit={sendToWhatsApp}
            initial={{ x: 60, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="relative 
                       bg-white/80 border border-[#7A5FFF]/20 
                       dark:bg-[#0E061E]/70 dark:border-[#7A5FFF]/20 
                       rounded-2xl p-8 backdrop-blur-xl 
                       shadow-[0_0_30px_rgba(122,95,255,0.1)]"
          >
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-[#1a1a1a] border border-[#7A5FFF]/20"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-[#1a1a1a] border border-[#7A5FFF]/20"
              />
            </div>

            <input
              type="text"
              name="title"
              placeholder="Subject"
              className="w-full p-3 mt-6 rounded-lg bg-gray-50 dark:bg-[#1a1a1a] border border-[#7A5FFF]/20"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 mt-6 rounded-lg resize-none bg-gray-50 dark:bg-[#1a1a1a] border border-[#7A5FFF]/20"
            />

            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(122,95,255,0.6)" }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={sending}
              className="relative w-full mt-6 py-3 rounded-xl 
                         bg-[#25D366] text-white font-semibold tracking-wide 
                         flex items-center justify-center gap-2 overflow-hidden"
            >
              {sending ? (
                "Opening WhatsApp..."
              ) : (
                <>
                  <FaWhatsapp size={20} className="text-white" /> {/* ✅ Icon kecil dan rapi */}
                  Send via WhatsApp
                </>
              )}
            </motion.button>

            <p className="text-gray-600 dark:text-gray-500 text-sm text-center mt-4 relative z-10">
              Message will be sent directly to WhatsApp.
            </p>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
