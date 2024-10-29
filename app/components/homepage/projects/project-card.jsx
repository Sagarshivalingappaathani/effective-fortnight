import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";
import { projects } from "@/utils/data/projects-data";
import Image from "next/image";
import Link from "next/link";
import GlowCard from "../../helper/glow-card";


export const Project = (props) => {
  return (
    <GlowCard key={props.id} identifier={`experience-${props.id}`}>
      <motion.div
        className="bg-[#101123] px-12 py-8 transition-colors duration-300 transform  rounded-xl"
        whileInView={{ y: [-15, 0], opacity: [0, 1] }}
        transition={{ duration: 0.75 }}
      >
        <div className="flex flex-col sm:-mx-4 sm:flex-row">
          <Image
            className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
            src={props.image}
            alt=""
            width={50}
            height={50}
          />
          <div className="mt-4 sm:mx-4 sm:mt-0">
            <h1 className="text-xl font-semibold font-poppins green-gradient-text capitalize md:text-2xl group-hover:text-white text-gradient">
              {props.title}
            </h1>
            <p className="font-poppins font-normal text-dimWhite mt-3 ">
              Tech Stack
            </p>
            <div className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              <div className="flex sm:flex-row">
                {props.stack.map((tech, index) => (
                  <div
                    key={tech.id}
                    index={index}
                    className="text-dimWhite mr-5 text-[20px] hover:text-teal-200 tooltip"
                  >
                    {React.createElement(tech.icon)}
                    <span class="tooltiptext">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-gray-300 dark:text-gray-300 group-hover:text-gray-300 font-poppins">
          {props.content}
        </div>

        <div className="flex mt-4 -mx-2">
          {props.github ? (
            <Link className="mr-5" href={props.github} target="_blank">
              <AiFillGithub
                size="2rem"
                className="text-white mr-1 hover:text-teal-200"
              ></AiFillGithub>
            </Link>
          ) : (
            ""
          )}
          {props.link ? (
            <Link className="mr-5" href={props.link} target="_blank">
              <BsLink45Deg
                size="2rem"
                className="text-white hover:text-teal-200"
              ></BsLink45Deg>
            </Link>
          ) : (
            ""
          )}
          {props.demo ? (
            <Link className="mr-5" href={props.demo} target="_blank">
              <AiFillYoutube
                size="2rem"
                className="text-white hover:text-teal-200"
              ></AiFillYoutube>
            </Link>
          ) : (
            ""
          )}
        </div>
      </motion.div>
    </GlowCard>
  );
};
