import { fetchData } from "@/app/_lib/data";
import convertDate from "@/app/_lib/hooks/useConvertDate";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRightFill } from "react-icons/pi";
import * as motion from "framer-motion/client";

export default async function LatestBlog() {
  const starpiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  // Fetch the latest blog post from Strapi
  const response = await fetchData(
    "/blogs?sort=createdAt:desc&pagination[limit]=1&populate=cover"
  );
  const lastPublishedBlog = response.data[0];
  const blog = {
    title: lastPublishedBlog.attributes.title,
    date: convertDate(lastPublishedBlog.attributes.createdAt),
    coverImage:
      starpiUrl + lastPublishedBlog.attributes.cover.data.attributes.url,
    description: lastPublishedBlog.attributes.shortDescription,
    href: `/blogs/${lastPublishedBlog?.attributes.title.replace(/ /g, "-")}`,
  };

  return (
    <section className='xl:w-4/5 mx-auto mt-24 md:mt-0'>
      {blog ? (
        <div className='grid  xl:grid-cols-2 gap-4  xl:gap-32 mb-16 md:mb-24 '>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ amount: 0.5 }}
            className='w-full md:-order-1 xl:order-1 border-2 border- p-3 rounded-sm relative'>
            <Image
              className=' object-cover w-full h-full object-covers  rounded-sm  min-h-full aspect-[16/10]'
              src={blog.coverImage}
              alt='blog image'
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ amount: 0.5 }}
            className='flex flex-col gap-4'>
            <div className='flex gap-3 items-center'>
              <p className='w-fit md:text-lg'>{blog.date}</p>
              <div className='flex-1 h-[2px] bg-gray-900'></div>
            </div>
            <h3 className='  text-xl md:text-3xl font-medium'>{blog.title}</h3>
            <p className='text-lg text-[--dark_gray_color]'>
              {blog.description}
            </p>
            <Link
              href={blog.href}
              className='flex items-center  w-fit gap-2 pt-4 xl:py-12 text-xl font-semibold text-[--primary_color] transition hover:scale-105'>
              {" "}
              Read More <PiArrowRightFill className='' />
            </Link>
          </motion.div>
        </div>
      ) : (
        <p>Loding..</p>
      )}
    </section>
    // </motion.div>
  );
}
