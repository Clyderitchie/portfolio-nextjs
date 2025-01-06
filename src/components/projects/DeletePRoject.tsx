"use client";

import { DeleteProjectAction } from "@/app/(main)/projects/actions";
import { useSession } from "@/app/(main)/SessionProvider";
import { Trash2 } from "lucide-react";
import { useState } from "react";

interface DeleteProjectProps {
  projectId: string;
}

export default function DeleteProject({ projectId }: DeleteProjectProps) {
  const { user } = useSession();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    if (!projectId) {
      return;
    }

    setIsDeleting(true);

    try {
      await DeleteProjectAction(projectId);
      alert("Project was deleted");
      window.location.reload();
    } catch (error) {
      console.error("Error with deleting the project");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <>
      <Trash2 onClick={handleDelete}/>
    </>
  );
}
