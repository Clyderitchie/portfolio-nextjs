"use client";

import { NewProject } from "@/app/(main)/projects/actions";
import { useSession } from "@/app/(main)/SessionProvider";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import CreateButton from "../CreateButton";
import { useState } from "react";
import { Button } from "../ui/button";
import { CirclePlus } from "lucide-react";

interface CreateNewProjectProps {
  className?: string;
  formData: {
    projectName: string;
    projectLink: string;
    bio: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
  setIsSubmitting: (isSubmitting: boolean) => void;
}

export default function CreateProject({
  className,
  formData,
  handleChange,
  isSubmitting,
  setIsSubmitting,
}: CreateNewProjectProps) {
  const { user } = useSession();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const projectData = {
      projectName: formData.projectName,
      projectLink: formData.projectLink,
      bio: formData.bio,
    };

    try {
      const newProject = await NewProject(projectData);
      console.log("New project created: ", newProject);
      router.push(`/projects`);
    } catch (error) {
      console.error("Error with creating a project");
    } finally {
      setIsSubmitting(false);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <CirclePlus
        // variant="ghost"
        className={className}
        // title="New Card"
        onClick={() => setIsModalOpen(true)}
      />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-center text-2xl">New Project Information:</h2>
            <div>
              <Input
                name="projectName"
                placeholder="Project Name"
                value={formData.projectName}
                onChange={handleChange}
                className="my-7 min-w-full"
              />
              <Input
                name="projectLink"
                placeholder="Project Link"
                value={formData.projectLink}
                onChange={handleChange}
                className="my-7 min-w-full"
              />
              <Input
                name="bio"
                placeholder="bio"
                value={formData.bio}
                onChange={handleChange}
                className="my-7 min-w-full"
              />
            </div>
            <button
              type="button"
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
