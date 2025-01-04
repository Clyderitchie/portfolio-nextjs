import { string, z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Only letters, numbers, - and _ allowed",
  ),
  password: requiredString.min(8, "Must be at least 8 characters"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;

export const createProjectSchema = z.object({
  projectName: requiredString,
  projectLink: requiredString,
  bio: requiredString,
  githubLink: requiredString,
});

export type CreateProjectValues = z.infer<typeof createProjectSchema>;

export const updateProjectSchema = z.object({
  projectId: z.string(),
  projectName: z.string(),
  projectLink: z.string(),
  bio: z.string(),
  githubLink: z.string(),
});

export type UpdateProjectValues = z.infer<typeof updateProjectSchema>;
