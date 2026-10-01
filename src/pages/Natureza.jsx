import Icon from '../components/Icon'

function Natureza({ onOpen, onBack }) {
  const atrativos = [
    {
      title: 'Cristo Redentor',
      imagem: '/fotos/cristo2.png',
      imagemDetalhe: '/fotos/top.png',
      fundo: '/fotos/ok.png',
      localizacao: 'Centro de Mimoso do Sul',
      description:
        'Localizado em um monte a 128 metros de altura, o Cristo Redentor foi eleito a primeira maravilha do município e oferece uma vista panorâmica de quase 360 graus da cidade.',
    },
    {
      title: 'Pico dos Pontões',
      imagem: '/fotos/cardpico.png',
      fundo: '/fotos/fundopontos.png',
      localizacao: 'Conceição do Muqui',
      description:
        'O Pico dos Pontões, localizado no distrito de Conceição do Muqui, em Mimoso do Sul (ES), possui 1.938 metros de altitude, sendo o ponto mais alto do município.',
      galeria: ['/fotos/pico.jpeg', '/fotos/pontoes1.png', '/fotos/pontoes.jpeg'],
      trilha: [],
    },
    {
      title: 'Cachoeira do Paraíba',
      imagem: '/fotos/paraiba.png',
      localizacao: 'Localizada a 13 km de Mimoso',
      description:
        'Cachoeira com aproximadamente 12 metros de altura.',
      galeria: ['/fotos/paraiba.png'],
      trilha: [],
    },
    {
      title: 'Cachoeira das Flores',
      imagem: '/fotos/flores.png',
      localizacao: 'Sao Jose das Torres',
      galeria: ['/fotos/flores.png'],
      trilha: [],
    },
    {
      title: 'Usina Aparecida',
      imagem: '/fotos/usina.jpeg',
      localizacao: 'Rio Muqui do Sul, na altura da Fazenda Aparecida',
      description:
        'Construída no encontro do Córrego Aparecida com o rio Muqui do Sul para abastecer a cidade, encontra-se desativada e em ruínas.',
      galeria: ['/fotos/usina.jpeg'],
      trilha: [],
    },
    {
      title: 'Mirante Santa Terezinha',
      imagem: '/fotos/mirante.png',
      localizacao: 'Interior de Mimoso do Sul',
      description:
        'Mirante com vista panorâmica dos vales e montanhas da região de Mimoso do Sul.',
      galeria: ['/fotos/mirante.png'],
      trilha: [],
    },
    {
      title: "Mirante da Água Limpa",
      imagem: '/fotos/agua.jpeg',
      localizacao: 'Comunidade SÁgua Limpa',
      description:
        'Faz parte do MONAST e liga Mimoso do Sul a Muqui.',
      galeria: ['/fotos/agua.jpeg'],
      trilha: [],
    },
  ]

  return (
    <section className="natureza-page">

      <div className="natureza-hero">

        <button
          type="button"
          className="back-button natureza-back"
          onClick={onBack}
        >
          ← Voltar
        </button>

        <div className="natureza-hero-content">

          <p className="discover-eyebrow">
            DESCUBRA
          </p>

          <h1 className="discover-title">
            MIMOSO DO SUL
          </h1>

          <p className="discover-text">
            entre montanhas, rios, cachoeiras e mirantes.
          </p>

        </div>

      </div>

      <div className="natureza-content">

        <div className="discover-section">

          <h3>
            ATRATIVOS TURÍSTICOS
          </h3>

          <div className="discover-grid">

            {atrativos.map((atrativo) => (

              <button
                key={atrativo.title}
                type="button"
                className="discover-card nature-card"
                onClick={() =>
                  onOpen({
                    category: 'NATUREZA',
                    title: atrativo.title,
                    description: atrativo.description,
                    image: atrativo.imagemDetalhe || atrativo.imagem,
                    backgroundImage: atrativo.fundo,
                    localizacao: atrativo.localizacao,
                    galeria: atrativo.galeria,
                    trilha: atrativo.trilha,
                  })
                }
              >

                <div className="nature-card-image">

                  <img
                    src={atrativo.imagem}
                    alt={atrativo.title}
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = '/fotos/mimoso.jpeg'
                    }}
                  />

                </div>

                <div className="nature-card-content">

                  <h4>
                    {atrativo.title}
                  </h4>

                  <p className="nature-card-location">
                    <Icon name="pushPinOutlined" size={14} /> {atrativo.localizacao}
                  </p>

                  <span className="card-arrow">
                    →
                  </span>

                </div>

              </button>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Natureza
