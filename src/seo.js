export const SITE_URL = "https://divyanshjitpure.in";

export const DEFAULT_SEO = {
  title: "Divyansh Jitpure | Full-Stack Web Developer",
  description:
    "Portfolio of Divyansh Jitpure, a full-stack web developer building scalable, user-friendly web apps with MERN and Next.js.",
  image: `${SITE_URL}/port.png`,
  type: "website",
};

export const HOME_SEO = {
  ...DEFAULT_SEO,
  path: "/",
  keywords:
    "Divyansh Jitpure, Full Stack Developer, MERN Stack Developer, React Developer, Next.js, Portfolio",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Divyansh Jitpure",
    url: SITE_URL,
    sameAs: [
      "https://github.com/Divyansh-Jitpure",
      "https://www.linkedin.com/in/divyansh-jitpure/",
      "https://twitter.com/DivyanshJitpure",
    ],
    jobTitle: "Full-Stack Web Developer",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
};

export const PROJECTS_SEO = {
  title: "Projects | Divyansh Jitpure",
  description:
    "Explore projects built by Divyansh Jitpure, including MERN applications, React tools, and production-ready web experiences.",
  path: "/projects",
  image: `${SITE_URL}/port.png`,
  type: "website",
  keywords:
    "Divyansh Jitpure projects, React projects, MERN projects, web developer portfolio projects",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects by Divyansh Jitpure",
    url: `${SITE_URL}/projects`,
    isPartOf: {
      "@type": "WebSite",
      name: "Divyansh Jitpure Portfolio",
      url: SITE_URL,
    },
  },
};
