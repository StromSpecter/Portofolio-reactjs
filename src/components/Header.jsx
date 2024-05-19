
import { motion } from "framer-motion";
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiReactjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import poto from "../assets/poto.jpeg";

const text = "Front-End React Developer 👋🏻";

const textVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedText = () => (
  <motion.h1
    className="mb-2 text-5xl font-bold text-gray-900"
    variants={textVariant}
    initial="hidden"
    animate="visible"
  >
    {text.split("").map((char, index) => (
      <motion.span key={index} variants={letterVariant}>
        {char}
      </motion.span>
    ))}
  </motion.h1>
);

const Header = () => {
  return (
    <div id="home" className="flex flex-row items-center min-h-screen mt-16 md:mt-0">
      <div className="container flex flex-col items-start justify-center gap-5 p-4 mx-auto">
        <div className="flex flex-col items-center gap-10 px-0 lg:px-64 md:flex-row">
          <div className="flex flex-col text-center md:text-left">
            <AnimatedText />
            <p className="mb-4 text-sm text-gray-700">
              Hi, I`m M. Fadillah Rasyid. A passionate Front-End React Developer
              based in Depok, Indonesia 📍
            </p>
            <div className="flex flex-row justify-center gap-4 text-3xl md:justify-start">
              <a href="https://www.linkedin.com/in/muhammad-fadillah-rasyid/">
                <FaLinkedin className="text-[#0077B5]" />
              </a>
              <a href="https://github.com/StromSpecter">
                <FaGithubSquare className="text-[#181717]" />
              </a>
              <a href="https://www.instagram.com/fadillrsyd">
                <FaInstagramSquare className="text-[#E1306C]" />
              </a>
            </div>
          </div>
          <img
            src={poto}
            alt="Profile"
            className="object-cover rounded-full h-80 w-80"
          />
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-4 lg:px-64 md:justify-start">
          <p className="text-lg font-semibold">
            Tech Stack
            <span className="ml-4 mr-0 text-gray-300 md:mr-4 text-normal">|</span>
          </p>
          <div className="flex flex-row gap-4 text-3xl">
            <RiHtml5Fill className="text-[#E34C26]" />
            <RiCss3Fill className="text-[#264de4]" />
            <RiJavascriptFill className="text-[#f0db4f]" />
            <RiReactjsFill className="text-[#61dafb]" />
            <RiTailwindCssFill className="text-[#38b2ac]" />
            <SiFramer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
