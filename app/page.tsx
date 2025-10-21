import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Software Engineer
        </h1>
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          (Currently Full Stack Developer Java/React)
        </h2>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Building decentralized applications, smart contracts, and AI-powered tools.
          Passionate about Web3, security, and CrossFit.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            View Projects
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-slate-600 hover:border-blue-400 rounded-lg font-semibold transition">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Cards */}
          <ProjectCard
            title="Smart Contract Audit Agent"
            description="Automated security auditor using Slither & AI"
            link="https://audit-agent-frontend.vercel.app"
            tags={["React", "Node.js", "Slither", "Ollama"]}
          />
          <ProjectCard
            title="MRT dApp"
            description="NFT minting, token rewards & staking platform"
            link="https://your-mrt-dapp-url.com"
            tags={["Next.js", "Solidity", "Web3", "Merkle Trees"]}
          />
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'Next.js', 'TypeScript', 'Solidity', 'Node.js', 'Spring Boot', 'Docker', 'AWS'].map(skill => (
            <div key={skill} className="p-4 bg-slate-800 rounded-lg text-center hover:bg-slate-700 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ title, description, link, tags }: any) {
  return (
    <a href={link} target="_blank" className="block p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition border border-slate-700 hover:border-blue-500">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag: string) => (
          <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}