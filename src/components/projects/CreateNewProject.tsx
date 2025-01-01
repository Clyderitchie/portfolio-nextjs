"use client";

import { NewProject } from "@/app/(main)/projects/actions";
import { useSession } from "@/app/(main)/SessionProvider";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";

interface CreateNewProjectProps {
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
    formData,
    handleChange,
    isSubmitting,
    setIsSubmitting,
}: CreateNewProjectProps) {
    const { user } = useSession();
    const router = useRouter();

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
            console.error("Error with creating a project")
        }
    };

    return (
        <>
         <div className="">
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
      </div>
        </>
    )
}