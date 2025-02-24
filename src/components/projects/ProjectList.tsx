"use client";

import { FindAllProjects } from "@/app/(main)/projects/actions";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Link2 } from "lucide-react";
import { ProjectData } from "@/lib/types";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { validateRequest } from "@/auth";
import MenuButton from "../MenuButton";

export default function ProjectList() {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const everyProject = await FindAllProjects();
        setProjects(everyProject);
      } catch (error) {
        console.error("Failed to fetch projects");
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) =>
    project.projectName.toLocaleLowerCase(),
  );

  return (
    <>
      <TooltipProvider>
        <div className="max-h-full min-h-full">
          <ul>
            {filteredProjects.map((project) => (
              <li
                className="m-10 my-1 rounded-sm bg-card p-1 shadow-2xl"
                key={project.id}
              >
                <div className="flex flex-col">
                  <div>
                    <h1 className="my-2 py-2 text-center font-bold">
                      <strong className="py-2 text-3xl">
                        {project.projectName}
                      </strong>
                    </h1>
                  </div>
                  <h3 className="my-2 text-center font-bold">{project.bio}</h3>
                </div>

                <div className="flex justify-around px-5 py-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center"
                      >
                        <Link2 />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Project Link</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center"
                      >
                        <Github />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>GitHub Link</TooltipContent>
                  </Tooltip>
                  <MenuButton
                    projectId={project.id}
                    projectName={project.projectName}
                    projectLink={project.projectLink}
                    githubLink={project.githubLink}
                    bio={project.bio}
                  />
                  {/* <UpdateProject
                    projectId={project.id}
                    projectName={project.projectName}
                    projectLink={project.projectLink}
                    githubLink={project.githubLink}
                    bio={project.bio}
                  />
                  <ProjectDelete projectId={project.id} /> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </TooltipProvider>
    </>
  );
}
