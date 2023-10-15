import { v4 as uuidv4 } from "uuid";
import Work from "@/types/work";

function generateSlug(title: string) {
  return title.toLowerCase().split(" ").join("-");
}

const works: Work[] = [
  {
    id: uuidv4(),
    title: "Up Vote Landing page",
    overview: `Upvote is a Figma Design converted into a landing page using modern web tools.`,
    description: `
    A professional landing page template that offers a sleek and responsive design, 
    ensuring a seamless user experience. With customizable elements, 
    it caters to diverse industries and campaigns.`,
    imageURL: "/upvote/cover.png",
    stack: ["Next.js", "TailwindCSS", "Sass"],
    images: [
      "/upvote/cover.png",
      "/upvote/tablet.png",
      "/upvote/3.png",
      "/upvote/mobile.png",
    ],
    slug: generateSlug("Up Vote Landing page"),
    liveURL: `https://up-vote.vercel.app/`,
  },
  {
    id: uuidv4(),
    title: "Eazy Pomodoro extension",
    overview: `This tool helps you manage your work sessions effectively using the proven Pomodoro Technique.`,
    description: `. This intuitive timer keeps you on track, breaking your work into manageable intervals. Customize session lengths, track your progress, and enjoy seamless integration with your Chrome browser.`,
    imageURL: "/pomodoro/cover.png",
    stack: ["React", "Sass", "Chrome APIs"],
    images: [
      "/pomodoro/cover.png",
      "/pomodoro/ready.png",
      "/pomodoro/note.png",
      "/pomodoro/restart.png",
    ],
    slug: generateSlug("Eazy Pomodoro extension"),
    liveURL: `https://chrome.google.com/webstore/detail/eazy-pomodoro-extension/clkdaombdjliohankgpmkdhhbecfngoe`,
  },
  {
    id: uuidv4(),
    title: "Whitby Taxi and Limo Service ",
    overview: `Converison of HTML Template to a WordPress Theme with several custom plugins.`,
    description: `
    Leveraging WordPress's flexibility, the theme will offer user-friendly booking forms, customizable options, and responsive design. The conversion will enhance user engagement and streamline booking processes, ensuring a smooth and efficient experience for travelers seeking reliable airport pickup services.`,
    imageURL: "/whitbylimo/cover.png",
    stack: ["PHP", "JavaScript", "HTML", "CSS", "WordPress"],
    images: [
      "/whitbylimo/cover.png",
      "/whitbylimo/fleet.png",
      "/whitbylimo/services.png",
    ],
    slug: generateSlug("Whitby Taxi and Limo Service "),
    liveURL: `https://whitbylimo.ca/`,
  },
  {
    id: uuidv4(),
    title: "Salesprit",
    overview: `A cutting-edge Next.js POS Template for smooth online shopping experience.`,
    description: `
    Salesprit is a Next.js POS Ecommerce Template that revolutionizes the online shopping experience. It is a seven pages template will serve as a versatile foundation for building robust and feature-rich e-commerce websites with seamless user experiences and top-notch performance.`,
    imageURL: "/salesprit/desktop.png",
    images: [
      "/salesprit/cover.png",
      "/salesprit/desktop.png",
      "/salesprit/mobile.png",
      "/salesprit/mobile-2.png",
    ],
    stack: ["Next.js", "TailwindCSS"],
    slug: generateSlug("Salesprit"),
    liveURL: `https://salesprit.vercel.app/`,
  },
  {
    id: uuidv4(),
    title: "Save from Web to Cloud",
    overview: `A chrome extension that saves files from the internet, converts different file formats on your computer and saves them to the cloud`,
    description: ``,
    imageURL: "/storage.png",
    slug: generateSlug("Save from Web to Cloud"),
    liveURL: `#`,
    stack: ["React", "Firebase", "Chrome", "TailwindCSS", "Chrome"],
    images: [],
  },
  {
    id: uuidv4(),
    title: "Hanna Solar",
    overview: `Transformed and HTML Template into a Next.js Application. Hanna Solar is an headless CMS, powered by WordPress API and Custom API built with Nest.js`,
    description: ``,
    imageURL: "/solar/cover.png",
    slug: generateSlug("Hanna Solar"),
    liveURL: "https://www.hannasolar.com/",
    images: ["/solar/cover.png", "/solar/lights.png", "/solar/sell.png"],
    stack: ["Next.js", "Nest.js", "MySQL", "WordPress", "PHP", "TailwindCSS"],
  },
  {
    id: uuidv4(),
    title: "Airport Taxi Service Barrie",
    overview: `Convert an existing HTML template into a dynamic WordPress theme tailored for airport pickup services.`,
    description: ``,
    imageURL: "/barrier/cover.png",
    slug: generateSlug("Airport Taxi Service Barrie"),
    liveURL: `https://airporttaxiservicebarrie.com`,
    stack: ["PHP", "JavaScript", "HTML", "CSS", "WordPress"],
    images: ["/barrier/cover.png", "/barrier/info.png"],
  },

  {
    id: uuidv4(),
    title: "Rogue Landing Page",
    overview: `This template can be used as your next Web landing page project.`,
    description: `This modern website UI, is designed specifically for co-working spaces, providing a seamless online experience for individuals and businesses alike.`,
    imageURL: "/rogue/cover.png",
    slug: generateSlug("Rogue Landing Page"),
    liveURL: `https://pseudoeazy.github.io/rogue/`,
    stack: ["HTML", "Sass", "CSS"],
    images: [
      "/rogue/cover.png",
      "/rogue/service.png",
      "/rogue/services.png",
      "/rogue/exp.png",
    ],
  },
  {
    id: uuidv4(),
    title: "Reservation WordPress Plugin ",
    overview: `Wordpress booking reservation plugin.The project is a user-centric plugin, seamlessly integrated into WordPress sites, empowering travelers to reserve pickups with utmost convenience. Through an intuitive interface, users can specify pickup details, and receive instant confirmations. `,
    description: ``,
    imageURL: "/reserve/cover.png",
    slug: generateSlug("Reservation WordPress Plugin "),
    liveURL: `https://airportlimoancaster.com/`,
    stack: ["PHP", "JavaScript", "HTML", "CSS", "WordPress"],
    images: ["/reserve/cover.png", "/reserve/cabs.png", "/reserve/locate.png"],
  },
  {
    id: uuidv4(),
    title: "Courticelimo",
    overview: `WordPress Powered Site done with an HTML Template for Airport Pickup`,
    description: ``,
    imageURL: "/court/cover.png",
    slug: generateSlug("Courticelimo"),
    liveURL: "https://courticelimo.com",
    stack: ["PHP", "JavaScript", "HTML", "CSS", "WordPress"],
    images: ["/court/cover.png", "/court/cta.png"],
  },
];

export default works;
