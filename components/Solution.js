/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Solution() {
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

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 0.4,
        duration: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        delay: 0.4,
        duration: 0.6,
      },
    },
  };

  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div
      className="mx-auto mt-[8rem] mb-[8rem] max-w-7xl flex flex-col lg:flex-row lg:justify-between lg:items-start lg:mb-[15rem] lg:mt-[15rem]"
      id="solution"
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeIn}
        className="lg:w-1/3"
      >
        <h2 className="text-5xl lg:text-7xl">Solution:</h2>
        <h2 className="text-5xl lg:text-7xl">Atommit</h2>
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={list}
        className="mt-12 grid grid-cols-1 gap-4 text-xl lg:mt-0 lg:w-2/3"
      >
        <motion.div
          variants={item}
          className="rounded-md bg-[#e2e8f0] py-4 px-4"
        >
          <h2>
            Atommit is designed to address the challenges of tangled commits by
            ensuring that every commit follows the single responsibility
            principle. By breaking down complex, multi-purpose commits into
            atomic ones, Atommit improves code clarity and maintainability.
          </h2>
        </motion.div>
        <motion.div
          variants={item}
          className="rounded-md bg-[#e2e8f0] py-4 px-4"
        >
          <h2>
            The tool integrates seamlessly with Visual Studio Code and Git,
            analyzing staged changes to propose atomic commits with clear
            categories like "bug-fix" or "feature." It also generates meaningful
            commit messages and provides developers with an intuitive interface
            to review, modify, or approve these changes.
          </h2>
        </motion.div>
        <motion.div
          variants={item}
          className="rounded-md bg-[#e2e8f0] py-4 px-4"
        >
          <h2>
            Atommit simplifies the commit process, enhances repository quality,
            and boosts development efficiency. By automating tedious tasks, it
            allows developers to focus on writing clean, innovative code while
            maintaining a well-organized project history.
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
}
