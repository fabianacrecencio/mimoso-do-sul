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

  /* Alinha o botão "×" do canto com a linha do título da página.

     O `.header` é `position: fixed`, e o botão precisa ficar na MESMA
     linha do rótulo do cabeçalho de cada página — o "DESCUBRA". Mede
     a classe `.rotulo-cabecalho` e, se não houver, cai no
     `.titulo-pagina`.

     Duas classes e não `h1` porque o markup é inconsistente: o
     título da página inicial e o dos Vales do Café são `<h2>`, os
     outros são `<h1>`.

     Se a página não tiver nenhuma das duas, a variável é removida e o
     CSS volta a 43px (o valor do `:root`), que é onde o botão vivia
     antes. Rede de segurança: se a medição falhar, ele continua
     visível no canto. */
  useEffect(() => {
    function alinhar() {
      const raiz = document.documentElement

      /* A referência é o RÓTULO do cabeçalho — o "DESCUBRA" — e não o
         título grande. Foi o que a usuária pediu: o "×" na mesma reta
         do "DESCUBRA".

         A escolha é do usuário e vale a pena respectar: o `×` desce
         até a linha do rótulo, e o conteúdo da página NÃO sobe. Subir
         o conteúdo tiraria o cabeçalho de cima da cabeça do Cristo na
         página inicial, que é um detalhe já aprovado.

         Páginas sem rótulo (as de detalhe, que vão direto no título)
         caem no `.titulo-pagina` — o "×" alinha com o título em vez
         de sumir. */
      const seletor = '.rotulo-cabecalho, .titulo-pagina'

      const candidatos = Array.from(document.querySelectorAll(seletor)).filter(
        (el) => {
          const r = el.getBoundingClientRect()

          return r.height > 0 && r.width > 0
        },
      )

      const alvo =
        candidatos.find((el) => el.classList.contains('rotulo-cabecalho')) ||
        candidatos[0]

      if (!alvo) {
        raiz.style.removeProperty('--titulo-centro')

        return
      }

      const r = alvo.getBoundingClientRect()

      /* Piso de 23px: o CSS faz `--titulo-centro - 23px` para
         centrar o botão na linha. Se o rótulo ficasse acima de 23px
         o resultado seria negativo, o `padding` inteiro ficaria
         inválido e o botão perderia o padding lateral também. */
      const centro = Math.max(23, Math.round(r.top + r.height / 2))

      raiz.style.setProperty('--titulo-centro', `${centro}px`)
    }

    alinhar()

    window.addEventListener('resize', alinhar)
    window.addEventListener('load', alinhar)

    return () => {
      window.removeEventListener('resize', alinhar)
      window.removeEventListener('load', alinhar)
      document.documentElement.style.removeProperty('--titulo-centro')
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
          subtitulo={selectedItem.subtitulo}
          sobre={selectedItem.sobre}
          sobreTitulo={selectedItem.sobreTitulo}
          stats={selectedItem.stats}
          endereco={selectedItem.endereco}
          localizacao={selectedItem.localizacao}
          mapa={selectedItem.mapa}
          galeria={selectedItem.galeria}
          trilha={selectedItem.trilha}
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