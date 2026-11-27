import { useState } from 'react'
import { Inicio } from './pages/Inicio'
import { Eventos } from './pages/Eventos'

export type Page = 'inicio' | 'eventos' | 'contacto'

function App() {
  const [page, setPage] = useState<Page>('inicio')

  if (page === 'eventos') return <Eventos onNavigate={setPage} />
  return <Inicio onNavigate={setPage} />
}

export default App
