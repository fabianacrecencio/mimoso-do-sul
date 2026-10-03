# Checkpoint — Mimoso do Sul

Data: 01/10/2026 — fim da sessão 3. Tudo publicado e verificado.

**Estado final desta sessão:** o **Pico dos Pontões** foi preenchido por
completo — subtítulo, texto "Sobre o local", infográfico, bloco "O QUE VEMOS
PELO CAMINHO" com 4 vagas e galeria própria. O próximo atrativo da fila é a
**Cachoeira do Paraíba**. O Cristo não deve ser tocado.

## Estado atual

Aplicação React/Vite com navegação por `useState` (sem React Router), cards clicáveis, abas e publicação Cloudflare Pages.

Abas principais:

- Descubra / Mimoso do Sul
- Natureza
- Patrimônios
- MONAST
- Vales do Café
- demais destinos em modo "Em breve"

## Fundos principais (desktop)

- Tela Descubra: `/fotos/abertura.jpeg` — com `background-size: cover` para manter o Cristo Redentor inteiro visível
- Splash de abertura: `/fotos/abertura0.jpeg` (mantido diferente de propósito, para a abertura não ficar idêntica à página)
- Natureza: `/fotos/fund0.png`
- MONAST: `/fotos/monast3.jpeg`
- Patrimônios: `/fotos/uniao.jpeg`

No celular, Natureza e MONAST trocam para recortes verticais dedicados. Ver
**Fotos de fundo** mais abaixo.

## Página inicial (Descubra)

### Bloco tipográfico

Estrutura em `src/pages/Descubra.jsx`, estilizada em `src/App.css` no bloco
`DESCOBRA - TIPOGRAFIA DO HERO`:

```text
────────  DESCUBRA  ────────

MIMOSO DO SUL

entre montanhas, rios, cachoeiras e mirantes.
```

| Elemento | Fonte | Peso | Tamanho | Espaçamento |
|---|---|---|---|---|
| DESCUBRA | Poppins | 300 (Light) | `clamp(11px, 1.1vw, 13px)` | `clamp(3.4px, 0.34vw, 4.6px)` |
| MIMOSO DO SUL | Cormorant Garamond | 500 (Medium) | `clamp(60px, 6.8vw, 95px)` | `clamp(1px, 0.28vw, 3.4px)` |
| Crédito "Por Fabiana Silva" | Poppins | 200 (ExtraLight) | `clamp(11px, 0.92vw, 13px)` | `0.3px` |

O subtítulo "entre montanhas, rios, cachoeiras e mirantes." foi **removido** da
página inicial e substituído pelo crédito "Por Fabiana Silva", alinhado à direita
com a borda direita exata do título. No celular o crédito fica em itálico.

Título e crédito vivem em `.discover-title-block`, com `width: max-content`, para
que a borda direita do crédito case com a do título independentemente do tamanho
da tela.

**Celular (≤767px) na página inicial:**
- Título **centralizado e em uma linha só** em toda largura. O
  `<br className="discover-title-break">` do JSX está `display: none` no desktop
  e também no celular — quem encolhe é a fonte, não a quebra. Mantido no JSX
  só como ponto de retorno caso o usuário queira as duas linhas de novo.
  `white-space: nowrap` vem da regra base, então se a fonte não couber o
  título estoura em vez de quebrar no lugar errado.
- O `.discover-title-block` passa a `width: 100%`, com `DESCUBRA` e
  `EXPLORE MIMOSO` mantidos centralizados acima e abaixo.
- Título em `clamp(30px, 9.4vw, 64px)` na faixa 375–767px, e `8.9vw` abaixo
  de 375px. "MIMOSO DO SUL" tem 8,1 em de largura somando os glifos; com a
  medição, sobra 27px em 375px, 31px em 390px, 40px em 430px e 44px em 320px.
  Nenhuma faixa estoura.
- Crédito em itálico, 13px (11.5px abaixo de 375px), mantido à direita
- Cards compactos em grid de 2 colunas, conforme o mockup:
  ícone à esquerda e título, descrição e seta empilhados à direita.

  O `grid-row: span 3` no ícone é o que faz ele ocupar as três linhas
  (título, descrição, seta) enquanto os textos se empilham na coluna 2 — sem
  precisar agrupar os três em um `<div>` no JSX.

  **Breakpoints da página inicial:**

  | Faixa | Padding lateral | Título | Card | Ícone | `h4` | `p` |
  |---|---|---|---|---|---|---|
  | 320–374px | 20px | 8.9vw | 12px | 38px (svg 22) | 15.5px | 11.5px |
  | 375–430px | 28px | `clamp(30px, 9.4vw, 64px)` | 14px | 44px (svg 26) | 17px | 12.5px |
  | 431–767px | 26px | idem | 14px | 44px (svg 26) | 17px | 12.5px |
  | >768px | 20px | `clamp(60px, 6.8vw, 95px)` | 18/16 | 58px (svg 54) | 24px | 12.5px |

  O `padding-bottom` de 120px existe porque a barra inferior ocupa 79px do
  rodapé no celular (10px de folga + 69px de altura) e 102px no desktop
  (20 + 82), medidos. 120px libera o último card nos dois casos.

Todos em off-white `#f7f3ea` com `var(--olive-shadow)`, alinhamento central.

Variáveis no `:root`:

```css
--off-white: #f7f3ea;
--olive-shadow:
  0 4px 24px rgba(74, 96, 46, 0.45), 0 1px 3px rgba(26, 34, 16, 0.32);
```

O subtítulo usa `margin: clamp(6px, 0.9vh, 12px)` — colado no título (6px medidos).

### EXPLORE MIMOSO

Reformatado para discreto, com linhas laterais finas:

- Poppins 500, `clamp(9.5px, 1.05vw, 11.5px)`, letter-spacing `2.4px`
- Linhas de `clamp(24px, 3.2vw, 40px)` × 1px, `rgba(214, 231, 193, 0.5)`
- off-white + sombra oliva

**Importante:** as regras ficam sob o escopo `.discover-page .discover-section h3`, não na
regra base. Natureza e Patrim reaproveitam a classe `discover-section`; sem o escopo os
títulos "ATRATIVOS TURÍSTICOS" e "PATRIMÔNIOS HISTÓRICOS" encolheriam junto.

### Cards principais

Três cards: Pontos Turísticos, Patrimônios e Cultura.

Ícones (todos 54px, centralizados em caixa de 58×58px):

| Card | `Icon name` | Origem |
|---|---|---|
| Pontos Turísticos | `locationPrivacy` | arcticons:locationprivacy |
| Patrimônios | `classicalBuilding` | arcticons:emoji-classical-building |
| Cultura | `articleReader` | arcticons:article-reader |

Medidas e transparência (regras em `DESCOBRA - CARDS PRINCIPAIS`):

**A transparência é UMA REGRA SÓ, sem media query.** Antes desktop e celular
tinham regras separadas, acabaram divergindo (0,08 num lado, perceived no
outro) e foi preciso caçar qual estava valendo. Com uma regra só a
divergência é impossível. A usuária pediu explicitamente "o mesmo padrão
tanto para celular quanto para web".

| Propriedade | Valor |
|---|---|
| Altura | 230px (sem `min-height` fixo) |
| Padding | `18px 16px` |
| Fundo do card | `rgba(0, 0, 0, 0.04)` + `backdrop-filter: blur(4px)` |
| Card no hover | `rgba(0, 0, 0, 0.09)` |
| Borda | `rgba(255, 255, 255, 0.24)` |
| Caixa do ícone | 58×58px, raio 16px, fundo `rgba(0, 0, 0, 0.03)` |
| `h4` | 19px |
| `p` | 12.5px |
| Seta | 17px, `margin-top: 12px` |

Sombras de texto mantidas nos cards para legibilidade sobre o fundo translúcido:
`h4` → `0 2px 10px rgba(20, 30, 12, 0.5)`, `p` → `0 1px 8px rgba(20, 30, 12, 0.55)`.
São elas, e não a opacidade do card, que garantem a leitura — por isso dá
para baixar o preto até 2,5% sem perder legibilidade.

### Posição do cabeçalho em relação à cabeça do Cristo

O bloco DESCUBRA / MIMOSO DO SUL / crédito foi descido para encostar na
cabeça da estátua, sem cobrir:

| | Antes | Agora |
|---|---|---|
| `padding-top` desktop | 94px | **124px** |
| `padding-top` ≤767px | 72px | **102px** |
| `padding-top` ≤374px | 66px | 66px (intacto) |

No celular o crédito terminava a 189px e a cabeça ficava a 241 — 52px de
vão. Agora o crédito termina a 219 e sobram ~22px.

**Isso não aumenta a altura da página.** A seção de baixo tem
`margin-top: auto`, e o auto-margin absorve exatamente o que o
`padding-top` ganhou. Por isso dá para descer o cabeçalho à vontade sem
quebrar o "cabe sem rolar".

**Ressalva honesta:** a posição da cabeça na tela varia com a proporção da
janela no desktop, porque `cover` trava a vertical quando a janela é larga e
baixa (aí não sobra folga e o `background-position-y` é no-op) e a libera
quando a janela é alta. Os 124px do desktop foram calibrados por conta, sem
medição — **é o número menos confiável do projeto.** No celular o
`background-size: auto 110%` dá controle real, então 102px é sólido.

