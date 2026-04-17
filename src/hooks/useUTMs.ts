import { useEffect } from 'react'

export function useUTMs() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    keys.forEach(key => {
      const val = params.get(key)
      if (val) sessionStorage.setItem(key, val)
    })
  }, [])

  const getUTMs = () => ({
    utm_source:   sessionStorage.getItem('utm_source')   || 'organic',
    utm_medium:   sessionStorage.getItem('utm_medium')   || 'direct',
    utm_campaign: sessionStorage.getItem('utm_campaign') || '',
    utm_content:  sessionStorage.getItem('utm_content')  || '',
    utm_term:     sessionStorage.getItem('utm_term')     || '',
  })

  return { getUTMs }
}
