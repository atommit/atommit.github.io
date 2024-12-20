import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  let easing = [0.6, -0.05, 0.01, 0.99];

  const fadeIn = {
    visible: {
      opacity: 1,
      transition: { delay: 0.7, duration: 0.6, ease: easing },
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
    <motion.footer
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn}
      className="mx-auto flex max-w-[100rem] flex-col items-center overflow-auto py-8 px-8 pt-4 md:items-center md:justify-between md:px-6 lg:flex-row lg:justify-between lg:px-8"
    >
      <div>
        <a href="#" className="text-3xl">
          Atommit
        </a>
      </div>
      <div className="lg:text-md my-6 space-x-6 text-sm lg:my-0 lg:space-x-12">
        <p>© 2024 Atommit. All rights reserved.</p>
      </div>
      <div className="flex space-x-12">
        {/* <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#332854"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a> */}
        <a href="https://github.com/atommit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#332854"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.578 0-.285-.011-1.041-.016-2.045-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.333-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.304-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.526 11.526 0 0 1 3.003-.404c1.018.004 2.044.137 3.003.404 2.291-1.553 3.298-1.23 3.298-1.23.653 1.653.242 2.872.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.807 5.623-5.479 5.921.429.37.814 1.103.814 2.222 0 1.606-.014 2.896-.014 3.286 0 .319.217.694.824.576C20.565 21.796 24 17.298 24 12 24 5.373 18.627 0 12 0z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/atommit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#332854"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
          </svg>
        </a>
      </div>
    </motion.footer>
  );
}
