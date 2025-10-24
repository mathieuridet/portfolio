'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      className="border-b border-slate-800 bg-slate-900/50 backdrop-blur"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Mathieu Ridet
          </Link>
        </motion.div>
        <ul className="flex gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/projects", label: "Projects" },
            { href: "/experience", label: "Experience" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" }
          ].map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link 
                href={item.href} 
                className="hover:text-blue-400 transition"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}