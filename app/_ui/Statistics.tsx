import { fetchData } from "../_lib/data";
import AnimatedCounter from "./animations/AnimatedCounter";

export default async function Statistics() {
  const data = await fetchData("/Statistics?populate=*");
  const statistics = data?.data;

  return (
    <div className='statistics'>
      <div className=' grid divide-y  md:divide-y-0   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {statistics.map((statistic: any) => (
          <div
            key={statistic.id}
            className='p-4 md:p-6 flex flex-col items-center'>
            <h3 className='head text-[5rem] md:text-[6rem] font-semibold mb-2'>
              <span className='text-4xl'>{statistic.attributes.symbol}</span>
              <AnimatedCounter
                from={0}
                to={statistic.attributes.number}
              />
            </h3>
            <h4 className='text-md md:text-xl text-center font-bold '>
              {statistic.attributes.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
