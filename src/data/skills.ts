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

export const techArsenal = {
  frontend: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "Framer Motion", icon: "framer" },
    { name: "Three.js", icon: "threejs" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Python", icon: "python" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "GraphQL", icon: "graphql" },
    { name: "Redis", icon: "redis" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "Docker", icon: "docker" },
    { name: "Figma", icon: "figma" },
    { name: "VS Code", icon: "vscode" },
    { name: "Vercel", icon: "vercel" },
    { name: "AWS", icon: "aws" },
  ],
};

export const achievements = [
  {
    title: "AWS Solutions Architect",
    description: "AWS Certified Solutions Architect Associate",
    fullDescription: "Demonstrated expertise in designing distributed systems on AWS. This certification validates the ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS.",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "/certs/cert1.png", // Ganti dengan foto sertifikat kamu
    color: "#f97316",
  },
  {
    title: "Meta Frontend Developer",
    description: "Professional Certificate",
    fullDescription: "Completed the Meta Frontend Developer Professional Certificate program, mastering React, JavaScript, and modern frontend development practices.",
    issuer: "Meta (Coursera)",
    date: "2023",
    image: "/certs/cert2.png", // Ganti dengan foto sertifikat kamu
    color: "#0668E1",
  },
  {
    title: "Hackathon Winner",
    description: "1st Place - TechCrunch Disrupt",
    fullDescription: "Won first place at TechCrunch Disrupt 2023 Hackathon with an innovative AI-powered productivity tool. Competed against 200+ teams from around the world.",
    issuer: "TechCrunch",
    date: "2023",
    image: "/certs/cert3.png", // Ganti dengan foto sertifikat kamu
    color: "#22c55e",
  },
  {
    title: "Google Cloud Certified",
    description: "Associate Cloud Engineer",
    fullDescription: "Certified in deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud Platform.",
    issuer: "Google Cloud",
    date: "2022",
    image: "/certs/cert4.png", // Ganti dengan foto sertifikat kamu
    color: "#4285f4",
  },
];

export const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading development of microservices architecture, mentoring junior developers, and implementing CI/CD pipelines.",
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description: "Built and maintained multiple client-facing applications, improved performance by 40%, and integrated third-party APIs.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "GraphQL"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "New York, NY",
    period: "2018 - 2020",
    description: "Developed responsive web applications, collaborated with designers, and implemented pixel-perfect UI components.",
    technologies: ["React", "JavaScript", "SCSS", "Figma"],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Rifqi Alan Maulana",
  title: "Full Stack Developer",
  tagline: "I build exceptional digital experiences",
  bio: "I'm a passionate full-stack developer with 5+ years of experience creating beautiful, functional, and user-centered digital experiences. I specialize in React, Next.js, and Node.js, and I love turning complex problems into simple, elegant solutions.",
  email: "maulanara24h@student.unhas.ac.id",
  location: "Makassar, Indonesia",
  resumeUrl: "/resume.pdf",
};
