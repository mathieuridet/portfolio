'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <motion.h1 
        className="text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Experience
      </motion.h1>
      
      {/* Current Position */}
      <motion.section 
        className="mb-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ 
          backgroundColor: "rgb(51 65 85 / 0.7)", // slate-800/70
          borderColor: "rgb(59 130 246)" // blue-500
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <motion.h2 
              className="text-2xl font-bold text-blue-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Professional Software Engineer
            </motion.h2>
            <motion.h3 
              className="text-lg text-slate-400 mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a 
                href="https://www.datahouse.ch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                @Datahouse AG
              </a>
              , Lisbon, Portugal
            </motion.h3>
          </div>
          <motion.span 
            className="text-sm text-slate-500 whitespace-nowrap"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            11/2024 - Present
          </motion.span>
        </div>
        
        <motion.p 
          className="text-slate-300 leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          I&apos;m currently working as Software Engineer in the REDX (Real Estate Data Exchange) team.
          I&apos;m responsible for designing and programming features of this fully customizable ETL application.
        </motion.p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {["Java 21", "Spring Boot", "Spring Batch", "React"].map((tech, index) => (
            <motion.span 
              key={tech}
              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.3 + (index * 0.1) }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Junior Software Engineer */}
      <motion.section 
        className="mb-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        whileHover={{ 
          backgroundColor: "rgb(51 65 85 / 0.7)", // slate-800/70
          borderColor: "rgb(147 51 234)" // purple-500
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <motion.h2 
              className="text-2xl font-bold text-purple-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              Junior Software Engineer & IAM Advisor
            </motion.h2>
            <motion.h3 
              className="text-lg text-slate-400 mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              <a 
                href="https://www.linkedin.com/company/groupecovea/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                @Covea
              </a>
              , Paris, France
            </motion.h3>
          </div>
          <motion.span 
            className="text-sm text-slate-500 whitespace-nowrap"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            11/2022 - 10/2024
          </motion.span>
        </div>
        
        <motion.p 
          className="text-slate-300 leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          After my graduation, I decided to stay at Covea to have a hybrid position: keep my Full Stack Developer activities 
          but also discover Permissions&apos; world by being kind of an IAM Advisor.
        </motion.p>
        <motion.p 
          className="text-slate-300 leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
        >
          The goal here was to help different projects of the group to design and set up permissions 
          regarding their specific context and the best practices of the company.
        </motion.p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {["Java 8", "Spring Boot", "Spring Batch", "Angular 7", "IAM"].map((tech, index) => (
            <motion.span 
              key={tech}
              className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 3.0 + (index * 0.1) }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Apprentice */}
      <motion.section 
        className="mb-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.5 }}
        whileHover={{ 
          backgroundColor: "rgb(51 65 85 / 0.7)", // slate-800/70
          borderColor: "rgb(34 197 94)" // green-500
        }}
      >
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
        
        <motion.p 
          className="text-slate-300 leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4.3 }}
        >
          In parallel to my studies (3rd, 4th and 5th years) at Paris 1 Pantheon-Sorbonne (Master in Information Systems Engineering),
          I was apprentice at <a target="_blank" className="text-blue-400 underline hover:text-blue-300" rel="noopener noreferrer" href="https://www.linkedin.com/company/groupecovea/posts/?feedView=all">Covea</a>.
        </motion.p>
        <motion.p 
          className="text-slate-300 leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4.5 }}
        >
          I was working in the RSA (Structures & Actors Referential) team in the Permission department and had the following responsibilities:
        </motion.p>
        
        <motion.ul 
          className="text-slate-300 space-y-2 mb-4 ml-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 4.7 }}
        >
          <li>• Program and maintain Spring batches</li>
          <li>• Program features of our Spring Boot/Angular web application</li>
          <li>• Implement tests (Unit, Integration, E2E)</li>
          <li>• Write & maintain documentation</li>
        </motion.ul>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {["Java 8", "Spring Boot", "Spring Batch", "Angular 7"].map((tech, index) => (
            <motion.span 
              key={tech}
              className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 4.9 + (index * 0.1) }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>

    </div>
  );
}