import React from "react";
import shrutiai from "../assets/portfolio/shrutiai.png";
import freechat from "../assets/portfolio/freechat.png";
import akshara from "../assets/portfolio/akshara.png";
import tamasha from "../assets/portfolio/tamasha.png";
import codecraft from "../assets/portfolio/codecraft.png";
import codeguru from "../assets/portfolio/codeguru.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: shrutiai,
      demo_link : "https://shrutiai.vercel.app/",
      code_link : "https://github.com/DevyManish/Shruti-AI",
    },
    {
      id: 2,
      src: freechat,
      demo_link : "https://freeechat.vercel.app/",
      code_link : "https://github.com/DevyManish/FreeChat",
    },
    {
      id: 3,
      src: tamasha,
      demo_link : "#",
      code_link : "#",
    },
    {
      id: 4,
      src: akshara,
      demo_link : "https://akshara.vercel.app/",
      code_link : "https://github.com/DevyManish/Akshara",
    },
    {
      id: 5,
      src: codecraft,
      demo_link : "https://codecraftjisu.tech/",
      code_link : "https://github.com/DevyManish/SkillX-Event",
    },
    {
      id: 6,
      src: codeguru,
      demo_link : "https://codegru.vercel.app/",
      code_link : "https://github.com/DevyManish/CodeGru",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo_link, code_link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo_link}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                    Demo
                  </button>
                </a>
                <a href={code_link}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
