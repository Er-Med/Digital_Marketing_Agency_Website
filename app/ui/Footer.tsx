import Image from "next/image";
import logo from "@/public/logo.svg"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";
export default function Footer() {
    return (
        <div className="py-16 pt-24">

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-y my-5 py-8 gap-y-7">

                <div className="col-span-full justify-self-center lg:justify-self-start lg:col-auto mb-6 md:mb-0">
                    <Image src={logo} alt="Go Brand Logo" className="pt-4" />
                </div>

                <div className="">
                    <nav className="">
                        <h3 className="text-2xl font-bold text-[--primary_color] mb-3  md:mb-6">Pages</h3>
                        <ul className="flex flex-col gap-1   text-[--dark_gray_color]">
                            <li className="text-lg font-semibold transition hover:text-[--black_color]"><Link href="/">Home</Link></li>
                            <li className="text-lg font-semibold transition hover:text-[--black_color]"><Link href="/about">About</Link></li>
                            <li className="text-lg font-semibold transition hover:text-[--black_color]"><Link href="/work">Work</Link></li>
                            <li className="text-lg font-semibold transition hover:text-[--black_color]"><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="">
                    <h3 className="text-2xl font-bold text-[--primary_color] mb-3  md:mb-6">Location</h3>
                    <p className="font-semibold w-[80%] text-[--dark_gray_color]">741 New South Head Rd, Triple Bay SWFW 3148, New York</p>
                </div>

                <div className="col-span-2 md:col-span-1 lg:col-span-2  lg:w-3/4 md:justify-self-end">
                    <h3 className="text-2xl font-bold text-[--primary_color] mb-3  md:mb-6">NewsLatter</h3>
                    <form className="flex md:flex-col md:items-center lg:flex-row lg:items-start gap-2 mb-6 w-full">
                        <input type="text" placeholder="Enter Your Email .." className="rounded-full w-full border px-3 py-3" />
                        <button className="text-white bg-[--primary_color] rounded-full border px-6 py-3 w-fit">Submit</button>
                    </form>
                    <ul className="flex gap-2 md:justify-center lg:justify-start text-[--black_color]">
                        <li className="text-2xl duration-300 hover:text-[--dark_gray_color]"><Link href="www.instagram.com"><FaInstagram /></Link></li>
                        <li className="text-2xl duration-300 hover:text-[--dark_gray_color]"><Link href=""><FaFacebook /></Link></li>
                        <li className="text-2xl duration-300 hover:text-[--dark_gray_color]"><Link href=""><RiTwitterXLine /></Link></li>
                        <li className="text-2xl duration-300 hover:text-[--dark_gray_color]"><Link href=""><FaLinkedin /></Link></li>
                    </ul>
                </div>

            </div>
            <p className="text-center">�� 2023 Go Brand. All rights reserved.</p>
        </div>
    );
}