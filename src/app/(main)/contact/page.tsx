"use client";

import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"; 

export default function Contact() {
  return (
    <>
      <TooltipProvider>
        <div className="max-h-full min-h-screen min-w-full max-w-full p-3">
          <div className="m-10">
            <div className="my-40">
              <div className="flex justify-center">
                <h1 className="text-center text-3xl font-bold">Contact</h1>
              </div>
              <div className="m-1 flex justify-center px-3">
                <p className="my-3 text-lg">
                  Please feel free to reach out for anything.
                </p>
              </div>
              <div className="m-1 flex justify-around px-3 py-11">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="mailto:Clyderitchie@yahoo.com">
                      <Mail />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Send an Email</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://github.com/Clyderitchie" target="_blank">
                      <GithubIcon />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>GitHub Profile</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.linkedin.com/in/clyde-ritchie-536a12219/"
                      target="_blank"
                    >
                      <LinkedinIcon />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn Profile</TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </>
  );
}
