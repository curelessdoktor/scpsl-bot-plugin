import { motion } from 'framer-motion'
import { ExternalLink, Clock } from 'lucide-react'
import { type NewsItem } from '../hooks/useNews'

const CATEGORY_COLORS: Record<string, string> = {
  Local:       'bg-violet-500/20 text-violet-300 border-violet-500/30',
  Community:   'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Sport:       'bg-orange-500/20 text-orange-300 border-orange-500/30',
  Environment: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  Food:        'bg-amber-500/20 text-amber-300 border-amber-500/30',
  Events:      'bg-pink-500/20 text-pink-300 border-pink-500/30',
  Culture:     'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
}

function timeAgo(dateStr: string): string {
  if (!dateStr) return ''
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.floor(hrs / 24)}d ago`
}

interface Props {
  item: NewsItem
  index: number
}

export default function NewsCard({ item, index }: Props) {
  const colorClass = CATEGORY_COLORS[item.category] ?? CATEGORY_COLORS.Local

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.98 }}
      className="glass rounded-3xl p-5 block active:bg-white/10 transition-colors duration-150"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${colorClass}`}>
              {item.category}
            </span>
            <span className="text-white/30 text-xs">{item.source}</span>
            {item.pubDate && (
              <span className="text-white/30 text-xs flex items-center gap-1 ml-auto">
                <Clock size={10} />
                {timeAgo(item.pubDate)}
              </span>
            )}
          </div>
          <h3 className="text-white font-semibold text-base leading-snug line-clamp-2 text-shadow">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-white/55 text-sm mt-1.5 leading-relaxed line-clamp-2">
              {item.description}
            </p>
          )}
        </div>
        {item.link !== '#' && (
          <ExternalLink size={16} className="text-white/30 flex-shrink-0 mt-1" />
        )}
      </div>
    </motion.a>
  )
}
