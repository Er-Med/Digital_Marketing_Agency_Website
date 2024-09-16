import Image from "next/image";
import React from "react";
import "./styles.scss";
import WhatWeDo from "./_ui/WhatWeDo";
import Clients from "./_ui/Clients";
import Title from "./_ui/Title";
import Statistics from "./_ui/Statistics";
import LatestNews from "./_ui/LatestNews";
import Team from "./_ui/Team";
import Services from "./_ui/Services";
import ScrollButton from "./_ui/ScrollButton";
import HeroSection from "./_ui/HeroSection";
import Testimonials from "./_ui/Testimonials";
import Container from "./_ui/Container";
import svgImg from "@/public/squares.svg";

// Utility function for repeated image rendering
const PositionedImage = ({
  position,
  className = "",
}: {
  position: any;
  className?: string;
}) => (
  <div className={`absolute ${position} w-[20%] opacity-50 z-10 ${className}`}>
    <Image
      alt=''
      src={svgImg}
      className='text-black'
    />
  </div>
);

export default function Home() {
  return (
    <main className='home'>
      <ScrollButton />

      <Container>
        <HeroSection />
      </Container>

      <Container>
        <div className='mb-32'>
          <WhatWeDo />
        </div>
      </Container>

      <div className='mb-16 md:mb-32 py-28 pb-32 md:pb-40 relative'>
        {/* Reused PositionedImage component to avoid repetition */}
        <PositionedImage position='bottom-0 left-0' />
        <PositionedImage position='bottom-0 right-0' />
        <PositionedImage position='top-0 left-0' />
        <PositionedImage position='top-0 right-0' />

        <div className='bg-[--bg_color] pt-20 pb-32 md:p-32'>
          <Container>
            <Services />
          </Container>
        </div>
      </div>

      <Container>
        <div className='mb-16 md:mb-24'>
          <Clients />
        </div>
      </Container>

      <Container>
        <Testimonials />
      </Container>

      <Container>
        <div className='my-24 md:my-32'>
          <Statistics />
        </div>
      </Container>

      <Container>
        <div className='my-32'>
          <LatestNews />
        </div>
      </Container>

      <Container>
        <div className='md:w-[90%] xl:w-[70%] 2xl:w-[50%] text-center mx-auto mb-14 md:mb-20 rounded-lg'>
          <Title
            text='Our'
            highlited='Team'
            textColor='--black_color'
          />
        </div>

        {/* Reused PositionedImage component for the team section */}
        <PositionedImage position='bottom-[12%] left-0' />
        <PositionedImage position='bottom-[12%] right-0' />
        <PositionedImage position='top-0 left-[12%]' />
        <PositionedImage position='top-[12%] right-0' />

        <div className='my-24'>
          <Team />
        </div>
      </Container>
    </main>
  );
}
