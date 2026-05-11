import { motion, AnimatePresence } from 'framer-motion'
import { useNews } from '../hooks/useNews'
import NewsCard from './NewsCard'
import { Newspaper } from 'lucide-react'

export default function NewsSection() {
  const { items, loading } = useNews()

  return (
    <div className="px-4 space-y-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-2 px-1 mb-1"
      >
        <Newspaper size={16} className="text-violet-400" />
        <h2 className="text-white/70 text-sm font-semibold tracking-wider uppercase">Latest Stories</h2>
      </motion.div>

      <AnimatePresence>
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="glass rounded-3xl p-5 space-y-3">
                <div className="flex gap-2">
                  <div className="shimmer-line h-5 w-16 rounded-full" />
                  <div className="shimmer-line h-5 w-20 rounded-full" />
                </div>
                <div className="shimmer-line h-4 w-full rounded-full" />
                <div className="shimmer-line h-4 w-3/4 rounded-full" />
                <div className="shimmer-line h-3 w-full rounded-full" />
              </div>
            ))
          : items.map((item, i) => (
              <NewsCard key={item.id} item={item} index={i} />
            ))}
      </AnimatePresence>
    </div>
  )
}
