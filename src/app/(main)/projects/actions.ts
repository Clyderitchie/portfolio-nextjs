"use server";

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { Project } from "@prisma/client";
import { createProjectSchema, updateProjectSchema } from "@/lib/validations";

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

export async function FindAllProjects(): Promise<Project[]> {
  const { user } = await validateRequest();
  if (!user) throw Error("Unauthorized");

  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        projectName: true,
        projectLink: true,
        bio: true,
        createdAt: true,
      },
    });

    console.log("Found all projects: ", projects);
    return projects;
  } catch (error) {
    console.error("Error FindAllCustomers: ", error);
    return [];
  }
}

export async function UpdateProject(input: {
  projectId: string;
  projectName: string;
  projectLink: string;
  bio: string;
}){
  const { user } = await validateRequest();
  if (!user) throw Error("Unauthorized");

  try {
    const validatedData = updateProjectSchema.parse(input);

    const updateProject = await prisma.project.update({
      where: { id: validatedData.projectId },
      data: {
        projectName: validatedData.projectName,
        projectLink: validatedData.projectLink,
        bio: validatedData.bio,
      },
    });
    console.log("Updated the project");
    return updateProject;
  } catch (error) {
    console.error("Failed to update this project");
  }
}

export async function DeleteProject(projectId: string) {
    const { user } = await validateRequest();
  if (!user) throw Error("Unauthorized");

  try {
    const projectToDelete = await prisma.project.findUnique({
        where: {id: projectId},
    });

    if (!projectToDelete) {
        throw new Error("Project not found");
    }

    await prisma.project.delete({
        where: { id: projectId},
    });
  } catch (error) {
    console.error("Error deleting project")
  }
}