
import { useScrollDepth } from '@/hooks/useScrollDepth'
import { useModal } from '@/hooks/useModal'

import {
  CountdownBanner,
  Navbar,
  BookingModal,
  StickyCTABar,
  Footer,
} from '@/components/layout'

import {
  Hero,
  Coach,
  Offer,
  Hunters,
  Programs,
  Events,
  Process,
  FAQ,
} from '@/components/sections'

function App() {
  const { isOpen, open, close } = useModal()
  useScrollDepth()

  return (
    <>
      {/* Skip link */}
      <a
        href="#main"
        className="fixed top-[-100%] left-4 z-[200] bg-[var(--color-accent)] text-white px-4 py-2 rounded-b-lg text-sm font-semibold focus:top-0 transition-[top] duration-200"
        style={{ textDecoration: 'none' }}
      >
        Skip to content
      </a>

      {/* Global layers */}
      <Navbar onOpenModal={open} />

      <main id="main">
        <Hero      onOpenModal={open} />
        <CountdownBanner />
        {/* Coach section — aguardando informações do cliente */}
        <Offer     onOpenModal={open} />
        <Hunters   onOpenModal={open} />
        <Programs  onOpenModal={open} />
        <Events    onOpenModal={open} />
        <Process   onOpenModal={open} />
        <Coach     onOpenModal={open} />
        <FAQ       onOpenModal={open} />
      </main>

      <Footer />

      {/* Modal */}
      <BookingModal isOpen={isOpen} onClose={close} />

      {/* Sticky CTA — mobile only */}
      <StickyCTABar onOpenModal={open} />
    </>
  )
}

export default App
