function ValesCafe() {
  return (
    <section className="region-page">

      <div className="region-header">

        <p>REGIÃO</p>

        <h2>Vales do Café</h2>

        <p className="region-description">
          Uma região marcada pela história, pelas montanhas,
          pela agricultura e pela cultura do sul do Espírito Santo.
        </p>

      </div>

      <div className="region-highlight">

        <div className="region-icon">
          ☕
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

          <article className="region-card">
            <span>⛰️</span>

            <h4>
              Montanhas
            </h4>

            <p>
              Paisagens montanhosas que caracterizam
              boa parte do sul do Espírito Santo.
            </p>
          </article>

          <article className="region-card">
            <span>☕</span>

            <h4>
              Café
            </h4>

            <p>
              A cultura do café faz parte da história
              e da identidade de diversas áreas da região.
            </p>
          </article>

          <article className="region-card">
            <span>🏡</span>

            <h4>
              Interior
            </h4>

            <p>
              Pequenas comunidades, propriedades rurais
              e paisagens do interior capixaba.
            </p>
          </article>

        </div>

      </div>

    </section>
  )
}

export default ValesCafe