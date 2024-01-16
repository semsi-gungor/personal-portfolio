"use client";

import ProjectPage from "@/components/ProjectPage";
import { getProjectById } from "@/data/projects-data";
import { notFound, useSearchParams } from "next/navigation";
import { FC } from "react";

const Page: FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) notFound();

  const project = getProjectById(id);

  if (!project) notFound();

  return <ProjectPage project={project} />;
};

export default Page;
