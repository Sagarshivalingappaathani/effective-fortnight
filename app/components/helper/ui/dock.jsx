import React from "react";
import { FloatingDock } from './floating-dock';
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandLeetcode,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Sagarshivalingappaathani",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/sagar-athani-4a5931251/",
    },
    {
      title: "LeetCode",
      icon: (
        <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/sagar0418/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Sagar0418",
    },
  ];

  return (
    <FloatingDock
      desktopClassName="z-100"
      items={links}
    />
  );
}
