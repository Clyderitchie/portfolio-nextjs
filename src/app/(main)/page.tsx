"use client";

import NavMenu from "@/components/NavMenu";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <main className="flex h-full w-full min-w-0 gap-5">
        <div className={`w-full min-w-0 space-y-5 ${fadeIn ? "fade-in" : ""}`}>
          <h1 className="text-center text-3xl">
            Welcome! Dive in and explore a world of innovative projects, coding
            adventures, and the passion that fuels Clyde's journey in the tech
            realm.
          </h1>
        </div>
      </main>
      <style jsx>{`
        .fade-in {
          animation: fadeInAnimation 3s ease-in;
        }

        @keyframes fadeInAnimation {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
