"use client";

import { useSession } from "@/app/(main)/SessionProvider";
import { useTheme } from "next-themes";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import UpdateProject from "./projects/UpdateProject";
import ProjectDelete from "./projects/DeleteProject";

interface MenuButtonProps {
    className?: string;
    projectId: string;
    projectName: string;
    projectLink: string;
    githubLink: string;
    bio: string;
}

export default function MenuButton({ className, projectId, projectName, projectLink, bio }: MenuButtonProps) {
    const { user } = useSession();
    const { theme, setTheme } = useTheme();
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const toggleTooltip = () => {
        setTooltipVisible((prev) => !prev);
    };

    if (!user) {
        return null;
    }

    return (
        <div className="relative inline-block">
            <button onClick={toggleTooltip} className={`p-2 ${className}`}>
                <Ellipsis />
            </button>

            {/* Tooltip */}
            {tooltipVisible && (
                <div className=" flex items-baseline justify-around absolute right-0 mt-2 w-40 rounded-lg bg-gray-800 text-white p-3 shadow-lg z-10">
                  <UpdateProject projectId={projectId} projectName={""} githubLink={""} projectLink={""} bio={""} />
                  <ProjectDelete projectId={projectId} />
                </div>
            )}
        </div>
    );
}
