import Icon from '../components/Icon'

function Descubra({ onOpen }) {
  return (
    <section className="discover-page">

      <div className="discover-header">

        <p className="discover-eyebrow rotulo-cabecalho">DESCUBRA</p>

        <div className="discover-title-block">

          <h2 className="discover-title titulo-pagina">
            MIMOSO
            <br className="discover-title-break" />
            {' DO SUL'}
          </h2>

          <p className="discover-credit">
            Por Fabiana Silva
          </p>

        </div>

      </div>

      <div className="discover-section">

        <h3>
          EXPLORE MIMOSO
        </h3>

        <div className="discover-grid">

          <button
            type="button"
            className="discover-card"
            onClick={() =>
              onOpen({
                icon: 'mountains',
                category: 'DESCUBRA · PONTOS TURÍSTICOS',
                page: 'Natureza',
                title: 'Pontos Turísticos',
                description:
                  'Descubra os principais pontos turísticos e as paisagens naturais de Mimoso do Sul.',
              })
            }
          >
            <div className="discover-icon">
              <Icon name="locationPrivacy" size={54} />
            </div>

            <h4>
              Pontos Turísticos
            </h4>

            <p>
              Pontos turísticos, paisagens e lugares
              para conhecer e explorar.
            </p>

            <span className="card-arrow">
              →
            </span>
          </button>

          <button
            type="button"
            className="discover-card"
            onClick={() =>
              onOpen({
                icon: 'landmark',
                category: 'DESCUBRA · PATRIMÔNIOS',
                page: 'Patrimônios',
                title: 'Patrimônios',
                description:
                  'Conheça lugares, construções e histórias que fazem parte da identidade de Mimoso do Sul.',
              })
            }
          >
            <div className="discover-icon">
              <Icon name="classicalBuilding" size={54} />
            </div>

            <h4>
              Patrimônios
            </h4>

            <p>
              Conheça construções e histórias
              que fazem parte da identidade do município.
            </p>

            <span className="card-arrow">
              →
            </span>
          </button>

          <button
            type="button"
            className="discover-card"
            onClick={() =>
              onOpen({
                icon: 'masks',
                category: 'DESCUBRA',
                title: 'História',
                description:
                  'Tradições, festas, manifestações culturais e a identidade do povo mimosense.',
              })
            }
          >
            <div className="discover-icon">
              <Icon name="articleReader" size={54} />
            </div>

            <h4>
              História
            </h4>

            <p>
              Tradições, festas, manifestações culturais
              e a identidade do povo mimosense.
            </p>

            <span className="card-arrow">
              →
            </span>
          </button>

        </div>

      </div>

    </section>
  )
}

export default Descubra