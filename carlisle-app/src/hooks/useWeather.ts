import { useState, useEffect } from 'react'

export interface WeatherData {
  temperature: number
  feelsLike: number
  windspeed: number
  weathercode: number
  humidity: number
  hourly: { time: string; temp: number; code: number }[]
}

const WMO_CODES: Record<number, { label: string; emoji: string }> = {
  0:  { label: 'Clear sky',         emoji: '☀️'  },
  1:  { label: 'Mainly clear',      emoji: '🌤️'  },
  2:  { label: 'Partly cloudy',     emoji: '⛅'  },
  3:  { label: 'Overcast',          emoji: '☁️'  },
  45: { label: 'Fog',               emoji: '🌫️'  },
  48: { label: 'Icy fog',           emoji: '🌫️'  },
  51: { label: 'Light drizzle',     emoji: '🌦️'  },
  53: { label: 'Drizzle',           emoji: '🌦️'  },
  55: { label: 'Heavy drizzle',     emoji: '🌧️'  },
  61: { label: 'Slight rain',       emoji: '🌧️'  },
  63: { label: 'Rain',              emoji: '🌧️'  },
  65: { label: 'Heavy rain',        emoji: '🌧️'  },
  71: { label: 'Slight snow',       emoji: '🌨️'  },
  73: { label: 'Snow',              emoji: '❄️'  },
  75: { label: 'Heavy snow',        emoji: '❄️'  },
  77: { label: 'Snow grains',       emoji: '🌨️'  },
  80: { label: 'Slight showers',    emoji: '🌦️'  },
  81: { label: 'Rain showers',      emoji: '🌧️'  },
  82: { label: 'Violent showers',   emoji: '⛈️'  },
  85: { label: 'Snow showers',      emoji: '🌨️'  },
  86: { label: 'Heavy snow showers',emoji: '❄️'  },
  95: { label: 'Thunderstorm',      emoji: '⛈️'  },
  96: { label: 'Thunderstorm + hail',emoji: '⛈️' },
  99: { label: 'Thunderstorm + hail',emoji: '⛈️' },
}

export function getWeatherInfo(code: number) {
  return WMO_CODES[code] ?? { label: 'Unknown', emoji: '🌡️' }
}

export function useWeather() {
  const [data, setData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetch_() {
      try {
        // Carlisle, UK coordinates
        const lat = 54.8951
        const lon = -2.9382
        const url =
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
          `&current=temperature_2m,apparent_temperature,weathercode,windspeed_10m,relativehumidity_2m` +
          `&hourly=temperature_2m,weathercode&forecast_days=1&timezone=Europe%2FLondon`

        const res = await fetch(url)
        if (!res.ok) throw new Error('Weather fetch failed')
        const json = await res.json()

        const now = new Date()
        const currentHour = now.getHours()
        const hourly = json.hourly.time
          .slice(currentHour, currentHour + 6)
          .map((t: string, i: number) => ({
            time: t.slice(11, 16),
            temp: Math.round(json.hourly.temperature_2m[currentHour + i]),
            code: json.hourly.weathercode[currentHour + i],
          }))

        setData({
          temperature: Math.round(json.current.temperature_2m),
          feelsLike: Math.round(json.current.apparent_temperature),
          windspeed: Math.round(json.current.windspeed_10m),
          weathercode: json.current.weathercode,
          humidity: json.current.relativehumidity_2m,
          hourly,
        })
      } catch (e) {
        setError('Could not load weather')
      } finally {
        setLoading(false)
      }
    }
    fetch_()
  }, [])

  return { data, loading, error }
}
