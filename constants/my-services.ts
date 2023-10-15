import { Code, Figma, Presentation, ToyBrick } from "lucide-react";

const myServices = [
  {
    icon: Code,
    imageUrl: "web.jpg",
    title: "web development",
    path: "/services#web-dev",
    id: "web-dev",
    desc: `
    My web development services craft bespoke, high-performance websites for your unique needs. I deliver fast, secure, and responsive sites using the latest technology. Whether you seek a new site, revamp, or ongoing maintenance, I ensure a strong online presence, boosting client engagement and business success.`,
  },
  {
    id: "chrome",
    icon: ToyBrick,
    imageUrl: "chrome.jpg",
    title: "chrome extension",
    path: "/services#chrome",
    desc: `
    Elevate your digital presence with Chrome extensions. I create high-performing chrome extensions using cutting-edge technology. Whether you need a new extension, upgrades, or ongoing support.`,
  },
  {
    id: "figma-to-html",
    icon: Figma,
    imageUrl: "figma.jpg",
    title: "Figma To HTML",
    path: "/services#figma-to-html",
    desc: `
    Unlock the potential of your designs with my Figma to HTML service. I transform your Figma prototypes into pixel-perfect, responsive HTML code. I ensure seamless transitions from design to web reality, enhancing your online presence and user experience for better business outcomes.`,
  },
  {
    id: "wordpress",
    icon: Presentation,
    imageUrl: "wordpress.jpg",
    title: "WordPress Plugin",
    path: "/services#wordpress",
    desc: `
    Enhance your WordPress website with my plugin development service. I build custom high-performing plugins using the latest technology. Whether you need a new plugin, upgrades, or ongoing support, I will optimize your WordPress website's functionality, ensuring a seamless user experience and boosting your business success.`,
  },
];

export default myServices;
