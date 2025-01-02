"use client";

import { UpdateProject as updateProjectAction } from "@/app/(main)/projects/actions";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

interface UpdateProjectProps {
  className?: string;
  projectId: string;
  projectName: string;
  projectLink: string;
  bio: string;
}

export default function UpdateProject({
  className,
  projectId,
  projectName,
  projectLink,
  bio,
}: UpdateProjectProps) {
  const [formData, setFormData] = useState({
    projectId,
    projectName,
    projectLink,
    bio,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updateProjectData = {
      projectId: formData.projectId,
      projectName: formData.projectName,
      projectLink: formData.projectLink,
      bio: formData.bio,
    };

    try {
      const updatedProject = await updateProjectAction(updateProjectData);
      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error with updating the project");
    }
  };

  return (
    <>
      <Pencil className={className} onClick={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Update Project</h2>
            <form onSubmit={handleSubmit}>
              <div className="my-2">
                <label className="block text-black">Project Name</label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div className="my-2">
                <label className="block text-black">Project Link</label>
                <input
                  type="text"
                  name="projectLink"
                  value={formData.projectLink}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <div className="my-2">
                <label className="block text-black">Bio</label>
                <input
                  type="text"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2"
                />
              </div>
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
