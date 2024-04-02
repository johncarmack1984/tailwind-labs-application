"use client";

import { ModeToggle } from "@/components/theme-toggle";
import TopBarNav from "@/components/topbar-nav";
import Breadcrumbs from "../components/breadcrumbs";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="mx-auto border-b-[1px]">
        <div className="bg-background sticky top-0 mx-auto flex [max-width:80em] items-center justify-between p-2 shadow-md">
          <TopBarNav />
          <ModeToggle />
        </div>
      </header>
      <Breadcrumbs />
      <main className="mx-auto [max-width:70em]">{children}</main>
    </>
  );
}
