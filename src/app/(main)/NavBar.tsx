import CreateProject from "@/components/projects/CreateNewProject";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FindAllProjects, UpdateProject } from "./projects/actions";

export default function Navbar() {
    const [formData, setFormData] = useState({
      projectName: "",
      projectLink: "",
      bio: "",
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    return (
      <header className="sticky top-0 z-20 bg-card shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
          <Link href="/" className="text-2xl font-bold text-primary">
            Clyde Ritchie
          </Link>
          <CreateProject
            formData={formData}
            handleChange={handleChange}
            isSubmitting={false}
            setIsSubmitting={() => {}}
          />
        </div>
      </header>
    );
  }