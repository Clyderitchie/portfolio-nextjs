"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/(main)/Navbar";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showMenuBar, setShowMenuBar] = useState(false);
  useEffect(() => {
    if (pathname.startsWith("/customers/")) {
      setShowMenuBar(true);
    } else {
      setShowMenuBar(false);
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="mx-auto flex w-full max-w-7xl grow items-center justify-center gap-5 p-5">
        {children}
      </div>
    </div>
  );
}
