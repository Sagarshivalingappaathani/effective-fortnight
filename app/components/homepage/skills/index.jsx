"use client";
import { motion } from "framer-motion";
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
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
        className="absolute top-0 left-0 -z-10"
      />
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <motion.div
        className="transition-colors duration-300 transform"
        whileInView={{ y: [-30, 0], opacity: [0, 1] }}
        transition={{ duration: 0.75 }}
      >
        <div className="w-full my-12">
          <div className="w-full my-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
            {skillsData.map((skill, id) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center transition-all duration-500  relative hover:scale-[1.15] cursor-pointer"
              >
                <div className="w-full  shadow-none shadow-gray-500 transition-all duration-500">
                  <div className="flex justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={50}
                        height={50}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className=" text-sm sm:text-lg font-poppins">{skill}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
