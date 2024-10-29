"use client";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from "/public/lottie/contact.json";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from '../../helper/ui/bg-beams';

function ContactSection() {
  return (
    <BackgroundBeamsWithCollision>
      <div
        id="contact"
        className="relative z-50 border-t mt-12 lg:mt-24 border-[#25213b] pb-10"
      >
        <Image
          src="/section.svg"
          alt="Hero"
          width={1572}
          height={750}
          className="absolute top-0 -z-10"
        />
        <motion.div
          className="transition-colors duration-300 transform"
          whileInView={{ y: [-30, 0], opacity: [0, 1] }}
          transition={{ duration: 0.75 }}
        >
          <div className="container mx-auto flex flex-col items-center mb-5">
            <div className="flex justify-center my-5 lg:py-8">
              <div className="flex items-center">
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                  Contact
                </span>
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              </div>
            </div>

            <div className="mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                <div className="flex justify-center items-start">
                  <div className="scale-150 px-5 mt-4 sm:mt-2">
                    <AnimationLottie animationPath={lottieFile} />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 md:gap-8 font-poppins mt-4">
                  <div className="flex items-center bg-white rounded-lg p-3 hover:bg-gray-200 shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                    <MdAlternateEmail className="text-orange-500 text-lg mr-2" />
                    <p className="text-sm text-gray-700 mr-4 font-bold">
                      sagarathani0418@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-3 hover:bg-gray-200 shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                    <IoMdCall className="text-green-500 text-lg mr-2" />
                    <p className="text-sm font-bold text-gray-700 mr-4">
                      +91-7975208724
                    </p>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-3 hover:bg-gray-200 shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                    <CiLocationOn className="text-red-700 text-lg mr-2" />
                    <p className="text-sm text-gray-700 font-bold">
                      Belagavi, Karnataka
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 md:gap-8 font-poppins">
                  <div className="flex items-center bg-white rounded-lg p-3 hover:bg-gray-200 shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                    <FaInstagram className="text-pink-500 text-lg mr-2" />
                    <Link href="https://www.instagram.com/_sagar0418/" passHref>
                      <p className="text-sm text-gray-700 font-bold cursor-pointer">
                        _sagar0418
                      </p>
                    </Link>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-3 hover:bg-gray-200 shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                    <FaLinkedin className="text-blue-500 text-lg mr-2" />
                    <Link
                      href="https://www.linkedin.com/in/sagar-athani-4a5931251/"
                      passHref
                    >
                      <p className="text-sm text-gray-700 font-bold cursor-pointer">
                        Sagar Athani
                      </p>
                    </Link>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-3 hover:bg-gray-200 shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                    <FaGithub className="text-black text-lg mr-2" />
                    <Link
                      href="https://github.com/Sagarshivalingappaathani"
                      passHref
                    >
                      <p className="text-sm text-gray-700 font-bold cursor-pointer">
                        Sagarshivalingappaathani
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default ContactSection;
