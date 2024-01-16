import ProjectPage from "@/components/ProjectPage";
import { getIds, getProjectById } from "@/data/projects-data";
import { notFound } from "next/navigation";
import { FC } from "react";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  const ids = getIds();

  return ids.map((id) => ({ projectId: id }));
}

type PageParams = { params: { projectId: string } };

const Page: FC<PageParams> = ({ params }) => {
  const project = getProjectById(params.projectId);

  if (!project) notFound();

  return <ProjectPage project={project} />;
};

export default Page;
