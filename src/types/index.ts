export interface Program {
  id: string
  badge: string
  label: string
  title: string
  description: string
  topics: string[]
  featured?: boolean
}

export interface Achievement {
  medal: 'gold' | 'silver' | 'bronze'
  place: string
  event: string
  year: string
}

export interface FaqItem {
  question: string
  answer: string
  pending?: boolean
}

export type ModalState = 'form' | 'loading' | 'success' | 'error'
