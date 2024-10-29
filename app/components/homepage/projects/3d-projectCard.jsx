"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../helper/ui/3d-card";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

export function ThreeDCard(props) {
  return (
    <CardContainer className="inter-var">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={995}
        className="absolute top-0 -z-10"
      />
      <GlowCard
        key={props.id}
        identifier={`experience-${props.id}`}
      >
        <CardBody className="relative group/card px-20 hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#100d28] border-[#25213b] w-auto sm:w-[30rem] h-auto rounded-xl p-8 border">
          <CardItem
            as="h1"
            translateZ="50"
            className="text-xl font-semibold font-poppins green-gradient-text capitalize md:text-2xl group-hover:text-black text-gradient"
          >
            {props.title}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={props.image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="font-poppins text-white font-bold text-sm max-w-sm mt-2"
          >
            {props.content}
          </CardItem>
          <div className="mt-2 text-gray-500 capitalize  group-hover:text-gray-900">
            <CardItem translateZ="60" className="flex sm:flex-row mt-5">
              <CardItem
                as="p"
                translateZ="70"
                className="font-poppins font-normal text-dimWhite mr-2 text-pink-600"
              >
                Tech Stack
              </CardItem>
              {props.stack.map((tech, index) => (
                <CardItem
                  translateZ="100"
                  key={tech.id}
                  index={index}
                  className="text-dimWhite mr-5 text-[20px] hover:text-white tooltip"
                >
                  {React.createElement(tech.icon)}
                  <span class="tooltiptext">{tech.name}</span>
                </CardItem>
              ))}
            </CardItem>
          </div>

          <CardItem
            translateZ="80"
            className="flex justify-between items-center mt-5"
          >
            <div className="flex -mx-2">
              {props.github ? (
                <Link className="mr-5" href={props.github} target="_blank">
                  <AiFillGithub
                    size="2rem"
                    className="text-white mr-1 hover:text-teal-700"
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
          </CardItem>
        </CardBody>
      </GlowCard>
    </CardContainer>
  );
}
