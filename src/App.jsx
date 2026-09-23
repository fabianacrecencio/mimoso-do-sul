import { useEffect, useState } from 'react'
import './App.css'

import Descubra from './pages/Descubra'
import ValesCafe from './pages/ValesCafe'

function App() {
  const [intro, setIntro] = useState(true)
  const [activePage, setActivePage] = useState('Descubra')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (intro) {
    return (
      <div className="intro">
        <div className="intro-red"></div>
        <div className="intro-yellow"></div>
        <div className="intro-green"></div>

        <div className="intro-content">
          <p>DESCUBRA</p>
          <h1>Mimoso do Sul</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="app">

      <header className="header">

        <div className="logo">
          Mimoso do Sul
        </div>

        <button className="menu-button">
          ☰
        </button>

      </header>

      <main className="home">

        {activePage === 'Descubra' && (
          <Descubra />
        )}

        {activePage === 'Vales do Café' && (
          <ValesCafe />
        )}

        {activePage !== 'Descubra' &&
          activePage !== 'Vales do Café' && (
            <div className="home-content">

              <p className="welcome">
                EM BREVE
              </p>

              <h1>
                {activePage}
              </h1>

              <p className="subtitle">
                Estamos preparando essa parte do aplicativo.
              </p>

            </div>
          )}

      </main>

      <nav className="main-menu">

        <button
          onClick={() => setActivePage('Descubra')}
        >
          🏞️
          <span>Descubra</span>
        </button>

        <button
          onClick={() => setActivePage('Vales do Café')}
        >
          ☕
          <span>Vales do Café</span>
        </button>

        <button
          onClick={() => setActivePage('Sul Capixaba')}
        >
          🗺️
          <span>Sul Capixaba</span>
        </button>

        <button
          onClick={() => setActivePage('Galeria')}
        >
          📸
          <span>Galeria</span>
        </button>

        <button
          onClick={() => setActivePage('História')}
        >
          📖
          <span>História</span>
        </button>

        <button
          onClick={() => setActivePage('Mapa')}
        >
          📍
          <span>Mapa</span>
        </button>

      </nav>

    </div>
  )
}

export default App