'use client'
import NewsBanner from "@/app/_ui/BlogsBanner";
import "@/app/styles.scss"
import Button from "@/app/_ui/Button";
import Img from "@/public/images/Wavy_Tech-30_Single-02.jpg"
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getServicesData } from "@/app/_lib/data";

export default function ServicePage({ params }: { params: any }) {

    const [sub_service, setSubService] = useState<any>()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const slug = params.slug
    const subSlug = params.subSlug

    // console.log();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getServicesData();
                const services = data.data;
                const parentService = services.find((item: any) => item.attributes.slug == slug)

                console.log(parentService);

                const subServices = parentService.attributes.sousServices;
                const subServiceData = subServices.find((item: any) => item.slug == subSlug)
                setSubService(subServiceData);
            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [slug, subSlug])


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: last {error}</div>;
    if (!sub_service) return <div>error</div>;

    const features = sub_service?.features?.split('\n')

    const imageUrl = `http://localhost:1337${sub_service.img.data.attributes.url}`
    console.log(imageUrl);


    return (
        <div>
            <div className="container px-4  md:px-14 mx-auto">
                <section className="bg-white  my-24 md:my-32">
                    <div className="grid lg:grid-cols-2 gap-24 xl:gap-44 justify-between content-start">

                        <div className="col-span-1">
                            <div className="flex flex-col gap-6 justify-center">
                                <h1 className=" text-4xl lg:text-5xl xl:text-6xl font-bold">{sub_service.title}</h1>
                                <p className="text-[--dark_gray_color] text-lg xl:text-xl mb-4 ">
                                    {sub_service.description}
                                </p>
                                <ul className="flex flex-col gap-4 mb-8">
                                    {
                                        features?.map((feature: any, index: number) => (
                                            <li key={index} className="text-[--dark_gray_color] text-lg xl:text-xl font-semibold flex items-center gap-2"> <FaCircleCheck className="fill-orange-600 text-lg xl:text-xl" /> {feature}</li>
                                        ))
                                    }
                                </ul>
                                <div className="mx-auto md:mx-0">
                                    <Button text="Commencer" href="/contact" type="primary" />
                                </div>
                            </div>
                        </div>

                        <div className=" col-span-1 w-full h-full flex md:justify-end xl:justify-center relative">
                            <Image src={imageUrl} alt="image" className="w-full object-cover h-full px-4" layout="fill" />
                        </div>

                    </div>
                </section>

            </div>

            <div>
                <NewsBanner />
            </div>

        </div>
    );
}