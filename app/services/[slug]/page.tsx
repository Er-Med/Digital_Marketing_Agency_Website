"use client"

import Footer from "@/app/_ui/Footer";
import { Header } from "@/app/_ui/Header";
import NewsBanner from "@/app/_ui/BlogsBanner";
import { useRouter } from "next/router";
import "@/app/styles.scss"
import Hero from "@/app/_ui/Hero";
import Button from "@/app/_ui/Button";
import Img from "@/public/images/Wavy_Tech-30_Single-02.jpg"
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import Services from "@/app/_ui/Services";
import Title from "@/app/_ui/Title";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { baseUrl, getServicesData, getServicesSectionData } from "@/app/_lib/data";


interface Props {
    params: {
        slug: string;
    }
}

interface ServiceData {
    title: string;
    description: string;
    features: string;
    img: {
        data: {
            attributes: {
                url: string
            }
        }
    };
    sousServices: Array<
        {
            id: number;
            title: string;
            description: string;
        }
    >
    button: {
        text: string;
        type: string;
    }

}


export default function ServicePage({ params }: Props) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [serviceData, setServiceData] = useState<ServiceData>()
    const slug = params.slug


    useEffect(() => {
        async function fetchHeaderData() {
            try {
                const data = await getServicesData();
                const services = data.data;
                const currentService = services.find((item: any) => item.attributes.slug == slug)
                setServiceData(currentService.attributes);
            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false)
            }
        }

        fetchHeaderData()
    }, [slug])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: slug {error}</div>;
    if (!serviceData) return <div>error</div>;

    const features = serviceData?.features.split('\n')
    const imageUrl = `http://localhost:1337${serviceData.img.data.attributes.url}`
    const subServices = serviceData.sousServices


    return (
        <div>
            <div className="container px-4  md:px-14 mx-auto">
                <section className="bg-white  my-20 md:my-32">
                    <div className="grid lg:grid-cols-2 gap-24 xl:gap-44 justify-between content-start">

                        <div className="col-span-1">
                            <div className="flex flex-col gap-6 justify-center">
                                <h1 className=" text-4xl lg:text-5xl xl:text-6xl font-bold">{serviceData.title}</h1>
                                <p className="text-[--dark_gray_color] text-lg xl:text-xl "> {serviceData.description}</p>
                                <ul className="flex flex-col gap-4 mb-8">

                                    {
                                        features.map((feature: any, index: number) => (
                                            <li key={index} className="text-[--dark_gray_color] text-lg xl:text-xl font-semibold flex items-center gap-2"> <FaCircleCheck className="fill-orange-600 text-lg xl:text-xl" /> {feature}</li>
                                        ))
                                    }
                                </ul>
                                <div className="mx-auto md:mx-0">
                                    <Button text={serviceData.button.text} href="/contact" type={serviceData.button.type} />
                                </div>
                            </div>
                        </div>

                        <div className=" col-span-1 w-full h-full hidden md:flex md:justify-end xl:justify-center relative">
                            <Image src={imageUrl} alt="service" className=" w-full object-cover aspect-video rounded-lg px-4" layout="fill" />
                        </div>

                    </div>
                </section>
            </div>

            {
                subServices.length > 0 && (
                    <section>
                        <div className=" py-32">
                            <div className="md:w-[90%] xl:w-[70%] 2xl:w-[50%] text-center pb-5 mx-auto mb-14 md:mb-20 rounded-lg ">
                                <Title text="Sous" highlited="Services" textColor="--black_color" />
                            </div>
                            <Services services={subServices} slug={slug} />
                        </div>
                    </section>
                )
            }

        </div>
    );
}