"use client";

import { Code, Cpu, Database, Globe, Layers, Server, Shield, Terminal, Webhook, Wifi } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Frontend",
    date: "Web",
    content: "Expertise in modern frontend frameworks and technologies including Angular, React, and Next.js.",
    category: "Web",
    icon: Globe,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 2,
    title: "Backend",
    date: "Server",
    content: "Proficient in ASP.NET Core, Node.js, and database management systems.",
    category: "Server",
    icon: Server,
    relatedIds: [1, 3, 4],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Data Science",
    date: "Analytics",
    content: "Experience in data analysis, machine learning, and business intelligence.",
    category: "Data",
    icon: Database,
    relatedIds: [1, 2, 4],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Business Analysis",
    date: "Analysis",
    content: "Strong skills in requirements gathering, process improvement, and stakeholder management.",
    category: "Business",
    icon: Terminal,
    relatedIds: [2, 3, 5],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "AI/ML",
    date: "Intelligence",
    content: "Understanding of machine learning concepts, neural networks, and AI implementation.",
    category: "AI",
    icon: Cpu,
    relatedIds: [3, 4],
    status: "in-progress" as const,
    energy: 80,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </>
  );
}

export default {
  RadialOrbitalTimelineDemo,
}; 