import type { Program } from '@/types'

export const programs: Program[] = [
  {
    id: 'kids',
    badge: 'KIDS',
    label: 'AGES 5–14',
    title: 'Kids',
    description:
      'Where children grow together in a positive environment, focused on healthy development. Safe and supervised by experienced instructors.',
    topics: ['Discipline & confidence', 'Safe supervised environment', 'Fun & structured learning'],
  },
  {
    id: 'fundamentals',
    badge: 'ALL LEVELS',
    label: 'ALL LEVELS WELCOME',
    title: 'Adult Fundamentals',
    description:
      'The starting point of your jiu-jitsu journey, with a program designed for beginners of all ages and fitness levels. No experience required.',
    topics: ['No experience required', 'All ages & fitness levels', 'Expert beginner guidance'],
    featured: true,
  },
  {
    id: 'advanced',
    badge: 'ADVANCED',
    label: 'COMPETITORS & ENTHUSIASTS',
    title: 'Advanced',
    description:
      'Where champions are built. Technical refinement under the supervision of a medal-winning head coach. Open to both recreational practitioners and competitors.',
    topics: ['Technical refinement', 'Competition preparation', 'Medal-winning coach'],
  },
]
