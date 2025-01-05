"use client";

import { Tooltip, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { GithubIcon, LinkedinIcon, Mail, MapPinIcon, Phone } from "lucide-react";
import Link from "next/link";

export default function Resume() {
  return (
    <>
    <TooltipProvider>
    <div className="max-h-full min-h-screen min-w-full max-w-full p-3">
        <div className="m-10">
          <div className="my-5">
            <div className="flex justify-center">
              <h1 className="text-center text-3xl font-bold">Clyde Ritchie</h1>
            </div>
            <div className="m-1 flex justify-between px-3 py-5">
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
          <div className="my-5">
            <div className="flex justify-center">
              <h2 className="text-center text-2xl font-bold">Experience</h2>
            </div>
            <div className="m-1 flex-col justify-start px-3">
              <p className="my-3">
                <strong>
                  Customer Servicer Specialist 2023-Present Umpqua Bank
                  Lakewood, WA
                </strong>
              </p>
              <ul className="my-4 px-5">
                <li>
                  Developed problem-solving skills to satisfy clients,
                  collaborated with the team to boost referrals, and earned a
                  promotion to trainer for new Customer Service Specialists.
                </li>
              </ul>
            </div>
            <div className="m-1 flex-col justify-start px-3">
              <p className="my-3">
                <strong>Head Cashier 2020-2023 Lowe's Puylluap, WA</strong>
              </p>
              <ul className="my-4 px-5">
                <li>
                  Led a team of 5-7 individuals to achieve store goals,
                  coordinated with management to exceed customer interaction
                  standards, and transitioned into the role of store trainer for
                  all Front End operations.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-5">
            <div className="flex justify-center">
              <h3 className="text-center text-2xl font-bold">Education</h3>
            </div>
            <div className="m-1 flex-col justify-start px-3">
              <p className="my-3">
                <strong>Current student 2025 - present</strong>
              </p>
              <ul className="my-4 px-5">
                <li>Pierce Collage</li>
              </ul>
            </div>
            <div className="m-1 flex-col justify-start px-3">
              <p className="my-3">
                <strong>Certificate, Full Stack Web Development</strong>
              </p>
              <ul className="my-4 px-5">
                <li>University of California Los Angeles Extension</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
      
    </>
  );
}
