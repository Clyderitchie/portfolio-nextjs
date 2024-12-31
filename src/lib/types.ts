import { Prisma } from "@prisma/client";

export const userDataSelect = {
  id: true,
  username: true,
} satisfies Prisma.UserSelect;

export function getUserDataSelect(loggedInUserId: string) {
  return {
    id: true,
    username: true,
    createdAt: true,
  } satisfies Prisma.UserSelect;
}

export type UserData = Prisma.UserGetPayload<{
  select: ReturnType<typeof getUserDataSelect>;
}>;