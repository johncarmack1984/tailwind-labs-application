"use client";

import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { Home } from "lucide-react";

import { titleCase } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Breadcrumbs() {
  const route = useSelectedLayoutSegment();
  const title = titleCase(route);

  return route ? (
    <Breadcrumb className="mx-auto w-full [max-width:80em] pt-4 px-10">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="flex items-center gap-2" href="/">
            <Home size={14} />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem key={route}>
          <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
            {title}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ) : null;
}
