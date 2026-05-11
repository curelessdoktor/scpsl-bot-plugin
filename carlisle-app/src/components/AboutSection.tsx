import { motion } from 'framer-motion'
import { Info, Heart } from 'lucide-react'

const FACTS = [
  { emoji: '👥', label: 'Population',  value: '~108,000' },
  { emoji: '📍', label: 'County',      value: 'Cumbria'  },
  { emoji: '🗺️', label: 'Coordinates', value: '54.90°N, 2.94°W' },
  { emoji: '🏙️', label: 'City status', value: 'Since 133 AD' },
  { emoji: '🚂', label: 'Train links', value: 'London, Glasgow, Newcastle' },
  { emoji: '🏫', label: 'University',  value: 'University of Cumbria' },
]

const LINKS = [
  { label: 'Carlisle City Council', url: 'https://www.carlisle.gov.uk', emoji: '🏛️' },
  { label: 'News & Star',           url: 'https://www.newsandstar.co.uk', emoji: '📰' },
  { label: 'Cumbria Tourism',       url: 'https://www.golakes.co.uk', emoji: '🌄' },
  { label: 'Carlisle United FC',    url: 'https://www.carlisleunited.co.uk', emoji: '⚽' },
]

export default function AboutSection() {
  return (
    <div className="px-4 space-y-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-2 px-1"
      >
        <Info size={16} className="text-cyan-400" />
        <h2 className="text-white/70 text-sm font-semibold tracking-wider uppercase">About Carlisle</h2>
      </motion.div>

      {/* Hero blurb */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong rounded-3xl p-6 glow-cyan relative overflow-hidden"
      >
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <p className="text-6xl mb-4">🏰</p>
        <h3 className="text-white font-bold text-xl mb-2">Carlisle</h3>
        <p className="text-white/65 text-sm leading-relaxed">
          England's most north-westerly city and the historic capital of Cumbria. Founded by the Romans as
          <em> Luguvalium</em>, Carlisle has been at the crossroads of English and Scottish history for nearly
          2,000 years. Today it's a vibrant cathedral city surrounded by stunning Cumbrian countryside,
          close to the Lake District and Hadrian's Wall.
        </p>
      </motion.div>

      {/* Quick facts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="glass rounded-3xl p-5"
      >
        <h3 className="text-white font-semibold mb-4">Quick Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          {FACTS.map(({ emoji, label, value }) => (
            <div key={label} className="glass rounded-2xl p-3 flex items-center gap-2.5">
              <span className="text-xl">{emoji}</span>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">{value}</p>
                <p className="text-white/40 text-xs">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Useful links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="glass rounded-3xl p-5 space-y-2"
      >
        <h3 className="text-white font-semibold mb-3">Useful Links</h3>
        {LINKS.map(({ label, url, emoji }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn flex items-center gap-3 rounded-2xl px-4 py-3 w-full text-left active:bg-white/15"
          >
            <span className="text-xl">{emoji}</span>
            <span className="text-white/80 text-sm font-medium flex-1">{label}</span>
            <span className="text-white/30 text-xs">↗</span>
          </a>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center gap-1.5 text-white/25 text-xs pb-2"
      >
        Made with <Heart size={10} className="text-pink-400" fill="currentColor" /> for Carlisle
      </motion.p>
    </div>
  )
}
