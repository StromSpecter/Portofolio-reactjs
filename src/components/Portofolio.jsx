import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiReactjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiArrowRightCircleFill,
  RiArrowLeftCircleFill,
} from "react-icons/ri";

import porto1 from "../assets/porto1.jpeg";
import porto2 from "../assets/porto2.jpeg";
import porto3 from "../assets/porto3.jpeg";
import porto4 from "../assets/porto4.jpeg";
import porto5 from "../assets/porto5.jpeg";
import porto6 from "../assets/porto6.jpeg";

const Portofolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const portfolio = document.getElementById("portfolio");
      if (portfolio) {
        const top = portfolio.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.9) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  const portfolioData = [
    {
      id: 1,
      kode: ["uiux"],
      images: [porto3, porto4],
      title: "App Starbuck",
      description:
        "Redesign App Starbuck to make it more modern and user-friendly.",
      link: "",
      icon: [<FaFigma key="figma" />],
    },
    {
      id: 2,
      kode: ["ui/ux"],
      images: [porto5, porto6],
      title: "App SaGo",
      description:
        "SaGo is an application developed to assess the sustainability of the sago industry in Riau as part of a dissertation at IPB.",
      link: "",
      icon: [<FaFigma key="figma" />],
    },
    {
      id: 3,
      kode: ["ui/ux", "web developer", "front end developer"],
      images: [porto2],
      title: "Mediqueue",
      description:
        "MediQueue is an application to make it easier for patients who want to consult about their health.",
      link: "https://mediqueue-pearl.vercel.app/ ",
      icon: [
        <FaFigma key="figma" />,
        <RiHtml5Fill key="html" />,
        <RiCss3Fill key="css" />,
        <RiJavascriptFill key="javascript" />,
        <RiReactjsFill key="react" />,
        <RiTailwindCssFill key="tailwind" />,
      ],
    },
    {
      id: 4,
      kode: ["ui/ux", "web developer", "front end developer"],
      images: [porto1],
      title: "BSI Rumah Harum",
      description:
        "To enhance user experience and achieve better outcomes, a redesign process is undertaken for the Rumah Harum Main Waste Bank website.",
      link: "https://docs.google.com/presentation/d/1iW5uHDF_mGBAPG1vwn5YyicerBmX_diXVjzTcYIHpO4/edit#slide=id.g54dda1946d_6_332",
      icon: [
        <FaFigma key="figma" />,
        <RiHtml5Fill key="html" />,
        <RiCss3Fill key="css" />,
        <RiJavascriptFill key="javascript" />,
        <RiReactjsFill key="react" />,
        <RiTailwindCssFill key="tailwind" />,
      ],
    },
  ];

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + 1) % portfolioData[currentImageIndex].images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? portfolioData[currentImageIndex].images.length - 1
        : prevIndex - 1
    );
  };

  return (
    <div
      id="portfolio"
      className="container flex flex-col items-start justify-center gap-5 p-4 mx-auto lg:px-64"
    >
      <p className="text-xl font-bold">Portofolio</p>
      <div className="grid w-full grid-cols-1 gap-4">
        {portfolioData.map((item) => {
          return (
            <motion.div
              key={item.id}
              className={`flex flex-col w-full gap-5 p-5 rounded-3xl cursor-pointer h-fit md:flex-row bg-black text-white`}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: item.id % 2 === 1 ? 300 : -300 },
              }}
              transition={{ duration: 1.0, delay: item.id * 0.5 }}
              onClick={() => {
                if (item.link) {
                  window.open(item.link, "_blank");
                }
              }}
            >
              <div
                className={`flex flex-col order-1 relative w-full h-1/2 md:w-1/2 md:h-full md:order-${
                  item.id % 2 === 1 ? 1 : 2
                }`}
              >
                <img
                  className="object-cover w-full rounded-lg h-fit"
                  src={item.images[currentImageIndex] || item.images[0]}
                  alt="Portfolio"
                />
                {item.images && item.images.length > 1 && (
                  <div className="flex flex-row justify-between gap-4 mt-4">
                    <RiArrowLeftCircleFill
                      className="text-3xl"
                      onClick={handlePrevImage}
                    />
                    <RiArrowRightCircleFill
                      className="text-3xl"
                      onClick={handleNextImage}
                    />
                  </div>
                )}
              </div>
              <div
                className={`order-2 w-full md:order-1 h-1/2 md:w-1/2 md:h-full md:order-${
                  item.id % 2 === 1 ? 2 : 1
                }`}
              >
                <p className="mb-5 text-xl font-bold">{item.title}</p>
                <p className="hidden mb-5 text-justify md:block">
                  {item.description}
                </p>
                <div className="flex flex-row gap-4 text-xl">
                  {item.icon.map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Portofolio;
