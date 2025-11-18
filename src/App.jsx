import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      {/* Layered luxury background */}
      <div className="pointer-events-none fixed inset-0">
        {/* cool violet glow */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(124,58,237,0.18),transparent)]" />
        {/* deep blue wash */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_0%,rgba(37,99,235,0.12),transparent)]" />
        {/* warm amber lift */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_0%,rgba(251,191,36,0.07),transparent)]" />
        {/* vignette for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_30%,transparent,rgba(2,6,23,0.65))]" />
        {/* soft grain */}
        <div className="absolute inset-0 grain" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10/50">
        <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 ring-2 ring-white/10" />
            <span className="tracking-wide">Aurelia AI © {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
