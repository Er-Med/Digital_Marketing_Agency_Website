"use client"
import Image from "next/image";
import Title from "./Title";
import blogimg from "@/public/images/men.png"
import Link from "next/link";
import { PiArrowRightFill } from "react-icons/pi";
import { useEffect } from "react";
import { strapiUrl, } from "../_lib/data";
import useFetchData from "../_lib/hooks/useFetchData";
import convertDate from "../_lib/hooks/useConvertDate";


export default function LatestNews() {

    const { data, loading, error } = useFetchData('/homepage?populate[LatestBlogs][populate][blogs][fields][0]=title&populate[LatestBlogs][populate][blogs][fields][1]=publishedAt&&populate[LatestBlogs][populate][blogs][fields][2]=slug&populate[LatestBlogs][populate][blogs][populate]=cover&populate[LatestBlogs][populate]=title');

    const sectionData = {
        title: data?.data.attributes.LatestBlogs.title,
        blogs: data?.data.attributes.LatestBlogs.blogs.data.map((blog: any) => ({
            img: `${strapiUrl}${blog.attributes.cover.data.attributes.url}`,
            title: blog.attributes.title,
            slug: blog.attributes.slug,
            postedAt: convertDate(blog.attributes.publishedAt)
        }))
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div className="latest_news">
            <div className="mb-24">
                <Title text={sectionData.title.title} highlited={sectionData.title.highlighted_title} textColor="--black_color" />
            </div>
            <div className="latests md:w-[60%] mx-auto">
                {
                    sectionData.blogs.map((blog: any, index: string) => (
                        <Link key={index} href={`blogs/${blog.slug}`} className="blog mb-8">
                            <div className="flex items-center mb-5 md:mb-7 md:gap-7 ">
                                <p className="md:text-lg">Posted At {blog.postedAt}</p>
                                <span className="flex-1"></span>
                            </div>
                            <div className="flex justify-between">
                                <h3 className="text-xl md:text-3xl md:w-[60%]">{blog.title}</h3>
                                <Image className="max-w-32 min-h-36 object-covers  rounded-md" src={blog.img} width={300} height={200} alt="blog image" />
                            </div>
                        </Link>
                    ))
                }

            </div>

            <Link href="/blogs" className="flex items-center mx-auto w-fit gap-2 py-16 text-xl font-semibold text-[--primary_color] transition hover:scale-105"> See All News <PiArrowRightFill className="" /></Link>
        </div>
    );
}