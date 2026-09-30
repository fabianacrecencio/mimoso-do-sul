import { useEffect, useState } from 'react'

import './App.css'
import Icon from './components/Icon'

import Descubra from './pages/Descubra'
import ValesCafe from './pages/ValesCafe'
import Natureza from './pages/Natureza'
import Patrimonios from './pages/Patrimonios'
import Detalhes from './pages/Detalhes'
import Monast from './pages/Monast'

const navigationItems = [
  {
    page: 'Descubra',
    label: 'Mimoso do Sul',
    icon: 'evergreenTree',
  },
  {
    page: 'MONAST',
    label: 'MONAST',
    icon: 'nothingButWallpapers',
  },
  {
    page: 'Sul Capixaba',
    label: 'Sul Capixaba',
    icon: 'openMaps',
  },
  {
    page: 'Galeria',
    label: 'Galeria',
    icon: 'dsphoto',
  },
  {
    page: 'História',
    label: 'História',
    icon: 'googleDocsAlt',
  },
  {
    page: 'Trilha',
    label: 'Trilha',
    icon: 'cityTransit',
  },
]

const knownPages = [
  'Descubra',
  'Natureza',
  'Patrimônios',
  'Vales do Café',
  'MONAST',
]

function App() {
  const [intro, setIntro] = useState(true)
  const [activePage, setActivePage] = useState('Descubra')
  const [selectedItem, setSelectedItem] = useState(null)
  const [menuOpen, setMenuOpen] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduceMotion) {
      document.documentElement.style.setProperty('--parallax-offset', '0px')
      return undefined
    }

    // No celular o deslocamento é menor, para não exagerar num
    // retrato em que a altura útil da foto já é curta
    const isNarrow = window.matchMedia('(max-width: 700px)').matches
    const factor = isNarrow ? 0.08 : 0.14
    const limit = isNarrow ? 40 : 70

    let scrollContainer = null

    function updateParallax() {
      const scrollTop = scrollContainer
        ? scrollContainer.scrollTop
        : window.scrollY

      const offset = Math.max(
        -limit,
        Math.min(limit, -scrollTop * factor),
      )

      document.documentElement.style.setProperty(
        '--parallax-offset',
        `${Math.round(offset)}px`,
      )
    }

    scrollContainer = document.querySelector('.discover-page')

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateParallax, {
        passive: true,
      })
    }

    window.addEventListener('scroll', updateParallax, { passive: true })
    updateParallax()

    return () => {
      scrollContainer?.removeEventListener('scroll', updateParallax)
      window.removeEventListener('scroll', updateParallax)
      document.documentElement.style.removeProperty('--parallax-offset')
    }
  }, [intro, activePage, selectedItem])

  /* =========================
     NAVEGAÇÃO
  ========================= */

  function handleNavigate(page) {
    setActivePage(page)
    setSelectedItem(null)
  }

  function handleOpenItem(item) {
    if (!item) return

    if (
      item.page === 'Natureza' ||
      item.page === 'Patrimônios' ||
      item.page === 'Vales do Café' ||
      item.page === 'MONAST'
    ) {
      handleNavigate(item.page)
      return
    }

    setSelectedItem(item)
  }

  /* =========================
     ABERTURA
  ========================= */

  if (intro) {
    return (
      <div
        className="intro"
        role="status"
        aria-label="Abertura do Mimoso do Sul"
      >
        <div className="intro-photo"></div>

        <div className="intro-red"></div>

        <div className="intro-yellow"></div>

        <div className="intro-green"></div>

        <div className="intro-content">
          <p>DESCUBRA</p>
          <h1>MIMOSO DO SUL</h1>
        </div>
      </div>
    )
  }

  /* =========================
     DETALHES
  ========================= */

  if (selectedItem) {
    return (
      <div className="app">
        <Detalhes
          icon={selectedItem.icon}
          category={selectedItem.category}
          title={selectedItem.title}
          description={selectedItem.description}
          image={selectedItem.image}
          backgroundImage={selectedItem.backgroundImage}
          onBack={() => setSelectedItem(null)}
        />
      </div>
    )
  }

  /* =========================
     APLICATIVO
  ========================= */

  return (
    <div className="app">
      <header className="header">
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen((current) => current === true ? false : true)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </header>

      <main
        className={`home ${activePage === 'Descubra' ? 'home-discover' : ''} ${activePage === 'MONAST' ? 'home-monast' : ''}`}
      >
        {activePage === 'Descubra' && (
          <Descubra onOpen={handleOpenItem} />
        )}

        {activePage === 'Natureza' && (
          <Natureza
            onOpen={setSelectedItem}
            onBack={() => handleNavigate('Descubra')}
          />
        )}

        {activePage === 'Patrimônios' && (
          <Patrimonios
            onOpen={setSelectedItem}
            onBack={() => handleNavigate('Descubra')}
          />
        )}

        {activePage === 'Vales do Café' && (
          <ValesCafe
            onOpen={setSelectedItem}
          />
        )}

        {activePage === 'MONAST' && (
          <Monast />
        )}

        {!knownPages.includes(activePage) && (
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

      {/* =========================
          MENU INFERIOR
      ========================= */}

      {menuOpen && (
        <nav
          id="main-menu"
          className="main-menu"
          aria-label="Navegação principal"
        >
          {navigationItems.map((item) => {
            const isActive = activePage === item.page

            return (
              <button
                key={item.page}
                type="button"
                className={isActive ? 'active' : ''}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => handleNavigate(item.page)}
              >
                <Icon
                  name={item.icon}
                  size={22}
                  isometric={item.isometric}
                />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
      )}
    </div>
  )
}

export default App