function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_90%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 overflow-hidden">
          <div className="absolute -inset-px bg-[conic-gradient(from_180deg_at_50%_50%,rgba(168,85,247,0.12),rgba(59,130,246,0.1),rgba(251,146,60,0.08),transparent)] blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Join the private beta</h3>
              <p className="mt-3 text-white/70">We onboard a limited number of partners each quarter to ensure white-glove delivery. Tell us about your vision.</p>
            </div>
            <form className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-violet-400/40" />
              <input required type="email" placeholder="Work email" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-violet-400/40" />
              <input placeholder="Company" className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-violet-400/40" />
              <textarea placeholder="What would you like to build?" rows="4" className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-violet-400/40" />
              <button className="sm:col-span-2 inline-flex justify-center px-6 py-3 rounded-xl text-slate-900 font-medium bg-gradient-to-tr from-amber-300 via-fuchsia-300 to-violet-400 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)] hover:opacity-95 transition">Request Access</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
