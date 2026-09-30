import Icon from '../components/Icon'

function Detalhes({
  icon,
  category,
  title,
  description,
  image,
  backgroundImage,
  onBack,
}) {
  const isNatureza = title === 'Natureza'
  const isCristoRedentor = title === 'Cristo Redentor'
  const isPicoDosPontos = title === 'Pico dos Pontões'
  const isFazendaUniao = title === 'Fazenda União'
  const cristoGallery = [
    '/fotos/cristo2.png',
    '/fotos/maybe2.png',
    '/fotos/cristo.jpeg',
  ]
  const cristoStats = [
    { icon: 'yahooJapanCalendar', value: '1956', label: 'Inauguração' },
    { icon: 'arctRuler', value: '28 m', label: 'Altura do monumento' },
    { icon: 'celeste', value: '128 m', label: 'Altitude do monte' },
  ]
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
      className={`details-page ${backgroundImage ? 'details-page-background' : ''} ${isCristoRedentor ? 'details-page-cristo' : ''}`}
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

          {isCristoRedentor ? (
            <>
              <h1 className="details-title">
                {title}
              </h1>

              <p className="details-subtitle">
                Erguido sobre um monte a 128 metros de altitude, o Cristo
                Redentor é considerado a primeira maravilha do município e
                proporciona uma vista panorâmica da cidade.
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
                  <strong> 1.938 metros de altitude</strong>, sendo o ponto
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

        {isCristoRedentor && (
          <ul className="cristo-stats">
            {cristoStats.map((stat) => (
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
              possui 1.938 metros de altura e se destaca pela
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

            {!isCristoRedentor && (
              <p className="details-label">
                {isPicoDosPontos
                  ? 'SOBRE A TRILHA'
                  : isFazendaUniao
                    ? 'SOBRE A FAZENDA'
                    : 'SOBRE'}
              </p>
            )}

            <h2>
              {isCristoRedentor
                ? 'Sobre o monumento'
                : isPicoDosPontos
                  ? 'Pico dos Pontões'
                  : isFazendaUniao
                    ? 'Fazenda União'
                    : 'Conheça este lugar'}
            </h2>

            {isCristoRedentor ? (
              <>
                <p>
                  Inaugurado em 1956, o Cristo Redentor de Mimoso do Sul está localizado na Ladeira Ely Juqueira, no bairro Monte Cristo. Com 28 metros de altura, o monumento se destaca em meio à paisagem serrana e proporciona uma linda vista das montanhas que cercam o município.
                </p>

                <p>
                  A experiência vai além do próprio monumento. Trilhas ao redor do Cristo levam a diferentes visões da cidade, entre eles a conhecida casinha “Hollywood”, situada no topo da montanha, de onde se tem uma vista panorâmica dos Pontões e da Serra das Torres. O local também é propício para contemplação, fotografia, contato com a natureza e observação de aves.
                </p>
              </>
            ) : isPicoDosPontos ? (
              <>
                <p>
                  A trilha tem início na comunidade de <strong>Alto dos
                  Pontões</strong> e apresenta trechos que exigem técnicas
                  de aderência. Por isso, <strong>não é recomendada para
                  iniciantes</strong>, especialmente devido ao trecho final,
                  que é mais exposto e inclui subidas com auxílio de cordas
                  e passagens próximas a ribanceiras.
                </p>

                <p>
                  Recomenda-se a contratação de um <strong>guia
                  especializado</strong>, embora a trilha seja bem
                  sinalizada.
                </p>
              </>
            ) : isFazendaUniao ? (
              <>
                <p>
                  A antiga sede da Fazenda União é uma construção da
                  segunda metade do século XIX, com características
                  arquitetônicas semelhantes às antigas fazendas do Vale
                  do Paraíba fluminense e de Minas Gerais. Apesar do
                  estilo colonial, a propriedade começou a ser ocupada
                  apenas na década de 1840, durante o período do Império.
                </p>

                <p>
                  No início do século XX, com a crise do café, a fazenda
                  passou também a cultivar cana-de-açúcar. Em 1915, já
                  possuía três moendas, um sistema movido por roda
                  hidráulica e um alambique com capacidade para produzir
                  cerca de 480 litros de aguardente por dia. A atividade
                  deu origem à Usina União, que entre as décadas de 1940
                  e 1950 se tornou uma importante produtora de açúcar e
                  aguardente, destacando-se pela fabricação da cachaça
                  Bocãina.
                </p>

                <p>
                  A propriedade foi abandonada na década de 1970 e, com
                  cerca de 564 hectares, desapropriada em 1998, passando a
                  integrar o Assentamento União.
                </p>
              </>
            ) : (
              <>
                <p>
                  Aqui você poderá adicionar as informações,
                  histórias, curiosidades e detalhes sobre
                  este lugar ou tema.
                </p>

                <p>
                  Este espaço foi preparado para receber
                  o conteúdo que fará parte do seu guia
                  de Mimoso do Sul.
                </p>
              </>
            )}

          </section>

          <section className="details-section">

            {!isCristoRedentor && (
              <p className="details-label">
                {isPicoDosPontos || isFazendaUniao
                  ? 'GALERIA'
                  : 'FOTOS'}
              </p>
            )}

            <h2>
              {isCristoRedentor
                ? 'Galeria'
                : isPicoDosPontos
                  ? 'Imagens do Pico'
                  : isFazendaUniao
                    ? 'Imagens da Fazenda União'
                    : 'Galeria'}
            </h2>

            {isCristoRedentor && (
              <div className="cristo-gallery">
                {cristoGallery.map((photo, index) => (
                  <div
                    className="cristo-gallery-item"
                    key={photo}
                  >
                    <img
                      src={photo}
                      alt={`Cristo Redentor — foto ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            )}

            {!isCristoRedentor && (
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

          <section className="details-section">

            {!isCristoRedentor && (
              <p className="details-label">
                LOCALIZAÇÃO
              </p>
            )}

            <h2>
              {isCristoRedentor ? 'Como chegar' : 'Onde fica?'}
            </h2>

            {isCristoRedentor && (
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