import Image from "next/image";
import Title from "./Title";
import Link from "next/link";
import { PiArrowRightFill } from "react-icons/pi";
import { fetchData, strapiUrl } from "../_lib/data";
import convertDate from "../_lib/hooks/useConvertDate";
import FadeRight from "./animations/FadeRight";

export default async function LatestNews() {
  const data = await fetchData(
    "/homepage?populate[LatestBlogs][populate][blogs][fields][0]=title&populate[LatestBlogs][populate][blogs][fields][1]=createdAt&&populate[LatestBlogs][populate][blogs][fields][2]=slug&populate[LatestBlogs][populate][blogs][populate]=cover&populate[LatestBlogs][populate]=title"
  );

  const sectionData = {
    title: data?.data.attributes.LatestBlogs.title,
    blogs: data?.data.attributes.LatestBlogs.blogs.data.map((blog: any) => ({
      img: `${strapiUrl}${blog.attributes.cover.data.attributes.url}`,
      title: blog.attributes.title,
      slug: blog.attributes.slug,
      postedAt: convertDate(blog.attributes.createdAt),
    })),
  };

  return (
    <div className='latest_news overflow-hidden'>
      <div className='mb-16 mx-auto w-fit md:w-full md:mx-0 md:mb-24'>
        <Title
          text={sectionData.title.title}
          highlited={sectionData.title.highlighted_title}
          textColor='--black_color'
        />
      </div>
      <div className='latests md:w-[60%] mx-auto'>
        {sectionData.blogs.map((blog: any, index: string) => (
          <FadeRight delay={+index}>
            <Link
              key={index}
              href={`blogs/${blog.slug}`}
              className='blog mb-8'>
              <div className='flex items-center mb-5 md:mb-7 md:gap-7 '>
                <p className='md:text-lg'>Posted At {blog.postedAt}</p>
                <span className='flex-1'></span>
              </div>
              <div className='flex justify-between'>
                <h3 className='text-xl md:text-3xl md:w-[60%]'>{blog.title}</h3>
                <Image
                  className='max-w-32 min-h-36 object-covers  rounded-md'
                  src={blog.img}
                  width={300}
                  height={200}
                  alt='blog image'
                />
              </div>
            </Link>
          </FadeRight>
        ))}
      </div>

      <Link
        href='/blogs'
        className='flex items-center mx-auto w-fit gap-2 py-16 text-xl font-semibold text-[--primary_color] transition hover:scale-105'>
        {" "}
        See All News <PiArrowRightFill className='' />
      </Link>
    </div>
  );
}