**Cuidado com as media queries sobrepostas:** a página inicial tem regras em
≤900px, ≤767px, ≤600px, ≤430px e ≤374px, e a ordem no arquivo decide. A de
≤767px é a que governa quase tudo no celular porque vem **depois** das
menores. Alterar valor só na ≤600px não surte efeito nenhum.

### Altura da página inicial no celular — cabe sem rolar

Orçamento medido a 390px de largura (1 coluna): o conteúdo dava **815px**
contra **765px disponíveis** (844 de tela menos 79 da barra inferior) —
50px de excesso. As reduções somam 106px:

| O que | Antes | Depois |
|---|---|---|
| `margin-bottom` do `.discover-header` | 32px | **20px** |
| `padding-top` da `.discover-section` | 40px | **20px** |
| `margin-bottom` do EXPLORE MIMOSO | 30px | **18px** |
| `padding` do card | 14px | **12px** (10px abaixo de 375px) |
| `padding-bottom` | 120px | **92px** |

O `padding-bottom` de 92px continua acima dos 79px da barra inferior.
Medido depois de tudo: página com 830px, `scrollHeight` igual a
`clientHeight` — **sem rolagem**, e o último card termina a 738px, com a
barra começando a 751px.

**Limite conhecido:** num aparelho com menos de ~800px de altura (iPhone SE,
375×667) ainda vai rolar, porque o conteúdo precisa de ~800px. Numa faixa
tão baixa a única saída seria cortar conteúdo, não espaçamento.

**Nota sobre `backdrop-filter`:** o minificador do Vite remove a versão sem
prefixo e deixa só `-webkit-backdrop-filter`. Isso vale para o arquivo todo
(10 ocorrências, nenhuma sem prefixo) e não quebra nada — o Chrome aceita o
alias. Mas `getComputedStyle(el).backdropFilter` devolve `"none"` e
`webkitBackdropFilter` vem `undefined`, então **esse filtro não pode ser
verificado pelo CSSOM**. A única verificação confiável é visual, pela captura
de tela.

No celular os cards mudam para o grid compacto de 2 colunas descrito acima
(ícone 44px, `h4` 17px, `p` 12.5px, padding 14px). As medidas antigas de
ícone 52px / `h4` 18px / padding `16px 14px` numa media query ≤600px ainda
existem no CSS, mas são sobrepostas pela media query ≤767px, que vem depois.

Os campos `icon:` dos `onOpen` (`mountains`, `landmark`, `masks`) NÃO foram tocados —
alimentam o cabeçalho da página de detalhes, não o card.

### Layout e posicionamento

- `.discover-page`: flex column, `padding: 94px 20px 120px`
- `.discover-page .discover-section`: `margin-top: auto` + `padding-top: 40px`
  → empurra os cards para 18px da barra inferior do menu
- `.header-clean`: `justify-content: flex-end` → botão `×` no canto direito
- Logo "Mimoso do Sul" do cabeçalho é removido **apenas na aba Descubra**, via
  `activePage !== 'Descubra'`. As demais abas mantêm o logo.

### Parallax

- Offset: `-scrollTop * 0.14` limitado a ±70px no desktop; `-scrollTop * 0.08`
  limitado a ±40px no celular (≤700px)
- Aplicado em `background-position: center calc(50% + var(--parallax-offset))`
- **Ativo no celular.** Só é desligado quando `prefers-reduced-motion: reduce`
- O `useEffect` do parallax tem `intro` no array de dependências. Sem isso, o effect roda
  enquanto a intro de 3,5s ainda está montada, não acha `.discover-page` e nunca registra
  o listener de scroll.

## Menu inferior

Todos os ícones são arcticons com `viewBox 0 0 48 48`, 22px, inline no componente
(sem dependência externa).

| Aba | `Icon name` | Origem |
|---|---|---|
| Mimoso do Sul | `evergreenTree` | arcticons:emoji-evergreen-tree |
| MONAST | `nothingButWallpapers` | arcticons:nothing-but-wallpapers |
| Sul Capixaba | `openMaps` | arcticons:openmaps |
| Galeria | `dsphoto` | arcticons:dsphoto |
| Trilha | `cityTransit` | arcticons:city-transit |

**A aba "História" foi removida do menu** em 02/10/2026 — a usuária circulara ela.
São 5 abas agora. O card "Cultura" da página inicial virou "**História**"
(o `title` e o `<h4>` em `Descubra.jsx`), então não sobrou rótulo "Cultura"
nenhum no código.

O ícone `googleDocsAlt` continua no catálogo do `Icon.jsx`, sem uso em tela.

## O botão "×" acompanha o rótulo do cabeçalho

O `.header` é `position: fixed`, e o "×" fica agora **na mesma linha do
rótulo** ("DESCUBRA", "MONAST"…) de cada aba. Medido em produção a 1446px:

| Aba | Rótulo | Centro | Centro do "×" | Diferença |
|---|---|---|---|---|
| Descubra | DESCUBRA | 131 | 131 | **0** |
| Pontos Turísticos | DESCUBRA | 72 | 72 | **0** |
| Patrimônios | DESCUBRA | 98 | 98 | **0** |
| MONAST | MONAST | 134 | 134 | **0** |

**A escolha foi do usuário e é contra-intuitiva, então vale reter:** ele
**optou por descer o "×"**, e não por subir o conteúdo. Subir o conteúdo
teria tirado o cabeçalho de cima da cabeça do Cristo na página inicial, que
é um detalhe já aprovado e calibrado (o `padding-top: 124px` é o número mais
frágil do projeto). Por isso **nada da página mudou de posição**.

**Como funciona.** Duas classes novas, nenhuma muda o visual:

| Classe | O que marca |
|---|---|
| `.titulo-pagina` | o título grande de cada página |
| `.rotulo-cabecalho` | o rótulo pequeno acima do título |

Um `useEffect` em `App.jsx` mede `.rotulo-cabecalho` (com fallback para
`.titulo-pagina`) e escreve `--titulo-centro` no `:root`. O `.header` usa
`padding-top: calc(var(--titulo-centro, 43px) - 23px)`, sendo 23px metade da
altura do botão — aí o botão fica **centrado** na linha, não alinhado pelo
topo.

**Duas armadilhas que custaram tempo aqui:**

1. **Não dá para buscar por `h1`.** O markup é inconsistente: o título da
   página inicial e o dos Vales do Café são `<h2>`, os outros são `<h1>`.
   A primeira versão da medição procurava `h1` e não achava **nada** na
   página inicial — o "×" ficava parado no lugar antigo sem erro nenhum.
2. **O "×" não existe nas páginas de detalhe.** Quando `selectedItem` está
   preenchido, o `App.jsx` retorna o `<Detalhes>` sem o `<header>` — lá é
   "← Voltar". Ou seja, "todas as páginas" para o "×" significa as abas.

O `:root` tem `--titulo-centro: 43px` como reserva: se a medição falhar, o
botão volta ao canto superior em vez de sumir.

## Componente Icon

`src/components/Icon.jsx` guarda todo o catálogo. Duas famílias:

- `lineIcons` — viewBox 24×24, `stroke-width: 1.8`
- `isometricIcons` — viewBox 64×64, preenchidos, `stroke-width: 1.4`

Icons arcticons usam viewBox 48×48 e `stroke-width: 1.6`, controlados pela lista
`is48Icon` dentro do componente. `postalCode` é caso especial (viewBox 50×50,
preenchido, sem stroke) e é usado em todos os pins de localização.

Ícones não usados em tela foram mantidos no catálogo a pedido do usuário
(`terraria`, `nordlockerCloud`, `articleReader` como título, `opentopomap`,
`novelWorld`, `readera`, `classicalBuilding`). Podem ser removidos depois, se
o usuário quiser.

**Ícones novos da sessão 01/10**, todos 48×48 vindos de `i.allsvgicons.com/r/`
e registrados também na lista `is48Icon` (sem isso o `viewBox` cai para 24×24
e o desenho fica minúsculo):

| `Icon name` | Origem | Onde |
|---|---|---|
| `arctSummit` | arcticons:summit | dificuldade do Pico (hoje substituído) |
| `arctAlltrails` | arcticons:alltrails | altura do Pico |
| `arctHikingBoot` | arcticons:emoji-hiking-boot | distância do Pico |
| `arctLevels` | arcticons:levelsfyi | dificuldade do Pico |

Muitos nomes deduzidos por palpite retornam 404 na fonte. Os que entraram no
catálogo foram testados um a um antes, e todos vieram com o `viewBox`
confirmado em 48×48.

## Natureza — atrativos

Cards clicáveis com foto, localização e detalhes:

- Cristo Redentor
- Pico dos Pontões
- Cachoeira do Paraíba
- Usina Aparecida
- Mirante Santa Terezinha
- Mirante da Água Limpa

### Cristo Redentor

