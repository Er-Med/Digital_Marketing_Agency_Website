import Image from "next/image";
import { fetchData, strapiUrl } from "../_lib/data";
import * as motion from "framer-motion/client";

export default async function Testimonials() {
  const data = await fetchData(
    "/homepage?populate[0]=Testimonials&populate[1]=Testimonials.images"
  );
  console.log(data);

  const sectionData = data.data.attributes.Testimonials[0];
  console.log(sectionData);
  const imgages = sectionData?.images.data.map((img: any) => {
    return {
      src: strapiUrl + img.attributes.url,
    };
  });

  return (
    <motion.section
      className='relative isolate overflow-hidden shadow-sm  px-6 py-24 sm:py-32 lg:px-8'
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.75 }}>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20'></div>

      <div className='absolute inset-y-0 right-[65%] md:right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center'></div>
      <div className='mx-auto max-w-2xl lg:max-w-4xl'>
        <figure className='mt-10'>
          <blockquote className='text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9'>
            <p>“{sectionData.desc}”</p>
          </blockquote>
          <figcaption className='mt-10'>
            <Image
              src={imgages[1].src}
              width={200}
              height={200}
              alt='person own quote'
              className=' mx-auto w-[95px] h-[95px] rounded-full bg-gradient-to-r p-1 from-orange-500 via-red-600 to-amber-200'
            />
            <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
              <div className='font-semibold text-gray-900'>
                {sectionData.author}
              </div>
              <svg
                viewBox='0 0 2 2'
                width='3'
                height='3'
                aria-hidden='true'
                className='fill-gray-900'>
                <circle
                  cx='1'
                  cy='1'
                  r='1'></circle>
              </svg>
              <div className='text-gray-600'>{sectionData.author_role}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </motion.section>
  );
}
