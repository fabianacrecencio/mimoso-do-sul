import Icon from '../components/Icon'

function Patrimonios({ onOpen, onBack }) {
  const patrimonios = [
    {
      title: 'Sítio Histórico de São Pedro',
      imagem: '/fotos/patrimonio.jpeg',
      localizacao: 'Localizado em Mimoso do Sul',
    },
    {
      title: 'Fazenda Independência',
      imagem: '/fotos/independencia.jpeg',
      localizacao: 'Sentido União',
    },
    {
      title: 'Fazenda União',
      imagem: '/fotos/unia0.jpeg',
      imagemDetalhe: '/fotos/uniao.jpeg',
      fundo: '/fotos/uniao.jpeg',
      localizacao: 'Assentamento União',
      /* Pin no OpenStreetMap. `raio` abre a caixa do mapa em graus,
         nos dois eixos. */
      mapa: { lat: -21.1336792, lon: -41.4579892, zoom: 16, raio: 0.015 },
      description:
        'Antiga sede de uma fazenda histórica que atravessou os períodos do café, da cana e da produção de açúcar e aguardente.',
    },
    {
      title: 'Fazenda Maravilha',
      imagem: '/fotos/maravilha.jpeg',
      localizacao: 'São Pedro do Itabapoana',
    },
    {
      title: 'Igreja Santa Cruz',
      imagem: '/fotos/cruz.jpeg',
      localizacao: 'BR-101, divisa RJ x ES',
    },
  ]

  return (
    <section className="natureza-page patrimonios-page">

      <div className="natureza-hero">

        <button
          type="button"
          className="back-button natureza-back"
          onClick={onBack}
        >
          ← Voltar
        </button>

        <p className="patrimonios-page-kicker rotulo-cabecalho">
          DESCUBRA
        </p>

        <h1 className="patrimonios-page-title titulo-pagina">
          PATRIMÔNIOS
        </h1>

      </div>

      <div className="natureza-content">

        <div className="patrimonios-intro">

          <p>
            MEMÓRIA DE MIMOSO
          </p>

          <p>
            Patrimônios, construções e ruínas que preservam a memória de Mimoso do Sul.
          </p>

        </div>

        <div className="discover-section">

          <h3>
            PATRIMÔNIOS HISTÓRICOS
          </h3>

          <div className="discover-grid">

            {patrimonios.map((patrimonio) => (

              <button
                key={patrimonio.title}
                type="button"
                className="discover-card nature-card"
                onClick={() =>
                  onOpen({
                    category: 'PATRIMÔNIOS',
                    title: patrimonio.title,
                    description: `Patrimônio localizado em ${patrimonio.localizacao}.`,
                    image: patrimonio.imagemDetalhe || patrimonio.imagem,
                    backgroundImage: patrimonio.fundo,
                    localizacao: patrimonio.localizacao,
                    mapa: patrimonio.mapa,
                  })
                }
              >

                <div className="nature-card-image">

                  <img
                    src={patrimonio.imagem}
                    alt={patrimonio.title}
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = '/fotos/uniao.jpeg'
                    }}
                  />

                </div>

                <div className="nature-card-content">

                  <h4>
                    {patrimonio.title}
                  </h4>

                  <p className="nature-card-location">
                    <Icon name="postalCode" size={14} /> {patrimonio.localizacao}
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

export default Patrimonios
