import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div
      className="flex w-full flex-col items-center justify-center space-y-6 px-4 text-center md:px-6"
      style={{ minHeight: "calc(100vh - 100px)" }}
    >
      <motion.h1
        key="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="text-4xl lg:text-7xl"
      >
        We atomize commits
        <br className="hidden lg:flex" /> that tangle.
      </motion.h1>
      <motion.p
        key="description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        className="text-md basiersquare-medium lg:text-xl"
      >
        Streamline your development with Atommit
      </motion.p>
      <motion.a
        href="#solution"
        key="cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
        className="inline-flex items-center rounded-lg bg-[#332b54] py-3 px-4 text-white hover:bg-[#46336d]"
      >
        Atom it{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </motion.a>
    </div>
  );
}