- Card: `/fotos/cristo2.png`
- Imagem principal nos detalhes: `/fotos/top.png`
- Fundo dos detalhes (desktop): `/fotos/ok.png`
- Fundo dos detalhes (celular): `/fotos/cristocel.jpg`
- Mapa com pin do Cristo.
- Textos de apresentação, história, trilha de acesso e localização.

**Dados corrigidos em 02/10/2026 pela usuária** — os antigos eram 1956 e 28 m:

| | Antes | Agora |
|---|---|---|
| Inauguração | 1956 | **1982** (11 de julho) |
| Altura do monumento | 28 m | **30 m** |
| Altitude do monte | 128 m | 128 m (não mudou) |

A obra começou em 1980, a pedido de um juiz da cidade, feita pelo escultor
Antônio Francisco Moreira — a última estátua dele. É a segunda estátua mais
alta do ES. O `128 m` da altitude do monte continua no texto e no infográfico,
e não conflita com o texto novo.

**O `h2` da seção do Cristo é "Sobre o local"**, e vem do campo
`sobreTitulo` no `Natureza.jsx` — antes era 'Sobre o monumento' hardcoded no
`Detalhes.jsx`.

**Medidas e decisões desta retafinalização (29/09):**

| Elemento | Valor | Motivo |
|---|---|---|
| Foto principal | `max-width: 760px`, centralizada, `aspect-ratio: 1.95/1` | 760px casa com a galeria; a largura deixou de seguir o texto para o bloco parar de dominar a dobra |
| Título | `clamp(30px, 5.1vw, 70px)` no desktop, `clamp(26px, 6.4vw, 40px)` ≤800px | 64px → 51px medido |
| Galeria | `max-width: 760px` igual à foto principal | as duas compartilham as bordas |
| Galeria item 1 | `aspect-ratio: 1.8/1` | era 2,74:1, que cortava a base da estátua (ver abaixo) |
| Galeria itens 2 e 3 | `aspect-ratio: 1.35/1` | era 1,68:1, retangular demais |
| Galeria item 1 `object-position` | `center 58%` | a estátua ocupa 63%–76% da altura da foto; o centro não é o enquadramento certo |
| Estatísticas | `margin-top: 14px` ≤700px, 26px no desktop | o vão visual era 52px (30 de margem + ~22 do `line-height` 1.7) e passou a 36px |
| Endereço → mapa | `margin-bottom: 8px` | era 24px, o único vão entre os dois |
| "Como chegar" → endereço | `10px` via `:has(> .cristo-address)` | os outros `h2` mantêm 26px |
| Texto do monumento | `text-align: justify` + `text-align-last: center` | sem o `last`, a última linha ficava esticada |
| Véu do fundo (celular) | `rgba(14,22,8,.32) → rgba(10,16,6,.52)` | verde-oliva, não preto: a foto é muito azul e o preto brigava com o texto |
| Sombra do texto | `--olive-shadow` redefinida na aba | 14 elementos já consomem a variável; um seletor paralelo teria de repetir todos |

**A galeria e o corte do Cristo:** as três fotos são quase quadradas (0,94 /
1,02 / 0,97). Num card de 2,74:1 a janela visível do `cover` ia de 33% a 67%
da altura da imagem, e a estátua ocupa de 63% a 76% — a base ficava cortada.
Em 1,8:1 a janela vai de 21% a 78% e ela aparece inteira. Por isso a altura da
galeria vem de `aspect-ratio` por item, e não de uma altura fixa: com altura
fixa, mexer na largura quebraria o enquadramento.

**Ícones das estatísticas:**

| Rótulo | `Icon name` | Origem |
|---|---|---|
| Inauguração | `yahooJapanCalendar` | arcticons:yahoo-japan-calendar |
| Altura do monumento | `arctRuler` | arcticons:ruler |
| Altitude do monte | `celeste` | arcticons:celeste |

Dois dos três já eram exatamente esses ícones no catálogo, só que com outros
nomes — `arctRuler` e `celeste`. Só o calendário era um desenho 24×24 feito à
mão e foi substituído pelo SVG real de 48×48.

### Pico dos Pontões

Primeiro atrativo a ser preenchido depois do Cristo. Tudo em `Natureza.jsx`:

| Campo | Valor |
|---|---|
| `imagem` (card da lista) | `/fotos/cardpico.png` |
| `imagemDetalhe` (foto grande) | `/fotos/cardgrande.png` |
| `fundo` | `/fotos/fundopontos.png` |
| `galeria` | `fundopontos.png`, `pontoes.jpeg`, `ponte.png` |
| `stats` | 1.438 m / 4km aprox / Difícil |
| `trilha` | 4 vagas, todas com `foto: null` |

**O par `imagem` / `imagemDetalhe` é o padrão** — é o mesmo que o Cristo usa
(`cristo2.png` no card, `top.png` na página). `Detalhes.jsx` consome com
`imagemDetalhe || imagem`. Serve para quando a foto do card e a da página
precisarem ser diferentes; se forem a mesma, basta deixar `imagemDetalhe` fora.

**`subtitulo` e `sobre` são campos novos** (`subtitulo` fica separado do
`description` porque este último é o texto do card na lista). Passam por
`onOpen` → `App.jsx` → `Detalhes.jsx`. Se acrescentar campo, **acrescentar nos
três lugares**.

**`stats` alimenta o mesmo bloco do Cristo** (`.cristo-stats`), que deixou de
ser exclusivo dele: agora sai quando `statsDoCard.length > 0`. O Cristo tem os
deles no array local `cristoStats`; os outros trazem pelo prop.

**O `sobre` do Cristo foi para o array `cristoSobre`.** Antes os parágrafos dele
estavam escritos direto dentro do ramo `usaPadraoCristo` no JSX — e como esse
ramo inclui todos os atrativos de Natureza, o Pico abria **com o texto do
Cristo**. Build e lint limpos; só a tela pegou. Agora todo texto vive em dados.

**A altitude foi corrigida para 1.438 m** nos três lugares onde aparecia
(`description`, e dois blocos de código morto). Antes o infográfico dizia
1.438 e o resto do site dizia 1.938.

**O `h2` da seção "Sobre" é "Sobre o local"**, escrito em caixa baixa no
código porque o CSS aplica `text-transform: uppercase`. O rótulo
`SOBRE A TRILHA` foi removido — repetia o `h2` logo abaixo.

**A galeria tem escopo próprio: `.details-page-pico`.** A regra do
`object-position` dos itens 2 e 3 é dessa classe, e não geral, porque
`.cristo-gallery` é compartilhada com o Cristo — mexer na regra comum
mudaria a galeria aprovada dele junto.

| Item | Foto | `object-position` | Por quê |
|---|---|---|---|
| 1 | `fundopontos.png` 1719×915 | `center 58%` (regra geral) | não corta nada |
| 2 | `pontoes.jpeg` 569×490 | `center top` | o centro cortava o topo; perde só 14% da altura, tudo do rodão |
| 3 | `ponte.png` 938×1122 | **`center 38%`** | ver abaixo |

**Como o 38% foi calculado** (medi os pixels da foto com `System.Drawing`, não
estimando): brilho médio por faixa de altura — 0–20% = 168/156 (céu com
nuvens), 20–30% = 127 (rocha aparecendo), 30–80% = 55–84 (montanha e mata),
80–100% = 110/103 (cerca e tabuado da ponte). O topo da agulha de pedra está
a **14,5%** da altura.

O card de `ponte.png` é 1,35:1 contra uma foto de 0,84:1, então o `cover`
só mostra **61,8%** da altura dela. Começar em 14,5% fecha em 76,3% — cabe a
agulha, a rocha, a mata e o vale, com uma faixa fina de céu.
`center 38%` é o número que faz a janela começar exatamente na agulha.
`center top` (o que estava antes) mostrava quase só nuvens.

**Alternativa guardada:** `center bottom` no item 3 mostra o tabuado da ponte
inteiro com **zero céu**, e resolve uma repetição que ficou visível — com a
montanha no item 3, os cards 2 e 3 mostram a mesma agulha, lado a lado. É uma
palavra no CSS. **Decisão da usuária, ainda não tomada.**

## Patrimônios

Cards clicáveis:

- Sítio Histórico de São Pedro — `patrimonio.jpeg`
- Fazenda Independência — `independencia.jpeg`
- Fazenda União — `unia0.jpeg`
- Fazenda Maravilha — `maravilha.jpeg`
- Igreja Santa Cruz — `cruz.jpeg`

### Fazenda União

- Card: `/fotos/unia0.jpeg`
- Imagem principal: `/fotos/uniao.jpeg`
- Fundo dos detalhes: `/fotos/uniao.jpeg`
- Galeria: `unia0.jpeg`, `uniao.jpeg`, `usina.jpeg`
- Texto histórico completo sobre a fazenda, Usina União, cana, açúcar, aguardente e Assentamento União.
- Mapa com pin da Fazenda União.

### Galeria do Cristo — ordem e proporções

Ordem atual dos arquivos: `cristo2.png` (a roxa com relâmpago, no topo),
`maybe2.png` e `cristo.jpeg`. A segunda já passou por `cristo5.jpeg`,
`card2.png`, `card22.png`, `maybe.png`, `essa.png` e `chega.jpeg` — o nome
muda com frequência, então **confirme no array `cristoGallery` do
`Detalhes.jsx`** antes de assumir.

