import React from 'react'

export default function Inventory() {
  const items = [
    { name: 'Totem of Deadline', lore: 'Prevents last-minute doom once per sprint', rarity: 'legendary', emoji: '🟡' },
    { name: 'Fortune III Resume', lore: 'Increases offer drop rate', rarity: 'rare', emoji: '📜' },
    { name: 'Unbreaking Curiosity', lore: 'Durability does not decrease while learning', rarity: 'epic', emoji: '🔍' },
    { name: 'Mending Side Projects', lore: 'XP repairs motivation automatically', rarity: 'epic', emoji: '🪄' },
    { name: 'Silk Touch Feedback', lore: 'Extracts insights without breaking teams', rarity: 'rare', emoji: '🧵' },
    { name: 'Redstone Toolkit', lore: 'Automation, CI/CD, observers included', rarity: 'common', emoji: '⚙️' },
    { name: 'Ender Chest', lore: 'Access important docs anywhere', rarity: 'legendary', emoji: '🟪' },
    { name: 'Potion of Polish', lore: '+20% sparkle to UI details', rarity: 'rare', emoji: '🧪' },
    { name: 'Map of Curiosity', lore: 'Locates unexplored biomes (domains)', rarity: 'common', emoji: '🗺️' },
  ]

  const rarityStyle = {
    common: 'border-stone-600/60',
    rare: 'border-cyan-600/60',
    epic: 'border-fuchsia-600/60',
    legendary: 'border-amber-500/70',
  }

  return (
    <section id="inventory" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-50 drop-shadow mb-6">Inventory</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {items.map((it) => (
          <div key={it.name} className={`relative rounded-md bg-stone-900/60 border ${rarityStyle[it.rarity]} p-2 shadow group`}>
            <div className="aspect-square rounded-sm bg-stone-800/80 border border-emerald-800/60 grid place-items-center text-2xl select-none">
              <span>{it.emoji}</span>
            </div>
            <div className="mt-2 text-[11px] leading-tight">
              <div className="font-bold text-emerald-50 truncate" title={it.name}>{it.name}</div>
              <div className="text-emerald-200/70 truncate" title={it.lore}>{it.lore}</div>
            </div>
            <div className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded bg-stone-800/90 border border-emerald-900/60 text-emerald-200/80 capitalize">
              {it.rarity}
            </div>
            <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-emerald-400/50 rounded-md pointer-events-none transition" />
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-emerald-200/70">Tip: Double-press forward to sprint. Also, keep a water bucket for clutches.</p>
    </section>
  )
}
