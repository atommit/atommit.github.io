/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <motion.nav
      key="logo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="mx-auto flex w-full max-w-7xl flex-col overflow-auto py-6 px-3 text-[#332854] lg:flex-row lg:items-center lg:justify-between"
    >
      {/* Logo and Hamburger Menu */}
      <div className="flex flex-row items-center justify-between">
        <a href="/" className="text-3xl">
          Atommit
        </a>
        <button
          className="cursor-pointer px-3 leading-none outline-none focus:outline-none lg:hidden"
          type="button"
          aria-label="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#332b54"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`${
          navbarOpen ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-row lg:items-center lg:space-x-12`}
      >
        <a
          href="#about"
          className="py-2 lg:py-0 text-lg font-medium text-[#332854] hover:text-[#665b91]"
        >
          About
        </a>
        <a
          href="#solution"
          className="py-2 lg:py-0 text-lg font-medium text-[#332854] hover:text-[#665b91]"
        >
          Solution
        </a>
        <a
          href="#team"
          className="py-2 lg:py-0 text-lg font-medium text-[#332854] hover:text-[#665b91]"
        >
          Team
        </a>
        <a
          href="#documents"
          className="py-2 lg:py-0 text-lg font-medium text-[#332854] hover:text-[#665b91]"
        >
          Documents
        </a>
        <a
          href="/"
          className="py-2 lg:py-0 rounded-full bg-[#332854] text-white text-lg font-medium py-2.5 px-8 decoration-2 underline-offset-2 hover:bg-[#665b91]"
        >
          Login
        </a>
      </div>
    </motion.nav>
  );
}
