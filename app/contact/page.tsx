import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
      <p className="text-slate-400 mb-12">
        Interested in collaborating or have a project in mind? Let&apos;s connect!
      </p>

      <div className="space-y-6 mb-12">
        <a href="mailto:mathieuridet99@gmail.com" className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
          <span className="text-2xl">📧</span>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-slate-400">mathieuridet99@gmail.com</p>
          </div>
        </a>

        <a href="https://github.com/mathieuridet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
          <FaGithub className="text-2xl" aria-hidden />
          <div>
            <h3 className="font-semibold">GitHub</h3>
            <p className="text-slate-400">@mathieuridet</p>
          </div>
        </a>

        <a href="https://twitter.com/mathieurdt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
          <span className="text-2xl" aria-hidden>𝕏</span>
          <div>
            <h3 className="font-semibold">Twitter/X</h3>
            <p className="text-slate-400">@mathieurdt</p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/mathieu-ridet/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
          <FaLinkedin className="text-2xl" aria-hidden />
          <div>
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-slate-400">Mathieu Ridet</p>
          </div>
        </a>
      </div>
    </div>
  )
}