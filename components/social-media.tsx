import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";
const socials = [
  {
    title: "linkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/chibuzor-otuokwu",
  },
  {
    title: "twitter",
    icon: Twitter,
    url: "https://twitter.com/pseudoeazy",
  },
  {
    title: "github",
    icon: Github,
    url: "https://github.com/pseudoeazy",
  },
];
export default function SocialMedia() {
  return (
    <div className="grid grid-cols-3 gap-x-2 my-10">
      {socials.map((social) => (
        <a
          key={social.url}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          title={social.title}
        >
          {<social.icon className="w-10 h-10 text-tetiary-100" />}
        </a>
      ))}
    </div>
  );
}
