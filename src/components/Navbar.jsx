import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_60px_rgba(139,92,246,0.25)]">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 ring-2 ring-white/10 shadow-[0_0_30px_rgba(168,85,247,0.6)]" />
              <span className="text-white/90 font-semibold tracking-wide">Aurelia AI</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
              <a className="hover:text-white transition-colors" href="#work">Work</a>
              <a className="hover:text-white transition-colors" href="#about">About</a>
              <a className="hover:text-white transition-colors" href="#contact">Contact</a>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
              </svg>
            </button>

            <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition border border-white/10">
              <span>Request Access</span>
            </a>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-6">
              <div className="flex flex-col gap-4 text-white/80">
                <a onClick={() => setOpen(false)} className="hover:text-white" href="#solutions">Solutions</a>
                <a onClick={() => setOpen(false)} className="hover:text-white" href="#work">Work</a>
                <a onClick={() => setOpen(false)} className="hover:text-white" href="#about">About</a>
                <a onClick={() => setOpen(false)} className="hover:text-white" href="#contact">Contact</a>
                <a onClick={() => setOpen(false)} href="#contact" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition border border-white/10">
                  <span>Request Access</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
