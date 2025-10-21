export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-8">About Me</h1>
      
      <div className="prose prose-invert prose-slate max-w-none">
        <p className="text-xl text-slate-300 leading-relaxed mb-6">
          Hi! I&apos;m Mathieu, a full-stack software engineer passionate about blockchain technology,
          security auditing, and building decentralized applications.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">What I Do</h2>
        <p className="text-slate-300">
          By day, I work as a Software Engineer building applications with React and Java (Spring Boot).
          By night, I dive deep into Solidity smart contracts, security auditing tools, and AI agents.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Frontend</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• React / Next.js / TypeScript</li>
              <li>• Vite / Tailwind CSS</li>
              <li>• Web3.js / Ethers.js</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Backend</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Node.js / Express</li>
              <li>• Java / Spring Boot</li>
              <li>• Docker / AWS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-green-400">Blockchain</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Solidity Smart Contracts</li>
              <li>• Slither / Mythril Security</li>
              <li>• OpenZeppelin / Hardhat</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Other</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• GitHub Actions / CI/CD</li>
              <li>• LLMs / AI Integration</li>
              <li>• CrossFit Enthusiast 🏋️</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">Certifications</h2>
        <ul className="text-slate-300 space-y-2">
          <li>🎓 <a target="_blank" className="text-blue-600 underline hover:text-blue-800" rel="noopener noreferrer" href="https://www.credly.com/badges/8f4ecba7-0f55-4566-aaac-1f520744aa72/linked_in_profile">AWS Certified Solutions Architect - Associate</a></li>
          <li>🎓 <a target="_blank" className="text-blue-600 underline hover:text-blue-800" rel="noopener noreferrer" href="https://learn.kodekloud.com/certificate/c7443d0f-117c-42e1-b144-98ca9903a781">Certified Kubernetes Application Developer (CKAD)</a></li>
        </ul>
      </div>
    </div>
  )
}