| Card | `aspect-ratio` | Medido a 504px de coluna |
|---|---|---|
| 1 (topo, larga) | `1.8 / 1` | 504×280 |
| 2 e 3 (abaixo) | `1.35 / 1` | 246×182 |

A altura vem de `aspect-ratio` por item, **nunca** de altura fixa na galeria:
as três fotos são quase quadradas (0,94 / 1,03 / 0,97), e num container baixo
o `cover` corta o que importa. Na foto grande a estátua ocupa de 63% a 76% da
altura da imagem; a 2,74:1 a janela ia de 33% a 67% e cortava a base. Por isso
`object-position: center 58%` na primeira.

## Pontos em aberto

- **Peso 800 no título:** `font-weight: 800` está declarado no CSS, mas Cormorant
  Garamond só vai até 700. O navegador renderiza o 700. Se for necessário um ExtraBold
  real, precisa trocar a fonte do título (Playfair Display vai até 900) ou aceitar o 700.
  **Aguardando decisão do usuário.**
- **Os fundos de celular foram conferidos em tela** a 342–357px de largura
  (todas as regras dentro de `≤700px` são as mesmas em qualquer celular), mas
  **nunca em 320px**, que é o aparelho mais estreito em uso. Se algo vazar
  ali, é o `h2` mais longo ou a foto do herói.
- **Os outros 4 atrativos ainda mostram o `cristocel.jpg` do Cristo no
  celular**, por falta de regra própria. Se cada um ganhar foto 900×3400, é uma
  regra por classe.
- **Item 3 da galeria do Pico:** decidir entre `center 38%` (montanha, atual) e
  `center bottom` (ponte, sem céu). Ver **Pico dos Pontões** acima.
- **`fundopontos.png` está em dois lugares** — é o `fundo` da página do Pico e
  também o item 1 da galeria dele. No celular não aparece duplicado (o fundo
  do celular é outro arquivo), mas no desktop sim. A usuária confirmou o nome
  do arquivo de propósito, então **não foi erro** — só está anotado.
- **Validação visual no celular ainda é parcial.** A janela do navegador do
  ambiente não pode ser redimensionada por `window.resizeTo` nem por ferramenta
  de emulação, então o viewport fica em ~611–1000px: dá para conferir o
  breakpoint ≤700px (celular grande) e ≤800px, mas **não** 320/375/390/430px.
  O usuário precisa olhar no aparelho e dizer a largura se algo estiver errado.
- **Aparelho com menos de ~800px de altura ainda rola** na página inicial. O
  conteúdo precisa de ~800px e uma tela de 667px (iPhone SE) só oferece 588px
  utilizáveis. Só se resolve cortando conteúdo, não espaçamento.
- **A captura de tela funciona, mas é intermitente.** (`browser.screenshot`, com
  `browser.tabs.focus` antes). O checkpoint anterior afirmava que não funcionava
  — estava errado. Ela falha quando a janela do desktop não está visível; às
  vezes focar a aba e recarregar resolve, às vezes só funciona numa aba nova.
  **Não confunda "screenshot falhou" com "a página está errada".**
- **`loading="lazy"` engana a verificação.** Imagens fora da tela reportam
  `naturalWidth: 0x0` e não aparecem em `performance.getEntriesByType('resource')`
  — o navegador ainda não pediu. Rolar até a seção costuma destravar. Foi assim
  que duas fotos da galeria pareceram quebradas e estavam perfeitas.
- **Atrativos ainda incompletos:** Cachoeira das Flores, Usina Aparecida,
  Mirante Santa Terezinha e Mirante da Água Limpa têm apenas card +
  localização. Falta o mesmo tratamento que o Pico e a Paraíba têm agora.
- **A Cachoeira da Paraíba está pela metade** — com 1 foto de galeria, sem pin
  no mapa e com 3 legendas de trilha inventadas. A estrutura e os fundos estão
  prontos; falta conteúdo.
- **Ainda no padrão antigo:** Fazenda União (aba Patrimônios) continua sem as
  seções e a identidade visual nova.
- **Imagens sem uso** (ver **Fotos de fundo**): `fundocelular.png`, `funcel.png`,
  `tour.png`, `fundoponto.png` e `fundoponto.jpeg` somam ~8 MB no deploy.
  Apagar só com confirmação do usuário.

## Retomar a partir daqui

**Próximo: a Cachoeira das Flores.** A Cachoeira da Paraíba já está no padrão
do Pico — copie a estrutura dela.

### Como o padrão foi estendido (e o que NÃO pode ser repetido)

Tudo vive em dois arquivos. `Natureza.jsx` guarda os dados por atrativo e
`Detalhes.jsx` consome. O Cristo ficou como estava: os arrays `cristoGallery`,
`cristoTrilha`, `cristoStats` e `cristoSobre` continuam locais dele.

A flag que seleciona o layout é:

```js
const isAtrativoNatureza = category === 'NATUREZA'
const usaPadraoCristo = isCristoRedentor || isAtrativoNatureza
```

`usaPadraoCristo` **inclui** o Cristo, então ele entra no mesmo `if` de sempre
e não muda de ramo. Só o CONTEÚDO é por dado: `galeriaDoCard` cai no array do
Cristo quando o atrativo não tem o seu.

**Os quatro "DoCard" derivados, e a ordem importa:**

```js
const galeriaDoCard = galeria && galeria.length > 0 ? galeria : cristoGallery
const trilhaDoCard   = isCristoRedentor ? cristoTrilha : trilha || []
const sobreDoCard    = isCristoRedentor ? cristoSobre  : sobre  || []
const statsDoCard    = isCristoRedentor ? cristoStats  : stats  || []
```

**Constantes derivadas precisam vir DEPOIS dos arrays** que referenciam — usar
`cristoGallery` antes da declaração cai em zona morta temporal e a página nem
abre. Já aconteceu duas vezes, e o lint acusa como
`no-useless-assignment`, que não é óbvio.

**A galeria tem fallback no array do Cristo; a trilha, o `sobre` e as `stats`
NÃO.** Cair nelas mostraria o conteúdo do Cristo nos outros cards. Sem o campo
próprio, a seção simplesmente não aparece.

**`App.jsx` precisa repassar os props.** Foi o bug do dia: ele listava
sozinho `icon, category, title, description, image, backgroundImage`, e
`galeria`/`trilha` ficavam retidos lá. Ao acrescentar um campo novo em
`onOpen`, acrescentar em `App.jsx` também — o build e o lint **não**
reclamam, o campo só chega `undefined`.

**Texto dentro de um ramo do JSX vaza para os outros atrativos.** Os
parágrafos do Cristo estavam escritos direto no ramo `usaPadraoCristo`, e o
Pico herdou o texto. Build e lint limpos; só a tela pegou. **Todo texto que
depende do atrativo precisa ser dado.**

**Nunca usar `title === 'Natureza'` para identificar atrativo.** Esse era o
título da página antiga de categoria, e nenhum atrativo o tem. Numa tentativa
anterior isso tirou o Cristo do layout aprovado, com build e lint limpos:
só a conferência na tela pegou. `category === 'NATUREZA'` é o certo.

**Cuidado com CSS compartilhado.** `.cristo-gallery` e `.cristo-stats` são
usados por todos os atrativos do padrão. Para ajustar um só, criar uma classe
por atrativo na raiz (`details-page-pico`) e escopar a regra — senão a
galeria aprovada do Cristo muda junto.

### Fila

1. **Cachoeira das Flores** — só tem card, localização e 1 foto. Seguir o
   mesmo roteiro da Paraíba: `sobreTitulo`, `subtitulo`, `sobre`, `stats`,
   `galeria` com 3, `trilha` com 4, `fundo` (web), fundo de celular (900×3400)
   e `mapa`.
2. **Usina Aparecida, Mirante Santa Terezinha, Mirante da Água Limpa** —
   mesma situação.
3. Migrar **Fazenda União** (aba Patrimônios) para o mesmo padrão.
4. Fotos que faltaram na Paraíba (ver **Cachoeira da Paraíba**).
5. Os outros 4 atrativos ainda usam o `cristocel.jpg` do Cristo no celular —
   falta uma foto 900×3400 de cada.
6. Decidir o `object-position` do item 3 da galeria do Pico
   (`center 38%` monta a montanha, `center bottom` mostra a ponte).
7. Decidir o peso 800 do título.
8. Opcional: apagar as imagens sem uso — **~25 MB**.

**Ao pegar o próximo atrativo, três lembretes que custaram tempo hoje:**
- Meça o `h2` das seções com um `Range`, não pela caixa (ver **Títulos das
  seções no celular**).
- Fundo de celular tem que ser 900×3400; de web, foto deitada sempre amplia
  porque a página é alta.
- Todo texto que dependa do atrativo precisa ser dado — texto escrito dentro
  de um ramo do JSX vaza para os outros (já aconteceu com o "Sobre" e com o
  endereço).

**Ao pegar o próximo atrativo, lembre do `min(6.6vw, 58px)`:** se o título não
caber em uma linha nos 760px da foto, é preciso uma regra por classe como a
`.details-page-paraiba`. E meça o título no navegador antes de escolher o
número — a conta acima mostra por quê.

