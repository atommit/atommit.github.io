import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  let easing = [0.6, -0.05, 0.01, 0.99];

  const fadeIn = {
    visible: {
      opacity: 1,
      transition: { delay: 0.4, duration: 0.6, ease: easing },
    },
    hidden: { opacity: 0, transition: { duration: 0.6, ease: easing } },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="mx-auto mt-[8rem] mb-[8rem] flex max-w-7xl lg:mb-[15rem] lg:mt-[15rem]" id="about">
      <motion.p
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeIn}
        className="w-[70rem] text-2xl lg:text-5xl"
      >
        Atommit simplifies software development by untangling complex commits into clear, single-responsibility ones. Integrated with Visual Studio Code and Git, it automates commit organization, enhances repository quality, and streamlines developer workflows.
      </motion.p>
    </div>
  );
}
