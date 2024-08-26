import Footer from "@/app/ui/Footer";
import { Header } from "@/app/ui/Header";
import { blogPosts } from "@/app/lib/blogsApi";
import Link from "next/link";
import Image from "next/image";
import { PiArrowRightFill } from "react-icons/pi";
import "@/app/styles.scss"
import BlogsBanner from "@/app/ui/BlogsBanner";


export default function page({ params }: { params: any }) {

    const lastPost = blogPosts.reduce((latest, current) => {
        return new Date(latest.date) > new Date(current.date) ? latest : current;
    });

    const relationBlogs = blogPosts.slice(0, 3);
    return (
        <div>
            <div className="container px-4 md:px-14 mx-auto">
                <section className="lg:w-4/5 mx-auto my-32">
                    {
                        <div className="flex flex-col">

                            <div className="flex flex-col gap-4 mb-10">
                                <div className="flex gap-3 items-center">
                                    <p className="w-fit md:text-lg text-[--dark_gray_color]">{lastPost.date}</p>
                                    <div className="flex-1 h-[2px] bg-[--dark_gray_color]"></div>
                                </div>
                                <h1 className="line-clamp-2 leading-10 text-xl md:text-4xl font-semibold">{lastPost.title}</h1>
                            </div>
                            <div className="w-full">
                                <Image className=" object-cover  w-full object-covers mb-4 min-h-full aspect-video" src={lastPost.img} alt="blog image" />
                            </div>
                            <div className="mt-10">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos est autem debitis eveniet mollitia, velit ratione, fuga voluptatum similique inventore officiis consequuntur iusto eius perferendis. Dolorem maxime suscipit architecto dolorum.</p>
                            </div>
                        </div>
                    }
                </section>

                <section className="lg:w-4/5 mx-auto mt-20">
                    <h2 className="text-4xl font-semibold mb-10">Read More Blogs</h2>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-10 items-center " >
                        {
                            relationBlogs.map((post, index) => (
                                <div className="flex flex-col shadow-md rounded-md overflow-hidden" key={index} >
                                    <div className="w-full">
                                        <Image className=" object-cover max-h-5xl w-full object-covers mb-4 aspect-[16/14] min-h-full" src={post.img} alt="blog image" />
                                    </div>
                                    <div className="flex flex-col gap-4 px-5 py-4">
                                        <div className="flex gap-3 items-center">
                                            <p className="w-fit md:text-lg text-[--dark_gray_color]">{post.date}</p>
                                            <div className="flex-1 h-[2px] bg-[--dark_gray_color]"></div>
                                        </div>
                                        <h3 className="line-clamp-2 lg:line-clamp-2  text-xl md:text-2xl font-medium">{post.title}</h3>
                                        <Link href={`/blogs/${post.title.replace(/ /g, '-')}`} className="flex items-center  w-fit gap-2 text-lg font-semibold text-[--primary_color] transition hover:scale-105"> Read More <PiArrowRightFill className="" /></Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>

            <div className="mt-32">
                <BlogsBanner />
            </div>

        </div>
    );
}