### Cachoeira da Paraíba

Segundo atrativo preenchido. Tudo em `Natureza.jsx`.

| Campo | Valor |
|---|---|
| `title` | `Cachoeira da Paraíba` — **nome corrigido**, era "do Paraíba" |
| `imagem` / `imagemDetalhe` | `/fotos/paraiba.png` (mesma foto nos dois, é a única que existe) |
| `fundo` (web) | `/fotos/caweb.jpg` (1448×1086) |
| fundo no celular | `/fotos/cachoparacel.jpg` (900×3400), por CSS |
| `mapa` | -21.043596367306062, -41.42810765513875, zoom 15, raio 0,015 |
| `localizacao` | `Localizada a 13 km de Mimoso` |
| `endereco` | `''` — esconde o bloco do pin (o desenho manda só o mapa) |
| `sobreTitulo` | `Sobre o local` |
| `sobre` | 2 parágrafos |
| `stats` | 12 m / 13 km / Fácil acesso |
| `galeria` | **1 foto só** |
| `trilha` | 4 vagas, todas `foto: null` |
| `mapa` | **não tem** — fica o placeholder |

**O nome é "Cachoeira da Paraíba", com DA.** A usuária corrigiu. Vale conferir
antes de escrever qualquer texto que cite o nome.

**`endereco: ''` esconde o pin** e para isso o `enderecoDoCard` usa `??`, não
`||` — com `||` a string vazia cairia no `localizacao`.

**`sobreTitulo` é um campo novo** e generaliza o `h2` da seção: o "Pico dos
Pontões" tem o valor hardcoded e os demais caem em 'Conheça este lugar'.
Se os outros quatro forem preenchidos, vale migrar o Pico para o campo
também e simplifying o ternário.

**Falta para a Paraíba:** mais 2 fotos de galeria, uma foto deitada para o
herói, as 4 fotos da trilha, e as 3 legendas da trilha que não vieram (as de
`Natureza.jsx` são palpite). O mapa e os fundos já estão resolvidos.

### Títulos das seções no celular: 18px

O `h2` das seções tinha 22px no celular, e **"O QUE VEMOS PELO CAMINHO"
estourava 88px**. Medido a 357px de viewport (306px de conteúdo):

| Título | Texto | Total | Cabia? |
|---|---|---|---|
| SOBRE O LOCAL | 196px | 288 | sim |
| GALERIA | 110px | 202 | sim |
| COMO CHEGAR | 189px | 281 | sim |
| O QUE VEMOS PELO CAMINHO | 370px | **394** | **NÃO** |

Só o longo estourava, porque o `.details-section h2` tem `white-space: nowrap`
na regra base e não pode quebrar.

No bloco de celular: 18px, `letter-spacing: 1.8px` (era 2,4), `gap: 10px`,
linhas laterais de 28px (era 34), e **`white-space: normal`** como rede de
segurança. Com 18px ele cabe em uma linha até uns 380px de tela; em aparelho de
320px ainda não cabe e quebra em duas linhas — melhor que vazar.

O **desktop não foi tocado**: lá o `nowrap` continua e os quatro cabem em
760px.

**Como medir isso de novo:** a caixa do `h2` é `display: flex` e sempre mede a
largura inteira do conteúdo, mesmo com o texto estourado. Medir a caixa não
serve — é preciso medir o texto com um `Range`:

```js
var r = document.createRange();
r.selectNodeContents(h);
Math.ceil(r.getBoundingClientRect().width); // isto é o texto
```

### Fundo de celular por atrativo — e o vazamento que isso conserta

O fundo de celular **não** vem do dado `fundo`. Ele é CSS, dentro de
`@media (max-width: 700px)`, porque precisa de `!important` para vencer o
`background-image` que o JSX aplica inline.

**O vazamento:** a regra do Cristo é `.details-page-cristo`, e essa classe vale
para **todos** os atrativos do padrão. Então o Pico e a Cachoeira mostravam a
`final.png` do Cristo no celular, ignorando o `fundo` de cada um — sem erro, sem
aviso. Agora cada atrativo com foto própria tem a sua regra:

| Página | Celular (≤700px) | Web |
|---|---|---|
| Cristo Redentor | `cristocel.jpg` | `ok.png` |
| Pico dos Pontões | `pontoescel.jpg` | `fundopontos.png` |
| Cachoeira da Paraíba | `cachoparacel.jpg` | `caweb.jpg` |
| Pontos Turísticos (aba) | `ponturcel.jpg` | `ptweb.jpg` |
| outros 4 atrativos | `cristocel.jpg` (o do Cristo) | o `fundo` de cada um |

**Todas as fotos de celular são 900×3400** (proporção 0,2647) — o formato que
resolve o `cover` sem ampliar, medido a 338px e 342px de largura.

No **web** a situação é outra, e vale saber: a página de detalhes é muito alta
(1431×2547 no Cristo), então **foto deitada sempre amplia** por volta de 1,7×
a 2,4×. Para não ampliar no desktop a foto precisaria de uns 1430×2550.
A `caweb.jpg` (1448×1086) amplia 2,35× — a anterior `funweb.png` (1024×1536)
ampliava 1,66×. O gradiente escuro por cima (0,52 → 0,76) esconde boa parte
disso, mas é bom ter o número.

**A ordem no CSS importa** e é o que garante o resultado: os três seletores têm
a mesma especificidade (0,1,0) e todos levam `!important`, então vence o último
declarado. `.details-page-pico` e `.details-page-paraiba` precisam ficar
**depois** de `.details-page-cristo`. Conferido no CSS compilado: cristo na
posição 25047, pico em 89714, paraiba em 90276.

`funcel0.png` (900×2720) é o formato ideal — proporção 0,331, a mesma da
página, e no tamanho que o projeto tinha como meta, então **não amplia**.
`sun.png` (724×2172) amplia entre 1,18× e 1,39×; sem emenda, mas mole em tela
2×. Para não ampliar precisaria de uns 900×3400.

### O título mais longo, agora em uma linha só

A usuária pediu "CACHOEIRA DA PARAÍBA" em uma linha, dentro da largura da foto.
Medindo a 1446px, cada px de fonte rende ~12,6px de texto:

| Fonte | Largura do título |
|---|---|
| 70px (teto do clamp geral) | 886px — **estoura** os 760px da foto |
| 62px | 791px |
| 60px | 767px |
| **58px** | **743px** — o maior que cabe |

A solução ficou em `.details-page-paraiba .details-title`:

```css
max-width: 760px;
font-size: min(6.6vw, 58px);
white-space: nowrap;
```

O `58px` é o teto do desktop; o `6.6vw` cobre o celular, onde a coluna é 90%
da tela (5% de padding de cada lado). Conferido por conta: a 320px dá 21,1px e
o texto fica com ~23px de folga; a 430px dá 28,4px com ~30px de folga.

Medido na tela: fonte 58px, **1 linha**, 729px dentro dos 760px da foto, e
todos os blocos com desvio 0.

O clamp geral **não** foi mexido — Cristo e Pico continuam em 70px, como foram
aprovados.

### O que ainda NÃO foi verificado nesta sessão

**Os fundos de celular (`≤700px`).** A janela do ambiente não pode ser
redimensionada, e ela ficou entre 1000 e 1446px durante o trabalho — nunca
entrou na media query. O que **foi** verificado: as regras existem no CSS
servido, com a URL certa e na ordem certa depois do Cristo, e as três imagens
estão no `dist`. **Falta olhar no aparelho.**

### O título mais longo desalinha a página inteira

**Este é o achado mais importante da sessão 3.** "CACHOEIRA DA PARAÍBA" é o
título mais longo do site e **não cabia em 760px**. Com `white-space: nowrap`
no `.details-title`, o `min-content` do título empurrava `.details-intro` para
**886px** dentro de uma coluna de 760px. Tudo que estava dentro do herói —
foto, título, subtítulo e infográfico — saía **63px para a direita** do centro,
enquanto a galeria e a trilha, que ficam fora do herói, continuavam
centradas. Era o hetero que denunciava.

Foram dois ajustes, e **cada um sozinho não resolveu**:

| Ajuste | Efeito |
|---|---|
| `.details-hero { grid-template-columns: minmax(0, 1fr) }` | centralizou a foto e o infográfico; o título seguia fora |
| `.details-intro { min-width: 0 }` | centralizou o subtítulo; o título seguia fora |
| `.details-page-paraiba .details-title { white-space: normal }` | resolveu de vez |

**O culpado é o `nowrap`**, não o grid. Confirmeiligando e desligando
`white-space` no navegador: com `normal` tudo vai a 760px e desvio 0; com
`nowrap` volta a 886px. As duas correções de grid continuam valendo como
defesa, mas o `nowrap` era a raiz.

**Não tirei o `nowrap` geral** — ele garante uma linha só, e foi assim que o
Cristo e o Pico foram aprovados. "CRISTO REDENTOR" mede ~620px a 70px e "PICO
DOS PONTÕES" ~709px, ambos cabem em 760px; só a Cachoeira estoura. Por isso a
exceção é por classe (`.details-page-paraiba`), como o `.details-page-pico`.

