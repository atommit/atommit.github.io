/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DecryptDocument from "./DecryptDocument"

export default function Documents() {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const fadeIn = {
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.4, ease: easing },
    },
    hidden: { opacity: 0, transition: { duration: 0.4, ease: easing } },
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
        staggerChildren: 0.3,
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
    <div className="mx-auto mb-[10rem] max-w-7xl" id="documents">
      <motion.h2
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeIn}
        className="text-3xl lg:text-5xl"
      >
        Documents
      </motion.h2>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={list}
        className="mt-12 flex flex-col space-y-6"
      >
        <motion.a
          variants={item}
          className="flex w-full flex-col rounded-lg bg-[#e2e8f0] py-6 px-6 lg:flex-row lg:items-center"
        >
          <div className="basis-1/2">
            <span className="ogg-medium text-xl text-[#2d2d2d] lg:text-2xl">
              Project Information Form
            </span>
          </div>
          <div className="basis-1/2">
            <span className="plain-regular text-md text-[#93928e] lg:text-lg">
              Available
            </span>
          </div>
          <div>
            <span className="text-md lg:text-lg">
              <DecryptDocument filePath="/documents/ProjectInformationForm.pdf.enc" />
            </span>
          </div>
        </motion.a>
        <motion.a
          variants={item}
          className="flex w-full flex-col rounded-lg bg-[#e2e8f0] py-6 px-6 lg:flex-row lg:items-center"
        >
          <div className="basis-1/2">
            <span className="ogg-medium text-xl text-[#2d2d2d] lg:text-2xl">
              Assessment of Innovation Form
            </span>
          </div>
          <div className="basis-1/2">
            <span className="plain-regular text-md text-[#93928e] lg:text-lg">
              Available
            </span>
          </div>
          <div>
            <span className="text-md lg:text-lg">
              <DecryptDocument filePath="/documents/AssessmentOfInnovationForm.pdf.enc" />
            </span>
          </div>
        </motion.a>
        <motion.a
          variants={item}
          className="flex w-full flex-col rounded-lg bg-[#e2e8f0] py-6 px-6 lg:flex-row lg:items-center"
        >
          <div className="basis-1/2">
            <span className="ogg-medium text-xl text-[#2d2d2d] lg:text-2xl">
              Project Specification Document
            </span>
          </div>
          <div className="basis-1/2">
            <span className="plain-regular text-md text-[#93928e] lg:text-lg">
              Available
            </span>
          </div>
          <div>
            <span className="text-md lg:text-lg">
              <DecryptDocument filePath="/documents/ProjectSpecificationDocument.pdf.enc" />
            </span>
          </div>
        </motion.a>
        <motion.a
          variants={item}
          className="flex w-full flex-col rounded-lg bg-[#e2e8f0] py-6 px-6 lg:flex-row lg:items-center"
        >
          <div className="basis-1/2">
            <span className="ogg-medium text-xl text-[#2d2d2d] lg:text-2xl">
              Analysis and Requirements Report
            </span>
          </div>
          <div className="basis-1/2">
            <span className="plain-regular text-md text-[#93928e] lg:text-lg">
              Not Available
            </span>
          </div>
          <div>
            <span className="text-md lg:text-lg text-gray-400 cursor-not-allowed">
              Download
            </span>

          </div>
        </motion.a>
        <motion.a
          variants={item}
          className="flex w-full flex-col rounded-lg bg-[#e2e8f0] py-6 px-6 lg:flex-row lg:items-center"
        >
          <div className="basis-1/2">
            <span className="ogg-medium text-xl text-[#2d2d2d] lg:text-2xl">
              Presentation and Demo
            </span>
          </div>
          <div className="basis-1/2">
            <span className="plain-regular text-md text-[#93928e] lg:text-lg">
              Not Available
            </span>
          </div>
          <div>
            <span className="text-md lg:text-lg text-gray-400 cursor-not-allowed">
              Download
            </span>
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
}
