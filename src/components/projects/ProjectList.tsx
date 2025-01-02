"use client";

import { FindAllProjects } from "@/app/(main)/projects/actions";
import { useEffect, useState } from "react";
import UpdateProject from "./UpdateProject";
import ProjectDelete from "./DeletePRoject";

interface Project {
  id: string;
  projectName: string;
  projectLink: string;
  bio: string;
  createdAt: Date;
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

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
      <div className="max-h-full min-h-full">
        <ul>
          {filteredProjects.map((project) => (
            <li
              className="my-1 rounded-md bg-card p-1 shadow-xl"
              key={project.id}
            >
              <div className="flex flex-col">
                <h1 className="my-2 text-center font-bold">
                  Name: {project.projectName}
                </h1>
                <h2 className="my-2 text-center font-bold">
                  Link: {project.projectLink}
                </h2>
                <h3 className="my-2 text-center font-bold">
                  Bio: {project.bio}
                </h3>
              </div>
              <UpdateProject projectId={project.id} projectName={project.projectName} projectLink={project.projectLink} bio={project.bio} />
              <ProjectDelete projectId={project.id} />
            </li>
          ))}
        </ul>
        
      </div>
    </>
  );
}
