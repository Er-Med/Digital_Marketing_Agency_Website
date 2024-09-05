'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

import { fetchData } from '../_lib/data';

interface SubService {
    id: string;
    name: string;
    attributes: {
        [x: string]: any;
        name: string;
        sous_services?: SubService[];
    }
}

interface NavigationLink {
    id: string;
    label: string;
    url: string;
    slug: string;
    subLinks?: {
        sub_subServices: {
            data: SubService[];
        };
    } | null;
}

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [logoImg, setLogoImg] = useState("");

    const [navigationLinks, setNavigationLinks] = useState<any>()
    const [serviceSubLinks, setServiceSubLinks] = useState<any>()
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL
    // todo: image binding
    const currentPath = usePathname();


    useEffect(() => {
        async function fetchHeaderData() {
            try {
                const res = await fetchData("/Header?populate[logo_image]=*&populate[NavigationLinks][populate][subLinks][populate][sub_subServices][fields][0]=title&populate[NavigationLinks][populate][subLinks][populate][sub_subServices][fields][1]=slug&populate[NavigationLinks][populate][subLinks][populate][sub_subServices][populate][sousServices][fields][0]=slug&populate[NavigationLinks][populate][subLinks][populate][sub_subServices][populate][sousServices][fields][2]=title");

                setLogoImg(baseUrl + res.data.attributes.logo_image.data.attributes.url)

                const navigationLinks = res.data.attributes.NavigationLinks;
                // Map through navigationLinks to create navLinks
                const navLinks = navigationLinks.map((link: any) => ({
                    id: link.id,
                    name: link.label,
                    url: link.url,
                }));
                setNavigationLinks(navLinks)


                // Find the "services" link
                const servicesLink = navigationLinks.find((link: any) => link.label.toLowerCase() === 'services')

                if (servicesLink && servicesLink.subLinks) {
                    // Get sub-services links if they exist
                    const subServicesLinks = servicesLink.subLinks.sub_subServices.data;

                    const subLinks = subServicesLinks.map((link: any) => ({
                        name: link.attributes.title,
                        slug: link.attributes.slug,
                        // Get nested sub-services links if they exist
                        nestedServices: link.attributes.sousServices?.map((s: any) => ({
                            id: s.id,
                            name: s.title,
                            slug: s.slug
                        }))
                    }));
                    setServiceSubLinks(subLinks);

                } else {
                    "Loading..."
                }

            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false)
            }
        }

        fetchHeaderData()
    }, [baseUrl])


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const closeDropdown = () => setIsDropdownOpen(false);

    const handleMobileBar = () => {
        setIsOpen(!isOpen)
        closeDropdown()
    }



    return (
        <header className="header flex items-center justify-between py-8 border-b">
            <div className="logo relative z-30 w-[80px] h-[80px]">
                <Link href="/">
                    <Image src={logoImg} alt="Website Logo" layout="fill" />
                </Link>
            </div>
            <nav className="navbar">
                {/* Mobile Menu */}
                <div onClick={handleMobileBar}>
                    {isOpen ? (
                        <IoClose className="relative z-30 text-[3rem] sm:hidden text-white" />
                    ) : (
                        <FaBarsStaggered className="birgger-icon text-3xl text-[--second_color] sm:hidden" />
                    )}
                </div>

                <ul className={`flex gap-12 ${isOpen ? 'activeList' : ''}`}>
                    {
                        navigationLinks.map((link: any) => {

                            if (link.name.toUpperCase() !== 'SERVICES') {
                                return (
                                    <li
                                        key={link.id}
                                        className={clsx("", {
                                            "active relative cursor-pointer":
                                                (link.url === "/" && currentPath === "/") ||
                                                (link.url !== "/" && currentPath.startsWith(link.url))
                                        })}
                                        onClick={handleMobileBar}
                                    >
                                        <Link href={link.url} className={`text-xl font-[600]`}>
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        key={link.id}
                                        className={clsx("relative cursor-pointer",
                                            { "active relative cursor-pointer": /services\/.+/.test(currentPath) })}
                                        onClick={toggleDropdown}
                                    >
                                        <span className={`text-xl font-[600]`}>
                                            {link.name}
                                        </span>

                                        <ul className={`absolute -left-4  mt-6 z-50 bg-white rounded-md  shadow-sm divide-y divide-[--light_gray_color] [box-shadow:0_15px_32px_rgba(0,_0,_0,_0.1)] ${isDropdownOpen ? 'flex' : 'hidden'} w-[250px] flex-col`}>
                                            {
                                                serviceSubLinks.map((subLink: any) => (
                                                    <li key={subLink.id}
                                                        className="group duration-200 hover:bg-orange-500 hover:first-line:text-white"
                                                        onClick={closeDropdown}
                                                    >
                                                        <Link href={`/services/${subLink.slug}`} className="py-2 px-4 block">{subLink.name}</Link>

                                                        <ul className="absolute left-[100%] top-[10%] font-semibold text-base divide-y divide-[--light_gray_color] [box-shadow:0_15px_32px_rgba(0,_0,_0,_0.1)] z-50 bg-white rounded-md   hidden group-hover:block min-w-[150px] ">
                                                            {
                                                                subLink?.nestedServices?.map((s: any) => (
                                                                    <li key={s.id}
                                                                        className="px-4 py-2 duration-200 hover:bg-orange-500 hover:first-line:text-white"
                                                                        onClick={closeDropdown}
                                                                    >
                                                                        <Link href={`/services/${subLink.slug}/${s.slug}`} className="">{s.name}</Link>

                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                )
                            }
                        })
                    }

                </ul>
            </nav >
        </header >
    )
}