**Como achar esse tipo de problema:** medir o desvio do centro de cada bloco,
`(esquerda + largura/2) - centroDaPagina`. Desvio 0 em tudo = alinhado. Vale
rodar isso em qualquer atrativo novo cujo título seja comprido.

### Armadilha do ambiente: HMR que falha e deixa módulo velho

Um erro de sintaxe momentâneo no `Detalhes.jsx` (crase de template literal
comida pelo PowerShell) fez o HMR do **`App.jsx`** falhar. O Vite no Windows
**nunca refez aquela transformação**, então o navegador seguiu servindo um
`App.jsx` antigo — sem o `sobreTitulo`. Sintoma: build e lint limpos, código
perfeito nos três arquivos, e o campo chega `undefined` na tela. É o mesmo
sintoma do bug do `App.jsx` do dia anterior.

Como diagnosticar: ler o módulo servido em vez do disco.

```powershell
(Invoke-WebRequest 'http://localhost:5173/src/App.jsx').Content -match 'sobreTitulo'
```

Retornou `AUSENTE` quando o arquivo no disco já tinha. **Reiniciar o
servidor de dev resolve.**

Também: **`browser.evaluate` que clica e lê no mesmo script falha** — o React
ainda não renderizou. É preciso uma chamada para clicar e outra para ler.
E `.discover-card` também casa os 7 cards de atrativo na página de Pontos
Turísticos, não só os 3 da página inicial — por isso `length === 3` é a
condição certa para saber que se está na página inicial.

### Pendências técnicas

- **Título longo desalinha o herói** — ver a seção acima. Aplicar a exceção
  de `white-space` a qualquer outro atrativo cujo título não caiba em 760px.
- **`sun.png` no celular amplia.** 724×2172 contra uma página de até 430×3017:
  o `cover` escala 1,18× a 1,39×. Sem emenda, mas mole em tela 2×. Para não
  ampliar precisaria de uns **900×3400**.
- **`padding-top: 124px`** do cabeçalho da página inicial no desktop foi
  calibrado por conta, sem medição — é o número mais frágil do projeto.
- **`cardpico.png` é quadrada** (1254×1254) e o card é 4/3: perde 25% da
  altura. O `flores.png` (1,5) perdeu só 11% da largura.
- **A foto grande da página de detalhes é 1,95:1** (760×390), de
  `.details-page-cristo .details-image`. Serve para todos os atrativos do
  padrão, então a foto de origem tem muita perda se for quadrada:
  `top.png` (16:9) perde 8,8% da altura; `cardpico.png` (1:1) perderia 48,7%;
  `cardgrande.png` (1321×1191, 1,11:1) perde 43%. Para não perder, a foto
  precisaria de uns **1670 × 855**.
- **Nome de arquivo não existe não dá erro visível.** O `img` fica com
  `naturalWidth: 0x0` e a área fica em branco — sem mensagem. Conferir
  `File.Exists` / `grep` antes de escrever o caminho. Foi o que aconteceu com
  `fundopontoes.png`, que a usuária queria e não estava na pasta (existem
  `fundopontos.png` e `fundoponto.png`).
- **Para medir onde o céu termina numa foto, use `System.Drawing`** e não o
  olho: brilho médio por faixa horizontal dá o corte certo do `object-position`.
  Foi assim que o 38% da `ponte.png` saiu.
- **`text-transform: capitalize`** é regra do inglês e virou "Vista Da Janela
  Do Cristo". Para caixa alta, usar `uppercase`; para só a primeira letra,
  `::first-letter`.
- **`backdrop-filter` não é verificável pelo CSSOM**: o minificador do Vite
  remove a versão sem prefixo, e `getComputedStyle().backdropFilter` devolve
  `"none"`. Só a captura de tela prova.
- **Margens adjacentes colapsam para a maior.** Foi por isso que `margin-top:
  26px` numa seção e `margin-bottom: 70px` na anterior não somavam 96px — o
  70px vencia. Para encurtar um vão, corte a margem da seção **anterior**.

### Imagens sem uso (medido, não estimado)

Levantado por `Select-String` de `/fotos/` em **todos** os `.jsx`, `.js` e
`.css` de `src/` (12 arquivos) — 41 nomes referenciados, 68 arquivos na pasta,
logo **27 sem uso, somando 31,6 MB**:

`aaaa.jpeg`, `chega.jpeg`, `cristo5.jpeg`, `essa.png`, `funcel.png`,
`fund0.png`, `fundo3.jpeg`, `fundocelular.png`, `fundocristocelular.png`,
`fundoponto.jpeg`, `fundoponto.png`, `last.png`, `maybe.png`, `monast1.jpeg`,
`montanha1.jpeg`, `montanha3.jpeg`, `montanha4.jpeg`, `montanha5.jpeg`,
`montanha6.jpeg`, `montanhasmimoso.jpeg`, `palmeira.jpeg`, `pon.png`,
`pontoes1.jpeg`, `pontoes6.png`, `test.png`, `tour.png`, `touriscel.png`

**Cuidado ao refazer esse levantamento:** procurar só em `src/*.css` perde
`src/pages/Monast.css`, que é onde o `monast.jpeg` é usado — foi assim que
`monast.jpeg` apareceu como "sem uso" na primeira medição. Varra a pasta
inteira, recursivamente.

`card2.png` e `card22.png` **já foram apagadas** nesta sessão (nada as
referenciava). `fund0.png` e `touriscel.png` saíram de uso quando os fundos
foram trocados, e `pontoes6.png` era o card antigo do Pico.

As candidatas a voltar são as fotos de teste do fundo e da galeria do Cristo
(`test.png`, `last.png`, `aaaa.jpeg`, `maybe.png`, `essa.png`, `chega.jpeg`,
`cristo5.jpeg`) — foram substituídas durante a sessão 30/09. Apagar só com
confirmação da usuária, e refazer a medição antes, porque a lista cresce a
cada troca de foto.

Regra de trabalho que vem funcionando: **um arquivo/atrativo por vez**, sem
quebrar abas já aprovadas, e `npm run build && npm run lint` antes de cada
`npm run deploy`.

## Publicação

- Cloudflare Pages project: `fabibriefs`
- URL: https://fabibriefs.pages.dev
- Deployment mais recente: **https://b6f4c1e0.fabibriefs.pages.dev**
- Comando: `npm run deploy` (= `npm run build && npx wrangler pages deploy dist --project-name fabibriefs`)

**Deploy de 02/10/2026 (encerra a sessão 3) — commits `bbe9883` e `dcd3fbd`.**
Card "Cultura" da página inicial renomeado para "**História**", aba "História"
removida do menu inferior (sobraram 5 abas), e o botão "×" do canto passou a
acompanhar a linha do rótulo do cabeçalho em todas as abas — medido com
diferença **0** em Descubra, Pontos Turísticos, Patrimônios e MONAST.

Detalhe importante dessa última: a usuária **escolheu descer o "×"** em vez
de subir o conteúdo das páginas, para não perder o alinhamento do cabeçalho
com a cabeça do Cristo na página inicial. Ver **O botão "×" acompanha o
rótulo do cabeçalho**.

**Deploy de 02/10/2026 (encerra a sessão 3) — commits `568abd5` e `d814761`.**

1. **Dados do Cristo atualizados** pela usuária: o texto "Sobre o local" foi
   reescrito (30 m, obra iniciada em 1980, escultor Antônio Francisco Moreira,
   inauguração em 11/07/1982, segunda estátua mais alta do ES, Colatina e
   Guaçuí). O infográfico foi **alinhado**: era 1956 e 28 m, o que contradizia o
   texto na mesma tela — agora é 1982 e 30 m. O subtítulo perdeu a abertura
   "Erguido sobre um monte a 128 metros de altitude,". O `h2` da seção passou
   de "Sobre o monumento" para "Sobre o local", e virou dado (`sobreTitulo`).
2. **Mapa da Cachoeira da Paraíba** com as coordenadas da usuária
   (-21.043596367306062, -41.42810765513875), zoom 15, raio 0,015 — o
   placeholder saiu.
3. **Fundos de celular** das três páginas de detalhe, todas 900×3400 e sem
   ampliar; e o da aba Pontos Turísticos passou a `ponturcel.jpg`.
4. **Títulos das seções no celular** caíram de 22px para 18px.

Assets: `index-BVmLjMcO.js` (273,74 kB).

Conferido **em produção** a 357px de largura: os quatro títulos de seção a
18px, **nenhum vaza da tela**, e o "O QUE VEMOS PELO CAMINHO" quebra em duas
linhas em vez de estourar.

**Deploy de 02/10/2026 (encerra a sessão 3) — commit `3868930`.** Fundos de
celular das três páginas de detalhe, todas em 900×3400 e todas **sem ampliar**:

| Página | Foto | Página medida | Escala |
|---|---|---|---|
| Cristo Redentor | `cristocel.jpg` | 338 × 2286 | 0,67× (só reduz) |
| Pico dos Pontões | `pontoescel.jpg` | 338 × 2513 | 0,73× (só reduz) |
| Cachoeira da Paraíba | `cachoparacel.jpg` | 338 × 1871 | 0,55× (só reduz) |

