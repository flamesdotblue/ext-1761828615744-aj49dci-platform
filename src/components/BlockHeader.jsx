import React from 'react'
import { Github, Compass, Code2 } from 'lucide-react'

export default function BlockHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-emerald-700/40 bg-stone-900/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-3">
          <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-emerald-600 to-lime-500 border border-emerald-900 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.25)]" />
          <div className="leading-tight">
            <div className="font-extrabold tracking-wider text-emerald-100 drop-shadow" style={{ letterSpacing: '0.06em' }}>
              Blocky Portfolio
            </div>
            <div className="text-xs text-emerald-200/70 -mt-0.5">Survival Mode: ON</div>
          </div>
        </a>
        <nav className="flex items-center gap-2">
          <a href="#projects" className="flex items-center gap-2 text-emerald-100/90 hover:text-emerald-50 px-3 py-1.5 rounded border border-emerald-700/40 bg-stone-800/60">
            <Code2 className="w-4 h-4" /> Projects
          </a>
          <a href="#inventory" className="flex items-center gap-2 text-emerald-100/90 hover:text-emerald-50 px-3 py-1.5 rounded border border-emerald-700/40 bg-stone-800/60">
            <Compass className="w-4 h-4" /> Inventory
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-emerald-100/90 hover:text-emerald-50 px-3 py-1.5 rounded border border-emerald-700/40 bg-stone-800/60">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </nav>
      </div>
      <StatusBar />
    </header>
  )
}

function StatusBar() {
  return (
    <div className="w-full border-t border-emerald-700/40 bg-stone-900/50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3 text-emerald-200/80">
          <Bar label="HP" icon="❤️" filled={9} total={10} color="bg-red-500" />
          <Bar label="Hunger" icon="🍗" filled={8} total={10} color="bg-amber-500" />
          <Bar label="Armor" icon="🛡️" filled={6} total={10} color="bg-cyan-500" />
        </div>
        <div className="text-emerald-300/80">Biome: Lush Portfolio • Light: 15 • Difficulty: Hard</div>
      </div>
    </div>
  )
}

function Bar({ label, icon, filled, total, color }) {
  return (
    <div className="flex items-center gap-1">
      <span className="opacity-80 mr-1">{label}</span>
      <span className="mr-1">{icon}</span>
      <div className="flex gap-0.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 border border-stone-900/60 ${i < filled ? color : 'bg-stone-700/60'} rounded-[2px] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]`}>
          </div>
        ))}
      </div>
    </div>
  )
}
