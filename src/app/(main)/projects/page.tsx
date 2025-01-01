"use client";

import CreateProject from "@/components/projects/CreateNewProject";
import { useState } from "react";

export default function Projects(){
    const [formData, setFormData] = useState({
        projectName: "",
        projectLink: "",
        bio: "" 
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    return (
        <>
        {/* <h1>Projects Page</h1> */}
        <CreateProject 
        formData={formData}
        handleChange={handleChange}
        isSubmitting={false}
        setIsSubmitting={() => {}}/>
        </>
    )
}