import Image from "next/image";
import Title from "./Title";
import projImg from "@/public/images/projImg.png"
import Button from "./Button";
import Link from "next/link";
import { PiArrowRightFill } from "react-icons/pi";

interface Services {
    image: string;
    title: string;
    desc: string;
    category: string;
}

interface ServicesProps {
    services: Services[];
}

export default function Services({ services }: ServicesProps) {

    // const projects = [
    //     {
    //         image: projImg,
    //         title: "Website Design",
    //         desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
    //         category: "web design"
    //     },
    //     {
    //         image: projImg,
    //         title: "Website Design",
    //         desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
    //         category: "web design"
    //     },
    //     {
    //         image: projImg,
    //         title: "Website Design",
    //         desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
    //         category: "web design"
    //     },
    //     {
    //         image: projImg,
    //         title: "Website Design",
    //         desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
    //         category: "web design"
    //     },
    //     {
    //         image: projImg,
    //         title: "Website Design",
    //         desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
    //         category: "web design"
    //     },
    //     {
    //         image: projImg,
    //         title: "Website Design",
    //         desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam ",
    //         category: "web design"
    //     }
    // ]

    return (
        <div className="services">
            <div className="conatiner px-4  md:px-14 mx-auto">
                <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:w-[90%]  mx-auto gap-y-14 gap-x-8">
                    {
                        services.map((service, index) => (
                            <div key={index} className=" mx-auto">
                                <Link href={`/services/${index}`} className="" >
                                    <div
                                        className="group flex flex-col justify-start items-start gap-2 xl:w-[80%] h-fit duration-500 relative rounded-lg px-4 py-8 -translate-y-2 [box-shadow:rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px]  hovered_card"
                                    >
                                        {/* <div
                                            className="xl:absolute duration-700  xl:group-hover:-translate-y-4 shadow-md  shadow-gray-800 xl:group-hover:-translate-x-4 -bottom-10 -right-10 xl:w-1/2 xl:h-1/2 rounded-lg md:w-full hidden "
                                        >
                                        </div> */}

                                        <div className=" flex flex-col items-center gap-3">
                                            <h2 className="text-[1.7rem] font-bold mb-2 text-[--balck_color]">{service.title}</h2>
                                            <p className="text-[#333] font-normal text-center text-base mb-3 line-clamp-3">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>

                                </Link>
                            </div>
                        ))
                    }
                </div>

                {/* <div className="flex justify-center mt-20">
                    <Button text="See All Project" type="third" />
                </div> */}
            </div>
        </div>
    );
}