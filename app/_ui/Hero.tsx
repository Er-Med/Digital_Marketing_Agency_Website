import svgImg from "@/public/squares.svg";
import { syne, nunito } from "@/app/_ui/fonts";
import Button from "./Button";
import Image from "next/image";
import { fetchData } from "../_lib/data";

interface HeroProps {
  title: string;
  btnType?: string;
  desc?: string;
  btnText?: string;
  btnHref?: string;
  titleSize?: string;
  hideBtn?: boolean;
}

export default function Hero({
  title,
  titleSize = "50px",
  btnText,
  desc,
  btnType,
  btnHref,
  hideBtn = false,
}: HeroProps) {
  const syneFont = syne.className;
  const nunitoFont = nunito.className;
  return (
    <>
      <div className='hero flex flex-col items-center  relative  isolate overflow-hidden  bg-white px-6 py-24 sm:py-48 lg:px-8 '>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20'></div>
        <div className='absolute inset-y-0 right-[65%] md:right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center'></div>

        <div className='absolute bottom-0 right-0 w-[20%] opacity-50 z-10'>
          <Image
            alt=''
            src={svgImg}
            className='text-black'></Image>
        </div>
        <h1
          className={`main_title ${syneFont} text-[3rem]  md:text-[100px] drop-shadow-md  lg:text-[${titleSize}] text-center font-[700] mb-4`}>
          {title}
        </h1>
        <p
          className={`${nunitoFont} md:w-[40%] lg:w-[60%] text-center text-lg md:text-xl mb-6 text-[--dark_gray_color]`}>
          {desc}
        </p>

        {!hideBtn && btnText && btnHref && btnType && (
          <Button
            text={btnText}
            type={btnType}
            href={btnHref}
          />
        )}
      </div>
      <hr className='awsome-hr mb-20 mx-auto !w-[90%]' />
    </>
  );
}
