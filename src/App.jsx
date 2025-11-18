import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(139,92,246,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_10%_0%,rgba(59,130,246,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_90%_0%,rgba(251,146,60,0.08),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400" />
            <span>Aurelia AI © {new Date().getFullYear()}</span>
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
