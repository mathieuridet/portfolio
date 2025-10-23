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
    description: "The objective of this thesis from 2021 (in French unfortunately) was to present the state-of-the-art "
    + "regarding the following subject : Deep Learning for Predicting Cancer Onset and Treatment Response.",
    image: "/images/no-image.jpg",
    link: "https://cri.pantheonsorbonne.fr/sites/default/files/2021-10/Me%CC%81moire%20M1%20Mathieu%20RIDET.pdf",
    tags: ["Research", "State of the art", "AI"]
  }
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-4">Projects</h1>
      <p className="text-slate-400 mb-12">
        A collection of my recent work in Web3, full-stack development, and security tooling. <br/>
        To know more about my full-time (corporate) activities, reach out to me directly ! 😀
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(project => (
          <div key={project.title} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
            <img src={project.image} alt={project.title} className="w-full h-76 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.link} target="_blank" className="text-blue-400 hover:text-blue-300">
                  Live Demo →
                </a>
                {project.github && (
                  <a href={project.github} target="_blank" className="text-slate-400 hover:text-white">GitHub →</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}