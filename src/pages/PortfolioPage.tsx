import { useEffect } from 'react'
import { PM_ROLE } from '../data/roles'
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
    document.title = 'Thanyapat Montha — Junior Project Manager'
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header role={PM_ROLE} />
      <main className="flex-1">
        <Hero role={PM_ROLE} />
        <About role={PM_ROLE} />
<Skills role={PM_ROLE} />
        <Experience role={PM_ROLE} />
        <Projects role={PM_ROLE} />
        <Contact role={PM_ROLE} />
      </main>
      <Footer />
    </div>
  )
}
