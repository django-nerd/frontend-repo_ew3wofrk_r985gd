function Showcase() {
  return (
    <section id="work" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_10%_0%,rgba(139,92,246,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-lux">Selected engagements</h2>
            <p className="mt-4 text-white/70">Quietly powering category-defining experiences. Names withheld, results undeniable.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-white text-slate-900 hover:bg-white/90 transition shadow-[0_10px_30px_-10px_rgba(255,255,255,0.6)]">Request the full deck</a>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 hairline">
              <div className="aspect-[4/3] bg-[linear-gradient(135deg,rgba(168,85,247,0.12),rgba(59,130,246,0.12))]" />
              <div className="p-6">
                <div className="text-white font-medium">Confidential — Hospitality</div>
                <p className="text-white/70 text-sm mt-2">Voice concierge deploying multi-tool agents across 120+ properties with sub-second latency.</p>
              </div>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
