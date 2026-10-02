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
      /* `imagemDetalhe` é a foto grande que abre a página. O card
         pequeno da lista usa `imagem`. Mesmo par do Cristo
         (`cristo2.png` no card, `top.png` na página). */
      imagemDetalhe: '/fotos/cardgrande.png',
      fundo: '/fotos/fundopontos.png',
      localizacao: 'Conceição do Muqui',
      /* Endereço do "Como chegar". Cai no `localizacao` se faltar. */
      endereco: 'Conceição do Muqui',
      /* Pin no OpenStreetMap. `raio` abre a caixa do mapa em graus,
         nos dois eixos. */
      mapa: { lat: -20.939695, lon: -41.5558386, zoom: 15, raio: 0.015 },
      description:
        'O Pico dos Pontões, localizado no distrito de Conceição do Muqui, em Mimoso do Sul (ES), possui 1.438 metros de altitude, sendo o ponto mais alto do município.',
      /* `subtitulo` é o texto logo abaixo do título na página de
         detalhes. Fica separado do `description`, que é o que
         aparece no card da lista "ATRATIVOS TURÍSTICOS" — os dois
         podem ser diferentes sem um virar o outro. */
      subtitulo:
        'Localizado no distrito de Conceição do Muqui em Mimoso do Sul, os Pontões podem ser avistados de municípios vizinhos, como Alegre, Muqui e Guaçuí.',
      /* `sobre` são os parágrafos justificados da seção. O Cristo
         tem os dele hardcoded no `Detalhes.jsx`, porque é o
         primeiro a ser feito; os outros vêm por aqui. */
      sobre: [
        'A região integra a Rota do Pico dos Pontões, percurso de aproximadamente 36 km que atravessa diferentes distritos de Mimoso do Sul. Marcada por vales verdes, montanhas, tradição cafeeira e pequenas comunidades, a região preserva uma paisagem rural de ritmo tranquilo. A subida até o cume da formação menor dos Pontões exige preparo moderado e inclui trechos com cordas nos metros finais. A caminhada dura aproximadamente 4 horas no total e, ao alcançar o alto, proporciona uma ampla vista das montanhas e vales do entorno.',
        'Além do trekking, os Pontões atraem praticantes de motocross, escalada e parapente, além de atividades como o wingsuit, que ganhou destaque na região após os saltos realizados pelo atleta Fernando Brito em 2016. Entre plantações de café, comunidades rurais e grandes formações rochosas, o percurso reúne natureza, cultura e aventura, revelando diferentes paisagens do interior capixaba.',
      ],
      /* Infográfico no mesmo padrão do bloco de estatísticas do
         Cristo. Os três ícones vieram da fonte (allsvgicons) e
         estão no catálogo como `arctAlltrails`, `arctHikingBoot`
         e `arctLevels`. */
      stats: [
        { icon: 'arctAlltrails', value: '1.438 m', label: 'Altura' },
        { icon: 'arctHikingBoot', value: '4km aprox', label: 'Distância' },
        { icon: 'arctLevels', value: 'Difícil', label: 'Dificuldade' },
      ],
      /* Galeria: 1ª foto grande à esquerda, 2 e 3 menores ao lado.

         O item 1 é o mesmo arquivo do fundo da página
         (`fundo`, abaixo) — é a foto do pôr do sol. */
      galeria: ['/fotos/fundopontos.png', '/fotos/pontoes.jpeg', '/fotos/ponte.png'],
      /* "O QUE VEMOS PELO CAMINHO" — as 4 vagas, no mesmo formato
         do Cristo: `foto: null` deixa o espaço da imagem vazio até
         você escolher o arquivo, e a legenda já aparece.

         As legendas abaixo foram montadas com trechos do seu próprio
         texto do "Sobre o local". Troque pelas que preferir — é só
         editar a palavra depois de `descricao:`. */
      trilha: [
        { foto: null, descricao: 'Trecho com cordas na subida' },
        { foto: null, descricao: 'Vista das montanhas do alto' },
        { foto: null, descricao: 'Comunidades rurais e plantações de café' },
        { foto: null, descricao: 'Esportes de aventura' },
      ],
    },
    {
      title: 'Cachoeira da Paraíba',
      imagem: '/fotos/paraiba.png',
      /* `fundo` é o fundo no desktop. No celular a foto é outra,
         escolhida em `App.css` dentro de `@media (max-width: 700px)`
         — ver `.details-page-paraiba`. */
      fundo: '/fotos/funweb.png',
      localizacao: 'Localizada a 13 km de Mimoso',
      /* O desenho manda "COMO CHEGAR" seguido direto do mapa, sem
         linha de pin. `endereco: ''` remove o bloco — sem o campo
         ele cairia no `localizacao` e repetiria "13 km de Mimoso",
         que já está no infográfico. */
      endereco: '',
      subtitulo:
        'Situada em propriedade particular e com visitação liberada.',
      sobreTitulo: 'Sobre o local',
      sobre: [
        'A Cachoeira da Paraíba, também conhecida como Cachoeira dos Lençóis, está localizada na comunidade de Lençóis, em Mimoso do Sul. Com uma queda de aproximadamente 12 metros, suas águas integram o curso do Rio Muqui do Sul, em meio à vegetação preservada da região.',
        'O acesso é feito por uma trilha leve de cerca de 500 metros pela mata, que leva ao poço formado na base da queda, próprio para banho e contemplação.',
      ],
      /* Mesmo trio de ícones do Pico: `arctRuler` na altura (é o
         mesmo do Cristo), `arctHikingBoot` na distância e
         `arctLevels` na dificuldade. Assim as duas páginas ficam
         iguais na leitura. */
      stats: [
        { icon: 'arctRuler', value: '12 m', label: 'Altura' },
        { icon: 'arctHikingBoot', value: '13 km', label: 'Distância' },
        { icon: 'arctLevels', value: 'Fácil acesso', label: 'Dificuldade' },
      ],
      galeria: ['/fotos/paraiba.png'],
      /* "O QUE VEMOS PELO CAMINHO". Só a legenda do card 1 veio
         pronta; as outras três foram montadas com trechos do texto
         do "Sobre o local" e são palpite — troque o que quiser. */
      trilha: [
        { foto: null, descricao: 'entrada da trilha' },
        { foto: null, descricao: 'trilha na mata' },
        { foto: null, descricao: 'poço na base da queda' },
        { foto: null, descricao: 'banho e contemplação' },
      ],
      description:
        'Cachoeira com aproximadamente 12 metros de altura.',
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
                    subtitulo: atrativo.subtitulo,
                    sobre: atrativo.sobre,
                    sobreTitulo: atrativo.sobreTitulo,
                    stats: atrativo.stats,
                    endereco: atrativo.endereco,
                    mapa: atrativo.mapa,
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
