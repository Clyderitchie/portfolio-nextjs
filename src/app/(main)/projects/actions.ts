"use server";

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { createProjectSchema } from "@/lib/validations";

export async function NewProject(input: {
  projectName: string;
  projectLink: string;
  bio: string;
}) {
  const { user } = await validateRequest();

  if (!user) throw Error("Unauthorized");

  try {
    const parsedData = createProjectSchema.parse(input);
    const { projectName, projectLink, bio } = parsedData;

    const projectData = {
      projectName,
      projectLink,
      bio,
      createdAt: new Date(),
    };

    const newProject = await prisma.project.create({
      data: projectData,
    });

    console.log("New project created successfully: ", newProject);
    return newProject;
  } catch (error) {
    console.error("Failed to create new project: ", error);
  }
}

export async function FindAllProjects() {
    const { user } = await validateRequest();
    if (!user) throw Error("Unauthorized");

    try {
        const projects = await prisma.project.findMany({
            select: {
                id: true,
                projectName: true,
                projectLink: true,
                bio: true,
            },
        });

        console.log("Found all projects: ", projects);
        return projects;
    } catch (error) {
        console.error("Error FindAllCustomers: ", error);
    }
}