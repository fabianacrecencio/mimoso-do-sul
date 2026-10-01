import Icon from '../components/Icon'

function Detalhes({
  icon,
  category,
  title,
  description,
  image,
  backgroundImage,
  subtitulo,
  sobre,
  stats,
  galeria,
  trilha,
  onBack,
}) {
  const isNatureza = title === 'Natureza'
  const isCristoRedentor = title === 'Cristo Redentor'
  const isPicoDosPontos = title === 'Pico dos Pontões'
  const isFazendaUniao = title === 'Fazenda União'

  /* Identifica um ATRATIVO de Natureza. NÃO usar `title ===
     'Natureza'`: esse era o título da página antiga de categoria e
     nenhum atrativo o tem — foi exatamente esse erro que, numa
     tentativa anterior, tirou o Cristo Redentor do layout aprovado
     sem o build nem o lint reclamarem.

     `usaPadraoCristo` INCLUI o Cristo, e é o que seleciona o
     layout. Ele entra no mesmo `isCristoRedentor` de sempre, então
     o Cristo continua caindo no mesmo código — inalterado. Onde o
     que muda é o CONTEÚDO (estatísticas, galeria, trilha), o Cristo
     usa os arrays locais, e os outros usam o que veio por prop. */
  const isAtrativoNatureza = category === 'NATUREZA'
  const usaPadraoCristo = isCristoRedentor || isAtrativoNatureza
  const cristoGallery = [
    '/fotos/cristo2.png',
    '/fotos/maybe2.png',
    '/fotos/cristo.jpeg',
  ]
  /* Parágrafos do "Sobre" do Cristo. Ficam aqui porque ele foi o
     primeiro a ser feito, mas são dados como qualquer outro: os
     demais atrativos trazem os seus pelo campo `sobre`.

     Antes eles estavam escritos direto no JSX do ramo, e como o
     ramo é `usaPadraoCristo` — que inclui TODOS os atrativos de
     Natureza — o Pico dos Pontões aparecia com o texto do Cristo. */
  const cristoSobre = [
    'Inaugurado em 1956, o Cristo Redentor de Mimoso do Sul está localizado na Ladeira Ely Junqueira, no bairro Monte Cristo. Com 28 metros de altura, o monumento se destaca em meio à paisagem serrana e proporciona uma linda vista das montanhas que cercam o município.',
    'A experiência vai além do próprio monumento. Trilhas ao redor do Cristo levam a diferentes visões da cidade, entre eles a conhecida casinha "Hollywood", situada no topo da montanha, de onde se tem uma vista panorâmica dos Pontões e da Serra das Torres. O local também é propício para contemplação, fotografia, contato com a natureza e observação de aves.',
  ]
  /* Trecho "O QUE VEMOS PELO CAMINHO". As fotos ainda estão vazias:
     basta trocar `foto: null` pelo caminho da imagem que o card
     passa a mostrar a foto no lugar do placeholder, mantendo a
     barra de descrição. */
  const cristoTrilha = [
    { foto: null, descricao: 'vista da janela do cristo' },
    { foto: null, descricao: 'torre de sinal' },
    { foto: null, descricao: 'mirante hollywood' },
    { foto: null, descricao: 'vista da praça central' },
  ]
  /* Derivadas — precisam vir DEPOIS dos arrays acima, senão o
     `cristoGallery` cai na zona morta temporal e a página nem
     abre.

     A galeria tem fallback no array do Cristo, senão um atrativo
     sem galeria ficaria com as fotos do Cristo. A trilha NÃO tem:
     cair nela mostraria as descrições do Cristo nos outros cards.
     Sem `trilha` própria, a seção simplesmente não aparece. */
  const cristoStats = [
    { icon: 'yahooJapanCalendar', value: '1956', label: 'Inauguração' },
    { icon: 'arctRuler', value: '28 m', label: 'Altura do monumento' },
    { icon: 'celeste', value: '128 m', label: 'Altitude do monte' },
  ]
  const galeriaDoCard = galeria && galeria.length > 0 ? galeria : cristoGallery
  const trilhaDoCard = isCristoRedentor ? cristoTrilha : trilha || []
  const sobreDoCard = isCristoRedentor ? cristoSobre : sobre || []
  const statsDoCard = isCristoRedentor ? cristoStats : stats || []
  const picoGallery = [
    '/fotos/pico.jpeg',
    '/fotos/pontoes1.png',
    '/fotos/pontoes.jpeg',
  ]
  const fazendaUniaoGallery = [
    '/fotos/unia0.jpeg',
    '/fotos/uniao.jpeg',
    '/fotos/usina.jpeg',
  ]
  const detailsStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.78)), url("${backgroundImage}")`,
      }
    : undefined

  return (
    <section
      className={`details-page ${backgroundImage ? 'details-page-background' : ''} ${usaPadraoCristo ? 'details-page-cristo' : ''} ${isPicoDosPontos ? 'details-page-pico' : ''}`}
      style={detailsStyle}
    >

      <button
        className="back-button"
        onClick={onBack}
      >
        ← Voltar
      </button>

      <div className="details-hero">

        <div className="details-image">

          {image ? (
            <img
              src={image}
              alt={title}
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = '/fotos/mimoso.jpeg'
              }}
            />
          ) : (
            <div className="details-placeholder">
              <Icon name={icon || 'camera'} size={32} />

              <p>
                Adicione sua foto aqui
              </p>
            </div>
          )}

        </div>

        <div className="details-intro">

          {usaPadraoCristo ? (
            <>
              <h1 className="details-title">
                {title}
              </h1>

              <p className="details-subtitle">
                {isCristoRedentor
                  ? 'Erguido sobre um monte a 128 metros de altitude, o Cristo Redentor é considerado a primeira maravilha do município e proporciona uma vista panorâmica da cidade.'
                  : subtitulo || description}
              </p>
            </>
          ) : (
            <>
              <p className="details-category">
                {category}
              </p>

              <h1>
                {title}
              </h1>

              {isPicoDosPontos ? (
                <p>
                  O <strong>Pico dos Pontões</strong>, localizado no distrito
                  de Conceição do Muqui, em Mimoso do Sul (ES), possui
                  <strong> 1.438 metros de altitude</strong>, sendo o ponto
                  mais alto do município.
                </p>
              ) : (
                <p>
                  {description}
                </p>
              )}
            </>
          )}

        </div>

        {usaPadraoCristo && statsDoCard.length > 0 && (
          <ul className="cristo-stats">
            {statsDoCard.map((stat) => (
              <li key={stat.label}>
                <Icon name={stat.icon} size={22} />

                <strong>{stat.value}</strong>

                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        )}

      </div>

      {isNatureza ? (

        <div className="details-content">

          <section className="details-section">

            <p className="details-label">
              DESTAQUE
            </p>

            <h2>
              Pico dos Pontões
            </h2>

            <p>
              Um dos grandes símbolos naturais de Mimoso do Sul,
              o Pico dos Pontões está localizado no distrito de
              Conceição do Muqui, em uma das áreas mais altas
              do município.
            </p>

            <p>
              Conhecido também como “Dedo de Deus”, o pico
              possui 1.438 metros de altura e se destaca pela
              sua formação rochosa e pelas paisagens das
              montanhas do sul do Espírito Santo.
            </p>

          </section>

          <section className="details-section">

            <p className="details-label">
              LOCALIZAÇÃO
            </p>

            <h2>
              Conceição do Muqui
            </h2>

            <p>
              O Pico dos Pontões está localizado no distrito
              de Conceição do Muqui, no extremo norte de
              Mimoso do Sul.
            </p>

            <div className="map-placeholder">

              <Icon name="postalCode" size={28} />

              <p>
                A localização exata será adicionada
                ao mapa interativo.
              </p>

            </div>

          </section>

          <section className="details-section">

            <p className="details-label">
              PAISAGEM
            </p>

            <h2>
              Montanhas de Mimoso
            </h2>

            <p>
              O Pico dos Pontões pode ser avistado de diferentes
              pontos do município e representa uma das paisagens
              mais marcantes de Mimoso do Sul.
            </p>

            <p>
              A região de Conceição do Muqui também é conhecida
              por suas áreas de montanha, propriedades rurais,
              clima mais frio e paisagens naturais.
            </p>

          </section>

          <section className="details-section">

            <p className="details-label">
              {isCristoRedentor || isPicoDosPontos || isFazendaUniao
                ? 'GALERIA'
                : 'FOTOS'}
            </p>

            <h2>
              {isCristoRedentor
                ? 'Imagens do Cristo'
                : isPicoDosPontos
                  ? 'Imagens do Pico'
                  : isFazendaUniao
                    ? 'Imagens da Fazenda União'
                    : 'Galeria'}
            </h2>

            <div className="photo-placeholder-grid">

              <div>
                <Icon name="camera" size={28} />
                <p>Adicionar foto</p>
              </div>

              <div>
                <Icon name="camera" size={28} />
                <p>Adicionar foto</p>
              </div>

              <div>
                <Icon name="camera" size={28} />
                <p>Adicionar foto</p>
              </div>

            </div>

          </section>

        </div>

      ) : (

        <div className="details-content">

          <section className="details-section">

            {/* O rótulo saiu: repetia o `h2` logo abaixo e poluía a
                leitura. O `h2` é escrito em caixa baixa porque o CSS
                do projeto aplica `text-transform: uppercase` — é ele
                que vira "SOBRE O LOCAL" na tela. */}
            {isFazendaUniao && (
              <p className="details-label">
                SOBRE A FAZENDA
              </p>
            )}

            <h2>
              {isCristoRedentor
                ? 'Sobre o monumento'
                : isPicoDosPontos
                  ? 'Sobre o local'
                  : isFazendaUniao
                    ? 'Fazenda União'
                    : 'Conheça este lugar'}
            </h2>

            {sobreDoCard.length > 0 ? (
              sobreDoCard.map((paragrafo, indice) => (
                <p key={`${title}-sobre-${indice}`}>
                  {paragrafo}
                </p>
              ))
            ) : (
              <>
                <p>
                  {description ||
                    'Aqui você poderá adicionar as informações, histórias, curiosidades e detalhes sobre este lugar ou tema.'}
                </p>

                <p>
                  Este espaço foi preparado para receber o conteúdo que
                  fará parte do seu guia de Mimoso do Sul.
                </p>
              </>
            )}

          </section>

          <section className="details-section">

            {!usaPadraoCristo && (
              <p className="details-label">
                {isPicoDosPontos || isFazendaUniao
                  ? 'GALERIA'
                  : 'FOTOS'}
              </p>
            )}

            <h2>
              {usaPadraoCristo
                ? 'Galeria'
                : isPicoDosPontos
                  ? 'Imagens do Pico'
                  : isFazendaUniao
                    ? 'Imagens da Fazenda União'
                    : 'Galeria'}
            </h2>

            {usaPadraoCristo && (
              <div className="cristo-gallery">
                {galeriaDoCard.map((photo, index) => (
                  <div
                    className="cristo-gallery-item"
                    key={photo}
                  >
                    <img
                      src={photo}
                      alt={`${title} — foto ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            )}

            {!usaPadraoCristo && (
              <div className="photo-placeholder-grid">

              {isPicoDosPontos ? (
                picoGallery.map((photo, index) => (
                  <div
                    className="photo-gallery-item"
                    key={photo}
                  >
                    <img
                      src={photo}
                      alt={`Pico dos Pontões — foto ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))
              ) : isFazendaUniao ? (
                fazendaUniaoGallery.map((photo, index) => (
                  <div
                    className="photo-gallery-item"
                    key={photo}
                  >
                    <img
                      src={photo}
                      alt={`Fazenda União — foto ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))
              ) : (
                <>
                  <div>
                    <Icon name="camera" size={28} />
                    <p>Adicionar foto</p>
                  </div>

                  <div>
                    <Icon name="camera" size={28} />
                    <p>Adicionar foto</p>
                  </div>

                  <div>
                    <Icon name="camera" size={28} />
                    <p>Adicionar foto</p>
                  </div>
                </>
              )}

            </div>
            )}

          </section>

          {usaPadraoCristo && trilhaDoCard.length > 0 && (
            <section className="details-section cristo-trilha-section">

              <h2>
                O que vemos pelo caminho
              </h2>

              <div className="cristo-trilha">
                {trilhaDoCard.map((vaga, index) => (
                  <div
                    className="cristo-trilha-item"
                    key={`${vaga.descricao}-${index}`}
                  >
                    {vaga.foto && (
                      <img
                        src={vaga.foto}
                        alt={`O que vemos pelo caminho — ${vaga.descricao}`}
                        loading="lazy"
                        decoding="async"
                      />
                    )}

                    <span className="cristo-trilha-legenda">
                      <Icon name="arctCamera" size={16} />

                      {vaga.descricao}
                    </span>
                  </div>
                ))}
              </div>

            </section>
          )}

          <section className="details-section">

            {!usaPadraoCristo && (
              <p className="details-label">
                LOCALIZAÇÃO
              </p>
            )}

            <h2>
              {usaPadraoCristo ? 'Como chegar' : 'Onde fica?'}
            </h2>

            {usaPadraoCristo && (
              <div className="cristo-address">
                <Icon name="pushPinOutlined" size={18} />

                <p>
                  <strong>Ladeira Ely Juqueira — Monte Cristo</strong>
                </p>
              </div>
            )}

            {isPicoDosPontos && (
              <p className="details-location-text">
                Distrito de Conceição do Muqui, em Mimoso do Sul,
                no Espírito Santo.
              </p>
            )}

            {isFazendaUniao && (
              <p className="details-location-text">
                Antiga sede localizada no Assentamento União,
                em Mimoso do Sul, no Espírito Santo.
              </p>
            )}

            {isCristoRedentor ? (
              <div className="details-map">
                <iframe
                  title="Mapa do Cristo Redentor de Mimoso do Sul"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-41.3727127%2C-21.0776264%2C-41.3527127%2C-21.0576264&layer=mapnik&marker=-21.0676264%2C-41.3627127"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                <a
                  className="details-map-link"
                  href="https://www.openstreetmap.org/?mlat=-21.0676264&mlon=-41.3627127#map=16/-21.0676264/-41.3627127"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir localização no mapa
                </a>
              </div>
            ) : isPicoDosPontos ? (
              <div className="details-map">
                <iframe
                  title="Mapa do Pico dos Pontões"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-41.5708386%2C-20.9546950%2C-41.5408386%2C-20.9246950&layer=mapnik&marker=-20.9396950%2C-41.5558386"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                <a
                  className="details-map-link"
                  href="https://www.openstreetmap.org/?mlat=-20.9396950&mlon=-41.5558386#map=15/-20.9396950/-41.5558386"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir localização no mapa
                </a>
              </div>
            ) : isFazendaUniao ? (
              <div className="details-map">
                <iframe
                  title="Mapa da Fazenda União"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-41.4729892%2C-21.1486792%2C-41.4429892%2C-21.1186792&layer=mapnik&marker=-21.1336792%2C-41.4579892"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                <a
                  className="details-map-link"
                  href="https://www.openstreetmap.org/?mlat=-21.1336792&mlon=-41.4579892#map=16/-21.1336792/-41.4579892"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir localização no mapa
                </a>
              </div>
            ) : (
              <div className="map-placeholder">

                <Icon name="postalCode" size={28} />

                <p>
                  A localização será adicionada
                  ao mapa interativo.
                </p>

              </div>
            )}

          </section>

        </div>

      )}

    </section>
  )
}

export default Detalhes
