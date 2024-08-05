"use client"
import Image from "next/image";
import "./styles.scss";
import { syne } from "@/app/ui/fonts";
import { Header } from "./ui/Header";
import Hero from "./ui/Hero";
import WhatWeDo from "./ui/WhatWeDo";
import Clients from "./ui/Clients";
import Title from "./ui/Title";
import Quote from "./ui/Quote";
import Statistics from "./ui/Statistics";
import LatestNews from "./ui/LatestNews";
import Team from "./ui/Team";
import Footer from "./ui/Footer";
import NewsBanner from "./ui/BlogsBanner";
import Projects from "./ui/Services";
import Services from "./ui/Services";
import "@/app/styles.scss"
import projImg from "@/public/images/projImg.png"
import svgImg from "@/public/squares.svg"

import React, { useRef, useState } from 'react';
import Slider from "./ui/Slider";
import Button from "./ui/Button";
import ScrollButton from "./ui/ScrollButton";

export default function Home() {
  const syneFont = syne.className;

  const services = [
    {
      image: "https://www.freepik.com/images",
      title: "Website Design",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
      category: "web design"
    },
    {
      image: "https://www.freepik.com/images",
      title: "Website Design",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
      category: "web design"
    },
    {
      image: "https://www.freepik.com/images",
      title: "Website Design",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
      category: "web design"
    },
    {
      image: "https://www.freepik.com/images",
      title: "Website Design",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
      category: "web design"
    },
    {
      image: "https://www.freepik.com/images",
      title: "Website Design",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
      category: "web design"
    },
    {
      image: "https://www.freepik.com/images",
      title: "Website Design",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
      category: "web design"
    }
  ]

  return (
    <main className="home">
      {/* Got to Top btn */}
      <ScrollButton />
      {/*End Got to Top btn */}

      {/* <!--Start Background Animation Body--> */}
      {/* <div className="area">
        <ul className="circles">
          <li className=" !hidden md:!block"></li>
          <li></li>
          <li></li>
          <li className=" !hidden md:!block"></li>
          <li></li>
          <li className=" !hidden md:!block"></li>
          <li className=" !hidden md:!block"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */}

      {/* <!--End Background Animation Body--> */}
      <div className="absolute bottom-0 left-0 w-[40%] -z-10 opacity-50">
        <Image alt="" src={svgImg} className="text-black"></Image>
      </div>
      <div className="absolute top-1/4 right-0 w-[40%] -z-10 opacity-50">
        <Image alt="" src={svgImg} className="text-black"></Image>
      </div>
      <div className="container px-4 md:px-14 mx-auto">
        {/* Hero Section */}
        <section className="relative">
          {/* <div aria-hidden="true"
            className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 -z-10">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-blue-700"></div>

            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
          </div> */}
          <div className="flex home-hero justify-center items-center ">
            <div className="mx-auto  flex justify-center sm:px-6  lg:px-8">
              <div className="text-center ">
                <h1
                  className="text-4xl font-bold tracking-tight text-gray-900 bg-white sm:text-5xl md:text-7xl ">
                  <span className="block xl:inline">
                    <span className="mb-1 block">Beaucoup de choix</span>
                    Mais un seul choix gagnant
                  </span>
                  <div className="mt-2 bg-white">
                    <span className="relative mt-3 whitespace-nowrap text-[--primary_color]"><svg aria-hidden="true" viewBox="0 0 418 42"
                      className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-purple-400"
                      preserveAspectRatio="none">
                      <path
                        d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                      </path>
                    </svg>
                      <span className="relative text-5xl md:text-7xl lg:text-8xl">Nous</span>
                    </span>
                  </div>
                </h1>
                <p className="mx-auto mt-3 max-w-2xl  md:text-lg text-gray-500 sm:mt-5 md:mt-8">
                  Notre mission est simple : donner plus de sens à la communication de nos clients, leur offrir une visibilité accrue et booster leurs ventes.
                </p>
                <div className="mt-5 sm:mt-8 flex justify-center">
                  <div className="">
                    <Button text="Commencer" href="/contact" type="primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero Section */}
      </div>

      {/* <div className="h-[400px]"> */}
      {/* <Slider /> */}
      {/* </div> */}

      <div className="container px-4  md:px-14 mx-auto">
        <div className="mb-32">
          <WhatWeDo />
        </div>

        <div className="mb-32">
          <Clients />
        </div>
      </div>


      <div className="bg-orange-50  mb-32 py-28 pb-40 relative">
        <div className="md:w-[90%] xl:w-[70%] 2xl:w-[50%] text-center pb-5 mx-auto mb-14 md:mb-28  rounded-lg ">
          <Title text="Our" highlited="Services" textColor="--black_color" />
        </div>
        <div className="absolute bottom-0 left-0 w-[20%] opacity-50 z-10">
          <Image alt="" src={svgImg} className="text-black"></Image>
        </div>
        <div className="absolute bottom-0 right-0 w-[20%] opacity-50 z-10">
          <Image alt="" src={svgImg} className="text-black"></Image>
        </div>
        <div className="absolute top-0 left-0 w-[20%] opacity-50 z-10">
          <Image alt="" src={svgImg} className="text-black"></Image>
        </div>
        <div className="absolute top-0 right-0 w-[20%] opacity-50 z-10">
          <Image alt="" src={svgImg} className="text-black"></Image>
        </div>
        <Services services={services} />
      </div>

      <div className="container px-4  md:px-14 mx-auto">
        <div>
          <Quote />
        </div>

        <div className="mt-20 md:mt-32">
          <Statistics />
        </div>
        <hr className="mt-20 md:mt-32" />

        <div className="mt-24">
          <LatestNews />
        </div>
      </div>

      <div className="bg-orange-50 mt-20 md:mt-32  py-24 home-team relative">
        <div className="container px-4  md:px-14 mx-auto ">
          <div className="md:w-[90%] xl:w-[70%] 2xl:w-[50%] text-center  mx-auto mb-14 md:mb-20 *:!text-[3rem]  rounded-lg bg-orange-50">
            <Title text="Our" highlited="Team" textColor="--black_color" />
          </div>
          <div className="absolute bottom-0 left-0 w-[33%] opacity-50 z-10">
            <Image alt="" src={svgImg} className="text-black"></Image>
          </div>
          <div className="absolute bottom-0 right-0 w-[33%] opacity-50 z-10">
            <Image alt="" src={svgImg} className="text-black"></Image>
          </div>
          <div className="absolute top-0 left-0 w-[33%] opacity-50 z-10">
            <Image alt="" src={svgImg} className="text-black"></Image>
          </div>
          <div className="absolute top-0 right-0 w-[33%] opacity-50 z-10">
            <Image alt="" src={svgImg} className="text-black"></Image>
          </div>
          <div className="mx-2 md:mx-0 bg-orange-50">
            <Team />
          </div>
        </div>
      </div>

    </main>
  );
}
