export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-8">About Me</h1>
      
      {/* Introduction Section */}
      <section className="mb-16">
        <p className="text-xl text-slate-300 leading-relaxed">
          Hi! I&apos;m Mathieu, a Software Engineer passionate about learning new concepts and building systems.
        </p>
        <p className="text-lg text-slate-400 leading-relaxed mt-4">
          By day, I work as a Full Stack Developer designing and programming corporate applications with Java and TypeScript frameworks. <br/>
          By night, I dive deep into many IT fields: from DevOps to Cloud, passing by Web3 dApps and AI-powered agents.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• React / Next.js</li>
              <li>• TypeScript / Tailwind CSS</li>
            </ul>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Backend</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Node.js / Express</li>
              <li>• Java / Spring Boot</li>
            </ul>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">DevOps & Cloud</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• GitHub Actions</li>
              <li>• Docker / Docker Compose</li>
              <li>• AWS / Kubernetes</li>
            </ul>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Blockchain</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Solidity / Web3.js / Ethers.js</li>
              <li>• Slither / Mythril / Echidna</li>
              <li>• OpenZeppelin / Hardhat</li>
            </ul>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Database</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• PostgreSQL</li>
              <li>• MongoDB / Redis</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Education 🎓</h2>
        <div className="space-y-3">

          <div className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-300">
                  Master in Information Systems Engineering
                </h3>
                <p className="text-slate-400">Paris 1 Panthéon-Sorbonne</p>
              </div>
              <span className="text-sm text-slate-500 whitespace-nowrap">2020 – 2022</span>
            </div>
          </div>

          <div className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-300">
                  3rd year Bachelor in Information Systems Engineering
                </h3>
                <p className="text-slate-400">Paris 1 Panthéon-Sorbonne</p>
              </div>
              <span className="text-sm text-slate-500 whitespace-nowrap">2019 – 2020</span>
            </div>
          </div>

          <div className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-300">
                  Associate’s Degree in Computer Science (DUT)
                </h3>
                <p className="text-slate-400">
                  Orsay University Institute of Technology, Paris-Saclay University (France)
                </p>
              </div>
              <span className="text-sm text-slate-500 whitespace-nowrap">2017 – 2019</span>
            </div>
          </div>

        </div>
      </section>


      {/* Certifications Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Certifications & Achievements 🏆</h2>
        <div className="space-y-3">
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://profiles.cyfrin.io/u/mathieuridet/achievements/solidity"
            className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition"
          >
            <span className="text-blue-400 hover:text-blue-300">
              📜 Smart Contract Solidity Development (Cyfrin)
            </span>
          </a>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://profiles.cyfrin.io/u/mathieuridet/achievements/blockchain-basics"
            className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition"
          >
            <span className="text-blue-400 hover:text-blue-300">
              📜 Blockchain Basics (Cyfrin)
            </span>
          </a>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.credly.com/badges/8f4ecba7-0f55-4566-aaac-1f520744aa72/linked_in_profile"
            className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition"
          >
            <span className="text-blue-400 hover:text-blue-300">
              ☁️ AWS Certified Solutions Architect - Associate
            </span>
          </a>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://learn.kodekloud.com/certificate/c7443d0f-117c-42e1-b144-98ca9903a781"
            className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition"
          >
            <span className="text-blue-400 hover:text-blue-300">
              ⚙️ Certified Kubernetes Application Developer (CKAD)
            </span>
          </a>
        </div>
      </section>

      {/* About This Site Section */}
      <section id="about-this-site" className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
        <h2 className="text-2xl font-bold mb-4">About This Site</h2>
        <p className="text-slate-300 leading-relaxed">
          Full transparency: I&apos;m color-blind and not a designer, so this website was built 
          with the help of AI to ensure clean aesthetics and good UX.
        </p>
        <p className="text-slate-300 leading-relaxed mt-3">
          I focus my energy on writing quality code rather than pixel-perfect designs. 
          The site is built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </section>
    </div>
  )
}