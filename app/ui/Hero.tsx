import svgImg from "@/public/squares.svg"
import { syne, nunito } from "@/app/ui/fonts"
import Button from "./Button"
import Image from "next/image";

interface HeroProps {
    title: string;
    btnType?: string;
    desc?: string;
    btnText?: string;
    btnHref?: string;
    titileSize?: string;
    hideBtn?: boolean
}

export default function Hero({ title, titileSize = "50px", btnText, desc, btnType, btnHref, hideBtn = false }: HeroProps) {
    const syneFont = syne.className
    const nunitoFont = nunito.className
    return (
        <>
            <div className="hero flex flex-col items-center py-24 md:py-32 relative">
                <div className="absolute bottom-0 left-0 w-[30%] opacity-50 z-10">
                    <Image alt="" src={svgImg} className="text-black"></Image>
                </div>
                <div className="absolute bottom-0 right-0 w-[20%] opacity-50 z-10">
                    <Image alt="" src={svgImg} className="text-black"></Image>
                </div>
                <h1 className={`main_title ${syneFont} text-[3rem]  md:text-[100px] drop-shadow-md  lg:text-[${titileSize}] text-center font-[700] mb-4`}>{title}</h1>
                <p className={`${nunitoFont} md:w-[40%] lg:w-[60%] text-center text-lg md:text-xl mb-6 text-[--dark_gray_color]`}>
                    {desc}
                </p>

                {!hideBtn && btnText && btnHref && btnType && (
                    <Button text={btnText} type={btnType} href={btnHref} />
                )}
            </div>
        </>
    )
}
