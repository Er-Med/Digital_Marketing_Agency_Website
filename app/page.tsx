"use client"
import Image from "next/image";
import "./styles.scss";
import { syne } from "@/app/_ui/fonts";
import { Header } from "./_ui/Header";
import Hero from "./_ui/Hero";
import WhatWeDo from "./_ui/WhatWeDo";
import Clients from "./_ui/Clients";
import Title from "./_ui/Title";
import Quote from "./_ui/Quote";
import Statistics from "./_ui/Statistics";
import LatestNews from "./_ui/LatestNews";
import Team from "./_ui/Team";
import Footer from "./_ui/Footer";
import NewsBanner from "./_ui/BlogsBanner";
import Projects from "./_ui/Services";
import Services from "./_ui/Services";
import "@/app/styles.scss"
import projImg from "@/public/images/projImg.png"
import svgImg from "@/public/squares.svg"

import React, { useEffect, useRef, useState } from 'react';
import Slider from "./_ui/Slider";
import Button from "./_ui/Button";
import ScrollButton from "./_ui/ScrollButton";
import { getHeroSectionData, getWhatWeDoSectionData, getClientsSectionData, getServicesSectionData, getTestimonialsData, getLatestBlogsData, getTeamData } from "./_lib/data";
import HeroSection from "./_ui/HeroSection";


const content: BlocksContent = [
  {
    type: 'paragraph',
    children: [{ type: 'text', text: 'A simple paragraph' }],
  },
];

export default function Home() {
  const [heroSectionData, setHeroSectionData] = useState(null);
  const [whatWeDoSectionData, setWhatWeDoSectionData] = useState(null);
  const [clientsSectionData, setClientsSectionData] = useState(null);
  const [servicesSectionData, setServicesSectionData] = useState(null);
  const [testimonialsData, setTestimonialsData] = useState(null);
  const [latestBlogsData, setLatestBlogsData] = useState(null);
  const [teamData, setTeamData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const heroData = await getHeroSectionData();
        const whatWeDoData = await getWhatWeDoSectionData();
        const clientsData = await getClientsSectionData();
        const ServicesData = await getServicesSectionData();
        const testimonialsData = await getTestimonialsData();
        const latestBlogsData = await getLatestBlogsData();
        const teamData = await getTeamData();

        setHeroSectionData(heroData);
        setWhatWeDoSectionData(whatWeDoData);
        setClientsSectionData(clientsData);
        setServicesSectionData(ServicesData);
        setTestimonialsData(testimonialsData);
        setLatestBlogsData(latestBlogsData);
        setTeamData(teamData);

      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }





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
      <ScrollButton />

      <div className="absolute bottom-0 left-0 w-[40%] -z-10 opacity-50">
        <Image alt="" src={svgImg} className="text-black"></Image>
      </div>
      <div className="absolute top-1/4 right-0 w-[40%] -z-10 opacity-50">
        <Image alt="" src={svgImg} className="text-black"></Image>
      </div>

      <div className="container px-4 md:px-14 mx-auto">
        <HeroSection />
      </div>

      <div className="container px-4  md:px-14 mx-auto">
        <div className="mb-32">
          <WhatWeDo />
        </div>
        <div className="mb-32 pt-24">
          <Clients />
        </div>
      </div>


      <div className="  mb-32 py-28 pb-40 relative">
        {/* <div className="md:w-[90%] xl:w-[70%] 2xl:w-[50%] text-center pb-5 mx-auto mb-14 md:mb-28  rounded-lg ">
          <Title text="Our" highlited="Services" textColor="--black_color" />
        </div> */}
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

      <div className=" mt-20 md:mt-32  py-24 home-team relative">
        <div className="container px-4  md:px-14 mx-auto ">
          <div className="md:w-[90%] xl:w-[70%] 2xl:w-[50%] text-center  mx-auto mb-14 md:mb-20 *:!text-[3rem]  rounded-lg ">
            <Title text="Our" highlited="Team" textColor="--black_color" />
          </div>
          <div className="absolute bottom-[12%] md:bottom-0 left-0 w-[50%] md:w-[33%] opacity-90 md:opacity-50 z-10">
            <Image alt="" src={svgImg} className="text-black"></Image>
          </div>
          <div className="absolute bottom-[12%] md:bottom-0 right-0 w-[50%] md:w-[33%] opacity-90 md:opacity-50 z-10">
            <Image alt="" src={svgImg} className="text-black"></Image>
          </div>
          <div className="absolute top-0 left-[12%] md:left-0 w-[50%] md:w-[33%] opacity-90 md:opacity-50 z-10">
            <Image alt="" src={svgImg} className="text-black"></Image>
          </div>
          <div className="absolute top-[12%] md:top-0 right-0 w-[50%] md:w-[33%] opacity-90 md:opacity-50 z-10">
            <Image alt="" src={svgImg} className="text-black"></Image>
          </div>
          <div className="mx-2 md:mx-0">
            <Team />
          </div>
        </div>
      </div>

    </main>
  );
}
