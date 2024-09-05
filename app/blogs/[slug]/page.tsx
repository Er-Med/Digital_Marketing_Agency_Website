import Footer from "@/app/_ui/Footer";
import { Header } from "@/app/_ui/Header";
import { blogPosts } from "@/app/_lib/blogsApi";
import Link from "next/link";
import Image from "next/image";
import { PiArrowRightFill } from "react-icons/pi";
import "@/app/styles.scss"
import BlogsBanner from "@/app/_ui/BlogsBanner";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import { fetchData } from "@/app/_lib/data";


export default async function page({ params }: { params: any }) {

    const starpiUrl = process.env.NEXT_PUBLIC_STRAPI_URL
    const slug = params.slug;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


    async function getBlog() {
        const res = await fetchData(`/blogs?filters[slug][$eq]=${slug}&populate=cover`, 'no-store')

        const blog = {
            title: res.data[0].attributes.title,
            img: starpiUrl + res.data[0].attributes.cover.data.attributes.url,
            date: convertDate(res.data[0].attributes.createdAt),
            category: res.data[0].attributes.category,
            content: res.data[0].attributes.content
        }
        return blog
    }
    const blog = await getBlog();
    const blogCategory = blog?.category;

    function convertDate(d: any) {
        const date = new Date(d)
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    }

    const lastPost = blogPosts?.reduce((latest, current) => {
        return new Date(latest.date) > new Date(current.date) ? latest : current;
    });

    // get three posts have the same category
    async function getRelationBlogs() {
        const res = await fetchData(`/blogs?filters[category][$eq]=${blogCategory}&populate=cover&pagination[pageSize]=3`, 'no-store')

        const posts = res.data
        const otherBlogs = posts?.map((blog: any) => {
            return {
                id: blog.attributes.id,
                title: blog.attributes.title,
                img: starpiUrl + blog.attributes.cover.data.attributes.url,
                date: convertDate(blog.attributes.createdAt),
            }
        })
        return otherBlogs
    }

    const otherBlogs = await getRelationBlogs();


    return (
        <div>
            <div className="container px-4 md:px-14 mx-auto">
                <section className="lg:w-4/6 mx-auto my-32">
                    {
                        <div className="flex flex-col">

                            <div className="flex flex-col gap-4 mb-10">
                                <div className="flex gap-3 items-center">
                                    <p className="w-fit md:text-lg text-[--dark_gray_color]">{blog.date}</p>
                                    <div className="flex-1 h-[2px] bg-[--dark_gray_color]"></div>
                                </div>
                                <h1 className="line-clamp-2 leading-10 text-xl md:text-4xl font-semibold">{blog.title}</h1>
                            </div>
                            <div className="w-full relative h-[400px]">
                                <Image className=" object-cover  w-full object-covers mb-4 min-h-full aspect-video" src={blog.img} alt="blog image" layout="fill" />
                            </div>
                            <div className="mt-10">
                                <article className="prose lg:prose-xl max-w-full ">
                                    <BlocksRenderer content={blog.content} />

                                </article>
                            </div>
                        </div>
                    }
                </section>

                <section className="lg:w-4/5 mx-auto mt-20">
                    <h2 className="text-4xl font-semibold mb-10">Read More Blogs</h2>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-10 items-center " >
                        {
                            otherBlogs?.map((post: any) => (
                                <div className="flex flex-col shadow-md rounded-md overflow-hidden" key={post.id} >
                                    <div className="w-full">
                                        <Image className=" object-cover max-h-5xl w-full object-covers mb-4 aspect-[16/14] min-h-full" src={post.img} alt="blog image" width={500} height={500} />
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