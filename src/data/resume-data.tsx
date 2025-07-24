import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hams KUVELUKA",
  initials: "HAMS",
  location: "Kinshasa, Congo-Kinshasa, CET",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Ingénieur Full Stack axé sur la création de produits numériques et d'expériences client",
  summary:
    "Développeur React à temps plein et développeur expérimenté React Native. Je me concentre sur le développement front-end mobile avec le framework React-Native et le développement front-end web avec React.js/Redux/next.js, JavaScript, Typescript et d'autres frameworks et bibliothèques JavaScript. J'ai plus de 3 ans d'expérience dans le travail à distance avec des startups du monde entier.",
  avatarUrl: "https://avatars.githubusercontent.com/u/11094772?v=4",
  personalWebsiteUrl: "https://hamswaldenkv.vercel.app",
  contact: {
    email: "hamswaldenkv@gmail.com",
    tel: "+243811273503",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/hamswaldenkv",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hamswaldenkv/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/hamswaldenkv",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "ISIPA Matadi",
      degree: "Bachelor's Degree in Managment IT",
      start: "2011",
      end: "2013",
    },
  ],
  work: [
    {
      company: "Hotêl de ville de Kinshasa",
      link: "https://smart-trans.online",
      badges: ["Freelance"],
      title: "Lead IT",
      logo: ParabolLogo,
      start: "2021",
      end: "2025",
      description:
        "Mise en place du système de collecte des recettes de taxes des parkings des biens et parkings de passagers",
    },
    {
      company: "Gouvernement provincial du Kongo Central",
      link: "https://smart-trans.online",
      badges: [],
      title: "Lead IT",
      logo: ParabolLogo,
      start: "2024",
      end: "2025",
      description:
        "Mise en place du système d'identification des motards de la province, livraison des plaques et cartes roses",
    },
    {
      company: "Gouvernement provincial du Kinshasa",
      link: "https://smart-trans.online",
      badges: [],
      title: "Lead IT",
      logo: ParabolLogo,
      start: "2021",
      end: "2025",
      description:
        "Mise en place du système de gestion de livraison des plaques et cartes roses pour motards",
    },
    {
      company: "Freelance",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Senior Full Stack Developer (SAAS)",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Travaille actuellement sur divers projets SAAS : Saas de covoiturage, Recrutement de talents saas, Plateforme de Streaming Vidéo (Vod, Live & Fast), Plateforme saas de paiement, collecte des taxes et péages de stationnement",
    },
    {
      company: "LinksAllen → JobParc.com",
      link: "https://linksallen.com",
      badges: [],
      title: "FullStack Developer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2018",
      description:
        "Travail en tant que développeur fullstack sur la création d'une plateforme Saas de recrutement de talents",
    },
    {
      company: "Havas Africa RDC",
      link: "https://www.havas.fr",
      badges: [],
      title: "Regional Digital Manager",
      logo: JojoMobileLogo,
      start: "2016",
      end: "2018",
      description:
        "Développer et gérer toutes les campagnes marketing numériques régionales. Développement de concepts créatifs et de conceptions pour une variété de projets, y compris des sites Web, applications mobiles et des documents imprimés.",
    },
    {
      company: "ProxyTech Congo",
      link: "https://www.proxytech.com",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: NSNLogo,
      start: "2016",
      end: "2019",
      description:
        "Création et test d'une application mobile d'impression de photos",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Reac-Native",
    "React/Next.js/Remix",
    "Node.js",
    "GO",
    "PHP",
    "Python",
    "Wordpress Development",
    "Amazon Web Services",
    "Google Cloud Platform",
    "GraphQL",
    "Relay",
    "WebRTC",
    "Digital Marketing",
  ],
  projects: [
    {
      title: "DGTCP.cd",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description:
        "Site officiel de la Direction Générale de la Comptabilité Et Trésor Public - Congo Kinshasa",
      logo: ConsultlyLogo,
      link: {
        label: "dgtcp.cd",
        href: "https://dgtcp.cd/",
      },
    },
    {
      title: "Congarts TV",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Android",
        "iOS",
        "Node js",
      ],
      description: "Plateforme de streaming vidéo VOD et Live",
      logo: MonitoLogo,
      link: {
        label: "congarts.tv",
        href: "https://congarts.tv/",
      },
    },
    {
      title: "Kagho Drive",
      techStack: [
        "Side Project",
        "React-Native",
        "Next.js",
        "MDX",
        "PHP",
        "Laravel",
      ],
      description:
        "Kagho Drive est une application qui connecte les conducteurs avec plus de passagers pour un trajet en toute sécurité n'importe où et à tout moment et augmente les revenus des conducteurs",
      logo: JarockiMeLogo,
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.kagho.drive&hl=fr&gl=US",
      },
    },
    {
      title: "ITM Africa Recrutement",
      techStack: ["Side Project", "Next.js", "Laraval"],
      description: "Portail de récrutement en ligne",
      logo: Minimal,
      link: {
        label: "recrutement.itmafrica.com",
        href: "https://recrutement.itmafrica.com/",
      },
    },
    {
      title: "Yoka",
      techStack: ["Side Project", "Next.js", "React", "GO", "Node.js"],
      description: "Plateforme de distribution et de streaming musical",
      logo: BarepapersLogo,
      link: {
        label: "yoka.cd",
        href: "https://yoka.cd/",
      },
    },
    {
      title: "TaxePay.cd",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "PostgreSql",
        "Android",
      ],
      description:
        "Collectez et sécurisez des taxes de stationnement et bénéficiez également d'un système de traçabilité et de reporting pour toutes vos collectes pour le gouvernement provincial",
      logo: YearProgressLogo,
      link: {
        label: "taxespay.cd",
        href: "https://taxespay-cd.vercel.app",
      },
    },
    {
      title: "Ekonzostream.com",
      techStack: [
        "Lead React Developer",
        "Next.js",
        "Python",
        "Node.js",
        "PostgreSql",
        "React.js",
        "React-Native",
      ],
      description:
        "Ekonzostream est une plateforme de streaming et de divertissement qui rapproche les artistes et leurs fans à travers des contenus originaux et dans la meilleure qualité audio disponible",
      logo: AmbitLogo,
      link: {
        label: "ekonzostream.com",
        href: "https://ekonzostream.com",
      },
    },
  ],
} as const;
