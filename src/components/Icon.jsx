const lineIcons = {
  landscape: (
    <>
      <path d="m3 19 6-10 4 6 2-3 6 7H3Z" />
      <path d="m7 12 2 2 2-2" />
    </>
  ),
  tree: (
    <>
      <path d="M12 21v-7" />
      <path d="M12 3 6 10h3l-3 5h12l-3-5h3L12 3Z" />
    </>
  ),
  map: (
    <>
      <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
      <path d="M9 3v15M15 6v15" />
    </>
  ),
  camera: (
    <>
      <path d="M4 7h3l1.5-2h7L17 7h3v12H4V7Z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  /* arcticons:camera, embutido de
     https://i.allsvgicons.com/r/arcticons:camera.json.
     O `camera` acima é um desenho 24×24 genérico, usado como
     placeholder antigo; este é o SVG real de 48×48. */
  arctCamera: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24 16.92a8.5 8.5 0 1 1-8.5 8.5a8.5 8.5 0 0 1 8.5-8.5"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M39.5 12.02h-8l-2.594-4h-9.812l-2.594 4h-8a4 4 0 0 0-4 4v18.8a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4v-18.8a4 4 0 0 0-4-4"
      />
      <circle
        cx="38.5"
        cy="17.02"
        r="2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
      <path d="M4 5.5V21M8 7h8M8 11h8" />
    </>
  ),
  hike: (
    <>
      <path d="M8 4v7l-3 4v5h11l-1-5-4-2V4" />
      <path d="M5 20h14" />
    </>
  ),
  menu: (
    <path d="M4 7h16M4 12h16M4 17h16" />
  ),
  close: (
    <path d="m6 6 12 12M18 6 6 18" />
  ),
  coffee: (
    <>
      <path d="M5 8h12v5a5 5 0 0 1-5 5H9a4 4 0 0 1-4-4V8Z" />
      <path d="M17 10h2a3 3 0 0 1 0 6h-2M4 21h14M8 4c0-1 1-1 1-2M12 4c0-1 1-1 1-2" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  mountains: (
    <>
      <path d="m3 19 6-10 4 6 2-3 6 7H3Z" />
      <path d="m7 12 2 2 2-2" />
    </>
  ),
  landmark: (
    <>
      <path d="M3 21h18M5 21V10l7-6 7 6v11M8 14h8M9 18h6" />
    </>
  ),
  masks: (
    <>
      <path d="M4 6h7v5a3.5 3.5 0 0 1-7 0V6Zm9 0h7v5a3.5 3.5 0 0 1-7 0V6Z" />
      <path d="M7 8h1M16 8h1M11 17h2" />
    </>
  ),
  postalCode: (
    <path
      fill="currentColor"
      d="M25 0c-8.284 0-15 6.656-15 14.866s15 35.135 15 35.135s15-26.924 15-35.135S33.284 0 25 0m-.049 19.312c-2.557 0-4.629-2.055-4.629-4.588c0-2.535 2.072-4.589 4.629-4.589c2.559 0 4.631 2.054 4.631 4.589c0 2.533-2.072 4.588-4.631 4.588"
    />
  ),
  evergreenTree: (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m24 34.866l12.23.78l-5.793-10.853l3.405.55l-5.327-8.99l3.176.222L24.001 5.5l-7.365 11.314l2.849-.461l-5.557 8.99l3.635-.55l-5.792 10.852zm0 0V42.5"
    />
  ),
  celeste: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.5 36.766l14.754-.497l1.957.497l1.832-.497l1.584.497l5.219-.249l.558.249l5.933-.249l.466.249H44.5l-2.92-3.292l-2.516-3.231l-.652-1.615l-.435-.466l-1.18 1.087l-2.205-2.423l-3.324-5.87l-1.056.652l-.683.559l-1.615-2.547l-1.615-5.311l-1.15-1.304l-.994-1.647l-.155-.124l-1.615 3.324l-1.087 1.739l-1.305 4.162l-3.882 4.908l-2.237 3.261l-.932-.994l-.963 1.833l-.465 1.087l-1.491-1.584l-2.175 2.578l-3.074 3.696z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.745 27.696l1.025.994l1.957.87l1.946 1.677l4.514-.497l4.504-.373l2.04-2.289m1.066 1.171l1.46 3.976l1.087.373m-9.815-11.431l-.746 1.367l-4.348 3.386m1.429-4.007l-2.019-.746l-1.74-1.77l3.448-3.727l.746-2.361m-8.75 9.239l1.885 1.508l.311-1.864l4.1-1.025m-4.473 12.86c-.093-.125-8.542-1.818-8.542-1.818l-2.686.824m19.94.636l1.755-.932l4.069-.139l1.615-.544"
      />
    </>
  ),
  dsphoto: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.7 12.1c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5s4.5-2 4.5-4.5s-2.1-4.5-4.5-4.5M28 21l-7.2 7.2c-.3.3-.7.3-1 0l-1.4-1.4c-.3-.3-.7-.3-1 0l-7.8 7.8c-.3.3-.3.7 0 1c.1.1.3.2.5.2h27.8c.4 0 .7-.3.7-.7c0-.1 0-.3-.1-.4L29 21.1c-.2-.3-.7-.3-1-.1"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M38 5.5H9c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"
      />
    </>
  ),
  readera: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.6 13.09h7.29m-7.34 3.12h7.3m-7.3 3.07h7.3m-7.3 3.15h7.3M8.67 9v25.08h11.12c1.79 0 4.29 1.75 4.29 1.75L24 10.35a5.5 5.5 0 0 0-3.85-1.58Zm22.15 25.08h-2.45c-1.79 0-4.29 1.75-4.29 1.75l.09-25.48A5.5 5.5 0 0 1 28 8.77h2.8m3.09.09l5.6.09v25.13h-5.6"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M33.89 36.62h7.7V10.28H40m-31.51.09h-2.2V36.6h15.16a10.4 10.4 0 0 0 2.53.58a9.4 9.4 0 0 0 2.38-.56h4.46m0-29.43v32.4l1.49-1.05l1.58 1V7.28Z"
      />
    </>
  ),
  cityTransit: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M27.594 5.595a9.033 9.033 0 0 0-9.033 9.033c0 7.07 6.897 15.576 8.704 17.665a.56.56 0 0 0 .785.055l.055-.055c1.783-2.097 8.523-10.596 8.523-17.665a9.033 9.033 0 0 0-9.034-9.033m0 12.855a4.434 4.434 0 1 1 4.435-4.435v.011a4.434 4.434 0 0 1-4.435 4.424"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m36.454 16.678l1.175-.08L42.5 40.607l-10.124 1.798l-15.915-1.682L5.5 42.405l2.958-24.647l8.989-1.16l1.289.064m-1.289-.064l-.642 24.162m15.571 1.645l-1.71-13.423"
      />
    </>
  ),
  tripeaks: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.509 27.107l14.533-13.425l6.021 5.991m-5.235 6.157l7.264-8.477L39.5 27.1"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.5 33.157l11.58-10.911l12.213 12.072"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4"
      />
    </>
  ),
  alpiMaps: (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m22.419 37.914l10.54-19.222l-4.954-8.606L12.51 37.914zm0 0H43.5L32.96 18.692M12.51 37.914H4.5l12.298-22.09l4.039 7.136"
    />
  ),
  openMaps: (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.81 5.5L6.25 9.45a1 1 0 0 0-.74 1v31a1 1 0 0 0 1 1h.33l11-4.26l12.3 4.31l11.56-4a1 1 0 0 0 .74-1v-31a1 1 0 0 0-1-1l-.33.07l-11 4.19Zm12.31 4.31V42.5m-12.27-4.31V5.6"
    />
  ),
  novelWorld: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m23.875 39.923l.1-28.09M10.056 8.078l-.05 25.434M7.553 11.134l.25 24.533m30.291-1.654l.05-25.935m-14.169 3.755c4.747-1.544 9.545-3.696 14.17-3.755m-28.089 0c5.512.488 9.355 2.437 13.919 3.755m-.046 25.583c4.554-2.305 9.348-2.938 14.165-3.403"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.006 33.512c5.588.449 9.6 2.316 13.923 3.904m16.618-26.082l-.2 24.633m-16.422 2.954a49 49 0 0 1 16.422-2.954m-32.544-.3c6.199.012 11.24 1.53 16.122 3.254m14.212-27.538l2.41-.05m-32.994-.199l2.496.351m19.793-1.677l.291 8.634l-1.552-1.603l-1.502 1.803l-.198-7.806"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m40.53 13.38l1.97-.043v25.384c-6.512-.58-12.298.72-18.625 1.202A84.6 84.6 0 0 0 5.5 38.57V13.537l2.077-.003"
      />
    </>
  ),
  googleDocsAlt: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2zm-11-11l11 11"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2zm-11-11l11 11M15 22h18m-18 5.5h18M15 33h11"
      />
    </>
  ),
  opentopomap: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m37.71 24.6l4.78-.736M5.51 29.6l18.4-2.83m3.2-18.39c5.44-1.46 11.035 1.765 12.496 7.206l.004.014a10.2 10.2 0 0 1-6.45 12.2l.144.52l1.11.645l2.83 10.6l-3.32.892l-2.83-10.6l.641-1.11l-.14-.526a10.2 10.2 0 0 1-4.47-19.9zm.819 3.09a6.908 6.908 0 1 0 3.738 13.3a6.908 6.908 0 0 0-3.735-13.3zM33.11 27.8l-1.6.5m-13.6-.6l-3.7-22.2"
      />
      <rect
        width="37"
        height="37"
        x="5.5"
        y="5.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="4"
        ry="4"
      />
    </>
  ),
  articleReader: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 37.59l.031-27.242H43.5v27.164l-2.355-1.778l-2.51 1.81l-2.667-1.373l-2.37 1.31l-2.074-1.482l-2.557 1.544l-2.433-1.606l-2.635 1.669l-2.215-1.544l-2.432 1.419l-2.48-1.497l-2.479 1.668l-2.401-1.621l-2.355 1.543l-2.526-1.387z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.192 19.002h12.1a1.715 1.715 0 0 1 1.731 1.7v10.37c0 .947-.767 1.715-1.715 1.715H10.192a1.715 1.715 0 0 1-1.731-1.7V20.734a1.715 1.715 0 0 1 1.7-1.73zm-1.934-3.929h31.11m-13.582 4.725H39.96M25.645 23.93h13.723m-13.723 3.54h13.723m-13.723 4.132h10.183"
      />
    </>
  ),
  locationPrivacy: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M25.81 8.29H11.57C8.73 8.26 5.93 9.41 5.79 10c-.24 1.09-.74 25-.82 29.08a.58.58 0 0 0 .52.6c7.13.14 17.57 3.32 25.88 3.32c1.82 0 8.09.24 8.09-2.69c0-1.63-1.44-3.42-1.47-5.16c0-.87-.63-10.21-.47-11.43"
      />
      <circle
        cx="10.72"
        cy="14.34"
        r="2.47"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M26.5 22.15c-.25.19-.52.39-.81.58"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray="2.02 2.02"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24 23.8c-4.72 2.73-11.53 5.62-10 8.37c1.42 2.59 6 2.53 8.66 2.26"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m23.6 34.3l1-.16M13 18.52a4 4 0 0 0 .49.86"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray="2.33 2.33"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 21.12a3.85 3.85 0 0 0 2.07 1.12a9.9 9.9 0 0 0 5.43-1.72"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m23.54 19.93l.86-.52M33.16 5A9.87 9.87 0 1 0 43 14.87A9.87 9.87 0 0 0 33.16 5"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m32.7 10.6l-5.07 1.19l11.07 6.16m-9.23-1.41l-1.84-4.75M23.71 31c2.58.76 5.93 4.4 8.16 7.4"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M31.15 29.42a69.4 69.4 0 0 0-6.42 8.64"
      />
    </>
  ),
  /* arcticons:yahoo-japan-calendar, embutido de
     https://i.allsvgicons.com/r/arcticons:yahoo-japan-calendar.json */
  yahooJapanCalendar: (
    <>
      <rect
        width="28.25"
        height="16.95"
        x="9.875"
        y="20.65"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx=".5"
        ry=".5"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.875 26.3h28.25v5.65H9.875z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.525 20.65h5.65V37.6h-5.65z"
      />
      <rect
        width="3"
        height="6"
        x="13.25"
        y="10.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx=".5"
        ry=".5"
      />
      <rect
        width="3"
        height="6"
        x="31.75"
        y="10.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx=".5"
        ry=".5"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M26.825 20.65h5.65V37.6h-5.65z"
      />
      <rect
        width="37"
        height="37"
        x="5.5"
        y="5.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="4"
        ry="4"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M42.5 13.75h-7.75m-3 0h-15.5m-3 0H5.5"
      />
    </>
  ),
  /* arcticons:summit — cume com bandeira. Usado no infográfico do
     Pico dos Pontões, no lugar da dificuldade. */
  arctSummit: (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.394 14.32L24 18.124l3.606-3.803zM24 38.052L4.5 33.367L24 9.949zl19.5-4.685L24 9.949"
    />
  ),
  /* arcticons:alltrails — trilha sinuosa. 1ª coluna do
     infográfico do Pico dos Pontões (altura). */
  arctAlltrails: (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m41.82 30.535l-8.136-11.784l-3.989 2.336l-5.905-9.79L4.5 35.784c18.136-12.337 27.782-3.774 39 .919"
    />
  ),
  /* arcticons:emoji-hiking-boot — bota com coturno. 2ª coluna do
     infográfico do Pico dos Pontões (distância). */
  arctHikingBoot: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.533 35.392c-.258-4.372 1.103-11.861 1.48-12.595l.027-9.431s7.46-.086 9.667-1.111c.957-.445 2.536-1.329 3.612-1.944a.747.747 0 0 1 1.12.663c-.048 2.56-.044 8.044.81 9.55c.78 1.378 3.033 2.87 4.42 3.918c3.723 2.81 9.096 3.145 11.504 3.494c5.393.782 4.834 6.933 3.172 8.08c-2.61 1.802-11.576.803-11.576.803c-2.18-.12-7.522-1.427-12.252-1.427"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.768 32.667s21.159 2.027 24.07 1.402M19.72 16.968l-1.98-.01m2.345 3.576l-1.925.463m3.564 2.163l-1.64 1.11M5.5 35.392h12.017v2.398H5.5z"
      />
    </>
  ),
  /* arcticons:levelsfyi — escadinha de níveis. 3ª coluna do
     infográfico do Pico dos Pontões (dificuldade). */
  arctLevels: (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M42.46 7.983V42.5H8.504v-6.887h6.527v-6.728h6.848v-6.807h6.767V15.27h7.328V7.982zM29.887 5.5L5.539 30.007"
    />
  ),
  /* arcticons:ruler */
  arctRuler: (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.578 29.985L29.908 5.5l12.514 12.36L17.937 42.5zM31.775 14.39l-5.428-5.307m-.353 8.157l-3.967-3.809m1.143 9.619l-5.427-5.307m-3.398 14.188l-5.428-5.307m8.239-.489l-3.967-3.81"
    />
  ),
  pushPinOutlined: (
    <path
      fill="currentColor"
      d="M18.996 12.011A3.005 3.005 0 0 1 16 9V4h1l-.013.011A1.023 1.023 0 0 0 18 3a1.007 1.007 0 0 0-1.015-.988L17 2H7a1 1 0 0 0-.003 2H8l-.004 5A2.99 2.99 0 0 1 5 12v2h6v7l1 1l1-1v-7h6v-2ZM9 12a4.94 4.94 0 0 0 1-3V4h4v5a5 5 0 0 0 1 3Z"
    />
  ),
  mapsgo: (
    <>
      <circle
        cx="24"
        cy="17.93"
        r="4.82"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24 43.83c.43 0 1.26-.11 1.26-1.74c0-5.14 7.27-10.78 10.57-17.15a13.76 13.76 0 1 0-23.66 0c3.3 6.37 10.57 12 10.57 17.15c0 1.63.83 1.74 1.26 1.74"
      />
    </>
  ),
  baiduMap: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.886 22.647c-2.906-4.643-.813-12.473 3.618-15.691a12.47 12.47 0 0 1 14.862 0c4.733 3.622 6.612 10.908 3.706 15.55L23.935 40.302ZM17.111 43.5h13.8"
      />
      <circle
        cx="24.012"
        cy="17.947"
        r="5.531"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  classicalBuilding: (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m24.004 5.549l-13.101 7.514h26.202zM5.5 39.374h37v3.077h-37zM7.188 13.07h33.64v3.083H7.188zm.84 23.121h31.96v3.077H8.028zm2.374-20.038h3.312V36.19h-3.312zm6.936 0h3.312V36.19h-3.312zm16.954 0h3.313V36.19h-3.313zm-6.936 0h3.313V36.19h-3.313z"
    />
  ),
  terraria: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M26.163 19.99v18.383c0 .496 1.711 3.09 2.705 3.09s2.153.443 2.153 1.215s-.331.828-.773.773a23 23 0 0 0-2.318-.773c-.221.11-1.601.97-2.043.789a5.2 5.2 0 0 0-2.134-.789c-.617.028-.957.822-1.84.814c-.67-.006-1.399-.924-2.374-.814c-.469.053-1.049.815-1.49.822s-.883-.16-.883-.822c0 0 .607-1.048 1.159-1.048a3.6 3.6 0 0 0 1.794-.663a9 9 0 0 1 1.794-2.484V26.338c0-.386-.46-.938-.46-1.711s.46-.994.46-1.435V21.26"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.268 4.688a2.57 2.57 0 0 1 2.632.49s.623-.738 1.214-.674a2.89 2.89 0 0 1 2.172 1.998s-.11-1.086 1.527-.773a8.3 8.3 0 0 1 3.22 4.784c1.803.074 1.803 1.84.552 2.282c1.472.7-.147 1.84-.147 1.84c1.067.295.441 4.748-3.055 5.355s-3.754-.865-3.754-.865s-.533 1.583-1.821 1.527s-.994-1.416-.994-1.416s-.35 2.17-1.693 2.079a1.62 1.62 0 0 1-1.527-1.325s-.92 1.233-1.564.442a1.41 1.41 0 0 1-.405-1.362s-3.349.11-3.46-2.595s1.454-3.128 1.454-3.128s-1.545-.625-1.122-1.656a2.36 2.36 0 0 1 1.656-1.251a4.93 4.93 0 0 1 .055-3.312c.718-1.325 3.938-1.012 3.938-1.012s-.14-.93 1.122-1.428m.313 26.067l-3.186-1.737m7.768 6.815l3.392-2.108m-.332-3.285a1.99 1.99 0 0 1 3.244.208s1.331-.52 1.705.458a1.07 1.07 0 0 1-.416 1.393s1.442 1.288.153 2.426s-2.579.75-2.662-.388A1.645 1.645 0 0 1 29.617 32s-1.08-.75-.394-1.56m-14.427.32a2.016 2.016 0 0 1-.654-3.254s-.873-1.172.005-1.804a1.11 1.11 0 0 1 1.502.035s.904-1.768 2.384-.803s1.433 2.34.32 2.728a1.59 1.59 0 0 1-.363 1.887a1.64 1.64 0 0 1-1.74.402s-.461 1.268-1.454.81"
      />
    </>
  ),
  nordlockerCloud: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.59 36.89c-7.003-9.732-4.792-23.299 4.94-30.303A21.7 21.7 0 0 1 24 2.5c11.99.117 21.614 9.93 21.498 21.92a21.7 21.7 0 0 1-4.088 12.47L31.08 20l-1.86 3.17l1.88 3.23L24 14.17l-5.27 9l1.9 3.27L16.91 20z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.595 38.858h7.993c4.338 0 3.612-6.529-.739-5.081c0-3.626-6.529-3.626-6.529.726c-3.629-.726-3.629 4.355-.726 4.355Z"
      />
    </>
  ),
  nothingButWallpapers: (
    <>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M45 23.723c0 11.598-9.402 21-21 21s-21-9.403-21-21zm-6.183 0l-6.9-8.417l-6.901 8.417"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M27.586 20.587L19.521 8.822L9.306 23.723"
      />
      <circle
        cx="34.192"
        cy="6.719"
        r="3.441"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
}

