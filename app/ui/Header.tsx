'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

import { getHeaderData } from '../lib/data';

interface SubService {
    id: string;
    name: string;
    attributes: {
        name: string;
        sous_services?: SubService[];
    }
}

interface NavigationLink {
    id: string;
    label: string;
    url: string;
    subLinks?: {
        sub_services: {
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

    const currentPath = usePathname();

    useEffect(() => {
        async function fetchHeaderData() {
            try {
                const data = await getHeaderData()
                setHeaderData(data)
                const imgUrl = "http://localhost:1337" + data.data.attributes.logo_image.data.attributes.url;

                setNavLinks(data.data.attributes.NavigationLinks)
                setLogoImg(`${imgUrl}`)
            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false)
            }
        }

        fetchHeaderData()
    }, [])

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
                <div onClick={handleMobileBar}>
                    {isOpen ? (
                        <IoClose className="relative z-30 text-[3rem] sm:hidden text-white" />
                    ) : (
                        <FaBarsStaggered className="birgger-icon text-3xl text-[--second_color] sm:hidden" />
                    )}
                </div>
                <ul className={`flex gap-12 ${isOpen ? 'activeList' : ''}`}>
                    {navLinks.map((link) => (
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

                                {/* LEVEL 1  */}
                                <ul className={`absolute -left-4  mt-6 z-50 bg-white rounded-md  shadow-sm divide-y divide-[--light_gray_color] [box-shadow:0_15px_32px_rgba(0,_0,_0,_0.1)] ${isDropdownOpen ? 'flex' : 'hidden'} w-[250px] flex-col`}>
                                    {link.subLinks?.sub_services.data.map((subLink1) => (
                                        <li key={subLink1.id}
                                            className="text-lg relative font-semibold  duration-200 hover:bg-orange-500 hover:first-line:text-white group"
                                            onClick={closeDropdown}
                                        >
                                            <Link href={`/services/${subLink1.id}`} className="py-2 px-4 block ">
                                                {subLink1.attributes.name}
                                            </Link>
                                            {subLink1.attributes.sous_services && (
                                                <ul className="absolute left-[100%] top-[10%] font-semibold text-base divide-y divide-[--light_gray_color] [box-shadow:0_15px_32px_rgba(0,_0,_0,_0.1)] z-50 bg-white rounded-md   hidden group-hover:block min-w-[150px] ">
                                                    {
                                                        subLink1.attributes.sous_services.map((subLink2) => (
                                                            <li key={subLink2.id}
                                                                className="px-4 py-2 duration-200 hover:bg-orange-500 hover:first-line:text-white"
                                                                onClick={closeDropdown}
                                                            >
                                                                <Link href={`/services/${subLink1.id}/${subLink2.id}`} className="">{subLink2.name}</Link></li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                            }
                                        </li>
                                    ))

                                    }
                                </ul>
                                {/* LEVEL 1 */}

                            </li>
                        )
                    ))
                    }
                </ul>
            </nav >
        </header >
    )
}
