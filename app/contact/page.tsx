export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
      <p className="text-slate-400 mb-12">
        Interested in collaborating or have a project in mind? Let's connect!
      </p>

      <div className="space-y-6 mb-12">
        <a href="mailto:your.email@example.com" className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
          <span className="text-2xl">📧</span>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-slate-400">your.email@example.com</p>
          </div>
        </a>

        <a href="https://github.com/mathieuridet" target="_blank" className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
          <span className="text-2xl">💻</span>
          <div>
            <h3 className="font-semibold">GitHub</h3>
            <p className="text-slate-400">@mathieuridet</p>
          </div>
        </a>

        <a href="https://twitter.com/yourhandle" target="_blank" className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
          <span className="text-2xl">𝕏</span>
          <div>
            <h3 className="font-semibold">Twitter/X</h3>
            <p className="text-slate-400">@yourhandle</p>
          </div>
        </a>

        <a href="https://linkedin.com/in/yourprofile" target="_blank" className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
          <span className="text-2xl">💼</span>
          <div>
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-slate-400">Mathieu Ridet</p>
          </div>
        </a>
      </div>
    </div>
  )
}