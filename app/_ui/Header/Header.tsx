// "use client";

import Link from "next/link";
import Image from "next/image";
import { fetchData, strapiUrl } from "@/app/_lib/data";
import Navbar from "./Navbar";

interface SubService {
  attributes: any;
  id: string;
  name: string;
  slug: string;
  nestedServices?: SubService[];
}
import Transition from "../animations/Transition";
import Button from "../Button";
interface NavigationLink {
  id: string;
  label: string;
  url: string;
  subLinks?: {
    sub_subServices: {
      data: SubService[];
    };
  } | null;
}

export const Header = async () => {
  const data = await fetchData(
    "/Header?populate[logo_image]=*&populate[NavigationLinks][populate][subLinks][populate][sub_subServices][fields][0]=title&populate[NavigationLinks][populate][subLinks][populate][sub_subServices][fields][1]=slug&populate[NavigationLinks][populate][subLinks][populate][sub_subServices][populate][sousServices][fields][0]=slug&populate[NavigationLinks][populate][subLinks][populate][sub_subServices][populate][sousServices][fields][2]=title"
  );

  // Handling data mapping to ensure proper typing and structure
  const navigationLinks: NavigationLink[] =
    data?.data.attributes.NavigationLinks.map((link: any) => ({
      id: link.id,
      label: link.label,
      url: link.url,
      subLinks: link.subLinks,
    }));

  // Find the services link and process its sub-services
  const servicesLink = navigationLinks?.find(
    (link) => link.label.toLowerCase() === "services"
  );

  const serviceSubLinks =
    servicesLink?.subLinks?.sub_subServices.data.map((link) => ({
      id: link.id,
      name: link.attributes.title,
      slug: link.attributes.slug,
      nestedServices: link.attributes.sousServices?.map((s: any) => ({
        id: s.id,
        name: s.title,
        slug: s.slug,
      })),
    })) ?? [];

  const logoImg =
    strapiUrl + data.data.attributes.logo_image.data.attributes.url;

  //  Added a conditional to render the navigation menu and services dropdown
  return (
    <Transition>
      <header className='header flex items-center justify-between pb-4 bt-6 md:py-8  border-b'>
        <div className='logo relative z-30  w-[80px] h-[80px] p-4 md:p-0'>
          <Link href='/'>
            <Image
              src={logoImg}
              alt='Website Logo'
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div>
          <Navbar
            navigationLinks={navigationLinks}
            serviceSubLinks={serviceSubLinks}
          />
        </div>
        <div className=' hidden md:flex'>
          <Button
            text='Contact'
            href='/contact'
            type='primary'
          />
        </div>
      </header>
    </Transition>
  );
};
