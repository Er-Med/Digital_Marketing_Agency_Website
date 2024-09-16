import { strapiUrl } from "@/app/_lib/data";
import convertDate from "@/app/_lib/hooks/useConvertDate";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRightFill } from "react-icons/pi";
import ScaleUpAnimation from "../animations/ScaleUpAnimation";

// Define interfaces for the blog data
interface BlogCover {
  data: {
    attributes: {
      url: string;
    };
  };
}

interface BlogAttributes {
  title: string;
  slug: string;
  publishedAt: string;
  cover: BlogCover;
}

interface Blog {
  id: string;
  attributes: BlogAttributes;
}

interface FiltredBlogsProps {
  blogs: Blog[];
}

export default function FiltredBlogs({ blogs }: FiltredBlogsProps) {
  return (
    <section className='grid md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-10 items-center mt-14 nd:mt-20 lg:w-[90%] mx-auto'>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <ScaleUpAnimation>
            <div
              className='flex flex-col shadow-md rounded-md overflow-hidden hover:scale-105 transition-all'
              key={blog.id}>
              <div className='w-full relative'>
                <Image
                  className='object-cover max-h-5xl w-full object-covers mb-4 aspect-[16/14] min-h-full absol'
                  src={strapiUrl + blog.attributes.cover.data.attributes.url}
                  alt='blog image'
                  width={500}
                  height={500}
                />
              </div>
              <div className='flex flex-col gap-4 px-5 py-4'>
                <div className='flex gap-3 items-center'>
                  <p className='w-fit md:text-lg text-[--dark_gray_color]'>
                    {convertDate(blog.attributes.publishedAt)}
                  </p>
                  <div className='flex-1 h-[2px] bg-[--dark_gray_color]'></div>
                </div>
                <h3 className='line-clamp-2 lg:line-clamp-1 text-xl md:text-2xl font-medium'>
                  {blog.attributes.title}
                </h3>
                <Link
                  href={`/blogs/${blog.attributes.slug}`}
                  className='group flex items-center w-fit gap-2 text-lg font-semibold text-[--primary_color] transition '>
                  {" "}
                  Read More{" "}
                  <PiArrowRightFill className='transition group-hover:translate-x-1' />
                </Link>
              </div>
            </div>
          </ScaleUpAnimation>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </section>
  );
}
