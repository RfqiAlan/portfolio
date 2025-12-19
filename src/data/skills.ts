import { Skill, SocialLink, NavItem } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Framer Motion", level: 85, category: "frontend" },
  { name: "Three.js", level: 75, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Python", level: 82, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 78, category: "backend" },
  { name: "GraphQL", level: 75, category: "backend" },
  
  // Tools
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 78, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  tagline: "I build exceptional digital experiences",
  bio: "I'm a passionate full-stack developer with 5+ years of experience creating beautiful, functional, and user-centered digital experiences. I specialize in React, Next.js, and Node.js, and I love turning complex problems into simple, elegant solutions.",
  email: "hello@johndoe.dev",
  location: "San Francisco, CA",
  resumeUrl: "/resume.pdf",
};
