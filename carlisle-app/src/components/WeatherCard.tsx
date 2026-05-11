import { motion } from 'framer-motion'
import { Wind, Droplets, Thermometer } from 'lucide-react'
import { useWeather, getWeatherInfo } from '../hooks/useWeather'

export default function WeatherCard() {
  const { data, loading } = useWeather()

  if (loading) return <WeatherSkeleton />

  const info = getWeatherInfo(data?.weathercode ?? 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass-strong rounded-3xl p-6 glow-blue relative overflow-hidden"
    >
      {/* Decorative orb */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/50 text-sm font-medium tracking-widest uppercase mb-1">Carlisle, UK</p>
          <div className="flex items-end gap-2">
            <span className="text-7xl font-bold text-white text-shadow leading-none">
              {data?.temperature ?? '--'}°
            </span>
            <span className="text-white/60 text-lg mb-2">C</span>
          </div>
          <p className="text-white/70 text-base mt-1">{info.label}</p>
        </div>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-6xl"
        >
          {info.emoji}
        </motion.div>
      </div>

      {/* Stats row */}
      <div className="flex gap-4 mt-5">
        {[
          { icon: Thermometer, label: 'Feels like', value: `${data?.feelsLike ?? '--'}°` },
          { icon: Wind,        label: 'Wind',       value: `${data?.windspeed ?? '--'} km/h` },
          { icon: Droplets,    label: 'Humidity',   value: `${data?.humidity ?? '--'}%` },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="glass rounded-2xl px-3 py-2 flex-1 text-center">
            <Icon size={14} className="mx-auto text-blue-300 mb-1" />
            <p className="text-white font-semibold text-sm">{value}</p>
            <p className="text-white/40 text-xs">{label}</p>
          </div>
        ))}
      </div>

      {/* Hourly forecast */}
      {data?.hourly && data.hourly.length > 0 && (
        <div className="mt-5 flex gap-2 overflow-x-auto scroll-smooth-ios pb-1">
          {data.hourly.map((h) => (
            <div key={h.time} className="glass rounded-2xl px-3 py-2 text-center flex-shrink-0 min-w-[54px]">
              <p className="text-white/50 text-xs mb-1">{h.time}</p>
              <p className="text-lg">{getWeatherInfo(h.code).emoji}</p>
              <p className="text-white font-semibold text-sm">{h.temp}°</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

function WeatherSkeleton() {
  return (
    <div className="glass-strong rounded-3xl p-6 overflow-hidden">
      <div className="flex justify-between items-start">
        <div className="space-y-3 flex-1">
          <div className="shimmer-line h-3 w-24 rounded-full" />
          <div className="shimmer-line h-16 w-32 rounded-2xl" />
          <div className="shimmer-line h-4 w-20 rounded-full" />
        </div>
        <div className="shimmer-line w-16 h-16 rounded-2xl" />
      </div>
      <div className="flex gap-3 mt-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="shimmer-line flex-1 h-14 rounded-2xl" />
        ))}
      </div>
    </div>
  )
}
