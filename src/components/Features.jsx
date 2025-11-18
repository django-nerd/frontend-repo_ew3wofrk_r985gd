import { Bot, Sparkles, Shield, Globe } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Autonomous Voice Agents',
    desc: 'Conversational agents that speak naturally, learn continuously, and transact securely across your ecosystem.'
  },
  {
    icon: Sparkles,
    title: 'Cognitive UX & Orchestration',
    desc: 'From prompt architecture to multi-tool planning, we choreograph complex flows into effortless experiences.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade Trust',
    desc: 'Guardrails, observability, and compliance baked-in. Your brand voice, preserved with cryptographic integrity.'
  },
  {
    icon: Globe,
    title: 'Global-Scale Delivery',
    desc: 'Low-latency inference, multilingual models, and edge-first routing. Designed for luxury hospitality and finance.'
  }
]

function Features() {
  return (
    <section id="solutions" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-lux">What we craft</h2>
          <p className="mt-4 text-white/70">Precision-built intelligence—tailored to your systems, your standards, your clientele.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 overflow-hidden hover:border-white/20 transition hairline">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition bg-[conic-gradient(from_180deg_at_50%_50%,rgba(168,85,247,0.2),rgba(59,130,246,0.18),rgba(251,146,60,0.16),transparent)] blur-2xl" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-white text-slate-900 border border-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-white font-medium">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
