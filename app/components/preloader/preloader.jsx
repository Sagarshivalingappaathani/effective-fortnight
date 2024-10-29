"use client";
import { motion } from "framer-motion";
import AnimationLottie from "../helper/animation-lottie";
import loader from "/public/lottie/hero.json";


const Loading = () => {
    return(
        <motion.div
            id="loading"
            className="w-[100vw] h-[100vh] flex justify-center items-center"
            initial={{ scale: 1.0, opacity: 0.25 }}
            animate={{ scale: 2.0, opacity: 0.75 }}
            transition={{
                yoyo: Infinity,
                duration: 1.0,
                ease: "easeIn",
            }}
          >
              <AnimationLottie animationPath={loader} />
          </motion.div>
        )
   
};

export default Loading;