O nome pedido, `cachoeiraparacel.jpg`, não existe na pasta; foi usado
`cachoparacel.jpg`, que tem as medidas certas. Conferido em produção a 353px:
os três fundos, e o Cristo com as 3 estatísticas e a galeria em
`58%/50%/50%`, o Pico com o pin "Conceição do Muqui" e a galeria em
`58%/0%/38%`, a Paraíba com o título em 1 linha e zero ocorrência de
"do Paraíba".

Assets: `index-DVb6-pRz.js` (273,34 kB).

**Os outros 4 atrativos ainda usam o `cristocel.jpg` do Cristo no celular**,
por falta de regra própria. Basta me passar uma foto 900×3400 de cada.

**Deploy de 02/10/2026 (encerra a sessão 3) — commit `b17fa42`.** Fundo da aba
Pontos Turísticos: `ptweb.jpg` no desktop e **`pont1.jpg` (900×3400) no
celular** — a primeira foto dessa aba que **não amplia em nenhum aparelho**
(0,82× a 0,94×, só reduz). Também: o "ATRATIVOS TURÍSTICOS" subiu 27px (10% dos
270px do herói), o parallax saiu do celular nas quatro abas, e o título da
Cachoeira da Paraíba ficou em uma linha dentro dos 760px da foto.

Assets: `index-Dmveno9x.js` (273,34 kB).

Conferido **em produção**, nos dois tamanhos: na aba, `pont1.jpg` com gradiente
e sem parallax a 416px. No Cristo: título em 1 linha, as 3 estatísticas, a
galeria em `58%/50%/50%`, as 4 legendas e o mapa. No Pico: pin "Conceição do
Muqui", galeria em `58%/0%/38%`, sem a linha do distrito e **zero ocorrência de
"1.938"**. Na Paraíba: `CACHOEIRA DA PARAÍBA` em 1 linha dentro dos 760px, o
infográfico, as 4 legendas, sem pin, **zero ocorrência de "do Paraíba"**.

**Deploy de 02/10/2026 (encerra a sessão 3) — commit `297e7f0`.** Título da
Cachoeira da Paraíba em uma linha só dentro dos 760px da foto (`min(6.6vw,
58px)`), e os fundos de celular por atrativo: `sun.png` no Pico e
`funcel0.png` na Paraíba, ambos depois da regra do Cristo no CSS — o que
também conserta o vazamento que fazia o Pico e a Paraíba mostrarem a
`final.png` do Cristo no celular.

Assets: `index-DeWDMNsa.js` (273,34 kB).

Conferido **em produção**: `CACHOEIRA DA PARAÍBA` em **1 linha**, fonte 58px,
**743px dentro dos 760px da foto**, todos os blocos com desvio 0, fundo
`funweb.png`, e zero ocorrência de "do Paraíba". As três fotos de fundo
(`funcel0.png`, `funweb.png`, `sun.png`) responderam `200`.

O primeiro `wrangler deploy` desta sessão falhou com `ERROR fetch failed` — é
erro de rede, e a segunda tentativa passou. **Não é sinal de build ruim:**
confirme o build antes de tentar de novo.

**Deploy de 01/10/2026 (encerra a sessão 3) — commit `0806ab1`.** Cachoeira da
Paraíba no padrão do Pico: subtítulo, "Sobre o local" com dois parágrafos,
infográfico, "O QUE VEMOS PELO CAMINHO" com 4 vagas, nome corrigido para
"da Paraíba", e o título longo deixou de centralizar a página.

Também neste deploy: a linha "Distrito de Conceição do Muqui…" saiu do Pico;
`endereco` e `mapa` viraram campos de dados; o mapa deixou de ser um `ternary`
com as coordenadas no JSX. A Fazenda União quase ficou sem pin em produção
por não ter seus dados em `Patrimonios.jsx` — o mapa virou campo de dados, e
esse arquivo não foi atualizado junto.

Assets: `index-36hy7xMw.js` (273,31 kB) e o CSS com o `minmax(0, 1fr)` e o
`min-width: 0`.

Conferido **em produção**: Cachoeira da Paraíba com `CACHOEIRA DA PARAÍBA` em 2
linhas, todos os blocos com **desvio 0** do centro, o infográfico com os três
ícones, as 4 legendas, sem pin, e **zero ocorrência de "do Paraíba"** no site.
Cristo e Pico com `nowrap`, título em 1 linha e desvio 0.

**Deploy intermediário de 01/10/2026 — `befbdf25`** (mesma sessão): a
refatoração do mapa, publicada antes do conteúdo da Paraíba para não deixar a
Fazenda União sem pin em produção.

**Deploy de 01/10/2026 (início da sessão 3) — commit `fd02df9`.** Pico dos
Pontões completo: subtítulo, "Sobre o local" com dois parágrafos, infográfico
com os três ícones novos da fonte, "O QUE VEMOS PELO CAMINHO" com as 4 vagas,
galeria `fundopontos.png` / `pontoes.jpeg` / `ponte.png`, foto grande
`cardgrande.png`, altitude corrigida para 1.438 m, e o `object-position` do
item 3 da galeria medido por pixel (38%).

Assets publicados: `index-DYRJAW7D.css` (42,30 kB) e `index-Dq97VkoZ.js`
(273,00 kB).

Conferido **em produção**, não só no local: Cristo Redentor com as 3
estatísticas, a galeria em `58%/50%/50%` e as 4 legendas; Pico dos Pontões
com o infográfico, `SOBRE O LOCAL` sem rótulo, 2 parágrafos, a galeria em
`58%/0%/38%` e zero ocorrência de `1.938` no texto renderizado.

Deploy de 30/09/2026 (fim da sessão 2, `949debc`): padrão do Cristo Redentor
estendido para os 7 atrativos de Pontos Turísticos, fundo do celular da aba
trocado para `sun.png`, card novo "Cachoeira das Flores", foto do Pico trocada
para `cardpico.png`, rodapé dos cards mais fino e transparente (o escuro vinha
do card, 22%, não do rodapé), e o "O QUE VEMOS PELO CAMINHO" com as 4 vagas e
legendas.

**O Cristo Redentor não foi alterado** — conferido no navegador depois do
deploy: título, subtítulo, as 3 estatísticas, as 4 seções, a galeria com as 3
fotos e a trilha com as 4 legendas.

**Atenção ao cache:** o `index.html` em produção pode ficar alguns instantes
servindo a versão anterior. Confirmar com `?cb=<timestamp>` na URL ou usar a URL
do deployment, que é imutável.

## Fotos de fundo

| Aba | Desktop | Celular (≤700px) |
|---|---|---|
| Descubra | `/fotos/abertura.jpeg` | mesma, mas `auto 110%` a `51% 100%` (ver abaixo) |
| Pontos Turísticos | `/fotos/ptweb.jpg` (1357×761, 1,783) | `/fotos/pont1.jpg` (900×3400, 0,2647), `cover` |
| MONAST | `/fotos/monast3.jpeg` | `/fotos/celularmonast.jpg` (1080×1920, 0,562), `cover` |
| Patrimônios | `/fotos/uniao.jpeg` | mesmo, `cover` com viés vertical 38% |
| Cristo Redentor | inline via `fundo` | `/fotos/final.png` (722×2176, 0,3318), `cover` |

**Por que as duas abas ganharam recorte vertical:** as fotos horizontais do
desktop têm proporção ~1,78 e a tela em pé é ~0,46. Com `cover` num celular de
390×844, só **26% da largura** da foto apareceria. Os dois recortes dedicados já
nascem em ~0,563, muito perto do formato da tela, então o único ajuste
necessário é `cover`:

| | escala | renderiza | largura visível | altura cortada |
|---|---|---|---|---|
| `celularmonast.jpg` | 0,4396 | 475×844 | 390 de 475 (**82%**) | 0% |
| `touriscel.png` | 0,5048 | 475×844 | 390 de 475 (**82%**) | 0% |

Como a altura preenche exatamente, **o percentual vertical é inócuo** — sobra
só 85px de folga na horizontal, que `center` resolve. Consequência: sem folga
vertical não há o que o parallax desloque, então o offset entra como no-op
nesses duas abas (fica nos outros).

**A EXCEÇÃO é a Descubra, que não usa `cover` no celular.** A usuária pediu
que a cabeça do Cristo caísse dentro de um círculo que desenhou, a ~30% da
altura da tela. Com `cover` isso é impossível: `abertura.jpeg` tem proporção
1,782 e a tela 0,736, então a escala é 0,924 e a altura preenche exata —
830 de 830. Sem folga vertical, `background-position-y` é no-op e a cabeça
fica presa nos ~34% que a proporção impõe. A solução foi:

```css
.home-discover {
  background-position: 51% calc(100% + var(--parallax-offset));
  background-size: auto 110%;
}
```

`auto 110%` deixa 83px de folga vertical, o que dá controle de posição de
verdade. A ampliação é de 1,7% (913px contra 898px naturais) —
imperceptível. O `51%` no eixo x põe a cabeça (a 51,6% da largura da foto)
em 51% da tela, alinhada com o centro do título.

