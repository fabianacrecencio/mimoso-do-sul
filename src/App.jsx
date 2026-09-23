import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [intro, setIntro] = useState(true)

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
        <div className="home-content">
          <p className="welcome">BEM-VINDO A</p>

          <h1>Mimoso do Sul</h1>

          <p className="subtitle">
            História, cultura, natureza e lugares para descobrir.
          </p>

          <button className="start-button">
            Explorar Mimoso
          </button>
        </div>
      </main>

      <nav className="main-menu">
        <button>🏞️<span>Descubra</span></button>
        <button>☕<span>Vales do Café</span></button>
        <button>🗺️<span>Sul Capixaba</span></button>
        <button>📸<span>Galeria</span></button>
        <button>📖<span>História</span></button>
        <button>📍<span>Mapa</span></button>
      </nav>
    </div>
  )
}

export default App