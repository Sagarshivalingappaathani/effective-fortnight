"use client";
import React from "react";
import { projects } from "@/utils/data/projects-data";
import Image from "next/image";
import { ThreeDCard } from "./3d-projectCard";
import GlowCard from "../../helper/glow-card";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={995}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center mt-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 mt-4 md:mt-16 lg:grid-cols-2">
          {projects.map((project, index) => (
              <ThreeDCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
