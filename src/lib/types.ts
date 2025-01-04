import { Prisma } from "@prisma/client";

export const userDataSelect = {
  id: true,
  username: true,
} satisfies Prisma.UserSelect;

export function getUserDataSelect(loggedInUserId: true) {
  return {
    id: true,
    username: true,
    createdAt: true,
  } satisfies Prisma.UserSelect;
}

export type UserData = Prisma.UserGetPayload<{
  select: ReturnType<typeof getUserDataSelect>;
}>;

export function getProjectDataSelect() {
  return {
    id: true,
    projectName: true,
    projectLink: true,
    githubLink: true,
    bio: true,
  } satisfies Prisma.ProjectSelect;
}

export type ProjectData = Prisma.ProjectGetPayload<{
  select: ReturnType<typeof getProjectDataSelect>;
}>;
