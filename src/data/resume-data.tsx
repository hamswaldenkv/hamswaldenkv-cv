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
    "Full Stack Engineer focused on building digital products & customer experiences",
  summary:
    "Full time React developer and React Native Experienced developer. I focus on mobile front-end development with React-Native framework and web front-end development with React.js/Redux/next.js, JavaScript, Typescript, and other JavaScript frameworks & libraries. I have over 3 years of experience in working remotely with startups all around the world.",
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
      company: "Freelance",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Senior Full Stack Developer (SAAS)",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Working currently on various SAAS projects : Ride sharing saas, Talent recruiting saas, Video Streaming Plateform (Vod, Live & Fast), Payment saas platform, collection of parking taxes & tolls",
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
        "Worked as fullstack developer on creating a talent recruiting saas platform",
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
        "Developed and managed all regional marketing digital campaigns. Developed creative concepts and designs for a variety of projects, including websites, prints collateral",
    },
    {
      company: "ProxyTech Congo",
      link: "https://www.proxytech.com",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: NSNLogo,
      start: "2016",
      end: "2019",
      description: "Creating and testing a mobile photo printing application",
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
        "Official website of Direction Générale de la Comptabilité Et Trésor Public - Congo Kinshasa",
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
      description: "VOD & Live video streaming plateform",
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
        "Kagho Chauffeur is an app that connects drivers with more passengers for a safe ride anywhere, anytime and boost the drivers'earnings",
      logo: JarockiMeLogo,
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.kagho.drive&hl=fr&gl=US",
      },
    },
    {
      title: "ITM Africa Recrutement",
      techStack: ["Side Project", "Next.js", "Laraval"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "recrutement.itmafrica.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Yoka",
      techStack: ["Side Project", "Next.js", "React", "GO", "Node.js"],
      description: "Music distribution & streaming platform",
      logo: BarepapersLogo,
      link: {
        label: "yoka.cd",
        href: "https://yoka.cd/",
      },
    },
    {
      title: "TaxePay.cd",
      techStack: ["Side Project", "TypeScript", "Next.js", "PostgreSql"],
      description:
        "Collection and security of parking taxes and tollsMusic distribution & streaming platform",
      logo: YearProgressLogo,
      link: {
        label: "taxespay.cd",
        href: "https://taxespay-cd.vercel.app",
      },
    },
    {
      title: "Pay Inside",
      techStack: ["Lead React Developer", "Next.js", "Python", "Node.js"],
      description:
        "collect payments from your customers in complete security and also benefit from a traceability and reporting system for all your collections",
      logo: AmbitLogo,
    },
  ],
} as const;
