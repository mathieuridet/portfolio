'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: "Smart Contract Audit Agent",
    description: "Automated security analysis tool for Ethereum smart contracts using Slither and AI-powered report generation.",
    image: "/images/audit-agent.png",
    link: "https://audit-agent-frontend.vercel.app",
    github: "https://github.com/mathieuridet/audit-agent/blob/main/README.md",
    tags: ["React", "Vite", "Node.js", "Slither", "Ollama", "Docker"]
  },
  {
    title: "MRT dApp",
    description: "Decentralized NFT rewards platform with hourly minting, Merkle proof claims, and yield farming.",
    image: "/images/mrt-dapp.png",
    link: "https://mrt-nft.vercel.app/nft",
    github: "https://github.com/mathieuridet/mrt-dapp/blob/main/README.md",
    tags: ["Next.js", "Solidity", "Ethers.js", "Web3", "Smart Contracts"]
  },
  {
    title: "AI Master Thesis",
    description: "The objective of this thesis from 2021 (in French) was to present the state-of-the-art "
    + "regarding the following subject : Deep Learning for Predicting Cancer Onset and Treatment Response.",
    image: "/images/no-image.jpg",
    link: "https://cri.pantheonsorbonne.fr/sites/default/files/2021-10/Me%CC%81moire%20M1%20Mathieu%20RIDET.pdf",
    tags: ["Research", "State of the art", "AI"]
  }
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </motion.h1>
      <motion.p 
        className="text-slate-400 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        A collection of my recent work in Web3, full-stack development, and security tooling. <br/>
        To know more about my full-time (corporate) activities, reach out to me directly ! 😀
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title} 
            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
            whileHover={{ 
              scale: 1.02,
              borderColor: "rgb(59 130 246)" // blue-500
            }}
          >
            <motion.img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-76 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <motion.h2 
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + (index * 0.2) }}
              >
                {project.title}
              </motion.h2>
              <motion.p 
                className="text-slate-400 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 + (index * 0.2) }}
              >
                {project.description}
              </motion.p>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span 
                    key={tag} 
                    className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + (index * 0.2) + (tagIndex * 0.1) }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 + (index * 0.2) }}
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Live Demo →
                </a>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    className="text-slate-400 hover:text-white transition"
                  >
                    GitHub →
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}