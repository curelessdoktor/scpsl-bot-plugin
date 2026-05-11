import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import TabBar, { type Tab } from './components/TabBar'
import NewsSection from './components/NewsSection'
import WeatherSection from './components/WeatherSection'
import PlacesSection from './components/PlacesSection'
import AboutSection from './components/AboutSection'

const PAGE_VARIANTS = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: -24 },
}

export default function App() {
  const [tab, setTab] = useState<Tab>('news')
  const [refreshKey, setRefreshKey] = useState(0)
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = useCallback(() => {
    setRefreshing(true)
    setRefreshKey((k) => k + 1)
    setTimeout(() => setRefreshing(false), 800)
  }, [])

  return (
    <div className="flex flex-col min-h-svh max-w-md mx-auto safe-top">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 rounded-full bg-violet-600/15 blur-[80px] animate-float" />
        <div className="absolute top-[20%] right-[-15%] w-64 h-64 rounded-full bg-blue-500/10 blur-[70px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[15%] left-[5%] w-56 h-56 rounded-full bg-cyan-500/10 blur-[60px] animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Header */}
      <Header onRefresh={handleRefresh} refreshing={refreshing} />

      {/* Content */}
      <main className="flex-1 overflow-y-auto scroll-smooth-ios pb-4" key={refreshKey}>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            variants={PAGE_VARIANTS}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pt-3 pb-6"
          >
            {tab === 'news'    && <NewsSection />}
            {tab === 'weather' && <WeatherSection />}
            {tab === 'places'  && <PlacesSection />}
            {tab === 'about'   && <AboutSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Tab bar */}
      <TabBar active={tab} onChange={setTab} />
    </div>
  )
}
