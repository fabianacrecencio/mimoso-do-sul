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
| História | `googleDocsAlt` | arcticons:google-docs-alt |
| Trilha | `cityTransit` | arcticons:city-transit |

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
- Fundo dos detalhes (celular): `/fotos/final.png`
- Mapa com pin do Cristo.
- Textos de apresentação, história, trilha de acesso e localização.

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
- **Atrativos ainda incompletos:** Cachoeira do Paraíba, Cachoeira das Flores,
  Usina Aparecida, Mirante Santa Terezinha e Mirante da Água Limpa têm apenas
  card + localização. Falta o mesmo tratamento que o Pico tem agora.
- **Ainda no padrão antigo:** Fazenda União (aba Patrimônios) continua sem as
  seções e a identidade visual nova.
- **Imagens sem uso** (ver **Fotos de fundo**): `fundocelular.png`, `funcel.png`,
  `tour.png`, `fundoponto.png` e `fundoponto.jpeg` somam ~8 MB no deploy.
  Apagar só com confirmação do usuário.

## Retomar a partir daqui

**Próximo: a Cachoeira do Paraíba.** O Pico dos Pontões acabou e virou o
modelo do que um atrativo preenchido tem — copie a estrutura dele.

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

1. **Cachoeira do Paraíba** — tem `galeria` com 1 foto e uma linha de
   descrição. Faltam `subtitulo`, `sobre`, `stats` (provavelmente altura da
   queda e distância), mais fotos na galeria e as 4 legendas da `trilha`.
2. **Cachoeira das Flores, Usina Aparecida, Mirante Santa Terezinha,
   Mirante da Água Limpa** — mesma situação da Paraíba.
3. Migrar **Fazenda União** (aba Patrimônios) para o mesmo padrão.
4. Decidir o `object-position` do item 3 da galeria do Pico.
5. Decidir o peso 800 do título.
6. Opcional: apagar as imagens sem uso — **~25 MB**.

### Pendências técnicas

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
- Deployment mais recente: **https://0cc20d63.fabibriefs.pages.dev**
- Comando: `npm run deploy` (= `npm run build && npx wrangler pages deploy dist --project-name fabibriefs`)

**Deploy de 01/10/2026 (fim da sessão 3) — commit `fd02df9`.** Pico dos Pontões
completo: subtítulo, "Sobre o local" com dois parágrafos, infográfico com os
três ícones novos da fonte, "O QUE VEMOS PELO CAMINHO" com as 4 vagas,
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
| Pontos Turísticos | `/fotos/tes.png` | `/fotos/sun.png` (724×2172, 0,333), `cover` |
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

- Aplicado em todas as abas: `.home-discover`, `.home-monast`, `.natureza-page`
  e `.patrimonios-page`, via `background-position: center calc(50% + var(--parallax-offset))`
- `background-attachment: scroll` no celular, que evita o bug conhecido do iOS
  Safari de ignorar `fixed`
- Fator 0.14 e limite ±70px no desktop; 0.08 e ±40px no celular
- Desligado apenas quando `prefers-reduced-motion: reduce`
- O `useEffect` tem `intro` no array de dependências; sem isso o effect roda
  antes de `.discover-page` existir e o listener nunca é registrado
- Evite o atalho `background:` em `.natureza-page` e `.patrimonios-page`: ele
  fixa posição/tamanho "no braço" e faz as duas camadas do fundo divergirem

## Validação

Executado com sucesso ao final da sessão:

```bash
npm run build     # index-Dq97VkoZ.js / index-DYRJAW7D.css
npm run lint      # sem erros
```

E conferido contra a produção em `0cc20d63.fabibriefs.pages.dev`: o
`index.html` serve os assets acima, as seis imagens testadas
(`cardgrande.png`, `ponte.png`, `fundopontos.png`, `cardpico.png`, `top.png`,
`cristo2.png`) responderam `200`, e a página foi aberta e conferida atrativo
por atrativo — ver **Publicação**.

Continuar a partir da seção **Retomar a partir daqui**.
