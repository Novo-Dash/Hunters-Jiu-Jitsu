import type { Achievement } from '@/types'

export const coach = {
  name: 'Gabriel Costa',
  nickname: '"Maranhão"',
  bio: 'Gabriel Costa, born in Maranhão, Brazil, began jiu-jitsu at 12. After rising through national ranks and earning his black belt in 2020, he now uses his experience to teach beginners of all ages and fitness levels. He\'s a medalist in multiple international competitions.',
  belt: 'Black Belt',
  title: 'International Medalist · Head Coach',
}

export const achievements: Achievement[] = [
  { medal: 'gold',   place: '1st Place', event: 'AJP Grand Slam, RJ',               year: '2021' },
  { medal: 'gold',   place: '1st Place', event: 'AJP Grand Slam, AD',               year: '2022' },
  { medal: 'silver', place: '2nd Place', event: 'IBJJF American Nationals',          year: '2023' },
  { medal: 'bronze', place: '3rd Place', event: 'AJP Grand Slam, RJ',               year: '2022' },
  { medal: 'bronze', place: '3rd Place', event: 'AJP South America Continental Pro', year: '2021' },
  { medal: 'bronze', place: '3rd Place', event: 'IBJJF American Nationals',          year: '2023' },
]
