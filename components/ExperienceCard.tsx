import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ajracsdqu5gmyfl6nai0"
        alt="IronHack"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Web Developing Bootcamp</h4>
        <p className="font-bold text-xl mt-1">IRONHACK</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
            alt="JavaScript"
          />
          <img
            className="https://m.media-amazon.com/images/I/B18zCiKmq+S._AC_CLa%7C2140%2C2000%7CA1NvDI2ljsL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UF1000,1000_QL80_.png"
            alt="NodeJS"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"
            alt="Alt"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"
            alt="Alt"
          />
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p>Started work... -Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
