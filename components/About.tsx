import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        /*
        To stop the image from repeating the animation everytime you enter the section: 
        viewport= {{once: true}} 
        */
        src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/67615260_2535456873184678_8399533795505602560_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=yZoq6FJVv4sAX8EVig8&tn=GHIaRp1iSdqcecnp&_nc_ht=scontent-mia3-2.xx&oh=00_AfBABEAOS5aD8qqiGMuMfhQMIzav2pig2RCEvZOu595cuQ&oe=63ED928A"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w[500px] xl:h-[600px]"
      />
    </div>
  );
}
