import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";
import { strapiUrl, fetchData, baseUrl } from "../_lib/data";
import { UrlObject } from "url";
export default async function Footer() {

    const res = await fetchData("/footer?populate=*", 'no-store')
    const footerData = res.data.attributes
    const logImg = strapiUrl + res.data.attributes.logo.data.attributes.url


    return (
        <div className="py-16 pt-24 relative">

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-y my-5 py-8 gap-y-7">

                <div className="col-span-full justify-self-center lg:justify-self-start lg:col-auto mb-6 md:mb-0 h-[80px]">
                    <Image src={logImg} alt="Go Brand Logo" className="pt-4 w-full" width={200} height={200} />
                </div>

                <div className="">
                    <nav className="">
                        <h3 className="text-2xl font-bold text-[--primary_color] mb-3  md:mb-6">Pages</h3>
                        <ul className="flex flex-col gap-1   text-[--dark_gray_color]">
                            {
                                footerData.Pages.map((page: { id: number | string, url: string, label: string }) =>
                                    <li key={page.id} className="text-lg font-semibold transition hover:text-[--black_color]"><Link href={page.url}>{page.label}</Link></li>
                                )
                            }
                        </ul>
                    </nav>
                </div>

                <div className="">
                    <h3 className="text-2xl font-bold text-[--primary_color] mb-3  md:mb-6">Location</h3>
                    <p className="font-semibold w-[80%] text-[--dark_gray_color]">{footerData.location}</p>
                </div>

                <div className="col-span-2 md:col-span-1 lg:col-span-2  lg:w-3/4 md:justify-self-end">
                    <h3 className="text-2xl font-bold text-[--primary_color] mb-3  md:mb-6">NewsLatter</h3>
                    <form className="flex md:flex-col md:items-center lg:flex-row lg:items-start gap-2 mb-6 w-full">
                        <input type="text" placeholder="Enter Your Email .." className="rounded-full w-full border px-3 py-3" />
                        <button className="text-white bg-[--primary_color] rounded-full border px-6 py-3 w-fit">Submit</button>
                    </form>
                    <ul className="flex gap-2 md:justify-center lg:justify-start text-[--black_color]">
                        {
                            footerData.social_links.map((media: { platform: string; url: string | UrlObject; }) => {
                                switch (media.platform.toLowerCase()) {
                                    case "facebook":
                                        return (
                                            <li className="text-2xl duration-300 hover:text-[--dark_gray_color]"><Link href={media.url}><FaFacebook /></Link></li>
                                        )
                                    case "instagram":
                                        return (
                                            <li className="text-2xl duration-300 hover:text-[--dark_gray_color]"><Link href={media.url}><FaInstagram /></Link></li>
                                        )
                                    case "twitter":
                                        return (
                                            <li className="text-2xl duration-300 hover:text-[--dark_gray_color]"><Link href={media.url}><RiTwitterXLine /></Link></li>
                                        )
                                    case "linkedin":
                                        return (
                                            <li className="text-2xl duration-300 hover:text-[--dark_gray_color]"><Link href={media.url}><FaLinkedin /></Link></li>
                                        )

                                    default:
                                        break;
                                }
                            })
                        }

                    </ul>
                </div>

            </div>
            <p className="text-center">�� {footerData.copyright}</p>
        </div>
    );
}