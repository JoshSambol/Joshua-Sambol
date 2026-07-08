// Global site content: identity, bio, socials, tech.
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconBrandReact,
  IconBrandPython,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandSwift,
} from '@tabler/icons-react';

export const identity = {
  name: 'Joshua Sambol',
  role: 'Web Developer & iOS App Developer',
  tagline: 'I build bright, playful, genuinely useful things for the web.',
  intro:
    "I'm a full-stack developer who loves turning ideas into interactive apps people actually enjoy using. I specialize in fast, friendly front-ends, backed by real full-stack experience, and I take projects from first sketch all the way to launch.",
  email: 'josh@joshuasambol.com',
};

export const socialLinks = [
  { icon: IconBrandGithub, label: 'GitHub', link: 'https://github.com/joshsambol', username: '@joshsambol' },
  { icon: IconBrandInstagram, label: 'Instagram', link: 'https://instagram.com/josh.sambol', username: '@josh.sambol' },
  { icon: IconBrandLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/joshua-sambol-a62a93387/', username: 'Joshua Sambol' },
  { icon: IconMail, label: 'Email', link: 'mailto:josh@joshuasambol.com', username: 'josh@joshuasambol.com' },
];

export const techStack = [
  { icon: IconBrandHtml5, label: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { icon: IconBrandCss3, label: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: IconBrandJavascript, label: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { icon: IconBrandReact, label: 'React', link: 'https://react.dev/' },
  { icon: IconBrandPython, label: 'Python', link: 'https://docs.python.org/3/' },
  { icon: IconBrandSwift, label: 'Swift', link: 'https://docs.swift.org/swift-book/' },
];

// Palette keys used to color-block cards. Cycled through in order.
export const palette = ['lavender', 'coral', 'mint', 'sky', 'butter', 'pink'];
