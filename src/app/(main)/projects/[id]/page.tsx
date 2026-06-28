import React from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  // Unwrap the params promise (Next.js 16 standard for Server Components)
  const { id } = await params;

  // Find the project matching the id
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

// Generate static params for optimal pre-rendering speed and static export compatibility
export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}
