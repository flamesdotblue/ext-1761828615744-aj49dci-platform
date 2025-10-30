import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'Pathfinder',
      desc: 'Algorithm visualizer with chunked rendering and smooth pathfinding animations.',
      biome: 'Taiga',
      seed: '#A11Y-042',
      tags: ['React', 'Canvas', 'A*'],
    },
    {
      title: 'Beacon UI',
      desc: 'A component library with status effects: Haste, Speed, and Regeneration (for dev velocity).',
      biome: 'Savanna',
      seed: 'BEACON-UX',
      tags: ['Design System', 'Accessibility', 'Storybook'],
    },
    {
      title: 'MineMap',
      desc: 'Interactive world map with portals between app sections and nether-fast routing.',
      biome: 'Nether Wastes',
      seed: '8x-PORTALS',
      tags: ['TypeScript', 'Routing', 'Maps'],
    },
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-50 drop-shadow">Projects</h2>
        <span className="text-sm text-emerald-200/70">Advancements completed: {projects.length}</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group rounded-lg border border-emerald-800/60 bg-stone-900/60 shadow hover:shadow-lg hover:border-emerald-600/60 transition-all overflow-hidden">
            <div className="p-4">
              <h3 className="font-bold text-emerald-50 mb-1 flex items-center justify-between">
                <span>{p.title}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-700/40 border border-emerald-800/60 text-emerald-200/80">Seed: {p.seed}</span>
              </h3>
              <p className="text-emerald-200/80 text-sm mb-3">{p.desc}</p>
              <div className="flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-stone-800/70 border border-emerald-800/60 text-emerald-200/80">{t}</span>
                  ))}
                </div>
                <span className="text-emerald-300/80">Biome: {p.biome}</span>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-500 opacity-70" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
