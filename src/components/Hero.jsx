import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 overflow-hidden">
      {/* Spline background canvas */}
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300 animate-pulse" />
                Introducing our AI voice agent platform
              </div>

              <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight text-lux">
                Elegant intelligence for remarkable brands
              </h1>
              <p className="mt-6 text-lg text-white/75 max-w-2xl">
                Bespoke AI agents that converse, remember, and perform. Precision engineered for luxury, hospitality, finance, and automotive.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 text-sm font-medium shadow-[0_10px_40px_-10px_rgba(255,255,255,0.6)] hover:shadow-[0_10px_50px_-10px_rgba(255,255,255,0.85)] transition-shadow">
                  Book a private demo
                </a>
                <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-6 py-3 text-sm border border-white/10 hover:bg-white/15">
                  Explore our work
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 text-white/70">
                <div>
                  <div className="text-2xl font-semibold text-white">+120%</div>
                  <div className="text-xs">Avg. conversion uplift</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">24/7</div>
                  <div className="text-xs">Human-grade conversations</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">12 days</div>
                  <div className="text-xs">From brief to launch</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 hairline">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-indigo-500/5 to-fuchsia-500/10" />
                <div className="relative grid grid-cols-2 gap-4">
                  {[
                    ['Luxury Retail', 'Personal stylists that remember every preference'],
                    ['Hospitality', 'Concierge agents that elevate every stay'],
                    ['Finance', 'Private banking assistance with rigor'],
                    ['Automotive', 'Tour, configure, and order with voice'],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                      <div className="text-white font-medium">{title}</div>
                      <div className="text-white/60 text-sm mt-1">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(99,102,241,0.22),transparent_60%)]" />
    </section>
  )
}

export default Hero