const isometricIcons = {
  mountain: (
    <>
      <path d="M32 6 54 18 32 30 10 18 32 6Z" fill="currentColor" fillOpacity="0.28" />
      <path d="m10 18 22 12v22L10 40V18Z" fill="currentColor" fillOpacity="0.5" />
      <path d="m54 18-22 12v22l22-12V18Z" fill="currentColor" fillOpacity="0.78" />
      <path d="m22 20 10-14 10 14-10 6-10-6Z" fill="currentColor" fillOpacity="0.92" />
    </>
  ),
  landmark: (
    <>
      <path d="M32 6 54 18 32 30 10 18 32 6Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M10 18h44v8H10z" fill="currentColor" fillOpacity="0.72" />
      <path d="M14 26h8v18h-8zM28 26h8v18h-8zM42 26h8v18h-8z" fill="currentColor" fillOpacity="0.55" />
      <path d="M10 44h44v6H10z" fill="currentColor" fillOpacity="0.82" />
    </>
  ),
  postalCode: (
    <path
      fill="currentColor"
      d="M25 0c-8.284 0-15 6.656-15 14.866s15 35.135 15 35.135s15-26.924 15-35.135S33.284 0 25 0m-.049 19.312c-2.557 0-4.629-2.055-4.629-4.588c0-2.535 2.072-4.589 4.629-4.589c2.559 0 4.631 2.054 4.631 4.589c0 2.533-2.072 4.588-4.631 4.588"
    />
  ),
  culture: (
    <>
      <path d="M32 6 54 18 32 30 10 18 32 6Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M14 20c5-3 11-3 16 0v16c-5 3-11 3-16 0V20Z" fill="currentColor" fillOpacity="0.62" />
      <path d="M34 20c5-3 11-3 16 0v16c-5 3-11 3-16 0V20Z" fill="currentColor" fillOpacity="0.82" />
      <circle cx="22" cy="27" r="1.6" fill="currentColor" />
      <circle cx="42" cy="27" r="1.6" fill="currentColor" />
      <path d="M19 33c2 2 5 2 7 0M39 33c2 2 5 2 7 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
}

function Icon({ name, size = 24, isometric = false, className = '' }) {
  const icons = isometric ? isometricIcons : lineIcons
  const isPostalCode = name === 'postalCode'
  const isFilledIcon = ['postalCode', 'pushPinOutlined'].includes(name)
  const is48Icon = [
    'evergreenTree',
    'celeste',
    'dsphoto',
    'readera',
    'cityTransit',
    'tripeaks',
    'opentopomap',
    'articleReader',
    'alpiMaps',
    'openMaps',
    'novelWorld',
    'locationPrivacy',
    'classicalBuilding',
    'baiduMap',
    'mapsgo',
    'arctRuler',
    'yahooJapanCalendar',
    'arctCamera',
    'arctSummit',
    'arctAlltrails',
    'arctHikingBoot',
    'arctLevels',
    'terraria',
    'nordlockerCloud',
    'nothingButWallpapers',
    'googleDocsAlt',
  ].includes(name)

  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox={isPostalCode ? '0 0 50 50' : is48Icon ? '0 0 48 48' : isometric ? '0 0 64 64' : '0 0 24 24'}
      fill="none"
      stroke={isFilledIcon ? 'none' : 'currentColor'}
      strokeWidth={isFilledIcon ? 0 : is48Icon ? 1.6 : isometric ? 1.4 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name] || (isometric ? isometricIcons.mountain : lineIcons.landscape)}
    </svg>
  )
}

export default Icon
