'use client'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Get In Touch
      </motion.h1>
      <motion.p 
        className="text-slate-400 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        Interested in collaborating or have a project in mind? Let&apos;s connect!
      </motion.p>

      <div className="space-y-6 mb-12">
        {[
          {
            href: "mailto:mathieuridet99@gmail.com",
            icon: "📧",
            title: "Email",
            subtitle: "mathieuridet99@gmail.com"
          },
          {
            href: "https://github.com/mathieuridet",
            icon: <FaGithub className="text-2xl" aria-hidden />,
            title: "GitHub",
            subtitle: "@mathieuridet"
          },
          {
            href: "https://twitter.com/mathieurdt",
            icon: <span className="text-2xl" aria-hidden>𝕏</span>,
            title: "Twitter/X",
            subtitle: "@mathieurdt"
          },
          {
            href: "https://www.linkedin.com/in/mathieu-ridet/",
            icon: <FaLinkedin className="text-2xl" aria-hidden />,
            title: "LinkedIn",
            subtitle: "Mathieu Ridet"
          }
        ].map((contact, index) => (
          <motion.a 
            key={contact.title}
            href={contact.href}
            target={contact.href.startsWith('mailto:') ? undefined : "_blank"}
            rel={contact.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
            className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
            whileHover={{ 
              backgroundColor: "rgb(51 65 85)", // slate-700
              scale: 1.02
            }}
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {contact.icon}
            </motion.span>
            <div>
              <motion.h3 
                className="font-semibold"
                whileHover={{ color: "rgb(59 130 246)" }} // blue-500
                transition={{ duration: 0.2 }}
              >
                {contact.title}
              </motion.h3>
              <p className="text-slate-400">{contact.subtitle}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}