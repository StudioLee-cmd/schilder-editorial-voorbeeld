/* ===================================================================
   SCHILDER (KwastPro Voorbeeld) — editorial-bold customization
   =================================================================== */

export const config = {
  name: "KwastPro Voorbeeld",
  tagline: "Kleur die blijft, vakwerk dat straalt",

  nav: [
    { label: "Over ons", href: "#intro" },
    { label: "Diensten", href: "#features" },
    { label: "Projecten", href: "#gallery" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    bg: "#1A1612",
    backgroundImage: "/images/hero.jpg",
    foregroundImage: "",
    logoImage: "",
    subtitle: "Schildersbedrijf in Amsterdam. Buitenschilderwerk, binnenschilderwerk en monumentaal — met oog voor elk detail.",
  },

  intro: {
    text: [
      "Wij geven uw woning de",
      "uitstraling die het verdient.",
      "Van kleuradvies tot de",
      "laatste kwaststreek — alles uit eigen hand.",
    ],
    accentWords: ["uitstraling", "kleuradvies", "eigen hand"],
    sideImage: "/images/craft.jpg",
  },

  showcase: {
    title: "500+",
    subtitle: "Gevels en interieurs geschilderd",
    description:
      "Van monumentale grachtenpanden tot moderne nieuwbouw. Elk project met dezelfde precisie, dezelfde zorg en hetzelfde vaste team.",
    image: "/images/project1.jpg",
  },

  banner: {
    bg: "#2C5F4A",
    video: "",
    lines: [
      { text: "Al meer dan", style: "italic" as const },
      { text: "15 jaar", style: "display" as const },
      { text: "schildersvakwerk in", style: "italic" as const },
      { text: "Amsterdam", style: "display" as const },
    ],
  },

  columns: {
    title: "Onze schildersdiensten",
    items: [
      {
        name: "Buitenschilderwerk",
        color: "#1A1612",
        textColor: "#F4ECDD",
        image: "/images/project1.jpg",
        description:
          "Bescherming en uitstraling voor uw gevel, kozijnen en houtwerk. Wij werken met de beste buitenverven voor een resultaat dat jarenlang mooi blijft.",
        cta: "Meer over buitenschilderwerk",
        href: "#features",
      },
      {
        name: "Binnenschilderwerk",
        color: "#2C5F4A",
        textColor: "#F4ECDD",
        image: "/images/project2.jpg",
        description:
          "Perfecte wanden, plafonds en houtwerk. Strak latex, klassiek hoogglans of een unieke accentmuur — wij adviseren en voeren uit.",
        cta: "Meer over binnenschilderwerk",
        href: "#features",
      },
      {
        name: "Monumentaal schilderwerk",
        color: "#C9985A",
        textColor: "#1A1612",
        image: "/images/kitchen.jpg",
        description:
          "Ervaring met rijksmonumenten en historische panden. Wij werken volgens de richtlijnen van Monumentenzorg met authentieke materialen en technieken.",
        cta: "Meer over monumentaal",
        href: "#features",
      },
    ],
  },

  visionCards: [
    {
      index: "01",
      title: "Lakwerk & houtrot",
      description:
        "Kozijnen, deuren en trappen in perfecte staat. Wij herstellen houtrot en brengen duurzame laklagen aan die jarenlang beschermen.",
      image: "/images/detail.jpg",
    },
    {
      index: "02",
      title: "Behangen",
      description:
        "Van vliesbehang tot luxe designbehang. Strakke naden, geen luchtbellen — behangwerk waar u jaren plezier van heeft.",
      image: "/images/team.jpg",
    },
    {
      index: "03",
      title: "Kleuradvies",
      description:
        "Twijfelt u over de juiste kleur? Onze kleuradviseur komt bij u langs met stalen en geeft persoonlijk advies dat past bij uw interieur en wensen.",
      image: "/images/about.jpg",
    },
    {
      index: "04",
      title: "5 jaar garantie",
      description:
        "Op al ons buitenschilderwerk geven wij 5 jaar garantie. Wij staan achter onze materialen, onze vakmensen en ons resultaat.",
      image: "/images/carousel.jpg",
    },
  ],

  customize: {
    title: "Maatwerk voor uw woning",
    highlightWord: "woning",
    video: "",
    label: "Vraag een gratis kleuradvies aan",
  },

  team: [
    {
      name: "Dennis Kuijper",
      role: "Oprichter & Meester-schilder",
      bio: "15 jaar ervaring. Persoonlijk betrokken bij elk project.",
      image: "/images/team-1.png",
    },
    {
      name: "Jeroen Bakker",
      role: "Voorman Buitenschilderwerk",
      bio: "Specialist in gevels, kozijnen en weerbestendig schilderwerk.",
      image: "/images/team-2.png",
    },
    {
      name: "Patrick de Groot",
      role: "Monumentaal Specialist",
      bio: "Gecertificeerd voor rijksmonumenten en historisch herstel.",
      image: "/images/team-3.png",
    },
    {
      name: "Milan Visser",
      role: "Behanger & Interieur Schilder",
      bio: "Oog voor detail bij binnenschilderwerk en designbehang.",
      image: "/images/team-4.png",
    },
  ],

  faq: [
    {
      question: "Wat kost het schilderen van een woning?",
      answer:
        "De kosten hangen af van de grootte, staat van het houtwerk en het type verf. Een gemiddelde tussenwoning buitenschilderwerk begint vanaf €3.500. Wij komen altijd gratis langs voor een exacte offerte op maat.",
    },
    {
      question: "Hoe lang duurt een schilderproject?",
      answer:
        "Binnenschilderwerk van een gemiddelde woning duurt 3 tot 5 dagen. Compleet buitenschilderwerk inclusief voorbereiding rekenen wij 1 tot 2 weken, afhankelijk van het weer en de staat van het houtwerk.",
    },
    {
      question: "Werken jullie ook aan monumentale panden?",
      answer:
        "Ja, wij hebben ruime ervaring met rijksmonumenten en gemeentelijke monumenten in Amsterdam. Wij werken volgens de richtlijnen van Monumentenzorg en gebruiken waar nodig authentieke materialen zoals lijnolieverf.",
    },
    {
      question: "Welke verf gebruiken jullie?",
      answer:
        "Wij werken standaard met Sikkens, Sigma en Wijzonol — topmerken met bewezen duurzaamheid. Voor monumentaal werk gebruiken wij ook traditionele verfsoorten. Wij adviseren altijd de beste optie voor uw situatie.",
    },
    {
      question: "Geven jullie garantie op het schilderwerk?",
      answer:
        "Ja. Op buitenschilderwerk geven wij 5 jaar garantie, op binnenschilderwerk 3 jaar. Mocht er binnen die periode iets mis zijn, dan lossen wij het kosteloos op.",
    },
  ],

  footer: {
    cta: "Vraag een gratis offerte aan",
    ctaHref: "https://calendly.com/tim-studiolee",
    links: [
      { label: "info@kwastpro.nl", href: "mailto:info@kwastpro.nl" },
      { label: "StudioLee.nl", href: "https://www.studiolee.nl" },
    ],
    credit: "Speciaal gemaakt voor schilders door StudioLee.nl",
  },
};

export type SiteConfig = typeof config;
