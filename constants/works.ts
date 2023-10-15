import { v4 as uuidv4 } from "uuid";
import Work from "@/types/work";

function generateSlug(title: string) {
  let slug = title.toLowerCase().split(" ").join("-");
  slug = slug + "-" + uuidv4();
  return slug;
}

const works: Work[] = [
  {
    id: 13,
    title: "Eazy Pomodoro extension",
    overview: `A cutting-edge Next.js Ecommerce Template for smooth online shopping experience.`,
    description: ``,
    imageURL: "salesprit.png",
    slug: generateSlug("Eazy Pomodoro extension"),
    liveURL: `https://salesprit.vercel.app/`,
  },
  {
    id: 12,
    title: "Whitby Taxi and Limo Service ",
    overview: `Converison of HTML Template to a WordPress Theme and severl custom plugins.`,
    description: ``,
    imageURL: "whitbylimo.png",
    slug: generateSlug("Whitby Taxi and Limo Service "),
    liveURL: `https://whitbylimo.ca/`,
  },
  {
    id: 11,
    title: "Eazy Ai",
    overview: `Let AI do the hard work for you, image generation, music generation, video generation, ask Ai anything. `,
    description: ``,
    imageURL: "whitbylimo.png",
    slug: generateSlug("Storage Ai"),
    liveURL: `https://whitbylimo.ca/`,
  },
  {
    id: 10,
    title: "Web to Cloud",
    overview: `save files from the internet and convert different file formats on your computer and save to cloud`,
    description: ``,
    imageURL: "whitbylimo.png",
    slug: generateSlug("Web to Cloud"),
    liveURL: `https://whitbylimo.ca/`,
  },
  {
    id: 9,
    title: "Salesprit",
    overview: `A cutting-edge Next.js Ecommerce Template for smooth online shopping experience.`,
    description: ``,
    imageURL: "salesprit.png",
    slug: generateSlug("Salesprit"),
    liveURL: `https://salesprit.vercel.app/`,
  },

  {
    id: 8,
    title: "Hanna Solar",
    overview: `Transformed and HTML Template into a Next.js Application. Hanna Solar is an headless CMS, powered by WordPress API and Custom API built with Nest.js`,
    description: ``,
    imageURL: "hannasolar.png",
    slug: generateSlug("Salesprit"),
    liveURL: "https://www.hannasolar.com/",
  },
  {
    id: 7,
    title: "Ai Template",
    overview: `Transformed and HTML Template into a Next.js Application. Hanna Solar is an headless CMS, powered by WordPress API and Custom API built with Nest.js`,
    description: ``,
    imageURL: "hannasolar.png",
    slug: generateSlug("Salesprit"),
    liveURL: "https://www.hannasolar.com/",
  },
  {
    id: 6,
    title: " Airport Taxi Service Barrie",
    overview: `Transformed an existing HTML template into a dynamic WordPress theme tailored for airport pickup services.`,
    description: ``,
    imageURL: "airporttaxiservicebarrie.png",
    slug: generateSlug(" Airport Taxi Service Barrie"),
    liveURL: `https://airporttaxiservicebarrie.com`,
  },
  {
    id: 5,
    title: " Modern Landing page",
    overview: `Figma to HTML`,
    description: ``,
    imageURL: "airporttaxiservicebarrie.png",
    slug: generateSlug(" Modern Landing page"),
    liveURL: `https://airporttaxiservicebarrie.com`,
  },
  {
    id: 4,
    title: "template",
    overview: `Built a custom plugin that harmonizes with diverse WordPress themes, ensuring visual consistency and optimal performance`,
    description: ``,
    imageURL: "airportlimoancaster.png",
    slug: generateSlug("template"),
    liveURL: `https://airportlimoancaster.com/`,
  },
  {
    id: 3,
    title: "Modern Template ",
    overview: `From Figma to Next.js Template`,
    description: ``,
    imageURL: "airportlimoancaster.png",
    slug: generateSlug("Modern Template"),
    liveURL: `https://airportlimoancaster.com/`,
  },
  {
    id: 2,
    title: "Courticelimo",
    overview: `WordPress Powered Site done with an HTML Template for Airport Pickup`,
    description: ``,
    imageURL: "courticelimo.png",
    slug: generateSlug("Courticelimo"),
    liveURL: "https://courticelimo.com",
  },
  {
    id: 1,
    title: "Gosheny",
    overview: `A dropshipping Platform built with Next.js and Nest.js as designed from Figma`,
    description: ``,
    imageURL: "gosheny.png",
    slug: generateSlug("Courticelimo"),
    liveURL: "https://gosheny.co",
  },
];

export default works;
