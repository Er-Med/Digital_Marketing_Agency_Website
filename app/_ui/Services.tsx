"use client"
import Image from "next/image";
import Title from "./Title";
import projImg from "@/public/images/projImg.png"
import Button from "./Button";
import Link from "next/link";
import { PiArrowRightFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { getServicesSectionData } from "../_lib/data";
import { usePathname } from "next/navigation";
// import {sql} 

interface ServiceAttributes {
    title: string;
    description: string;
    slug: string;
}

interface Service {
    id: number;
    attributes: ServiceAttributes;
}


interface Props {
    services: Array<
        {
            [x: string]: any;
            id: number;
            title: string;
            description: string;
        }
    >
    slug: string;
}

export default function Services({ services, slug }: Props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [servicesData, setServicesData] = useState<Service[] | null>(null)
    const path = usePathname()




    useEffect(() => {
        async function fetchHeaderData() {
            try {
                const data = await getServicesSectionData();
                setServicesData(data.data.attributes.ServicesSection.services.data)
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
    if (!servicesData) return <div>error</div>;

    if (path === '/') return (
        <div className="services">
            <div className="conatiner px-4  md:px-14 mx-auto">
                {
                    (path === "/") ? (
                        <div className="md:w-[90%] xl:w-[70%] 2xl:w-[50%] text-center pb-5 mx-auto mb-14 md:mb-28  rounded-lg ">
                            <Title text={"Our"} highlited="Services" textColor="--black_color" />
                        </div>
                    ) : ""

                }

                <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:w-[90%]  mx-auto gap-y-14 gap-x-16">
                    {
                        servicesData.map((service) => (
                            <div key={service.id} className="mx-auto relative z-40  w-full">

                                <Link href={`/services/${service.attributes.slug}`} className="group flex flex-col justify-start items-start  duration-500 relative  px-4 py-8  rounded-md border-2 border-[--primary_color]  hovered_card w-full">
                                    <div className=" flex flex-col items-center gap-3">
                                        <h2 className="text-[1.7rem] font-bold mb-2 text-[--balck_color]">{service.attributes.title}</h2>
                                        <p className="text-[#333] font-normal text-center text-lg mb-3 line-clamp-2">
                                            {service.attributes.description}
                                        </p>
                                    </div>
                                </Link>


                            </div>
                        ))
                    }
                </div>

                {/* <div className="flex justify-center mt-20">
                    <Button text="See All Project" type="third" />
                </div> */}
            </div>
        </div>
    );

    if (path !== '/') return (
        <div className="services">
            <div className="conatiner px-4  md:px-14 mx-auto">
                <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:w-[90%]  mx-auto gap-y-14 gap-x-16">
                    {
                        services.map((service) => (
                            <div key={service.id} className="mx-auto relative z-40  w-full">

                                <Link href={`/services/${slug}/${service.slug}`} className="group flex flex-col justify-start items-start  duration-500 relative  px-4 py-8  rounded-md border-2 border-[--primary_color]  hovered_card w-full">
                                    <div className=" flex flex-col items-center gap-3">
                                        <h2 className="text-[1.7rem] font-bold mb-2 text-[--balck_color]">{service.title}</h2>
                                        <p className="text-[#333] font-normal text-center text-lg mb-3 line-clamp-2">
                                            {service.description}
                                        </p>
                                    </div>
                                </Link>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
