import { useEffect } from 'react'
import { PO_ROLE } from '../data/roles'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Skills } from '../components/sections/Skills'
import { Experience } from '../components/sections/Experience'
import { Projects } from '../components/sections/Projects'
import { Contact } from '../components/sections/Contact'

export function PortfolioPage() {
  useEffect(() => {
    document.title = 'Thanyapat Montha — Product Owner'
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header role={PO_ROLE} />
      <main className="flex-1">
        <Hero role={PO_ROLE} />
        <About role={PO_ROLE} />
        <Skills role={PO_ROLE} />
        <Experience role={PO_ROLE} />
        <Projects role={PO_ROLE} />
        <Contact role={PO_ROLE} />
      </main>
      <Footer />
    </div>
  )
}
