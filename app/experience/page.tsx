export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-12">Experience</h1>
      
      {/* Current Position */}
      <section className="mb-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-blue-400">Professional Software Engineer</h2>
            <h3 className="text-lg text-slate-400 mt-2">
              <a 
                href="https://www.datahouse.ch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                @Datahouse AG
              </a>
              , Lisbon, Portugal
            </h3>
          </div>
          <span className="text-sm text-slate-500 whitespace-nowrap">11/2024 - Present</span>
        </div>
        
        <p className="text-slate-300 leading-relaxed mb-4">
          I&apos;m currently working as Software Engineer in the REDX (Real Estate Data Exchange) team.
          I&apos;m responsible for designing and programming features of this fully customizable ETL application.
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Java 21</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Spring Boot</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Spring Batch</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">React</span>
        </div>
      </section>

      {/* Junior Software Engineer */}
      <section className="mb-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-purple-400">Junior Software Engineer & IAM Advisor</h2>
            <h3 className="text-lg text-slate-400 mt-2">
              <a 
                href="https://www.linkedin.com/company/groupecovea/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                @Covea
              </a>
              , Paris, France
            </h3>
          </div>
          <span className="text-sm text-slate-500 whitespace-nowrap">11/2022 - 10/2024</span>
        </div>
        
        <p className="text-slate-300 leading-relaxed mb-4">
          After my graduation, I decided to stay at Covea to have a hybrid position: keep my Full Stack Developer activities 
          but also discover Permissions&apos; world by being kind of an IAM Advisor.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          The goal here was to help different projects of the group to design and set up permissions 
          regarding their specific context and the best practices of the company.
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Java 8</span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Spring Boot</span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Spring Batch</span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Angular 7</span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">IAM</span>
        </div>
      </section>

      {/* Apprentice */}
      <section className="mb-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-green-400">Apprentice Full Stack Developer</h2>
            <h3 className="text-lg text-slate-400 mt-2">
              <a 
                href="https://www.linkedin.com/company/groupecovea/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                @Covea
              </a>
              , Paris, France
            </h3>
          </div>
          <span className="text-sm text-slate-500 whitespace-nowrap">09/2019 - 10/2022</span>
        </div>
        
        <p className="text-slate-300 leading-relaxed mb-4">
          In parallel to my studies (3rd, 4th and 5th years) at Paris 1 Pantheon-Sorbonne (Master in Information Systems Engineering),
          I was apprentice at <a target="_blank" className="text-blue-400 underline hover:text-blue-300" rel="noopener noreferrer" href="https://www.linkedin.com/company/groupecovea/posts/?feedView=all">Covea</a>.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          I was working in the RSA (Structures & Actors Referential) team in the Permission department and had the following responsibilities:
        </p>
        
        <ul className="text-slate-300 space-y-2 mb-4 ml-4">
          <li>• Program and maintain Spring batches</li>
          <li>• Program features of our Spring Boot/Angular web application</li>
          <li>• Implement tests (Unit, Integration, E2E)</li>
          <li>• Write & maintain documentation</li>
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Java 8</span>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Spring Boot</span>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Spring Batch</span>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Angular 7</span>
        </div>
      </section>

    </div>
  );
}