import React from 'react'
import BlockHeader from './components/BlockHeader'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Inventory from './components/Inventory'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-800 to-stone-900 text-emerald-50">
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.2) 1px, transparent 1px)",
        backgroundSize: '48px 48px',
      }} />

      <BlockHeader />

      <main className="relative z-10">
        <Hero />
        <Projects />
        <Inventory />
      </main>

      <footer className="relative z-10 border-t border-emerald-700/40 bg-stone-900/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-emerald-200/80 flex flex-wrap items-center gap-3 justify-between">
          <p>
            © {new Date().getFullYear()} Crafted with care. Fun fact: The world seed for this portfolio is "FEATHERFALL-4".
          </p>
          <div className="flex gap-3">
            <a className="hover:text-emerald-100 transition-colors" href="#projects">Projects</a>
            <a className="hover:text-emerald-100 transition-colors" href="#inventory">Inventory</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
