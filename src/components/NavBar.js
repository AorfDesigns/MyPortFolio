import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';

const MotionLink = motion(Link);
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from './Icons';
import { motion } from 'framer-motion';

import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[2px] inline-block bg-green-500 absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light  ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full mb-4 px-32 py-8 font-medium  items-center justify-between dark:text-lightm flex  relative z-20 lg:px-16 md:px-12 sm:px-8  lg:flex-row-reverse dark:text-light text-dark ">
      <button
        className=" flex-col justify-center items-center p-1.5 hidden lg:flex "
        onClick={handleClick}
      >
        <span
          className={`bg-dark  transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm  ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5  rounded-sm my-0.5 ${
            isOpen ? 'w-0 ' : 'opacity-100 w-6'
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm  ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <Logo display={'lg:flex 2xl:hidden fullxl:hidden'} />

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="m-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://x.com/heisabdulrahman"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 dark:fill-light"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/AorfDesigns"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 "
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/abdulrahman-aminu-b648041ba/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 "
          >
            <LinkedInIcon />
          </motion.a>
         
          {/* Coming Soon */}
          {/* <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3   "
          >
            <DribbbleIcon />
          </motion.a> */}
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={` ml-3 flex items-center justify-center rounded-full p-1
                ${
                  mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
                }
                `}
          >
            {mode === 'dark' ? (
              <SunIcon className={'max-w-15 max-h-15 fill-dark'} />
            ) : (
              <MoonIcon className={'max-w-15 max-h-15 fill-dark'} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          className=" transition-all[0.5s]  w-[100vw] h-[100%] fixed top-1/2 left-1/2 -translate-x-1/2 z-50 -translate-y-1/2  bg-dark/50 "
          onClick={handleClick}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0, x: '-50% ', y: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] max-h-[74%] gap-6 flex flex-col  items-center fixed top-1/2 left-1/2 -translate-x-1/2 z-50 -translate-y-1/2 bg-dark/40 dark:bg-light/10 dark:backdrop-blur rounded-lg p-4  backdrop-blur-md "
          >
            <nav className="flex items-center justify-center flex-col ">
              <CustomMobileLink
                href="/"
                title="Home"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projects"
                className=""
                toggle={handleClick}
              />
              
            </nav>
            <nav className="flex items-center justify-center flex-wrap mt-2">
              <motion.a
                href="https://twitter.com/obadea0"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1 fill-light dark:fill-dark"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href="https://github.com/obadea"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/obadea/"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <LinkedInIcon />
              </motion.a>
              
              {/* Dribble Coming soon */}
              {/* <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1 "
            >
              <DribbbleIcon />
            </motion.a> */}

              <button
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                className={`sm:mx-1 ml-3 flex items-center justify-center rounded-full p-1
    ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
    `}
              >
                {mode === 'dark' ? (
                  <SunIcon className={' lg:w-10 lg:h-10 fill-dark'} />
                ) : (
                  <MoonIcon className={'lg:w-8 lg:h-8 fill-dark'} />
                )}
              </button>
            </nav>
          </motion.div>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo display={'lg:hidden 2xl:flex fullxl:flex'} />
      </div>
    </header>
  );
};

export default NavBar;
