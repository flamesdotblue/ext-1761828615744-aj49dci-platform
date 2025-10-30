import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 pb-8 pt-10">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-emerald-50 drop-shadow">
            Hello, I'm the <span className="text-lime-300">Builder</span> of this world.
          </h1>
          <p className="mt-4 text-emerald-100/80 text-lg">
            I craft delightful experiences block by block. Redstone logic for brains, silk touch for UX, and an unbreaking passion for code.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-4 py-2 rounded border border-emerald-700/50 bg-lime-600/90 hover:bg-lime-600 text-stone-900 font-semibold shadow">
              View Projects
            </a>
            <a href="#inventory" className="px-4 py-2 rounded border border-emerald-700/50 bg-stone-800/70 hover:bg-stone-800 text-emerald-100 font-semibold shadow">
              Open Inventory
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <CraftingGrid />
        </motion.div>
      </div>
    </section>
  )
}

function CraftingGrid() {
  const items = [
    { emoji: '⛏️', name: 'Pickaxe', hint: 'Efficiency IV on problem solving' },
    { emoji: '🧭', name: 'Compass', hint: 'Product direction & vision' },
    { emoji: '📘', name: 'Enchanted Book', hint: 'Typescript + React patterns' },
    { emoji: '🧱', name: 'Building Blocks', hint: 'Design Systems & Accessibility' },
    { emoji: '⚙️', name: 'Redstone', hint: 'Automation & CI/CD' },
    { emoji: '💎', name: 'Diamond', hint: 'Polish & performance' },
    { emoji: '🔥', name: 'Nether Fuel', hint: 'Ship fast, keep it stable' },
    { emoji: '🪄', name: 'Mending', hint: 'Maintainability matters' },
    { emoji: '🌱', name: 'Sapling', hint: 'Grow teams & features sustainably' },
  ]

  return (
    <div className="p-4 rounded-lg bg-stone-900/60 border border-emerald-700/40 shadow relative">
      <div className="mb-3 text-emerald-200/90 font-semibold">Crafting Table</div>
      <div className="grid grid-cols-3 gap-2">
        {items.map((it, i) => (
          <div key={i} className="aspect-square rounded-sm bg-stone-800/80 border border-emerald-800/60 flex items-center justify-center text-2xl group relative">
            <span title={it.hint} className="select-none">{it.emoji}</span>
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-emerald-200/70 opacity-0 group-hover:opacity-100 transition-opacity">{it.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex-1 p-3 rounded bg-stone-800/70 border border-emerald-800/60 text-emerald-200/90">
          Result: Portfolio v1.19
        </div>
        <button className="px-4 py-2 rounded bg-lime-500 text-stone-900 font-bold border border-emerald-900 shadow active:translate-y-[1px]">
          Craft
        </button>
      </div>
      <div className="mt-2 text-xs text-emerald-300/70">Recipe discovered: You unlocked the portfolio advancement!</div>
    </div>
  )
}
