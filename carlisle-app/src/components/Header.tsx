import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

interface Props {
  onRefresh: () => void
  refreshing: boolean
}

export default function Header({ onRefresh, refreshing }: Props) {
  const now = new Date()
  const day = now.toLocaleDateString('en-GB', { weekday: 'long' })
  const date = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-between px-5 pt-6 pb-2"
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏰</span>
          <h1 className="text-white font-bold text-xl tracking-tight">Carlisle Now</h1>
        </div>
        <p className="text-white/40 text-xs mt-0.5 ml-9">{day}, {date}</p>
      </div>

      <motion.button
        whileTap={{ scale: 0.88, rotate: 180 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={onRefresh}
        className="glass-btn w-10 h-10 rounded-2xl flex items-center justify-center"
        aria-label="Refresh"
      >
        <motion.div animate={{ rotate: refreshing ? 360 : 0 }} transition={{ duration: 0.6, ease: 'linear', repeat: refreshing ? Infinity : 0 }}>
          <RefreshCw size={18} className="text-white/70" />
        </motion.div>
      </motion.button>
    </motion.header>
  )
}
