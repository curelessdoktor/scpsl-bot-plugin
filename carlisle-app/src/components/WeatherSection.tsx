import { motion } from 'framer-motion'
import WeatherCard from './WeatherCard'
import { CloudSun } from 'lucide-react'

export default function WeatherSection() {
  return (
    <div className="px-4 space-y-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-2 px-1"
      >
        <CloudSun size={16} className="text-blue-400" />
        <h2 className="text-white/70 text-sm font-semibold tracking-wider uppercase">Carlisle Weather</h2>
      </motion.div>

      <WeatherCard />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="glass rounded-3xl p-5"
      >
        <h3 className="text-white font-semibold mb-3">About Carlisle's Climate</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Carlisle sits in the Eden Valley in Cumbria, north-west England. It experiences a temperate oceanic
          climate with mild summers (avg. 18°C) and cool, wet winters (avg. 4°C). Being close to the Lake District,
          rainfall is higher than the UK average. Fog is common in the Eden Valley during autumn and winter mornings.
        </p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[
            { label: 'Avg. Summer', value: '18°C', icon: '☀️' },
            { label: 'Avg. Winter', value: '4°C',  icon: '❄️' },
            { label: 'Annual Rain', value: '820mm', icon: '🌧️' },
            { label: 'Sunny Days',  value: '~130',  icon: '🌤️' },
          ].map(({ label, value, icon }) => (
            <div key={label} className="glass rounded-2xl p-3 flex items-center gap-3">
              <span className="text-2xl">{icon}</span>
              <div>
                <p className="text-white font-bold text-base">{value}</p>
                <p className="text-white/45 text-xs">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
