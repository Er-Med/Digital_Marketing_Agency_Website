'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

import { getHeaderData } from '../_lib/data';

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
    const [headerData, setHeaderData] = useState(null);
    const [logoImg, setLogoImg] = useState("");
    const [navLinks, setNavLinks] = useState<NavigationLink[]>([]);

    const [navigationLinks, setNavigationLinks] = useState<any>()
    const [subLinksOfServicesLink, setSubLinksOfServicesLink] = useState<any>()


    const currentPath = usePathname();

    useEffect(() => {

        function getNavigationLinks() {
            const subLinks = getSubLinksOfServicesLink()
            const links = navLinks.map(link => {
                return { title: link.label, url: link.url, id: link.id, sub: subLinks }
            })
            setNavigationLinks(links)
        }

        function getSubLinksOfServicesLink() {
            const servicesLink = navLinks.find(link => link.label.toUpperCase() === 'SERVICES')
            const subServicesLinks = servicesLink?.subLinks?.sub_subServices.data
            // const subLinks = subServicesLinks?.map(subLink => subLink.attributes.title)
            const subLinks = subServicesLinks?.map(subLink => {
                return {
                    title: subLink.attributes.title,
                    slug: subLink.attributes.slug,
                    subLinks: subLink.attributes.sousServices.map((subService: { title: any; slug: any; }) => {
                        return { title: subService.title, slug: subService.slug }
                    })
                }
            })
            // setSubLinksOfServicesLink(subLinks)
            return subLinks
        }

        // function getSubSubLinksOfServicesLink (){

        // }

        async function fetchHeaderData() {
            try {

                const data = await getHeaderData()
                setHeaderData(data)
                setNavLinks(data.data.attributes.NavigationLinks)
                getNavigationLinks()
                // getSubLinksOfServicesLink()
                // getLogoImage()

                const imgUrl = "http://localhost:1337" + data.data.attributes.logo_image.data.attributes.url;
                setLogoImg(imgUrl)

            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false)
            }
        }

        fetchHeaderData()
    }, [navLinks])


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
            {/* <p>{subLinksOfServicesLink[0].title}</p> */}
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
                        navigationLinks.map((link: any) => (
                            (link.title.toUpperCase() !== 'SERVICES') ? (
                                <li key={link.id} className={clsx("", { "active relative cursor-pointer": currentPath === link.url })}
                                    onClick={handleMobileBar}>
                                    <Link href={link.url} className={`text-xl font-[600]`}>{link.title}</Link>
                                </li>
                            ) : (
                                <li key={link.id} className={clsx("relative cursor-pointer", { "active relative cursor-pointer": /services\/.+/.test(currentPath) })} onClick={toggleDropdown} >
                                    <span className={`text-xl font-[600]`}>
                                        {link.title}
                                    </span>
                                    <ul className={`absolute -left-4  mt-6 z-50 bg-white rounded-md  shadow-sm divide-y divide-[--light_gray_color] [box-shadow:0_15px_32px_rgba(0,_0,_0,_0.1)] ${isDropdownOpen ? 'flex' : 'hidden'} w-[250px] flex-col`}>
                                        {
                                            link.sub.map((subLink: any) => (
                                                <li key={subLink.id}
                                                    className="group duration-200 hover:bg-orange-500 hover:first-line:text-white"
                                                    onClick={closeDropdown}
                                                >
                                                    <Link href={`/services/${subLink.slug}`} className="py-2 px-4 block">{subLink.title}</Link>
                                                    <ul className="absolute left-[100%] top-[10%] font-semibold text-base divide-y divide-[--light_gray_color] [box-shadow:0_15px_32px_rgba(0,_0,_0,_0.1)] z-50 bg-white rounded-md   hidden group-hover:block min-w-[150px] ">
                                                        {
                                                            subLink?.subLinks.map((s: any) => (
                                                                // <li key={s.id}>{s.title}</li>
                                                                <li key={s.id}
                                                                    className="px-4 py-2 duration-200 hover:bg-orange-500 hover:first-line:text-white"
                                                                    onClick={closeDropdown}
                                                                >
                                                                    <Link href={`/services/${subLink.slug}/${s.slug}`} className="">{s.title}</Link>

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
                        ))
                    }


                    {/* {navLinks.map((link) => (
                        link.subLinks === null ? (
                            <li key={link.id} className={clsx("", { "active relative cursor-pointer": currentPath === link.url })} onClick={handleMobileBar}>
                                <Link href={link.url} className={`text-xl font-[600]`}>{link.label}</Link>
                            </li>

                        ) : (
                            <li key={link.id}
                                className={clsx("relative cursor-pointer", { "active relative cursor-pointer": /services\/.+/.test(currentPath) })}
                                onClick={toggleDropdown} >
                                <span className={`text-xl font-[600]`}>
                                    {link.label}
                                </span>

                                <ul className={`absolute -left-4  mt-6 z-50 bg-white rounded-md  shadow-sm divide-y divide-[--light_gray_color] [box-shadow:0_15px_32px_rgba(0,_0,_0,_0.1)] ${isDropdownOpen ? 'flex' : 'hidden'} w-[250px] flex-col`}
                                >
                                    {link.subLinks?.sub_subServices.data.map((subLink) => (
                                        <li key={subLink.id}
                                            className="text-lg relative font-semibold  duration-200 hover:bg-orange-500 hover:first-line:text-white group"
                                            onClick={closeDropdown}
                                        >
                                            <Link href={`/services/${subLink.id}`} className="py-2 px-4 block ">
                                                {subLink.attributes.name}
                                            </Link>

                                            {subLink.attributes.sous_services && (
                                                <ul className="absolute left-[100%] top-[10%] font-semibold text-base divide-y divide-[--light_gray_color] [box-shadow:0_15px_32px_rgba(0,_0,_0,_0.1)] z-50 bg-white rounded-md   hidden group-hover:block min-w-[150px] ">
                                                    {
                                                        subLink.attributes.sous_services.map((sub_subLink) => (
                                                            <li key={sub_subLink.id}
                                                                className="px-4 py-2 duration-200 hover:bg-orange-500 hover:first-line:text-white"
                                                                onClick={closeDropdown}
                                                            >
                                                                <Link href={`/services/${subLink.id}/${sub_subLink.id}`} className="">{sub_subLink.name}</Link>
                        
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                            }
                                        </li>
                                    ))

                                    }
                                </ul>
                                }

                            </li>
                        )
                    ))
                    } */}

                </ul>
            </nav >
        </header >
    )
}
