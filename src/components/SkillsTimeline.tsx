"use client";

import { Code, Monitor, GitBranch, Database, Brain, Shield, Cpu, ChartBar } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const skillsData = [
  {
    id: 1,
    title: "Web Development",
    date: "Frontend & Backend",
    content: "Expert in React, Next.js, Node.js, Angular, and ASP.NET for building modern web applications.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Business Analysis",
    date: "Requirements & Process",
    content: "Skilled in requirements gathering, process optimization, and business process modeling.",
    category: "Analysis",
    icon: ChartBar,
    relatedIds: [1, 3, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Data Science",
    date: "AI/ML & Analytics",
    content: "Proficient in data analysis, machine learning, and artificial intelligence implementation.",
    category: "Data",
    icon: Brain,
    relatedIds: [2, 4, 5],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Cybersecurity",
    date: "Security & Protection",
    content: "Experienced in implementing security measures, threat analysis, and secure coding practices.",
    category: "Security",
    icon: Shield,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 5,
    title: "Robotics & AI",
    date: "Automation & ML",
    content: "Knowledge in robotics programming, automation, and machine learning integration.",
    category: "Robotics",
    icon: Cpu,
    relatedIds: [3, 4],
    status: "in-progress" as const,
    energy: 75,
  },
];

export function SkillsTimelineDemo() {
  return (
    <div className="w-full h-[600px]">
      <RadialOrbitalTimeline timelineData={skillsData} />
    </div>
  );
}

export default SkillsTimelineDemo; 