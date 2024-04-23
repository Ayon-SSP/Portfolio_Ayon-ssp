module.exports = {
  siteTitle: 'AYON | Software Engineer',
  siteDescription:
    'AYON is a Back End Developer, I Design and develop highly scalable apps and softwares.',
  siteKeywords:
    'AYON KARMAKAR, Ayon-SSP, Backend Engineer, web developer, Python, javascript, girlscript, jodhpur, GDSC, GFG',
  siteUrl: 'https://ayon-ssp-portfolio.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'AYON KARMAKAR',
  location: 'India',
  email: 'ayon.ssp@gmail.com',
  github: 'https://github.com/Ayon-SSP',
  twitterHandle: '@AyonSsp',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Ayon-SSP',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ayon-ssp/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AyonSsp',
    },
    {
      name: 'Leetcode',
      url: 'https://dev.to/ayon_ssp',
    },
    // {
    //   name: 'Leetcode',
    //   url: 'https://leetcode.com/ayon_ssp/',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/ayon_ssp',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
