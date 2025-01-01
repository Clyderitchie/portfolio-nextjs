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