O `110%` é o mínimo que funciona: com `108%` a folga de 66px não alcançava
os 30% e a cabeça parava em 31,7%. Medido na captura: cabeça a ~29% da tela.

**A mesma técnica resolve qualquer caso em que a posição vertical precise ser
controlada:** `cover` não deixa folga, `background-position-y` vira no-op.
Basta trocar por `auto <algo>%` maior que 100%.

Tentativa anterior que foi descartada: `100% auto` com a foto original
(`/fotos/fund0.png` e `/fotos/monast3.jpeg`). Mostrava a largura toda numa
faixa curta no topo e deixava o resto da página em cor sólida, o que o usuário
não achou bom.

**Gradientes preservados** — a troca é só da URL, cada aba mantém o seu:
MONAST `rgba(0,0,0,0.45) → 0.62`, Pontos Turísticos `0.52 → 0.76`.

**Imagens sem uso:** ver a lista medida de 25 arquivos (27,4 MB) na seção
**Retomar a partir daqui**. Resumo: `fundocristocelular.png` saiu de uso quando
a `final.png` assumiu o fundo do Cristo no celular.

**Proporção de fundo no celular — a régua que vale:**

A página de detalhes do Cristo mede 637×1925, proporção **0,331**. Uma foto
de fundo só NÃO amplia com `cover` se a proporção dela for **igual ou mais
larga** que a da página. Medidas nesta sessão:

| Foto | Proporção | Escala do `cover` | Resultado |
|---|---|---|---|
| `fundocristocelular.png` | 0,563 | 2,09× a 2,23× | ampliava muito, cortava 66% |
| `aaaa.jpeg` | 0,3331 | 1,19× a 1,34× | proporção certa, **mas pequena demais** |
| `test.png` | 0,3309 | 0,70× a 0,79× | ideal |
| `last.png` | 0,3324 | 0,87× a 0,99× | bom |
| `final.png` | 0,3318 | 0,87× a 0,99× | **em uso** |

Ou seja: **proporção certa não basta, o tamanho também importa.** Para não
ampliar, a foto precisa de uns **900×2720** (2× de um celular de 430px, na
altura da página). O `test.png` é exatamente esse formato e daria o mesmo
resultado que a `final.png`, só que com resolução sobrando.

**Detalhe importante:** o fundo do Cristo Redentor é um `style` **inline** em
`Detalhes.jsx`, que tem prioridade sobre o CSS. Por isso a troca no celular
exige `!important` na regra `.details-page-cristo` dentro da media query.

## Parallax

- **Não existe mais no celular.** A usuária pediu em 02/10: nos fundos de
  celular a foto fica fixa. As quatro regras de `@media (max-width: 700px)`
  tiraram o `--parallax-offset` e ficaram só na posição de repouso:

  | Aba | Antes no celular | Agora |
  |---|---|---|
  | Descubra | `51% calc(100% + var(--parallax-offset))` | `51% 100%` |
  | Patrimônios | `center calc(38% + ...)` | `center 38%` |
  | MONAST | `center calc(50% + ...)` | `center 50%` |
  | Pontos Turísticos | `center calc(50% + ...)` | `center 50%` |

- O **desktop continua com parallax** — a regra base em `App.css`
  (`.home-discover, .home-monast, .natureza-page, .patrimonios-page`) segue
  com `calc(50% + var(--parallax-offset))`. O pedido foi só para o celular.
- **Entre 701px e 800px ainda tem parallax**, numa media query própria. Se
  quiser tirar também, é a regra do `max-width: 800px` do `tes.png`.
- Aplicado em todas as abas do desktop, via
  `background-position: center calc(50% + var(--parallax-offset))`
- `background-attachment: scroll` no celular, que evita o bug conhecido do iOS
  Safari de ignorar `fixed`
- Fator 0.14 e limite ±70px no desktop; 0.08 e ±40px no celular
- Desligado apenas quando `prefers-reduced-motion: reduce`
- O `useEffect` tem `intro` no array de dependências; sem isso o effect roda
  antes de `.discover-page` existir e o listener nunca é registrado
- Evite o atalho `background:` em `.natureza-page` e `.patrimonios-page`: ele
  fixa posição/tamanho "no braço" e faz as duas camadas do fundo divergirem

**Como conferir se um fundo usa parallax:** não dá pelo
`getComputedStyle().backgroundPosition` — o navegador resolve o `calc()` e
devolve só `50% 50%`, idêntico ao valor sem parallax. Confira na regra do CSS.

## Tamanho certo das fotos de fundo de celular (medido)

**A aba Pontos Turísticos mede 350×2790 no celular** — viewport de 365px,
menos 15px de barra de rolagem. Proporção **0,1255**, ou seja, mais ou menos
**1:8** (uma foto oito vezes mais alta que larga).

Regra do `cover`: a foto **não amplia** se for maior que a página nos DOIS
eixos. Então, para esta aba, sem ampliação em nenhum aparelho:

| Aparelho | Página | Foto precisa de |
|---|---|---|
| 365px | 350 × 2790 | ≥ 350 × 2790 |
| 390px | ~375 × 2900 | ≥ 375 × 2900 |
| 430px | ~415 × 3200 | ≥ 415 × 3200 |

**Recomendado: 900 × 3400.** Cobre todos com folga e é 2× de um celular de
430px, que é o que a regra do projeto pede para tela retina.

**`pont1.jpg` (900×3400) é o exemplo que funciona.** É a foto de celular da
aba Pontos Turísticos e **não amplia em nenhum aparelho**:

| Página medida | Escala | |
|---|---|---|
| 350 × 2790 (365px) | 0,82× | só reduz, 47% da largura visível |
| 401 × 3017 (416px) | 0,89× | só reduz, 50% visível |
| 415 × 3200 (430px) | 0,94× | só reduz, 49% visível |

**O que foi recusado e por quê — vale reter:**

| Foto | Medida | Escala no celular |
|---|---|---|
| `sun.png` | 724×2172 | ampliava 1,18× a 1,39× |
| `atr.jpg` | 900×2720 | ampliava 1,03× a 1,18× |
| `pt.jpg` | 900×2720 | ampliava 1,03× a 1,18× |
| `abertura1.jpeg` | 1600×900 | ampliava 3,1× a 3,56×, só 7% visível |
| `fundoponto.png` | 1122×1402 | ampliava 1,99× a 2,28×, só 16% visível |

**`fundoponto.png` não podia ser consertada por redimensionamento**, e essa
conta resolve de uma vez a tentação de tentar:

- Encolher a largura de 1122 para 900 deixa a altura em 1125px. Para chegar
  a 3400 seria preciso esticar a vertical **3,0×** — deforma a foto, não é
  a mesma imagem.
- Um recorte vertical também não salva: para sair proporção 0,126 teria que
  cortar em 177px de largura, e os 1402px de altura restantes ainda seriam
  menos que os 2790 da página — continuaria ampliando 1,99×.

Ou seja: **foto deitada ou quase quadrada nunca serve para esta página sem
ampliar.** Só uma vertical de nascença resolve.

A página de **detalhes** é bem menos alta: 0,331 de proporção. Por isso
`funcel0.png` (900×2720) e `final.png` (722×2176) nele só reduzem.

**Por que a `abertura1.jpeg` (1600×900, 1,778) NÃO pode ir no celular:** é uma
foto deitada e a página é 1:8. O `cover` escalaria por 3,1× a 3,56× e mostraria
**7% da largura da foto** — 350px de 4960. Ficaria uma faixa vertical
estourada e irreconhecível. No desktop ela é perfeita: 1,778 é a proporção de
uma janela de desktop. Por isso foi aplicada só no desktop, e o celular segue com
o `atr.jpg` vertical. **Se a usuária quiser à força no celular, é trocar a URL
da regra de `≤700px` — mas o resultado é o número acima.**

## Ritmo vertical da aba Pontos Turísticos no celular

Medido a 365px de largura:

| Bloco | Topo | Altura |
|---|---|---|
| botão Voltar | 18 | 38 |
| texto do herói | 70 | 130 (termina em 200) |
| herói | 0 | 270 |
| `ATRATIVOS TURÍSTICOS` | **239** | 48 |
| grid de cards | 321 | 2349 |
| folga até o fim | — | 120 |

O herói tinha **70px de espaço morto** abaixo do texto (200 → 270). A usuária
pediu para subir o `h3` e os cards em **10%** — 10% dos 270px do herói, ou
seja **27px**. Feito mudando `.natureza-page:not(.patrimonios-page)
.natureza-content` de `margin-top: -28px` para `-55px`: o `padding-top: 24px`
compensa parte, então o deslize real é de 27px e não de 55px. Conferido na
tela: `h3` em 239px, ainda 39px abaixo do texto do herói, sem encostar.

## Validação

Executado com sucesso ao final da sessão:

```bash
npm run build     # index-Dq97VkoZ.js / index-DYRJAW7D.css
npm run lint      # sem erros
```

E conferido contra a produção em `a5437368.fabibriefs.pages.dev`: o
`index.html` serve os assets acima, as imagens testadas responderam `200`, e a
página foi aberta e conferida atrativo por atrativo — ver **Publicação**.

Continuar a partir da seção **Retomar a partir daqui**.
