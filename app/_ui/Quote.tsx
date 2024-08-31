import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import menImg from "@/public/images/men.png"
export default function Quote() {
    return (
        <div className="flex flex-col justify-center items-center md:w-[50%] mx-auto gap-10">
            <div className="quote-text flex flex-col gap-4 items-center  pb-8 ">
                <FaQuoteLeft className="fill-[--primary_color] text-4xl" />
                <p className=" text-lg text-center">High-end digital experiences. Created at the heart of Manhattan, we are a should human team. The driving force of all speeches, we believe that creation should be the point around which any strategy revolves.</p>
            </div>
            <div className="flex items-center gap-10">
                <div>
                    <Image src={menImg} alt="person own quote" className="w-[95px] h-[95px] rounded-full" />
                </div>
                <div className="flex flex-col items-center relative">
                    <Image src={menImg} alt="person own quote" className="w-[130px] h-[130px] rounded-full" />
                    <div className=" absolute bottom-[-45%] sm:bottom-[-45%] left-[50%] translate-x-[-50%] min-w-[150%] w-[20rem] sm:w-fit flex flex-col items-center">
                        <h4 className="text-2xl font-semibold text-center">Aran Febnodex</h4>
                        <span className=" font-medium text-center">Founder of Co Brand</span>
                    </div>
                </div>
                <div>
                    <Image src={menImg} alt="person own quote" className="w-[95px] h-[95px] rounded-full" />
                </div>

            </div>
        </div>
    );
}