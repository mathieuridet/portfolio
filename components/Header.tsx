import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Mathieu Ridet
        </Link>
        <ul className="flex gap-6">
          <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
          <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}