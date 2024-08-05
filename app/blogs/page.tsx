import Image from "next/image";
import Footer from "../ui/Footer";
import { Header } from "../ui/Header";
import blogimg from "@/public/images/images-1000x500.jpg"
import Link from "next/link";
import { PiArrowRightFill } from "react-icons/pi";
import "@/app/styles.scss"
import Title from "../ui/Title";
import { blogPosts } from "../lib/blogsApi";
import NewsBanner from "../ui/BlogsBanner";
import BlogsBanner from "../ui/BlogsBanner";
import Hero from "../ui/Hero";
export default function page() {


    return (
        <div>
            <div className="container px-4 md:px-14 mx-auto">

                <div className="lg:w-[80%] mx-auto">
                    <Hero title="Our Blogs"
                        titileSize="100px"
                    />
                </div>

                {/* START Last blog Section */}
                <section className="xl:w-4/5 mx-auto mt-24 md:mt-0">
                    <div className="grid  xl:grid-cols-2 gap-4  xl:gap-32 mb-16 md:mb-24 ">
                        <div className="w-full md:-order-1 xl:order-1 border-2 border- p-2 rounded-sm ">
                            <Image className=" object-cover w-full object-covers  rounded-sm  min-h-full aspect-[16/10]" src={blogimg} alt="blog image" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3 items-center">
                                <p className="w-fit md:text-lg">Posted on December 31, 2021 Business</p>
                                <div className="flex-1 h-[2px] bg-gray-900"></div>
                            </div>
                            <h3 className="  text-xl md:text-3xl font-medium">How To Keep The Motivation Up When There Is No Client Work</h3>
                            <p className="text-lg text-[--dark_gray_color]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolorem. Omnis repudiandae inventore quasi ea, veritatis, cumque qui veniam.
                            </p>
                            <Link href="/Blogs" className="flex items-center  w-fit gap-2 pt-4 xl:py-12 text-xl font-semibold text-[--primary_color] transition hover:scale-105"> Read More <PiArrowRightFill className="" /></Link>
                        </div>
                    </div>
                </section>
                {/* END Last blog Section */}

                <hr className="awsome-hr mb-20 mx-auto" />
                <section className="">
                    <div className="flex flex-col lg:flex-row gap-y-6 justify-between items-center lg:w-4/5 mx-auto">
                        <Title text="Latest" highlited="Blogs" textColor="--black_color" />
                        <ul className="flex flex-wrap justify-center md:justify-start gap-2  *:border-2 *:border-[--primary_color] *:rounded-full  *:cursor-default  *:duration-200 ">
                            <li className="py-3 px-6 hover:text-white hover:bg-[--primary_color] font-semibold">All</li>
                            <li className="py-3 px-6 hover:text-white hover:bg-[--primary_color] font-semibold">Web development</li>
                            <li className="py-3 px-6 hover:text-white hover:bg-[--primary_color] font-semibold">Web Design</li>
                            <li className="py-3 px-6 hover:text-white hover:bg-[--primary_color] font-semibold">Griphix bale</li>
                        </ul>
                    </div>
                    {/* START blogs Section */}
                    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-6 items-center mt-14 nd:mt-20 lg:w-3/4 mx-auto" >
                        {
                            blogPosts.map((post, index) => (
                                <div className="flex flex-col shadow-md rounded-md overflow-hidden" key={index} >
                                    <div className="w-full">
                                        <Image className=" object-cover max-h-5xl w-full object-covers mb-4 aspect-[16/14] min-h-full" src={post.img} alt="blog image" />
                                    </div>
                                    <div className="flex flex-col gap-4 px-5 py-4">
                                        <div className="flex gap-3 items-center">
                                            <p className="w-fit md:text-lg text-[--dark_gray_color]">{post.date}</p>
                                            <div className="flex-1 h-[2px] bg-[--dark_gray_color]"></div>
                                        </div>
                                        <h3 className="line-clamp-2 lg:line-clamp-1  text-xl md:text-2xl font-medium">{post.title}</h3>
                                        <Link href={`/blogs/${post.title.replace(/ /g, '-')}`} className="group flex items-center  w-fit gap-2 text-lg font-semibold text-[--primary_color] transition "> Read More <PiArrowRightFill className="transition group-hover:translate-x-1" /></Link>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                </section>
                {/* END blogs Section */}

            </div>

            <div className="mt-32">
                <BlogsBanner />
            </div>
        </div>
    );
}