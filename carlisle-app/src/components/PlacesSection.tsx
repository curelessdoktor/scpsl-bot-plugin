import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'

const PLACES = [
  {
    name: 'Carlisle Castle',
    desc: 'A Norman fortress dating from 1092, housing the King\'s Own Royal Border Regiment Museum.',
    tag: 'History',
    emoji: '🏰',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/20',
    maps: 'https://maps.google.com/?q=Carlisle+Castle',
  },
  {
    name: 'Carlisle Cathedral',
    desc: 'One of England\'s smallest cathedrals, famous for its stunning medieval East Window.',
    tag: 'Faith',
    emoji: '⛪',
    color: 'from-sky-500/20 to-blue-500/10',
    border: 'border-sky-500/20',
    maps: 'https://maps.google.com/?q=Carlisle+Cathedral',
  },
  {
    name: 'Tullie House Museum',
    desc: 'Award-winning museum covering Roman history, Reiver culture, and local natural history.',
    tag: 'Museum',
    emoji: '🏛️',
    color: 'from-violet-500/20 to-purple-500/10',
    border: 'border-violet-500/20',
    maps: 'https://maps.google.com/?q=Tullie+House+Museum+Carlisle',
  },
  {
    name: 'Hadrian\'s Wall',
    desc: 'UNESCO World Heritage Site stretching 73 miles across northern England, passing near Carlisle.',
    tag: 'Roman',
    emoji: '🗿',
    color: 'from-stone-500/20 to-neutral-500/10',
    border: 'border-stone-500/20',
    maps: 'https://maps.google.com/?q=Hadrian%27s+Wall+Carlisle',
  },
  {
    name: 'Brunton Park',
    desc: 'Home of Carlisle United FC, one of the oldest football grounds in English football.',
    tag: 'Sport',
    emoji: '⚽',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/20',
    maps: 'https://maps.google.com/?q=Brunton+Park+Carlisle',
  },
  {
    name: 'The Lanes Shopping Centre',
    desc: 'Carlisle\'s main shopping destination in the heart of the city with a great mix of shops and cafés.',
    tag: 'Shopping',
    emoji: '🛍️',
    color: 'from-pink-500/20 to-rose-500/10',
    border: 'border-pink-500/20',
    maps: 'https://maps.google.com/?q=The+Lanes+Carlisle',
  },
  {
    name: 'Sands Centre',
    desc: 'The city\'s main leisure and entertainment venue hosting concerts, events, and sports.',
    tag: 'Leisure',
    emoji: '🎭',
    color: 'from-emerald-500/20 to-green-500/10',
    border: 'border-emerald-500/20',
    maps: 'https://maps.google.com/?q=Sands+Centre+Carlisle',
  },
  {
    name: 'River Eden & Bitts Park',
    desc: 'Beautiful riverside park along the Eden, perfect for walks, picnics, and watching the river.',
    tag: 'Nature',
    emoji: '🌿',
    color: 'from-teal-500/20 to-green-500/10',
    border: 'border-teal-500/20',
    maps: 'https://maps.google.com/?q=Bitts+Park+Carlisle',
  },
]

export default function PlacesSection() {
  return (
    <div className="px-4 space-y-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-2 px-1 mb-1"
      >
        <MapPin size={16} className="text-emerald-400" />
        <h2 className="text-white/70 text-sm font-semibold tracking-wider uppercase">Places to Explore</h2>
      </motion.div>

      {PLACES.map((place, i) => (
        <motion.a
          key={place.name}
          href={place.maps}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          whileTap={{ scale: 0.97 }}
          className={`block glass rounded-3xl p-5 bg-gradient-to-br ${place.color} border ${place.border} transition-colors duration-150 active:bg-white/10`}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">{place.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-white font-semibold text-base">{place.name}</h3>
                <ExternalLink size={14} className="text-white/30 flex-shrink-0" />
              </div>
              <span className="text-xs font-medium text-white/50 mt-0.5 block">{place.tag}</span>
              <p className="text-white/60 text-sm mt-1.5 leading-relaxed">{place.desc}</p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
