import Icon from '../components/Icon'

function Monast() {
  const montanhas = [
    {
      nome: 'Pico do Farol',
      imagem: '/fotos/farol.jpeg',
      localizacao: 'Comunidade do Farol',
      altitude: '930 m',
      descricao:
        'É possível observá-lo de perto durante uma caminhada pela estrada de acesso à comunidade homônima.',
      trilha:
        'O acesso é feito por trilha a partir da comunidade do Farol. O topo só pode ser alcançado por escalada.',
    },
    {
      nome: 'Pedra Peito de Moça',
      imagem: '/fotos/peito.jpeg',
      localizacao: 'Comunidade do Farol',
      altitude: '990 m',
      descricao:
        'Seus pontões geminados são amplamente conhecidos no local.',
      trilha:
        'O acesso se dá a partir da trilha para a Pedra Estrela Dalva.',
    },
    {
      nome: "Pedra Estrela D'Alva",
      imagem: '/fotos/estrela.jpeg',
      localizacao: 'Distrito de São José das Torres',
      altitude: '1.190 m',
      descricao:
        'Mirante natural com vista para a Serra das Torres.',
      trilha:
        'Acesso por trilha a partir da comunidade do Farol.',
    },
    {
      nome: 'Pedra de Santa Maria',
      imagem: '/fotos/santamaria.jpg',
      localizacao: 'Localidade de Candura, município de Muqui',
      altitude: '1.243 m',
      descricao:
        'É o ponto mais alto acessível por trilha dentro do MONAST.',
      trilha:
        'A trilha é de difícil acesso e pouco sinalizada, com 2,25 km (ida e volta) e aclive de 597 metros.',
    },
    {
      nome: 'Pedra do Vinagre',
      imagem: '/fotos/vinagre.jpeg',
      localizacao:
        'Perto da aldeia de Santa Rosa de Lima e da localidade de Santa Joana.',
      altitude: '871 m',
      descricao:
        'Conquistada por escaladores do CEB (RJ) em 2004, a pedra foi batizada pelos conquistadores de Pedra do Vinagre.',
      trilha:
        'O acesso é possível somente por escalada.',
    },
    {
      nome: 'Pedra da Linda Aurora',
      imagem: '/fotos/aurora.jpeg',
      localizacao: 'Comunidade de Linda Aurora',
      altitude: '1.110 m',
      descricao:
        'É o ponto mais alto de Atílio Vivacqua.',
      trilha:
        'Pode ser alcançada por trilha a pé a partir da comunidade de Linda Aurora, com acesso pela ES-289.',
    },
    {
      nome: 'Pedra da Caveira',
      imagem: '/fotos/caveira.jpeg',
      localizacao: 'Fazenda Oriente, no vale do Moitão do Sul',
      altitude: '545 m',
      descricao:
        'Localizada no município de Atílio Vivacqua.',
      trilha:
        'A caverna, localizada no alto da rocha, pode ser acessada por escalada ou trilha.',
    },
    {
      nome: 'Pedra do Moitão',
      imagem: '/fotos/moitao.jpeg',
      localizacao: 'Cidade de Atílio Vivacqua',
      altitude: 'Cerca de 700 m',
      descricao:
        'Estrada de terra de 4 km até perto do cume.',
      trilha:
        'O acesso é feito por uma estrada de terra de 4 km até perto do cume.',
    },
  ]

  return (
    <section className="monast-page">

      {/* =========================
          CABEÇALHO
      ========================= */}

      <div className="monast-header">

        <p className="monast-label">
          MONAST
        </p>

        <h1>
          Monumento Natural
          <span>Serra das Torres</span>
        </h1>

        <p className="monast-intro">
          Um dos grandes patrimônios naturais de Mimoso do Sul,
          formado por montanhas, florestas, vales e imponentes
          formações rochosas da Serra das Torres.
        </p>

      </div>

      {/* =========================
          SOBRE
      ========================= */}

      <div className="monast-section">

        <p className="monast-label">
          SOBRE O MONAST
        </p>

        <h2>
          Um território de grande importância natural
        </h2>

        <p>
          Criado em 2010, o Monumento Natural Estadual
          Serra das Torres é uma Unidade de Conservação
          de Proteção Integral. Seu objetivo é preservar
          locais naturais raros, singulares ou de grande
          beleza cênica.
        </p>

        <p>
          A paisagem é marcada por maciços rochosos,
          escarpas, vales profundos e formações florestais
          que compõem uma das áreas naturais mais importantes
          do sul do Espírito Santo.
        </p>

      </div>

      {/* =========================
          ESTATÍSTICAS
      ========================= */}

      <div className="monast-stats">

        <div className="monast-stat">

          <strong>
            10.458,90
          </strong>

          <span>
            hectares
          </span>

        </div>

        <div className="monast-stat">

          <strong>
            2010
          </strong>

          <span>
            ano de criação
          </span>

        </div>

        <div className="monast-stat">

          <strong>
            Mata Atlântica
          </strong>

          <span>
            bioma
          </span>

        </div>

      </div>

      {/* =========================
          MONTANHAS
      ========================= */}

      <div className="monast-section monast-mountains">

        <p className="monast-label">
          FORMAÇÕES DA SERRA DAS TORRES
        </p>

        <h2>
          Montanhas e formações rochosas
        </h2>

        <p className="monast-mountains-intro">
          Conheça algumas das formações que compõem a
          paisagem natural do MONAST.
        </p>

        <div className="monast-mountains-list">

          {montanhas.map((montanha) => (

            <article
              className="monast-mountain"
              key={montanha.nome}
            >

              {/* FOTO */}

              <div className="monast-mountain-image">

                <img
                  src={montanha.imagem}
                  alt={`${montanha.nome} — ${montanha.localizacao}`}
                  loading="lazy"
                  decoding="async"
                />

              </div>

              {/* TEXTO */}

              <div className="monast-mountain-info">

                <h3>
                  {montanha.nome}
                </h3>

                <p>
                  {montanha.descricao}
                </p>

                <div className="monast-mountain-meta">
                  <span>
                    <Icon name="postalCode" size={16} /> {montanha.localizacao}
                  </span>

                  <span>
                    <Icon name="mountain" size={16} /> {montanha.altitude}
                  </span>
                </div>

                <p className="monast-mountain-trail">
                  <strong>Trilha:</strong> {montanha.trilha}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

      {/* =========================
          BIODIVERSIDADE
      ========================= */}

      <div className="monast-section">

        <p className="monast-label">
          BIODIVERSIDADE
        </p>

        <h2>
          Uma floresta cheia de vida
        </h2>

        <p>
          O MONAST abriga diferentes formações de Mata
          Atlântica e uma grande diversidade de espécies.
          O monitoramento realizado pelo IEMA registrou
          centenas de espécies de fauna no território
          da unidade.
        </p>

        <div className="monast-nature-grid">

          <div>

            <span>
              <Icon name="tree" size={32} />
            </span>

            <h3>
              Florestas
            </h3>

            <p>
              Remanescentes de Mata Atlântica
              entre montanhas e vales.
            </p>

          </div>

          <div>

            <span>
              <Icon name="bird" size={32} />
            </span>

            <h3>
              Fauna
            </h3>

            <p>
              Diversas espécies de aves, mamíferos,
              répteis e anfíbios.
            </p>

          </div>

          <div>

            <span>
              <Icon name="water" size={32} />
            </span>

            <h3>
              Recursos hídricos
            </h3>

            <p>
              Nascentes, córregos e cursos d'água
              que sustentam a biodiversidade local.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Monast