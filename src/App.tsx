import { Routes, Route } from 'react-router-dom'
import { PortfolioPage } from './pages/PortfolioPage'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
