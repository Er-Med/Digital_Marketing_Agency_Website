"use client"

import Footer from "../_ui/Footer";
import "@/app/styles.scss"
import { Header } from "../_ui/Header";
import Statistics from "../_ui/Statistics";
import Clients from "../_ui/Clients";
import Hero from "../_ui/Hero";
import Title from "../_ui/Title";
import Image from "next/image";
import img from "@/public/images/Wavy_Tech-30_Single-02.jpg"
import { MdAccessibilityNew } from "react-icons/md";
import NewsBanner from "../_ui/BlogsBanner";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { baseUrl, getAboutPageData } from "../_lib/data";
import FAQ from "../_ui/FAQ";
import Features from "../_ui/Features";

const texts = [
    {
        title: "Qui Nous Sommes",
        text: "Nous sommes une équipe de passionnés du marketing digital et de la communication, dédiée à transformer vos défis en opportunités. Avec une expertise approfondie et une approche innovante, nous nous engageons à vous fournir des solutions sur mesure qui répondent à vos besoins spécifiques et dépassent vos attentes."
    }, {
        title: "Ce Que Nous Faisons",
        text: "Nous offrons une gamme complète de services de marketing digital et de communication, allant de la stratégie à la mise en œuvre. Nos services incluent la production audiovisuelle, le design graphique, le développement web, l'achat médias, le référencement Google, et la gestion des réseaux sociaux. Chaque service est conçu pour maximiser votre impact en ligne et atteindre vos objectifs."
    },
    {
        title: "De l'Ordinaire à l'Extraordinaire",
        text: "Notre objectif est de créer des expériences et des solutions exceptionnelles qui captivent et engagent votre audience. Nous combinons créativité, technologie et expertise pour produire des résultats qui non seulement répondent aux attentes mais les surpassent. Découvrez comment nous transformons des idées en réalisations spectaculaires."
    },
    {
        title: "Pourquoi Nous Choisir",
        text: "Choisir CoBrand, c'est opter pour un partenaire qui comprend vos besoins et s'engage à votre succès. Nous offrons une approche personnalisée, des stratégies basées sur des données concrètes et une équipe dédiée à l'innovation et à l'excellence. Nos résultats parlent d'eux-mêmes et nos clients témoignent de notre impact positif sur leur croissance."
    }
]


const features = [

    {
        "icon": <MdAccessibilityNew />,
        "title": "Innovation",
        "desc": "Nous cherchons constamment de nouvelles façons de résoudre les défis et d’apporter de la valeur."
    },
    {
        "icon": <MdAccessibilityNew />,
        "title": "Innovation",
        "desc": "Nous cherchons constamment de nouvelles façons de résoudre les défis et d’apporter de la valeur."
    },
    {
        "icon": <MdAccessibilityNew />,
        "title": "Innovation",
        "desc": "Nous cherchons constamment de nouvelles façons de résoudre les défis et d’apporter de la valeur."
    }, {
        "icon": <MdAccessibilityNew />,
        "title": "Innovation",
        "desc": "Nous cherchons constamment de nouvelles façons de résoudre les défis et d’apporter de la valeur."
    }, {
        "icon": <MdAccessibilityNew />,
        "title": "Innovation",
        "desc": "Nous cherchons constamment de nouvelles façons de résoudre les défis et d’apporter de la valeur."
    }, {
        "icon": <MdAccessibilityNew />,
        "title": "Innovation",
        "desc": "Nous cherchons constamment de nouvelles façons de résoudre les défis et d’apporter de la valeur."
    },
]

const faq = [
    {
        "quetion": "Are there additional fee ?",
        "answer": "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus nemo minus sit, alias, consequuntur reiciendis quis placeat atque et sint in dolore autem cupiditate omnis sunt veritatis libero. Ducimus! "
    },
    {
        "quetion": "Are there additional fee ?",
        "answer": "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus nemo minus sit, alias, consequuntur reiciendis quis placeat atque et sint in dolore autem cupiditate omnis sunt veritatis libero. Ducimus! "
    },
    {
        "quetion": "Are there additional fee ?",
        "answer": "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus nemo minus sit, alias, consequuntur reiciendis quis placeat atque et sint in dolore autem cupiditate omnis sunt veritatis libero. Ducimus! "
    },
    {
        "quetion": "Are there additional fee ?",
        "answer": "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus nemo minus sit, alias, consequuntur reiciendis quis placeat atque et sint in dolore autem cupiditate omnis sunt veritatis libero. Ducimus! "
    },

]
export default function Page() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [pageData, setPageData] = useState<any>()
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;


    useEffect(() => {
        async function fetchStatisticsData() {
            try {
                const data = await getAboutPageData();
                setPageData(data)

            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false)
            }
        }
        fetchStatisticsData()
    }, [])


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: slug {error}</div>;
    if (!pageData) return <div>error</div>;



    return (
        <div>
            <div className="container px-4  md:px-14 mx-auto">
                <div className="lg:w-[80%] mx-auto">
                    <Hero title={pageData.pageHero.title} desc={pageData.pageHero.desc}
                        btnHref="/contact"
                        btnText={pageData.pageHero.buttonText}
                        btnType={pageData.pageHero.buttonType}
                        titileSize="100px"
                    />
                </div>

                {/* CLIENTS SECTION */}
                <section className="mb-24 lg:mb-32 mt-24 lg:mt-0">
                    <Statistics />
                </section>

                <section className="mb-24 md:mb-32 grid gap-5" >
                    {
                        pageData.simpleSections.map((s: { id: number; title: string; imgData: { src: any; }; }) => (
                            <div className="grid lg:grid-cols-2  gap-y-5  items-center" key={s.id}>
                                <div className={`  ${s.id % 2 !== 0 ? "lg:order-2" : ''}`}>
                                    <h2 className="mb-4 lg:mb-8 text-3xl lg:text-5xl text-center lg:text-start font-bold">{s.title}</h2>
                                    <p className="text-lg lg:text-xl font-medium  mb-10 text-[#4b5563] text-center lg:text-justify border-b pb-4 lg:border-0 lg:pb-0">{s.description}</p>
                                </div>
                                <div className="w-full h-full relative">
                                    <Image src={`${apiUrl}${s.imgData.src}`} alt="about us image" className="hidden lg:block rounded-md  h-full w-full object-fill" layout="fill" />
                                </div>
                            </div>
                        ))
                    }
                </section>

                {/* CLIENTS SECTION */}
                <div className="mb-24">
                    <Clients />
                </div>
            </div>

            {/* FEATURES SECTION */}
            <Features data={pageData.engagementSection} />

            {/* FAQ SECTION*/}
            <FAQ />

            {/* <div>
                <NewsBanner />
            </div> */}
        </div >
    )
}
