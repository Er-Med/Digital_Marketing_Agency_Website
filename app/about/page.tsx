import Footer from "../ui/Footer";
import "@/app/styles.scss"
import { Header } from "../ui/Header";
import Statistics from "../ui/Statistics";
import Clients from "../ui/Clients";
import Hero from "../ui/Hero";
import Title from "../ui/Title";
import Image from "next/image";
import img from "@/public/images/projImg.png"
import { MdAccessibilityNew } from "react-icons/md";
import NewsBanner from "../ui/BlogsBanner";

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
export default function page() {
    return (
        <div>
            <div className="container px-4  md:px-14 mx-auto">
                <div className="lg:w-[80%] mx-auto">
                    <Hero title="About Us" desc="Notre identité est façonnée par notre passion pour l'innovation et notre engagement envers l'excellence"
                        btnHref="/contact"
                        btnText="Join our Team"
                        btnType="primary"
                        titileSize="100px"
                    />
                </div>

                <section className="mb-24 lg:mb-32 mt-24 lg:mt-0">
                    <Statistics />
                </section>

                <section className="mb-24 md:mb-32" >
                    {
                        texts.map((ele, index) => (

                            <div className="flex flex-wrap gap-10 items-center" key={index}>
                                <div className={`flex-1  ${index % 2 !== 0 ? "md:order-2" : ''}`}>
                                    <h2 className="mb-4 md:mb-8 text-3xl md:text-5xl text-center md:text-start font-bold">{ele.title}</h2>
                                    <p className="text-lg md:text-xl font-medium  mb-10 text-[#4b5563] text-center md:text-justify border-b pb-4 md:border-0 md:pb-0">{ele.text}</p>
                                </div>
                                <Image src={img} alt="about us image" className="hidden md:block rounded-md flex-1 aspect-video object-cover w-4/5" />
                            </div>
                        ))
                    }
                </section>


                <div className="mb-24">
                    <Clients />
                </div>
            </div>

            {/* START FEATURES SECTION */}
            <section className="bg-orange-50 py-32">
                <div className="container px-4  md:px-14 mx-auto">
                    <div className="mx-auto md:w-[70%] text-center mb-24">
                        <Title text="Au Cœur de Notre Engagement et de Notre Travail" highlited="Notre Travail" textColor="var(--black_color)" />
                    </div>

                    <div className=" grid grid-cols-1 gap-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

                        {
                            features.map((ele, index) => (
                                <div key={index} className="flex flex-col gap-5 mb-10 items-center ">
                                    <div className="text-[5rem]">
                                        {ele.icon}
                                    </div>
                                    <h3 className="text-2xl font-medium capitalize">{ele.title}</h3>
                                    <p className="text-center">{ele.desc}</p>
                                </div>

                            ))
                        }

                    </div>
                </div>
            </section>
            {/* END FEATURES SECTION */}

            {/* START FAQ SECTION*/}
            <section className="lg:w-[80%] mx-auto py-32">
                <div className="container px-4  md:px-14 mx-auto">
                    <div className="mb-14 md:mb-20 text-center w-full">
                        <Title text=" " highlited="FAQ" />
                    </div>

                    <div className="  mx-auto mt-8 md:w-4/6 divide-y">
                        {
                            faq.map((faq, index) => (
                                <div className="py-8">
                                    <details className=" group" >
                                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                            <h3 className="text-2xl  font-normal"> {faq.quetion}</h3>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="group-open:animate-fadeIn mt-3 text-lg leading-relaxed text-gray-700">{faq.answer}
                                        </p>
                                    </details>
                                </div>
                            ))}
                    </div>
                </div>


            </section >
            {/* END FAQ SECTION */}

            <div>
                <NewsBanner />
            </div>
        </div >
    )
}
