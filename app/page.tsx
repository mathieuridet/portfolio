'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type ProjectCardProps = {
  title: string;
  description?: string;
  link?: string | { href: string; external?: boolean };
  tags?: string[];
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <section className="text-center mb-20">
        <motion.h1 
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Software Engineer
        </motion.h1>
        <motion.p 
          className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Building (decentralized) applications, smart contracts, and AI-powered tools. <br/>
          Passionate about Web3, Cloud, and DevOps.
        </motion.p>
      </section>

      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="px-6 py-2 border border-slate-600 hover:border-blue-400 hover:text-blue-400 rounded-lg font-semibold transition flex items-center gap-2">
            View All Projects <span>→</span>
          </Link>
        </div>
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Project Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ProjectCard
              title="Smart Contract Audit Agent"
              description="Automated security auditor using Slither & AI"
              link="https://audit-agent-frontend.vercel.app"
              tags={["React", "Node.js", "Slither", "Ollama"]}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <ProjectCard
              title="MRT dApp"
              description="NFT minting, token rewards & staking platform"
              link="https://mrt-nft.vercel.app/nft"
              tags={["Next.js", "Solidity", "Web3", "Merkle Trees"]}
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="mb-20">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          More About Me
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Link href="/experience" className="group p-6 bg-slate-800 rounded-xl border border-slate-700 block">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">💼</span>
                <h3 className="text-xl font-bold">Experience</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Full-stack engineer working with React, Java, and modern cloud technologies
              </p>
              <span className="text-purple-400 group-hover:text-purple-300 flex items-center gap-2">
                Learn more <span>→</span>
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <Link href="/about" className="group p-6 bg-slate-800 rounded-xl border border-slate-700 block">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">👨‍💻</span>
                <h3 className="text-xl font-bold">About</h3>
              </div>
              <p className="text-slate-400 mb-4">
                My journey, skills, certifications, and what drives me as a developer
              </p>
              <span className="text-blue-400 group-hover:text-blue-300 flex items-center gap-2">
                Learn more <span>→</span>
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <Link href="/contact" className="group p-6 bg-slate-800 rounded-xl border border-slate-700 block">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📞</span>
                <h3 className="text-xl font-bold">Contact Me</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Let&apos;s connect! Reach out for collaborations, projects, or just to say hi
              </p>
              <span className="text-green-400 group-hover:text-green-300 flex items-center gap-2">
                Get in touch <span>→</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section>
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          Tech Stack
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'Next.js', 'TypeScript', 'Solidity', 'Node.js', 'Spring Boot', 'Docker', 'AWS'].map((skill, index) => (
            <motion.div 
              key={skill} 
              className="p-4 bg-slate-800 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 2.2 + (index * 0.1) }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgb(51 65 85)" // slate-700
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}


function ProjectCard({ title, description, link, tags = [] }: ProjectCardProps) {
  const href = typeof link === "string" ? link : link?.href;
  const isExternal = typeof link === "string" ? true : !!link?.external;

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="block p-6 bg-slate-800 rounded-xl border border-slate-700"
      whileHover={{ 
        scale: 1.02,
        backgroundColor: "rgb(51 65 85)", // slate-700
        borderColor: "rgb(59 130 246)" // blue-500
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <motion.h3 
        className="text-xl font-bold mb-2"
        whileHover={{ color: "rgb(59 130 246)" }} // blue-500
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      {description && <p className="text-slate-400 mb-4">{description}</p>}
      <div className="flex gap-2 flex-wrap">
        {tags.map((t, index) => (
          <motion.span 
            key={t} 
            className="px-2 py-1 text-xs rounded bg-slate-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}