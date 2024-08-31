import Footer from "@/app/_ui/Footer";
import { Header } from "@/app/_ui/Header";
import NewsBanner from "@/app/_ui/BlogsBanner";
import { useRouter } from "next/router";
import "@/app/styles.scss"
import Image from "next/image";
import slideimag from "@/public/images/projImg.png"
import SocialBtns from "@/app/_ui/SocialBtns";

export default function TeamMember() {

    return (
        <div>

            <div className="container px-4  md:px-14 mx-auto">

                <div className="member md:w-[80%] mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-20 my-20 md:my-32">
                        <div className=" min-h-[390px] h-[390px] max-h-full">
                            <Image src={slideimag} alt="image" className=" rounded-md object-cover w-full h-full" />
                        </div>
                        <div className="info flex flex-col">
                            <div className="pb-5 border-b-2 ">
                                <h1 className="text-3xl font-semibold">David James</h1>
                                <h2 className="text-xl text-[--dark_gray_color]">Web App</h2>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold py-5">About David James</h3>
                                <p className="text-lg text-[--dark_gray_color]">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptatem laborum debitis et sit officia aut, modi harum, veniam labore vel voluptates molestias consectetur non iure eum corrupti. Ex, necessitatibus?
                                </p>
                                <div className="media">
                                    <SocialBtns />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div>
                <NewsBanner />
            </div>
        </div>
    );
}