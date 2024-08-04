'use client'
import Link from "next/link"
import Image from "next/image"
import logoSvg from "@/public/logo.svg"
import { nunito } from "@/app/ui/fonts"
import { FaBarsStaggered } from "react-icons/fa6"
import { useState } from "react"
import { IoClose } from "react-icons/io5"
import { usePathname } from "next/navigation"
export const Header = () => {
    const nunitoFont = nunito.className
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prev => !prev);
    };

    const handleMobileBar = () => {
        setIsOpen(!isOpen)
    }

    const list = [
        {
            id: "1",
            name: "service1",
            sous_services: ""
        },
        {
            id: "2",
            name: "service2",
            sous_services: [
                { id: "1", name: "sous service 1" },
                { id: "2", name: "sous service 2" },
                { id: "3", name: "sous service 3" }
            ]
        },
        {
            id: "3",
            name: "service3",
            sous_services: [
                { id: "1", name: "sous service 1" },
                { id: "2", name: "sous service 2" },
                { id: "3", name: "sous service 3" },
                { id: "4", name: "sous service 4" }
            ]
        },
        {
            id: "4",
            name: "service4",
            sous_services: ""
        }
    ]

    const currentPath = usePathname();
    return (
        <header className="header flex items-center justify-between py-8 border-b">
            <div className="logo relative z-30">
                <Link href="/">
                    <Image src={logoSvg} alt="Website Logo" />
                </Link>
            </div>
            <nav className="navbar">
                <div onClick={handleMobileBar}>
                    {
                        !isOpen ? (<FaBarsStaggered className="birgger-icon text-3xl text-[--second_color] sm:hidden" />) : (<IoClose className="relative z-30 text-[3rem] sm:hidden text-white" />
                        )
                    }
                </div>
                <ul className={`flex gap-12 ${isOpen ? "activeList" : ""}`}>
                    <li className={currentPath === "/" ? "active" : ''} onClick={handleMobileBar}>
                        <Link href="/" className={`${nunitoFont} text-xl font-[600]`}>Home</Link>
                    </li>
                    <li className={currentPath === "/about" ? "active" : ''} onClick={handleMobileBar}>
                        <Link href="/about" className={`${nunitoFont} text-xl font-[600]`}>About</Link>
                    </li>
                    <li className={currentPath === "/services" ? "active relative cursor-pointer" : 'relative cursor-pointer'} onClick={handleDropdownToggle} onBlur={handleDropdownToggle} >
                        <span className={`${nunitoFont} text-xl font-[600]`}>Services</span>
                        {/* Sous list  */}
                        <ul className={`absolute -left-4  mt-6 z-50 bg-white rounded-md  shadow-sm divide-y divide-[--light_gray_color] [box-shadow:0_15px_32px_rgba(0,_0,_0,_0.1)] ${isDropdownOpen ? 'flex' : 'hidden'} w-[250px] flex-col`}>
                            {

                                Array.isArray(list) && list.length > 0 && (
                                    list.map((service, index) => (
                                        <li className="text-lg relative font-semibold py-2 px-4 duration-200 hover:bg-orange-500 hover:first-line:text-white group" key={index}
                                        >
                                            <Link href={`/services/${service.id}`} className=" ">
                                                {service.name}
                                            </Link>
                                            {
                                                Array.isArray(service.sous_services) && service.sous_services.length > 0 && (
                                                    <ul className="absolute left-[100%] top-[10%] font-semibold text-base divide-y divide-[--light_gray_color] [box-shadow:0_15px_32px_rgba(0,_0,_0,_0.1)] z-50 bg-white rounded-md   hidden group-hover:block min-w-[150px] ">
                                                        {
                                                            service.sous_services.map((sousService, index) => (
                                                                <li className="px-4 py-2 duration-200 hover:bg-orange-500 hover:first-line:text-white" key={index}>
                                                                    <Link href={`/services/${service.id}/${sousService.id}`} className="">{sousService.name}</Link></li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                )
                            }
                        </ul>


                        {/* EndSous list  */}
                    </li>
                    <li className={currentPath === "/blogs" ? "active" : ''} onClick={handleMobileBar}>
                        <Link href="/blogs" className={`${nunitoFont} text-xl font-[600]`}>News</Link>
                    </li>
                    <li className={currentPath === "/contact" ? "active" : ''} onClick={handleMobileBar}>
                        <Link href="/contact" className={`${nunitoFont} text-xl font-[600]`}>Contact</Link>
                    </li>
                </ul>
            </nav >
        </header >
    )
}
