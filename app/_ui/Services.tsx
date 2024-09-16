import Title from "./Title";
import { headers } from "next/headers";
import { fetchData } from "../_lib/data";
import Button from "./Button";
import ScaleUpAnimation from "./animations/ScaleUpAnimation";

interface Props {
  services?: Array<{
    [x: string]: any;
    id: number;
    title: string;
    description: string;
  }>;
  slug?: string;
}

export default async function Services({ services, slug }: Props) {
  const headerList = headers();
  const path = headerList.get("x-current-path");
  const data = await fetchData(
    "/homepage?populate[0]=ServicesSection.title&populate[1]=ServicesSection.services.img&populate[2]=ServicesSection.services.sousServices.img"
  );

  const servicesData = data?.data.attributes.ServicesSection.services.data;

  if (path === "/")
    return (
      <div className='services'>
        {path === "/" ? (
          <div className='md:w-[90%] xl:w-[70%] 2xl:w-[50%] text-center pb-5 mx-auto mb-14 md:mb-28  rounded-lg '>
            <Title
              text={"Our"}
              highlited='Services'
              textColor='--black_color'
            />
          </div>
        ) : (
          ""
        )}

        <div className='grid sm:grid-cols-2 md:grid-cols-3  lg:w-[90%]  mx-auto gap-y-14 gap-x-12'>
          {servicesData?.map((service: any) => (
            <ScaleUpAnimation key={service.id}>
              <div
                key={service.id}
                className='mx-auto relative z-40  w-full shadow-lg bg-white px-6 py-10 rounded-md'>
                <div className=' flex flex-col items-center gap-2 '>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='#F5622D'
                      viewBox='0 0 24 24'
                      className='w-12 h-12 mx-auto'>
                      <path d='M3 13h4v8H3zm6-4h4v12h-4zm6-4h4v16h-4z' />
                    </svg>
                  </div>
                  <h2 className='text-2xl font-bold mb-2 text-[--balck_color] text-center'>
                    {service.attributes.title}
                  </h2>
                  <p className='text-[#333] font-normal text-center text-lg mb-3 line-clamp-2'>
                    {service.attributes.description}
                  </p>

                  {/* <Link
                href={`/services/${service.attributes.slug}`}
                className='group flex flex-col justify-start items-start  duration-500 relative  px-4 py-8  rounded-md border-2 border-[--primary_color]  hovered_card w-full'></Link> */}
                  <div className='scale-[.9]'>
                    <Button
                      text={"Learn More"}
                      type={"second"}
                      href={`/services/${service.attributes.slug}`}
                    />
                  </div>
                </div>
              </div>
            </ScaleUpAnimation>
          ))}
        </div>
      </div>
    );

  if (path !== "/")
    return (
      <div className='services'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3  lg:w-[90%]  mx-auto gap-y-14 gap-x-16'>
          {services?.map((service) => (
            <ScaleUpAnimation key={service.id}>
              <div className='mx-auto relative z-40  w-full shadow-xl   px-6 py-10 rounded-md'>
                <div className=' flex flex-col items-center gap-2 '>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='#F5622D'
                      viewBox='0 0 24 24'
                      className='w-12 h-12 mx-auto'>
                      <path d='M3 13h4v8H3zm6-4h4v12h-4zm6-4h4v16h-4z' />
                    </svg>
                  </div>
                  <h2 className='text-2xl font-bold mb-2 text-[--balck_color] text-center'>
                    {service.title}
                  </h2>
                  <p className='text-[#333] font-normal text-center text-lg mb-3 line-clamp-2'>
                    {service.description}
                  </p>
                  <div className='scale-[.9]'>
                    <Button
                      text={"Learn More"}
                      type={"second"}
                      href={`/services/${slug}/${service.slug}`}
                    />
                  </div>
                </div>
              </div>
            </ScaleUpAnimation>
          ))}
        </div>
      </div>
    );
}
