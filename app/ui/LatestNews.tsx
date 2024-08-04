import Image from "next/image";
import Title from "./Title";
import blogimg from "@/public/images/men.png"
import Link from "next/link";
import { PiArrowRightFill } from "react-icons/pi";

export default function LatestNews() {
    return (
        <div className="latest_news">
            <div className="mb-24">
                <Title text="Latest News & " highlited="Blogs" textColor="--black_color" />
            </div>
            <div className="latests md:w-[60%] mx-auto">
                <div className="mb-8">
                    <div className="flex items-center mb-5 md:mb-7 md:gap-7 ">
                        <p className="md:text-lg">Posted on December 31, 2021 Business</p>
                        <span className="flex-1"></span>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-xl md:text-3xl md:w-[60%]">How To Keep The Motivation Up When There Is No Client Work</h3>
                        <Image className="max-w-32 min-h-36 object-covers  rounded-md" src={blogimg} alt="blog image" />
                    </div>
                </div>
                <div className="mb-8">
                    <div className="flex items-center mb-5 md:mb-7 md:gap-7 ">
                        <p className="md:text-lg ">Posted on December 31, 2021 Business</p>
                        <span className="flex-1"></span>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-xl md:text-3xl md:w-[60%]">How To Keep The Motivation Up When There Is No Client Work</h3>
                        <Image className="max-w-32 min-h-36 object-covers  rounded-md" src={blogimg} alt="blog image" />
                    </div>
                </div>
                <div className="mb-8">
                    <div className="flex items-center mb-5 md:mb-7 md:gap-7 ">
                        <p className="md:text-lg ">Posted on December 31, 2021 Business</p>
                        <span className="flex-1"></span>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-xl md:text-3xl md:w-[60%]">How To Keep The Motivation Up When There Is No Client Work</h3>
                        <Image className="max-w-32 min-h-36 object-covers  rounded-md" src={blogimg} alt="blog image" />
                    </div>
                </div>
            </div>

            <Link href="/Blogs" className="flex items-center mx-auto w-fit gap-2 py-16 text-xl font-semibold text-[--primary_color] transition hover:scale-105"> See All News <PiArrowRightFill className="" /></Link>
        </div>
    );
}