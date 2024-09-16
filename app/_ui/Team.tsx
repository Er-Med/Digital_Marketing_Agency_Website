import Image from "next/image";
import Button from "./Button";
import { headers } from "next/headers";
import { fetchData, strapiUrl } from "../_lib/data";
import ScaleUpAnimation from "./animations/ScaleUpAnimation";

interface ProfileImage {
  url: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

interface TeamApiResponse {
  data: {
    id: number;
    attributes: {
      name: string;
      job: string;
      profile_image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  }[];
}

export default async function Team() {
  const headerList = headers();
  const pathname = headerList.get("x-current-path") || "";

  // Fetching team members from Strapi API
  const response = (await fetchData(
    "/Team-members?populate=*"
  )) as TeamApiResponse;
  const teamMembers: TeamMember[] = response.data.map(({ id, attributes }) => ({
    id,
    name: attributes.name,
    role: attributes.job,
    imageUrl: `${strapiUrl}${attributes.profile_image.data.attributes.url}`,
  }));

  // Limit displayed members on home or about page
  const isHomeOrAbout = pathname === "/" || pathname === "/about";
  const displayedMembers = isHomeOrAbout
    ? teamMembers.slice(0, 3)
    : teamMembers;

  return (
    <>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-y-9 gap-12 mx-auto z-20 relative'>
        {displayedMembers.map(({ id, name, role, imageUrl }) => (
          <ScaleUpAnimation key={id}>
            <div>
              <div className='bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-4 md:p-5 transition-all duration-500 transform'>
                <div className='flex items-center gap-2 md:gap-4'>
                  <Image
                    className='w-[100px] h-[100px] shadow-lg rounded-full duration-200 m-6 aspect-square p-1 bg-gradient-to-r from-orange-500 via-red-600 to-amber-200'
                    src={imageUrl}
                    alt={`${name}'s image`}
                    width={500}
                    height={500}
                  />
                  <div className='w-fit transition-all transform duration-500'>
                    <h3 className='text-[--black_color] text-[1.1rem] md:text-[1.5rem] font-bold'>
                      {name}
                    </h3>
                    <p className='text-gray-400'>{role}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScaleUpAnimation>
        ))}
      </div>

      {isHomeOrAbout && (
        <div className='w-fit mx-auto mt-16'>
          <Button
            text='All team'
            href='/team'
            type='second'
          />
        </div>
      )}
    </>
  );
}
