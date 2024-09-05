"use client"
import Image from "next/image";
import Footer from "../_ui/Footer";
import { Header } from "../_ui/Header";
import blogimg from "@/public/images/images-1000x500.jpg"
import Link from "next/link";
import { PiArrowRightFill } from "react-icons/pi";
import "@/app/styles.scss"
import Title from "../_ui/Title";
import { blogPosts } from "../_lib/blogsApi";
import NewsBanner from "../_ui/BlogsBanner";
import BlogsBanner from "../_ui/BlogsBanner";
import Hero from "../_ui/Hero";
import { getBlogsData, getBlogsPageData } from "../_lib/data";
import { useEffect, useState } from "react";
import clsx from "clsx";


// export const getData = async () => {
//     const blogs = await getBlogsData();
//     console.log(blogs);
// };

export default function Page() {
    const [blogs, setBlogs] = useState()
    const [filtredPosts, setFiltredPosts] = useState([])
    const [lastPost, setLastPost] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true);
    const [activeCategory, setActiveCategory] = useState("All")
    const [categories, setCategories] = useState()
    const [pageData, setPageData] = useState<any>()


    const starpiUrl = process.env.NEXT_PUBLIC_STRAPI_URL

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const blogs = await getBlogsData();
                setBlogs(blogs.data);
                console.log(blogs.data);

                const data = await getBlogsPageData();
                setPageData(data)
                setFiltredPosts(blogs.data)
                getLastPostData(blogs)
            } catch (error) {
                console.error('Failed to fetch blogs:', error);
            } finally {
                setLoading(false);
            }
        };


        fetchdata();
    }, [])

    const getLastPostData = (blogs) => {
        const lastPostData = blogs.data[0];
        const postData = {
            title: lastPostData.attributes.title,
            date: convertDate(lastPostData.attributes.createdAt),
            coverImage: starpiUrl + lastPostData.attributes.cover.data.attributes.url,
            description: lastPostData.attributes.shortDescription,
            href: `/blogs/${lastPostData?.attributes.title.replace(/ /g, '-')}`
        }

        setLastPost(postData);
    }

    const convertDate = (d) => {
        const date = new Date(d)
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    }

    useEffect(() => {

        let posts;
        if (activeCategory === "All") {
            posts = blogs;
        } else {
            posts = blogs?.filter(post => post.attributes.category === activeCategory);
        }

        setFiltredPosts(posts);

    }, [activeCategory])



    const handleActiveCategory = (categoryName) => {
        setActiveCategory(categoryName)
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="container px-4 md:px-14 mx-auto">

                <div className="lg:w-[80%] mx-auto">
                    <Hero title={pageData.heroData.title}
                        titileSize="100px"
                    />
                </div>

                {/* START Last blog Section */}
                <section className="xl:w-4/5 mx-auto mt-24 md:mt-0">
                    {lastPost ? (
                        <div className="grid  xl:grid-cols-2 gap-4  xl:gap-32 mb-16 md:mb-24 ">
                            <div className="w-full md:-order-1 xl:order-1 border-2 border- p-3 rounded-sm relative">
                                <Image className=" object-cover w-full object-covers  rounded-sm  min-h-full aspect-[16/10]" src={lastPost.coverImage} alt="blog image" layout="fill" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-3 items-center">
                                    <p className="w-fit md:text-lg">{lastPost.date}</p>
                                    <div className="flex-1 h-[2px] bg-gray-900"></div>
                                </div>
                                <h3 className="  text-xl md:text-3xl font-medium">{lastPost.title}</h3>
                                <p className="text-lg text-[--dark_gray_color]">{lastPost.description}
                                </p>
                                <Link href={lastPost.href} className="flex items-center  w-fit gap-2 pt-4 xl:py-12 text-xl font-semibold text-[--primary_color] transition hover:scale-105"> Read More <PiArrowRightFill className="" /></Link>
                            </div>
                        </div>
                    ) : <p>Loding..</p>

                    }
                </section>
                {/* END Last blog Section */}

                <hr className="awsome-hr mb-20 mx-auto" />
                <section className="">
                    <div className="flex flex-col lg:flex-row gap-y-6 justify-between items-center lg:w-4/5 mx-auto">
                        <Title text={pageData.filterSectionTitle.title.title} highlited={pageData.filterSectionTitle.title.highlighted_title} textColor="--black_color" />
                        <ul className="flex flex-wrap justify-center md:justify-start gap-2  *:border-2 *:border-[--primary_color] *:rounded-full  *:cursor-default  *:duration-200 ">
                            <li className={clsx("py-3 px-6 hover:text-white hover:bg-[--primary_color] font-semibold",
                                { "text-white bg-[--primary_color] font-semibold": activeCategory === "All" })}
                                onClick={() => { handleActiveCategory("All") }}
                            >
                                All
                            </li>

                            {pageData.filterSectionTitle.categories.map((category: { id: string, name: string }) => (
                                <li className={clsx("py-3 px-6 hover:text-white hover:bg-[--primary_color] font-semibold",
                                    { "text-white bg-[--primary_color] font-semibold": category.name === activeCategory }
                                )} key={category.id} onClick={() => { handleActiveCategory(category.name) }}>
                                    {category.name}
                                </li>
                            ))
                            }


                        </ul>
                    </div>
                    {/* START blogs Section */}
                    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-6 items-center mt-14 nd:mt-20 lg:w-3/4 mx-auto" >
                        {
                            filtredPosts ? (
                                filtredPosts.map((blog) => (
                                    <div className="flex flex-col shadow-md rounded-md overflow-hidden hover:scale-105 transition-all" key={blog.id} >
                                        <div className="w-full relative h-[230px]">
                                            <Image className=" object-cover max-h-5xl w-full object-covers mb-4 aspect-[16/14] min-h-full absol" src={starpiUrl + blog.attributes.cover.data.attributes.url} alt="blog image" layout="fill" />
                                        </div>
                                        <div className="flex flex-col gap-4 px-5 py-4">
                                            <div className="flex gap-3 items-center">
                                                <p className="w-fit md:text-lg text-[--dark_gray_color]">{convertDate(blog.attributes.publishedAt)}</p>
                                                <div className="flex-1 h-[2px] bg-[--dark_gray_color]"></div>
                                            </div>
                                            <h3 className="line-clamp-2 lg:line-clamp-1  text-xl md:text-2xl font-medium">{blog.attributes.title}</h3>
                                            <Link href={`/blogs/${blog.attributes.slug}`} className="group flex items-center  w-fit gap-2 text-lg font-semibold text-[--primary_color] transition "> Read More <PiArrowRightFill className="transition group-hover:translate-x-1" /></Link>
                                        </div>
                                    </div>
                                ))
                            ) : <p>loading...</p>
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