import { motion } from 'framer-motion'
import { Newspaper, CloudSun, MapPin, Info } from 'lucide-react'

export type Tab = 'news' | 'weather' | 'places' | 'about'

const TABS: { id: Tab; icon: typeof Newspaper; label: string }[] = [
  { id: 'news',    icon: Newspaper, label: 'News'    },
  { id: 'weather', icon: CloudSun,  label: 'Weather' },
  { id: 'places',  icon: MapPin,    label: 'Places'  },
  { id: 'about',   icon: Info,      label: 'About'   },
]

interface Props {
  active: Tab
  onChange: (t: Tab) => void
}

export default function TabBar({ active, onChange }: Props) {
  return (
    <div className="px-4 pb-4 safe-bottom">
      <div className="glass-strong rounded-3xl p-2 flex gap-1">
        {TABS.map(({ id, icon: Icon, label }) => {
          const isActive = active === id
          return (
            <motion.button
              key={id}
              onClick={() => onChange(id)}
              whileTap={{ scale: 0.93 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="relative flex-1 flex flex-col items-center py-2 rounded-2xl transition-colors duration-200"
            >
              {isActive && (
                <motion.div
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: 'rgba(139,92,246,0.28)', border: '1px solid rgba(139,92,246,0.35)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon
                size={20}
                className={`relative z-10 transition-colors duration-200 ${isActive ? 'text-violet-300' : 'text-white/40'}`}
              />
              <span className={`relative z-10 text-xs mt-1 font-medium transition-colors duration-200 ${isActive ? 'text-violet-300' : 'text-white/40'}`}>
                {label}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
