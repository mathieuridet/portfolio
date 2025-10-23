import Link from 'next/link'

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
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Software Engineer
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Building (decentralized) applications, smart contracts, and AI-powered tools. <br/>
          Passionate about Web3, Cloud, and DevOps.
        </p>
      </section>

      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="px-6 py-2 border border-slate-600 hover:border-blue-400 hover:text-blue-400 rounded-lg font-semibold transition flex items-center gap-2">
            View All Projects <span>→</span>
          </Link>
        </div>
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
            link="https://mrt-nft.vercel.app/nft"
            tags={["Next.js", "Solidity", "Web3", "Merkle Trees"]}
          />
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">More About Me</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/experience" className="group p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition border border-slate-700 hover:border-purple-500">
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

          <Link href="/about" className="group p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition border border-slate-700 hover:border-blue-500">
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

          <Link href="/contact" className="group p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition border border-slate-700 hover:border-green-500">
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
        </div>
      </section>

      {/* Tech Stack Preview */}
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


function ProjectCard({ title, description, link, tags = [] }: ProjectCardProps) {
  const href = typeof link === "string" ? link : link?.href;
  const isExternal = typeof link === "string" ? true : !!link?.external;

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="block p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition border border-slate-700 hover:border-blue-500"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {description && <p className="text-slate-400 mb-4">{description}</p>}
      <div className="flex gap-2 flex-wrap">
        {tags.map((t) => (
          <span key={t} className="px-2 py-1 text-xs rounded bg-slate-700">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}