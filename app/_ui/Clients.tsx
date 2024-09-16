import Image from "next/image";
import { fetchData, strapiUrl } from "../_lib/data";

interface Clients {
  data: [
    {
      id: number;
      attributes?: {
        image: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
    }
  ];
}

interface ClientsSection {
  id: number;
  title: string;
  clients: Clients;
}

export default async function Clients() {
  const data = await fetchData(
    "/homepage?populate=ClientsSection.clients.image"
  );

  const sectionData = data?.data.attributes?.ClientsSection;

  const clients = sectionData.clients.data;
  return (
    <div className='clients flex flex-col gap-12 overflow-hidden'>
      <h3 className='text-2xl md:text-3xl tracking-[0.2em] md:tracking-[0.3em] text-center text-[--primary_color] font-semibold'>
        {sectionData.title}
      </h3>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-10  md:gap-10 justify-center '>
        {clients?.map((client: any) => (
          <div
            key={client.id}
            className='flex justify-center after:absolute duration-300 h-full'>
            <Image
              src={strapiUrl + client.attributes.image.data.attributes.url}
              className='col-span-1 self-center w-full object-scale-down'
              alt='parttner logo'
              width={client.attributes.image.data.attributes.width}
              height={client.attributes.image.data.attributes.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
