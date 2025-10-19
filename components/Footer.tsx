import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 backdrop-blur mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Mathieu Ridet. All rights reserved.
        </p>

        {/* Middle: Navigation */}
        <ul className="flex gap-6 text-sm text-slate-300">
          <li>
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right: Social links */}
        <div className="flex gap-4">
          <Link
            href="https://github.com/mathieuridet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mathieuridet/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:mathieu.ridet@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
