import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}} 
    className="flex flex-col relative h-screen text-center md:left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
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

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          About <span className="underline decoration-[#F7AB0A]/50">me!</span>
        </h4>
        <p className="text-base">
          When I started my journey as a professional, I never saw myself coding
          for a living. My experience with computers started very early, learning how to change the Windows Wallpaper before I
          learned how to speak fluently. Through all my life, I always had a
          computer and I always enjoyed spending time in it. Whether it was to
          play in it, to read articles about things I found interesting, or just
          to mess with the software and the settings a little bit. When I turned
          18, I started working as a delivery driver, then as a catering chef,
          then as a restaurant chef, and finally as a restaurant server, where I
          had my last position at the age of 24. Everting changed for me, but
          not suddenly. I slowly started to realize that being a server was not
          I wanted for me, even I was making as much, or maybe even more, than
          some freshly graduates web developers earn, I just didn&apos;t see
          myself continuing down that road for another 6 years. My passion for
          computers is such, that in my ignorance and innocence I never though
          about the fact that I could actually make a living out of working in a
          computer. My reflexive thoughts started in January 2021, and by March
          I had saved enough money to stop working for a couple months, got a
          loan from my bank, and enrolled into IronHack. Now that I&apos;m a
          graduate, I see that my journey has been perfectly crafted for me to
          develop the same skillset I get my strength from when I program.
          I&apos;m a very hard worker, passionate about what I do, and have the
          ability to adapt to any environment and pick things up fast. Now, I
          can proudly say, and feel, that programming is and will not be my job,
          but my lifestyle.
        </p>
      </div>
    </motion.div>
  );
}
