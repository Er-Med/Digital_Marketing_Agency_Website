import Image from "next/image";
import Link from "next/link";
import { strapiUrl, fetchData } from "../../_lib/data";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

export default async function Footer() {
  const res = await fetchData("/footer?populate=*", "no-store");
  const footerData = res.data.attributes;
  const logoImg = strapiUrl + res.data.attributes.logo.data.attributes.url;

  const socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebook size={20} /> },
    { href: "https://instagram.com", icon: <FaInstagram size={20} /> },
    { href: "https://linkedin.com", icon: <FaLinkedin size={20} /> },
    { href: "https://twitter.com", icon: <RiTwitterXLine size={20} /> },
  ];

  return (
    <footer className='w-full bg-[--bg_color] pt-12'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='py-16 flex justify-between items-center flex-col gap-8 lg:flex-row'>
          <Image
            src={logoImg}
            alt='Website Logo'
            priority
            width={80}
            height={80}
          />
          <ul className='text-lg text-center flex flex-wrap items-center justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500'>
            {footerData.Pages.map((page: any) => (
              <li key={page.id}>
                <Link
                  href={page.url}
                  className='text-[--black_color] font-bold hover:text-gray-400'>
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex space-x-4 sm:justify-center'>
            {/* Add your social media links or icons here */}
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className='w-10 h-10 rounded-full  flex justify-center items-center bg-[--second_color] text-white '
                target='_blank'
                rel='noopener noreferrer'>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className='py-7 border-t border-gray-400'>
          <div className='flex items-center justify-center'>
            <span className='text-gray-400'>
              ©<Link href='https://pagedone.io/'>pagedone</Link>2024, All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
