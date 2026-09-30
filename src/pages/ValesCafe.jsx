import Icon from '../components/Icon'

function ValesCafe({ onOpen }) {
  return (
    <section className="region-page">

      <div className="region-header">

        <p>REGIÃO</p>

        <h2>
          MONAST
        </h2>

        <p className="region-description">
         Monumento Natural Serra das Torres
        </p>

      </div>

      <div className="region-highlight">

        <div className="region-icon">
          <Icon name="tree" size={40} />
        </div>

        <div>

          <p className="small-title">
            MIMOSO DO SUL
          </p>

          <h3>
            Entre vales e montanhas
          </h3>

          <p>
            Mimoso do Sul faz parte de uma paisagem marcada
            pelas montanhas e pela história da ocupação do
            sul capixaba.
          </p>

        </div>

      </div>

      <div className="region-section">

        <h3>
          Conheça a região
        </h3>

        <div className="region-grid">

          <button
            className="region-card"
            onClick={() =>
              onOpen({
                icon: 'mountain',
                category: 'Região do Vale e do Café',
                title: 'Montanhas',
                description:
                  'Conheça as paisagens montanhosas e os lugares especiais da região.',
              })
            }
          >

            <span>
              <Icon name="mountain" size={34} />
            </span>

            <h4>
              Montanhas
            </h4>

            <p>
              Paisagens montanhosas que caracterizam
              boa parte do sul do Espírito Santo.
            </p>

            <span className="card-arrow">
              →
            </span>

          </button>

          <button
            className="region-card"
            onClick={() =>
              onOpen({
                icon: 'coffee',
                category: 'VALES DO CAFÉ',
                title: 'Café',
                description:
                  'Conheça a relação da região com a cultura do café e sua importância histórica.',
              })
            }
          >

            <span>
              <Icon name="coffee" size={34} />
            </span>

            <h4>
              Café
            </h4>

            <p>
              A cultura do café faz parte da história
              e da identidade de diversas áreas da região.
            </p>

            <span className="card-arrow">
              →
            </span>

          </button>

          <button
            className="region-card"
            onClick={() =>
              onOpen({
                icon: 'home',
                category: 'VALES DO CAFÉ',
                title: 'Interior',
                description:
                  'Descubra pequenas comunidades, propriedades rurais e paisagens do interior capixaba.',
              })
            }
          >

            <span>
              <Icon name="home" size={34} />
            </span>

            <h4>
              Interior
            </h4>

            <p>
              Pequenas comunidades, propriedades rurais
              e paisagens do interior capixaba.
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

export default ValesCafe